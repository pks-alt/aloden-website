import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const preview = path.join(root, 'preview');
const siteOrigin = 'https://www.aloden.com';
const shareImage = `${siteOrigin}/assets/aloden-social-share.png`;
const lastmod = '2026-09-12';

const pages = {
  'index.html': {
    path: '/',
    title: 'AI Product Engineering Company | Aloden',
    description: 'Aloden builds AI-native products, modernizes existing software, and engineers agentic and voice workflows for production-ready real-world use.',
    schemaType: 'WebPage'
  },
  'built-by-aloden.html': {
    title: 'AI Product Engineering Work & Products | Aloden',
    description: 'See Aloden products and engineering work across healthcare workforce technology, innovation platforms, agentic workflows, and connected voice AI.',
    schemaType: 'CollectionPage'
  },
  'capabilities.html': {
    title: 'AI Engineering Services & Capabilities | Aloden',
    description: 'Explore Aloden’s AI product engineering, AI-native modernization, agentic workflow engineering, voice AI, and healthcare AI capabilities.',
    schemaType: 'WebPage'
  },
  'ai-product-engineering.html': {
    title: 'AI Product Engineering Services | Aloden',
    description: 'Build production-ready AI products with Aloden—from product strategy and UX to AI architecture, engineering, evaluation, integration, and launch.',
    schemaType: 'Service',
    serviceName: 'AI Product Engineering',
    serviceType: 'AI product engineering services'
  },
  'product-modernization.html': {
    title: 'AI-Native Software Modernization | Aloden',
    description: 'Modernize existing software for the AI era with staged architecture, UX, data, API, cloud, workflow, and AI-readiness improvements.',
    schemaType: 'Service',
    serviceName: 'AI-Native Modernization',
    serviceType: 'AI-native software modernization services'
  },
  'agentic-ai.html': {
    title: 'Agentic Workflow Engineering & AI Agents | Aloden',
    description: 'Aloden engineers agentic workflows that connect AI agents to tools, systems, approvals, verification, observability, and human control.',
    schemaType: 'Service',
    serviceName: 'Agentic Workflow Engineering',
    serviceType: 'Agentic workflow and AI agent engineering services'
  },
  'voice-ai-engineering.html': {
    title: 'Voice & Conversational AI Engineering | Aloden',
    description: 'Build voice and conversational AI that understands intent, uses business context, takes permitted actions, confirms outcomes, and hands off safely.',
    schemaType: 'Service',
    serviceName: 'Voice & Conversational AI',
    serviceType: 'Voice AI and conversational AI engineering services'
  },
  'healthcare-ai.html': {
    title: 'Healthcare AI & Workforce Technology | Aloden',
    description: 'Aloden builds healthcare AI and workforce technology for matching, credentialing, scheduling, operations, automation, and responsible human oversight.',
    schemaType: 'Service',
    serviceName: 'Healthcare AI & Workforce Technology',
    serviceType: 'Healthcare AI and workforce technology engineering services'
  },
  'company.html': {
    title: 'About Aloden | AI-Native Product Engineering Company',
    description: 'Aloden is an AI-native product engineering company founded in 2024, combining product thinking, engineering depth, practical AI, and production discipline.',
    schemaType: 'AboutPage'
  },
  'careers.html': {
    title: 'Careers at Aloden | AI Product Engineering Jobs',
    description: 'Explore careers at Aloden and learn how our product, design, engineering, and AI teams turn ambitious ideas into production-ready software.',
    schemaType: 'WebPage'
  },
  'start-project.html': {
    title: 'Start an AI Product Engineering Project | Aloden',
    description: 'Tell Aloden what you want to build, modernize, or automate. Start a conversation about AI product engineering, agentic workflows, voice AI, or healthcare AI.',
    schemaType: 'ContactPage'
  },
  'privacy.html': {
    title: 'Privacy Notice | Aloden',
    description: 'Aloden LLC privacy notice for website visitors and project inquiries.',
    schemaType: 'WebPage'
  },
  'terms.html': {
    title: 'Website Terms | Aloden',
    description: 'Terms for using the Aloden LLC website and project inquiry experience.',
    schemaType: 'WebPage'
  }
};

const serviceFiles = new Set([
  'ai-product-engineering.html',
  'product-modernization.html',
  'agentic-ai.html',
  'voice-ai-engineering.html',
  'healthcare-ai.html'
]);

