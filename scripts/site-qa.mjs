import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const preview = path.join(root, 'preview');
const errors = [];
const warnings = [];

const requiredPublicPages = [
  'index.html',
  'built-by-aloden.html',
  'capabilities.html',
  'ai-product-engineering.html',
  'voice-ai-engineering.html',
  'agentic-ai.html',
  'product-modernization.html',
  'healthcare-ai.html',
  'insights.html',
  'company.html',
  'start-project.html',
  'privacy.html',
  'terms.html',
  '404.html'
];

const effectiveRoutes = new Map([
  ['Home', 'index.html'],
  ['Built by Aloden', 'built-by-aloden.html'],
  ['Capabilities', 'capabilities.html'],
  ['Insights', 'insights.html'],
  ['Company', 'company.html'],
  ['AI Product Engineering', 'ai-product-engineering.html'],
  ['Voice AI Engineering', 'voice-ai-engineering.html'],
  ['Intelligent Workflow & Agentic Systems', 'agentic-ai.html'],
  ['Product Modernization', 'product-modernization.html'],
  ['Healthcare AI', 'healthcare-ai.html'],
  ['Privacy', 'privacy.html'],
  ['Terms', 'terms.html'],
  ['View all products →', 'built-by-aloden.html#products'],
  ['Explore Medlivo →', 'built-by-aloden.html#products'],
  ['See Medlivo →', 'built-by-aloden.html#products'],
  ['Explore StartupFair →', 'built-by-aloden.html#startupfair-proof'],
  ['Explore Aloden Voice AI →', 'built-by-aloden.html#voice-ai-proof'],
  ['Explore Voice AI →', 'built-by-aloden.html#voice-ai-proof'],
  ['See Aloden Voice AI', 'built-by-aloden.html#voice-ai-proof'],
  ['See Everything We’ve Built →', 'built-by-aloden.html'],
  ["See Everything We've Built →", 'built-by-aloden.html'],
  ['Explore Built by Aloden →', 'built-by-aloden.html'],
  ['See What We’ve Built', 'built-by-aloden.html'],
  ["See What We've Built", 'built-by-aloden.html'],
  ['Explore AI Product Engineering →', 'ai-product-engineering.html'],
  ['Explore Voice AI Engineering →', 'voice-ai-engineering.html'],
  ['Explore Intelligent Workflow & Agentic Systems →', 'agentic-ai.html'],
  ['Explore Product Modernization →', 'product-modernization.html'],
  ['Explore Healthcare AI →', 'healthcare-ai.html'],
  ['Read the Insight →', 'insights.html#featured-thinking'],
  ['Explore Aloden Insights →', 'insights.html']
]);

const decode = (value) => value
  .replace(/&amp;/g, '&')
  .replace(/&gt;/g, '>')
  .replace(/&lt;/g, '<')
  .replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'")
  .replace(/&nbsp;/g, ' ');

const textOf = (html) => decode(html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim());
const cleanUrl = (url) => url.split('?')[0];
const fileExists = (file) => fs.existsSync(path.join(preview, file));
const read = (file) => fs.readFileSync(path.join(preview, file), 'utf8');

function hasId(html, id) {
  const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`\\bid=["']${escaped}["']`).test(html);
}

function effectiveHref(file, rawHref, anchorText) {
  if (anchorText === 'Start a Project →' || anchorText === 'Start a Project') {
    return file === 'start-project.html' ? '#project-start' : 'start-project.html';
  }
  if (anchorText === 'LinkedIn →' || anchorText === 'LinkedIn') return 'https://www.linkedin.com/company/alodenllc';
  return effectiveRoutes.get(anchorText) || rawHref;
}

for (const file of requiredPublicPages) {
  if (!fileExists(file)) errors.push(`${file}: required public page is missing`);
}
for (const file of ['robots.txt', 'sitemap.xml', 'app.js', 'site-qa.css', 'legal.css']) {
  if (!fileExists(file)) errors.push(`${file}: required launch-support file is missing`);
}
for (const file of ['start-project-form.js', 'start-project-form.css']) {
  if (!fileExists(file)) errors.push(`${file}: project form functionality file is missing`);
}

const htmlFiles = fs.readdirSync(preview).filter((name) => name.endsWith('.html'));
const publicHtmlFiles = htmlFiles.filter((name) => name !== 'live-review.html');

