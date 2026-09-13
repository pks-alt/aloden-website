import fs from 'node:fs';
import { json } from './handler.mjs';
import { JOB_ID, problem } from './jobs-store.mjs';
import { roleContent, esc, jobSchema, jobRow } from '../../preview/careers-job-shared.mjs';
const MAX_JSON=32768;
async function body(request){
  if(!/^application\/json(?:;|$)/i.test(request.headers.get('content-type')||''))throw problem('json_required',415);
  let size=0;const chunks=[];
  for await(const c of request.body||[]){size+=c.byteLength;if(size>MAX_JSON)throw problem('request_too_large',413);chunks.push(c);}
  try {const b=JSON.parse(Buffer.concat(chunks).toString('utf8'));if(!b||Array.isArray(b)||typeof b!=='object')throw Error();return b;}catch{throw problem('invalid_json');}
}
export function renderRole(template,job,origin,{preview=false,closed=false,review=false,base='/'}={}){
  const title=closed?'Applications closed':job.title;
  const description=closed?'This opportunity is no longer accepting applications.':job.summary;
  const canonical=`${origin}/jobs/${job.id}`;
  const metadata=`<title>${esc(title)} | Aloden Careers</title><meta name="description" content="${esc(description)}"><meta name="robots" content="${preview||closed||review?'noindex,nofollow':'index,follow'}"><link rel="canonical" href="${esc(canonical)}"><meta property="og:title" content="${esc(title)} | Aloden Careers"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${esc(canonical)}"><meta property="og:type" content="website"><meta property="og:image" content="${origin}/assets/aloden-social-share.png"><meta name="twitter:card" content="summary_large_image">${!preview&&!closed&&!review?`<script type="application/ld+json">${JSON.stringify(jobSchema(job,origin)).replaceAll('<','\\u003c')}</script>`:''}`;
  const content=closed?`<div class="jr-closed"><div class="cr-ey">APPLICATIONS CLOSED</div><h1>This opportunity is no longer open.</h1><p>You can explore our current roles or send a general introduction.</p><a class="btn primary" href="careers.html#opportunities">View current openings →</a></div>`:roleContent(job,{preview,review});
  return template.replace('<!-- ROLE_META_START -->',`<base href="${esc(base)}">${metadata}<!-- ROLE_META_START -->`).replace(/<!-- ROLE_META_START -->[\s\S]*?<!-- ROLE_META_END -->/,'').replace(/<!-- ROLE_CONTENT_START -->[\s\S]*?<!-- ROLE_CONTENT_END -->/,content).replace('<body ', '<body data-role-rendered="true" ');
}
export function createJobsRouter({store,auth,origin,templatePath,careersPath}){
  const template=fs.readFileSync(templatePath,'utf8');
  const careersTemplate=careersPath?fs.readFileSync(careersPath,'utf8'):null;
  const html=(content,status=200,privatePage=false)=>new Response(content,{status,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'same-origin','X-Frame-Options':'DENY',...(privatePage?{'X-Robots-Tag':'noindex, nofollow'}:{})}});
  return async(request,context={})=>{
    const url=new URL(request.url),path=url.pathname;
    try {
      if(path==='/careers.html'&&request.method==='GET'&&careersTemplate){const jobs=store.publicList();return html(careersTemplate.replace(/<!-- JOBS_SNAPSHOT_START -->[\s\S]*?<!-- JOBS_SNAPSHOT_END -->/,renderBoardSnapshot(jobs,false)));}
      if(path.startsWith('/auth/careers/')||['/api/hr/session','/api/hr/logout'].includes(path))return auth?await auth.route(request,context)||json({error:'not_found'},404):json({error:'hr_not_configured'},503);
      if(path==='/api/careers/jobs'&&request.method==='GET')return json({jobs:store.publicList().map(j=>({...j,url:`/jobs/${j.id}`}))});
      if(path==='/jobs-sitemap.xml'&&request.method==='GET')return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${store.publicList().map(j=>`<url><loc>${origin}/jobs/${j.id}</loc><lastmod>${j.updatedAt}</lastmod></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml','Cache-Control':'no-store'}});
      const publicMatch=path.match(/^\/(api\/careers\/jobs|jobs)\/(ald-[a-f0-9]{12})$/);
      if(publicMatch&&request.method==='GET'){
        const r=store.publicGet(publicMatch[2]);
        if(publicMatch[1]==='jobs'&&r.job)return html(renderRole(template,r.job,origin,{closed:r.status===410}),r.status,r.status!==200);
        return r.status===200?json({job:r.job}):json({error:'job_unavailable'},r.status);
      }
      if(path.startsWith('/api/hr/')){
        if(!auth)return json({error:'hr_not_configured'},503);
        const match=path.match(/^\/api\/hr\/jobs(?:\/(ald-[a-f0-9]{12})(?:\/(publish|close|duplicate|preview|audit))?)?$/);
        if(!match)return json({error:'not_found'},404);
        const [,id,action]=match;
        const who=auth.authorize(request,['publish','close'].includes(action));
        if(request.method==='GET'){
          if(!id)return json({jobs:store.list()});
          const row=store.get(id);if(!row)throw problem('job_not_found',404);
          if(action==='preview')return html(renderRole(template,{...row.draft,id},origin,{preview:true}),200,true);
          if(action==='audit')return json({events:store.audit(id)});
          if(!action)return json({job:row});
        }
        if((!id&&request.method==='POST')||(id&&!action&&request.method==='PUT')||(id&&['publish','close','duplicate'].includes(action)&&request.method==='POST')){
          const b=await body(request);
          const allowed=!id?['job']:action==='publish'?['version','approved']:action?['version']:['version','job'];
          if(Object.keys(b).some(k=>!allowed.includes(k)))throw problem('invalid_request');
          const job=!id?store.create(b.job,who.email):!action?store.edit(id,b.version,b.job,who.email):action==='publish'?store.publish(id,b.version,who.email,b.approved):store[action](id,b.version,who.email);
          return json({job},!id?201:200);
        }
        return json({error:'method_not_allowed'},405);
      }
      return null;
    }catch(e){return json({error:e.status?e.message:'service_unavailable',...(e.details?.length?{fields:e.details}:{})},e.status||503);}
  };
}

export function renderBoardSnapshot(jobs,review=true){
  const list=jobs.length?jobs.map(j=>jobRow(j,review?`reviews/jobs/${j.id}.html`:`/jobs/${j.id}`)).join(''):'<div class="jobs-empty"><h3>No openings published right now.</h3><p>You can still send a general introduction to HR.</p></div>';
  return `<!-- JOBS_SNAPSHOT_START -->${review?'<p class="jobs-reviewNotice">REVIEW SNAPSHOT · Five hiring needs confirmed by PK. This is not the live job feed; HR publishing and résumé delivery still require activation.</p>':''}<div class="jobs-count"><span data-jobs-count role="status" aria-live="polite">${jobs.length} openings</span><span>Aloden careers</span></div><div class="jobs-list" data-jobs-list>${list}</div><script type="application/json" id="careers-initial-jobs">${JSON.stringify(review?{reviewOnly:true}:{reviewOnly:false,jobs}).replaceAll('<','\\u003c')}</script><!-- JOBS_SNAPSHOT_END -->`;
}
