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
          <p>Aloden combines product strategy, AI and software engineering to launch new digital products and modernize the software and platforms businesses depend on.</p>
        </div>
        <div class="homePositioningRows">
          <div class="homePositioningRow"><span>01</span><div><b>Build intelligent products</b><p>Turn an idea, business problem or market opportunity into production-ready software.</p></div></div>
          <div class="homePositioningRow"><span>02</span><div><b>Modernize critical software</b><p>Improve architecture, UX, integrations and workflows without rebuilding what already works.</p></div></div>
          <div class="homePositioningRow"><span>03</span><div><b>Connect intelligence to real workflows</b><p>Apply AI and automation where they improve useful, measurable outcomes.</p></div></div>
        </div>
      </div>`;
  }

  const capabilities = document.querySelector('#capabilities');
  if (capabilities) {
    capabilities.className = 'homeCapabilities';
    capabilities.innerHTML = `
      <div class="container">
        <div class="homeSectionHead">
          <div><div class="eyebrow">CORE CAPABILITIES</div><h2>Engineering capabilities for intelligent products and modern platforms.</h2></div>
          <p>Four capabilities. One product-engineering discipline from definition through production.</p>
        </div>
        <div class="homeCapabilityGrid">
          <article class="homeCapability"><span class="homeCapabilityNum">01</span><h3>AI Product Engineering</h3><strong>Build AI into the product, not around it.</strong><p>Define, design and engineer AI-enabled products for production from day one.</p><small>PRODUCT STRATEGY · AI ARCHITECTURE · EXPERIENCE DESIGN · ENGINEERING</small></article>
          <article class="homeCapability"><span class="homeCapabilityNum">02</span><h3>Voice AI Engineering</h3><strong>Turn natural conversation into useful action.</strong><p>Build voice experiences that understand intent, connect to business systems and act within clear controls.</p><small>CONVERSATIONAL UX · SPEECH &amp; INTENT · SYSTEM INTEGRATION · HUMAN ESCALATION</small></article>
          <article class="homeCapability"><span class="homeCapabilityNum">03</span><h3>Intelligent Workflow &amp; Agentic Systems</h3><strong>Connect intelligence to the work that needs to happen.</strong><p>Connect models, tools, systems and approvals into governed workflows that move work forward.</p><small>AGENTIC WORKFLOWS · TOOL USE · AUTOMATION · ORCHESTRATION · GUARDRAILS</small></article>
          <article class="homeCapability"><span class="homeCapabilityNum">04</span><h3>Product Modernization</h3><strong>Make existing software ready for what comes next.</strong><p>Modernize architecture, UX, APIs and workflows—adding intelligence where it improves the product.</p><small>ARCHITECTURE · UX · APIS &amp; INTEGRATION · CLOUD · AI ENABLEMENT</small></article>
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
          <div><div class="eyebrow">BUILD NEW · MODERNIZE EXISTING</div><h2>Two ways to move the product forward.</h2></div>
          <p>Build something new or improve software already in use—with the same product and engineering discipline from strategy through production.</p>
        </div>
        <div class="homePathGrid">
          <article class="homePath"><div class="homePathNum">01 · BUILD NEW</div><h3>Turn an idea into a production-ready digital product.</h3><p>For new products, AI capabilities, workflow platforms and customer experiences that need to reach production.</p><div class="homePathRail">IDEA → PRODUCT DEFINITION → ENGINEERING → PRODUCTION</div><a href="ai-product-engineering.html">Explore AI Product Engineering →</a></article>
          <article class="homePath"><div class="homePathNum">02 · MODERNIZE EXISTING</div><h3>Make business-critical software ready for what comes next.</h3><p>For existing applications that need stronger architecture, better UX, cleaner integrations or practical AI readiness.</p><div class="homePathRail">EXISTING PRODUCT → MODERN ARCHITECTURE → AI &amp; AUTOMATION → IMPROVED EXPERIENCE</div><a href="product-modernization.html">Explore Product Modernization →</a></article>
        </div>
      </div>`;
  }

  const audience = document.querySelector('#audience');
  if (audience) {
    audience.className = 'homeAudience';
    audience.innerHTML = `
      <div class="container homeAudienceGrid">
        <div class="homeAudienceCopy"><div class="eyebrow">WHO WE WORK WITH</div><h2>From new product ideas to complex enterprise platforms.</h2><p>Aloden works with teams that need product thinking, AI expertise and engineering depth to build, modernize and scale important software.</p></div>
        <div class="homeAudienceRows">
          <div class="homeAudienceRow"><span>01</span><b>Founders</b><p>Launch a credible, production-ready product.</p></div>
          <div class="homeAudienceRow"><span>02</span><b>Product Teams</b><p>Accelerate complex roadmaps with AI and engineering depth.</p></div>
          <div class="homeAudienceRow"><span>03</span><b>Mid-Market Companies</b><p>Modernize products and operations with scalable technology.</p></div>
          <div class="homeAudienceRow"><span>04</span><b>Enterprise Teams</b><p>Evolve complex platforms with disciplined architecture and delivery.</p></div>
        </div>
      </div>`;
  }

  const why = document.querySelector('#philosophy');
  if (why) {
    why.id = 'why-aloden';
    why.className = 'homeWhy';
    why.innerHTML = `
      <div class="container">
        <div class="homeSectionHead"><div><div class="eyebrow">WHY ALODEN</div><h2>Product thinking. Engineering depth. Practical AI.</h2></div><p>Aloden brings product judgment, engineering depth and production discipline to turn ambitious ideas into software that works in the real world.</p></div>
        <div class="homeWhyGrid">
          <div class="homeWhyItem"><span>01</span><b>Product thinking</b><p>Start with the business problem, user need and outcome before choosing the technology.</p></div>
          <div class="homeWhyItem"><span>02</span><b>Engineering depth</b><p>Design the architecture, applications, integrations and systems behind the experience.</p></div>
          <div class="homeWhyItem"><span>03</span><b>Practical AI</b><p>Apply intelligence where it improves the product, workflow or decision—not simply because AI can be added.</p></div>
          <div class="homeWhyItem"><span>04</span><b>Production accountability</b><p>Build for real users, connected systems, operating conditions, reliability and measurable outcomes.</p></div>
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
})();