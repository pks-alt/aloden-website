/* Public-copy, logo and contact regression. No applicant email or external form is sent. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(process.env.PLAYWRIGHT_PACKAGE||'/tmp/aloden-browser/package.json');
const {chromium}=require('playwright');
const origin=process.env.CAREERS_TEST_ORIGIN||'http://127.0.0.1:8765';
const pages=['index','capabilities','ai-product-engineering','product-modernization','agentic-ai','voice-ai-engineering','healthcare-ai','built-by-aloden','company','careers','start-project','privacy','terms','404'];
const banned=/REVIEW SNAPSHOT|confirmed by PK|Review mode|REVIEW MODE|Live publishing|FUNCTIONALITY PREVIEW|SECURE DELIVERY ACTIVATES|No salary or benefits package is implied by this review|No closing date specified|AI.NATIVE FROM DAY ONE|ALODEN PRODUCT ENGINEERING SYSTEM/;
const reports=[],failures=[];
fs.mkdirSync('qa-artifacts',{recursive:true});
const browser=await chromium.launch();
try{
 for(const width of [1440,1024,768,390,320]){
  const page=await browser.newPage({viewport:{width,height:960},reducedMotion:'reduce'});
  for(const file of pages){
   const errors=[];const onError=e=>errors.push(e.message);page.on('pageerror',onError);
   await page.goto(`${origin}/${file}.html`,{waitUntil:'networkidle'});
   if(file==='index')await page.waitForSelector('body.homepageCosmeticPass');
   await page.evaluate(()=>document.fonts.ready);
   await page.evaluate(()=>scrollTo(0,document.documentElement.scrollHeight));await page.waitForTimeout(100);
   await page.evaluate(()=>Promise.all([...document.images].map(n=>n.decode().catch(()=>{}))));
   const data=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,text:document.body.innerText,images:[...document.images].map(n=>({src:n.getAttribute('src'),loaded:n.naturalWidth>0})),links:[...document.querySelectorAll('a[href^="mailto:"]')].map(n=>({href:n.getAttribute('href'),text:n.textContent}))}));
   assert.equal(errors.length,0,`${file}: JavaScript errors`);
   assert(data.scroll<=width+1,`${file}: horizontal overflow at ${width}: ${data.scroll}`);
   assert(!banned.test(data.text),`${file}: internal authoring text is visible`);
   assert(data.images.every(n=>n.loaded),`${file}: image failed to load`);
   for(const link of data.links){const u=new URL(link.href);assert(['hello@aloden.com','hr@aloden.com'].includes(u.pathname),`${file}: unknown mailbox`);assert(u.searchParams.get('subject'),`${file}: contact link needs an inquiry subject`);}
   assert.equal(await page.locator('footer a.siteContactLink').count(),2,`${file}: footer contact routes`);
   if(file==='index'){
    const mark=page.locator('.heroOneCoreHead img.heroOneCoreMark');assert.equal(await mark.count(),1);assert.equal(await mark.getAttribute('src'),'assets/aloden-cube-symbol.svg');
    const a=await mark.boundingBox(),b=await page.locator('.heroOneCoreHead h2').boundingBox();assert(a.x<b.x&&a.y<=b.y+4,'Cube sits beside the process heading, not below it');
    assert.equal(await page.locator('.heroOneCoreMark i').count(),0);
    assert(!/Medlivo|StartupFair|SELECTED WORK|FEATURED INSIGHT/.test(await page.locator('main').innerText()));
   }
   if(file==='careers'){
    assert.equal(await page.locator('.jobs-row').count(),5);assert(await page.locator('#career-submit').isDisabled());assert.match(await page.locator('#careers-upload-mode').innerText(),/currently unavailable/);
    assert.equal(new URL(await page.locator('[data-careers-delivery-email]').getAttribute('href')).pathname,'hr@aloden.com');
   }
   if(file==='start-project'){assert(await page.locator('#submit-project-brief').isDisabled());assert.match(await page.locator('.projectSubmissionReview').innerText(),/hello@aloden.com/);}
   if(['index','careers','company','built-by-aloden'].includes(file)&&[1440,390].includes(width)){
    await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:`qa-artifacts/polish-${file}-${width}.png`,fullPage:true});
   }
   if(file==='careers'&&[1440,390].includes(width))await page.locator('#opportunities').screenshot({path:`qa-artifacts/polish-openings-${width}.png`});
   reports.push({file,width,scroll:data.scroll,mailLinks:data.links.length,errors});page.off('pageerror',onError);
  }
  for(const id of ['ald-202600000001','ald-202600000002','ald-202600000003','ald-202600000004','ald-202600000005']){
   await page.goto(`${origin}/reviews/jobs/${id}.html`,{waitUntil:'networkidle'});
   assert(!banned.test(await page.locator('main').innerText()));
   const email=new URL(await page.locator('.jr-email').getAttribute('href'));assert.equal(email.pathname,'hr@aloden.com');assert(email.searchParams.get('subject').includes(id));
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
   if(id==='ald-202600000001'&&[1440,390].includes(width))await page.screenshot({path:`qa-artifacts/polish-role-${width}.png`,fullPage:true});
   reports.push({file:`jobs/${id}`,width});
  }
  await page.close();
 }
 const p=await browser.newPage();let sends=0;p.on('request',r=>{if(r.method()==='POST')sends++;});
 await p.goto(`${origin}/careers.html?job=ald-202600000001`,{waitUntil:'networkidle'});
 const selected=await p.locator('[data-careers-delivery-email]').getAttribute('href');assert(new URL(selected).searchParams.get('subject').includes('ald-202600000001'));
 assert(await p.locator('#career-submit').isDisabled());
 await p.goto(`${origin}/start-project.html`,{waitUntil:'networkidle'});assert(await p.locator('#submit-project-brief').isDisabled());assert.equal(sends,0);
 await p.goto(`${origin}/reviews/hr-jobs.html`,{waitUntil:'networkidle'});assert(await p.locator('#hr-review-banner').isVisible(),'Private HR demo must stay honestly labeled');
 await p.close();
}catch(e){failures.push(e.stack||String(e));}
finally{await browser.close();fs.writeFileSync('qa-artifacts/public-polish-report.json',JSON.stringify({reports,failures},null,2));}
console.log(JSON.stringify({checked:reports.length,failures},null,2));if(failures.length)process.exitCode=1;
