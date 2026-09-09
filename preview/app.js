const menuBtn = document.querySelector('.menuBtn');
const navLinks = document.querySelector('.navLinks');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!isOpen));

    if (!isOpen) {
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
    } else {
      navLinks.removeAttribute('style');
    }
  });
}

if (document.querySelector('.modernizationHero')) {
  (async () => {
    for (const src of ['modernization-section3.js', 'modernization-section4.js']) {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src + '?v=' + Date.now();
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    }
  })().catch(err => console.error('Product Modernization review layer failed', err));
}
