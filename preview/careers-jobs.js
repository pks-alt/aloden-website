import { jobRow, DEPTS } from './careers-job-shared.mjs';
const board=document.querySelector('[data-jobs-board]');
const form=document.querySelector('#careers-application');
const reviewHost=/(^|\.)(githack\.com|shipstatic\.com)$/.test(location.hostname)||['localhost','127.0.0.1'].includes(location.hostname)||location.protocol==='file:';
const snapshot=document.querySelector('#careers-initial-jobs');
let initial={jobs:[],reviewOnly:false};
try {initial=JSON.parse(snapshot?.textContent||'{"jobs":[]}');}catch{}
const review=reviewHost&&initial.reviewOnly===true;
if(review&&!initial.jobs?.length){try{const response=await fetch('data/careers-openings.json');if(!response.ok)throw Error();initial.jobs=(await response.json()).jobs;}catch{initial.jobs=[];}}
let jobs=[];
const urlFor=j=>review?`reviews/jobs/${j.id}.html`:`/jobs/${j.id}`;
if(board){
  const list=board.querySelector('[data-jobs-list]'),counter=board.querySelector('[data-jobs-count]');
  const search=board.querySelector('[data-jobs-search]'),dept=board.querySelector('[data-jobs-department]'),model=board.querySelector('[data-jobs-model]');
  function render(){const q=search.value.trim().toLowerCase();const shown=jobs.filter(j=>(!dept.value||j.department===dept.value)&&(!model.value||j.workModel===model.value)&&`${j.title} ${j.summary} ${j.city} ${DEPTS[j.department]} ${j.teamType}`.toLowerCase().includes(q));counter.textContent=`${shown.length} ${shown.length===1?'opening':'openings'}`;list.innerHTML=shown.length?shown.map(j=>jobRow(j,urlFor(j))).join(''):'<div class="jobs-empty"><h3>No matching openings.</h3><p>Try another search or share a general introduction.</p><a href="#how-to-apply">Join our talent network →</a></div>';}
  [search,dept,model].forEach(n=>n.addEventListener('input',render));
  if(review){jobs=initial.jobs;render();}
  else {try{const r=await fetch('/api/careers/jobs',{cache:'no-store',signal:AbortSignal.timeout(8000)});if(!r.ok)throw Error();const data=await r.json();if(!Array.isArray(data.jobs))throw Error();jobs=data.jobs;render();}catch{counter.textContent='Current roles';list.innerHTML='<div class="jobs-empty"><h3>Looking for an opening?</h3><p>Contact Aloden HR for current roles or send a general introduction.</p><a href="mailto:hr@aloden.com">Contact hr@aloden.com ↗</a></div>';}}
}
if(form){
  const id=new URL(location.href).searchParams.get('job');
  const input=form.querySelector('[name="jobId"]'),context=form.querySelector('[data-job-context]');
  function notify(state){form.dataset.jobState=state;form.dispatchEvent(new Event('careers-job-state'));}
  if(!id){input.value='general';notify('general');}
  else {
    input.value=id;context.hidden=false;notify('pending');context.textContent='Checking the selected role…';
    try {
      if(!/^ald-[a-f0-9]{12}$/.test(id))throw Error();
      let job;
      if(review)job=initial.jobs.find(j=>j.id===id);
      else {const response=await fetch(`/api/careers/jobs/${id}`,{cache:'no-store',signal:AbortSignal.timeout(8000)});if(!response.ok)throw Error();job=(await response.json()).job;}
      if(!job||job.id!==id)throw Error();
      context.replaceChildren();
      const label=document.createElement('span');label.textContent='APPLYING FOR';
      const title=document.createElement('b');title.textContent=job.title;
      const ref=document.createElement('span');ref.textContent=`Reference: ${job.id}`;
      const change=document.createElement('a');change.href='careers.html#how-to-apply';change.textContent='Send a general introduction instead';
      context.append(label,title,ref,document.createElement('br'),change);
      form.querySelector('#career-interest').value=job.department;
      document.querySelectorAll('[data-careers-email],[data-careers-delivery-email]').forEach(link=>link.href=`mailto:hr@aloden.com?${new URLSearchParams({subject:`Application | ${job.title} | ${job.id}`,body:`Hello Aloden HR,\n\nI am applying for ${job.title} (${job.id}).\n\nMy name:\nLocation:\nAvailability:\n\nI will attach my résumé before sending.`})}`);
      notify(review?'preview':'active');
    }catch{
      context.innerHTML='<b>This role cannot be confirmed as open.</b>Please check current openings before applying. Your application has not been switched to another role.<br><a href="careers.html#opportunities">View current openings</a> · <a href="careers.html#how-to-apply">Choose general introduction</a>';
      notify('invalid');
    }
  }
}
