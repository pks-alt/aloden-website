/* Explicit, create-only import. Never publishes or overwrites an HR draft. */
import fs from 'node:fs';
import path from 'node:path';
import {createJobStore,JOB_FIELDS} from '../server/careers/jobs-store.mjs';
const file=process.env.CAREERS_JOBS_DB;
if(!file||!path.isAbsolute(file)||file.startsWith(path.resolve('preview')+path.sep))throw Error('Set CAREERS_JOBS_DB to a private absolute path outside the webroot.');
const store=createJobStore(file);
try{
  const {jobs}=JSON.parse(fs.readFileSync('preview/data/careers-openings.json','utf8'));
  for(const source of jobs){const record=store.importDraft(source.id,Object.fromEntries(JOB_FIELDS.map(k=>[k,source[k]||''])), 'approved-source-import');console.log(`${record.id}: retained as ${record.status}; no publish was performed.`);}
}finally{store.closeDb();}
