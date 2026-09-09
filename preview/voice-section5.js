// Voice AI Engineering content-review layer — Section 5 / where voice earns its place.
(() => {
  if (!document.querySelector('.voiceEngHero')) return;
  const next = document.querySelector('.voiceReviewNext');
  if (!next || document.querySelector('#where-voice-earns-its-place')) return;

  const section = document.createElement('section');
  section.className = 'voiceValue section soft';
  section.id = 'where-voice-earns-its-place';
  section.innerHTML = `
    <div class="container">
      <div class="voiceValueHead">
        <div class="eyebrow">WHERE VOICE CREATES VALUE</div>
        <h2 class="h2">Use voice when conversation removes meaningful friction.</h2>
        <p class="lead">Voice is valuable when speaking is faster or more natural than navigating an interface, when users need to act while their hands or attention are elsewhere, or when a multi-step task benefits from conversational guidance. The goal is not to replace every screen. It is to use voice where it makes the workflow materially easier.</p>
      </div>

      <div class="voiceInterfaceDecision" aria-label="Decision system for choosing voice, screen, agentic workflow, verification, or digital workflow">
        <div class="voiceInterfaceTop"><span>INTERFACE DECISION SYSTEM</span><b>RIGHT INTERFACE FOR THE JOB</b></div>
        <div class="voiceInterfaceBody">
          <div class="voiceTaskStart"><span>START</span><b>User Task</b><small>What is the simplest reliable path to the outcome?</small></div>
          <div class="voiceInterfaceBranches">
            <article class="voiceChoice"><small>FAST TO EXPRESS NATURALLY</small><b>Voice</b><p>Conversation removes interface friction.</p></article>
            <article><small>NEEDS VISUAL COMPARISON</small><b>Screen</b><p>Dense information or many options need visual review.</p></article>
            <article class="voiceAgentChoice"><small>MULTI-STEP + SYSTEM-CONNECTED</small><b>Voice + Agentic Workflow</b><p>Conversation becomes the interface to tools and workflows.</p></article>
            <article><small>SENSITIVE / RESTRICTED</small><b>Voice + Verification / Human Control</b><p>Identity, permission, confirmation, or judgment remains explicit.</p></article>
            <article><small>BETTER ASYNCHRONOUSLY</small><b>Digital Workflow</b><p>Forms, messages, or self-service may fit the task better.</p></article>
          </div>
          <div class="voiceInterfaceConverge"><span>CONVERGE</span><b>Right Interface for the Job</b><small>Voice is one product interface—not the default answer.</small></div>
        </div>
      </div>

      <div class="voiceValueGrid">
        <article class="voiceValueCard">
          <div class="voiceValueTop"><span>01</span><small>SCHEDULING &amp; COORDINATION</small></div>
          <h3>Turn a simple request into a completed workflow.</h3>
          <p>Users often know exactly what they want but have to navigate several screens, wait on hold, or move between systems to accomplish it. Voice can understand the request, gather missing details, check availability, present valid options, complete the permitted action, and confirm the result.</p>
          <div class="voicePattern"><b>Pattern</b><span>Request</span><span>Context</span><span>Availability</span><span>Choice</span><span>Action</span><span>Confirmation</span></div>
          <div class="voiceExamples"><span>Appointments</span><span>Reservations</span><span>Service windows</span><span>Internal scheduling</span><span>Rescheduling</span></div>
        </article>

        <article class="voiceValueCard">
          <div class="voiceValueTop"><span>02</span><small>SERVICE &amp; ACCOUNT WORKFLOWS</small></div>
          <h3>Let people say what they need instead of learning the interface.</h3>
          <p>Voice works well when the user’s intent is clear in natural language but the underlying system requires several steps. Conversation can simplify the interaction while the product still enforces identity, business rules, permissions, and verification.</p>
          <div class="voicePattern"><b>Pattern</b><span>Intent</span><span>Identity</span><span>Account context</span><span>Workflow</span><span>Verified outcome</span></div>
          <div class="voicePrinciple">Conversation simplifies the interface; it does not bypass business rules.</div>
          <div class="voiceExamples"><span>Status checks</span><span>Account changes</span><span>Service requests</span><span>Order / case updates</span></div>
        </article>

        <article class="voiceValueCard intakeValueCard">
          <div class="voiceValueTop"><span>03</span><small>INTAKE &amp; GUIDED INFORMATION GATHERING</small></div>
          <h3>Make structured workflows feel less like forms.</h3>
          <p>Some processes require collecting multiple pieces of information, resolving ambiguous answers, asking follow-up questions, and adapting based on previous responses. Voice can guide the interaction conversationally while still producing structured data for the underlying workflow.</p>
          <div class="voicePattern"><b>Pattern</b><span>Conversation</span><span>Clarification</span><span>Structured context</span><span>Validation</span><span>Next step</span></div>
          <div class="voiceExamples"><span>Onboarding</span><span>Intake</span><span>Qualification</span><span>Request capture</span><span>Guided workflows</span></div>
        </article>

        <article class="voiceValueCard handsFreeValueCard">
          <div class="voiceValueTop"><span>04</span><small>HANDS-FREE OPERATIONAL WORK</small></div>
          <h3>Use voice when screens interrupt the work itself.</h3>
          <p>There are environments where typing or navigating a UI creates unnecessary friction because the person is moving, working with equipment, driving an operational process, or simply needs information while doing something else.</p>
          <div class="voicePattern"><b>Pattern</b><span>Ask</span><span>Retrieve context</span><span>Respond / act</span><span>Continue work</span></div>
          <div class="voicePrinciple">The product still needs the same permissions, context, and confirmation discipline as any other interface.</div>
        </article>

        <article class="voiceValueCard systemConnectedValueCard">
          <div class="voiceValueTop"><span>05</span><small>SYSTEM-CONNECTED ASSISTANCE</small></div>
          <h3>Give users conversational access to work spread across multiple systems.</h3>
          <p>A single request may require retrieving information from one system, checking another, applying business rules, and updating a third. Voice can become the interaction layer while agentic workflows coordinate the systems behind it.</p>
          <div class="voiceConnectedPattern" aria-label="Conversation to multi-system action"><span>Conversation</span><span>Intent + context</span><span>Multiple tools / systems</span><span>Decision / action</span><span>Confirmation</span></div>
          <a class="textLink" href="capabilities.html#agentic-systems">Explore Intelligent Workflow &amp; Agentic Systems →</a>
        </article>
      </div>

      <aside class="voiceNoVoicePanel">
        <div class="voiceNoVoiceLead">
          <span>THE COUNTERPOINT</span>
          <h3>When voice should not be the interface.</h3>
          <p>A screen, form, or asynchronous interaction may be better when conversation does not actually reduce effort or when visual review is safer and clearer.</p>
        </div>
        <div class="voiceNoVoiceReasons">
          <div><span>01</span><p>Users need to visually compare many options.</p></div>
          <div><span>02</span><p>Dense information needs careful review.</p></div>
          <div><span>03</span><p>The task requires long-form reading or editing.</p></div>
          <div><span>04</span><p>Privacy makes speaking inappropriate.</p></div>
          <div><span>05</span><p>Visual confirmation is safer than spoken confirmation.</p></div>
          <div><span>06</span><p>The environment makes reliable audio difficult.</p></div>
          <div><span>07</span><p>Conversation does not materially reduce effort.</p></div>
        </div>
        <div class="voiceNoVoiceClosing">Good Voice AI Engineering includes knowing when a screen is better.</div>
      </aside>

      <div class="voiceValueClosing">Voice earns its place when speaking is the simplest path to a useful outcome.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.voiceReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Product proof</h2><p>Next we’ll connect the engineering discipline to Aloden Voice AI itself—showing conversation, intent, context, system action, permissions, confirmation, and human escalation as one product experience.</p>';

  if (!document.querySelector('#voice-section5-style')) {
    const style = document.createElement('style');
    style.id = 'voice-section5-style';
    style.textContent = `
      .voiceValue{background:linear-gradient(180deg,#fafbfc 0%,#f8f8fb 100%)}
      .voiceValueHead .lead{max-width:940px}
      .voiceInterfaceDecision{margin-top:28px;border:1px solid #dfe2e7;border-radius:17px;background:#fff;overflow:hidden;box-shadow:0 12px 32px rgba(21,28,45,.03)}
      .voiceInterfaceTop{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:12px 14px;border-bottom:1px solid var(--line);background:#fbfcfd}.voiceInterfaceTop span,.voiceInterfaceTop b{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em}.voiceInterfaceTop span{color:var(--violet)}.voiceInterfaceTop b{font-weight:500;color:#858d99;text-align:right}
      .voiceInterfaceBody{padding:16px}.voiceTaskStart,.voiceInterfaceConverge{max-width:430px;margin:0 auto;border:1px solid #dedff0;border-radius:12px;background:linear-gradient(145deg,#fff,#faf8ff);padding:12px 14px;text-align:center}.voiceTaskStart span,.voiceInterfaceConverge span{display:block;font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:.08em;color:var(--violet)}.voiceTaskStart b,.voiceInterfaceConverge b{display:block;font-size:15px;margin-top:4px}.voiceTaskStart small,.voiceInterfaceConverge small{display:block;font-size:9.5px;color:#7b8490;margin-top:4px}
      .voiceInterfaceBranches{position:relative;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px;margin:25px 0}.voiceInterfaceBranches:before,.voiceInterfaceBranches:after{content:'';position:absolute;left:50%;transform:translateX(-50%);width:1px;height:25px;background:#cfc8f6}.voiceInterfaceBranches:before{top:-25px}.voiceInterfaceBranches:after{bottom:-25px}.voiceInterfaceBranches article{border:1px solid #e0e4e9;border-radius:12px;background:#fbfcfe;padding:12px;min-height:132px}.voiceInterfaceBranches .voiceChoice{background:linear-gradient(150deg,#fff,#faf8ff);border-color:#dcd5f4}.voiceInterfaceBranches .voiceAgentChoice{background:#111318;border-color:#292d35;color:#fff}.voiceInterfaceBranches small{font-family:'IBM Plex Mono',monospace;font-size:7.5px;line-height:1.4;color:#7b8490;letter-spacing:.05em}.voiceInterfaceBranches b{display:block;font-size:11.5px;line-height:1.3;margin-top:7px;color:#252b34}.voiceInterfaceBranches p{font-size:9.2px;line-height:1.48;color:#78818e;margin:5px 0 0}.voiceAgentChoice small{color:#969eaa!important}.voiceAgentChoice b{color:#fff!important}.voiceAgentChoice p{color:#aab2be!important}
      .voiceValueGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:28px}.voiceValueCard{border:1px solid #e0e3e8;border-radius:16px;background:#fff;padding:19px;min-width:0}.voiceValueCard.intakeValueCard{background:linear-gradient(145deg,#fff,#faf8ff);border-color:#dfdaf2}.voiceValueCard.handsFreeValueCard{background:#111318;border-color:#292d35;color:#fff}.voiceValueCard.systemConnectedValueCard{grid-column:1/-1;background:linear-gradient(145deg,#fff,#fafbfc)}
      .voiceValueTop{display:flex;align-items:center;justify-content:space-between;gap:12px}.voiceValueTop span{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--violet)}.voiceValueTop small{font-family:'IBM Plex Mono',monospace;font-size:8.2px;letter-spacing:.07em;color:#7c8592;text-align:right}.handsFreeValueCard .voiceValueTop span{color:#a58aff}.handsFreeValueCard .voiceValueTop small{color:#969eaa}
      .voiceValueCard h3{font-size:22px;line-height:1.1;letter-spacing:-.03em;margin:14px 0 9px}.voiceValueCard>p{font-size:11.5px;line-height:1.58;color:#727c89;margin:0}.handsFreeValueCard>p{color:#aab2be}
      .voicePattern{display:flex;gap:6px;flex-wrap:wrap;margin-top:15px;padding-top:13px;border-top:1px solid #e4e7eb}.voicePattern b{width:100%;font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:.07em;color:#7c8592}.voicePattern span{border:1px solid #e0e4e9;border-radius:999px;background:#fbfcfe;padding:6px 8px;font-size:8.8px;color:#69727f}.handsFreeValueCard .voicePattern{border-color:#2f333c}.handsFreeValueCard .voicePattern b{color:#969eaa}.handsFreeValueCard .voicePattern span{background:#171a20;border-color:#30343d;color:#b4bbc5}
      .voiceExamples{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px}.voiceExamples span{font-size:8.8px;color:#6e7784;background:#f5f6f8;border-radius:999px;padding:5px 7px}.voicePrinciple{margin-top:11px;border-left:2px solid var(--violet);background:#faf8ff;border-radius:0 9px 9px 0;padding:8px 10px;font-size:10px;line-height:1.48;color:#655f75}.handsFreeValueCard .voicePrinciple{background:#1b1727;color:#b8b0ca;border-color:#a58aff}
      .voiceConnectedPattern{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px;margin-top:16px;padding:14px 12px;border:1px solid #e1e4e9;border-radius:11px;background:#fff}.voiceConnectedPattern span{position:relative;border-top:2px solid #dce0e5;padding-top:10px;text-align:center;font-size:8.8px;line-height:1.3;color:#65707d}.voiceConnectedPattern span:before{content:'';position:absolute;top:-4px;left:50%;transform:translateX(-50%);width:7px;height:7px;border-radius:50%;background:var(--violet)}.systemConnectedValueCard .textLink{display:inline-block;margin-top:14px;font-size:12px}
      .voiceNoVoicePanel{display:grid;grid-template-columns:.78fr 1.22fr;gap:26px;margin-top:28px;border:1px solid #292d35;border-radius:17px;background:#111318;color:#fff;padding:22px}.voiceNoVoiceLead>span{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em;color:#a58aff}.voiceNoVoiceLead h3{font-size:27px;line-height:1.08;letter-spacing:-.035em;margin:10px 0 7px}.voiceNoVoiceLead p{font-size:12.5px;line-height:1.58;color:#aeb4bf;margin:0}.voiceNoVoiceReasons{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.voiceNoVoiceReasons div{display:grid;grid-template-columns:26px 1fr;gap:7px;border:1px solid #30343d;border-radius:10px;background:#171a20;padding:10px}.voiceNoVoiceReasons span{font-family:'IBM Plex Mono',monospace;font-size:8.5px;color:#a58aff}.voiceNoVoiceReasons p{font-size:10px;line-height:1.45;color:#b4bbc5;margin:0}.voiceNoVoiceClosing{grid-column:1/-1;margin-top:2px;padding-top:12px;border-top:1px solid #30343d;font-size:12px;font-weight:700;color:#c5b9f0}
      .voiceValueClosing{margin-top:24px;padding-top:17px;border-top:1px solid #dfe2e7;font-size:16px;font-weight:700;letter-spacing:-.018em;color:#20242d}
      @media(max-width:1060px){.voiceInterfaceBranches{grid-template-columns:repeat(3,1fr)}}
      @media(max-width:900px){.voiceValueGrid{grid-template-columns:1fr}.voiceValueCard.systemConnectedValueCard{grid-column:auto}.voiceNoVoicePanel{grid-template-columns:1fr}.voiceConnectedPattern{grid-template-columns:repeat(3,1fr)}}
      @media(max-width:640px){.voiceInterfaceTop{align-items:flex-start;flex-direction:column}.voiceInterfaceBranches{grid-template-columns:1fr}.voiceConnectedPattern{grid-template-columns:repeat(2,1fr)}.voiceNoVoiceReasons{grid-template-columns:1fr}.voiceValueTop{align-items:flex-start;flex-direction:column;gap:7px}.voiceValueTop small{text-align:left}.voiceValueClosing{font-size:15px}}
    `;
    document.head.appendChild(style);
  }
})();
