// AI Product Engineering content-review layer — Section 3 / opportunity to production.
(() => {
  if (!document.querySelector('.aipeHero')) return;
  const next = document.querySelector('.aipeReviewNext');
  if (!next || document.querySelector('#opportunity-to-production')) return;

  const section = document.createElement('section');
  section.className = 'aipeProductionPath section soft';
  section.id = 'opportunity-to-production';
  section.innerHTML = `
    <div class="container">
      <div class="aipeProductionHead">
        <div class="eyebrow">FROM OPPORTUNITY TO PRODUCTION</div>
        <h2 class="h2">Build in stages. Reduce uncertainty before it becomes technical debt.</h2>
        <p class="lead">AI products carry uncertainty across the problem, user behavior, data, model performance, integrations, cost, and operational risk. Aloden reduces that uncertainty progressively—validating important assumptions early, engineering the product in working slices, and increasing production discipline as evidence grows.</p>
      </div>

      <div class="aipeDeliverySystem" aria-label="Progressive AI product delivery from validation through production and evolution">
        <div class="aipeDeliveryTop"><span>PROGRESSIVE DELIVERY SYSTEM</span><b>EVIDENCE GATES BETWEEN STAGES</b></div>
        <div class="aipeDeliveryStages">
          <article><span>01</span><b>Validate</b><small>Opportunity</small></article>
          <i>Evidence sufficient?</i>
          <article><span>02</span><b>Define</b><small>Product &amp; controls</small></article>
          <i>Continue / refine</i>
          <article><span>03</span><b>Architect</b><small>System</small></article>
          <i>Evidence sufficient?</i>
          <article><span>04</span><b>Build</b><small>Working slices</small></article>
          <i>Continue / refine</i>
          <article><span>05</span><b>Evaluate</b><small>Harden</small></article>
          <i>Evidence sufficient?</i>
          <article><span>06</span><b>Deploy &amp; Evolve</b><small>Observe &amp; improve</small></article>
        </div>
        <div class="aipeEvidenceRails">
          <div><b>Product Evidence</b><span>Does this solve the right problem?</span></div>
          <div><b>Engineering Evidence</b><span>Does the system behave as intended?</span></div>
          <div><b>Operational Evidence</b><span>Can people depend on it in real use?</span></div>
        </div>
      </div>

      <div class="aipeDeliveryGrid">
        <article class="aipeDeliveryCard">
          <div class="aipeDeliveryCardTop"><span>01</span><small>VALIDATE THE OPPORTUNITY</small></div>
          <h3>Prove the problem and the role for AI before scaling the build.</h3>
          <p>Understand the users, current workflow, baseline, constraints, available data, business value, and risks. Determine whether AI materially improves the outcome—or whether simpler product logic is better.</p>
          <div class="aipeOutput"><b>Output</b><span>Product thesis</span><span>AI opportunity</span><span>Success measures</span><span>Key constraints</span></div>
        </article>

        <article class="aipeDeliveryCard">
          <div class="aipeDeliveryCardTop"><span>02</span><small>DEFINE THE PRODUCT &amp; CONTROLS</small></div>
          <h3>Turn the opportunity into a product people can understand and operate.</h3>
          <p>Define product flows, AI responsibilities, deterministic rules, user decisions, approvals, corrections, fallbacks, and human-control points.</p>
          <div class="aipeOutput"><b>Output</b><span>Product blueprint</span><span>Experience flows</span><span>AI boundaries</span><span>Acceptance criteria</span></div>
        </article>

        <article class="aipeDeliveryCard architectureDeliveryCard">
          <div class="aipeDeliveryCardTop"><span>03</span><small>ARCHITECT THE SYSTEM</small></div>
          <h3>Design for today without locking the product to today’s model.</h3>
          <p>Shape the application, data, context, model, retrieval, tool, integration, security, evaluation, and observability architecture around the product requirements.</p>
          <div class="aipeOutput"><b>Output</b><span>System architecture</span><span>Integration model</span><span>Data / context strategy</span><span>Delivery plan</span></div>
        </article>

        <article class="aipeDeliveryCard">
          <div class="aipeDeliveryCardTop"><span>04</span><small>BUILD &amp; INTEGRATE</small></div>
          <h3>Engineer working product slices, not disconnected demos.</h3>
          <p>Build frontend and backend behavior together with AI, APIs, enterprise systems, identity, workflow state, permissions, and data flows so each increment behaves like part of the eventual product.</p>
          <div class="aipeOutput"><b>Output</b><span>Working product increments</span><span>Connected workflows</span><span>Integrated intelligence</span></div>
        </article>

        <article class="aipeDeliveryCard">
          <div class="aipeDeliveryCardTop"><span>05</span><small>EVALUATE &amp; HARDEN</small></div>
          <h3>Test the behavior users will actually depend on.</h3>
          <p>Evaluate realistic scenarios, quality, edge cases, latency, cost, permissions, failures, fallback behavior, human escalation, and operational readiness before expanding use.</p>
          <div class="aipeOutput"><b>Output</b><span>Evaluation evidence</span><span>Reliability controls</span><span>Release criteria</span><span>Known limitations</span></div>
        </article>

        <article class="aipeDeliveryCard">
          <div class="aipeDeliveryCardTop"><span>06</span><small>DEPLOY, OBSERVE &amp; EVOLVE</small></div>
          <h3>Production creates the next set of evidence.</h3>
          <p>Deploy with monitoring, product analytics, model and workflow observability, user feedback, version control, and operational response in place—then improve based on what actually happens.</p>
          <div class="aipeOutput"><b>Output</b><span>Production system</span><span>Monitoring</span><span>Feedback loop</span><span>Evolution roadmap</span></div>
        </article>
      </div>

      <div class="aipeProductionClosing">Move quickly where the evidence is strong. Learn early where it is not.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.aipeReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: What changes from prototype to production</h2><p>Next we’ll show the engineering shifts that turn a promising AI demo into dependable product behavior people and operations can actually rely on.</p>';

  if (!document.querySelector('#aipe-section3-style')) {
    const style = document.createElement('style');
    style.id = 'aipe-section3-style';
    style.textContent = `
      .aipeProductionPath{background:linear-gradient(180deg,#fafbfc,#f8f8fb)}
      .aipeProductionHead .lead{max-width:940px}
      .aipeDeliverySystem{margin-top:28px;border:1px solid #dfe2e7;border-radius:17px;background:#fff;overflow:hidden;box-shadow:0 12px 32px rgba(21,28,45,.03)}
      .aipeDeliveryTop{display:flex;justify-content:space-between;gap:16px;align-items:center;padding:12px 14px;border-bottom:1px solid var(--line);background:#fbfcfd}.aipeDeliveryTop span,.aipeDeliveryTop b{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em}.aipeDeliveryTop span{color:var(--violet)}.aipeDeliveryTop b{font-weight:500;color:#858d99}
      .aipeDeliveryStages{display:grid;grid-template-columns:minmax(92px,1fr) 70px minmax(92px,1fr) 70px minmax(92px,1fr) 70px minmax(92px,1fr) 70px minmax(92px,1fr) 70px minmax(110px,1.2fr);gap:6px;align-items:center;padding:17px 15px 12px}.aipeDeliveryStages article{border:1px solid #e0e4e9;border-radius:10px;background:#fbfcfe;padding:10px;min-height:72px}.aipeDeliveryStages article:nth-of-type(4){background:#12151b;border-color:#2a2e36;color:#fff}.aipeDeliveryStages article>span{display:block;font-family:'IBM Plex Mono',monospace;font-size:8px;color:var(--violet)}.aipeDeliveryStages article:nth-of-type(4)>span{color:#aa92ff}.aipeDeliveryStages article b{display:block;font-size:11px;margin-top:6px}.aipeDeliveryStages article small{display:block;font-size:8.5px;color:#7b8490;margin-top:3px}.aipeDeliveryStages article:nth-of-type(4) small{color:#aab1bc}.aipeDeliveryStages i{font-style:normal;text-align:center;font-family:'IBM Plex Mono',monospace;font-size:7.2px;line-height:1.35;color:#8a839d;position:relative}.aipeDeliveryStages i:before{content:'↔';display:block;color:#8b73d2;font-size:12px;line-height:1;margin-bottom:3px}
      .aipeEvidenceRails{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:0 15px 15px}.aipeEvidenceRails div{border:1px solid #e0e4e9;border-radius:10px;padding:10px 11px;background:linear-gradient(180deg,#fff,#fafbfc)}.aipeEvidenceRails b{display:block;font-size:10.5px}.aipeEvidenceRails span{display:block;font-size:9px;line-height:1.4;color:#76808d;margin-top:3px}
      .aipeDeliveryGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:28px}.aipeDeliveryCard{border:1px solid #e0e3e8;border-radius:16px;background:#fff;padding:20px;min-width:0}.aipeDeliveryCard.architectureDeliveryCard{background:#111318;border-color:#292d35;color:#fff}.aipeDeliveryCardTop{display:flex;align-items:center;justify-content:space-between;gap:14px}.aipeDeliveryCardTop>span{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--violet)}.aipeDeliveryCardTop small{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.07em;color:#7d8592;text-align:right}.architectureDeliveryCard .aipeDeliveryCardTop>span{color:#a58aff}.architectureDeliveryCard .aipeDeliveryCardTop small{color:#949ca8}.aipeDeliveryCard h3{font-size:clamp(21px,2vw,27px);line-height:1.1;letter-spacing:-.032em;margin:15px 0 9px;max-width:560px}.aipeDeliveryCard>p{font-size:12.8px;line-height:1.62;color:var(--body);margin:0}.architectureDeliveryCard>p{color:#aeb4bf}
      .aipeOutput{display:flex;gap:6px;flex-wrap:wrap;margin-top:16px;padding-top:14px;border-top:1px solid #e3e6ea}.aipeOutput b{width:100%;font-family:'IBM Plex Mono',monospace;font-size:8.3px;letter-spacing:.08em;color:#7a8390}.aipeOutput span{border:1px solid #e0e4e9;border-radius:999px;background:#fbfcfe;padding:6px 8px;font-size:9px;color:#66707c}.architectureDeliveryCard .aipeOutput{border-color:#2e323a}.architectureDeliveryCard .aipeOutput b{color:#949ca8}.architectureDeliveryCard .aipeOutput span{background:#171a20;border-color:#30343d;color:#b4bbc5}
      .aipeProductionClosing{margin-top:24px;padding-top:17px;border-top:1px solid #dfe2e7;font-size:16px;font-weight:700;letter-spacing:-.018em;color:#20242d}
      @media(max-width:1120px){.aipeDeliveryStages{grid-template-columns:repeat(6,1fr)}.aipeDeliveryStages i{display:none}}
      @media(max-width:820px){.aipeDeliveryGrid{grid-template-columns:1fr}.aipeDeliveryStages{grid-template-columns:repeat(3,1fr)}.aipeEvidenceRails{grid-template-columns:1fr}}
      @media(max-width:560px){.aipeDeliveryTop{align-items:flex-start;flex-direction:column}.aipeDeliveryStages{grid-template-columns:repeat(2,1fr)}.aipeDeliveryCard{padding:17px}.aipeDeliveryCardTop{align-items:flex-start;flex-direction:column;gap:7px}.aipeDeliveryCardTop small{text-align:left}.aipeProductionClosing{font-size:15px}}
    `;
    document.head.appendChild(style);
  }
})();
