import { inflateRawSync, crc32 } from 'node:zlib';
export const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const fail = () => { throw new Error('invalid_resume'); };

/** Conservative file-structure checks, not a malware scanner. A clean scanner verdict is also mandatory. */
export function validateResume(bytes, filename, mime = '') {
  if (!Buffer.isBuffer(bytes)) bytes = Buffer.from(bytes);
  if (!bytes.length || bytes.length > MAX_RESUME_BYTES || typeof filename !== 'string' || filename.length > 200 || /[\x00-\x1f\x7f/\\]/.test(filename)) fail();
  const ext = /\.([a-z]+)$/i.exec(filename)?.[1].toLowerCase();
  const types = { pdf: 'application/pdf', docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' };
  if (!types[ext] || (mime && ![types[ext], 'application/octet-stream'].includes(mime))) fail();
  if (ext === 'pdf') {
    if (!/^%PDF-(1\.[0-7]|2\.0)[\r\n]/.test(bytes.subarray(0, 10).toString('latin1')) || !/%%EOF\s*$/.test(bytes.subarray(-2048).toString('latin1'))) fail();
    // Reject obvious active/encrypted PDFs. This is defense in depth; encoded threats require scanning.
    if (/\/(JavaScript|JS|Launch|EmbeddedFile|RichMedia|Encrypt)\b/i.test(bytes.toString('latin1'))) fail();
  } else {
    validateDocx(bytes);
  }
  return { filename: `resume.${ext}`, contentType: types[ext], bytes };
}
function validateDocx(bytes) {
  // Parse bounded ZIP structures without extracting filenames to disk.
  try {
    let end = -1;
    for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 65557); i--) if (bytes.readUInt32LE(i) === 0x06054b50 && i + 22 + bytes.readUInt16LE(i + 20) === bytes.length) { end = i; break; }
    if (end < 0 || bytes.readUInt16LE(end + 4) || bytes.readUInt16LE(end + 6)) fail();
    const entries = bytes.readUInt16LE(end + 10), count = bytes.readUInt16LE(end + 8);
    const centralSize = bytes.readUInt32LE(end + 12), offset = bytes.readUInt32LE(end + 16);
    if (entries !== count || entries < 3 || entries > 512 || offset + centralSize !== end) fail();
    let pos = offset, expanded = 0;
    const names = new Set(), parts = new Map(), spans = [];
    for (let index = 0; index < entries; index++) {
      if (bytes.readUInt32LE(pos) !== 0x02014b50) fail();
      const flags = bytes.readUInt16LE(pos + 8), method = bytes.readUInt16LE(pos + 10);
      const compressed = bytes.readUInt32LE(pos + 20), size = bytes.readUInt32LE(pos + 24);
      const nameLen = bytes.readUInt16LE(pos + 28), extraLen = bytes.readUInt16LE(pos + 30), commentLen = bytes.readUInt16LE(pos + 32);
      const local = bytes.readUInt32LE(pos + 42);
      if (flags & 1 || ![0,8].includes(method) || !nameLen || size > 8 * 1024 * 1024 || size > Math.max(compressed * 200, 65536)) fail();
      expanded += size;
      if (expanded > 25 * 1024 * 1024 || pos + 46 + nameLen + extraLen + commentLen > end) fail();
      const nameBytes = bytes.subarray(pos + 46, pos + 46 + nameLen);
      const name = nameBytes.toString('utf8');
      if (names.has(name) || /(^\/|\\|(^|\/)\.\.(\/|$)|[\x00-\x1f\ufffd])/.test(name) || /(^|\/)(vbaProject\.bin|embeddings|activeX)(\/|$)/i.test(name)) fail();
      names.add(name);
      if (local + 30 > offset || bytes.readUInt32LE(local) !== 0x04034b50 || bytes.readUInt16LE(local + 6) !== flags || bytes.readUInt16LE(local + 8) !== method) fail();
      const ln = bytes.readUInt16LE(local + 26), le = bytes.readUInt16LE(local + 28);
      if (!bytes.subarray(local + 30, local + 30 + ln).equals(nameBytes)) fail();
      const dataStart = local + 30 + ln + le, dataEnd = dataStart + compressed;
      if (dataEnd > offset || spans.some(([s,e]) => local < e && dataEnd > s)) fail();
      spans.push([local, dataEnd]);
      // Decompress every bounded entry to verify the advertised expanded sizes.
      const raw = bytes.subarray(dataStart, dataEnd);
      const data = method === 8 ? inflateRawSync(raw, { maxOutputLength: 8 * 1024 * 1024 }) : raw;
      if (data.length !== size || crc32(data) !== bytes.readUInt32LE(pos + 16)) fail();
      if (name.endsWith('.xml') || name.endsWith('.rels')) {
        const xml = data.toString('utf8');
        if (/<!DOCTYPE|<!ENTITY|macroEnabled|vbaProject/i.test(xml)) fail();
        if (name.endsWith('.rels')) for (const rel of xml.matchAll(/<Relationship\b[^>]*>/g)) {
          const tag = rel[0];
          if (/TargetMode\s*=\s*["']External["']/i.test(tag) && (!/Type\s*=\s*["'][^"']*\/hyperlink["']/i.test(tag) || !/Target\s*=\s*["'](?:https?:|mailto:)/i.test(tag))) fail();
        }
        if (['[Content_Types].xml','word/document.xml'].includes(name)) parts.set(name,xml);
      }
      pos += 46 + nameLen + extraLen + commentLen;
    }
    if (pos !== end || !names.has('_rels/.rels') || !parts.get('[Content_Types].xml')?.includes('application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml') || !/<w:document\b/.test(parts.get('word/document.xml') || '')) fail();
  } catch { fail(); }
}
