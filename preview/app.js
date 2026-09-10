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

if (document.querySelector('.startProjectHero')) {
  const step2 = document.createElement('script');
  step2.src = 'start-project-section2.js?v=' + Date.now();
  step2.onload = () => {
    const step3 = document.createElement('script');
    step3.src = 'start-project-section3.js?v=' + Date.now();
    step3.onload = () => {
      const step4 = document.createElement('script');
      step4.src = 'start-project-section4.js?v=' + Date.now();
      document.body.appendChild(step4);
    };
    document.body.appendChild(step3);
  };
  document.body.appendChild(step2);
}
