// Voice AI Engineering content-review layer — Section 4 / production reality.
(() => {
  if (!document.querySelector('.voiceEngHero')) return;
  const next = document.querySelector('.voiceReviewNext');
  if (!next || document.querySelector('#production-reality')) return;

  const section = document.createElement('section');
  section.className = 'voiceReality section soft';
  section.id = 'production-reality';
  section.innerHTML = `
    <div class="container">
      <div class="voiceRealityHead">
        <div class="eyebrow">PRODUCTION REALITY</div>
        <h2 class="h2">Real conversations do not follow a script.</h2>
        <p class="lead">Voice systems operate while people interrupt, change their minds, speak unclearly, move through noisy environments, wait on slow systems, fail authentication, or ask for actions the AI should not complete. Production Voice AI has to handle those conditions without losing context, trust, or control.</p>
      </div>

      <div class="voiceConditionsSimulator" aria-label="Production conditions simulator for a voice AI conversation">
        <div class="voiceConditionsTop"><span>PRODUCTION CONDITIONS SIMULATOR</span><b>CONVERSATION + STATE + CONTROL</b></div>
        <div class="voiceConditionsFlow">
          <article><small>USER</small><b>“Move my appointment to Friday.”</b><span>Intent begins</span></article>
          <article class="eventCard"><small>INTERRUPTION</small><b>“Actually, make it Monday.”</b><span>Prior intent revised</span></article>
          <article><small>IDENTITY</small><b>Verification required</b><span>Access held</span></article>
          <article class="eventCard"><small>SLOW TOOL</small><b>Scheduling lookup delayed</b><span>State preserved</span></article>
          <article><small>RETRY</small><b>Availability returned</b><span>Safe retry succeeds</span></article>
          <article class="restrictedCard"><small>RESTRICTED ACTION</small><b>Human approval required</b><span>Escalation path opens</span></article>
          <article><small>HANDOFF</small><b>Context transferred</b><span>User does not start over</span></article>
        </div>
        <div class="voiceConditionStateGrid">
          <div><span>Conversation State</span><b>Current intent · corrections · confirmations</b></div>
          <div><span>System State</span><b>Tool status · verified outcome · retries</b></div>
          <div><span>Control Decision</span><b>Proceed · authenticate · confirm · escalate</b></div>
        </div>
        <div class="voiceConditionRails"><span>Latency</span><span>State</span><span>Permissions</span><span>Tool Reliability</span><span>Human Continuity</span></div>
      </div>

      <div class="voiceRealityGrid">
        <article class="voiceRealityCard">
          <div class="voiceRealityTop"><span>01</span><small>LATENCY &amp; CONVERSATIONAL PACING</small></div>
          <h3>A technically correct response can still feel broken if it arrives too late.</h3>
          <p>Voice interaction is highly sensitive to timing. Speech processing, reasoning, retrieval, tool calls, and synthesis all contribute to the delay the user experiences.</p>
          <div class="voiceRealityGoal"><span>Design goal</span><b>Respond naturally without acting prematurely.</b></div>
          <div class="voiceRealityAreas"><span>Streaming</span><span>Response budgeting</span><span>Partial results</span><span>Tool latency</span><span>Synthesis timing</span><span>Perceived latency</span></div>
        </article>

        <article class="voiceRealityCard">
          <div class="voiceRealityTop"><span>02</span><small>INTERRUPTIONS &amp; BARGE-IN</small></div>
          <h3>People do not wait politely for an AI to finish speaking.</h3>
          <p>Users interrupt, correct information halfway through a response, begin speaking before the system is finished, or change direction completely. The system must stop, capture the new turn, revise state, and continue from the right context.</p>
          <div class="voiceRealityExample"><b>AI:</b> “I found openings Friday at 10:30 and—”<br><b>User:</b> “Actually, make it Monday.”</div>
          <div class="voiceRealityAreas"><span>Barge-in</span><span>Cancellation</span><span>State revision</span><span>Turn ownership</span><span>Partial utterances</span></div>
        </article>

        <article class="voiceRealityCard">
          <div class="voiceRealityTop"><span>03</span><small>AMBIGUITY &amp; CORRECTION</small></div>
          <h3>Natural speech is incomplete by default.</h3>
          <p>“Move it to Friday.” “Use the other address.” “No, the second one.” “Actually, make that next week.” The system needs enough product context to resolve references—or ask a precise clarification when it does not.</p>
          <div class="voiceRealityGoal"><span>Principle</span><b>Clarify uncertainty rather than manufacture certainty.</b></div>
          <div class="voiceRealityAreas"><span>Reference resolution</span><span>Correction loops</span><span>Context confidence</span><span>Clarification</span><span>State reconciliation</span></div>
        </article>

        <article class="voiceRealityCard darkRealityCard">
          <div class="voiceRealityTop"><span>04</span><small>IDENTITY, PRIVACY &amp; PERMISSION</small></div>
          <h3>A voice is an interface—not proof of identity.</h3>
          <p>Before exposing sensitive information or completing meaningful actions, the product needs to know who the user is and what that user is authorized to access or change.</p>
          <div class="voiceDecisionPath"><span>Known + permitted → proceed</span><span>Additional verification → authenticate</span><span>Restricted → do not act</span></div>
          <div class="voiceRealityAreas"><span>Identity verification</span><span>Session trust</span><span>Authorization</span><span>Sensitive data</span><span>Consent</span><span>Audit context</span></div>
        </article>

        <article class="voiceRealityCard">
          <div class="voiceRealityTop"><span>05</span><small>SLOW, UNAVAILABLE OR FAILED SYSTEMS</small></div>
          <h3>The AI may be ready before the business system is.</h3>
          <p>APIs time out, scheduling systems respond slowly, CRMs reject updates, and downstream services return incomplete data. The voice product should never invent success because a tool call was attempted.</p>
          <div class="voiceFailureFlow"><span>Wait appropriately</span><span>Retry when safe</span><span>Explain status</span><span>Verify outcome</span><span>Recover / escalate</span></div>
          <div class="voiceRealityGoal"><span>Principle</span><b>A tool request is not a completed action.</b></div>
        </article>

        <article class="voiceRealityCard">
          <div class="voiceRealityTop"><span>06</span><small>HUMAN ESCALATION WITHOUT STARTING OVER</small></div>
          <h3>Handoff should preserve the work already done.</h3>
          <p>A human agent should receive the context required to continue the interaction rather than asking the user to repeat the entire conversation.</p>
          <div class="voiceHandoffContext"><span>Who the user is</span><span>What they are trying to do</span><span>Information gathered</span><span>What was confirmed</span><span>Tools attempted</span><span>Current system state</span><span>Reason for escalation</span></div>
        </article>
      </div>

      <div class="voiceDemoContrast">
        <div><span>DEMO CONDITIONS</span><b>Clear speech · One intent · Fast tools · Happy path · No sensitive action</b></div>
        <i>→</i>
        <div><span>PRODUCTION CONDITIONS</span><b>Interruptions · Corrections · Ambiguity · Authentication · System latency · Failures · Restricted actions · Human escalation</b></div>
      </div>

      <div class="voiceRealityClosing">A voice demo proves that the system can talk. Production engineering proves that it can handle what happens next.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.voiceReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Where Voice AI creates the most value</h2><p>Next we’ll show the product situations where voice is genuinely better than another interface—and where it is not.</p>';

  if (!document.querySelector('#voice-section4-style')) {
    const style = document.createElement('style');
    style.id = 'voice-section4-style';
    style.textContent = `
      .voiceReality{background:linear-gradient(180deg,#fafbfc,#f8f8fb)}
      .voiceRealityHead .lead{max-width:940px}
      .voiceConditionsSimulator{margin-top:28px;border:1px solid #2a2e36;border-radius:17px;background:#111318;color:#fff;overflow:hidden;box-shadow:0 16px 38px rgba(10,12,18,.07)}
      .voiceConditionsTop{display:flex;justify-content:space-between;gap:16px;padding:12px 14px;border-bottom:1px solid #2e323a;background:#15181e}.voiceConditionsTop span,.voiceConditionsTop b{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em}.voiceConditionsTop span{color:#a58aff}.voiceConditionsTop b{font-weight:500;color:#969eaa}
      .voiceConditionsFlow{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:6px;padding:15px}.voiceConditionsFlow article{position:relative;border:1px solid #30343d;border-radius:10px;background:#171a20;padding:10px;min-height:100px}.voiceConditionsFlow article.eventCard{background:#1b1727;border-color:#493e70}.voiceConditionsFlow article.restrictedCard{background:#21191d;border-color:#5a3d49}.voiceConditionsFlow article:not(:last-child):after{content:'→';position:absolute;right:-8px;top:50%;transform:translateY(-50%);color:#9c83f4;z-index:2}.voiceConditionsFlow small{font-family:'IBM Plex Mono',monospace;font-size:7.3px;line-height:1.35;color:#9aa2ad;letter-spacing:.05em}.voiceConditionsFlow b{display:block;font-size:9.8px;line-height:1.3;margin-top:7px;color:#f0f2f5}.voiceConditionsFlow span{display:block;font-size:8.2px;color:#aab2bd;margin-top:5px}
      .voiceConditionStateGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:0 15px 12px}.voiceConditionStateGrid div{border:1px solid #30343d;border-radius:10px;background:#171a20;padding:10px}.voiceConditionStateGrid span{display:block;font-family:'IBM Plex Mono',monospace;font-size:7.8px;color:#a58aff}.voiceConditionStateGrid b{display:block;font-size:9px;line-height:1.4;color:#b9c0ca;margin-top:4px;font-weight:500}
      .voiceConditionRails{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:#2a2e36;border-top:1px solid #2a2e36}.voiceConditionRails span{background:#12151b;text-align:center;padding:10px 7px;font-family:'IBM Plex Mono',monospace;font-size:8px;color:#b8c0ca}
      .voiceRealityGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:28px}.voiceRealityCard{border:1px solid #e0e3e8;border-radius:16px;background:#fff;padding:20px;min-width:0}.voiceRealityCard.darkRealityCard{background:#111318;border-color:#292d35;color:#fff}
      .voiceRealityTop{display:flex;justify-content:space-between;gap:14px;align-items:center}.voiceRealityTop>span{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--violet)}.voiceRealityTop small{font-family:'IBM Plex Mono',monospace;font-size:8.3px;letter-spacing:.07em;color:#7c8592;text-align:right}.darkRealityCard .voiceRealityTop>span{color:#a58aff}.darkRealityCard .voiceRealityTop small{color:#969eaa}
      .voiceRealityCard h3{font-size:clamp(21px,2vw,27px);line-height:1.1;letter-spacing:-.032em;margin:15px 0 9px}.voiceRealityCard>p{font-size:12.7px;line-height:1.62;color:var(--body);margin:0}.darkRealityCard>p{color:#aeb4bf}
      .voiceRealityGoal,.voiceRealityExample{margin-top:14px;border-left:2px solid var(--violet);background:#faf8ff;border-radius:0 9px 9px 0;padding:9px 10px}.voiceRealityGoal span{display:block;font-family:'IBM Plex Mono',monospace;font-size:8px;color:#6b56b0}.voiceRealityGoal b{display:block;font-size:10.7px;color:#5c5177;margin-top:3px}.voiceRealityExample{font-size:10px;line-height:1.55;color:#655f75}.darkRealityCard .voiceRealityGoal,.darkRealityCard .voiceRealityExample{background:#1b1727;border-color:#a58aff}.darkRealityCard .voiceRealityGoal span{color:#c0afff}.darkRealityCard .voiceRealityGoal b{color:#c9c0df}
      .voiceRealityAreas,.voiceHandoffContext,.voiceDecisionPath,.voiceFailureFlow{display:flex;gap:6px;flex-wrap:wrap;margin-top:13px}.voiceRealityAreas span,.voiceHandoffContext span,.voiceDecisionPath span,.voiceFailureFlow span{border:1px solid #e0e4e9;border-radius:999px;background:#fbfcfe;padding:6px 8px;font-size:8.8px;line-height:1.25;color:#69727f}.darkRealityCard .voiceRealityAreas span,.darkRealityCard .voiceDecisionPath span{background:#171a20;border-color:#30343d;color:#b4bbc5}
      .voiceDemoContrast{display:grid;grid-template-columns:1fr 44px 1fr;gap:10px;align-items:center;margin-top:28px;border:1px solid #e1e4e9;border-radius:14px;background:#fff;padding:16px}.voiceDemoContrast div{border:1px solid #e1e4e9;border-radius:11px;padding:12px;background:#fbfcfe}.voiceDemoContrast div:last-child{background:linear-gradient(145deg,#fff,#faf8ff);border-color:#ddd7f5}.voiceDemoContrast span{display:block;font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:.08em;color:var(--violet)}.voiceDemoContrast b{display:block;font-size:10.5px;line-height:1.5;color:#515a67;margin-top:5px;font-weight:500}.voiceDemoContrast i{text-align:center;font-style:normal;color:#8d73ef}
      .voiceRealityClosing{margin-top:23px;padding-top:17px;border-top:1px solid #dfe2e7;font-size:16px;font-weight:700;letter-spacing:-.018em;color:#20242d}
      @media(max-width:1100px){.voiceConditionsFlow{grid-template-columns:repeat(4,1fr)}.voiceConditionsFlow article:after{display:none}}
      @media(max-width:850px){.voiceRealityGrid{grid-template-columns:1fr}.voiceConditionStateGrid{grid-template-columns:1fr}.voiceConditionRails{grid-template-columns:repeat(3,1fr)}}
      @media(max-width:640px){.voiceConditionsTop{align-items:flex-start;flex-direction:column}.voiceConditionsFlow{grid-template-columns:repeat(2,1fr)}.voiceConditionRails{grid-template-columns:repeat(2,1fr)}.voiceRealityCard{padding:17px}.voiceRealityTop{align-items:flex-start;flex-direction:column;gap:7px}.voiceRealityTop small{text-align:left}.voiceDemoContrast{grid-template-columns:1fr}.voiceDemoContrast i{transform:rotate(90deg)}.voiceRealityClosing{font-size:15px}}
    `;
    document.head.appendChild(style);
  }
})();
