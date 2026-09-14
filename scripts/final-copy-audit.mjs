import fs from 'node:fs';
import path from 'node:path';

const preview = path.resolve('preview');
const publicPages = [
  'index.html','built-by-aloden.html','capabilities.html','ai-product-engineering.html',
  'product-modernization.html','agentic-ai.html','voice-ai-engineering.html','healthcare-ai.html',
  'company.html','careers.html','start-project.html','privacy.html','terms.html','404.html'
];
const supportScripts = ['start-project-form.js','careers-application.js','careers-jobs.js','app.js'];
const suspect = /\b(unavailable|preview|prototype|placeholder|temporary|internal|review snapshot|reviewed|demo only|not configured|coming soon|to be confirmed|published as they open|future consideration|currently unavailable|not available yet|technical|developer|configuration)\b/i;
const strip = html => html
  .replace(/<script[\s\S]*?<\/script>/gi,' ')
  .replace(/<style[\s\S]*?<\/style>/gi,' ')
  .replace(/<[^>]+>/g,' ')
  .replace(/&amp;/g,'&').replace(/&nbsp;/g,' ')
  .replace(/\s+/g,' ').trim();
const report = [];
for (const file of publicPages) {
  const full = path.join(preview,file);
  if (!fs.existsSync(full)) continue;
  const raw = fs.readFileSync(full,'utf8');
  const text = strip(raw);
  const sentences = text.split(/(?<=[.!?])\s+/).map(s=>s.trim()).filter(Boolean);
  const hits = sentences.filter(s=>suspect.test(s));
  report.push(`\n## ${file}\n`);
  if (!hits.length) report.push('No suspect public-copy phrases found.\n');
  else hits.forEach(h=>report.push(`- ${h}\n`));
}
for (const file of supportScripts) {
  const full = path.join(preview,file);
  if (!fs.existsSync(full)) continue;
  const lines = fs.readFileSync(full,'utf8').split('\n');
  const hits = lines.map((line,i)=>({line:line.trim(),n:i+1})).filter(x=>suspect.test(x.line));
  report.push(`\n## ${file} (runtime/fallback copy)\n`);
  if (!hits.length) report.push('No suspect runtime-copy phrases found.\n');
  else hits.forEach(h=>report.push(`- L${h.n}: ${h.line}\n`));
}
fs.mkdirSync('qa-artifacts',{recursive:true});
fs.writeFileSync('qa-artifacts/final-copy-audit.md',report.join(''));
console.log(report.join(''));
