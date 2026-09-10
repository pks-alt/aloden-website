// Healthcare AI content-review layer — Section 3 / intelligence across operating workflows.
(() => {
  if (!document.querySelector('.healthcareAiHero')) return;
  const next = document.querySelector('.healthcareReviewNext');
  if (!next || document.querySelector('#healthcare-workflow-intelligence')) return;

  if (!document.querySelector('link[href^="healthcare-ai-section3.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'healthcare-ai-section3.css?v=1';
    document.head.appendChild(link);
  }

  const section = document.createElement('section');
  section.className = 'healthcareWorkflowIntelligence section';
  section.id = 'healthcare-workflow-intelligence';
  section.innerHTML = `
    <div class="container">
      <div class="healthcareWorkflowIntelligenceHead">
        <div class="eyebrow">INTELLIGENCE IN THE WORKFLOW</div>
        <h2 class="h2">One intelligence layer. Different healthcare journeys.</h2>
        <p class="lead">Healthcare is not one workflow. Workforce demand, patient referrals, credentialing, scheduling, documentation, and financial operations move differently—but they can share the same product context, AI capabilities, workflow state, system integrations, and human-control model.</p>
      </div>

      <div class="healthcareSharedCore" aria-label="Shared healthcare intelligence and workflow state across six healthcare journeys">
        <div class="healthcareSharedCoreTop"><span>SHARED PLATFORM INTELLIGENCE</span><b>ONE CONTEXT + STATE LAYER ACROSS MULTIPLE HEALTHCARE JOURNEYS</b></div>
        <div class="healthcareSharedCoreCenter">
          <div class="healthcareSharedCoreLabel">HEALTHCARE INTELLIGENCE &amp; WORKFLOW STATE</div>
          <h3>Shared intelligence—not six disconnected AI features.</h3>
          <p>The same platform can understand language, rank options, detect readiness gaps, coordinate schedules, interpret documents, surface exceptions, use permitted tools, and keep workflow state current across different healthcare operating journeys.</p>
          <div class="healthcareSharedAiPills"><span>Language Understanding</span><span>Matching &amp; Ranking</span><span>Readiness &amp; Risk</span><span>Scheduling &amp; Capacity</span><span>Document Intelligence</span><span>Agentic Orchestration</span><span>Exception Intelligence</span></div>
        </div>
        <div class="healthcareSharedJourney"><span>Context</span><span>AI Assistance</span><span>Rules / Policy</span><span>Human Decision</span><span>System Action</span><span>Verification</span><span>Updated State</span></div>
      </div>

      <div class="healthcareJourneyGrid">
        <article class="healthcareJourneyCard dark">
          <div class="healthcareJourneyTop"><span>01</span><small>WORKFORCE &amp; FACILITY DEMAND</small></div>
          <h3>Turn workforce demand into a qualified, ready assignment.</h3>
          <p>Facility needs move through requirements, sourcing, fit, human review, readiness, assignment, time, and downstream financial operations.</p>
          <div class="healthcareJourneyFlow"><span>Facility Need</span><span>Understand Requirement</span><span>Discover</span><span>Match &amp; Rank</span><span>Review</span><span>Ready</span><span>Assign</span><span>Time / Billing</span></div>
          <div class="healthcareAiPoints"><b>AI DECISION POINTS</b><div><span>Requirement extraction</span><span>Sourcing assistance</span><span>Semantic matching</span><span>Ranking</span><span>Readiness risk</span><span>Next-best action</span><span>Exception detection</span></div></div>
          <div class="healthcareHumanLine"><span>HUMAN CONTROL</span><b>Recruiter / coordinator · Credentialing · Facility approval</b></div>
        </article>

        <article class="healthcareJourneyCard aiTint">
          <div class="healthcareJourneyTop"><span>02</span><small>PATIENT REFERRAL &amp; HOME HEALTH</small></div>
          <h3>Move a care referral from intake to documented visit.</h3>
          <p>Referral workflows have different state, timing, geography, care context, documentation, and clinical-accountability requirements than workforce staffing.</p>
          <div class="healthcareJourneyFlow"><span>Referral</span><span>Intake</span><span>Coverage / Eligibility</span><span>Discipline &amp; Geography</span><span>Clinician Match</span><span>Accept</span><span>Schedule</span><span>Visit</span><span>EVV / Documentation</span></div>
          <div class="healthcareAiPoints"><b>AI DECISION POINTS</b><div><span>Referral extraction</span><span>Urgency / context</span><span>Clinician fit</span><span>Route / capacity support</span><span>Documentation assistance</span><span>Missing-evidence detection</span><span>Exception prioritization</span></div></div>
          <div class="healthcareHumanLine"><span>HUMAN CONTROL</span><b>Clinical review · Care team · Scheduler · Clinician</b></div>
          <div class="healthcareJourneyPrinciple">AI assists operational and information workflows; clinical judgment remains with qualified professionals.</div>
        </article>

        <article class="healthcareJourneyCard">
          <div class="healthcareJourneyTop"><span>03</span><small>CREDENTIALING &amp; READINESS</small></div>
          <h3>Turn evidence into a verifiable readiness state.</h3>
          <p>Credentialing is a workflow of requirements, evidence collection, document interpretation, verification, gap resolution, approval, and ongoing expiration monitoring.</p>
          <div class="healthcareJourneyFlow"><span>Requirements</span><span>Collect Evidence</span><span>Document Intelligence</span><span>Verify</span><span>Gap Detection</span><span>Human Review</span><span>Ready / Not Ready</span><span>Monitor</span></div>
          <div class="healthcareAiPoints"><b>AI DECISION POINTS</b><div><span>Missing documents</span><span>Expiration risk</span><span>Inconsistent evidence</span><span>Requirement gaps</span><span>Readiness risk</span><span>Recommended next action</span></div></div>
          <div class="healthcareJourneyPrinciple">AI evidence ≠ verified credential.</div>
        </article>

        <article class="healthcareJourneyCard dark">
          <div class="healthcareJourneyTop"><span>04</span><small>SCHEDULING, CAPACITY &amp; OPERATIONS</small></div>
          <h3>Narrow complex choices without hiding the constraints.</h3>
          <p>Scheduling may depend on skill, geography, availability, workload, timing, facility requirements, continuity, travel, and visit feasibility.</p>
          <div class="healthcareJourneyFlow"><span>Demand / Visit</span><span>Availability</span><span>Evaluate Constraints</span><span>Recommend</span><span>Confirm</span><span>Change / Exception</span><span>Reassign / Escalate</span></div>
          <div class="healthcareAiPoints"><b>AI DECISION POINTS</b><div><span>Capacity recommendation</span><span>Constraint balancing</span><span>Travel / geography</span><span>Next-best option</span><span>Conflict detection</span><span>Exception recovery</span></div></div>
          <div class="healthcareJourneyPrinciple">AI narrows complexity. The product preserves constraints and authority.</div>
        </article>

        <article class="healthcareJourneyCard aiTint">
          <div class="healthcareJourneyTop"><span>05</span><small>DOCUMENTATION &amp; EVIDENCE</small></div>
          <h3>Make documents change the workflow—not just become summaries.</h3>
          <p>Credential documents, referrals, visit notes, timecards, forms, approvals, and correspondence become useful when the product can associate their evidence with the right workflow state.</p>
          <div class="healthcareJourneyFlow"><span>Incoming Document</span><span>Extract</span><span>Classify</span><span>Associate</span><span>Validate</span><span>Route</span><span>Review</span><span>Update State</span></div>
          <div class="healthcareAiPoints"><b>AI DECISION POINTS</b><div><span>OCR / extraction</span><span>Classification</span><span>Entity association</span><span>Evidence validation</span><span>Missing information</span><span>Routing</span></div></div>
          <div class="healthcareJourneyPrinciple">A document is valuable when its information changes the workflow state—not merely when AI can summarize it.</div>
        </article>

        <article class="healthcareJourneyCard">
          <div class="healthcareJourneyTop"><span>06</span><small>FINANCIAL &amp; OPERATIONAL INTELLIGENCE</small></div>
          <h3>Connect completed work to billing, payroll, and operational visibility.</h3>
          <p>Healthcare operations continue after the assignment or visit. Approved work, time or service evidence, billing readiness, invoicing, payroll state, payment state, and exceptions all create additional decisions.</p>
          <div class="healthcareJourneyFlow"><span>Approved Work / Visit</span><span>Time / Service Evidence</span><span>Billing Ready</span><span>Invoice</span><span>Payment / Payroll</span><span>Exception</span></div>
          <div class="healthcareAiPoints"><b>AI DECISION POINTS</b><div><span>Missing-time detection</span><span>Billing-readiness checks</span><span>Anomaly detection</span><span>Exception prioritization</span><span>Reconciliation assistance</span><span>Operational forecasting</span></div></div>
          <div class="healthcareHumanLine"><span>HUMAN CONTROL</span><b>Operations · Finance · Payroll · Client / facility approval where required</b></div>
        </article>
      </div>

      <div class="healthcareDecisionLoop" aria-label="Shared decision loop across healthcare workflows"><span>Context</span><span>AI Assistance</span><span>Rules / Policy</span><span>Human Decision</span><span>System Action</span><span>Verification</span><span>Updated State</span></div>
      <div class="healthcareWorkflowGuardrails"><span>Privacy &amp; PHI</span><span>Permissions</span><span>Clinical Boundaries</span><span>Auditability</span><span>Reliability</span></div>
      <div class="healthcareWorkflowClosing">The healthcare platform becomes intelligent when every decision can use the right context, every action updates the workflow state, and every high-impact outcome remains accountable.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.healthcareReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Where AI, rules, automation, and human judgment belong</h2><p>Next we’ll define healthcare decision boundaries clearly—what conventional software should handle, where AI should assist, where agentic workflows may act, and where qualified human review or approval must remain explicit.</p>';
})();
