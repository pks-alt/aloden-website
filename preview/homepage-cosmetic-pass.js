(() => {
  if (!document.body.classList.contains('homepageFinal')) return;
  document.body.classList.add('homepageCosmeticPass');

  if (!document.querySelector('link[href^="homepage-cosmetic-pass.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'homepage-cosmetic-pass.css?v=2';
    document.head.appendChild(link);
  }

  // Cosmetic pass only: keep the approved Home structure and content intact.
  // The one previously approved hero adjustment is to describe the example
  // domains generically rather than introducing portfolio product names here.
  const heroLabels = {
    medlivo: { glyph: 'H', title: 'Healthcare', subtitle: 'Operations' },
    startupfair: { glyph: 'I', title: 'Innovation', subtitle: 'Platform' },
    voice: { glyph: 'V', title: 'Voice', subtitle: 'Conversation' }
  };

  document.querySelectorAll('.heroOneTab').forEach(tab => {
    const copy = heroLabels[tab.dataset.demo];
    if (!copy) return;
    const glyph = tab.querySelector('.tabGlyph');
    const title = tab.querySelector('b');
    const subtitle = tab.querySelector('small');
    if (glyph) glyph.textContent = copy.glyph;
    if (title) title.textContent = copy.title;
    if (subtitle) subtitle.textContent = copy.subtitle;
  });

  const tablist = document.querySelector('.heroOneTabs');
  if (tablist) tablist.setAttribute('aria-label', 'Examples of Aloden product systems');

  const demo = document.querySelector('.heroOneDemo');
  if (demo) demo.setAttribute('aria-label', 'Interactive examples of Aloden product engineering');

  // The interaction script updates the mini-product label after tab changes,
  // so keep those labels generic too without changing the workflow content.
  const productName = document.querySelector('[data-bind="productName"]');
  const genericProductNames = new Map([
    ['Medlivo', 'Healthcare Operations'],
    ['StartupFair', 'Innovation Platform'],
    ['Aloden Voice AI', 'Conversational AI']
  ]);

  const sanitizeProductName = () => {
    if (!productName) return;
    const replacement = genericProductNames.get((productName.textContent || '').trim());
    if (replacement) productName.textContent = replacement;
  };

  sanitizeProductName();
  if (productName) {
    const observer = new MutationObserver(sanitizeProductName);
    observer.observe(productName, { childList: true, characterData: true, subtree: true });
  }
})();
