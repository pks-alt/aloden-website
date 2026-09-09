// AI Product Engineering content-review layer — Section 6 / product proof.
(() => {
  if (!document.querySelector('.aipeHero')) return;
  const next = document.querySelector('.aipeReviewNext');
  if (!next || document.querySelector('#aipe-product-proof')) return;

  const section = document.createElement('section');
  section.className = 'aipeProductProof section';
  section.id = 'aipe-product-proof';
  section.innerHTML = `
    <div class="container">
      <div class="aipeProductProofHead">
        <div class="eyebrow">PRODUCT PROOF</div>
        <h2 class="h2">The same engineering discipline shows up in the products we build.</h2>
        <p class="lead">AI Product Engineering becomes meaningful when intelligence is surrounded by the product architecture, workflows, integrations, controls, and human decisions required for real use. Aloden’s products demonstrate that discipline across very different domains.</p>
      </div>

      <div class="aipeProofStrips">
        <article class="aipeProofStrip medlivoProofStrip">
          <div class="aipeProofIdentity">
            <img src="assets/medlivo-logo.webp" alt="Medlivo">
            <span>HEALTHCARE WORKFORCE TECHNOLOGY</span>
          </div>
          <div class="aipeProofNarrative">
            <h3>AI inside an operational healthcare workflow.</h3>
            <p>Matching intelligence is only one part of the product. The surrounding system manages workforce context, clinician readiness, credentialing, workflow state, scheduling, exceptions, and human review.</p>
            <div class="aipeProofFlow" aria-label="Medlivo product flow"><span>Need / Referral</span><span>Intelligence</span><span>Match</span><span>Clinician Passport</span><span>Credentialing</span><span>Scheduling / Visit</span><span>Operations</span></div>
          </div>
          <div class="aipeProofEvidence">
            <span>WHAT IT DEMONSTRATES</span>
            <div><b>AI matching</b><b>Context-rich decisions</b><b>Workflow state</b><b>Human review</b><b>Operational integration</b></div>
          </div>
        </article>

        <article class="aipeProofStrip startupfairProofStrip">
          <div class="aipeProofIdentity">
            <img src="assets/startupfair-logo.webp" alt="StartupFair">
            <span>INNOVATION PLATFORM</span>
          </div>
          <div class="aipeProofNarrative">
            <h3>Intelligence inside a multi-sided product experience.</h3>
            <p>The product connects organizations, builders, submissions, structured evaluation, governance, and opportunity pathways inside one platform—creating the foundation for intelligent discovery and evaluation without separating AI from the underlying product workflow.</p>
            <div class="aipeProofFlow" aria-label="StartupFair product flow"><span>Challenge</span><span>Builders</span><span>Solutions</span><span>Evaluation</span><span>Opportunity</span></div>
          </div>
          <div class="aipeProofEvidence">
            <span>WHAT IT DEMONSTRATES</span>
            <div><b>Multi-role UX</b><b>Workflow architecture</b><b>Evaluation systems</b><b>Structured evidence</b><b>Product governance</b></div>
          </div>
        </article>

        <article class="aipeProofStrip voiceProofStrip">
          <div class="aipeProofIdentity voiceProofIdentity">
            <span class="alodenLockup compactLockup"><span class="alodenMark"><i></i><i></i><i></i><i></i></span><span class="alodenWord">aloden</span></span>
            <strong>Voice AI</strong>
            <span>CONVERSATIONAL SYSTEM ACTION</span>
          </div>
          <div class="aipeProofNarrative">
            <h3>Conversation connected to real system action.</h3>
            <p>The intelligence does not stop at understanding language. The product connects intent to context, tools, permissions, workflows, confirmation, and human escalation.</p>
            <div class="aipeProofFlow" aria-label="Aloden Voice AI product flow"><span>Conversation</span><span>Intent</span><span>Context</span><span>System Action</span><span>Confirmation</span><span>Human Escalation</span></div>
          </div>
          <div class="aipeProofEvidence">
            <span>WHAT IT DEMONSTRATES</span>
            <div><b>Conversational UX</b><b>Context management</b><b>Tool use</b><b>System integration</b><b>Permissions</b><b>Human control</b></div>
          </div>
        </article>
      </div>

      <div class="aipeProofComparisonWrap">
        <div class="aipeProofComparisonLabel">AI PRODUCT ENGINEERING EVIDENCE</div>
        <div class="aipeProofComparisonScroller">
          <table class="aipeProofComparison">
            <thead><tr><th>Product</th><th>Intelligence</th><th>Product system around it</th></tr></thead>
            <tbody>
              <tr><th>Medlivo</th><td>Matching + decision support</td><td>Workflow + readiness + operations</td></tr>
              <tr><th>StartupFair</th><td>Discovery + evaluation workflows</td><td>Multi-role platform + governance</td></tr>
              <tr><th>Aloden Voice AI</th><td>Intent + agentic action</td><td>Systems + permissions + escalation</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="aipeProductProofFooter">
        <strong>Different products. Same standard: intelligence embedded inside a complete product system.</strong>
        <a class="textLink" href="built-by-aloden.html">See Everything We’ve Built →</a>
      </div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.aipeReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Final CTA</h2><p>The capability story is now complete. The final section should convert interest into a project conversation without repeating the full page.</p>';

  if (!document.querySelector('#aipe-section6-style')) {
    const style = document.createElement('style');
    style.id = 'aipe-section6-style';
    style.textContent = `
      .aipeProductProof{background:#fff}
      .aipeProductProofHead .lead{max-width:900px}
      .aipeProofStrips{display:grid;gap:12px;margin-top:28px}
      .aipeProofStrip{display:grid;grid-template-columns:190px minmax(0,1fr) 250px;gap:22px;align-items:stretch;border:1px solid #e1e4e9;border-radius:17px;background:#fff;padding:18px;min-width:0}
      .aipeProofStrip.startupfairProofStrip{background:linear-gradient(145deg,#fff,#fafbfc)}
      .aipeProofStrip.voiceProofStrip{background:#111318;border-color:#2a2e36;color:#fff}
      .aipeProofIdentity{display:flex;flex-direction:column;justify-content:center;gap:10px;border-right:1px solid #e3e6ea;padding-right:18px;min-width:0}
      .voiceProofStrip .aipeProofIdentity{border-color:#2f333c}
      .aipeProofIdentity img{max-width:118px;max-height:38px;object-fit:contain;object-position:left center}
      .aipeProofIdentity>span{font-family:'IBM Plex Mono',monospace;font-size:8px;line-height:1.45;letter-spacing:.08em;color:#7c8592}
      .voiceProofIdentity>span:last-child{color:#979faa}.voiceProofIdentity>strong{font-size:15px;letter-spacing:-.02em;color:#fff}.compactLockup{transform:scale(.82);transform-origin:left center;width:max-content}
      .aipeProofNarrative{min-width:0}.aipeProofNarrative h3{font-size:22px;line-height:1.12;letter-spacing:-.03em;margin:1px 0 8px}.aipeProofNarrative p{font-size:12px;line-height:1.58;color:var(--muted);margin:0}.voiceProofStrip .aipeProofNarrative p{color:#aeb5c0}
      .aipeProofFlow{display:flex;gap:5px;flex-wrap:wrap;margin-top:14px}.aipeProofFlow span{position:relative;border:1px solid #e0e4e9;border-radius:999px;background:#fbfcfe;padding:6px 8px;font-size:8.5px;line-height:1.25;color:#68717e}.aipeProofFlow span:not(:last-child):after{content:'→';margin-left:7px;color:#8d73ef}.voiceProofStrip .aipeProofFlow span{background:#171a20;border-color:#30343d;color:#b5bdc8}
      .aipeProofEvidence{display:flex;flex-direction:column;justify-content:center;border-left:1px solid #e3e6ea;padding-left:18px;min-width:0}.voiceProofStrip .aipeProofEvidence{border-color:#2f333c}.aipeProofEvidence>span{font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:.08em;color:var(--violet)}.voiceProofStrip .aipeProofEvidence>span{color:#ad98ff}.aipeProofEvidence>div{display:flex;gap:6px;flex-wrap:wrap;margin-top:9px}.aipeProofEvidence b{font-size:8.8px;line-height:1.3;font-weight:500;color:#65707c;border:1px solid #e0e4e9;border-radius:999px;background:#fbfcfe;padding:6px 8px}.voiceProofStrip .aipeProofEvidence b{background:#171a20;border-color:#30343d;color:#b4bbc5}
      .aipeProofComparisonWrap{margin-top:26px;border:1px solid #e1e4e9;border-radius:14px;background:#fff;overflow:hidden}.aipeProofComparisonLabel{padding:11px 13px;border-bottom:1px solid var(--line);background:#fbfcfd;font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em;color:var(--violet)}.aipeProofComparisonScroller{overflow-x:auto}.aipeProofComparison{width:100%;min-width:680px;border-collapse:collapse;text-align:left}.aipeProofComparison th,.aipeProofComparison td{padding:12px 13px;border-bottom:1px solid var(--line);font-size:11.5px;line-height:1.42}.aipeProofComparison thead th{font-weight:700;color:#252b34;background:#fff}.aipeProofComparison tbody th{font-weight:600;color:#323944;background:#fbfcfd}.aipeProofComparison td{color:#69727f}.aipeProofComparison tbody tr:last-child th,.aipeProofComparison tbody tr:last-child td{border-bottom:0}
      .aipeProductProofFooter{display:flex;justify-content:space-between;align-items:center;gap:22px;margin-top:22px;padding-top:17px;border-top:1px solid var(--line)}.aipeProductProofFooter strong{font-size:15px;line-height:1.45;letter-spacing:-.018em;color:#20242d;max-width:760px}.aipeProductProofFooter .textLink{font-size:12px;white-space:nowrap}
      @media(max-width:1050px){.aipeProofStrip{grid-template-columns:160px minmax(0,1fr)}.aipeProofEvidence{grid-column:1/-1;border-left:0;border-top:1px solid #e3e6ea;padding:14px 0 0}.voiceProofStrip .aipeProofEvidence{border-color:#2f333c}}
      @media(max-width:700px){.aipeProofStrip{grid-template-columns:1fr;padding:16px}.aipeProofIdentity{border-right:0;border-bottom:1px solid #e3e6ea;padding:0 0 14px}.voiceProofStrip .aipeProofIdentity{border-color:#2f333c}.aipeProductProofFooter{align-items:flex-start;flex-direction:column}.aipeProofNarrative h3{font-size:20px}}
    `;
    document.head.appendChild(style);
  }
})();
