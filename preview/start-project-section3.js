(() => {
  if (!document.querySelector('.startProjectHero')) return;
  const next = document.querySelector('.startProjectReviewNext');
  if (!next || document.querySelector('#project-help')) return;

  if (!document.querySelector('link[href^="start-project-section3.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'start-project-section3.css?v=1';
    document.head.appendChild(link);
  }

  const section = document.createElement('section');
  section.className = 'projectHelpSection';
  section.id = 'project-help';
  section.innerHTML = `
    <div class="container">
      <div class="projectHelpHead">
        <div class="eyebrow">STEP 03 · NEEDED HELP</div>
        <h2 class="h2">What do you need help with?</h2>
        <p class="lead">Choose all that apply. You do not need to know the technical solution—we are trying to understand the outcomes, product changes, or operating problems that matter most.</p>
      </div>

      <div class="projectHelpPanel">
        <div class="projectHelpPanelTop"><span>PROJECT BRIEF</span><b>OUTCOMES FIRST → SOLUTION SECOND</b></div>
        <div class="projectHelpMeta"><div><span>STEP 03 · HELP</span><div class="projectHelpProgress" aria-hidden="true"><i></i></div></div><b>3 OF 5</b></div>
        <fieldset class="projectHelpField">
          <legend>What should become better?</legend>
          <p class="projectHelpIntro">Select one or several. The right engagement may combine product strategy, design, AI, engineering, modernization, and integration rather than fit a single service label.</p>
          <div class="projectHelpGrid">
            <label class="projectHelpChoice"><input type="checkbox" name="project-help" value="define-product"><span><strong>Define or productize the idea</strong><small>Clarify the product, workflow, users, priorities, architecture, and path from concept or prototype to a production-ready system.</small></span></label>
            <label class="projectHelpChoice"><input type="checkbox" name="project-help" value="ai-capability"><span><strong>Add AI where it creates real value</strong><small>Identify the decisions, interactions, or workflows where intelligence can materially improve the product—and engineer the system around it.</small></span></label>
            <label class="projectHelpChoice"><input type="checkbox" name="project-help" value="agentic-workflow"><span><strong>Automate a complex workflow</strong><small>Coordinate multi-step work across context, tools, approvals, workflow state, verification, exceptions, and human escalation.</small></span></label>
            <label class="projectHelpChoice"><input type="checkbox" name="project-help" value="voice-experience"><span><strong>Create a voice or conversational experience</strong><small>Connect natural conversation to product context, permissions, tools, system actions, confirmation, and human handoff.</small></span></label>
            <label class="projectHelpChoice"><input type="checkbox" name="project-help" value="modernize-product"><span><strong>Modernize an existing product</strong><small>Improve architecture, experience, data, integrations, delivery, or AI readiness while preserving what already creates value.</small></span></label>
            <label class="projectHelpChoice"><input type="checkbox" name="project-help" value="systems-data"><span><strong>Connect systems, data, and workflows</strong><small>Reduce fragmented experiences by improving APIs, interoperability, data flow, workflow state, and system boundaries.</small></span></label>
            <label class="projectHelpChoice"><input type="checkbox" name="project-help" value="production"><span><strong>Make the product more production-ready</strong><small>Strengthen reliability, security, evaluation, observability, performance, accessibility, controls, and operating readiness.</small></span></label>
            <label class="projectHelpChoice"><input type="checkbox" name="project-help" value="healthcare"><span><strong>Apply healthcare workflow expertise</strong><small>Work across workforce, referrals, credentialing, scheduling, care operations, documentation, financial workflows, or connected healthcare systems.</small></span></label>
            <label class="projectHelpChoice wide"><input type="checkbox" name="project-help" value="not-sure"><span><strong>Not sure which path fits</strong><small>Describe the problem in your own words. We can help diagnose whether the next step is product definition, modernization, AI, workflow engineering, integration, or a combination.</small></span></label>
          </div>
        </fieldset>
        <div class="projectHelpNote"><b>Why we ask:</b> strong product work often crosses disciplines. Knowing the outcome you need is more useful than forcing you to choose a technical solution before we understand the system.</div>
        <div class="projectHelpFooter"><p>This step helps Aloden understand where the product needs to move—not prescribe how it must be built.</p><a class="btn primary" href="#start-project-next">Continue →</a></div>
      </div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.startProjectReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: What should we know about the project?</h2><p>Step 4 will collect the minimum useful project context—desired outcome, important constraints, timing, and any existing systems—without turning the intake into a long RFP.</p>';
})();