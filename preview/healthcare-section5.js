// Healthcare AI content-review layer — Section 5 / Medlivo product proof.
(() => {
  if (!document.querySelector('.healthcareAiHero')) return;
  const next = document.querySelector('.healthcareReviewNext');
  if (!next || document.querySelector('#medlivo-healthcare-proof')) return;

  if (!document.querySelector('link[href^="healthcare-ai-section5.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'healthcare-ai-section5.css?v=1';
    document.head.appendChild(link);
  }

  const section = document.createElement('section');
  section.className = 'medlivoHealthcareProof section';
  section.id = 'medlivo-healthcare-proof';
  section.innerHTML = `
    <div class="container">
      <div class="medlivoHealthcareProofHead">
        <div><div class="eyebrow">BUILT BY ALODEN · MEDLIVO</div><h2 class="h2">Healthcare intelligence designed around the full operating workflow.</h2><p class="lead">Medlivo demonstrates how Aloden approaches healthcare AI as a connected product system rather than a collection of isolated features. Workforce demand, referrals, clinician intelligence, credentialing, scheduling, care delivery, documentation, financial operations, and exceptions share product context and workflow state—creating places where AI can assist without removing the human controls healthcare requires.</p></div>
        <img class="medlivoProofLogo" src="assets/medlivo-logo.webp" alt="Medlivo logo" loading="lazy" decoding="async">
      </div>

      <div class="medlivoPlatformMap" aria-label="Medlivo platform spanning workforce, care, and operations">
        <div class="medlivoPlatformTop"><span>MEDLIVO PLATFORM MAP</span><b>WORKFORCE · CARE · OPERATIONS → ONE CONNECTED PRODUCT SYSTEM</b></div>
        <div class="medlivoEntryPaths">
          <article><span>WORKFORCE</span><h3>Facility / Client Need</h3><p>Nursing · Allied · Rehab · Locum Tenens · Physicians &amp; APPs</p></article>
          <article><span>CARE</span><h3>Patient / Home Health Referral</h3><p>Discipline · geography · timing · payer · care context</p></article>
          <article><span>OPERATIONS</span><h3>Workflow Event / Exception</h3><p>Credential gap · document · schedule change · time / billing exception</p></article>
        </div>
        <div class="medlivoCoreBand"><span>MEDLIVO INTELLIGENCE &amp; WORKFLOW PLATFORM</span><h3>Shared context. Durable workflow state. Intelligence at the decision points.</h3><p>The product carries the state of the work forward instead of treating matching, credentialing, scheduling, documentation, and financial operations as separate disconnected experiences.</p></div>
        <div class="medlivoLifecycle"><span>Need / Referral</span><span>Intelligence</span><span>Match</span><span>Clinician Passport</span><span>Credentialing &amp; Readiness</span><span>Scheduling / Assignment</span><span>Visit / Shift / Service</span><span>Documentation / EVV / Time</span><span>Billing / Payroll / Operations</span></div>
        <div class="medlivoControlRail"><span>Privacy</span><span>Permissions</span><span>Security</span><span>Verification</span><span>Human Approval</span><span>Auditability</span></div>
      </div>

      <div class="medlivoAiSurface">
        <div class="medlivoAiSurfaceHead"><div><span>AI ACROSS THE PLATFORM</span><h3>AI improves decisions inside the workflow.</h3></div><p>The value is not a single “AI matching” feature. Intelligence can assist at multiple points while the workflow, system-of-record controls, and accountable people remain explicit.</p></div>
        <div class="medlivoAiGrid">
          <article class="medlivoAiCard"><span>01</span><h4>Intake Intelligence</h4><p>Structure workforce requirements, referrals, incoming documents, and changing workflow context.</p></article>
          <article class="medlivoAiCard"><span>02</span><h4>Clinician Intelligence</h4><p>Use profile, specialty, licenses, credentials, experience, geography, availability, history, and readiness context.</p></article>
          <article class="medlivoAiCard"><span>03</span><h4>Matching &amp; Ranking</h4><p>Surface stronger-fit clinicians using evidence and requirements rather than keyword search alone.</p></article>
          <article class="medlivoAiCard"><span>04</span><h4>Credentialing Intelligence</h4><p>Detect missing evidence, expiration risk, incomplete requirements, conflicts, and readiness gaps.</p></article>
          <article class="medlivoAiCard"><span>05</span><h4>Scheduling &amp; Capacity</h4><p>Bring availability, discipline, geography, timing, workload, and operational constraints together.</p></article>
          <article class="medlivoAiCard"><span>06</span><h4>Document Intelligence</h4><p>Interpret credential documents, referrals, visit evidence, forms, approvals, and time-related documentation.</p></article>
          <article class="medlivoAiCard"><span>07</span><h4>Exception &amp; Next-Best Action</h4><p>Identify workflows that have stalled and surface what should happen next.</p></article>
          <article class="medlivoAiCard"><span>08</span><h4>Conversational / Agentic Operations</h4><p>Retrieve context, coordinate permitted systems, update bounded workflow state, verify outcomes, and escalate when needed.</p></article>
        </div>
        <div class="medlivoAiPrinciple">AI is not the Medlivo workflow. AI improves specific decisions inside the Medlivo workflow.</div>
      </div>

      <div class="medlivoPassport">
        <div class="medlivoPassportIntro"><span>CLINICIAN PASSPORT</span><h3>One reusable clinician context across the workflow.</h3><p>Instead of repeatedly reconstructing the same clinician context, the product can carry identity, specialty, evidence, readiness, availability, and history forward into matching, credentialing, scheduling, delivery, documentation, and operations.</p></div>
        <div class="medlivoPassportData"><div class="medlivoPassportFields"><span>Identity &amp; Profile</span><span>Specialty &amp; Experience</span><span>Licenses</span><span>Credentials</span><span>Availability</span><span>Geography</span><span>Assignment / Visit History</span><span>Readiness State</span><span>Documents &amp; Evidence</span></div><div class="medlivoPassportReuse"><span>Match</span><span>Credential</span><span>Schedule</span><span>Deliver</span><span>Document</span><span>Operate</span></div></div>
      </div>

      <div class="medlivoPathCompare">
        <article class="medlivoDeliveryPath"><span>FACILITY / WORKFORCE PATH</span><h3>Different disciplines. One workforce operating path.</h3><p>Supports Nursing, Allied, Rehab, and Locum Tenens / Physicians &amp; APPs without reducing the platform to any single discipline.</p><div class="medlivoDeliveryFlow"><span>Client Need</span><span>Candidate Intelligence</span><span>Submission</span><span>Readiness</span><span>Assignment</span><span>Approved Time</span><span>Billing / Payroll</span></div><div class="medlivoDeliverySupport">Nursing · Allied · Rehab · Locum Tenens / Physicians &amp; APPs</div></article>
        <article class="medlivoDeliveryPath carePath"><span>HOME HEALTH / CARE PATH</span><h3>Referral-driven care has a different operating workflow.</h3><p>Home-health and care journeys share platform intelligence and context while preserving referral, scheduling, visit, EVV, documentation, and clinical-accountability needs.</p><div class="medlivoDeliveryFlow"><span>Referral</span><span>Intake</span><span>Clinician Fit</span><span>Acceptance</span><span>Scheduling</span><span>Visit</span><span>EVV / Documentation</span><span>Follow-Up / Billing</span></div><div class="medlivoDeliverySupport">Shared intelligence does not mean identical workflow.</div></article>
      </div>

      <div class="medlivoOperatingLayer">
        <div class="medlivoOperatingIntro"><span>OPERATING LAYER</span><h3>People and systems remain part of the product.</h3><p>Healthcare workflow software only becomes operationally useful when accountable teams, connected systems, evidence, and downstream financial processes remain visible in the architecture.</p></div>
        <div class="medlivoOperatingRight"><div class="medlivoOperatingLabel">PEOPLE &amp; OPERATING FUNCTIONS</div><div class="medlivoOperatingPeople"><span>Credentialing</span><span>Clinical Review</span><span>Scheduling</span><span>Recruiter / Coordinator</span><span>Client / Facility</span><span>Finance / Payroll</span></div><div class="medlivoOperatingLabel">CONNECTED SYSTEMS</div><div class="medlivoOperatingSystems"><span>ATS / VMS / MSP</span><span>Background / Credential Systems</span><span>Scheduling / EVV / EHR where appropriate</span><span>Communications</span><span>Billing / Payroll</span></div></div>
      </div>

      <div class="medlivoProofStatement"><b>Medlivo shows what healthcare AI looks like when intelligence is engineered into the product architecture, workflow state, data, integrations, and operating model—not added later as a standalone feature.</b><p>Product capabilities and AI features evolve by workflow and deployment context; human review and system-of-record controls remain explicit where required.</p></div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.healthcareReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Where healthcare AI creates measurable value</h2><p>Next we’ll connect the platform architecture to practical outcomes across workforce access, readiness, scheduling, care coordination, documentation, operating efficiency, and financial workflow—without reducing the value story to one AI feature.</p>';
})();
