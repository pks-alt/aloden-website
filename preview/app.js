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

if (document.querySelector('.insightsHero')) {
  const section3 = document.createElement('script');
  section3.src = 'insights-section3.js?v=' + Date.now();
  section3.onload = () => {
    const section4 = document.createElement('script');
    section4.src = 'insights-section4.js?v=' + Date.now();
    document.body.appendChild(section4);
  };
  document.body.appendChild(section3);
}
