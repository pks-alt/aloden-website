import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(process.env.PLAYWRIGHT_PACKAGE||'/tmp/aloden-browser/package.json');
const {chromium}=require('playwright');
const current=process.env.CONTENT_TEST_ORIGIN||'http://127.0.0.1:8765';
const baseline=process.env.CONTENT_BASELINE_ORIGIN||'http://127.0.0.1:8766';
const pages=['index','capabilities','ai-product-engineering','product-modernization','agentic-ai','voice-ai-engineering','healthcare-ai','built-by-aloden','company','careers','start-project','privacy','terms','404'];
const reports=[],failures=[];
fs.mkdirSync('qa-artifacts',{recursive:true});
const browser=await chromium.launch();
async function load(page,url,name){
 await page.goto(url,{waitUntil:'networkidle'});
 if(name==='index')await page.waitForSelector('body.homepageCosmeticPass');
 await page.evaluate(()=>document.fonts.ready);
 await page.evaluate(()=>scrollTo(0,document.documentElement.scrollHeight));
 await page.waitForTimeout(100);
 await page.evaluate(()=>Promise.all([...document.images].map(n=>n.decode().catch(()=>{}))));
 await page.evaluate(()=>scrollTo(0,0));
 return page.evaluate(()=>({
  width:innerWidth,scroll:document.documentElement.scrollWidth,
  sections:[...document.querySelectorAll('main>section')].map(n=>[n.id,n.className]),
  fields:[...document.querySelectorAll('input,select,textarea')].map(n=>[n.tagName,n.id,n.name,n.type,n.required]),
  logos:[...document.querySelectorAll('header img,footer img')].map(n=>[n.getAttribute('src'),n.naturalWidth>0]),
  text:document.querySelector('main').innerText,h1:[...document.querySelectorAll('h1')].map(n=>n.innerText),
  schemas:[...document.querySelectorAll('script[type="application/ld+json"]')].map(n=>JSON.parse(n.textContent))
 }));
}
try{
 for(const width of [1440,1024,768,390,320]){
  const page=await browser.newPage({viewport:{width,height:960},reducedMotion:'reduce'});
  for(const name of pages){
   const errors=[];
   const handler=e=>errors.push(e.message);page.on('pageerror',handler);
   const before=await load(page,`${baseline}/${name}.html`,name);
   const after=await load(page,`${current}/${name}.html`,name);
   assert.deepEqual(after.sections,before.sections,`${name}: section order/classes changed`);
   assert.deepEqual(after.fields,before.fields,`${name}: form contracts changed`);
   assert.deepEqual(after.logos,before.logos,`${name}: logo sources changed`);
   assert(after.logos.every(n=>n[1]),`${name}: image not loaded`);
   assert.equal(after.h1.length,1);
   assert(after.scroll<=Math.max(width+1,before.scroll),`${name}: new horizontal overflow at ${width}`);
   assert.equal(errors.length,0,`${name}: JavaScript errors`);
   assert(!/AI-NATIVE FROM DAY ONE|AI-native from day one|ALODEN PRODUCT ENGINEERING SYSTEM/.test(after.text));
   if(name==='index'){
    assert.equal(after.h1[0],'We build and modernize intelligent digital products.');
    assert(!/Medlivo|StartupFair|SELECTED WORK|FEATURED INSIGHT/.test(after.text));
    assert.equal(await page.locator('.homeCapability h3 a').count(),4);
    for(const tab of await page.locator('.heroOneTab').all()){
     await tab.click();
     assert(!/Medlivo|StartupFair|Aloden Voice AI/.test(await page.locator('[data-bind="productName"]').innerText()));
    }
    await page.locator('.heroOneTab').first().click();
   }
   if(name==='capabilities')assert.equal(await page.locator('.c-cap h3 a').count(),4);
   if(name==='company'){
    for(const expected of ['Aloden was founded in 2024.','One accountable lead','Access to the engineers','Regular progress reviews'])assert(after.text.includes(expected));
    assert(!after.text.includes('retrofit a legacy delivery model'));
   }
   if(name==='built-by-aloden'){
    for(const expected of ['Medlivo is currently in use','StartupFair is a fully functional platform','voice AI solution is deployed and in use','not a live data feed','186 roles','42 clinicians','94%'])assert(after.text.includes(expected));
   }
   if(name==='careers')assert.equal(await page.locator('.jobs-row').count(),5);
   if([1440,390].includes(width)){
    await page.screenshot({path:`qa-artifacts/content-${name}-${width}.png`,fullPage:true});
    if(width===1440)fs.writeFileSync(`qa-artifacts/content-${name}.txt`,after.text);
   }
   reports.push({page:name,width,beforeScroll:before.scroll,afterScroll:after.scroll,sections:after.sections.length,fields:after.fields.length,errors,wordsBefore:before.text.split(/\s+/).length,wordsAfter:after.text.split(/\s+/).length});
   page.off('pageerror',handler);
  }
  await page.close();
 }
}catch(e){failures.push(e.stack||String(e));}
finally{await browser.close();fs.writeFileSync('qa-artifacts/content-consistency-report.json',JSON.stringify({reports,failures},null,2));}
console.log(JSON.stringify({checked:reports.length,reports,failures},null,2));
if(failures.length)process.exitCode=1;
else console.log('Content consistency QA passed: 14 pages × 5 widths; unchanged sections, form contracts and logos; confirmed copy, schema parsing and capability links.');
