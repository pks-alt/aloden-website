(() => {
  if (!document.querySelector('.startProjectHero')) return;
  const next = document.querySelector('.startProjectReviewNext');
  if (!next || document.querySelector('#project-context')) return;

  if (!document.querySelector('link[href^="start-project-section4.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'start-project-section4.css?v=1';
    document.head.appendChild(link);
  }

  const section = document.createElement('section');
  section.className = 'projectContextSection';
  section.id = 'project-context';
  section.innerHTML = `
    <div class="container">
      <div class="projectContextHead">
        <div class="eyebrow">STEP 04 · PROJECT CONTEXT</div>
        <h2 class="h2">What should we know about the project?</h2>
        <p class="lead">A little context helps us understand the right next conversation. Keep it high level—what outcome matters, what constraints are real, when timing matters, and which systems or product environment already exist.</p>
      </div>

      <div class="projectContextPanel">
        <div class="projectContextPanelTop"><span>PROJECT BRIEF</span><b>ENOUGH CONTEXT TO DEFINE THE NEXT STEP</b></div>
        <div class="projectContextMeta"><div><span>STEP 04 · CONTEXT</span><div class="projectContextProgress" aria-hidden="true"><i></i></div></div><b>4 OF 5</b></div>

        <div class="projectContextBody">
          <h3>Give us the useful context—not a full RFP.</h3>
          <p class="projectContextIntro">Short answers are fine. We are looking for the product reality that will shape the next decision, not a complete specification.</p>

          <div class="projectContextGrid">
            <div class="projectContextField wide">
              <label for="project-outcome">What outcome are you trying to achieve?</label>
              <small>Describe what should become better for the user, workflow, operation, or business.</small>
              <textarea id="project-outcome" name="project-outcome" rows="4" placeholder="Example: Reduce manual work in a multi-step workflow, make an existing product AI-ready, or turn a validated prototype into a dependable production product."></textarea>
            </div>

            <div class="projectContextField">
              <label for="project-constraints">What constraints should we know about?</label>
              <small>Optional. Existing architecture, security, compliance, integration, team, migration, or operating constraints.</small>
              <textarea id="project-constraints" name="project-constraints" rows="4" placeholder="Example: Must integrate with existing systems, preserve a live workflow, meet healthcare privacy requirements, or avoid a full rewrite."></textarea>
            </div>

            <fieldset class="projectContextField">
              <legend>When does timing matter?</legend>
              <small>Choose the closest answer. We can discuss milestones and delivery approach later.</small>
              <div class="projectTimingGrid">
                <label class="projectTimingChoice"><input type="radio" name="project-timing" value="exploring"><span>Exploring / no fixed date</span></label>
                <label class="projectTimingChoice"><input type="radio" name="project-timing" value="quarter"><span>Within the next quarter</span></label>
                <label class="projectTimingChoice"><input type="radio" name="project-timing" value="six-months"><span>Within 3–6 months</span></label>
                <label class="projectTimingChoice"><input type="radio" name="project-timing" value="urgent"><span>Active / time-sensitive initiative</span></label>
              </div>
            </fieldset>

            <div class="projectContextField wide">
              <label for="project-systems">What product, systems, or data environment already exists?</label>
              <small>Optional. Name the current product, platforms, APIs, data sources, vendors, or systems that materially shape the work.</small>
              <input id="project-systems" name="project-systems" type="text" placeholder="Example: Existing SaaS platform, EHR / VMS / CRM, internal APIs, cloud environment, data warehouse, or current AI prototype">
            </div>
          </div>
        </div>

        <div class="projectContextNote"><b>Keep sensitive information out of this first brief.</b> We only need enough context to determine the right next conversation; confidential technical or business details can be handled later through the appropriate process.</div>
        <div class="projectContextFooter"><p>This step should help Aloden understand the operating context without making the visitor complete a long procurement questionnaire.</p><a class="btn primary" href="#start-project-next">Continue →</a></div>
      </div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.startProjectReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Who should we contact?</h2><p>Step 5 will finish the brief with only the essential contact details and a clear consent / submission message. No unnecessary lead-form fields.</p>';
})();