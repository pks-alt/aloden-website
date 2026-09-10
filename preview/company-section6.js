// Company content-review layer — Section 6 / Trust & Responsible Delivery.
(() => {
  if (!document.querySelector('.companyHero')) return;
  const next = document.querySelector('.companyReviewNext');
  if (!next || document.querySelector('#trust-responsible-delivery')) return;

  if (!document.querySelector('link[href^="company-section6.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'company-section6.css?v=1';
    document.head.appendChild(link);
  }

  const section = document.createElement('section');
  section.className = 'companyTrust section';
  section.id = 'trust-responsible-delivery';
  section.innerHTML = `
    <div class="container">
      <div class="companyTrustHead">
        <div class="eyebrow">TRUST &amp; RESPONSIBLE DELIVERY</div>
        <h2 class="h2">Trust has to be engineered into the way the product is built.</h2>
        <p class="lead">Products operating around sensitive data, business-critical workflows, AI decisions, and connected systems need more than good software. Aloden treats confidentiality, control, quality, security, and accountability as part of the engineering discipline from the beginning.</p>
      </div>

      <div class="companyTrustGrid">
        <article class="companyTrustCard dark">
          <div class="companyTrustCardTop"><span>01</span><small>CONFIDENTIALITY</small></div>
          <h3>Protect the information that makes the product valuable.</h3>
          <p>Client information, product strategy, data, intellectual property, and sensitive workflow context should stay protected throughout discovery, design, engineering, testing, and production support.</p>
          <div class="companyTrustDetails"><span>Need-to-know access</span><span>Sensitive data boundaries</span><span>IP protection</span><span>Controlled collaboration</span></div>
        </article>

        <article class="companyTrustCard aiTint">
          <div class="companyTrustCardTop"><span>02</span><small>CONTROLLED DELIVERY</small></div>
          <h3>Keep access, change, and release paths explicit.</h3>
          <p>Production discipline requires clear environments, permissions, release controls, change management, traceability, and ownership so product change remains understandable and recoverable.</p>
          <div class="companyTrustDetails"><span>Access boundaries</span><span>Environment separation</span><span>Release controls</span><span>Traceability</span></div>
        </article>

        <article class="companyTrustCard">
          <div class="companyTrustCardTop"><span>03</span><small>QUALITY &amp; EVALUATION</small></div>
          <h3>Test the product behavior—not only whether the code runs.</h3>
          <p>Software quality and AI quality need different evidence. Aloden combines conventional testing with evaluation of model behavior, edge cases, tool use, workflow outcomes, reliability, and production performance.</p>
          <div class="companyTrustDetails"><span>Software testing</span><span>AI evaluation</span><span>Edge cases</span><span>Tool-use validation</span><span>Outcome verification</span></div>
        </article>

        <article class="companyTrustCard dark">
          <div class="companyTrustCardTop"><span>04</span><small>RESPONSIBLE AI</small></div>
          <h3>Define where AI assists, where it may act, and where people retain authority.</h3>
          <p>Responsible AI starts with product architecture: what context the system may use, what actions it may take, what must be verified, what requires approval, and how exceptions are escalated.</p>
          <div class="companyTrustDetails"><span>Permissions</span><span>Human control</span><span>Verification</span><span>Escalation</span><span>Audit evidence</span></div>
        </article>
      </div>

      <div class="companyTrustRail"><span>Security</span><span>Privacy</span><span>Reliability</span><span>Accessibility</span><span>Performance</span><span>Observability</span></div>

      <div class="companyAccountability" aria-label="AI accountability model">
        <div class="companyAccountabilityTop"><span>AI ACCOUNTABILITY MODEL</span><b>CONTEXT → AUTHORITY → ACTION → VERIFICATION → EVIDENCE</b></div>
        <div class="companyAccountabilityBody">
          <div class="companyAccountabilityFlow"><span>Context</span><span>Model / Agent</span><span>Policy &amp; Permission</span><span>Action or Recommendation</span><span>Verification</span><span>Human Review when required</span><span>Audit / Evidence</span></div>
          <div class="companyAccountabilityPrinciple">More autonomy should come with more explicit controls—not fewer.</div>
        </div>
      </div>

      <div class="companyExpectations">
        <div class="companyExpectationsHead"><div><span>WHAT CLIENTS SHOULD EXPECT</span><h3>Clear ownership. Visible progress. Production discipline.</h3></div><p>Responsible delivery is also about how the engagement feels. Product decisions, assumptions, progress, quality evidence, and production readiness should remain visible rather than disappearing inside the development process.</p></div>
        <div class="companyExpectationGrid">
          <article><span>01</span><b>Clear Ownership</b><p>Know who owns decisions, deliverables, approvals, and outcomes.</p></article>
          <article><span>02</span><b>Visible Progress</b><p>See working product evidence instead of long periods of invisible development.</p></article>
          <article><span>03</span><b>Explicit Assumptions</b><p>Surface important product, AI, data, and integration assumptions early.</p></article>
          <article><span>04</span><b>Production Discipline</b><p>Treat deployment, security, monitoring, reliability, and operations as delivery work.</p></article>
          <article><span>05</span><b>No Inflated AI Claims</b><p>Demonstrate and evaluate capabilities rather than rely on unsupported performance claims.</p></article>
        </div>
      </div>

      <div class="companyTrustClosing">Responsible delivery means making the product dependable, the decisions traceable, and accountability clear.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.companyReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Final Company CTA</h2><p>Next we’ll close the Company page with one concise statement and a single Start a Project action, then consolidate the approved sections and formally lock the page.</p>';
})();