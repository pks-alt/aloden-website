(() => {
  if (!document.body.classList.contains('homepageRework')) return;

  document.body.classList.add('homepageFinal');

  const ensure = href => {
    if (document.querySelector(`link[href^="${href}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  };

  ensure('homepage-worldclass.css?v=1');
  ensure('homepage-header-final.css?v=1');

  const brand = document.querySelector('.siteHeader .brand');
  if (brand) {
    brand.href = 'index.html';
    brand.innerHTML = '<img class="siteLogo" src="assets/aloden-cube-logo-dark.svg" alt="Aloden" decoding="async">';
  }

  // Detailed product proof belongs on the dedicated Our Work / Built by Aloden page.
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
