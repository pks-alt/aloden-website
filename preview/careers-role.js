/* Preview-only role rendering; production /jobs/:id is rendered by the server. */
import {roleContent} from './careers-job-shared.mjs';
const reviewHost=/(^|\.)(githack\.com|shipstatic\.com)$/.test(location.hostname)||['localhost','127.0.0.1'].includes(location.hostname);
const id=new URL(location.href).searchParams.get('job');
if(reviewHost&&!document.body.dataset.roleRendered&&/^ald-[a-f0-9]{12}$/.test(id||'')){
  try{
    const response=await fetch('data/careers-openings.json');
    if(!response.ok)throw Error();
    const job=(await response.json()).jobs.find(j=>j.id===id);
    if(!job)throw Error();
    document.querySelector('#role-content').innerHTML=roleContent(job,{review:true});
    document.title=`${job.title} | Aloden Careers`;
  }catch{document.querySelector('#role-content').innerHTML='<div class="jr-closed"><h1>This role review is unavailable.</h1><p>Return to Careers to select a current opening.</p><a href="careers.html#opportunities">View current openings →</a></div>';}
}
