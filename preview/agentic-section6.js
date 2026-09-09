// Intelligent Workflow & Agentic Systems content-review layer — Section 6 / product proof.
(() => {
  if (!document.querySelector('.agenticHero')) return;
  const next = document.querySelector('.agenticReviewNext');
  if (!next || document.querySelector('#agentic-product-proof')) return;

  const section = document.createElement('section');
  section.className = 'agenticProductProof section';
  section.id = 'agentic-product-proof';
  section.innerHTML = `
    <div class="container">
      <div class="agenticProductProofHead">
        <div class="eyebrow">PRODUCT PROOF</div>
        <h2 class="h2">Different products. The same workflow discipline behind dependable agents.</h2>
        <p class="lead">Agentic capability becomes dependable when it sits on top of durable product state, clear tool boundaries, permissions, checkpoints, verification, exceptions, and human ownership. Aloden’s products demonstrate those foundations in different forms—from long-running healthcare workflows and multi-role platform orchestration to real-time tool-connected Voice AI.</p>
      </div>

      <div class="agenticProofStrips">
        <article class="agenticProofStrip medlivoAgenticProof">
          <div class="agenticProofIdentity">
            <img src="assets/medlivo-logo.webp" alt="Medlivo">
            <span>LONG-RUNNING HEALTHCARE WORKFLOW</span>
          </div>
          <div class="agenticProofNarrative">
            <h3>Move a clinician from opportunity to operational readiness without losing the state in between.</h3>
            <p>The workflow can persist across days or weeks while documents arrive, requirements change, credentialing progresses, exceptions appear, and people make readiness decisions. Matching intelligence is one decision point inside a broader operational system.</p>
            <div class="agenticProofFlow" aria-label="Medlivo workflow proof"><span>Need / Referral</span><span>Clinician Context</span><span>Match / Human Review</span><span>Clinician Passport</span><span>Requirements Gap</span><span>Credentialing / Verification</span><span>Approval / Exception</span><span>Ready</span><span>Scheduling / Visit</span></div>
          </div>
          <div class="agenticProofEvidence">
            <span>WORKFLOW EVIDENCE</span>
            <div><b>Durable state</b><b>Next-step orchestration</b><b>Exception routing</b><b>Verification</b><b>Human approval</b><b>Operational readiness</b></div>
          </div>
        </article>

        <article class="agenticProofStrip startupfairAgenticProof">
          <div class="agenticProofIdentity">
            <img src="assets/startupfair-logo.webp" alt="StartupFair">
            <span>MULTI-ROLE PLATFORM ORCHESTRATION</span>
          </div>
          <div class="agenticProofNarrative">
            <h3>Coordinate one lifecycle across organizations, builders, judges, mentors, and admins.</h3>
            <p>The platform manages multiple roles, permissions, event-driven transitions, checkpoints, evaluation state, deadlines, governance, and human decision ownership across one connected lifecycle.</p>
            <div class="agenticProofFlow" aria-label="StartupFair workflow proof"><span>Challenge</span><span>Discover / Apply</span><span>Team / Build</span><span>Submit</span><span>Evaluation Readiness</span><span>Judge Scoring</span><span>Selection / Admin Control</span><span>Opportunity</span></div>
          </div>
          <div class="agenticProofEvidence">
            <span>WORKFLOW EVIDENCE</span>
            <div><b>Multi-role workflow</b><b>Lifecycle state</b><b>Permissions</b><b>Checkpoints</b><b>Evaluation orchestration</b><b>Human governance</b></div>
          </div>
        </article>

        <article class="agenticProofStrip voiceAgenticProof">
          <div class="agenticProofIdentity voiceAgenticIdentity">
            <span class="alodenLockup compactLockup"><span class="alodenMark"><i></i><i></i><i></i><i></i></span><span class="alodenWord">aloden</span></span>
            <strong>Voice AI</strong>
            <span>DYNAMIC, TOOL-CONNECTED ACTION</span>
          </div>
          <div class="agenticProofNarrative">
            <h3>Choose the next valid action from conversation and system state.</h3>
            <p>The next step can change based on what the user says, what connected systems return, what permissions allow, and whether the resulting state can be verified. This is the most direct example of agentic reasoning inside a controlled product workflow.</p>
            <div class="agenticProofFlow" aria-label="Aloden Voice AI agentic workflow proof"><span>Conversation</span><span>Intent &amp; Context</span><span>Current State</span><span>Choose Next Step</span><span>Permission Check</span><span>Tool / System</span><span>Verify Result</span><span>Continue / Escalate</span></div>
          </div>
          <div class="agenticProofEvidence">
            <span>WORKFLOW EVIDENCE</span>
            <div><b>Dynamic next-step selection</b><b>Tool use</b><b>Context</b><b>Permissions</b><b>Verified action</b><b>Exception recovery</b><b>Human escalation</b></div>
          </div>
        </article>
      </div>

      <div class="agenticProofComparisonWrap">
        <div class="agenticProofComparisonLabel">DEPENDABLE AGENTIC FOUNDATIONS</div>
        <div class="agenticProofComparisonScroller">
          <table class="agenticProofComparison">
            <thead><tr><th>Product</th><th>Workflow evidence</th><th>Human control</th></tr></thead>
            <tbody>
              <tr><th>Medlivo</th><td>Durable state · readiness · exceptions · verification</td><td>Recruiter / credentialing / clinical review</td></tr>
              <tr><th>StartupFair</th><td>Multi-role lifecycle · checkpoints · evaluation state</td><td>Judges · organizations · admins</td></tr>
              <tr><th>Aloden Voice AI</th><td>Dynamic next step · tools · verification · recovery</td><td>Confirmation · permission · escalation</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="agenticProductProofFooter">
        <strong>Agentic intelligence works best when the product already knows what state it is in, what may happen next, and who remains accountable.</strong>
        <a class="textLink" href="built-by-aloden.html">See Everything We’ve Built →</a>
      </div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.agenticReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Final CTA</h2><p>The capability story is now complete. The final section should convert interest into a project conversation without repeating the engineering detail above.</p>';

  if (!document.querySelector('#agentic-section6-style')) {
    const style = document.createElement('style');
    style.id = 'agentic-section6-style';
    style.textContent = `
      .agenticProductProof{background:#fff}
      .agenticProductProofHead .lead{max-width:930px}
      .agenticProofStrips{display:grid;gap:12px;margin-top:28px}
      .agenticProofStrip{display:grid;grid-template-columns:190px minmax(0,1fr) 255px;gap:22px;align-items:stretch;border:1px solid #e1e4e9;border-radius:17px;background:#fff;padding:18px;min-width:0}
      .startupfairAgenticProof{background:linear-gradient(145deg,#fff,#fafbfc)}
      .voiceAgenticProof{background:#111318;border-color:#292d35;color:#fff}
      .agenticProofIdentity{display:flex;flex-direction:column;justify-content:center;gap:10px;border-right:1px solid #e3e6ea;padding-right:18px;min-width:0}
      .voiceAgenticProof .agenticProofIdentity{border-color:#2f333c}.agenticProofIdentity img{max-width:118px;max-height:38px;object-fit:contain;object-position:left center}.agenticProofIdentity>span{font-family:'IBM Plex Mono',monospace;font-size:8px;line-height:1.45;letter-spacing:.08em;color:#7c8592}.voiceAgenticIdentity>span:last-child{color:#969eaa}.voiceAgenticIdentity>strong{font-size:15px;letter-spacing:-.02em;color:#fff}.compactLockup{transform:scale(.82);transform-origin:left center;width:max-content}
      .agenticProofNarrative{min-width:0}.agenticProofNarrative h3{font-size:22px;line-height:1.12;letter-spacing:-.03em;margin:1px 0 8px}.agenticProofNarrative p{font-size:12px;line-height:1.58;color:var(--muted);margin:0}.voiceAgenticProof .agenticProofNarrative p{color:#aeb5c0}
      .agenticProofFlow{display:flex;gap:5px;flex-wrap:wrap;margin-top:14px}.agenticProofFlow span{border:1px solid #e0e4e9;border-radius:999px;background:#fbfcfe;padding:6px 8px;font-size:8.4px;line-height:1.25;color:#68717e}.agenticProofFlow span:not(:last-child):after{content:'→';margin-left:7px;color:#8d73ef}.voiceAgenticProof .agenticProofFlow span{background:#171a20;border-color:#30343d;color:#b5bdc8}
      .agenticProofEvidence{display:flex;flex-direction:column;justify-content:center;border-left:1px solid #e3e6ea;padding-left:18px;min-width:0}.voiceAgenticProof .agenticProofEvidence{border-color:#2f333c}.agenticProofEvidence>span{font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:.08em;color:var(--violet)}.voiceAgenticProof .agenticProofEvidence>span{color:#ad98ff}.agenticProofEvidence>div{display:flex;gap:6px;flex-wrap:wrap;margin-top:9px}.agenticProofEvidence b{font-size:8.8px;line-height:1.3;font-weight:500;color:#65707c;border:1px solid #e0e4e9;border-radius:999px;background:#fbfcfe;padding:6px 8px}.voiceAgenticProof .agenticProofEvidence b{background:#171a20;border-color:#30343d;color:#b4bbc5}
      .agenticProofComparisonWrap{margin-top:26px;border:1px solid #e1e4e9;border-radius:14px;background:#fff;overflow:hidden}.agenticProofComparisonLabel{padding:11px 13px;border-bottom:1px solid var(--line);background:#fbfcfd;font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em;color:var(--violet)}.agenticProofComparisonScroller{overflow-x:auto}.agenticProofComparison{width:100%;min-width:720px;border-collapse:collapse;text-align:left}.agenticProofComparison th,.agenticProofComparison td{padding:12px 13px;border-bottom:1px solid var(--line);font-size:11.5px;line-height:1.42}.agenticProofComparison thead th{font-weight:700;color:#252b34;background:#fff}.agenticProofComparison tbody th{font-weight:600;color:#323944;background:#fbfcfd}.agenticProofComparison td{color:#69727f}.agenticProofComparison tbody tr:last-child th,.agenticProofComparison tbody tr:last-child td{border-bottom:0}
      .agenticProductProofFooter{display:flex;justify-content:space-between;align-items:center;gap:22px;margin-top:22px;padding-top:17px;border-top:1px solid var(--line)}.agenticProductProofFooter strong{font-size:15px;line-height:1.45;letter-spacing:-.018em;color:#20242d;max-width:820px}.agenticProductProofFooter .textLink{font-size:12px;white-space:nowrap}
      @media(max-width:1060px){.agenticProofStrip{grid-template-columns:160px minmax(0,1fr)}.agenticProofEvidence{grid-column:1/-1;border-left:0;border-top:1px solid #e3e6ea;padding:14px 0 0}.voiceAgenticProof .agenticProofEvidence{border-color:#2f333c}}
      @media(max-width:700px){.agenticProofStrip{grid-template-columns:1fr;padding:16px}.agenticProofIdentity{border-right:0;border-bottom:1px solid #e3e6ea;padding:0 0 14px}.voiceAgenticProof .agenticProofIdentity{border-color:#2f333c}.agenticProductProofFooter{align-items:flex-start;flex-direction:column}.agenticProofNarrative h3{font-size:20px}}
    `;
    document.head.appendChild(style);
  }
})();
