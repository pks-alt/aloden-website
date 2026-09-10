// Company content-review layer — Section 3 / How Aloden Works.
(() => {
  if (!document.querySelector('.companyHero')) return;
  const next = document.querySelector('.companyReviewNext');
  if (!next || document.querySelector('#how-aloden-works')) return;

  if (!document.querySelector('link[href^="company-section3.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'company-section3.css?v=1';
    document.head.appendChild(link);
  }

  const section = document.createElement('section');
  section.className = 'companyHow section';
  section.id = 'how-aloden-works';
  section.innerHTML = `
    <div class="container">
      <div class="companyHowHead">
        <div class="eyebrow">HOW ALODEN WORKS</div>
        <h2 class="h2">Keep product intent connected to engineering reality.</h2>
        <p class="lead">Aloden works through five connected stages—Discover, Design, Build, Deploy, and Evolve. The stages create structure without turning delivery into a waterfall. Product learning can move backward and forward whenever evidence changes the decision.</p>
      </div>

      <div class="companyHowSystem" aria-label="Aloden delivery model from discovery through evolution">
        <div class="companyHowSystemTop"><span>PRODUCT DELIVERY MODEL</span><b>DISCOVER → DESIGN → BUILD → DEPLOY → EVOLVE</b></div>
        <div class="companyHowStages">
          <article class="companyHowStage"><span>01 · DISCOVER</span><h3>Understand the problem.</h3><p>Learn the users, workflows, systems, business constraints, data, operating reality, and measurable outcome before defining the solution.</p><strong>OUTPUT</strong><div><b>Product opportunity</b><b>Workflow map</b><b>Priorities</b><b>Constraints</b><b>Success criteria</b></div></article>
          <article class="companyHowStage"><span>02 · DESIGN</span><h3>Design the product and system together.</h3><p>Shape experience, architecture, data, integrations, AI decisions, permissions, and human control as one connected product definition.</p><strong>OUTPUT</strong><div><b>Product definition</b><b>UX direction</b><b>System architecture</b><b>AI approach</b><b>Delivery plan</b></div></article>
          <article class="companyHowStage"><span>03 · BUILD</span><h3>Build vertical product slices.</h3><p>Turn the product definition into working frontend, backend, APIs, data, AI, agentic, voice, and integration capability that can be tested in real workflow context.</p><strong>BUILD PRINCIPLE</strong><div><b>Working slices</b><b>Real context</b><b>Early evidence</b><b>Integrated testing</b></div></article>
          <article class="companyHowStage"><span>04 · DEPLOY</span><h3>Make production part of the product.</h3><p>Security, environments, CI/CD, observability, performance, reliability, accessibility, and operational readiness are part of what gets shipped.</p><strong>OUTPUT</strong><div><b>Production-ready capability</b><b>Observability</b><b>Reliability</b><b>Operational readiness</b></div></article>
          <article class="companyHowStage"><span>05 · EVOLVE</span><h3>Use evidence to choose what comes next.</h3><p>Measure adoption, workflow completion, quality, reliability, model behavior, operational feedback, and business outcomes—then improve the product.</p><strong>LOOP</strong><div><b>Observe</b><b>Measure</b><b>Learn</b><b>Prioritize</b><b>Improve</b></div></article>
        </div>
        <div class="companyHowRails"><span>Security &amp; Privacy</span><span>Quality &amp; Evaluation</span><span>Accessibility &amp; Performance</span><span>Human Control</span><span>Documentation &amp; Operational Readiness</span></div>
      </div>

      <div class="companyHowNonlinear">
        <div><span>NOT A WATERFALL</span><h3>Structure the work without freezing the learning.</h3></div>
        <p>The stages help teams make decisions in the right order, but real product development is iterative. New user evidence, technical constraints, integration findings, model behavior, or production feedback can send the team back to refine an earlier decision.</p>
        <div class="companyHowLoop"><span>Discover</span><span>Design</span><span>Build</span><span>Validate</span><span>Deploy</span><span>Measure</span><span>Evolve</span></div>
      </div>

      <div class="companyHowDetails">
        <article class="companyHowCard"><div class="companyHowCardTop"><span>DISCOVER</span><small>PROBLEM &amp; CONTEXT</small></div><h3>Understand enough of the reality to make a better first decision.</h3><p>Discovery is not a long research phase for its own sake. It is the shortest path to understanding the product problem, workflow, constraints, current systems, data, and outcome well enough to define what deserves to be built or changed.</p><div class="companyHowOutputs"><span>TYPICAL OUTPUTS</span><b>Opportunity definition</b><b>Workflow map</b><b>Constraint map</b><b>Success criteria</b></div></article>
        <article class="companyHowCard dark"><div class="companyHowCardTop"><span>DESIGN</span><small>PRODUCT + SYSTEM</small></div><h3>Design what people experience and what the system must make possible.</h3><p>Experience, architecture, data, integrations, AI, and control models influence one another. Treating them together reduces late-stage compromises and produces a product definition that can actually survive implementation.</p><div class="companyHowOutputs"><span>TYPICAL OUTPUTS</span><b>UX direction</b><b>Architecture</b><b>Data / integration model</b><b>AI decision design</b></div></article>
        <article class="companyHowCard dark"><div class="companyHowCardTop"><span>BUILD</span><small>VERTICAL PRODUCT SLICES</small></div><h3>Build complete behavior, not isolated technical layers.</h3><p>A useful slice connects enough experience, software, data, AI, integrations, permissions, and testing to prove one real product outcome. That gives the team evidence earlier than building large horizontal layers in isolation.</p><div class="companyHowOutputs"><span>TYPICAL OUTPUTS</span><b>Working capability</b><b>Integrated tests</b><b>Real workflow evidence</b><b>Technical feedback</b></div></article>
        <article class="companyHowCard"><div class="companyHowCardTop"><span>DEPLOY</span><small>PRODUCTION REALITY</small></div><h3>Completed code is not the same as a production-ready product.</h3><p>Deployment includes the controls and operating capabilities needed for real use: security, accessibility, performance, observability, reliability, rollback, support readiness, and the ability to understand what the product is doing after release.</p><div class="companyHowOutputs"><span>TYPICAL OUTPUTS</span><b>Production release</b><b>Observability</b><b>Operational controls</b><b>Release confidence</b></div></article>
        <article class="companyHowCard wide"><div class="companyHowCardTop"><span>EVOLVE</span><small>LEARNING AFTER RELEASE</small></div><h3>The next roadmap decision should use evidence from the product that now exists.</h3><p>Aloden measures how people use the product, where workflows succeed or fail, how systems behave, where AI performs well or needs control, and which operating outcomes improve. The roadmap evolves from that evidence instead of remaining fixed to assumptions made before launch.</p><div class="companyHowOutputs"><span>FEEDBACK LOOP</span><b>Adoption</b><b>Workflow completion</b><b>Reliability</b><b>Model evaluation</b><b>Operational feedback</b><b>Business outcome</b></div></article>
      </div>

      <div class="companyHowPrinciple">Aloden’s delivery model is designed to keep product intent connected to engineering reality from the first decision through production and ongoing evolution.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.companyReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: What makes Aloden different</h2><p>Next we’ll define the company-level differentiators that matter to clients—product ownership, AI depth, modernization discipline, real-world workflow understanding, and production accountability—without turning the page into generic agency claims.</p>';
})();