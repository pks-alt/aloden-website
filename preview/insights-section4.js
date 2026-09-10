// Insights content-review layer — Section 4 / From Insight to Product.
(() => {
  if (!document.querySelector('.insightsHero')) return;
  const next = document.querySelector('.insightsReviewNext');
  if (!next || document.querySelector('#from-insight-to-product')) return;

  if (!document.querySelector('link[href^="insights-section4.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'insights-section4.css?v=1';
    document.head.appendChild(link);
  }

  const section = document.createElement('section');
  section.className = 'insightsFromInsight section';
  section.id = 'from-insight-to-product';
  section.innerHTML = `
    <div class="container">
      <div class="insightsFromInsightHead">
        <div>
          <div class="eyebrow">FROM INSIGHT TO PRODUCT</div>
          <h2>Good thinking should change what gets built.</h2>
        </div>
        <p>An insight becomes useful when it changes a product decision. Aloden turns questions about AI, autonomy, modernization, and healthcare into hypotheses that can be tested, implemented, measured, and revised with evidence.</p>
      </div>

      <div class="insightsTranslationFrame" aria-label="From insight to product decision flow">
        <div class="insightsTranslationTop"><span>DECISION TO DELIVERY</span><b>SIGNAL / QUESTION → HYPOTHESIS → PRODUCT DECISION → CONTROLLED TEST → PRODUCTION CHANGE → EVIDENCE → NEXT ITERATION</b></div>
        <div class="insightsTranslationFlow"><span>Signal / Question</span><span>Hypothesis</span><span>Product Decision</span><span>Controlled Test</span><span>Production Change</span><span>Evidence</span><span>Next Iteration</span></div>
      </div>

      <div class="insightsTranslationGrid">
        <article class="insightsTranslationCard dark">
          <span>01 · AI PRODUCT ENGINEERING</span>
          <h3>Move from model capability to product dependability.</h3>
          <p>The important question is not whether a model can produce the right answer once. It is whether the product can provide the right context, controls, evaluation, fallback, and workflow state to depend on the capability repeatedly.</p>
          <div class="insightsTranslationQuestion"><div><small>INITIAL QUESTION</small><b>Can the model do it?</b></div><div><small>PRODUCT QUESTION</small><b>Can the product system depend on it?</b></div></div>
        </article>

        <article class="insightsTranslationCard aiTint">
          <span>02 · AGENTIC SYSTEMS</span>
          <h3>Move from action capability to governed autonomy.</h3>
          <p>An agent taking an action is only one part of the system. Authority, tool access, workflow state, verification, recovery, and escalation determine whether the action belongs in a dependable product.</p>
          <div class="insightsTranslationQuestion"><div><small>INITIAL QUESTION</small><b>Can the agent take action?</b></div><div><small>PRODUCT QUESTION</small><b>What may it act on, how is the result verified, and when should a person take over?</b></div></div>
        </article>

        <article class="insightsTranslationCard">
          <span>03 · PRODUCT MODERNIZATION</span>
          <h3>Move from replacement thinking to constraint removal.</h3>
          <p>Modernization decisions should begin with the product constraint, not the age of the technology. The goal is to preserve what already creates value while changing what materially limits the next stage of the product.</p>
          <div class="insightsTranslationQuestion"><div><small>INITIAL QUESTION</small><b>Can we replace the old system?</b></div><div><small>PRODUCT QUESTION</small><b>Which constraint is actually worth changing—and what value should be preserved?</b></div></div>
        </article>

        <article class="insightsTranslationCard dark">
          <span>04 · HEALTHCARE AI</span>
          <h3>Move from AI possibility to accountable healthcare workflow.</h3>
          <p>Healthcare intelligence has to operate inside evidence, permissions, workflow state, connected systems, clinical boundaries, verification, and human accountability. Model capability alone does not define the decision boundary.</p>
          <div class="insightsTranslationQuestion"><div><small>INITIAL QUESTION</small><b>Can AI make this decision?</b></div><div><small>PRODUCT QUESTION</small><b>What context, evidence, permissions, and human accountability must remain around it?</b></div></div>
        </article>
      </div>

      <div class="insightsFromInsightClosing">Insights become valuable when they reduce uncertainty around the next product decision.</div>
    </div>`;

  next.before(section);

  const label = next.querySelector('span');
  const title = next.querySelector('h2');
  const copy = next.querySelector('p');
  if (label) label.textContent = 'NEXT REVIEW SECTION';
  if (title) title.textContent = 'Final CTA';
  if (copy) copy.textContent = 'Section 5 will close the Insights page with one focused invitation to discuss a product problem, idea, or modernization decision—without adding another long content section.';
})();
