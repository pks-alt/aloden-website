// Company content-review layer — Section 4 / What Makes Aloden Different.
(() => {
  if (!document.querySelector('.companyHero')) return;
  const next = document.querySelector('.companyReviewNext');
  if (!next || document.querySelector('#what-makes-aloden-different')) return;

  if (!document.querySelector('link[href^="company-section4.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'company-section4.css?v=1';
    document.head.appendChild(link);
  }

  const section = document.createElement('section');
  section.className = 'companyDifference section';
  section.id = 'what-makes-aloden-different';
  section.innerHTML = `
    <div class="container">
      <div class="companyDifferenceHead">
        <div class="eyebrow">WHAT MAKES ALODEN DIFFERENT</div>
        <h2 class="h2">We do not separate product thinking from the engineering required to make it real.</h2>
        <p class="lead">Aloden keeps product strategy, experience design, AI, software engineering, modernization, integration, and production responsibility connected. That changes how decisions are made—and what gets built.</p>
      </div>

      <div class="companyDifferenceGrid">
        <article class="companyDifferenceCard dark"><div class="companyDifferenceTop"><span>01</span><small>PRODUCT OWNERSHIP</small></div><h3>Work backward from the outcome.</h3><p>We begin with the product problem, user need, workflow, operating constraint, and measurable result—not with a predefined framework, cloud, or model.</p><div class="companyDifferenceDetail"><span>Problem definition</span><span>Outcome clarity</span><span>Workflow context</span><span>Technology follows need</span></div></article>

        <article class="companyDifferenceCard"><div class="companyDifferenceTop"><span>02</span><small>AI ENGINEERING DEPTH</small></div><h3>Treat intelligence as product architecture.</h3><p>Models are only one part of an AI product. Context, workflow state, tools, permissions, evaluation, observability, human control, and failure handling determine whether the system can be trusted in real use.</p><div class="companyDifferenceDetail"><span>AI systems</span><span>Agentic workflows</span><span>Voice AI</span><span>Evaluation</span><span>Human control</span></div></article>

        <article class="companyDifferenceCard"><div class="companyDifferenceTop"><span>03</span><small>MODERNIZATION WITHOUT REWRITE REFLEX</small></div><h3>Preserve value. Change the constraint.</h3><p>Existing products often contain years of valuable workflow, data, business rules, integrations, and user adoption. We modernize what materially limits the product instead of replacing everything by default.</p><div class="companyDifferenceDetail"><span>Preserve</span><span>Refactor</span><span>Decouple</span><span>Replace selectively</span><span>Controlled migration</span></div></article>

        <article class="companyDifferenceCard dark"><div class="companyDifferenceTop"><span>04</span><small>REAL WORKFLOW UNDERSTANDING</small></div><h3>Design for the system the product actually lives inside.</h3><p>Real products depend on people, systems, data, exceptions, permissions, operational handoffs, and business constraints. We make those dependencies part of the product definition instead of discovering them after the interface is designed.</p><div class="companyDifferenceDetail"><span>Users</span><span>Systems</span><span>Data</span><span>Exceptions</span><span>Operations</span><span>Permissions</span></div></article>

        <article class="companyDifferenceCard wide"><div class="companyDifferenceTop"><span>05</span><small>PRODUCTION ACCOUNTABILITY</small></div><h3>Completed code is not the finish line.</h3><p>Security, reliability, accessibility, performance, observability, integration behavior, operational readiness, and measurable outcomes are part of delivery. A product proves itself when it works dependably for the people and systems that rely on it.</p><div class="companyDifferenceDetail"><span>Security</span><span>Reliability</span><span>Accessibility</span><span>Performance</span><span>Observability</span><span>Integration</span><span>Measurement</span></div></article>
      </div>

      <div class="companyProofStrip" aria-label="Aloden proof across products, capabilities, and operating principle">
        <div class="companyProofStripTop"><span>PROOF, NOT POSITIONING ALONE</span><b>WHAT WE BUILD + HOW WE BUILD IT</b></div>
        <div class="companyProofStripGrid">
          <article><span>BUILT PRODUCTS</span><h3>Medlivo · StartupFair · Aloden Voice AI</h3><p>Different domains and product types built through one product-engineering discipline.</p></article>
          <article><span>CORE CAPABILITIES</span><h3>AI Product Engineering · Agentic Systems · Voice AI · Product Modernization</h3><p>Capabilities are composed around the product outcome rather than sold as disconnected technical services.</p></article>
          <article><span>OPERATING PRINCIPLE</span><h3>Build what the product needs. Prove it in real use.</h3><p>Technology earns its place through dependable product behavior and measurable operating value.</p></article>
        </div>
      </div>

      <aside class="companyNot">
        <div class="companyNotLead"><span>WHAT WE ARE NOT</span><h3>Clear positioning matters.</h3><p>Aloden is intentionally not positioned as a broad, undifferentiated technology vendor. The company is built around product engineering responsibility.</p></div>
        <div class="companyNotList">
          <article><span>01</span><div><b>Not a generic development shop.</b><p>We do not start with staffing a list of technical roles. We start with the product and the outcome.</p></div></article>
          <article><span>02</span><div><b>Not an AI wrapper company.</b><p>We engineer the workflow state, context, controls, tools, integrations, evaluation, and production system around the intelligence.</p></div></article>
          <article><span>03</span><div><b>Not a modernization factory measured by how much code gets replaced.</b><p>Modernization is successful when the product becomes easier to use, change, operate, and evolve—not when the rewrite is largest.</p></div></article>
        </div>
      </aside>

      <div class="companyDifferenceClosing">Our advantage comes from keeping product strategy, design, AI, engineering, modernization, and production responsibility connected.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.companyReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: What Aloden has built</h2><p>Next we’ll connect the company story to product proof—Medlivo, StartupFair, and Aloden Voice AI—without repeating the full Built by Aloden page.</p>';
})();