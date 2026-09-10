// Healthcare AI content-review layer — Section 4 / AI, Rules & Human Judgment.
(() => {
  if (!document.querySelector('.healthcareAiHero')) return;
  const next = document.querySelector('.healthcareReviewNext');
  if (!next || document.querySelector('#healthcare-authority-model')) return;

  if (!document.querySelector('link[href^="healthcare-ai-section4.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'healthcare-ai-section4.css?v=1';
    document.head.appendChild(link);
  }

  const section = document.createElement('section');
  section.className = 'healthcareAuthority section';
  section.id = 'healthcare-authority-model';
  section.innerHTML = `
    <div class="container">
      <div class="healthcareAuthorityHead">
        <div class="eyebrow">AI, RULES &amp; HUMAN JUDGMENT</div>
        <h2 class="h2">Put intelligence where ambiguity exists—and authority where accountability belongs.</h2>
        <p class="lead">Healthcare AI should not mean letting a model make every decision. The product needs to distinguish deterministic requirements, AI-assisted judgment, bounded automated action, and decisions that remain with qualified people.</p>
      </div>

      <div class="healthcareAuthorityModel" aria-label="Healthcare decision model for rules, AI assistance, agentic action, and human authority">
        <div class="healthcareAuthorityTop"><span>DECISION &amp; AUTHORITY MODEL</span><b>USE THE LEAST AUTONOMY NECESSARY FOR THE OUTCOME</b></div>
        <div class="healthcareAuthorityLadder">
          <article><small>01 · DETERMINISTIC</small><h3>Rules / Conventional Software</h3><p>Use when the requirement is known, explicit, and should behave predictably every time.</p><strong>Required fields · Expiration dates · Hard eligibility · Workflow permissions · Billing rules</strong></article>
          <article><small>02 · AMBIGUOUS / PROBABILISTIC</small><h3>AI Assistance</h3><p>Use where language, ranking, interpretation, prioritization, or prediction can improve the workflow.</p><strong>Referral extraction · Semantic matching · Document interpretation · Readiness risk · Exception prioritization</strong></article>
          <article><small>03 · MULTI-STEP / SYSTEM-CONNECTED</small><h3>Agentic Workflow</h3><p>Use for bounded operational work that requires context, tools, workflow state, verification, and recovery.</p><strong>Gather missing information · Check systems · Coordinate updates · Route work · Verify completion</strong></article>
          <article><small>04 · HIGH-IMPACT / ACCOUNTABLE</small><h3>Qualified Human Review / Approval</h3><p>Keep authority with people when judgment, verification, sensitive impact, or clinical accountability is material.</p><strong>Clinical decisions · Final credential verification · Sensitive exceptions · High-impact approvals</strong></article>
        </div>
        <div class="healthcareAuthorityRisk"><span>Impact</span><span>Reversibility</span><span>Confidence</span><span>Permission</span><span>Clinical / Operational Risk</span></div>
      </div>

      <div class="healthcareAuthorityExamples">
        <article class="healthcareAuthorityCard dark"><span>CREDENTIALING</span><h3>AI can interpret evidence. People verify readiness.</h3><p>AI may extract credential details, identify missing information, flag expiration risk, and compare evidence with requirements. Final readiness remains a governed verification decision.</p><div class="healthcareAuthorityFlow"><span>Extract</span><span>Compare</span><span>Flag gaps</span><span>Credentialing review</span><span>Verified readiness</span></div></article>
        <article class="healthcareAuthorityCard aiTint"><span>MATCHING</span><h3>AI ranks fit. The workflow preserves selection authority.</h3><p>Matching intelligence can combine specialty, experience, credentials, availability, geography, and requirements to surface stronger options without treating a score as the final decision.</p><div class="healthcareAuthorityFlow"><span>Context</span><span>Rank</span><span>Evidence</span><span>Recruiter / coordinator review</span><span>Facility decision</span></div></article>
        <article class="healthcareAuthorityCard"><span>REFERRAL &amp; CARE WORKFLOW</span><h3>AI structures context. Qualified teams retain clinical judgment.</h3><p>AI can extract referral information, identify missing fields, route work, and surface relevant context while clinically material decisions remain with qualified professionals.</p><div class="healthcareAuthorityFlow"><span>Referral intake</span><span>AI structure</span><span>Workflow rules</span><span>Clinical review</span><span>Authorized next step</span></div></article>
        <article class="healthcareAuthorityCard dark"><span>SCHEDULING &amp; OPERATIONS</span><h3>AI narrows the choices. Permissions define what can change.</h3><p>Scheduling intelligence may recommend feasible options and bounded agents may update permitted workflow state, while exceptional or sensitive changes remain subject to review.</p><div class="healthcareAuthorityFlow"><span>Evaluate constraints</span><span>Recommend</span><span>Permission check</span><span>Action or approval</span><span>Verify</span></div></article>
        <article class="healthcareAuthorityCard aiTint"><span>FINANCIAL OPERATIONS</span><h3>AI surfaces anomalies. Deterministic controls and people authorize corrections.</h3><p>AI may identify missing time, billing-readiness issues, or unusual patterns, while rules check known requirements and finance or payroll teams authorize material corrections.</p><div class="healthcareAuthorityFlow"><span>Detect</span><span>Rule check</span><span>Evidence</span><span>Human authorization</span><span>Reconcile</span></div></article>
      </div>

      <aside class="healthcareGuardrailPanel">
        <div class="healthcareGuardrailLead"><span>FIVE LINES WE DO NOT BLUR</span><h3>Keep evidence, authority, and outcomes distinct.</h3><p>Healthcare AI becomes more trustworthy when the product makes clear what was inferred, what was verified, what was permitted, and who remains accountable.</p></div>
        <div class="healthcareGuardrailList">
          <div><b>AI output ≠ verified fact</b><span>Generated or inferred information still needs the appropriate evidence and validation path.</span></div>
          <div><b>AI evidence ≠ verified credential</b><span>Document extraction and requirement comparison do not replace governed credential verification.</span></div>
          <div><b>Tool execution ≠ verified outcome</b><span>A system response must be checked against the intended workflow result.</span></div>
          <div><b>Recommendation ≠ authorization</b><span>Ranking or next-best action does not grant permission to commit a high-impact change.</span></div>
          <div><b>AI assistance ≠ clinical judgment</b><span>Clinically material judgment remains with appropriately qualified professionals.</span></div>
        </div>
      </aside>

      <div class="healthcareExecutionPaths">
        <article class="healthcareExecutionPath highImpact"><span>HIGHER-IMPACT ACTION</span><h3>Evidence and approval stay explicit.</h3><div class="healthcareExecutionFlow"><span>AI Recommendation</span><span>Evidence</span><span>Policy / Permission Check</span><span>Human Review</span><span>Authorized Action</span><span>Verification</span><span>Audit Record</span></div></article>
        <article class="healthcareExecutionPath"><span>BOUNDED LOW-RISK ACTION</span><h3>Automation can move faster when authority is already clear.</h3><div class="healthcareExecutionFlow"><span>AI / Agent</span><span>Permission Check</span><span>Action</span><span>Verification</span><span>Updated State</span></div></article>
      </div>

      <div class="healthcareAuthorityClosing">Healthcare AI should expand what people can understand and accomplish without making responsibility for important decisions less clear.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.healthcareReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Medlivo product proof</h2><p>Next we’ll ground the Healthcare AI architecture in a real Aloden-built healthcare platform—showing how Medlivo connects workforce demand, clinician intelligence, readiness, scheduling, care workflows, documentation, operations, and human control without reducing the product to therapy staffing.</p>';
})();
