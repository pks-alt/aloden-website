/** Job authoring store. Drafts and last-published snapshots are deliberately separate. */
import { DatabaseSync } from 'node:sqlite';
import { randomUUID } from 'node:crypto';
export const JOB_ID = /^ald-[a-f0-9]{12}$/;
export const DEPARTMENTS = ['quality','software','ai','product','platform','delivery','early-career'];
export const WORK_MODELS = ['remote','hybrid','onsite'];
export const EMPLOYMENT_TYPES = ['FULL_TIME','FULL_TIME_OR_CONTRACT','PART_TIME','CONTRACTOR','INTERN'];
export const JOB_FIELDS = ['title','department','entity','workModel','employmentType','city','region','country','eligibleCountries','summary','responsibilities','requirements','preferred','benefits','currency','salaryMin','salaryMax','salaryUnit','expiresAt','experience','joining','focus','workOn','profile'];
const limits = {title:100,department:30,entity:150,workModel:20,employmentType:20,city:100,region:100,country:2,eligibleCountries:150,summary:1000,responsibilities:6000,requirements:6000,preferred:4000,benefits:2500,currency:3,salaryMin:20,salaryMax:20,salaryUnit:10,expiresAt:24,experience:120,joining:150,focus:200,workOn:4000,profile:2000};
export function problem(code,status=400,details=[]) {return Object.assign(new Error(code),{status,details});}
export function countryName(code) {try {return new Intl.DisplayNames(['en'],{type:'region'}).of(code);}catch{return code;}}
export function cleanJob(input) {
  if(!input || Array.isArray(input) || typeof input!=='object' || Object.keys(input).some(k=>!JOB_FIELDS.includes(k)))throw problem('invalid_job');
  const value={};
  for(const key of JOB_FIELDS){
    const text=input[key] ?? '';
    if(typeof text!=='string' || text.length>limits[key] || /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(text))throw problem('invalid_job',400,[key]);
    value[key]=text.trim();
  }
  if(!value.title)throw problem('invalid_job',400,['title']);
  for(const [key,allowed] of [['department',DEPARTMENTS],['workModel',WORK_MODELS],['employmentType',EMPLOYMENT_TYPES],['salaryUnit',['HOUR','MONTH','YEAR']]])if(value[key]&&!allowed.includes(value[key]))throw problem('invalid_job',400,[key]);
  value.country=value.country.toUpperCase();value.currency=value.currency.toUpperCase();
  value.eligibleCountries=[...new Set(value.eligibleCountries.toUpperCase().split(',').map(s=>s.trim()).filter(Boolean))].join(',');
  for(const code of [value.country,...value.eligibleCountries.split(',')].filter(Boolean))if(!/^[A-Z]{2}$/.test(code)||countryName(code)===code)throw problem('invalid_job',400,['country']);
  return value;
}
export function publicationIssues(v,now=Date.now()) {
  const missing=['title','department','entity','workModel','employmentType','summary','responsibilities','requirements','benefits','currency','salaryMin','salaryMax','salaryUnit','expiresAt'].filter(k=>!v[k]);
  if(v.workModel==='remote'){if(!v.eligibleCountries)missing.push('eligibleCountries');}
  else {if(!v.city)missing.push('city');if(!v.country)missing.push('country');}
  if(!/^[A-Z]{3}$/.test(v.currency))missing.push('currency');
  const min=Number(v.salaryMin),max=Number(v.salaryMax);
  if(!/^\d+(\.\d{1,2})?$/.test(v.salaryMin)||!Number.isFinite(min)||min<0)missing.push('salaryMin');
  if(!/^\d+(\.\d{1,2})?$/.test(v.salaryMax)||!Number.isFinite(max)||max<min||max>1e9)missing.push('salaryMax');
  const expiry=Date.parse(`${v.expiresAt}T23:59:59Z`);
  if(!/^\d{4}-\d{2}-\d{2}$/.test(v.expiresAt)||!Number.isFinite(expiry)||new Date(expiry).toISOString().slice(0,10)!==v.expiresAt||expiry<=now||expiry>now+366*86400000)missing.push('expiresAt');
  return [...new Set(missing)];
}
export function isJobOpen(row,now=Date.now()) {return row?.status==='published'&&row.live&&Date.parse(`${row.live.expiresAt}T23:59:59Z`)>now;}
export function createJobStore(filename,{now=Date.now}={}) {
  const db=new DatabaseSync(filename);
  db.exec(`PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000;
    CREATE TABLE IF NOT EXISTS job_posts(id TEXT PRIMARY KEY, version INTEGER NOT NULL, status TEXT NOT NULL, draft TEXT NOT NULL, live TEXT, updated TEXT NOT NULL, posted TEXT);
    CREATE TABLE IF NOT EXISTS job_audit(seq INTEGER PRIMARY KEY AUTOINCREMENT, job_id TEXT NOT NULL, action TEXT NOT NULL, actor TEXT NOT NULL, version INTEGER NOT NULL, at TEXT NOT NULL);`);
  const transaction=fn=>{db.exec('BEGIN IMMEDIATE');try{const r=fn();db.exec('COMMIT');return r;}catch(e){db.exec('ROLLBACK');throw e;}};
  const parse=r=>r?{id:r.id,version:r.version,status:r.status,draft:JSON.parse(r.draft),live:r.live?JSON.parse(r.live):null,updatedAt:r.updated,datePosted:r.posted}:null;
  const get=id=>JOB_ID.test(id||'')?parse(db.prepare('SELECT * FROM job_posts WHERE id=?').get(id)):null;
  function save(row,actor,action){
    row.updatedAt=new Date(now()).toISOString();
    db.prepare('INSERT INTO job_posts VALUES(?,?,?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET version=excluded.version,status=excluded.status,draft=excluded.draft,live=excluded.live,updated=excluded.updated,posted=excluded.posted').run(row.id,row.version,row.status,JSON.stringify(row.draft),row.live?JSON.stringify(row.live):null,row.updatedAt,row.datePosted);
    db.prepare('INSERT INTO job_audit(job_id,action,actor,version,at) VALUES(?,?,?,?,?)').run(row.id,action,actor,row.version,row.updatedAt);
    return row;
  }
  function mutate(id,version,actor,action,fn){return transaction(()=>{const row=get(id);if(!row)throw problem('job_not_found',404);if(!Number.isInteger(version)||row.version!==version)throw problem('version_conflict',409);fn(row);row.version++;return save(row,actor,action);});}
  return {
    get,
    importDraft(id,input,actor){if(!JOB_ID.test(id))throw problem('invalid_id');const draft=cleanJob(input);return transaction(()=>get(id)||save({id,version:1,status:'draft',draft,live:null,datePosted:null},actor,'import_draft'));},
    list(){return db.prepare('SELECT * FROM job_posts ORDER BY updated DESC,id').all().map(parse);},
    create(input,actor){const draft=cleanJob(input);return transaction(()=>save({id:`ald-${randomUUID().replaceAll('-','').slice(0,12)}`,version:1,status:'draft',draft,live:null,datePosted:null},actor,'create'));},
    edit(id,version,input,actor){const draft=cleanJob(input);return mutate(id,version,actor,'save_draft',r=>{r.draft=draft;});},
    publish(id,version,actor,approved){if(approved!==true)throw problem('approval_required');return mutate(id,version,actor,'publish',r=>{const issues=publicationIssues(r.draft,now());if(issues.length)throw problem('publication_incomplete',422,issues);r.status='published';r.datePosted ||= new Date(now()).toISOString();r.live={...r.draft,liveVersion:r.version+1,publishedAt:new Date(now()).toISOString()};});},
    close(id,version,actor){return mutate(id,version,actor,'close',r=>{if(!r.live)throw problem('not_published');r.status='closed';});},
    duplicate(id,version,actor){return transaction(()=>{const r=get(id);if(!r)throw problem('job_not_found',404);if(r.version!==version)throw problem('version_conflict',409);return save({id:`ald-${randomUUID().replaceAll('-','').slice(0,12)}`,version:1,status:'draft',draft:{...r.draft,title:`${r.draft.title.slice(0,85)} (copy)`},live:null,datePosted:null},actor,'duplicate');});},
    applicationReference(id){const r=get(id);return r?.live?{status:isJobOpen(r,now())?200:410,job:publicJob(r)}:{status:404};},
    publicList(){return this.list().filter(r=>isJobOpen(r,now())).map(publicJob);},
    publicGet(id){const r=get(id);if(!r||!r.live)return {status:404};return isJobOpen(r,now())?{status:200,job:publicJob(r)}:{status:410,job:{id:r.id,title:r.live.title}};},
    audit(id){return db.prepare('SELECT action,actor,version,at FROM job_audit WHERE job_id=? ORDER BY seq DESC LIMIT 30').all(id);},
    closeDb(){db.close();}
  };
}
export function publicJob(r){const {liveVersion,publishedAt,...content}=r.live;return {...content,id:r.id,datePosted:r.datePosted,updatedAt:publishedAt||r.updatedAt,version:liveVersion||r.version};}
