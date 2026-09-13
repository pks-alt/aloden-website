import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { deflateRawSync, crc32 } from 'node:zlib';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import net from 'node:net';
import { createCareersHandler, publicCareersConfig, MAX_REQUEST_BYTES } from './handler.mjs';
import { validateResume, MAX_RESUME_BYTES } from './resume.mjs';
import { createGmailDelivery, buildMime } from './gmail.mjs';
import { createSqliteServices, createBotVerifier, createClamScanner } from './services.mjs';
import { createCareersServer } from './runtime.mjs';
const origin='https://www.aloden.com';
// Synthetic fixtures only. Never use real applicants or private resumes in tests/artifacts.
export const PDF=Buffer.from('%PDF-1.7\n1 0 obj\n<</Type /Catalog>>\nendobj\ntrailer\n<</Root 1 0 R>>\n%%EOF\n');
function zip(entries){
  let offset=0;const locals=[],centrals=[];
  for(const [name,text] of entries){
    const data=Buffer.from(text),compressed=deflateRawSync(data),n=Buffer.from(name);
    const local=Buffer.alloc(30);local.writeUInt32LE(0x04034b50);local.writeUInt16LE(20,4);local.writeUInt16LE(8,8);local.writeUInt32LE(crc32(data),14);local.writeUInt32LE(compressed.length,18);local.writeUInt32LE(data.length,22);local.writeUInt16LE(n.length,26);
    const central=Buffer.alloc(46);central.writeUInt32LE(0x02014b50);central.writeUInt16LE(20,6);central.writeUInt16LE(8,10);central.writeUInt32LE(crc32(data),16);central.writeUInt32LE(compressed.length,20);central.writeUInt32LE(data.length,24);central.writeUInt16LE(n.length,28);central.writeUInt32LE(offset,42);
    locals.push(local,n,compressed);centrals.push(central,n);offset+=local.length+n.length+compressed.length;
  }
  const c=Buffer.concat(centrals),end=Buffer.alloc(22);end.writeUInt32LE(0x06054b50);end.writeUInt16LE(entries.length,8);end.writeUInt16LE(entries.length,10);end.writeUInt32LE(c.length,12);end.writeUInt32LE(offset,16);
  return Buffer.concat([...locals,c,end]);
}
const parts=[['[Content_Types].xml','<Types><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>'],['_rels/.rels','<Relationships/>'],['word/document.xml','<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body/></w:document>']];
const DOCX=zip(parts);
function form(opts={}){
  const data=new FormData();
  for(const [k,v] of Object.entries({name:'Test Applicant',email:'applicant@example.test',interest:'software',location:'Test city, country',availability:'one-month',portfolio:'https://example.test/work',introduction:'Synthetic test only',consent:'yes',website:'',turnstileToken:'test-token',...opts.fields})) if(v!==null) data.set(k,v);
  if(opts.file!==null)data.set('resume',new Blob([opts.bytes||PDF],{type:opts.mime||'application/pdf'}),opts.filename||'Test Resume.pdf');
  if(opts.duplicate)data.append('name','Another name');
  return data;
}
function request(opts={}) {return new Request(`${origin}/api/careers/applications`,{method:'POST',headers:{Origin:origin,'Idempotency-Key':opts.id||randomUUID(),...opts.headers},body:form(opts)});}
function harness(overrides={}){
  const rows=new Map(),deliveries=[];let scans=0;
  const s={enabled:true,allowedOrigins:[origin],applicantNoticeUrl:'/applicant-privacy.html',turnstileSiteKey:'site-key-for-tests',rateLimit:async()=>({allowed:true}),verifyBot:async()=>true,scanResume:async()=>{scans++;return {clean:true};},deliver:async p=>{deliveries.push({id:p.applicationId,resume:Buffer.from(p.resume.bytes),candidate:p.candidate});return {providerId:'gmail-123'};},ledger:{reserve(id,f){const r=rows.get(id);if(r&&r.f!==f)return {status:'conflict'};if(r&&r.status!=='failed')return {status:r.status};rows.set(id,{f,status:'processing'});return {status:'reserved'};},mark(id,state){rows.get(id).status=state;}},...overrides};
  return {s,rows,deliveries,scans:()=>scans,run:(r)=>createCareersHandler(s)(r,{clientKey:'192.0.2.1'})};
}
async function expectError(h,r,status,error){const response=await h.run(r);assert.equal(response.status,status);assert.equal((await response.json()).error,error);assert.equal(h.deliveries.length,0);}

