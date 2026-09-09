// Built by Aloden content-review layer — Section 7 / final CTA.
(() => {
  if (!document.querySelector('.builtHeroGrid')) return;
  const section = document.querySelector('.finalCta#cta');
  if (!section) return;
  const band = section.querySelector('.ctaBand');
  if (!band) return;

  const h2 = band.querySelector('h2');
  if (h2) h2.textContent = 'What will you build next?';

  const p = band.querySelector('p');
  if (p) p.textContent = 'You’ve seen how Aloden approaches healthcare workflows, multi-sided innovation platforms, and system-connected AI. Bring us the problem, product idea, or platform you want to modernize—we’ll help shape the path to production.';

  const cta = band.querySelector('a.btn');
  if (cta) cta.textContent = 'Start a Project →';
})();
