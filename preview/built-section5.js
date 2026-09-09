// Built by Aloden content-review layer — Section 5 / Aloden Voice AI product proof.
(() => {
  if (!document.querySelector('.builtHeroGrid')) return;
  const startupSection = [...document.querySelectorAll('section.section')].find(sec => sec.querySelector('.startupfairSectionHead'));
  if (!startupSection || document.querySelector('#voice-ai-proof')) return;

  const voiceSection = document.createElement('section');
  voiceSection.className = 'section voiceProofSection';
  voiceSection.id = 'voice-ai-proof';
  voiceSection.innerHTML = `
    <div class="container">
      <div class="voiceProofHead">
        <div>
          <div class="eyebrow">PRODUCT PROOF</div>
          <div class="voiceProofBrand"><span class="alodenMark"><i></i><i></i><i></i><i></i></span><span>Aloden Voice AI</span></div>
          <h2 class="h2">From conversation to completed action.</h2>
          <p class="voiceProofSupport">Voice AI designed around real workflows, systems, and human judgment.</p>
        </div>
        <a class="textLink voiceProofLink" href="#">Explore Aloden Voice AI →</a>
      </div>

      <div class="voiceProofIntroGrid">
        <div>
          <p class="voiceProofBody">Aloden Voice AI turns natural conversation into structured intent, connects that intent to the right systems and workflows, completes permitted actions, confirms the outcome, and brings a person into the process when judgment or approval is required.</p>
          <div class="voiceProofWorkflow">Conversation → Intent → Context → System Action → Confirmation → Human Escalation</div>
          <div class="voiceProofSignals"><span>Live voice</span><span>Tool use</span><span>Permissions</span><span>Human review</span></div>
        </div>

        <div class="voiceSystemUi" aria-label="Conceptual Aloden Voice AI workflow from conversation through system action and human escalation">
          <div class="voiceSystemTop">
            <div class="voiceLive"><span class="voicePulse"></span><b>LIVE CONVERSATION</b></div>
            <span class="voiceSession">SESSION ACTIVE</span>
          </div>
          <div class="voiceSystemBody">
            <div class="voiceConversationPanel">
              <span class="voicePanelLabel">CONVERSATION</span>
              <div class="voiceWaveform"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
              <div class="voiceUserBubble">Can you move my appointment to Friday afternoon?</div>
              <div class="voiceAiBubble">I can check Friday afternoon availability and update it if you confirm.</div>
            </div>

            <div class="voiceIntelligenceGrid">
              <div class="voiceIntentPanel">
                <span class="voicePanelLabel">INTENT &amp; CONTEXT</span>
                <div class="voiceKv"><span>Intent</span><b>Reschedule appointment</b></div>
                <div class="voiceKv"><span>Preference</span><b>Friday afternoon</b></div>
                <div class="voiceKv"><span>Context</span><b>Patient + appointment + availability</b></div>
              </div>
              <div class="voiceSystemsPanel">
                <span class="voicePanelLabel">CONNECTED SYSTEMS</span>
                <div class="voiceSystems"><span>Calendar</span><span>Scheduling workflow</span><span>Patient record</span></div>
              </div>
            </div>

            <div class="voiceActionPanel">
              <div>
                <span class="voicePanelLabel">ACTION LAYER</span>
                <b>Friday options identified → appointment updated → confirmation prepared</b>
              </div>
              <span class="voiceActionStatus">PERMITTED ACTION</span>
            </div>

            <div class="voiceGuardrailPanel">
              <div><span class="voicePanelLabel">GUARDRAIL</span><b>Restricted, ambiguous, or judgment-based action?</b></div>
              <div class="voiceEscalation">Human review required → Route with full conversation context</div>
            </div>
          </div>
        </div>
      </div>

      <div class="voiceProofGrid">
        <article class="voiceProof"><span class="num">01</span><h3>Conversational Understanding</h3><strong>Understand what the person is trying to accomplish.</strong><p>Combine speech, intent, context, and conversation state so the system can move beyond transcription and understand the requested outcome.</p></article>
        <article class="voiceProof"><span class="num">02</span><h3>System-Connected Action</h3><strong>Conversation becomes useful when it can do something.</strong><p>Connect voice AI to APIs, business systems, workflows, tools, and permissions so approved actions can be completed rather than merely suggested.</p></article>
        <article class="voiceProof"><span class="num">03</span><h3>Human Control &amp; Guardrails</h3><strong>Know when the AI should stop and involve a person.</strong><p>Design permissions, confirmation steps, escalation paths, audit context, and human review around actions where automation should not operate independently.</p></article>
      </div>

      <div class="voiceCapabilitiesLine">Conversational UX · Voice AI · Agentic Workflows · System Integration · Tool Use · Guardrails · Human Escalation</div>
    </div>`;

  startupSection.insertAdjacentElement('afterend', voiceSection);

  const style = document.createElement('style');
  style.id = 'built-section5-review-style';
  style.textContent = `
    .voiceProofSection{background:linear-gradient(180deg,#111218,#0b0d12);color:#fff;border-bottom:0}
    .voiceProofSection .eyebrow{color:#a58aff}
    .voiceProofHead{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:24px}
    .voiceProofBrand{display:flex;align-items:center;gap:10px;margin:13px 0 12px;font-size:19px;font-weight:700;letter-spacing:-.025em}.voiceProofBrand .alodenMark{grid-template-columns:8px 12px;grid-template-rows:8px 8px}.voiceProofBrand .alodenMark i{background:#fff}.voiceProofBrand .alodenMark i:nth-child(2){background:#9a7cff}
    .voiceProofHead .h2{max-width:780px;margin-bottom:0;color:#fff}.voiceProofSupport{font-size:18px;line-height:1.38;font-weight:600;letter-spacing:-.022em;color:#d7d9e0;margin:11px 0 0;max-width:690px}.voiceProofLink{color:#b39cff!important;margin-bottom:4px}
    .voiceProofIntroGrid{display:grid;grid-template-columns:.78fr 1.22fr;gap:34px;align-items:start}.voiceProofBody{font-size:15px;line-height:1.66;color:#aeb4bf;margin:0;max-width:560px}.voiceProofWorkflow{margin-top:20px;padding:14px 15px;border:1px solid #2d3140;border-radius:11px;background:#151821;font-family:'IBM Plex Mono',monospace;font-size:9.5px;line-height:1.65;color:#b39cff}.voiceProofSignals{display:flex;gap:7px;flex-wrap:wrap;margin-top:12px}.voiceProofSignals span{border:1px solid #30343d;border-radius:999px;padding:6px 9px;font-size:9.5px;color:#aab1bc;background:#11141a}
    .voiceSystemUi{border:1px solid #2b2f38;border-radius:17px;background:#0f1116;box-shadow:0 18px 46px rgba(0,0,0,.2);overflow:hidden}.voiceSystemTop{height:44px;border-bottom:1px solid #282c34;background:#11141a;display:flex;align-items:center;padding:0 13px;gap:10px}.voiceLive{display:flex;align-items:center;gap:7px}.voiceLive b{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.07em;color:#dfe2e7}.voicePulse{width:8px;height:8px;border-radius:50%;background:#9a7cff;box-shadow:0 0 0 4px rgba(154,124,255,.11)}.voiceSession{margin-left:auto;border:1px solid #383244;background:#19151f;color:#bba9ff;border-radius:999px;padding:4px 7px;font-family:'IBM Plex Mono',monospace;font-size:7.8px;letter-spacing:.06em}
    .voiceSystemBody{padding:14px}.voiceConversationPanel,.voiceIntentPanel,.voiceSystemsPanel,.voiceActionPanel,.voiceGuardrailPanel{border:1px solid #292d35;border-radius:11px;background:#14171d}.voiceConversationPanel{padding:12px}.voicePanelLabel{display:block;font-family:'IBM Plex Mono',monospace;font-size:7.8px;letter-spacing:.09em;color:#8f97a4}.voiceWaveform{height:35px;display:flex;align-items:center;gap:4px;margin:8px 0 10px}.voiceWaveform i{width:2px;border-radius:2px;background:#9a7cff;opacity:.9}.voiceWaveform i:nth-child(1){height:12px}.voiceWaveform i:nth-child(2){height:23px}.voiceWaveform i:nth-child(3){height:31px}.voiceWaveform i:nth-child(4){height:17px}.voiceWaveform i:nth-child(5){height:28px}.voiceWaveform i:nth-child(6){height:34px}.voiceWaveform i:nth-child(7){height:20px}.voiceWaveform i:nth-child(8){height:27px}.voiceWaveform i:nth-child(9){height:15px}.voiceWaveform i:nth-child(10){height:30px}.voiceWaveform i:nth-child(11){height:21px}.voiceWaveform i:nth-child(12){height:11px}.voiceUserBubble{max-width:84%;background:#fff;color:#11151b;border-radius:9px 9px 9px 3px;padding:8px 9px;font-size:9.5px;line-height:1.45}.voiceAiBubble{max-width:88%;margin:7px 0 0 auto;background:#1d2028;color:#d9dde4;border:1px solid #30343e;border-radius:9px 9px 3px 9px;padding:8px 9px;font-size:9.5px;line-height:1.45}
    .voiceIntelligenceGrid{display:grid;grid-template-columns:1.15fr .85fr;gap:8px;margin-top:8px}.voiceIntentPanel,.voiceSystemsPanel{padding:11px}.voiceKv{display:grid;grid-template-columns:74px 1fr;gap:8px;padding:7px 0;border-bottom:1px solid #252932}.voiceKv:last-child{border-bottom:0}.voiceKv span{font-size:8.5px;color:#858e9a}.voiceKv b{font-size:9.5px;color:#e0e3e8;font-weight:500}.voiceSystems{display:grid;gap:6px;margin-top:9px}.voiceSystems span{border:1px solid #30343d;border-radius:8px;padding:8px;font-size:9px;color:#c8cdd5;background:#171a20}
    .voiceActionPanel{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px;margin-top:8px}.voiceActionPanel b{display:block;font-size:9.5px;line-height:1.45;color:#e1e4e8;margin-top:5px}.voiceActionStatus{white-space:nowrap;border-radius:999px;border:1px solid #3d3562;background:#1c1830;color:#b7a2ff;padding:5px 7px;font-family:'IBM Plex Mono',monospace;font-size:7.5px;letter-spacing:.05em}.voiceGuardrailPanel{display:grid;grid-template-columns:.92fr 1.08fr;gap:10px;padding:11px;margin-top:8px;border-color:#423249;background:#18131b}.voiceGuardrailPanel b{display:block;font-size:9.5px;color:#e6dce8;margin-top:5px}.voiceEscalation{border-left:2px solid #a36aa9;padding-left:10px;font-size:9px;line-height:1.5;color:#d1b9d6;align-self:center}
    .voiceProofGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:28px}.voiceProof{border-top:1px solid #292d35;padding-top:17px}.voiceProof .num{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:#a58aff}.voiceProof h3{font-size:17px;line-height:1.2;margin:10px 0 5px;color:#fff}.voiceProof strong{display:block;font-size:12.5px;line-height:1.45;color:#d7dbe2;margin-bottom:6px}.voiceProof p{font-size:12px;line-height:1.55;color:#929aa6;margin:0}.voiceCapabilitiesLine{margin-top:24px;padding-top:16px;border-top:1px solid #292d35;font-family:'IBM Plex Mono',monospace;font-size:9.5px;line-height:1.6;color:#ad98ff}
    @media(max-width:980px){.voiceProofIntroGrid{grid-template-columns:1fr}.voiceSystemUi{max-width:800px}.voiceProofGrid{grid-template-columns:1fr}}
    @media(max-width:640px){.voiceProofHead{align-items:flex-start;flex-direction:column}.voiceIntelligenceGrid,.voiceGuardrailPanel{grid-template-columns:1fr}.voiceActionPanel{align-items:flex-start;flex-direction:column}.voiceKv{grid-template-columns:1fr;gap:2px}}
  `;
  document.head.appendChild(style);
})();
