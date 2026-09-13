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
assert(!/<form\b/i.test(html), 'Careers is email-led, not a live web application form');
assert(html.includes('Nothing is submitted by this website.'), 'Email behavior must be explicit');
const reports = [];
const failures = [];
const browser = await chromium.launch();
try {
  for (const width of [1440, 1024, 768, 390, 320]) {
    const page = await browser.newPage({ viewport: { width, height: 960 }, reducedMotion: 'reduce' });
    const errors = [], missingResources = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => {
      if (response.url().startsWith(`${origin}/`) && response.status() >= 400) missingResources.push(response.url());
    });
    await page.goto(`${origin}/careers.html`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
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
    assert.equal(await page.locator('#candidate-faq details').count(), 6);
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
    const menu = page.locator('.menuBtn');
    if (await menu.isVisible()) {
      await menu.click();
      assert.equal(await menu.getAttribute('aria-expanded'), 'true');
      await page.keyboard.press('Escape');
      assert.equal(await menu.getAttribute('aria-expanded'), 'false');
    }
    await page.close();
  }
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
  assert.equal(await plain.locator('#candidate-faq summary').count(), 6);
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
else console.log('Careers browser QA passed: five widths, resources, keyboard FAQ/menu, email draft, clipboard success/fallback, and no-JavaScript application path.');
