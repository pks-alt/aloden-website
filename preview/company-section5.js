// Company content-review layer — Section 5 / Built as Proof.
(() => {
  if (!document.querySelector('.companyHero')) return;
  const next = document.querySelector('.companyReviewNext');
  if (!next || document.querySelector('#built-as-proof')) return;

  if (!document.querySelector('link[href^="company-section5.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'company-section5.css?v=1';
    document.head.appendChild(link);
  }

  const section = document.createElement('section');
  section.className = 'companyProof section';
  section.id = 'built-as-proof';
  section.innerHTML = `
    <div class="container">
      <div class="companyProofHead">
        <div><div class="eyebrow">BUILT AS PROOF</div><h2 class="h2">The way we think shows up in the products we build.</h2><p class="lead">Aloden’s approach is grounded in building real products with different users, workflows, systems, and operating constraints. Each product demonstrates a different part of the same engineering discipline.</p></div>
        <aside class="companyProofAside">This is proof of how Aloden thinks and engineers—not a portfolio of disconnected experiments.</aside>
      </div>

      <div class="companyProofGrid">
        <article class="companyProofCard medlivoCompanyProof">
          <div class="companyProofIdentity"><img src="assets/medlivo-logo.webp" alt="Medlivo logo" loading="lazy" decoding="async"><span>HEALTHCARE INTELLIGENCE PLATFORM</span></div>
          <h3>Medlivo</h3>
          <p>Shows how AI, workflow state, clinician context, credentialing, scheduling, care operations, documentation, financial operations, integrations, and human control can live inside one connected healthcare product.</p>
          <div class="companyProofSignals"><span>PROOF SIGNALS</span><span>Complex workflow</span><span>AI decisions</span><span>Human control</span><span>Integrations</span><span>Operational depth</span></div>
          <a class="textLink companyProofLink" href="built-by-aloden.html#medlivo-proof">Explore Medlivo →</a>
        </article>

        <article class="companyProofCard">
          <div class="companyProofIdentity"><img src="assets/startupfair-logo.webp" alt="StartupFair logo" loading="lazy" decoding="async"><span>INNOVATION PLATFORM</span></div>
          <h3>StartupFair</h3>
          <p>Shows how challenge creation, builder participation, team formation, submissions, evaluation, selection, partner participation, and opportunity can become one connected multi-role product journey.</p>
          <div class="companyProofSignals"><span>PROOF SIGNALS</span><span>Multi-role platform</span><span>Workflow orchestration</span><span>Evaluation</span><span>Scalable architecture</span><span>Product operations</span></div>
          <a class="textLink companyProofLink" href="built-by-aloden.html#startupfair-proof">Explore StartupFair →</a>
        </article>

        <article class="companyProofCard voiceCompanyProof">
          <div class="companyProofIdentity"><span class="alodenLockup" aria-label="Aloden"><span class="alodenMark"><i></i><i></i><i></i><i></i></span><span class="alodenWord">aloden</span></span><span>CONVERSATIONAL PRODUCT INTERFACE</span></div>
          <h3>Aloden Voice AI</h3>
          <p>Shows how natural conversation can become verified system action through intent, context, tools, permissions, workflow state, confirmation, and human escalation.</p>
          <div class="companyProofSignals"><span>PROOF SIGNALS</span><span>Real-time AI</span><span>Tool use</span><span>Workflow integration</span><span>Permissions</span><span>Verification</span></div>
          <a class="textLink companyProofLink" href="built-by-aloden.html#voice-ai-proof">Explore Voice AI →</a>
        </article>
      </div>

      <div class="companySharedDiscipline" aria-label="Shared engineering discipline across Aloden-built products">
        <div class="companySharedDisciplineTop"><span>ONE ENGINEERING DISCIPLINE</span><b>DIFFERENT PRODUCTS · DIFFERENT DOMAINS · SAME PRODUCT STANDARD</b></div>
        <div class="companySharedDisciplineFlow"><span>Problem</span><span>Product Definition</span><span>Experience</span><span>Engineering</span><span>Intelligence</span><span>Production</span><span>Evidence</span></div>
      </div>

      <div class="companyProofClosing"><strong>Different products. Different domains. One engineering discipline.</strong><a class="textLink" href="built-by-aloden.html">Explore Built by Aloden →</a></div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.companyReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Trust, responsibility, and the standards behind delivery</h2><p>Next we’ll show the company-level standards that sit underneath every engagement—confidentiality, controlled delivery, quality and evaluation, responsible AI, security, reliability, and clear human accountability.</p>';
})();