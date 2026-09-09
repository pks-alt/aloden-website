// Voice AI Engineering content-review layer — Section 6 / product proof.
(() => {
  if (!document.querySelector('.voiceEngHero')) return;
  const next = document.querySelector('.voiceReviewNext');
  if (!next || document.querySelector('#voice-product-proof')) return;

  const section = document.createElement('section');
  section.className = 'voiceProductProof section';
  section.id = 'voice-product-proof';
  section.innerHTML = `
    <div class="container">
      <div class="voiceProductProofHead">
        <div class="eyebrow">PRODUCT PROOF</div>
        <h2 class="h2">One conversation. One connected product system.</h2>
        <p class="lead">Aloden Voice AI demonstrates what Voice AI Engineering looks like when conversation, context, permissions, tools, system state, verification, and human escalation are designed as one product rather than assembled as separate technologies.</p>
      </div>

      <div class="voiceRuntimeConsole" aria-label="Aloden Voice AI runtime execution from conversation to verified appointment update">
        <div class="voiceRuntimeTop">
          <div><span class="runtimeDot"></span><b>Aloden Voice AI</b></div>
          <span>LIVE PRODUCT RUNTIME</span>
        </div>
        <div class="voiceRuntimeHeader"><span>Live Conversation</span><span>Product State</span><span>Connected System</span><span>Control</span></div>
        <div class="voiceRuntimeRows">
          <div><p>“Can you move my appointment to Friday afternoon?”</p><p><b>Intent:</b> Reschedule appointment</p><p>—</p><p>Identity context available</p></div>
          <div><p>“Friday afternoon.”</p><p><b>Context:</b> Current appointment + time preference</p><p>Scheduling system → read availability</p><p>Read permitted</p></div>
          <div><p>“I found 1:00, 2:30, and 4:00 PM.”</p><p><b>State:</b> Valid options returned</p><p>Friday availability verified</p><p>Explicit choice required</p></div>
          <div><p>“2:30 works.”</p><p><b>State:</b> User choice confirmed</p><p>Update appointment → Friday 2:30 PM</p><p>Write permitted after confirmation</p></div>
          <div class="runtimeVerified"><p>“Your appointment is now scheduled for Friday at 2:30 PM.”</p><p><b>State:</b> Completed</p><p>System-of-record confirms new appointment state</p><p><strong>Verified outcome</strong></p></div>
        </div>
        <div class="voiceRuntimeRails"><span>Real-Time Voice</span><span>Conversation State</span><span>Permissions</span><span>Tool State</span><span>Verification</span><span>Observability</span></div>
      </div>

      <div class="voiceRuntimeException">
        <div><span>EXCEPTION PATH</span><h3>Do not invent success when the workflow cannot complete.</h3></div>
        <div class="voiceRuntimeExceptionFlow"><span>Restricted / ambiguous / tool failure</span><i>→</i><span>Preserve conversation + system context</span><i>→</i><span>Recover or escalate intelligently</span></div>
      </div>

      <div class="voiceProofCapabilities">
        <article><span>01</span><h3>Real-Time Conversation</h3><p>Turn-taking, interruption, latency, and conversational repair are part of the product behavior.</p></article>
        <article><span>02</span><h3>Context That Persists</h3><p>Intent, entities, prior turns, choices, and workflow state stay connected throughout the interaction.</p></article>
        <article><span>03</span><h3>System-Connected Action</h3><p>Voice becomes an interface to APIs, tools, records, scheduling, and business workflows.</p></article>
        <article class="voiceProofDark"><span>04</span><h3>Permission Before Action</h3><p>Authentication, authorization, confirmation, and restricted actions remain explicit.</p></article>
        <article><span>05</span><h3>Outcome Verification</h3><p>A requested action is not complete until the underlying system confirms the resulting state.</p></article>
        <article><span>06</span><h3>Human Continuity</h3><p>Escalation carries conversation context, attempted actions, current system state, and the reason for handoff.</p></article>
      </div>

      <div class="voiceProofCapabilityLine">Conversational UX · Real-Time Voice · Context &amp; State · Tool Use · System Integration · Permissions · Verification · Human Escalation</div>
      <div class="voiceProofFooter"><strong>The voice is what the user hears. The product system is what makes the outcome trustworthy.</strong><a class="textLink" href="built-by-aloden.html#voice-ai-proof">See Aloden Voice AI →</a></div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.voiceReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Final CTA</h2><p>The Voice AI Engineering story is now complete. The final section should turn the page into a clear project conversation without repeating the technical sections above.</p>';

  if (!document.querySelector('#voice-section6-style')) {
    const style = document.createElement('style');
    style.id = 'voice-section6-style';
    style.textContent = `
      .voiceProductProof{background:#fff}
      .voiceProductProofHead .lead{max-width:920px}
      .voiceRuntimeConsole{margin-top:28px;border:1px solid #292d35;border-radius:17px;background:#111318;color:#fff;overflow:hidden;box-shadow:0 18px 42px rgba(13,16,25,.09)}
      .voiceRuntimeTop{display:flex;align-items:center;justify-content:space-between;gap:15px;padding:12px 14px;border-bottom:1px solid #2d3139;background:#14171d}.voiceRuntimeTop>div{display:flex;align-items:center;gap:8px}.voiceRuntimeTop .runtimeDot{width:8px;height:8px;border-radius:50%;background:#a58aff;box-shadow:0 0 0 4px rgba(165,138,255,.12)}.voiceRuntimeTop b{font-size:11.5px}.voiceRuntimeTop>span{font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:.08em;color:#979faa}
      .voiceRuntimeHeader{display:grid;grid-template-columns:1.2fr 1fr 1.15fr .82fr;gap:1px;background:#2c3038;border-bottom:1px solid #30343c}.voiceRuntimeHeader span{padding:9px 10px;background:#171a20;font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:.06em;color:#aeb6c1}
      .voiceRuntimeRows{display:grid;gap:1px;background:#2b2f37}.voiceRuntimeRows>div{display:grid;grid-template-columns:1.2fr 1fr 1.15fr .82fr;gap:1px}.voiceRuntimeRows p{margin:0;padding:11px 10px;background:#12151b;font-size:9.8px;line-height:1.48;color:#b2bac5;min-width:0}.voiceRuntimeRows p:first-child{color:#e5e8ed}.voiceRuntimeRows p b{color:#c3b4ff;font-weight:500}.voiceRuntimeRows p strong{color:#c7b9ff}.voiceRuntimeRows .runtimeVerified p{background:#171321}.voiceRuntimeRows .runtimeVerified p:first-child{color:#fff}
      .voiceRuntimeRails{display:grid;grid-template-columns:repeat(6,1fr);gap:1px;background:#2d3139;border-top:1px solid #2d3139}.voiceRuntimeRails span{padding:10px 6px;background:#15181e;text-align:center;font-family:'IBM Plex Mono',monospace;font-size:7.8px;line-height:1.35;color:#b7add5}
      .voiceRuntimeException{display:grid;grid-template-columns:.85fr 1.15fr;gap:22px;margin-top:18px;border:1px solid #e0e3e8;border-radius:14px;background:#fafbfc;padding:16px}.voiceRuntimeException>div:first-child>span{font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:.08em;color:var(--violet)}.voiceRuntimeException h3{font-size:18px;line-height:1.2;letter-spacing:-.025em;margin:7px 0 0}.voiceRuntimeExceptionFlow{display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap}.voiceRuntimeExceptionFlow span{border:1px solid #e0e4e9;border-radius:999px;background:#fff;padding:7px 9px;font-size:9px;line-height:1.35;color:#66707c}.voiceRuntimeExceptionFlow i{font-style:normal;color:var(--violet)}
      .voiceProofCapabilities{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:26px}.voiceProofCapabilities article{border:1px solid #e0e3e8;border-radius:14px;background:#fff;padding:16px}.voiceProofCapabilities article.voiceProofDark{background:#111318;border-color:#292d35;color:#fff}.voiceProofCapabilities article>span{font-family:'IBM Plex Mono',monospace;font-size:8.8px;color:var(--violet)}.voiceProofDark>span{color:#a58aff!important}.voiceProofCapabilities h3{font-size:17px;line-height:1.18;letter-spacing:-.025em;margin:8px 0 5px}.voiceProofCapabilities p{font-size:10.8px;line-height:1.55;color:#707986;margin:0}.voiceProofDark p{color:#aeb5c0}
      .voiceProofCapabilityLine{margin-top:20px;border:1px solid #e0e4e9;border-radius:11px;background:linear-gradient(145deg,#fff,#faf8ff);padding:11px 13px;font-family:'IBM Plex Mono',monospace;font-size:8.8px;line-height:1.5;color:#675a8f;text-align:center}
      .voiceProofFooter{display:flex;align-items:center;justify-content:space-between;gap:22px;margin-top:20px;padding-top:16px;border-top:1px solid var(--line)}.voiceProofFooter strong{font-size:15px;line-height:1.45;letter-spacing:-.018em;color:#20242d;max-width:780px}.voiceProofFooter .textLink{font-size:12px;white-space:nowrap}
      @media(max-width:900px){.voiceRuntimeException{grid-template-columns:1fr}.voiceProofCapabilities{grid-template-columns:repeat(2,1fr)}}
      @media(max-width:760px){.voiceRuntimeHeader{display:none}.voiceRuntimeRows>div{grid-template-columns:1fr}.voiceRuntimeRows p{border-bottom:1px solid #292d35}.voiceRuntimeRows p:nth-child(1):before{content:'Conversation · ';color:#8d78de;font-family:'IBM Plex Mono',monospace;font-size:7.6px}.voiceRuntimeRows p:nth-child(2):before{content:'Product state · ';color:#8d78de;font-family:'IBM Plex Mono',monospace;font-size:7.6px}.voiceRuntimeRows p:nth-child(3):before{content:'System · ';color:#8d78de;font-family:'IBM Plex Mono',monospace;font-size:7.6px}.voiceRuntimeRows p:nth-child(4):before{content:'Control · ';color:#8d78de;font-family:'IBM Plex Mono',monospace;font-size:7.6px}.voiceRuntimeRails{grid-template-columns:repeat(2,1fr)}.voiceProofCapabilities{grid-template-columns:1fr}.voiceProofFooter{align-items:flex-start;flex-direction:column}.voiceRuntimeTop{align-items:flex-start;flex-direction:column}}
    `;
    document.head.appendChild(style);
  }
})();