function canonicalFor(file, config) {
  return `${siteOrigin}${config.path || `/${file}`}`;
}

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function stripManagedSeo(html) {
  html = html.replace(/\s*<!-- ALODEN SEO START -->[\s\S]*?<!-- ALODEN SEO END -->\s*/gi, '\n');
  html = html.replace(/\s*<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>\s*/gi, '\n');
  html = html.replace(/\s*<link\b(?=[^>]*\brel=["']icon["'])[^>]*>\s*/gi, '\n');
  html = html.replace(/\s*<meta\b(?=[^>]*\bname=["']robots["'])[^>]*>\s*/gi, '\n');
  html = html.replace(/\s*<meta\b(?=[^>]*\bname=["']theme-color["'])[^>]*>\s*/gi, '\n');
  html = html.replace(/\s*<meta\b(?=[^>]*\bproperty=["']og:[^"']+["'])[^>]*>\s*/gi, '\n');
  html = html.replace(/\s*<meta\b(?=[^>]*\bname=["']twitter:[^"']+["'])[^>]*>\s*/gi, '\n');
  html = html.replace(/\s*<script\b[^>]*data-aloden-organization-schema[^>]*>[\s\S]*?<\/script>\s*/gi, '\n');
  return html;
}

function replaceTitleAndDescription(html, config) {
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(config.title)}</title>`);
  const descriptionTag = `<meta name="description" content="${esc(config.description)}">`;
  if (/<meta\b(?=[^>]*\bname=["']description["'])[^>]*>/i.test(html)) {
    html = html.replace(/<meta\b(?=[^>]*\bname=["']description["'])[^>]*>/i, descriptionTag);
  } else {
    html = html.replace(/<head>/i, `<head>\n${descriptionTag}`);
  }
  return html;
}

function graphFor(file, config) {
  const canonical = canonicalFor(file, config);
  const graph = [
    {
      '@type': 'Organization',
      '@id': `${siteOrigin}/#organization`,
      name: 'Aloden LLC',
      alternateName: 'Aloden',
      url: `${siteOrigin}/`,
      logo: `${siteOrigin}/assets/aloden-cube-logo.svg`,
      foundingDate: '2024',
      description: 'AI-native product engineering and digital modernization company building intelligent software for real-world use.',
      email: 'hello@aloden.com',
      sameAs: ['https://www.linkedin.com/company/alodenllc']
    },
    {
      '@type': 'WebSite',
      '@id': `${siteOrigin}/#website`,
      url: `${siteOrigin}/`,
      name: 'Aloden',
      publisher: { '@id': `${siteOrigin}/#organization` }
    },
    {
      '@type': config.schemaType === 'Service' ? 'WebPage' : config.schemaType,
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: config.title,
      description: config.description,
      isPartOf: { '@id': `${siteOrigin}/#website` },
      about: { '@id': `${siteOrigin}/#organization` }
    }
  ];

  if (serviceFiles.has(file)) {
    graph.push({
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: config.serviceName,
      serviceType: config.serviceType,
      url: canonical,
      description: config.description,
      provider: { '@id': `${siteOrigin}/#organization` }
    });
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteOrigin}/` },
        { '@type': 'ListItem', position: 2, name: 'Capabilities', item: `${siteOrigin}/capabilities.html` },
        { '@type': 'ListItem', position: 3, name: config.serviceName, item: canonical }
      ]
    });
  } else if (!['index.html', 'privacy.html', 'terms.html'].includes(file)) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteOrigin}/` },
        { '@type': 'ListItem', position: 2, name: config.title.replace(/ \| Aloden.*$/, '').replace(/^About Aloden.*$/, 'Company'), item: canonical }
      ]
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

function seoBlock(file, config) {
  const canonical = canonicalFor(file, config);
  const schema = JSON.stringify(graphFor(file, config));
  return `<!-- ALODEN SEO START -->
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
<link rel="canonical" href="${canonical}">
<link rel="icon" type="image/svg+xml" href="assets/aloden-cube-symbol.svg">
<meta name="theme-color" content="#0b0d12">
<meta property="og:locale" content="en_US">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Aloden">
<meta property="og:title" content="${esc(config.title)}">
<meta property="og:description" content="${esc(config.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${shareImage}">
<meta property="og:image:secure_url" content="${shareImage}">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Aloden — AI Product Engineering">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(config.title)}">
<meta name="twitter:description" content="${esc(config.description)}">
<meta name="twitter:image" content="${shareImage}">
<meta name="twitter:image:alt" content="Aloden — AI Product Engineering">
<script type="application/ld+json" data-aloden-organization-schema="true">${schema}</script>
<!-- ALODEN SEO END -->`;
}

for (const [file, config] of Object.entries(pages)) {
  const fullPath = path.join(preview, file);
  if (!fs.existsSync(fullPath)) throw new Error(`Missing SEO target: ${file}`);
  let html = fs.readFileSync(fullPath, 'utf8');
  html = stripManagedSeo(html);
  html = replaceTitleAndDescription(html, config);
  if (!/<\/head>/i.test(html)) throw new Error(`Missing </head> in ${file}`);
  html = html.replace(/<\/head>/i, `${seoBlock(file, config)}\n</head>`);
  fs.writeFileSync(fullPath, html);
}

// Make the future Insights page noindex at source, not only through runtime JavaScript.
const insightsPath = path.join(preview, 'insights.html');
if (fs.existsSync(insightsPath)) {
  let insights = fs.readFileSync(insightsPath, 'utf8');
  insights = insights.replace(/<meta\b(?=[^>]*\bname=["']robots["'])[^>]*>\s*/gi, '');
  insights = insights.replace(/<head>/i, '<head>\n<meta name="robots" content="noindex,nofollow">');
  fs.writeFileSync(insightsPath, insights);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.entries(pages).map(([file, config]) => `  <url><loc>${canonicalFor(file, config)}</loc><lastmod>${lastmod}</lastmod></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(preview, 'sitemap.xml'), sitemap);

console.log(`Applied static SEO/social metadata to ${Object.keys(pages).length} public pages.`);