for (const file of publicHtmlFiles) {
  const html = read(file);
  if (!/<!doctype html>/i.test(html)) errors.push(`${file}: missing doctype`);
  if (!/<html\b[^>]*\blang=["']en["']/i.test(html)) errors.push(`${file}: missing lang="en"`);
  if (!/<meta\b[^>]*charset=/i.test(html)) errors.push(`${file}: missing charset metadata`);
  if (!/<meta\b[^>]*name=["']viewport["']/i.test(html)) errors.push(`${file}: missing viewport metadata`);
  if (!/<title>[^<]+<\/title>/i.test(html)) errors.push(`${file}: missing title`);
  if (file !== '404.html' && !/<meta\b[^>]*name=["']description["']/i.test(html)) errors.push(`${file}: missing meta description`);
  if (!/<main\b/i.test(html)) errors.push(`${file}: missing main landmark`);
  if (!/<header\b/i.test(html)) errors.push(`${file}: missing header landmark`);
  if (!/<footer\b/i.test(html)) errors.push(`${file}: missing footer landmark`);
  if (!/<script\b[^>]*src=["']app\.js["']/i.test(html)) errors.push(`${file}: shared app.js is not loaded`);

  const h1Count = [...html.matchAll(/<h1\b/gi)].length;
  if (h1Count !== 1) errors.push(`${file}: expected exactly one H1, found ${h1Count}`);

  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]);
  const seenIds = new Set();
  for (const id of ids) {
    if (seenIds.has(id)) errors.push(`${file}: duplicate id #${id}`);
    seenIds.add(id);
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt=["'][^"']*["']/i.test(match[0])) errors.push(`${file}: image is missing an alt attribute: ${match[0].slice(0, 120)}`);
  }

  const anchorRe = /<a\b([^>]*)href=["']([^"']*)["']([^>]*)>([\s\S]*?)<\/a>/gi;
  for (const match of html.matchAll(anchorRe)) {
    const rawHref = match[2].trim();
    const anchorText = textOf(match[4]);
    const href = effectiveHref(file, rawHref, anchorText).trim();

    if (!href || href === '#') {
      errors.push(`${file}: unresolved placeholder link for “${anchorText || '(no text)'}”`);
      continue;
    }
    if (/^(mailto:|tel:|https?:\/\/)/i.test(href)) continue;

    const [targetPart, fragment] = href.split('#');
    const targetFile = cleanUrl(targetPart || file) || file;
    if (targetFile.endsWith('.html')) {
      if (!fileExists(targetFile)) {
        errors.push(`${file}: link “${anchorText}” points to missing ${targetFile}`);
        continue;
      }
      if (fragment) {
        const targetHtml = read(targetFile);
        if (!hasId(targetHtml, fragment)) errors.push(`${file}: link “${anchorText}” points to missing #${fragment} in ${targetFile}`);
      }
    } else if (!targetPart && fragment && !hasId(html, fragment)) {
      errors.push(`${file}: link “${anchorText}” points to missing #${fragment}`);
    }
  }

  const resourceRe = /(?:src|href)=["']([^"']+)["']/gi;
  for (const match of html.matchAll(resourceRe)) {
    const raw = match[1];
    if (/^(#|mailto:|tel:|https?:\/\/|data:|javascript:)/i.test(raw)) continue;
    const local = cleanUrl(raw.split('#')[0]);
    if (!local || local.endsWith('.html')) continue;
    if (!fs.existsSync(path.join(preview, local))) errors.push(`${file}: missing local resource ${local}`);
  }
}

const cssFiles = fs.readdirSync(preview).filter((name) => name.endsWith('.css'));
for (const cssFile of cssFiles) {
  const css = read(cssFile);
  for (const match of css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)) {
    const raw = match[1].trim();
    if (!raw || /^(data:|https?:\/\/|#)/i.test(raw)) continue;
    const target = cleanUrl(raw.split('#')[0]);
    if (!fs.existsSync(path.resolve(preview, path.dirname(cssFile), target))) errors.push(`${cssFile}: missing CSS asset ${target}`);
  }
}

if (fileExists('404.html') && !/name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(read('404.html'))) errors.push('404.html: must be noindex');
if (fileExists('live-review.html') && !/name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(read('live-review.html'))) errors.push('live-review.html: review redirect must be noindex');

if (fileExists('start-project.html')) {
  const formPage = read('start-project.html');
  const requiredIds = ['project-start', 'project-stage', 'project-help', 'project-context', 'project-contact', 'project-outcome', 'project-name', 'project-email', 'project-company', 'submit-project-brief'];
  for (const id of requiredIds) if (!hasId(formPage, id)) errors.push(`start-project.html: missing required form element #${id}`);
  for (const name of ['project-type', 'project-stage', 'project-help', 'project-timing']) {
    if (!new RegExp(`name=["']${name}["']`).test(formPage)) errors.push(`start-project.html: missing field group ${name}`);
  }
}

if (fileExists('robots.txt')) {
  const robots = read('robots.txt');
  if (!/Sitemap:\s*https:\/\/www\.aloden\.com\/sitemap\.xml/i.test(robots)) errors.push('robots.txt: sitemap declaration is missing');
  if (!/Disallow:\s*\/live-review\.html/i.test(robots)) warnings.push('robots.txt: live-review.html is not explicitly excluded');
}

if (fileExists('sitemap.xml')) {
  const sitemap = read('sitemap.xml');
  for (const file of requiredPublicPages.filter((name) => name !== '404.html')) {
    const expected = file === 'index.html' ? 'https://www.aloden.com/' : `https://www.aloden.com/${file}`;
    if (!sitemap.includes(`<loc>${expected}</loc>`)) errors.push(`sitemap.xml: missing ${expected}`);
  }
  if (sitemap.includes('/404.html') || sitemap.includes('/live-review.html')) errors.push('sitemap.xml: contains a non-indexable support page');
}

if (!fs.existsSync(path.join(root, 'server', 'project-brief-handler.mjs'))) errors.push('server/project-brief-handler.mjs: missing secure form handler core');
if (!fs.existsSync(path.join(root, 'server', 'project-brief-handler.test.mjs'))) errors.push('server/project-brief-handler.test.mjs: missing form-handler tests');

console.log(`Aloden V1 QA audited ${publicHtmlFiles.length} public/support HTML pages and ${cssFiles.length} CSS files.`);
for (const warning of warnings) console.warn(`WARNING: ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  console.error(`QA failed with ${errors.length} error(s).`);
  process.exit(1);
}
console.log('QA passed: page structure, headings, unique anchors, effective links, local resources, CSS assets, metadata, image alt coverage, support pages, and project-form structure are intact.');
