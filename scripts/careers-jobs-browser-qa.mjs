import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(process.env.PLAYWRIGHT_PACKAGE||'/tmp/aloden-browser/package.json');
const {chromium}=require('playwright');
const origin=process.env.CAREERS_TEST_ORIGIN||'http://127.0.0.1:8765';
const source=JSON.parse(fs.readFileSync('preview/data/careers-openings.json','utf8')).jobs;
const browser=await chromium.launch();
const reports=[],failures=[];
fs.mkdirSync('qa-artifacts',{recursive:true});
try{
 for(const width of [1440,1024,768,390,320]){
  const page=await browser.newPage({viewport:{width,height:960},reducedMotion:'reduce'}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  for(const [label,url] of [['openings','careers.html'],['role','career-role.html?job=ald-202600000002'],['hr','reviews/hr-jobs.html']]){
   await page.goto(`${origin}/${url}`,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
   if(label==='openings'){
    assert.equal(await page.locator('.jobs-row').count(),5);
    await page.locator('[data-jobs-department]').selectOption('quality');assert.equal(await page.locator('.jobs-row').count(),1);
    await page.locator('[data-jobs-department]').selectOption('');await page.locator('[data-jobs-search]').fill('zzzzz');assert.equal(await page.locator('.jobs-row').count(),0);
    await page.locator('[data-jobs-search]').fill('');await page.locator('[data-jobs-model]').selectOption('remote');assert.equal(await page.locator('.jobs-row').count(),2);await page.locator('[data-jobs-model]').selectOption('');
   }
   if(label==='role')assert.equal(await page.locator('h1').textContent(),source[1].title);
   if(label==='hr'){assert(await page.locator('#hr-review-banner').isVisible());assert.equal(await page.locator('.hr-jobButton').count(),5);}
   const metrics=await page.evaluate(()=>({viewport:innerWidth,scrollWidth:document.documentElement.scrollWidth,images:[...document.images].map(n=>({src:n.getAttribute('src'),loaded:n.complete&&n.naturalWidth>0}))}));
   reports.push({width,label,errors:[...errors],...metrics});
   assert(metrics.scrollWidth<=width+1,`No horizontal overflow in ${label} at ${width}`);assert.equal(errors.length,0);assert(metrics.images.every(n=>n.loaded));
   await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:`qa-artifacts/jobs-${label}-${width}.png`,fullPage:true});
  }
  await page.close();
 }
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 for(const j of source){
  await page.goto(`${origin}/career-role.html?job=${j.id}`,{waitUntil:'networkidle'});assert.equal(await page.locator('h1').textContent(),j.title);
  assert.equal(await page.locator('script[type="application/ld+json"]').count(),1); // app organization only; no JobPosting in reviews
  assert(!(await page.content()).includes('"@type":"JobPosting"'));
  await page.locator('.jr-applyCard .btn').click();await page.waitForLoadState('networkidle');
  assert.match(await page.locator('[data-job-context]').textContent(),new RegExp(j.id));
  assert.equal(await page.locator('[name="jobId"]').inputValue(),j.id);assert.equal(await page.locator('#career-interest').inputValue(),j.department);assert(await page.locator('#career-submit').isDisabled());
 }
 await page.goto(`${origin}/careers.html?job=ald-ffffffffffff`,{waitUntil:'networkidle'});assert.equal(await page.locator('#careers-application').getAttribute('data-job-state'),'invalid');assert(await page.locator('#career-submit').isDisabled());
 await page.goto(`${origin}/hr-jobs.html?demo=true`,{waitUntil:'networkidle'});assert.equal(await page.locator('#hr-workspace').isVisible(),false);assert.equal(await page.locator('#hr-login').isVisible(),false);
 await page.goto(`${origin}/reviews/hr-jobs.html`,{waitUntil:'networkidle'});let writes=0;page.on('request',r=>{if(['POST','PUT','DELETE'].includes(r.method()))writes++;});
 await page.locator('#hr-add').click();await page.locator('#hr-title').fill('Synthetic QA Role');await page.locator('#hr-save').click();assert.equal(await page.locator('.hr-jobButton').count(),6);
 await page.locator('#hr-preview').click();assert(await page.locator('#hr-preview-dialog').isVisible());assert.match(await page.locator('#hr-preview-content').textContent(),/Synthetic QA Role/);await page.locator('#hr-preview-close').click();
 await page.locator('#hr-approval').check();page.on('dialog',d=>d.accept());await page.locator('#hr-publish').click();assert.match(await page.locator('#hr-editor-status').textContent(),/Complete the publishing fields/);assert(await page.locator('[aria-invalid="true"]').count()>0);
 for(const [key,value]of Object.entries({entity:'Synthetic Employer',summary:'Synthetic browser test, never a live vacancy.',responsibilities:'Build test systems.',requirements:'Relevant skills.',eligibleCountries:'US',currency:'USD',salaryMin:'100000',salaryMax:'120000',benefits:'Synthetic benefit disclosure.',expiresAt:new Date(Date.now()+30*86400000).toISOString().slice(0,10)}))await page.locator('#hr-'+key).fill(value);
 for(const [key,value]of Object.entries({department:'quality',employmentType:'FULL_TIME',workModel:'remote',salaryUnit:'YEAR'}))await page.locator('#hr-'+key).selectOption(value);
 await page.locator('#hr-save').click();await page.locator('#hr-approval').check();await page.locator('#hr-publish').click();assert.equal(await page.locator('#hr-state').textContent(),'PUBLISHED');
 await page.locator('#hr-title').fill('Synthetic unpublished edit');await page.locator('#hr-save').click();assert.match(await page.locator('.hr-jobButton[aria-current="true"]').textContent(),/draft changes/);
 await page.locator('#hr-close').click();assert.equal(await page.locator('#hr-state').textContent(),'CLOSED');await page.locator('#hr-duplicate').click();assert.equal(await page.locator('#hr-state').textContent(),'DRAFT');assert.equal(await page.locator('.hr-jobButton').count(),7);assert.equal(writes,0);
 await page.reload({waitUntil:'networkidle'});assert.equal(await page.locator('.hr-jobButton').count(),5);await page.close();
 // Simulate live job selection + posting transport. Never connect to Gmail or store applicant data.
 const live=await browser.newPage();
 await live.route('**/careers.html?job=*',r=>r.fulfill({contentType:'text/html',body:fs.readFileSync('preview/careers.html','utf8').replace(/<script type="application\/json" id="careers-initial-jobs">[^<]*<\/script>/,'<script type="application/json" id="careers-initial-jobs">{"reviewOnly":false,"jobs":[]}</script>')}));
 await live.route('**/api/careers/jobs',r=>r.fulfill({json:{jobs:source}}));
 await live.route('**/api/careers/jobs/*',r=>r.fulfill({json:{job:{...source[1],version:2}}}));
 await live.route('**/api/careers/config',r=>r.fulfill({json:{enabled:true,turnstileSiteKey:'test-only-sitekey',applicantNoticeUrl:'/privacy.html'}}));
 await live.route('https://challenges.cloudflare.com/**',r=>r.fulfill({contentType:'application/javascript',body:"window.turnstile={render:(id,opts)=>{queueMicrotask(()=>opts.callback('synthetic-token'));return 'test';},reset:()=>{}};"}));
 let submitted=false;
 await live.route('**/api/careers/applications',r=>{assert(r.request().postData().includes('name="jobId"\r\n\r\n'+source[1].id));submitted=true;return r.fulfill({status:201,json:{ok:true,status:'accepted',applicationId:'11111111-1111-4111-8111-111111111111'}});});
 await live.goto(`${origin}/careers.html?job=${source[1].id}`,{waitUntil:'networkidle'});await live.waitForFunction(()=>!document.querySelector('#career-submit').disabled);
 for(const [key,value]of Object.entries({name:'Synthetic Candidate',email:'synthetic@example.test',location:'Synthetic city'}))await live.locator('#career-'+key).fill(value);
 await live.locator('#career-availability').selectOption('immediate');await live.locator('#career-consent').check();await live.locator('#career-resume').setInputFiles({name:'Synthetic.pdf',mimeType:'application/pdf',buffer:Buffer.from('%PDF-1.7\nTest\n%%EOF')});await live.locator('#career-submit').click();await live.waitForFunction(()=>document.querySelector('#career-submit-status').dataset.state==='success');assert(submitted);await live.close();
 const plain=await browser.newPage({javaScriptEnabled:false});await plain.goto(origin+'/careers.html');assert.equal(await plain.locator('.jobs-row').count(),5);assert(await plain.locator('[data-careers-email]').isVisible());await plain.close();
}catch(e){failures.push(e.stack||String(e));}finally{await browser.close();fs.writeFileSync('qa-artifacts/jobs-browser-report.json',JSON.stringify({reports,failures},null,2));}
console.log(JSON.stringify({reports,failures},null,2));if(failures.length)process.exitCode=1;else console.log('Jobs browser QA passed: five roles, filters, five widths, job-linked upload, invalid jobs, protected shell, HR draft/preview/publish/edit/close/duplicate review, and preview isolation.');
