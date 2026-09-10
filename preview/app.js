const menuBtn = document.querySelector('.menuBtn');
const navLinks = document.querySelector('.navLinks');

function openMobileMenu() {
  if (!menuBtn || !navLinks) return;
  menuBtn.setAttribute('aria-expanded', 'true');
  navLinks.style.display = 'flex';
  navLinks.style.position = 'absolute';
  navLinks.style.left = '16px';
  navLinks.style.right = '16px';
  navLinks.style.top = `${document.querySelector('.nav')?.offsetHeight || 74}px`;
  navLinks.style.background = '#fff';
  navLinks.style.border = '1px solid #e6e8ed';
  navLinks.style.borderRadius = '12px';
  navLinks.style.padding = '14px 16px';
  navLinks.style.flexDirection = 'column';
  navLinks.style.alignItems = 'stretch';
  navLinks.style.gap = '2px';
  navLinks.style.boxShadow = '0 16px 38px rgba(21,28,45,.10)';
}

function closeMobileMenu({ returnFocus = false } = {}) {
  if (!menuBtn || !navLinks) return;
  menuBtn.setAttribute('aria-expanded', 'false');
  navLinks.removeAttribute('style');
  if (returnFocus) menuBtn.focus();
}

if (menuBtn && navLinks) {
  if (!navLinks.id) navLinks.id = 'primary-navigation';
  menuBtn.setAttribute('aria-controls', navLinks.id);

  menuBtn.addEventListener('click', () => {
    const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeMobileMenu();
    else openMobileMenu();
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target.closest('a') && menuBtn.getAttribute('aria-expanded') === 'true') closeMobileMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') closeMobileMenu({ returnFocus: true });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1020 && menuBtn.getAttribute('aria-expanded') === 'true') closeMobileMenu();
  });
}

function normalizedText(anchor) {
  return (anchor.textContent || '').replace(/\s+/g, ' ').trim();
}

function normalizeSiteLinks() {
  const currentFile = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const onStartProject = currentFile === 'start-project.html';

  const exactRoutes = new Map([
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

  document.querySelectorAll('a').forEach((anchor) => {
    const text = normalizedText(anchor);
    if (text === 'Start a Project →' || text === 'Start a Project') {
      anchor.setAttribute('href', onStartProject ? '#project-start' : 'start-project.html');
    } else if (text === 'LinkedIn →' || text === 'LinkedIn') {
      anchor.setAttribute('href', 'https://www.linkedin.com/company/alodenllc');
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noopener noreferrer');
    } else if (exactRoutes.has(text)) {
      anchor.setAttribute('href', exactRoutes.get(text));
    }

    const href = anchor.getAttribute('href') || '';
    if (/^https?:\/\//i.test(href) && !href.includes(location.hostname) && anchor.getAttribute('target') === '_blank') {
      anchor.setAttribute('rel', 'noopener noreferrer');
    }
  });

  document.querySelectorAll('.navLinks a.active').forEach((anchor) => anchor.setAttribute('aria-current', 'page'));
}

function installAccessibilityBaseline() {
  const main = document.querySelector('main');
  if (main && !main.id) main.id = 'main-content';

  if (main && !document.querySelector('.siteSkipLink')) {
    const skip = document.createElement('a');
    skip.className = 'siteSkipLink';
    skip.href = '#main-content';
    skip.textContent = 'Skip to main content';
    skip.addEventListener('click', () => {
      if (!main.hasAttribute('tabindex')) main.setAttribute('tabindex', '-1');
      window.setTimeout(() => main.focus({ preventScroll: true }), 0);
    });
    document.body.insertBefore(skip, document.body.firstChild);
  }

  if (!document.querySelector('link[href^="site-qa.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'site-qa.css?v=1';
    document.head.appendChild(link);
  }
}

function installMetadataBaseline() {
  const currentFile = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (currentFile === '404.html' || currentFile === 'live-review.html') return;

  const siteOrigin = 'https://www.aloden.com';
  const canonicalPath = currentFile === 'index.html' || !currentFile ? '/' : `/${currentFile}`;
  const canonicalUrl = `${siteOrigin}${canonicalPath}`;
  const title = document.title || 'Aloden';
  const description = document.querySelector('meta[name="description"]')?.content?.trim() || 'AI product engineering and digital modernization for intelligent products built for real-world use.';

  if (!document.querySelector('link[rel="canonical"]')) {
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = canonicalUrl;
    document.head.appendChild(canonical);
  }

  if (!document.querySelector('link[rel="icon"]')) {
    const icon = document.createElement('link');
    icon.rel = 'icon';
    icon.href = 'assets/aloden-logo-official.svg';
    icon.type = 'image/svg+xml';
    document.head.appendChild(icon);
  }

  const ensureMeta = (selector, attrs) => {
    let node = document.head.querySelector(selector);
    if (!node) {
      node = document.createElement('meta');
      Object.entries(attrs).forEach(([name, value]) => node.setAttribute(name, value));
      document.head.appendChild(node);
    }
    return node;
  };

  ensureMeta('meta[name="theme-color"]', { name: 'theme-color', content: '#ffffff' });
  ensureMeta('meta[property="og:title"]', { property: 'og:title', content: title });
  ensureMeta('meta[property="og:description"]', { property: 'og:description', content: description });
  ensureMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
  ensureMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
  ensureMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Aloden' });
  ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary' });

  if (!document.querySelector('script[data-aloden-organization-schema]')) {
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.dataset.alodenOrganizationSchema = 'true';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Aloden LLC',
      url: `${siteOrigin}/`,
      logo: `${siteOrigin}/assets/aloden-logo-official.svg`,
      email: 'hello@aloden.com',
      sameAs: ['https://www.linkedin.com/company/alodenllc']
    });
    document.head.appendChild(schema);
  }
}

normalizeSiteLinks();
installAccessibilityBaseline();
installMetadataBaseline();

if (document.querySelector('.hero#home')) {
  document.body.classList.add('homepageRework');

  if (!document.querySelector('link[href^="homepage-all-sections.css"]')) {
    const homepageCss = document.createElement('link');
    homepageCss.rel = 'stylesheet';
    homepageCss.href = 'homepage-all-sections.css?v=1';
    document.head.appendChild(homepageCss);
  }

  const homepageSection1Script = document.createElement('script');
  homepageSection1Script.src = 'homepage-section1-review.js?v=2';
  homepageSection1Script.defer = true;
  document.body.appendChild(homepageSection1Script);
}

if (document.querySelector('.startProjectHero')) {
  const projectFormScript = document.createElement('script');
  projectFormScript.src = 'start-project-form.js?v=1';
  projectFormScript.defer = true;
  projectFormScript.addEventListener('load', () => {
    const note = document.querySelector('.projectSubmissionReview');
    if (note) note.textContent = 'INITIAL PROJECT BRIEF · HIGH-LEVEL CONTEXT ONLY.';
  });
  document.body.appendChild(projectFormScript);
}
