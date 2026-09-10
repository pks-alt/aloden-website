(() => {
  if (!document.querySelector('.startProjectHero')) return;
  const next = document.querySelector('.startProjectReviewNext');
  if (!next || document.querySelector('#project-contact')) return;

  if (!document.querySelector('link[href^="start-project-section5.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'start-project-section5.css?v=1';
    document.head.appendChild(link);
  }

  const section = document.createElement('section');
  section.className = 'projectContactSection';
  section.id = 'project-contact';
  section.innerHTML = `
    <div class="container">
      <div class="projectContactHead">
        <div class="eyebrow">STEP 05 · CONTACT &amp; SUBMIT</div>
        <h2 class="h2">Who should we contact about the project?</h2>
        <p class="lead">Finish the brief with the essentials. We only need enough information to connect the project context to the right follow-up conversation.</p>
      </div>

      <div class="projectContactPanel">
        <div class="projectContactPanelTop"><span>PROJECT BRIEF</span><b>5 OF 5 · READY FOR REVIEW</b></div>
        <div class="projectContactMeta"><div><span>STEP 05 · CONTACT</span><div class="projectContactProgress" aria-hidden="true"><i></i></div></div><b>5 OF 5</b></div>

        <div class="projectContactBody">
          <div class="projectContactForm">
            <h3>Tell us who to follow up with.</h3>
            <p class="projectContactIntro">No phone number is required for the first conversation. We’ll start with your work email and the context already captured in the brief.</p>
            <div class="projectContactGrid">
              <div class="projectContactField"><label for="project-name">Your name</label><input id="project-name" name="project-name" type="text" autocomplete="name" placeholder="Full name"></div>
              <div class="projectContactField"><label for="project-email">Work email</label><input id="project-email" name="project-email" type="email" autocomplete="email" placeholder="name@company.com"></div>
              <div class="projectContactField"><label for="project-company">Company / organization</label><input id="project-company" name="project-company" type="text" autocomplete="organization" placeholder="Company or organization"></div>
              <div class="projectContactField"><label for="project-role">Role / title <small>optional</small></label><input id="project-role" name="project-role" type="text" autocomplete="organization-title" placeholder="Your role"></div>
            </div>
          </div>

          <aside class="projectContactNext">
            <span>WHAT HAPPENS NEXT</span>
            <h3>A useful follow-up, not another form.</h3>
            <p>The brief gives Aloden enough context to understand the product problem before the first conversation.</p>
            <div class="projectContactSteps">
              <article><span>01</span><div><b>We review the product context</b><small>What you are building, where it stands, what needs help, and the operating constraints.</small></div></article>
              <article><span>02</span><div><b>We connect with you</b><small>The first follow-up can clarify the product decision, unknowns, and the most useful next step.</small></div></article>
              <article><span>03</span><div><b>We define the right path</b><small>Discovery, productization, modernization, AI engineering, integration, or a combination—based on the actual problem.</small></div></article>
            </div>
          </aside>
        </div>

        <div class="projectConsent"><b>By submitting this brief, you are asking Aloden to contact you about this project.</b> Please do not include confidential, sensitive, regulated, or proprietary information in this initial inquiry.</div>
        <div class="projectSubmitFooter"><div><p>Submit the brief when the information is ready. Detailed technical or commercial information can be handled later through the appropriate process.</p><div class="projectSubmissionReview">CONTENT REVIEW · SUBMISSION FUNCTIONALITY WILL BE CONNECTED AFTER FORM CONTENT IS FINALIZED.</div></div><button class="btn primary" type="button">Submit Project Brief →</button></div>
      </div>

      <div class="projectDirectContact">Prefer email? <a href="mailto:hello@aloden.com?subject=Start%20a%20Project">hello@aloden.com →</a></div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.startProjectReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Final review: the complete project brief</h2><p>After Step 5 is approved, we’ll consolidate all five steps into the canonical page, remove the review scripts, restore the shared navigation-only JavaScript, and then review the actual submission behavior separately before launch.</p>';
})();