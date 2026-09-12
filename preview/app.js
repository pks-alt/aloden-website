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
  navLinks.style.border = '1px solid #e3e6eb';
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
    if (isOpen) closeMobileMenu(); else openMobileMenu();
  });
  navLinks.addEventListener('click', event => {
    if (event.target.closest('a') && menuBtn.getAttribute('aria-expanded') === 'true') closeMobileMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') closeMobileMenu({ returnFocus: true });
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1020 && menuBtn.getAttribute('aria-expanded') === 'true') closeMobileMenu();
  });
}

function normalizedText(anchor) {
  return (anchor.textContent || '').replace(/\s+/g, ' ').trim();
}

function ensureStylesheet(href) {
  if (document.querySelector(`link[href^="${href}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

function standardizeFooterNavigation() {
  const footerRenames = new Map([
    ['Built by Aloden', 'Our Work'],
    ['Voice AI Engineering', 'Voice & Conversational AI'],
    ['Intelligent Workflow & Agentic Systems', 'Agentic Workflow Engineering'],
    ['Product Modernization', 'AI-Native Modernization']
  ]);

  document.querySelectorAll('footer .footerFinalCol a, footer .contentReviewFooterCol a').forEach(anchor => {
    const text = normalizedText(anchor);
    if (footerRenames.has(text)) anchor.textContent = footerRenames.get(text);
  });

  document.querySelectorAll('footer .footerFinalCol, footer .contentReviewFooterCol').forEach(column => {
    const heading = (column.querySelector('h4')?.textContent || '').trim();
    const links = [...column.querySelectorAll('a')];
    if (heading === 'Explore' && !links.some(link => normalizedText(link) === 'Home')) {
      const home = document.createElement('a');
      home.href = 'index.html';
      home.textContent = 'Home';
      column.querySelector('h4')?.insertAdjacentElement('afterend', home);
    }
    if (heading === 'Connect' && !links.some(link => normalizedText(link) === 'LinkedIn' || normalizedText(link) === 'LinkedIn →')) {
      const linkedIn = document.createElement('a');
      linkedIn.href = 'https://www.linkedin.com/company/alodenllc';
      linkedIn.textContent = 'LinkedIn →';
      column.appendChild(linkedIn);
    }
  });

  document.querySelectorAll('footer .footerLegal, footer .contentReviewFooterLegal').forEach(legal => {
    const texts = [...legal.querySelectorAll('a')].map(normalizedText);
    if (!texts.includes('Privacy')) {
      const privacy = document.createElement('a');
      privacy.href = 'privacy.html';
      privacy.textContent = 'Privacy';
      legal.appendChild(privacy);
    }
    if (!texts.includes('Terms')) {
      const terms = document.createElement('a');
      terms.href = 'terms.html';
      terms.textContent = 'Terms';
      legal.appendChild(terms);
    }
  });
}

function normalizeSiteLinks() {
  const currentFile = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const onStartProject = currentFile === 'start-project.html';
  const routes = new Map([
    ['Home', 'index.html'],
    ['Our Work', 'built-by-aloden.html'],
    ['Built by Aloden', 'built-by-aloden.html'],
    ['Capabilities', 'capabilities.html'],
    ['Company', 'company.html'],
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

  document.querySelectorAll('a').forEach(anchor => {
    let text = normalizedText(anchor);
    if (text === 'Built by Aloden') {
      anchor.textContent = 'Our Work';
      text = 'Our Work';
    }
    if (text === 'Start a Project →' || text === 'Start a Project') {
      anchor.href = onStartProject ? '#project-start' : 'start-project.html';
    } else if (text === 'LinkedIn →' || text === 'LinkedIn') {
      anchor.href = 'https://www.linkedin.com/company/alodenllc';
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
    } else if (routes.has(text)) {
      anchor.href = routes.get(text);
    }
    const href = anchor.getAttribute('href') || '';
    if (/^https?:\/\//i.test(href) && !href.includes(location.hostname) && anchor.target === '_blank') anchor.rel = 'noopener noreferrer';
  });

  document.querySelectorAll('.navLinks a.active').forEach(anchor => anchor.setAttribute('aria-current', 'page'));
}

function removeInsightsFromLaunch() {
  document.querySelectorAll('a').forEach(anchor => {
    const text = normalizedText(anchor);
    const href = (anchor.getAttribute('href') || '').toLowerCase();
    if (text === 'Insights' || href === '#insights' || href.endsWith('#insights') || href.includes('insights.html')) anchor.remove();
  });

  const homeInsights = document.querySelector('#insights');
  if (homeInsights) homeInsights.remove();
}

function standardizeSiteChrome() {
  const currentFile = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const isHome = currentFile === 'index.html' || currentFile === '';
  document.body.classList.add('siteFinalSystem');
  document.body.dataset.page = currentFile.replace(/\.html$/i, '') || 'home';
  ensureStylesheet('site-final-system.css?v=1');

  const headerLogo = isHome ? 'assets/aloden-cube-logo-dark.svg' : 'assets/aloden-cube-logo.svg';
  const footerLogo = 'assets/aloden-cube-logo-dark.svg';

  document.querySelectorAll('.siteHeader .brand').forEach(brand => {
    brand.href = 'index.html';
    brand.setAttribute('aria-label', 'Aloden home');
    const homeClass = isHome ? ' siteLogo' : '';
    brand.innerHTML = `<img class="siteBrandLogo${homeClass}" src="${headerLogo}" alt="Aloden" decoding="async">`;
  });

  document.querySelectorAll('footer .alodenLockup').forEach(lockup => {
    lockup.outerHTML = `<img class="siteFooterLogo" src="${footerLogo}" alt="Aloden" loading="lazy" decoding="async">`;
  });

  document.querySelectorAll('footer img.c-footerBrand, footer img.w9-footerLogo, footer img.footerLogo, footer .footerFinalBrand > img, footer .contentReviewFooterBrand > img').forEach(img => {
    img.src = footerLogo;
    img.alt = 'Aloden';
    img.classList.add('siteFooterLogo');
    img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');
  });
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
  ensureStylesheet('site-qa.css?v=1');
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

  let icon = document.querySelector('link[rel="icon"]');
  if (!icon) {
    icon = document.createElement('link');
    icon.rel = 'icon';
    icon.type = 'image/svg+xml';
    document.head.appendChild(icon);
  }
  icon.href = 'assets/aloden-cube-symbol.svg';

  const ensureMeta = (selector, attrs) => {
    let node = document.head.querySelector(selector);
    if (!node) {
      node = document.createElement('meta');
      Object.entries(attrs).forEach(([name, value]) => node.setAttribute(name, value));
      document.head.appendChild(node);
    }
    return node;
  };

  if (currentFile === 'insights.html') {
    const robots = ensureMeta('meta[name="robots"]', { name: 'robots', content: 'noindex,nofollow' });
    robots.setAttribute('content', 'noindex,nofollow');
  }

  ensureMeta('meta[name="theme-color"]', { name: 'theme-color', content: '#fbfaf8' });
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
      logo: `${siteOrigin}/assets/aloden-cube-logo.svg`,
      email: 'hello@aloden.com',
      sameAs: ['https://www.linkedin.com/company/alodenllc']
    });
    document.head.appendChild(schema);
  }
}

standardizeSiteChrome();
standardizeFooterNavigation();
normalizeSiteLinks();
removeInsightsFromLaunch();
installAccessibilityBaseline();
installMetadataBaseline();

if (document.querySelector('.hero#home')) {
  document.body.classList.add('homepageRework');
  ensureStylesheet('homepage-all-sections.css?v=2');
  ensureStylesheet('homepage-final.css?v=1');

  const heroScript = document.createElement('script');
  heroScript.src = 'homepage-section1-review.js?v=2';
  heroScript.async = false;
  document.body.appendChild(heroScript);

  const finalScript = document.createElement('script');
  finalScript.src = 'homepage-final.js?v=1';
  finalScript.async = false;
  document.body.appendChild(finalScript);
}

if (document.querySelector('.startProjectHero')) {
  const projectFormScript = document.createElement('script');
  projectFormScript.src = 'start-project-form.js?v=1';
  projectFormScript.async = false;
  projectFormScript.addEventListener('load', () => {
    const note = document.querySelector('.projectSubmissionReview');
    if (note) note.textContent = 'INITIAL PROJECT BRIEF · HIGH-LEVEL CONTEXT ONLY.';
  });
  document.body.appendChild(projectFormScript);
}
