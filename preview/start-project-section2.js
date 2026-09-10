(() => {
  if (!document.querySelector('.startProjectHero')) return;
  const next = document.querySelector('.startProjectReviewNext');
  if (!next || document.querySelector('#project-stage')) return;

  if (!document.querySelector('link[href^="start-project-section2.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'start-project-section2.css?v=1';
    document.head.appendChild(link);
  }

  const section = document.createElement('section');
  section.className = 'projectStageSection';
  section.id = 'project-stage';
  section.innerHTML = `
    <div class="container">
      <div class="projectStageHead">
        <div class="eyebrow">STEP 02 · CURRENT STATE</div>
        <h2 class="h2">Where is the product today?</h2>
        <p class="lead">The right next step depends on what already exists. Tell us whether this is still an idea, a validated concept, an operating product, or an initiative already in motion.</p>
      </div>

      <div class="projectStagePanel">
        <div class="projectStagePanelTop"><span>PROJECT BRIEF</span><b>CURRENT STATE → BETTER NEXT STEP</b></div>
        <div class="projectStageMeta"><div><span>STEP 02 · WHERE</span><div class="projectStageProgress" aria-hidden="true"><i></i></div></div><b>2 OF 5</b></div>
        <fieldset class="projectStageField">
          <legend>Where are you now?</legend>
          <p class="projectStageHelp">Choose the closest description. This helps us understand whether the work is primarily definition, productization, modernization, integration, or production engineering.</p>
          <div class="projectStageGrid">
            <label class="projectStageChoice"><input type="radio" name="project-stage" value="early-idea"><span><strong>Early idea</strong><small>We understand the problem or opportunity, but the product is not yet defined.</small></span></label>
            <label class="projectStageChoice"><input type="radio" name="project-stage" value="validated-concept"><span><strong>Validated concept / prototype</strong><small>We have tested the idea or built an initial prototype and now need to turn it into a real product.</small></span></label>
            <label class="projectStageChoice"><input type="radio" name="project-stage" value="production-product"><span><strong>Existing product in production</strong><small>The product works today and needs new capability, AI, UX, integrations, scale, or architecture improvements.</small></span></label>
            <label class="projectStageChoice"><input type="radio" name="project-stage" value="active-modernization"><span><strong>Active modernization</strong><small>We already know parts of the product need to change and need help defining or executing the modernization path.</small></span></label>
            <label class="projectStageChoice"><input type="radio" name="project-stage" value="ai-underway"><span><strong>AI initiative already underway</strong><small>We have models, prompts, agents, or experiments but need stronger product architecture, workflow integration, controls, or production readiness.</small></span></label>
            <label class="projectStageChoice"><input type="radio" name="project-stage" value="diagnose"><span><strong>Need help diagnosing the problem</strong><small>We know something is limiting the product, but we need help determining the right starting point.</small></span></label>
          </div>
        </fieldset>
        <div class="projectStageNote"><b>Why we ask:</b> the same business goal can require very different work depending on whether we are defining a product, productizing a prototype, changing a live platform, or making an AI initiative production-ready.</div>
        <div class="projectStageFooter"><p>We are not using this step to force you into a fixed delivery package. It helps us understand what kind of product decision should come next.</p><a class="btn primary" href="#start-project-next">Continue →</a></div>
      </div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.startProjectReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: What do you need help with?</h2><p>Next we’ll let the user identify the capabilities or outcomes they need—without requiring them to know the exact technical solution.</p>';
})();