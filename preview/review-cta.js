(() => {
  const section = document.querySelector('.finalCta');
  if (!section) return;
  const band = section.querySelector('.ctaBand');
  if (!band) return;

  const h2 = band.querySelector('h2');
  if (h2) h2.textContent = 'Have something worth building?';

  const p = band.querySelector('p');
  if (p) p.textContent = 'Tell us what you’re building, modernizing, or trying to solve. Aloden can help shape the right path from idea to production.';

  const cta = band.querySelector('a.btn');
  if (cta) cta.textContent = 'Start a Project →';
})();
