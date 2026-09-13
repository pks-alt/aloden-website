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
  ensure('homepage-sections-final.css?v=1');

  // Site-wide chrome owns the logo source. Homepage only keeps its dark-header styling.
  const brand = document.querySelector('.siteHeader .brand');
  if (brand) brand.href = 'index.html';

  // Final hero wording: retain the approved visual, remove language that suggests
  // a named proprietary software product or methodology.
  const coreLabel = document.querySelector('.heroOneCoreHead small');
  if (coreLabel) coreLabel.textContent = 'ALODEN PRODUCT ENGINEERING';
  const coreTitle = document.querySelector('.heroOneCoreHead h2');
  if (coreTitle) coreTitle.textContent = 'Connected from problem to production.';
  const outcomeStatus = document.querySelector('.heroOneOutcomeStatus span');
  if (outcomeStatus) outcomeStatus.textContent = 'ENGINEERED FOR PRODUCTION';

  // Detailed product proof belongs on the dedicated Our Work / Built by Aloden page.
  const built = document.querySelector('#built');
  if (built) built.remove();

  const positioning = document.querySelector('#engagement');
  if (positioning) {
    positioning.id = 'positioning';
    positioning.className = 'homePositioning';
    positioning.innerHTML = `
      <div class="container homePositioningGrid">
        <div class="homePositioningCopy">
          <div class="eyebrow">WHAT ALODEN DOES</div>
          <h2>Build new products. Modernize what matters.</h2>
          <p>We design and build software for the work your business needs to do. That can mean launching a new product, improving an existing platform, or connecting systems that currently work apart.</p>
        </div>
        <div class="homePositioningRows">
          <div class="homePositioningRow"><span>01</span><div><b>Build intelligent products</b><p>Create applications that help customers and teams find information, make decisions, and complete tasks.</p></div></div>
          <div class="homePositioningRow"><span>02</span><div><b>Modernize critical software</b><p>Remove the technical and usability problems that slow your teams down, while preserving what works.</p></div></div>
          <div class="homePositioningRow"><span>03</span><div><b>Connect intelligence to real workflows</b><p>Use AI where it helps, from reviewing documents to coordinating work across business systems.</p></div></div>
        </div>
      </div>`;
  }

  const capabilities = document.querySelector('#capabilities');
  if (capabilities) {
    capabilities.className = 'homeCapabilities';
    capabilities.innerHTML = `
      <div class="container">
        <div class="homeSectionHead">
          <div><div class="eyebrow">CORE CAPABILITIES</div><h2>Four capabilities to build and improve your software.</h2></div>
          <p>Choose the expertise your project needs, from a new application to a connected voice or AI workflow.</p>
        </div>
        <div class="homeCapabilityGrid">
          <article class="homeCapability"><span class="homeCapabilityNum">01</span><h3><a href="ai-product-engineering.html">AI Product Engineering</a></h3><strong>Build the complete AI-enabled product.</strong><p>Bring a new idea or working prototype through design, software development, AI integration, and launch.</p><small>PRODUCT STRATEGY · AI ARCHITECTURE · EXPERIENCE DESIGN · ENGINEERING</small></article>
          <article class="homeCapability"><span class="homeCapabilityNum">02</span><h3><a href="voice-ai-engineering.html">Voice &amp; Conversational AI</a></h3><strong>Turn natural conversation into useful action.</strong><p>Let people schedule, ask for updates, and complete requests by voice, with confirmation and human help when needed.</p><small>CONVERSATIONAL UX · SPEECH &amp; INTENT · SYSTEM INTEGRATION · HUMAN ESCALATION</small></article>
          <article class="homeCapability"><span class="homeCapabilityNum">03</span><h3><a href="agentic-ai.html">Agentic Workflow Engineering</a></h3><strong>Automate work across your business systems.</strong><p>Build agents that gather information, carry out permitted steps, and pause for approval on sensitive actions.</p><small>AGENTIC WORKFLOWS · TOOL USE · AUTOMATION · ORCHESTRATION · GUARDRAILS</small></article>
          <article class="homeCapability"><span class="homeCapabilityNum">04</span><h3><a href="product-modernization.html">AI-Native Modernization</a></h3><strong>Make existing software ready for what comes next.</strong><p>Improve how your software runs, connects, and serves users. Add AI where it solves a specific problem.</p><small>ARCHITECTURE · UX · APIS &amp; INTEGRATION · CLOUD · AI ENABLEMENT</small></article>
        </div>
        <div class="homeCapabilityProof"><div><span class="mono">DOMAIN DEPTH</span><strong>Deep domain experience in healthcare AI and complex workforce operations.</strong></div><a class="textLink" href="built-by-aloden.html">See products built by Aloden →</a></div>
      </div>`;
  }

  const paths = document.querySelector('#process');
  if (paths) {
    paths.id = 'build-modernize';
    paths.className = 'homePaths';
    paths.innerHTML = `
      <div class="container">
        <div class="homeSectionHead">
          <div><div class="eyebrow">BUILD NEW · MODERNIZE EXISTING</div><h2>Start with what you have today.</h2></div>
          <p>You do not need a finished plan. Bring the idea you want to test or the software problem you need to solve.</p>
        </div>
        <div class="homePathGrid">
          <article class="homePath"><div class="homePathNum">01 · BUILD NEW</div><h3>Turn an idea into a production-ready digital product.</h3><p>Start with a product idea or prototype. We help define the first useful release, its technical requirements, and a path to launch.</p><div class="homePathRail">IDEA → PRODUCT DEFINITION → ENGINEERING → PRODUCTION</div><a href="ai-product-engineering.html">Explore AI Product Engineering →</a></article>
          <article class="homePath"><div class="homePathNum">02 · MODERNIZE EXISTING</div><h3>Make business-critical software ready for what comes next.</h3><p>Start with software already in use. We assess the constraints, agree on priorities, and plan changes around ongoing operations.</p><div class="homePathRail">EXISTING PRODUCT → MODERN ARCHITECTURE → AI &amp; AUTOMATION → IMPROVED EXPERIENCE</div><a href="product-modernization.html">Explore AI-Native Modernization →</a></article>
        </div>
      </div>`;
  }

  const audience = document.querySelector('#audience');
  if (audience) {
    audience.className = 'homeAudience';
    audience.innerHTML = `
      <div class="container homeAudienceGrid">
        <div class="homeAudienceCopy"><div class="eyebrow">WHO WE WORK WITH</div><h2>From new product ideas to complex enterprise platforms.</h2><p>We work with founders launching a product and established teams improving software their business already relies on.</p></div>
        <div class="homeAudienceRows">
          <div class="homeAudienceRow"><span>01</span><b>Founders</b><p>Define and build the first release.</p></div>
          <div class="homeAudienceRow"><span>02</span><b>Product Teams</b><p>Work directly with engineers on your roadmap.</p></div>
          <div class="homeAudienceRow"><span>03</span><b>Mid-Market Companies</b><p>Improve systems without building a large internal team.</p></div>
          <div class="homeAudienceRow"><span>04</span><b>Enterprise Teams</b><p>Plan changes around existing systems and controls.</p></div>
        </div>
      </div>`;
  }

  const why = document.querySelector('#philosophy');
  if (why) {
    why.id = 'why-aloden';
    why.className = 'homeWhy';
    why.innerHTML = `
      <div class="container">
        <div class="homeSectionHead"><div><div class="eyebrow">WHY ALODEN</div><h2>Product thinking. Engineering depth. Practical AI.</h2></div><p>Your project has one accountable delivery lead, direct access to the engineers, and regular reviews of working software.</p></div>
        <div class="homeWhyGrid">
          <div class="homeWhyItem"><span>01</span><b>Product thinking</b><p>Start with the business problem, user need and outcome before choosing the technology.</p></div>
          <div class="homeWhyItem"><span>02</span><b>Engineering depth</b><p>Design the architecture, applications, integrations and systems behind the experience.</p></div>
          <div class="homeWhyItem"><span>03</span><b>Practical AI</b><p>Apply intelligence where it improves the product, workflow or decision—not simply because AI can be added.</p></div>
          <div class="homeWhyItem"><span>04</span><b>Production accountability</b><p>Keep delivery decisions, progress, and release risks visible from the first build through launch.</p></div>
        </div>
      </div>`;
  }

  // Enforce the final homepage sequence after the hero.
  if (positioning && capabilities && paths && audience && why) {
    positioning.after(capabilities);
    capabilities.after(paths);
    paths.after(audience);
    audience.after(why);
  }

  // Cosmetic pass runs after the final homepage structures are in place.
  const cosmeticScript = document.createElement('script');
  cosmeticScript.src = 'homepage-cosmetic-pass.js?v=1';
  cosmeticScript.async = false;
  document.body.appendChild(cosmeticScript);
})();