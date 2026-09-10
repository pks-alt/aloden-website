const menuBtn = document.querySelector('.menuBtn');
const navLinks = document.querySelector('.navLinks');

function openMobileMenu() {
  if (!menuBtn || !navLinks) return;
  menuBtn.setAttribute('aria-expanded', 'true');
  navLinks.style.display = 'flex';
  navLinks.style.position = 'absolute';
  navLinks.style.left = '16px';
  navLinks.style.right = '16px';
  navLinks.style.top = '68px';
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
    if (window.innerWidth > 820 && menuBtn.getAttribute('aria-expanded') === 'true') closeMobileMenu();
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
    if (/^https?:\/\//i.test(href) && !href.includes(location.hostname)) {
      if (anchor.getAttribute('target') === '_blank') anchor.setAttribute('rel', 'noopener noreferrer');
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
    document.body.insertBefore(skip, document.body.firstChild);
  }

  if (!document.querySelector('link[href^="site-qa.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'site-qa.css?v=1';
    document.head.appendChild(link);
  }
}

normalizeSiteLinks();
installAccessibilityBaseline();

if (document.querySelector('.startProjectHero')) {
  const projectFormScript = document.createElement('script');
  projectFormScript.src = 'start-project-form.js?v=1';
  projectFormScript.defer = true;
  document.body.appendChild(projectFormScript);
}
