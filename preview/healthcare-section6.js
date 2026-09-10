// Healthcare AI content-review layer — Section 6 / measurable healthcare value.
(() => {
  if (!document.querySelector('.healthcareAiHero')) return;
  const next = document.querySelector('.healthcareReviewNext');
  if (!next || document.querySelector('#healthcare-ai-value')) return;

  if (!document.querySelector('link[href^="healthcare-ai-section6.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'healthcare-ai-section6.css?v=1';
    document.head.appendChild(link);
  }

  const section = document.createElement('section');
  section.className = 'healthcareValue section';
  section.id = 'healthcare-ai-value';
  section.innerHTML = `
    <div class="container">
      <div class="healthcareValueHead">
        <div class="eyebrow">WHERE HEALTHCARE AI CREATES VALUE</div>
        <h2 class="h2">Measure the healthcare outcome—not the amount of AI in the product.</h2>
        <p class="lead">AI creates value when it improves a real healthcare workflow: getting the right resource to the right need, reducing readiness delays, coordinating capacity, removing administrative work, identifying exceptions earlier, or helping teams make better-informed decisions.</p>
      </div>

      <div class="healthcareValueMatrix" aria-label="Healthcare AI outcome matrix">
        <div class="healthcareValueMatrixTop"><span>OUTCOME MATRIX</span><b>AI CONTRIBUTION → CONTROL → MEASURABLE WORKFLOW RESULT</b></div>
        <div class="healthcareValueMatrixHeader"><span>HEALTHCARE OUTCOME</span><span>AI CONTRIBUTION</span><span>HUMAN / SYSTEM CONTROL</span><span>WHAT TO MEASURE</span></div>
        <div class="healthcareValueMatrixRow"><b>Structured intake</b><span>Extraction · classification · normalization</span><em>Validation rules · workflow review</em><strong>Intake time · incomplete intake</strong></div>
        <div class="healthcareValueMatrixRow"><b>Qualified options</b><span>Matching · ranking · evidence synthesis</span><em>Recruiter / coordinator · facility selection</em><strong>Time to qualified options · progression</strong></div>
        <div class="healthcareValueMatrixRow"><b>Ready clinician / resource</b><span>Gap detection · readiness risk · evidence interpretation</span><em>Credential verification · policy controls</em><strong>Time to readiness · preventable delay</strong></div>
        <div class="healthcareValueMatrixRow"><b>Feasible schedule</b><span>Capacity · geography · constraint balancing</span><em>Workflow rules · confirmation / approval</em><strong>Coverage gaps · conflicts · reassignment</strong></div>
        <div class="healthcareValueMatrixRow"><b>Complete evidence</b><span>Document extraction · association · validation support</span><em>Human / system-of-record validation</em><strong>Processing effort · missing evidence</strong></div>
        <div class="healthcareValueMatrixRow"><b>Resolved exception</b><span>Detection · prioritization · next-best action</span><em>Authority · escalation · verification</em><strong>Exception age · resolution time</strong></div>
        <div class="healthcareValueMatrixRow"><b>Financial readiness</b><span>Anomaly detection · evidence checks · reconciliation assistance</span><em>Billing / payroll controls · human authorization</em><strong>Correction cycles · reconciliation effort</strong></div>
      </div>

      <div class="healthcareValueGrid">
        <article class="healthcareValueCard dark">
          <div class="healthcareValueTop"><span>01</span><small>FASTER INTAKE &amp; TRIAGE</small></div>
          <h3>Turn incoming healthcare information into usable workflow state faster.</h3>
          <p>Job orders, referrals, forms, emails, notes, and documents often arrive in inconsistent formats. AI can extract, classify, normalize, identify missing information, and route work into the right product state.</p>
          <div class="healthcareValueRole"><span>AI ROLE</span><b>Extract · classify · normalize · detect missing context · route</b></div>
          <div class="healthcareValueMeasures"><span>MEASURE</span><b>Time to structured intake</b><b>Manual touches</b><b>Incomplete intake</b><b>Exception rate</b></div>
        </article>

        <article class="healthcareValueCard aiTint">
          <div class="healthcareValueTop"><span>02</span><small>MATCHING &amp; WORKFORCE ACCESS</small></div>
          <h3>Find options that are not only relevant—but feasible and ready.</h3>
          <p>Matching can combine specialty, experience, licenses, credentials, geography, availability, client requirements, readiness, and historical context to surface stronger-fit options.</p>
          <div class="healthcareValueRole"><span>AI ROLE</span><b>Semantic fit · evidence ranking · readiness-aware recommendations</b></div>
          <div class="healthcareValueMeasures"><span>MEASURE</span><b>Time to qualified options</b><b>Submission quality</b><b>Readiness of matches</b><b>Fulfillment progression</b></div>
        </article>

        <article class="healthcareValueCard">
          <div class="healthcareValueTop"><span>03</span><small>CREDENTIALING &amp; READINESS</small></div>
          <h3>Surface gaps early enough to prevent avoidable delays.</h3>
          <p>AI can help identify missing evidence, expiring items, conflicting information, unmet requirements, and stalled readiness work while governed credential verification remains explicit.</p>
          <div class="healthcareValueRole"><span>AI ROLE</span><b>Gap detection · expiration risk · evidence interpretation · next action</b></div>
          <div class="healthcareValueMeasures"><span>MEASURE</span><b>Time to readiness</b><b>Unresolved gaps</b><b>Expired-item incidence</b><b>Preventable start delays</b></div>
        </article>

        <article class="healthcareValueCard dark">
          <div class="healthcareValueTop"><span>04</span><small>SCHEDULING &amp; CAPACITY</small></div>
          <h3>Use intelligence to narrow complex scheduling choices without ignoring constraints.</h3>
          <p>Availability, skill, geography, workload, timing, continuity, requirements, and travel or visit feasibility can be evaluated together before a recommendation is made.</p>
          <div class="healthcareValueRole"><span>AI ROLE</span><b>Capacity recommendations · constraint balancing · conflict detection · next-best option</b></div>
          <div class="healthcareValueMeasures"><span>MEASURE</span><b>Time to schedule</b><b>Coverage gaps</b><b>Reassignment frequency</b><b>Avoidable conflicts</b></div>
        </article>

        <article class="healthcareValueCard aiTint">
          <div class="healthcareValueTop"><span>05</span><small>DOCUMENTATION &amp; EVIDENCE</small></div>
          <h3>Reduce administrative work by turning documents into workflow evidence.</h3>
          <p>Credentials, referrals, forms, visit evidence, EVV, timecards, approvals, and correspondence become more useful when the product can extract, classify, associate, validate, and route their information.</p>
          <div class="healthcareValueRole"><span>AI ROLE</span><b>Extract · classify · associate · validate support · route · detect missing evidence</b></div>
          <div class="healthcareValueMeasures"><span>MEASURE</span><b>Processing time</b><b>Manual data entry</b><b>Missing evidence</b><b>Routing errors</b></div>
        </article>

        <article class="healthcareValueCard">
          <div class="healthcareValueTop"><span>06</span><small>EARLIER EXCEPTION DETECTION</small></div>
          <h3>Find stalled or risky work before it becomes an operational surprise.</h3>
          <p>Credential gaps, schedule conflicts, incomplete referrals, missing documentation, failed integrations, unapproved time, billing holds, and stalled workflows can be surfaced and prioritized earlier.</p>
          <div class="healthcareValueRole"><span>AI ROLE</span><b>What changed? → Why it matters → Who should act? → What is the next valid step?</b></div>
          <div class="healthcareValueMeasures"><span>MEASURE</span><b>Exception age</b><b>Time to resolution</b><b>Preventable escalation</b><b>Operational backlog</b></div>
        </article>

        <article class="healthcareValueCard dark">
          <div class="healthcareValueTop"><span>07</span><small>FINANCIAL &amp; WORKFORCE OPERATIONS</small></div>
          <h3>Keep the intelligence story connected after care or service delivery.</h3>
          <p>Billing readiness, missing time, unusual patterns, reconciliation issues, and operational forecasting can use the same workflow context that supported intake, matching, readiness, and delivery.</p>
          <div class="healthcareValueRole"><span>AI ROLE</span><b>Readiness checks · anomaly detection · reconciliation assistance · exception prioritization · forecasting support</b></div>
          <div class="healthcareValueMeasures"><span>MEASURE</span><b>Billing readiness</b><b>Reconciliation effort</b><b>Correction cycles</b><b>Operational visibility</b></div>
        </article>

        <article class="healthcareValueCard aiTint">
          <div class="healthcareValueTop"><span>08</span><small>BETTER EXPERIENCE FOR PEOPLE</small></div>
          <h3>Technology matters when the workflow becomes easier for the people using it.</h3>
          <p>Healthcare AI should reduce repeated work, surface the right context, make next steps clearer, and help each role focus more attention on the decisions that require judgment.</p>
          <div class="healthcareValueRole"><span>OUTCOME</span><b>Less friction · clearer state · better prioritization · fewer unnecessary manual steps</b></div>
          <div class="healthcareValueMeasures"><span>MEASURE</span><b>User adoption</b><b>Workflow completion</b><b>Manual workload</b><b>Support / exception burden</b></div>
        </article>
      </div>

      <div class="healthcarePeopleValue">
        <div class="healthcarePeopleValueHead"><div><span>VALUE FOR THE PEOPLE IN THE SYSTEM</span><h3>Better healthcare workflows should feel better to operate.</h3></div><p>Different roles experience the same platform differently. The intelligence layer should reduce friction without hiding authority, workflow state, or the evidence behind important decisions.</p></div>
        <div class="healthcarePeopleGrid">
          <article><b>Facility / Client</b><p>Less friction getting qualified, feasible coverage.</p></article>
          <article><b>Care Team</b><p>Better information and workflow coordination.</p></article>
          <article><b>Clinician</b><p>Less duplicate information and clearer readiness.</p></article>
          <article><b>Recruiter / Coordinator</b><p>Better prioritization and less manual searching.</p></article>
          <article><b>Credentialing</b><p>Evidence surfaced earlier and gaps easier to manage.</p></article>
          <article><b>Operations / Finance</b><p>Exceptions and workflow state easier to understand.</p></article>
        </div>
      </div>

      <aside class="healthcareKpiRule"><div><span>THE KPI IS NOT AI USAGE</span><h3>Measure whether the healthcare workflow became faster, clearer, safer, or more reliable.</h3></div><p>A higher model score, more prompts, or more automated steps does not automatically mean a better healthcare product. Production measurement should stay tied to workflow performance, human outcomes, reliability, adoption, and operating effort.</p></aside>

      <div class="healthcareValueClosing">Healthcare AI earns its place when intelligence improves an outcome that people, operations, and the business can actually measure.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.healthcareReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Final Healthcare AI CTA</h2><p>Next we’ll close the page with one focused call to action, then consolidate the approved Healthcare AI sections into the permanent HTML/CSS and lock the page.</p>';
})();