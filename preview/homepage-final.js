(() => {
  if (!document.body.classList.contains('homepageRework')) return;

  document.body.classList.add('homepageFinal');

  if (!document.querySelector('link[href^="homepage-worldclass.css"]')) {
    const worldclass = document.createElement('link');
    worldclass.rel = 'stylesheet';
    worldclass.href = 'homepage-worldclass.css?v=1';
    document.head.appendChild(worldclass);
  }

  const brand = document.querySelector('.siteHeader .brand');
  if (brand) {
    brand.href = 'index.html';
    brand.innerHTML = '<img class="siteLogo" src="assets/aloden-cube-logo.svg" alt="Aloden" decoding="async">';
  }

  // Product proof belongs on the dedicated Built by Aloden page.
  // Home moves directly from the hero into the buyer-oriented build/modernize story.
  const built = document.querySelector('#built');
  if (built) built.remove();

  const footerBrand = document.querySelector('.footerFinalBrand');
  if (footerBrand) {
    const oldLockup = footerBrand.querySelector('.alodenLockup');
    if (oldLockup) oldLockup.outerHTML = '<img class="footerLogo" src="assets/aloden-cube-logo-dark.svg" alt="Aloden" loading="lazy" decoding="async">';
  }

  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) favicon.href = 'assets/aloden-cube-symbol.svg';
})();
