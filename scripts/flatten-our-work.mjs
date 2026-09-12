import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const preview = path.join(root, 'preview');
const v9Path = path.join(preview, 'reviews', 'our-work-world-class-v9.html');
const v11Path = path.join(preview, 'reviews', 'our-work-final-v11.html');
const outputPath = path.join(preview, 'built-by-aloden.html');

const v9 = fs.readFileSync(v9Path, 'utf8');
const v11 = fs.readFileSync(v11Path, 'utf8');

const refinementMarker = '/* Preserve V9. Only targeted refinements are applied below. */';
const start = v11.indexOf(refinementMarker);
const endMarker = '\n});\n</script>';
const end = v11.lastIndexOf(endMarker);

if (start < 0 || end < 0 || end <= start) {
  throw new Error('Could not extract approved V11 refinement logic.');
}

const refinements = v11.slice(start, end).trim();

let html = v9;

// The V9 review file lives one directory deeper. The production page does not.
html = html.replace(/\n?<base href="\.\.\/">\n?/, '\n');

// Keep the source HTML aligned with the launch navigation even before app.js runs.
html = html
  .replace(/>Built by Aloden</g, '>Our Work<')
  .replace(/<a href="index\.html#insights">Insights<\/a>/g, '')
  .replace(/href="index\.html#capabilities"/g, 'href="capabilities.html"')
  .replace(/href="index\.html#company"/g, 'href="company.html"')
  .replace(/src="assets\/aloden-logo-primary\.webp"/g, 'src="assets/aloden-cube-logo.svg"');

// Correct the one invalid nested-main element in the approved StartupFair markup at source.
html = html.replace(
  /<main class="sf9-studio">([\s\S]*?)<\/main>/,
  '<div class="sf9-studio">$1</div>'
);

// Static production metadata matters for search engines and link unfurlers before JavaScript runs.
const productionMeta = [
  '<meta name="robots" content="index,follow">',
  '<link rel="canonical" href="https://www.aloden.com/built-by-aloden.html">',
  '<link rel="icon" type="image/svg+xml" href="assets/aloden-cube-symbol.svg">',
  '<meta property="og:title" content="Our Work — Aloden">',
  '<meta property="og:description" content="Selected products designed and engineered by Aloden across healthcare workforce operations, innovation platforms, and system-connected voice AI.">',
  '<meta property="og:url" content="https://www.aloden.com/built-by-aloden.html">',
  '<meta property="og:type" content="website">',
  '<meta property="og:site_name" content="Aloden">',
  '<meta name="twitter:card" content="summary">'
].join('\n');

html = html.replace(
  /(<meta name="description"[^>]*>\s*)/,
  `$1\n${productionMeta}\n`
);

// Apply the already-approved V11 refinements directly to the flattened document.
// The visible V11 design remains the source of truth; only the iframe wrapper is removed.
const directRefinementScript = `\n<script>\n(() => {\n  const d = document;\n${refinements}\n})();\n<\/script>\n`;

html = html.replace(/\n<\/body>/, `${directRefinementScript}</body>`);

fs.writeFileSync(outputPath, html, 'utf8');
console.log(`Flattened approved Our Work page → ${path.relative(root, outputPath)}`);
