(() => {
  if (!document.body.classList.contains('homepageFinal')) return;
  document.body.classList.add('homepageCosmeticPass');

  if (!document.querySelector('link[href^="homepage-cosmetic-pass.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'homepage-cosmetic-pass.css?v=1';
    document.head.appendChild(link);
  }

  // Keep the hero about Aloden capabilities, not the names of portfolio products.
  const heroLabels = {
    medlivo: { glyph: 'H', title: 'Healthcare', subtitle: 'Operations' },
    startupfair: { glyph: 'I', title: 'Innovation', subtitle: 'Platforms' },
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

  const heroTablist = document.querySelector('.heroOneTabs');
  if (heroTablist) heroTablist.setAttribute('aria-label', 'Examples of Aloden product systems');
  const heroDemo = document.querySelector('.heroOneDemo');
  if (heroDemo) heroDemo.setAttribute('aria-label', 'Interactive examples of Aloden product engineering');

  // The interactive demo updates this value after tab changes. Keep it generic at all times.
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

  // Introduce named proof only after the Aloden-first hero.
  if (!document.querySelector('#home-selected-work')) {
    const selectedWork = document.createElement('section');
    selectedWork.id = 'home-selected-work';
    selectedWork.className = 'homeSelectedWork';
    selectedWork.innerHTML = `
      <div class="container">
        <div class="homeSelectedHead">
          <div>
            <div class="eyebrow">SELECTED WORK</div>
            <h2>Real products. Built for real use.</h2>
          </div>
          <div class="homeSelectedIntro">
            <p>A few examples of how Aloden turns complex workflows and ideas into production software.</p>
            <a href="built-by-aloden.html">Explore Our Work →</a>
          </div>
        </div>
        <div class="homeSelectedRows">
          <a class="homeSelectedRow" href="built-by-aloden.html#medlivo">
            <span class="homeSelectedIndex">01</span>
            <span class="homeSelectedBrand"><img src="assets/medlivo-logo.webp" alt="Medlivo" loading="lazy" decoding="async"></span>
            <span class="homeSelectedCopy"><b>Healthcare workforce technology</b><small>INTELLIGENCE · MATCHING · CREDENTIALING · SCHEDULING · OPERATIONS</small></span>
            <span class="homeSelectedArrow" aria-hidden="true">↗</span>
          </a>
          <a class="homeSelectedRow" href="built-by-aloden.html#startupfair">
            <span class="homeSelectedIndex">02</span>
            <span class="homeSelectedBrand"><img src="assets/startupfair-logo.webp" alt="StartupFair" loading="lazy" decoding="async"></span>
            <span class="homeSelectedCopy"><b>Innovation and challenge platform</b><small>CHALLENGE · BUILDERS · SOLUTIONS · EVALUATION · OPPORTUNITY</small></span>
            <span class="homeSelectedArrow" aria-hidden="true">↗</span>
          </a>
          <a class="homeSelectedRow" href="built-by-aloden.html#voice">
            <span class="homeSelectedIndex">03</span>
            <span class="homeSelectedBrand textOnly"><b>Conversational AI</b></span>
            <span class="homeSelectedCopy"><b>System-connected voice experiences</b><small>CONVERSATION · INTENT · PERMISSION · ACTION · HUMAN HANDOFF</small></span>
            <span class="homeSelectedArrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>`;
    const hero = document.querySelector('.heroOne');
    if (hero) hero.insertAdjacentElement('afterend', selectedWork);
  }

  // Use the current market-facing capability names everywhere on Home.
  const capabilityNames = new Map([
    ['Voice AI Engineering', 'Voice & Conversational AI'],
    ['Intelligent Workflow & Agentic Systems', 'Agentic Workflow Engineering'],
    ['Product Modernization', 'AI-Native Modernization']
  ]);
  document.querySelectorAll('.homeCapability h3').forEach(title => {
    const replacement = capabilityNames.get((title.textContent || '').trim());
    if (replacement) title.textContent = replacement;
  });

  // Make the page read as proof → ways to engage → capabilities → audience.
  const selected = document.querySelector('#home-selected-work');
  const positioning = document.querySelector('.homePositioning');
  const paths = document.querySelector('.homePaths');
  const capabilities = document.querySelector('.homeCapabilities');
  const audience = document.querySelector('.homeAudience');
  const why = document.querySelector('.homeWhy');
  if (selected && positioning) selected.after(positioning);
  if (positioning && paths) positioning.after(paths);
  if (paths && capabilities) paths.after(capabilities);
  if (capabilities && audience) capabilities.after(audience);
  if (audience && why) audience.after(why);

  // Fold the separate Trust section into a concise proof rail under Why Aloden.
  const trust = document.querySelector('#trust');
  if (why && !why.querySelector('.homeTrustRail')) {
    const container = why.querySelector('.container');
    if (container) {
      const rail = document.createElement('div');
      rail.className = 'homeTrustRail';
      rail.innerHTML = `
        <span class="homeTrustLabel">BUILT-IN TRUST</span>
        <span><b>Confidentiality</b><small>Protect the work from day one.</small></span>
        <span><b>Controlled delivery</b><small>Clear decisions and releases.</small></span>
        <span><b>Evaluation</b><small>Test behavior before production.</small></span>
        <span><b>Human control</b><small>Keep accountability where it belongs.</small></span>`;
      container.appendChild(rail);
    }
  }
  if (trust) trust.remove();
})();
