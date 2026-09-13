import {waitForImages} from './careers-browser-helpers.mjs';
/* Run with PLAYWRIGHT_PACKAGE pointing to the isolated test package.json.
   Tests never send an email or transmit candidate data. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(process.env.PLAYWRIGHT_PACKAGE || '/tmp/aloden-browser/package.json');
const { chromium } = require('playwright');
const origin = process.env.CAREERS_TEST_ORIGIN || 'http://127.0.0.1:8765';
const out = 'qa-artifacts';
fs.mkdirSync(out, { recursive: true });
const html = fs.readFileSync('preview/careers.html', 'utf8');
assert(!/"@type"\s*:\s*"JobPosting"/.test(html), 'Do not represent talent areas as job vacancies');
assert(/id="careers-application"/.test(html), 'Resume application form is present');
assert(/enctype="multipart\/form-data"/.test(html), 'Upload uses multipart form data');
assert(/accept="\.pdf,\.docx/.test(html), 'PDF and DOCX are accepted');
assert(html.includes('Online applications are currently unavailable.'), 'Inactive delivery must be explicit');
assert(html.includes('data-careers-delivery-email'), 'Applicants must have an email route when online submissions are unavailable');
const reports = [];
const failures = [];
const browser = await chromium.launch(process.env.CAREERS_CHROMIUM_PATH ? {executablePath:process.env.CAREERS_CHROMIUM_PATH} : {});
try {
  for (const width of [1440, 1024, 768, 390, 320]) {
    const page = await browser.newPage({ viewport: { width, height: 960 }, reducedMotion: 'reduce' });
    const errors = [], missingResources = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => {
      if (response.url().startsWith(`${origin}/`) && response.status() >= 400 && !response.url().endsWith('/api/careers/config')) missingResources.push(response.url());
    });
    await page.goto(`${origin}/careers.html`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await waitForImages(page);
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({ path: `${out}/careers-${width}.png`, fullPage: true });
    await page.locator('.cr-candidateHelp').screenshot({ path: `${out}/candidate-help-${width}.png` });
    const metrics = await page.evaluate(() => ({
      viewport: innerWidth, scrollWidth: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
      overflow: [...document.querySelectorAll('main *')].filter(n => {
        const r = n.getBoundingClientRect();
        return r.width > 0 && (r.right > innerWidth + 1 || r.left < -1);
      }).slice(0, 12).map(n => ({ className: n.className, text: n.textContent.trim().slice(0, 60) })),
      images: [...document.images].map(n => ({ src: n.getAttribute('src'), loaded: n.complete && n.naturalWidth > 0 }))
    }));
    const report = { width, errors, missingResources, ...metrics };
    reports.push(report);
    if (errors.length || missingResources.length || metrics.scrollWidth > width + 1 || metrics.overflow.length || metrics.images.some(n => !n.loaded)) failures.push(`Layout/resources failed at ${width}px`);
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.locator('#candidate-faq details').count(), 7);
    const first = page.locator('#candidate-faq details').first();
    await first.locator('summary').focus();
    await page.keyboard.press('Enter');
    assert.equal(await first.evaluate(n => n.open), true, 'Keyboard must open FAQ');
    await page.keyboard.press('Enter');
    assert.equal(await first.evaluate(n => n.open), false, 'Keyboard must close FAQ');
    const draft = await page.locator('[data-careers-email]').getAttribute('href');
    const uri = new URL(draft);
    assert.equal(uri.protocol, 'mailto:');
    assert.equal(uri.pathname, 'hr@aloden.com');
    assert(uri.searchParams.get('body').includes('My name:'));
    let postCount = 0;
    page.on('request', r => { if (r.method() === 'POST') postCount++; });
    const resume = page.locator('#career-resume');
    await resume.setInputFiles({ name: 'Synthetic Resume.pdf', mimeType: 'application/pdf', buffer: Buffer.from('%PDF-1.7\nTEST\n%%EOF') });
    assert(await page.locator('#career-file-selected').isVisible());
    assert(await page.locator('#career-submit').isDisabled(), 'Preview delivery must remain disabled');
    assert.equal(postCount, 0, 'File selection must not transmit candidate data');
    await page.locator('#career-file-remove').click();
    assert.equal(await page.locator('#career-file-selected').isVisible(), false);
    await resume.setInputFiles({ name: 'bad.exe', mimeType: 'application/octet-stream', buffer: Buffer.from('MZ') });
    assert.match(await page.locator('#career-file-error').textContent(), /PDF or DOCX/);
    await resume.setInputFiles({ name: 'too-big.pdf', mimeType: 'application/pdf', buffer: Buffer.alloc(5 * 1024 * 1024 + 1) });
    assert.match(await page.locator('#career-file-error').textContent(), /exceeds 5 MB/);
    await page.evaluate(() => {
      const transfer = new DataTransfer();
      transfer.items.add(new File(['%PDF-1.7\nTEST\n%%EOF'], 'Dropped.pdf', { type: 'application/pdf' }));
      document.querySelector('#career-dropzone').dispatchEvent(new DragEvent('drop', { bubbles: true, cancelable: true, dataTransfer: transfer }));
    });
    assert.equal(await page.locator('#career-filename').textContent(), 'Dropped.pdf');
    const menu = page.locator('.menuBtn');
    if (await menu.isVisible()) {
      await menu.click();
      assert.equal(await menu.getAttribute('aria-expanded'), 'true');
      await page.keyboard.press('Escape');
      assert.equal(await menu.getAttribute('aria-expanded'), 'false');
    }
    await page.close();
  }
  // Mock only external services in browser tests. No real candidate mail is sent.
  async function livePage(result, abort = false) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    let count = 0;
    await page.route('**/api/careers/config', r => r.fulfill({ json: { enabled: true, turnstileSiteKey: 'mock-site-key-only', applicantNoticeUrl: '/privacy.html' } }));
    await page.route('https://challenges.cloudflare.com/**', r => r.fulfill({ contentType: 'application/javascript', body: `window.turnstile={render:(id,opts)=>{window._testCallback=opts.callback;queueMicrotask(()=>opts.callback('synthetic-token'));return 'test';},reset:()=>queueMicrotask(()=>window._testCallback('synthetic-token'))};` }));
    await page.route('**/api/careers/applications', r => {
      count++;
      assert.equal(r.request().method(), 'POST');
      assert.match(r.request().headers()['content-type'], /multipart\/form-data/);
      assert.match(r.request().headers()['idempotency-key'], /^[a-f0-9-]{36}$/i);
      return abort ? r.abort('failed') : r.fulfill(result);
    });
    await page.goto(`${origin}/careers.html`, { waitUntil: 'networkidle' });
    await page.waitForFunction(() => !document.querySelector('#career-submit').disabled);
    await page.locator('#career-submit').click();
    assert.equal(count, 0, 'Empty required fields must not reach the server');
    await page.locator('#career-name').fill('Synthetic Applicant');
    await page.locator('#career-email').fill('applicant@example.test');
    await page.locator('#career-interest').selectOption('software');
    await page.locator('#career-location').fill('Test city, country');
    await page.locator('#career-availability').selectOption('one-month');
    await page.locator('#career-resume').setInputFiles({ name:'Synthetic.pdf', mimeType:'application/pdf', buffer:Buffer.from('%PDF-1.7\nTEST\n%%EOF') });
    await page.locator('#career-submit').click();
    assert.equal(count, 0, 'Consent must be required');
    await page.locator('#career-consent').check();
    return { page, count: () => count };
  }
  const accepted = await livePage({ status: 201, json: { ok: true, status: 'accepted', applicationId: '11111111-1111-4111-8111-111111111111' } });
  await accepted.page.locator('#career-submit').click();
  await accepted.page.waitForFunction(() => document.querySelector('#career-submit-status').dataset.state === 'success');
  assert.equal(accepted.count(), 1);
  assert(await accepted.page.locator('#career-submit').isDisabled());
  await accepted.page.close();
  const failed = await livePage({ status: 503, json: { ok: false, error: 'delivery_failed' } });
  await failed.page.locator('#career-submit').click();
  await failed.page.waitForFunction(() => document.querySelector('#career-submit-status').dataset.state === 'error');
  assert.match(await failed.page.locator('#career-submit-status').textContent(), /Delivery could not/);
  assert.equal(await failed.page.locator('#career-email').inputValue(), 'applicant@example.test');
  assert.equal(await failed.page.locator('#career-name').isDisabled(), false);
  await failed.page.close();
  const ambiguous = await livePage({}, true);
  await ambiguous.page.locator('#career-submit').click();
  await ambiguous.page.waitForFunction(() => document.querySelector('#career-submit').textContent.includes('Check delivery'));
  assert.equal(ambiguous.count(), 1);
  assert(await ambiguous.page.locator('#career-submit').isDisabled());
  assert.match(await ambiguous.page.locator('#career-submit-status').textContent(), /could not confirm/);
  await ambiguous.page.close();
  const falseSuccess = await livePage({status:200,contentType:'text/html',body:'<html>Static host fallback</html>'});
  await falseSuccess.page.locator('#career-submit').click();
  await falseSuccess.page.waitForFunction(() => document.querySelector('#career-submit-status').dataset.state === 'error');
  assert(await falseSuccess.page.locator('#career-submit').isDisabled());
  await falseSuccess.page.close();
  // Exercise clipboard success and permission-denied branches without using the OS clipboard.
  const page = await browser.newPage();
  await page.addInitScript(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async text => { window.__careersCopied = text; } } }));
  await page.goto(`${origin}/careers.html`, { waitUntil: 'networkidle' });
  await page.locator('[data-copy-careers-email]').click();
  assert.equal(await page.evaluate(() => window.__careersCopied), 'hr@aloden.com');
  assert.match(await page.locator('[data-copy-careers-status]').textContent(), /email copied/);
  await page.evaluate(() => { navigator.clipboard.writeText = async () => { throw new Error('Permission denied'); }; });
  await page.locator('[data-copy-careers-email]').click();
  assert.match(await page.locator('[data-copy-careers-status]').textContent(), /not available/);
  await page.close();
  // Application instructions, native FAQs, and mailto must remain useful without JavaScript.
  const plain = await browser.newPage({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  await plain.goto(`${origin}/careers.html`, { waitUntil: 'networkidle' });
  assert(await plain.locator('[data-careers-email]').isVisible());
  assert.equal(await plain.locator('#candidate-faq summary').count(), 7);
  assert.equal(await plain.locator('[data-copy-careers-email]').isVisible(), false);
  await plain.close();
} catch (error) {
  failures.push(error.stack || String(error));
} finally {
  await browser.close();
  fs.writeFileSync(`${out}/careers-browser-report.json`, JSON.stringify({ reports, failures }, null, 2));
}
console.log(JSON.stringify({ reports, failures }, null, 2));
if (failures.length) process.exitCode = 1;
else console.log('Careers browser QA passed: five widths, resources, keyboard FAQ/menu, email draft, clipboard success/fallback, no-JavaScript email fallback, PDF/size validation, drag/drop, preview non-transmission, required fields/consent, mocked acceptance, delivery failure, and network uncertainty.');
