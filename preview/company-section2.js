// Company content-review layer — Section 2 / Why Aloden.
(() => {
  if (!document.querySelector('.companyHero')) return;
  const next = document.querySelector('.companyReviewNext');
  if (!next || document.querySelector('#why-aloden')) return;

  if (!document.querySelector('link[href^="company-section2.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'company-section2.css?v=1';
    document.head.appendChild(link);
  }

  const section = document.createElement('section');
  section.className = 'companyWhy section';
  section.id = 'why-aloden';
  section.innerHTML = `
    <div class="container">
      <div class="companyWhyHead">
        <div class="eyebrow">WHY ALODEN</div>
        <h2 class="h2">The product should not be handed from discipline to discipline.</h2>
        <p class="lead">Traditional delivery often separates strategy, design, engineering, AI, data, and operations into different phases and teams. Each handoff can lose product context. Aloden brings those disciplines together around one product outcome from the beginning so decisions stay connected from problem definition through production.</p>
      </div>

      <div class="companyDeliveryContrast" aria-label="Traditional handoff delivery compared with integrated Aloden product engineering">
        <article class="companyDeliveryPanel">
          <div class="companyDeliveryPanelTop"><span>TRADITIONAL DELIVERY</span><b>CONTEXT LOST BETWEEN HANDOFFS</b></div>
          <div class="companyTraditionalFlow">
            <article><span>01</span><b>Business Brief</b><small>The problem is summarized before product reality is fully understood.</small></article>
            <article><span>02</span><b>Strategy Handoff</b><small>Priorities move to another team and interpretation begins.</small></article>
            <article><span>03</span><b>Design Handoff</b><small>Experience decisions may separate from architecture and data constraints.</small></article>
            <article><span>04</span><b>Engineering Handoff</b><small>Implementation decisions arrive after important product choices are already fixed.</small></article>
            <article><span>05</span><b>Add AI Later</b><small>Intelligence is attached without enough workflow state, context, controls, or evaluation.</small></article>
            <article><span>06</span><b>Production Surprises</b><small>Integration, security, reliability, adoption, and operating constraints surface late.</small></article>
          </div>
        </article>

        <article class="companyDeliveryPanel integrated">
          <div class="companyDeliveryPanelTop"><span>ALODEN PRODUCT ENGINEERING</span><b>ONE PRODUCT CONTEXT FROM PROBLEM → PRODUCTION</b></div>
          <div class="companyIntegratedBody">
            <div class="companyIntegratedStart"><span>START WITH</span><b>Problem / Outcome</b><small>What must become meaningfully better for the user, workflow, operation, or business?</small></div>
            <div class="companyIntegratedCore">
              <article><span>PRODUCT</span><b>Product Strategy</b><small>Outcome · workflow · priorities · evidence</small></article>
              <article><span>EXPERIENCE</span><b>Experience Design</b><small>Users · interaction · accessibility · adoption</small></article>
              <article><span>ENGINEERING</span><b>Software &amp; Data Engineering</b><small>Architecture · APIs · data · integration</small></article>
              <article class="ai"><span>INTELLIGENCE</span><b>AI / Agentic / Voice</b><small>Context · reasoning · tools · controls · evaluation</small></article>
              <article><span>EVOLUTION</span><b>Integration &amp; Modernization</b><small>Compatibility · migration · existing value · constraints</small></article>
              <article><span>PRODUCTION</span><b>Production &amp; Operations</b><small>Security · reliability · observability · measurement</small></article>
            </div>
            <div class="companyIntegratedFlow"><span>Build</span><span>Validate</span><span>Deploy</span><span>Measure</span><span>Evolve</span></div>
            <div class="companyUnitOfWork"><span>THE UNIT OF WORK</span><b>The product—not the department, technology, or project phase—is what stays connected.</b></div>
          </div>
        </article>
      </div>

      <div class="companyPrinciplesGrid">
        <article class="companyPrincipleCard">
          <div class="companyPrincipleTop"><span>01</span><small>START WITH THE PROBLEM</small></div>
          <h3>Understand the outcome before selecting the technology.</h3>
          <p>We begin with the user, workflow, operating constraint, business context, and measurable result. Technology follows from what the product needs to accomplish.</p>
          <div class="companyPrincipleDetail"><span>User need</span><span>Workflow</span><span>Constraint</span><span>Outcome</span><span>Evidence</span></div>
        </article>

        <article class="companyPrincipleCard dark">
          <div class="companyPrincipleTop"><span>02</span><small>DESIGN + ARCHITECTURE TOGETHER</small></div>
          <h3>Treat experience and system design as one product problem.</h3>
          <p>Experience decisions affect data, permissions, state, integrations, and architecture. System constraints affect the experience. We design both with the same product context visible.</p>
          <div class="companyPrincipleDetail"><span>Interaction</span><span>State</span><span>Data</span><span>Permissions</span><span>Architecture</span></div>
        </article>

        <article class="companyPrincipleCard dark">
          <div class="companyPrincipleTop"><span>03</span><small>AI INSIDE THE PRODUCT</small></div>
          <h3>The model is only one part of an intelligent product.</h3>
          <p>Useful AI depends on context, workflow state, permissions, system actions, evaluation, observability, and human control. Those are product and engineering decisions—not model settings alone.</p>
          <div class="companyPrincipleDetail"><span>Context</span><span>Workflow state</span><span>Tools</span><span>Guardrails</span><span>Evaluation</span><span>Human control</span></div>
        </article>

        <article class="companyPrincipleCard">
          <div class="companyPrincipleTop"><span>04</span><small>PRODUCTION IS PART OF THE DESIGN</small></div>
          <h3>Design for the environment the product must survive in.</h3>
          <p>Security, reliability, accessibility, performance, observability, deployment, support, and operational ownership are considered before the product reaches production.</p>
          <div class="companyPrincipleDetail"><span>Security</span><span>Reliability</span><span>Accessibility</span><span>Performance</span><span>Observability</span></div>
        </article>

        <article class="companyPrincipleCard wide">
          <div class="companyPrincipleTop"><span>05</span><small>EVOLVE WITH EVIDENCE</small></div>
          <h3>Use real product behavior to make the next decision better.</h3>
          <p>We validate early, ship deliberately, observe actual use, measure outcomes, and evolve the product based on evidence. A product should become easier to understand and improve as it matures—not more dependent on assumptions.</p>
          <div class="companyPrincipleDetail"><span>Prototype</span><span>Validate</span><span>Ship</span><span>Observe</span><span>Measure</span><span>Evolve</span></div>
        </article>
      </div>

      <div class="companyWhyClosing">Better products come from keeping product thinking, design, engineering, intelligence, and production reality connected.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.companyReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: How Aloden works</h2><p>Next we’ll turn these principles into the way Aloden engages—Discover, Design, Build, Deploy, and Evolve—showing how product, AI, engineering, and modernization move together without turning the company page into a generic services process.</p>';
})();