// Healthcare AI content-review layer — Section 2 / Healthcare Intelligence Architecture.
(() => {
  if (!document.querySelector('.healthcareAiHero')) return;
  const next = document.querySelector('.healthcareReviewNext');
  if (!next || document.querySelector('#healthcare-intelligence-architecture')) return;

  if (!document.querySelector('link[href^="healthcare-ai-section2.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'healthcare-ai-section2.css?v=1';
    document.head.appendChild(link);
  }

  const section = document.createElement('section');
  section.className = 'healthcareArchitecture section';
  section.id = 'healthcare-intelligence-architecture';
  section.innerHTML = `
    <div class="container">
      <div class="healthcareArchitectureHead">
        <div class="eyebrow">HEALTHCARE INTELLIGENCE ARCHITECTURE</div>
        <h2 class="h2">AI becomes useful when it can see the workflow, the context, and the consequences.</h2>
        <p class="lead">Healthcare AI cannot operate reliably from a prompt alone. Useful intelligence needs access to workflow state, trusted healthcare context, connected systems, permissions, and the people responsible for decisions. Aloden engineers these layers together so AI can assist with real work—not just generate responses.</p>
      </div>

      <div class="healthcareArchitectureMap" aria-label="Healthcare intelligence architecture across workflow, state, AI, context, systems, and human control">
        <div class="healthcareArchitectureTop"><span>HEALTHCARE AI PRODUCT ARCHITECTURE</span><b>WORKFLOW + STATE + INTELLIGENCE + INTEROPERABILITY + HUMAN CONTROL</b></div>

        <div class="healthcareLayer">
          <div class="healthcareLayerHeader"><span>01 · HEALTHCARE EXPERIENCE &amp; WORKFLOW</span><b>The intelligence layer sits inside the operating journey used by facilities, care teams, clinicians, workforce teams, and operations.</b></div>
          <div class="healthcareExperienceStrip"><span>Facility Demand</span><span>Patient Referral</span><span>Recruiter / Coordinator</span><span>Clinician Workflow</span><span>Credentialing</span><span>Scheduling / Assignment</span><span>Care / Visit / Shift</span><span>Documentation &amp; Operations</span></div>
        </div>

        <div class="healthcareLayer">
          <div class="healthcareLayerHeader"><span>02 · PRODUCT STATE &amp; ORCHESTRATION</span><b>The platform must know where work stands, what evidence exists, what may happen next, and which exceptions are unresolved.</b></div>
          <div class="healthcareStateStrip">
            <div><span>DEMAND / REFERRAL</span><b>Need, requirements, priority, timing</b></div>
            <div><span>CLINICIAN / RESOURCE</span><b>Passport, fit, availability, history</b></div>
            <div><span>READINESS</span><b>Credentials, eligibility, gaps, approval</b></div>
            <div><span>DELIVERY</span><b>Assignment, visit, shift, documentation</b></div>
            <div><span>OPERATIONS</span><b>Time, billing, payroll, exception state</b></div>
          </div>
          <div class="healthcareStatePrinciple">AI needs durable workflow state—not just conversation history.</div>
        </div>

        <div class="healthcareLayer healthcareAiCoreLayer">
          <div class="healthcareAiCoreHeader"><div><span>03 · HEALTHCARE INTELLIGENCE CORE</span><b>Intelligence is applied where language, ambiguity, ranking, prediction, documents, or changing context make the workflow meaningfully better.</b></div><small>AI CAPABILITY · AGENTIC ORCHESTRATION · CONVERSATIONAL AI</small></div>
          <div class="healthcareAiCoreGrid">
            <article><span>01</span><h3>Intake &amp; Document Intelligence</h3><p>Extract and structure referrals, workforce requests, requirements, notes, forms, and incoming documents.</p></article>
            <article><span>02</span><h3>Matching &amp; Ranking Intelligence</h3><p>Use specialty, experience, credentials, availability, geography, requirements, and evidence to rank fit.</p></article>
            <article><span>03</span><h3>Readiness &amp; Risk Intelligence</h3><p>Identify credentialing gaps, eligibility issues, expiring items, missing evidence, and readiness risk.</p></article>
            <article><span>04</span><h3>Scheduling &amp; Capacity Intelligence</h3><p>Evaluate availability, geography, workload, skills, timing, and operational constraints to recommend feasible next steps.</p></article>
            <article><span>05</span><h3>Exception &amp; Next-Best Action</h3><p>Detect stalled workflows, conflicting state, missing information, failed integrations, and recommended recovery paths.</p></article>
            <article><span>06</span><h3>Conversational &amp; Agentic Intelligence</h3><p>Retrieve context, use permitted tools, coordinate systems, update workflow state, verify outcomes, and escalate when needed.</p></article>
          </div>
          <div class="healthcareAiLoop"><span>Observe</span><span>Understand</span><span>Decide</span><span>Act</span><span>Verify</span><span>Learn</span></div>
          <div class="healthcareAuthorityRule"><span>AUTHORITY BOUNDARY</span><b>AI can recommend or act only within the authority, permissions, policy, and human-control model the product gives it.</b></div>
        </div>

        <div class="healthcareLayer">
          <div class="healthcareLayerHeader"><span>04 · TRUSTED HEALTHCARE CONTEXT</span><b>Useful healthcare intelligence depends on context that is current, attributable, permissioned, and connected to the workflow state.</b></div>
          <div class="healthcareContextGrid">
            <article class="healthcareContextCard"><span>WORKFORCE &amp; CLINICIAN CONTEXT</span><h3>Who can perform the work—and under what conditions?</h3><p>Profile, specialty, licenses, credentials, experience, geography, availability, work history, readiness, and evidence.</p><div class="healthcareContextPills"><span>Specialty</span><span>Licenses</span><span>Credentials</span><span>Availability</span><span>Experience</span><span>Readiness</span></div></article>
            <article class="healthcareContextCard"><span>CARE &amp; OPERATIONAL CONTEXT</span><h3>What does the workflow require right now?</h3><p>Facility requirements, referral details, patient or care context, schedules, payer requirements, documents, time, rates, and workflow history.</p><div class="healthcareContextPills"><span>Facility</span><span>Referral / Care</span><span>Schedule</span><span>Payer</span><span>Documents</span><span>Financial State</span></div></article>
          </div>
        </div>

        <div class="healthcareLayer">
          <div class="healthcareLayerHeader"><span>05 · CONNECTED HEALTHCARE SYSTEMS</span><b>Interoperability is part of the AI architecture. Intelligence creates more value when it can connect to the systems where the work actually happens.</b></div>
          <div class="healthcareSystemsGrid"><span>ATS / CRM / VMS / MSP</span><span>Credentialing / Background / Licensing</span><span>Scheduling / EVV</span><span>EHR / EMR where appropriate</span><span>Billing / Payroll / Finance</span><span>Communications / External APIs</span></div>
          <div class="healthcareInteropNote"><b>Interoperability is part of the AI architecture.</b> The product needs stable interfaces, identity, event flow, and system contracts—not isolated AI outputs that stop at the edge of the workflow.</div>
        </div>

        <div class="healthcareLayer">
          <div class="healthcareLayerHeader"><span>06 · TRUST, SAFETY &amp; HUMAN CONTROL</span><b>Healthcare decisions require explicit boundaries around sensitive data, authority, clinical judgment, approvals, and accountability.</b></div>
          <div class="healthcareTrustBand"><span>Privacy &amp; PHI Boundaries</span><span>Role-Based Access</span><span>Clinical Review</span><span>Human Approval</span><span>Explainability</span><span>Evaluation</span><span>Audit History</span><span>Escalation</span></div>
        </div>

        <div class="healthcareArchitectureClosing">Healthcare AI should expand human capability without obscuring human accountability.</div>
      </div>

      <div class="healthcareDecisionSection">
        <div class="healthcareDecisionHead"><div><div class="eyebrow">AI IN REAL HEALTHCARE DECISIONS</div><h3>Understand. Decide. Coordinate. Act safely.</h3></div><p>Different parts of a healthcare platform need different kinds of intelligence. The goal is not to force every problem into the same model—it is to use the right level of AI, workflow automation, and human authority for the decision being made.</p></div>

        <div class="healthcareDecisionGrid">
          <article class="healthcareDecisionCard"><div class="healthcareDecisionTop"><span>01</span><small>UNDERSTAND</small></div><h3>Turn unstructured healthcare inputs into usable workflow context.</h3><p>Language-heavy work such as referrals, workforce requests, requirements, documents, and notes can be extracted, classified, summarized, and routed into structured product state.</p><div class="healthcareDecisionExamples"><span>Referral understanding</span><span>Requirement extraction</span><span>Document intelligence</span><span>Classification</span></div></article>

          <article class="healthcareDecisionCard dark"><div class="healthcareDecisionTop"><span>02</span><small>DECIDE</small></div><h3>Use evidence to rank fit, readiness, risk, and priority.</h3><p>AI can support decisions where many signals need to be weighed together, while policy rules and humans remain responsible for hard eligibility boundaries and sensitive judgment.</p><div class="healthcareDecisionExamples"><span>Match &amp; rank</span><span>Readiness risk</span><span>Priority scoring</span><span>Gap detection</span></div></article>

          <article class="healthcareDecisionCard"><div class="healthcareDecisionTop"><span>03</span><small>COORDINATE</small></div><h3>Connect decisions to the next valid step across systems.</h3><p>Scheduling, credentialing, communications, referrals, operations, and exception handling often require multiple systems and changing workflow state.</p><div class="healthcareDecisionExamples"><span>Scheduling &amp; capacity</span><span>Next-best action</span><span>Exception triage</span><span>Cross-system workflow</span></div></article>

          <article class="healthcareDecisionCard dark"><div class="healthcareDecisionTop"><span>04</span><small>ACT SAFELY</small></div><h3>Let AI act only where permissions and verification make the outcome dependable.</h3><p>Agentic and conversational workflows can retrieve context and perform bounded actions, but clinical judgment, sensitive decisions, and high-impact approvals remain under appropriate human control.</p><div class="healthcareDecisionExamples"><span>Tool use</span><span>Human approval</span><span>Verification</span><span>Escalation</span></div></article>
        </div>

        <div class="healthcareDecisionRouter">
          <div class="healthcareDecisionRouterTop">CHOOSING THE RIGHT DECISION SYSTEM</div>
          <div class="healthcareDecisionRouterGrid">
            <article><span>DETERMINISTIC</span><b>Rules / Conventional Software</b><p>Use when requirements are explicit, repeatable, and should behave predictably every time.</p></article>
            <article><span>INTELLIGENT</span><b>AI Capability</b><p>Use for language, ambiguity, ranking, prediction, extraction, and context-heavy assistance.</p></article>
            <article><span>MULTI-STEP</span><b>Agentic Workflow</b><p>Use when the next valid step changes with context and the system must coordinate tools across a longer workflow.</p></article>
            <article><span>AUTHORITY / JUDGMENT</span><b>Human Review or Approval</b><p>Use when clinical judgment, sensitive authority, accountability, or high-impact decisions require a person.</p></article>
          </div>
        </div>

        <div class="healthcareArchitectureFooter">The intelligence layer is only as strong as the workflow state, healthcare context, system connections, and human controls around it.</div>
      </div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.healthcareReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: How intelligence moves through the healthcare operating workflow</h2><p>Next we’ll show the larger platform in motion across workforce demand, referrals and care, readiness and credentialing, scheduling, documentation, financial operations, exceptions, and human decision points.</p>';
})();