test('valid PDF and DOCX have safe server-assigned filenames',()=>{assert.equal(validateResume(PDF,'Resume.pdf','application/pdf').filename,'resume.pdf');assert.equal(validateResume(DOCX,'Resume.docx','').filename,'resume.docx');});
test('type spoofing, malformed PDF, active PDF and zip masquerading as DOCX are rejected',()=>{for(const [b,n,m] of [[PDF,'Resume.exe',''],[Buffer.from('MZ executable'),'Resume.pdf','application/pdf'],[PDF,'Resume.pdf','text/html'],[Buffer.from('%PDF-1.7\n/JavaScript 1\n%%EOF'),'Resume.pdf',''],[Buffer.from('PKinvalid'),'Resume.docx',''],[PDF,'../resume.pdf','']])assert.throws(()=>validateResume(b,n,m));});
test('DOCX rejects missing parts, macros, path traversal, encryption, malformed central directory and compression bombs',()=>{
  for(const entries of [parts.slice(1),[...parts,['word/vbaProject.bin','macro']],[...parts,['../evil.xml','bad']],[...parts,['word/big.xml','a'.repeat(3*1024*1024)]]])assert.throws(()=>validateResume(zip(entries),'x.docx'));
  const enc=Buffer.from(DOCX);enc.writeUInt16LE(1,6);assert.throws(()=>validateResume(enc,'x.docx'));
  assert.throws(()=>validateResume(DOCX.subarray(0,-4),'x.docx'));
});
test('DOCX allows ordinary hyperlinks but not external attached templates',()=>{
  const prefix='<Relationships><Relationship Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/';
  assert.doesNotThrow(()=>validateResume(zip([...parts,['word/_rels/document.xml.rels',prefix+'hyperlink" Target="https://example.test" TargetMode="External"/></Relationships>']]),'x.docx'));
  assert.throws(()=>validateResume(zip([...parts,['word/_rels/document.xml.rels',prefix+'attachedTemplate" Target="https://example.test" TargetMode="External"/></Relationships>']]),'x.docx'));
});
test('complete form accepts only after scan and delivery receipt',async()=>{const h=harness(),id=randomUUID(),r=await h.run(request({id}));assert.equal(r.status,201);assert.deepEqual(await r.json(),{ok:true,status:'accepted',applicationId:id});assert.equal(h.scans(),1);assert.equal(h.deliveries.length,1);assert.deepEqual(h.deliveries[0].resume,PDF);assert.equal(r.headers.get('cache-control'),'no-store');});
test('server accepts a real DOCX container',async()=>{const h=harness();assert.equal((await h.run(request({bytes:DOCX,filename:'resume.docx',mime:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'}))).status,201);});
test('missing services fail closed and public config never returns secrets',async()=>{const h=harness({enabled:false});await expectError(h,request(),503,'service_not_configured');assert.deepEqual(await publicCareersConfig(h.s).json(),{enabled:false});const live=await publicCareersConfig(harness().s).json();assert.equal(live.enabled,true);assert.equal(Object.hasOwn(live,'deliver'),false);});
test('HTTP methods, origin, media type and idempotency-key checks precede processing',async()=>{
  const h=harness();assert.equal((await h.run(new Request(`${origin}/api/careers/applications`))).status,405);
  await expectError(h,request({headers:{Origin:'https://evil.example'}}),403,'origin_not_allowed');
  await expectError(h,request({headers:{Origin:''}}),403,'origin_not_allowed');
  await expectError(h,request({headers:{'Content-Type':'application/json'}}),415,'unsupported_media_type');
  await expectError(h,request({headers:{'Idempotency-Key':'arbitrary'}}),400,'validation_failed');
});
test('missing required fields, invalid enums, duplicate fields, header injection, URL schemes and honeypot fail',async()=>{
  for(const fields of [{name:null},{email:'bad'},{email:'valid@example.test\r\nBcc: stolen@example.test'},{consent:null},{interest:'fake-role'},{availability:'anything'},{location:'x'.repeat(161)},{portfolio:'javascript:alert(1)'},{portfolio:'https://user:pass@example.test'},{website:'spam'},{unknown:'x'}])await expectError(harness(),request({fields}),400,'validation_failed');
  await expectError(harness(),request({duplicate:true}),400,'validation_failed');
});
test('oversized file, oversized request length, empty file and mismatched type fail',async()=>{
  await expectError(harness(),request({bytes:Buffer.alloc(MAX_RESUME_BYTES+1)}),413,'payload_too_large');
  await expectError(harness(),request({headers:{'Content-Length':String(MAX_REQUEST_BYTES+1)}}),413,'payload_too_large');
  await expectError(harness(),request({bytes:Buffer.alloc(0)}),400,'invalid_resume');
  await expectError(harness(),request({filename:'resume.docx'}),400,'invalid_resume');
  await expectError(harness(),request({file:null}),400,'invalid_resume');
});
test('chunked payload is bounded even without content-length',async()=>{
  const h=harness(),r=new Request(`${origin}/api/careers/applications`,{method:'POST',headers:{Origin:origin,'Content-Type':'multipart/form-data; boundary=x','Idempotency-Key':randomUUID()},body:new ReadableStream({start(c){c.enqueue(new Uint8Array(MAX_REQUEST_BYTES));c.enqueue(new Uint8Array(1));c.close();}}),duplex:'half'});
  await expectError(h,r,413,'payload_too_large');
});
test('rate limit, bot failures and missing scanner never deliver',async()=>{
  await expectError(harness({rateLimit:async()=>({allowed:false,retryAfter:200})}),request(),429,'rate_limited');
  await expectError(harness({rateLimit:async()=>{throw Error();}}),request(),503,'security_check_unavailable');
  await expectError(harness({verifyBot:async()=>false}),request(),400,'bot_verification_failed');
  await expectError(harness({scanResume:async()=>{throw Error();}}),request(),503,'security_check_unavailable');
  await expectError(harness({scanResume:async()=>({clean:false})}),request(),422,'unsafe_resume');
  await expectError(harness({scanResume:null}),request(),503,'service_not_configured');
});
test('idempotent retry returns one accepted receipt without a second email; changed content conflicts',async()=>{const h=harness(),id=randomUUID();assert.equal((await h.run(request({id}))).status,201);assert.equal((await h.run(request({id}))).status,200);assert.equal(h.deliveries.length,1);assert.equal((await h.run(request({id,fields:{name:'Changed'}}))).status,409);});
test('ambiguous delivery is held for reconciliation and not automatically retried',async()=>{let calls=0;const h=harness({deliver:async()=>{calls++;throw new Error('timeout');}}),id=randomUUID();await expectError(h,request({id}),503,'delivery_unconfirmed');await expectError(h,request({id}),503,'delivery_unconfirmed');assert.equal(calls,1);});
test('definite provider rejection can be retried safely',async()=>{let calls=0;const h=harness({deliver:async()=>{calls++;if(calls===1)throw Object.assign(Error(),{definitive:true});return {providerId:'ok'};}}),id=randomUUID();assert.equal((await h.run(request({id}))).status,503);assert.equal((await h.run(request({id}))).status,201);assert.equal(calls,2);});
test('missing delivery receipt is never success',async()=>{await expectError(harness({deliver:async()=>({})}),request(),503,'delivery_unconfirmed');});
test('MIME has fixed recipient, safe attachment name, actual attachment bytes and reply-to',()=>{const h={applicationId:randomUUID(),candidate:{name:'Tést Candidate',email:'applicant@example.test',interest:'Software',location:'Test',availability:'Now',portfolio:'',introduction:'<script>not rendered</script>'},resume:{bytes:PDF,filename:'resume.pdf',contentType:'application/pdf'},receivedAt:'2026-09-12T12:00:00Z'};const mime=buildMime(h,'careers@aloden.com');assert(mime.includes('To: hr@aloden.com\r\n'));assert(mime.includes('Reply-To: applicant@example.test'));assert(mime.includes('filename="resume.pdf"'));assert(!mime.includes('<script>'));assert.throws(()=>buildMime({...h,candidate:{...h.candidate,email:'x@example.test\r\nBcc: x@evil.test'}},'careers@aloden.com'));});
test('Gmail adapter refreshes send token and posts base64url MIME; caches short-lived token',async()=>{const calls=[];const send=createGmailDelivery({clientId:'id',clientSecret:'secret',refreshToken:'refresh',sender:'careers@aloden.com',fetchImpl:async(url,opts)=>{calls.push({url,opts});return new Response(JSON.stringify(url.includes('oauth2')?{access_token:'access',expires_in:3600}:{id:'message-id'}),{status:200});}});const payload={applicationId:randomUUID(),candidate:{name:'Test',email:'test@example.test',interest:'Software',location:'Test',availability:'Now'},resume:{bytes:PDF,filename:'resume.pdf',contentType:'application/pdf'},receivedAt:new Date().toISOString()};assert.deepEqual(await send(payload),{providerId:'message-id'});await send(payload);assert.equal(calls.length,3);const raw=JSON.parse(calls[1].opts.body).raw;assert.match(Buffer.from(raw,'base64url').toString(),/To: hr@aloden.com/);assert.equal(calls[1].opts.headers.Authorization,'Bearer access');});
test('Gmail send timeouts are explicitly ambiguous',async()=>{const send=createGmailDelivery({clientId:'id',clientSecret:'secret',refreshToken:'refresh',sender:'careers@aloden.com',fetchImpl:async url=>{if(url.includes('oauth2'))return new Response(JSON.stringify({access_token:'token'}));throw Error('timeout');}});await assert.rejects(send({applicationId:randomUUID(),candidate:{email:'test@example.test'},resume:{bytes:PDF,filename:'resume.pdf',contentType:'application/pdf'},receivedAt:new Date().toISOString()}),e=>e.definitive===false);});
test('Turnstile checks success, hostname AND action',async()=>{for(const reply of [{success:false},{success:true,hostname:'evil.test',action:'careers_application'},{success:true,hostname:'www.aloden.com',action:'other'},{success:true,hostname:'www.aloden.com',action:'careers_application'}]){const verify=createBotVerifier('secret',async()=>new Response(JSON.stringify(reply)));assert.equal(await verify({token:'t',hostname:'www.aloden.com',action:'careers_application'}),reply.success&&reply.hostname==='www.aloden.com'&&reply.action==='careers_application');}});
test('SQLite ledger persists idempotency across restarts; limits are durable',()=>{const dir=mkdtempSync(path.join(process.env.CAREERS_TEST_TMP || tmpdir(),'aloden-qa-'));try{const filename=path.join(dir,'state.sqlite'),salt='x'.repeat(32),id=randomUUID();let s=createSqliteServices(filename,salt);assert.equal(s.ledger.reserve(id,'fingerprint').status,'reserved');s.ledger.mark(id,'accepted','id');for(let i=0;i<10;i++)assert.equal(s.rateLimit('192.0.2.1').allowed,true);s.close();s=createSqliteServices(filename,salt);assert.equal(s.ledger.reserve(id,'fingerprint').status,'accepted');assert.equal(s.ledger.reserve(id,'changed').status,'conflict');assert.equal(s.rateLimit('192.0.2.1').allowed,false);s.close();}finally{rmSync(dir,{recursive:true,force:true});}});
test('ClamAV adapter streams bytes and accepts only a clean result',async()=>{for(const result of ['stream: OK\0','stream: Synthetic-Signature FOUND\0','stream: ERROR\0']){const server=net.createServer(socket=>{let data=Buffer.alloc(0);socket.on('data',part=>{data=Buffer.concat([data,part]);if(data.length>=10+4+PDF.length+4){assert(data.subarray(0,10).equals(Buffer.from('zINSTREAM\0')));socket.end(result);}});});await new Promise(r=>server.listen(0,'127.0.0.1',r));const scan=createClamScanner({port:server.address().port});try{if(result.includes('ERROR'))await assert.rejects(scan(PDF));else assert.equal((await scan(PDF)).clean,result.includes('OK'));}finally{await new Promise(r=>server.close(r));}}});
test('reference runtime exposes config and processes real multipart HTTP with mocked delivery',async()=>{const h=harness(),server=createCareersServer({services:h.s});await new Promise(r=>server.listen(0,'127.0.0.1',r));const base=`http://127.0.0.1:${server.address().port}`;try{assert.equal((await (await fetch(`${base}/api/careers/config`)).json()).enabled,true);const r=await fetch(`${base}/api/careers/applications`,{method:'POST',headers:{Origin:origin,'Idempotency-Key':randomUUID()},body:form()});assert.equal(r.status,201);assert.equal(h.deliveries.length,1);assert.equal((await fetch(`${base}/server/careers/runtime.mjs`)).status,404);}finally{server.closeAllConnections();await new Promise(r=>server.close(r));}});
