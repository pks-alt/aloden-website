// Healthcare AI content-review layer — approved Section 6 / outcome-focused value model.
(() => {
  const section = document.querySelector('#healthcare-ai-value');
  if (!section) return;

  section.innerHTML = `
    <div class="container">
      <div class="healthcareValueHead">
        <div class="eyebrow">WHERE HEALTHCARE AI CREATES VALUE</div>
        <h2 class="h2">Measure the healthcare outcome—not the amount of AI in the product.</h2>
        <p class="lead">AI creates value when it improves a real healthcare workflow: accelerating intake and decisions, improving fit and readiness, coordinating complex work, reducing administrative friction, or helping teams identify exceptions earlier.</p>
      </div>

      <div class="healthcareValueGrid">
        <article class="healthcareValueCard dark">
          <div class="healthcareValueTop"><span>01</span><small>FASTER DECISIONS &amp; INTAKE</small></div>
          <h3>Turn incoming healthcare information into usable workflow state faster.</h3>
          <p>Referrals, workforce requests, forms, documents, emails, and changing requirements often arrive in inconsistent formats. Intelligence can structure that information, identify missing context, and move it into the right workflow.</p>
          <div class="healthcareValueRole"><span>AI CONTRIBUTION</span><b>Extraction · Classification · Normalization · Missing-context detection · Routing</b></div>
          <div class="healthcareValueMeasures"><span>MEASURE</span><b>Intake time</b><b>Manual touches</b><b>Incomplete intake</b><b>Exception rate</b></div>
        </article>

        <article class="healthcareValueCard aiTint">
          <div class="healthcareValueTop"><span>02</span><small>BETTER FIT &amp; FASTER READINESS</small></div>
          <h3>Surface stronger options while finding readiness gaps earlier.</h3>
          <p>Matching becomes more useful when specialty, experience, licenses, credentials, geography, availability, requirements, and readiness evidence are evaluated together rather than treated as separate checks.</p>
          <div class="healthcareValueRole"><span>AI CONTRIBUTION</span><b>Semantic matching · Ranking · Readiness intelligence · Evidence interpretation</b></div>
          <div class="healthcareValueMeasures"><span>MEASURE</span><b>Time to qualified options</b><b>Time to readiness</b><b>Preventable delays</b><b>Match progression</b></div>
        </article>

        <article class="healthcareValueCard">
          <div class="healthcareValueTop"><span>03</span><small>BETTER COORDINATION</small></div>
          <h3>Keep complex healthcare workflows moving with fewer operational surprises.</h3>
          <p>Scheduling, capacity, credential gaps, documentation issues, failed integrations, and changing workflow state can be evaluated together so teams see what needs attention before work stalls.</p>
          <div class="healthcareValueRole"><span>AI CONTRIBUTION</span><b>Constraint evaluation · Capacity recommendations · Exception detection · Prioritization · Recovery paths</b></div>
          <div class="healthcareValueMeasures"><span>MEASURE</span><b>Coverage gaps</b><b>Schedule conflicts</b><b>Exception age</b><b>Resolution time</b></div>
        </article>

        <article class="healthcareValueCard dark">
          <div class="healthcareValueTop"><span>04</span><small>LESS ADMINISTRATIVE FRICTION</small></div>
          <h3>Keep intelligence connected after care or service delivery.</h3>
          <p>Documentation, EVV, approved time, forms, evidence, billing readiness, payroll state, and reconciliation should remain connected to the same workflow context instead of becoming separate downstream work.</p>
          <div class="healthcareValueRole"><span>AI CONTRIBUTION</span><b>Document intelligence · Missing-evidence detection · Anomaly detection · Reconciliation assistance</b></div>
          <div class="healthcareValueMeasures"><span>MEASURE</span><b>Processing effort</b><b>Missing documentation</b><b>Billing readiness</b><b>Correction cycles</b></div>
        </article>
      </div>

      <div class="healthcarePeopleValue">
        <div class="healthcarePeopleValueHead">
          <div><span>VALUE FOR THE PEOPLE IN THE SYSTEM</span><h3>The same intelligent platform should create different value for every person operating it.</h3></div>
          <p>Healthcare intelligence should reduce friction for each role without hiding workflow state, evidence, permissions, or decision authority.</p>
        </div>
        <div class="healthcarePeopleGrid">
          <article><b>Facility / Client</b><p>Faster access to qualified, feasible coverage.</p></article>
          <article><b>Care Team</b><p>Better information and workflow coordination.</p></article>
          <article><b>Clinician</b><p>Less repeated information and clearer readiness.</p></article>
          <article><b>Recruiter / Coordinator</b><p>Better prioritization and less manual searching.</p></article>
          <article><b>Credentialing</b><p>Earlier evidence visibility and clearer gaps.</p></article>
          <article><b>Operations / Finance</b><p>Better visibility into exceptions and downstream state.</p></article>
        </div>
      </div>

      <aside class="healthcareKpiRule">
        <div><span>THE KPI IS NOT AI USAGE</span><h3>Measure whether the healthcare workflow became faster, clearer, safer, or more reliable.</h3></div>
        <p>More prompts, more model calls, or more automated steps do not automatically create a better healthcare product. Production measurement should stay tied to workflow performance, human outcomes, reliability, adoption, and operating effort.</p>
      </aside>

      <div class="healthcareValueClosing">Healthcare AI earns its place when intelligence improves an outcome that people, operations, and the business can actually measure.</div>
    </div>`;
})();
