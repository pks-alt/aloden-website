// Insights content-review layer — Section 3 / Editorial Lens.
(() => {
  if (!document.querySelector('.insightsHero')) return;
  const next = document.querySelector('.insightsReviewNext');
  if (!next || document.querySelector('#editorial-lens')) return;

  if (!document.querySelector('link[href^="insights-section3.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'insights-section3.css?v=1';
    document.head.appendChild(link);
  }

  const section = document.createElement('section');
  section.className = 'insightsEditorialLens section';
  section.id = 'editorial-lens';
  section.innerHTML = `
    <div class="container">
      <div class="insightsEditorialLensHead">
        <div>
          <div class="eyebrow">HOW WE EVALUATE TECHNOLOGY</div>
          <h2>New technology matters when it improves the product system.</h2>
        </div>
        <p>Aloden evaluates emerging technology through the product decision it enables—not the novelty of the technology itself. The question is whether it improves the outcome, fits the system, survives production reality, and produces evidence that the product became better.</p>
      </div>

      <div class="insightsLensFrame" aria-label="Aloden technology evaluation lens">
        <div class="insightsLensTop"><span>EDITORIAL DECISION LENS</span><b>PRODUCT VALUE → SYSTEM FIT → PRODUCTION REALITY → EVIDENCE</b></div>
        <div class="insightsLensGrid">
          <article class="insightsLensCard">
            <span>01 · PRODUCT VALUE</span>
            <h3>What becomes meaningfully better?</h3>
            <p>Start with the user, workflow, operation, or business outcome. A capability earns attention when it improves something people can actually experience or the product can actually measure.</p>
            <div class="insightsLensQuestion">Question: What problem or decision improves enough to justify the technology?</div>
          </article>
          <article class="insightsLensCard">
            <span>02 · SYSTEM FIT</span>
            <h3>Where does the capability belong?</h3>
            <p>Technology has to fit the architecture, data model, workflow state, integrations, permissions, and existing product boundaries. The right capability in the wrong system location still creates a weak product.</p>
            <div class="insightsLensQuestion">Question: What context, state, interfaces, and controls must surround it?</div>
          </article>
          <article class="insightsLensCard">
            <span>03 · PRODUCTION REALITY</span>
            <h3>What changes when the product is real?</h3>
            <p>Latency, reliability, security, privacy, cost, failure modes, exceptions, human control, observability, and support are not implementation details. They shape the product decision itself.</p>
            <div class="insightsLensQuestion">Question: What must remain dependable when ideal conditions disappear?</div>
          </article>
          <article class="insightsLensCard">
            <span>04 · EVIDENCE</span>
            <h3>How will we know it actually improved?</h3>
            <p>Evaluation should connect model or system behavior to product outcomes. The strongest evidence shows whether the workflow became faster, clearer, safer, more reliable, or more useful after deployment.</p>
            <div class="insightsLensQuestion">Question: What evidence would justify keeping, changing, or removing the capability?</div>
          </article>
        </div>
        <div class="insightsLensFlow"><span>Product Value</span><span>System Fit</span><span>Production Reality</span><span>Evidence</span></div>
      </div>

      <aside class="insightsNoveltyBand">
        <div class="insightsNoveltyLead"><span>NOVELTY IS NOT THE OUTCOME</span><h3>Technology has to earn its place.</h3></div>
        <div class="insightsNoveltyQuote"><p>We do not ask, “How do we add this technology?” We ask, “What problem earns its place in the product?”</p><small>That keeps AI, agents, voice, modernization, and conventional software in the same decision framework.</small></div>
      </aside>

      <div class="insightsLensClosing">The strongest technology decision is often knowing where AI should be used, where conventional software is better, and where people should remain in control.</div>
    </div>`;

  next.before(section);

  const label = next.querySelector('span');
  const title = next.querySelector('h2');
  const copy = next.querySelector('p');
  if (label) label.textContent = 'NEXT REVIEW SECTION';
  if (title) title.textContent = 'From Insight to Product';
  if (copy) copy.textContent = 'Section 4 will connect Aloden’s thinking to the way product decisions become real systems—without repeating the Capabilities or Built by Aloden pages.';
})();
