(() => {
  if (!document.body.classList.contains('homepageRework')) return;

  document.body.classList.add('homepageFinal');

  const brand = document.querySelector('.siteHeader .brand');
  if (brand) {
    brand.href = 'index.html';
    brand.innerHTML = '<img class="siteLogo" src="assets/aloden-cube-logo.svg" alt="Aloden" decoding="async">';
  }

  const built = document.querySelector('#built');
  if (built) {
    built.className = 'section builtFinalSection';
    built.innerHTML = `
      <div class="container builtFinal">
        <div class="builtFinalHead">
          <div class="builtFinalTitle">
            <div class="eyebrow">BUILT BY ALODEN</div>
            <h2 class="h2">Real products. Built for real use.</h2>
          </div>
          <div class="builtFinalIntro">
            <p>Production software that proves how Aloden thinks, designs, engineers, integrates, and ships.</p>
            <a class="textLink" href="built-by-aloden.html">Explore everything we’ve built →</a>
          </div>
        </div>

        <div class="builtWorkList" aria-label="Selected products built by Aloden">
          <a class="builtWorkRow flagship" href="built-by-aloden.html#products">
            <div class="builtWorkIndex"><span>01</span><small>FLAGSHIP</small></div>
            <div class="builtWorkBrand"><img src="assets/medlivo-logo.webp" alt="Medlivo" loading="lazy" decoding="async"></div>
            <div class="builtWorkCopy"><strong>Healthcare workforce &amp; care operations platform</strong><span>Product UX · Full Stack · Workflow Engineering · Integrations</span></div>
            <div class="builtWorkArrow" aria-hidden="true">↗</div>
          </a>
          <a class="builtWorkRow" href="built-by-aloden.html#startupfair-proof">
            <div class="builtWorkIndex"><span>02</span><small>PLATFORM</small></div>
            <div class="builtWorkBrand"><img src="assets/startupfair-logo.webp" alt="StartupFair" loading="lazy" decoding="async"></div>
            <div class="builtWorkCopy"><strong>Global hackathon, innovation &amp; talent platform</strong><span>Platform UX · Role Systems · Workspaces · Judging · Operations</span></div>
            <div class="builtWorkArrow" aria-hidden="true">↗</div>
          </a>
          <a class="builtWorkRow" href="built-by-aloden.html#voice-ai-proof">
            <div class="builtWorkIndex"><span>03</span><small>VOICE</small></div>
            <div class="builtWorkBrand voice"><img src="assets/aloden-cube-symbol.svg" alt="" aria-hidden="true"><b>Aloden Voice</b></div>
            <div class="builtWorkCopy"><strong>Voice systems connected to real business workflows</strong><span>Conversation UX · Backend Services · Integrations · Human Handoff</span></div>
            <div class="builtWorkArrow" aria-hidden="true">↗</div>
          </a>
        </div>

        <div class="builtFinalClosing">
          <b>Different products. One engineering discipline.</b>
          <span>Product Strategy → Experience → Engineering → Integration → Testing → Production</span>
        </div>
      </div>`;
  }

  const footerBrand = document.querySelector('.footerFinalBrand');
  if (footerBrand) {
    const oldLockup = footerBrand.querySelector('.alodenLockup');
    if (oldLockup) oldLockup.outerHTML = '<img class="footerLogo" src="assets/aloden-cube-logo-dark.svg" alt="Aloden" loading="lazy" decoding="async">';
  }

  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) favicon.href = 'assets/aloden-cube-symbol.svg';
})();
