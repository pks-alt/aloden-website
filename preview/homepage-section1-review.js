(() => {
  const hero = document.querySelector('.hero#home');
  if (!hero || hero.dataset.section1Review === 'true') return;

  const cssHref = 'homepage-section1-review.css?v=1';
  if (!document.querySelector(`link[href^="homepage-section1-review.css"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssHref;
    document.head.appendChild(link);
  }

  hero.dataset.section1Review = 'true';
  hero.classList.add('homeHeroRework');

  const proofStrip = hero.querySelector('.proofStrip');
  if (proofStrip) {
    proofStrip.setAttribute('aria-label', 'Aloden product engineering strengths');
    proofStrip.innerHTML = `
      <article class="heroProofCard">
        <span class="heroProofIndex">01 · BUILD</span>
        <b>AI Product Engineering</b>
        <p>From product strategy and AI architecture to design, engineering, and production.</p>
      </article>
      <article class="heroProofCard">
        <span class="heroProofIndex">02 · EVOLVE</span>
        <b>Modernization at Scale</b>
        <p>Modernize products, platforms, and workflows without losing what already works.</p>
      </article>
      <article class="heroProofCard">
        <span class="heroProofIndex">03 · OPERATE</span>
        <b>Built for Real Use</b>
        <p>Intelligent products engineered around users, systems, operations, and measurable outcomes.</p>
      </article>`;
  }

  const canvas = hero.querySelector('.productCanvas');
  if (canvas) {
    canvas.setAttribute('aria-label', 'Aloden product engineering system from product problem to production');
    canvas.innerHTML = `
      <div class="heroSystemFrame">
        <div class="heroSystemTop">
          <div class="heroSystemIdentity"><i aria-hidden="true"></i><b>Aloden product system</b></div>
          <span>PROBLEM → PRODUCTION</span>
        </div>

        <div class="heroSystemInputs" aria-label="Common product starting points">
          <div class="heroSystemInput"><span>START 01</span><b>New product</b><small>Idea · market opportunity</small></div>
          <div class="heroSystemInput"><span>START 02</span><b>Existing product</b><small>Modernize · add intelligence</small></div>
          <div class="heroSystemInput"><span>START 03</span><b>Complex workflow</b><small>Connect · automate · improve</small></div>
        </div>

        <section class="heroSystemCore" aria-label="Connected Aloden product engineering disciplines">
          <div class="heroSystemCoreHead">
            <span class="heroSystemBadge">ALODEN</span>
            <div><b>One connected product discipline</b><small>Strategy · Experience · AI · Engineering · Modernization</small></div>
          </div>
          <div class="heroSystemCoreGrid">
            <article><span>PRODUCT</span><b>Strategy + Experience</b><small>Outcome · workflow · users</small></article>
            <article class="accent"><span>INTELLIGENCE</span><b>AI + Agentic Systems</b><small>Context · decisions · tools</small></article>
            <article><span>ENGINEERING</span><b>Software + Integration</b><small>Architecture · data · APIs</small></article>
            <article><span>EVOLUTION</span><b>Modernization</b><small>Preserve value · remove constraints</small></article>
          </div>
        </section>

        <div class="heroSystemFlow" aria-label="Product engineering flow">
          <div><span>01</span><b>Understand</b></div>
          <div><span>02</span><b>Design</b></div>
          <div><span>03</span><b>Build</b></div>
          <div><span>04</span><b>Integrate</b></div>
          <div><span>05</span><b>Deploy</b></div>
        </div>

        <div class="heroSystemOutcome">
          <div><span>OUTPUT</span><b>Production-ready digital product</b></div>
          <div class="heroSystemReady"><i aria-hidden="true"></i>Designed for real-world use</div>
        </div>

        <div class="heroSystemProof" aria-label="Aloden product proof">
          <span>PROOF IN PRACTICE</span>
          <div><b>Medlivo</b><small>Healthcare intelligence</small></div>
          <div><b>StartupFair</b><small>Innovation platform</small></div>
          <div><b>Voice AI</b><small>Conversation → action</small></div>
        </div>
      </div>`;
  }
})();
