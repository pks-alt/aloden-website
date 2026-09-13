import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const preview = path.join(root, 'preview');
const errors = [];
const warnings = [];

const launchPages = [
  'index.html',
  'built-by-aloden.html',
  'capabilities.html',
  'ai-product-engineering.html',
  'voice-ai-engineering.html',
  'agentic-ai.html',
  'product-modernization.html',
  'healthcare-ai.html',
  'company.html',
  'careers.html',
  'start-project.html',
  'privacy.html',
  'terms.html',
  '404.html'
];

const supportPages = ['contact.html', 'insights.html'];
const requiredFiles = [
  'robots.txt',
  'sitemap.xml',
  'app.js',
  'site-final-system.css',
  'site-qa.css',
  'legal.css',
  'careers.css',
  'start-project-form.js',
  'start-project-form.css'
];

const workFragments = new Set(['work', 'medlivo', 'startupfair', 'voice']);
const effectiveRoutes = new Map([
  ['Home', 'index.html'],
  ['Our Work', 'built-by-aloden.html'],
  ['Built by Aloden', 'built-by-aloden.html'],
  ['Capabilities', 'capabilities.html'],
  ['Company', 'company.html'],
  ['Careers', 'careers.html'],
  ['AI Product Engineering', 'ai-product-engineering.html'],
  ['Voice AI Engineering', 'voice-ai-engineering.html'],
  ['Voice & Conversational AI', 'voice-ai-engineering.html'],
  ['Intelligent Workflow & Agentic Systems', 'agentic-ai.html'],
  ['Agentic Workflow Engineering', 'agentic-ai.html'],
  ['Product Modernization', 'product-modernization.html'],
  ['AI-Native Modernization', 'product-modernization.html'],
  ['Healthcare AI', 'healthcare-ai.html'],
  ['Healthcare AI & Workforce Technology', 'healthcare-ai.html'],
  ['Privacy', 'privacy.html'],
  ['Terms', 'terms.html'],
  ['View all products →', 'built-by-aloden.html'],
  ['Explore Medlivo →', 'built-by-aloden.html#medlivo'],
  ['See Medlivo →', 'built-by-aloden.html#medlivo'],
  ['Explore StartupFair →', 'built-by-aloden.html#startupfair'],
  ['Explore Aloden Voice AI →', 'built-by-aloden.html#voice'],
  ['Explore Voice AI →', 'built-by-aloden.html#voice'],
  ['See Aloden Voice AI', 'built-by-aloden.html#voice'],
  ['See Everything We’ve Built →', 'built-by-aloden.html'],
  ["See Everything We've Built →", 'built-by-aloden.html'],
  ['Explore Built by Aloden →', 'built-by-aloden.html'],
  ['See What We’ve Built', 'built-by-aloden.html'],
  ["See What We've Built", 'built-by-aloden.html'],
  ['Explore AI Product Engineering →', 'ai-product-engineering.html'],
  ['Explore Voice AI Engineering →', 'voice-ai-engineering.html'],
  ['Explore Voice & Conversational AI →', 'voice-ai-engineering.html'],
  ['Explore Intelligent Workflow & Agentic Systems →', 'agentic-ai.html'],
  ['Explore Agentic Workflow Engineering →', 'agentic-ai.html'],
  ['Explore Product Modernization →', 'product-modernization.html'],
  ['Explore AI-Native Modernization →', 'product-modernization.html'],
  ['Explore Healthcare AI →', 'healthcare-ai.html']
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

function runtimeRemovesInsight(anchorText, rawHref) {
  const href = rawHref.toLowerCase();
  return anchorText === 'Insights' || href === '#insights' || href.endsWith('#insights') || href.includes('insights.html');
}

function effectiveHref(file, rawHref, anchorText) {
  if (runtimeRemovesInsight(anchorText, rawHref)) return null;
  if (anchorText === 'Start a Project →' || anchorText === 'Start a Project') {
    return file === 'start-project.html' ? '#project-start' : 'start-project.html';
  }
  if (anchorText === 'LinkedIn →' || anchorText === 'LinkedIn') return 'https://www.linkedin.com/company/alodenllc';
  return effectiveRoutes.get(anchorText) || rawHref;
}

function auditResources(file, html) {
  const resourceRe = /(?:src|href)=["']([^"']+)["']/gi;
  for (const match of html.matchAll(resourceRe)) {
    const raw = match[1];
    if (/^(#|mailto:|tel:|https?:\/\/|data:|javascript:)/i.test(raw)) continue;
    const local = cleanUrl(raw.split('#')[0]);
    if (!local || local.endsWith('.html')) continue;
    if (!fs.existsSync(path.join(preview, local))) errors.push(`${file}: missing local resource ${local}`);
  }
}

function auditLinks(file, html) {
  const anchorRe = /<a\b([^>]*)href=["']([^"']*)["']([^>]*)>([\s\S]*?)<\/a>/gi;
  for (const match of html.matchAll(anchorRe)) {
    const rawHref = match[2].trim();
    const anchorText = textOf(match[4]);
    const effective = effectiveHref(file, rawHref, anchorText);
    if (effective === null) continue;
    const href = effective.trim();

    if (!href || href === '#') {
      errors.push(`${file}: unresolved placeholder link for “${anchorText || '(no text)'}”`);
      continue;
    }
    if (/^(mailto:|tel:|https?:\/\/)/i.test(href)) continue;

    const [targetPart, fragment] = href.split('#');
    const targetFile = cleanUrl(targetPart || file) || file;
    if (!targetFile.endsWith('.html')) continue;
    if (!fileExists(targetFile)) {
      errors.push(`${file}: link “${anchorText}” points to missing ${targetFile}`);
      continue;
    }
    if (!fragment) continue;

    const targetHtml = read(targetFile);
    if (!hasId(targetHtml, fragment)) errors.push(`${file}: link “${anchorText}” points to missing #${fragment} in ${targetFile}`);
  }
}

for (const file of [...launchPages, ...supportPages]) {
  if (!fileExists(file)) errors.push(`${file}: required page is missing`);
}
for (const file of requiredFiles) {
  if (!fileExists(file)) errors.push(`${file}: required launch-support file is missing`);
}

for (const file of launchPages) {
  const html = read(file);
  if (!/<!doctype html>/i.test(html)) errors.push(`${file}: missing doctype`);
  if (!/<html\b[^>]*\blang=["']en["']/i.test(html)) errors.push(`${file}: missing lang="en"`);
  if (!/<meta\b[^>]*charset=/i.test(html)) errors.push(`${file}: missing charset metadata`);
  if (!/<meta\b[^>]*name=["']viewport["']/i.test(html)) errors.push(`${file}: missing viewport metadata`);
  if (!/<title>[^<]+<\/title>/i.test(html)) errors.push(`${file}: missing title`);
  if (!/<meta\b[^>]*name=["']description["']/i.test(html)) errors.push(`${file}: missing meta description`);
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

  auditLinks(file, html);
  auditResources(file, html);
}

// Our Work is now a first-class production page generated from the approved V9
// base plus the approved V11 refinements. It must remain iframe-free and keep
// the three product anchors directly in the production document.
if (fileExists('built-by-aloden.html')) {
  const work = read('built-by-aloden.html');
  if (/<iframe\b/i.test(work)) errors.push('built-by-aloden.html: production page must not contain an iframe');
  if (/<base\b[^>]*href=["']\.\.\//i.test(work)) errors.push('built-by-aloden.html: review-directory base href leaked into production');
  if (!/rel=["']canonical["'][^>]*https:\/\/www\.aloden\.com\/built-by-aloden\.html/i.test(work)) errors.push('built-by-aloden.html: canonical URL is missing');
  for (const fragment of workFragments) {
    if (!hasId(work, fragment)) errors.push(`built-by-aloden.html: missing production section #${fragment}`);
  }
  if (!work.includes('From conversation to completed action.')) errors.push('built-by-aloden.html: approved V11 Voice refinement is missing');
  if (!work.includes('PRODUCTION CONTROLS')) errors.push('built-by-aloden.html: approved V11 StartupFair refinement is missing');
  if (!work.includes('final-proofRail')) errors.push('built-by-aloden.html: approved V11 proof-rail refinement is missing');
  if (!work.includes('const d = document;')) errors.push('built-by-aloden.html: direct V11 refinement bootstrap is missing');
}

// Contact is intentionally a noindex alias to the single Start a Project flow.
if (fileExists('contact.html')) {
  const contact = read('contact.html');
  if (!/name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(contact)) errors.push('contact.html: redirect alias must be noindex');
  if (!/rel=["']canonical["'][^>]*https:\/\/www\.aloden\.com\/start-project\.html/i.test(contact)) errors.push('contact.html: canonical must point to start-project.html');
  if (!/url=start-project\.html/i.test(contact) && !/location\.replace\(['"]start-project\.html['"]\)/i.test(contact)) errors.push('contact.html: redirect to start-project.html is missing');
}

// Insights remains in source for a future launch, but it must stay outside the
// current navigation, sitemap, and search surface.
if (fileExists('insights.html')) {
  const app = read('app.js');
  if (!app.includes("currentFile === 'insights.html'") || !app.includes('noindex,nofollow')) errors.push('app.js: Insights noindex protection is missing');
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
  const requiredIds = ['project-start', 'project-contact', 'project-outcome', 'project-name', 'project-email', 'project-company', 'submit-project-brief'];
  for (const id of requiredIds) if (!hasId(formPage, id)) errors.push(`start-project.html: missing required form element #${id}`);
  for (const name of ['project-type', 'project-stage', 'project-help', 'project-timing']) {
    if (!new RegExp(`name=["']${name}["']`).test(formPage)) errors.push(`start-project.html: missing field group ${name}`);
  }
  if (!/class=["'][^"']*projectStageField/i.test(formPage)) errors.push('start-project.html: current-state fieldset is missing');
  if (!/class=["'][^"']*projectHelpField/i.test(formPage)) errors.push('start-project.html: needed-help fieldset is missing');
}

if (fileExists('careers.html')) {
  const careers = read('careers.html');
  if (!hasId(careers, 'opportunities')) errors.push('careers.html: opportunities section is missing');
  if (!hasId(careers, 'early-career')) errors.push('careers.html: early-career section is missing');
  if (!/mailto:hr@aloden\.com/i.test(careers)) errors.push('careers.html: HR contact path is missing');
  if (!/rel=["']canonical["'][^>]*https:\/\/www\.aloden\.com\/careers\.html/i.test(careers)) errors.push('careers.html: canonical URL is missing');
}

if (fileExists('robots.txt')) {
  const robots = read('robots.txt');
  if (!/Sitemap:\s*https:\/\/www\.aloden\.com\/sitemap\.xml/i.test(robots)) errors.push('robots.txt: sitemap declaration is missing');
  for (const pathName of ['/insights.html', '/reviews/', '/live-review.html', '/homepage-section1.html']) {
    if (!robots.includes(`Disallow: ${pathName}`)) errors.push(`robots.txt: missing Disallow: ${pathName}`);
  }
}

if (fileExists('sitemap.xml')) {
  const sitemap = read('sitemap.xml');
  for (const file of launchPages.filter((name) => name !== '404.html')) {
    const expected = file === 'index.html' ? 'https://www.aloden.com/' : `https://www.aloden.com/${file}`;
    if (!sitemap.includes(`<loc>${expected}</loc>`)) errors.push(`sitemap.xml: missing ${expected}`);
  }
  for (const excluded of ['/insights.html', '/contact.html', '/404.html', '/live-review.html', '/reviews/']) {
    if (sitemap.includes(excluded)) errors.push(`sitemap.xml: contains excluded launch resource ${excluded}`);
  }
}

if (!fs.existsSync(path.join(root, 'server', 'project-brief-handler.mjs'))) errors.push('server/project-brief-handler.mjs: missing secure form handler core');
if (!fs.existsSync(path.join(root, 'server', 'project-brief-handler.test.mjs'))) errors.push('server/project-brief-handler.test.mjs: missing form-handler tests');

console.log(`Aloden launch QA audited ${launchPages.length} launch pages, ${supportPages.length} hidden/redirect pages, and ${cssFiles.length} CSS files.`);
for (const warning of warnings) console.warn(`WARNING: ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  console.error(`QA failed with ${errors.length} error(s).`);
  process.exit(1);
}
console.log('QA passed: launch structure, navigation, local resources, metadata, indexing rules, flattened Our Work content, Careers, and project-form structure are intact.');