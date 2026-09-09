// Voice AI Engineering content-review layer — Section 3 / conversation to completed action.
(() => {
  if (!document.querySelector('.voiceEngHero')) return;
  const next = document.querySelector('.voiceReviewNext');
  if (!next || document.querySelector('#conversation-to-action')) return;

  const section = document.createElement('section');
  section.className = 'voiceExecution section soft';
  section.id = 'conversation-to-action';
  section.innerHTML = `
    <div class="container">
      <div class="voiceExecutionHead">
        <div class="eyebrow">FROM CONVERSATION TO COMPLETED ACTION</div>
        <h2 class="h2">Every turn changes the product state.</h2>
        <p class="lead">A useful voice system continuously listens, interprets, updates context, checks what is allowed, interacts with systems, and decides what to say or do next. The conversation and the workflow advance together.</p>
      </div>

      <div class="voiceRuntimeTrace" aria-label="Live execution trace from user speech through verified system action">
        <div class="voiceRuntimeTop"><span>LIVE EXECUTION TRACE</span><b>CONVERSATION + PRODUCT STATE + SYSTEM ACTION</b></div>
        <div class="voiceRuntimeHeader"><span>Conversation</span><span>Product State</span><span>System / Tool</span><span>Control</span></div>
        <div class="voiceRuntimeRows">
          <div><span>“Move my appointment…”</span><b>Intent detected</b><span>—</span><em>Identity known</em></div>
          <div><span>“Friday afternoon.”</span><b>Time preference captured</b><span>Availability lookup</span><em>Read permitted</em></div>
          <div><span>Options returned</span><b>Choice required</b><span>Scheduling system</span><em>Confirmation required</em></div>
          <div><span>“2:30 works.”</span><b>Choice confirmed</b><span>Update appointment</span><em>Write permitted</em></div>
          <div class="runtimeSuccess"><span>Update succeeds</span><b>Completed</b><span>System state verified</span><em>Audit context retained</em></div>
          <div><span>“You’re set for Friday at 2:30 PM.”</span><b>Confirmed outcome</b><span>—</span><em>Verified state only</em></div>
        </div>
        <div class="voiceRuntimeRails"><span>Latency &amp; Turn Handling</span><span>Permissions &amp; State</span><span>Evaluation &amp; Observability</span></div>
      </div>

      <div class="voiceExecutionGrid">
        <article class="voiceExecutionCard">
          <div class="voiceExecutionTop"><span>01</span><small>LISTEN &amp; DETECT THE TURN</small></div>
          <h3>Know when to listen, when to wait, and when to respond.</h3>
          <p>Capture speech in real time while handling silence, interruption, barge-in, background noise, and incomplete turns.</p>
          <div class="voiceStateChange"><span>System state</span><b>Listening → Turn complete</b></div>
        </article>

        <article class="voiceExecutionCard">
          <div class="voiceExecutionTop"><span>02</span><small>UNDERSTAND INTENT &amp; CONTEXT</small></div>
          <h3>Translate natural language into product meaning.</h3>
          <p>Determine what the user wants, extract relevant entities, combine them with conversation history and business context, and identify what information is still missing.</p>
          <div class="voiceIntentExample"><span>Intent</span><b>Reschedule appointment</b><span>Time preference</span><b>Friday afternoon</b><span>Context</span><b>User + current appointment + scheduling rules</b></div>
        </article>

        <article class="voiceExecutionCard voiceClarifyCard">
          <div class="voiceExecutionTop"><span>03</span><small>CLARIFY WHAT IS AMBIGUOUS</small></div>
          <h3>Do not guess when the workflow needs certainty.</h3>
          <p>If multiple appointments exist, the requested time is unavailable, identity is unclear, or critical information is missing, ask the smallest useful clarification before proceeding.</p>
          <div class="voiceStateChange"><span>State</span><b>Uncertain → Clarified</b></div>
        </article>

        <article class="voiceExecutionCard voiceControlCard">
          <div class="voiceExecutionTop"><span>04</span><small>POLICY, PERMISSION &amp; CONFIRMATION</small></div>
          <h3>Determine what the system is allowed to do.</h3>
          <p>Before accessing or changing data, evaluate authentication, permissions, business policy, restricted actions, and whether explicit user confirmation is required.</p>
          <div class="voiceDecisionFlow"><span>Allowed → continue</span><span>Confirmation required → ask</span><span>Restricted → escalate</span></div>
        </article>

        <article class="voiceExecutionCard voiceToolCard">
          <div class="voiceExecutionTop"><span>05</span><small>USE TOOLS &amp; CONNECTED SYSTEMS</small></div>
          <h3>Turn conversation into system activity.</h3>
          <p>Read availability, retrieve records, call APIs, update systems, trigger workflows, or coordinate multiple tools while maintaining action state.</p>
          <div class="voiceToolFlow"><span>Scheduling system</span><span>Check Friday availability</span><span>Return valid options</span></div>
        </article>

        <article class="voiceExecutionCard">
          <div class="voiceExecutionTop"><span>06</span><small>COMMIT &amp; VERIFY THE ACTION</small></div>
          <h3>Do not treat a tool call as success until the outcome is known.</h3>
          <p>Execute the permitted action, verify the system response, handle partial failure, and ensure the resulting state matches what the user requested.</p>
          <div class="voiceVerifyGrid"><div><span>Action</span><b>Appointment updated</b></div><div><span>Verification</span><b>New date/time confirmed by system</b></div></div>
        </article>

        <article class="voiceExecutionCard voiceConfirmCard">
          <div class="voiceExecutionTop"><span>07</span><small>CONFIRM THE OUTCOME</small></div>
          <h3>Make the result explicit.</h3>
          <p>Tell the user exactly what happened rather than ending with a vague acknowledgement. The response should reflect verified system state, not model assumption.</p>
          <div class="voiceConfirmedSpeech">“Your appointment is now scheduled for Friday at 2:30 PM.”</div>
        </article>
      </div>

      <aside class="voiceExceptionPanel">
        <div class="voiceExceptionLead"><span>EXCEPTION PATH</span><h3>Recover or escalate without losing the work already done.</h3><p>At any point, ambiguity, tool failure, permission issues, restricted actions, or human judgment can change the path.</p></div>
        <div class="voiceExceptionFlow"><span>Ambiguous</span><span>Tool Failure</span><span>Permission Issue</span><span>Restricted Action</span><span>Human Judgment Required</span></div>
        <div class="voiceExceptionDecision"><b>Recover in conversation</b><i>or</i><b>Transfer with context</b></div>
        <div class="voiceHandoffContext"><span>Intent</span><span>Conversation history</span><span>Gathered context</span><span>Attempted actions</span><span>System state</span><span>Reason for escalation</span></div>
      </aside>

      <div class="voiceExecutionClosing">The conversation may sound simple. The system behind it should be precise.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.voiceReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: What makes Voice AI difficult in production</h2><p>Next we’ll show how a production voice system handles latency, interruptions, corrections, ambiguity, identity, slow or failed tools, and human continuity under real-world conditions.</p>';

  if (!document.querySelector('#voice-section3-style')) {
    const style = document.createElement('style');
    style.id = 'voice-section3-style';
    style.textContent = `
      .voiceExecution{background:linear-gradient(180deg,#fafbfc 0%,#f8f8fb 100%)}
      .voiceExecutionHead .lead{max-width:930px}
      .voiceRuntimeTrace{margin-top:28px;border:1px solid #292d35;border-radius:17px;background:#111318;color:#fff;overflow:hidden;box-shadow:0 15px 36px rgba(13,16,25,.07)}
      .voiceRuntimeTop{display:flex;justify-content:space-between;gap:16px;padding:12px 14px;border-bottom:1px solid #2e323b;background:#15181e}.voiceRuntimeTop span,.voiceRuntimeTop b{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em}.voiceRuntimeTop span{color:#aa94ff}.voiceRuntimeTop b{color:#929aa6;font-weight:500;text-align:right}
      .voiceRuntimeHeader,.voiceRuntimeRows>div{display:grid;grid-template-columns:1.2fr 1fr 1fr .9fr;gap:1px}.voiceRuntimeHeader{background:#2c3038;border-bottom:1px solid #2c3038}.voiceRuntimeHeader span{background:#171a20;padding:9px 11px;font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:.06em;color:#8f98a4}.voiceRuntimeRows{display:grid;gap:1px;background:#2b2f37}.voiceRuntimeRows>div{background:#111318}.voiceRuntimeRows>div>*{padding:10px 11px;background:#15181e;font-size:9.8px;line-height:1.4;min-width:0}.voiceRuntimeRows span{color:#c3c9d1}.voiceRuntimeRows b{color:#eee;font-weight:500}.voiceRuntimeRows em{font-style:normal;color:#b7a9e4}.voiceRuntimeRows .runtimeSuccess>*{background:#181523}.voiceRuntimeRows .runtimeSuccess b{color:#c7b8ff}
      .voiceRuntimeRails{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#2d3139;padding-top:1px}.voiceRuntimeRails span{background:#14171d;text-align:center;padding:10px 8px;font-family:'IBM Plex Mono',monospace;font-size:8px;color:#b8abdf}
      .voiceExecutionGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:28px}.voiceExecutionCard{border:1px solid #e0e3e8;border-radius:16px;background:#fff;padding:19px;min-width:0}.voiceExecutionCard.voiceControlCard,.voiceExecutionCard.voiceToolCard{background:#111318;border-color:#292d35;color:#fff}.voiceExecutionCard.voiceConfirmCard{grid-column:1/-1;background:linear-gradient(145deg,#fff,#faf8ff);border-color:#ddd7f3}
      .voiceExecutionTop{display:flex;align-items:center;justify-content:space-between;gap:12px}.voiceExecutionTop>span{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--violet)}.voiceExecutionTop small{font-family:'IBM Plex Mono',monospace;font-size:8.3px;letter-spacing:.07em;color:#7c8592;text-align:right}.voiceControlCard .voiceExecutionTop>span,.voiceToolCard .voiceExecutionTop>span{color:#a58aff}.voiceControlCard .voiceExecutionTop small,.voiceToolCard .voiceExecutionTop small{color:#969eaa}
      .voiceExecutionCard h3{font-size:22px;line-height:1.1;letter-spacing:-.03em;margin:14px 0 9px}.voiceExecutionCard>p{font-size:12px;line-height:1.6;color:var(--body);margin:0}.voiceControlCard>p,.voiceToolCard>p{color:#aeb5c0}
      .voiceStateChange{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:14px;padding:10px 11px;border:1px solid #e1e4e9;border-radius:10px;background:#fbfcfe}.voiceStateChange span,.voiceIntentExample span,.voiceVerifyGrid span{font-family:'IBM Plex Mono',monospace;font-size:8px;color:#7a8390}.voiceStateChange b{font-size:10.5px;color:#5b46a8}
      .voiceIntentExample{display:grid;grid-template-columns:105px 1fr;gap:6px 10px;margin-top:14px;padding:11px;border:1px solid #ded8f3;border-radius:10px;background:#faf8ff}.voiceIntentExample b{font-size:10.5px;color:#313744}
      .voiceDecisionFlow,.voiceToolFlow{display:flex;gap:6px;flex-wrap:wrap;margin-top:14px;padding-top:13px;border-top:1px solid #30343d}.voiceDecisionFlow span,.voiceToolFlow span{border:1px solid #343944;border-radius:999px;background:#171a20;padding:6px 8px;font-size:8.8px;line-height:1.3;color:#b7bec8}.voiceToolFlow span{border-color:#493e70;background:#1b1727;color:#c0b1f6}
      .voiceVerifyGrid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px}.voiceVerifyGrid div{border:1px solid #e0e4e9;border-radius:10px;background:#fbfcfe;padding:10px}.voiceVerifyGrid b{display:block;font-size:10.5px;line-height:1.4;color:#2d333d;margin-top:4px}
      .voiceConfirmedSpeech{margin-top:14px;border-left:2px solid var(--violet);border-radius:0 10px 10px 0;background:#faf8ff;padding:12px 14px;font-size:14px;line-height:1.45;font-weight:600;color:#3f3470}
      .voiceExceptionPanel{display:grid;grid-template-columns:.9fr 1.1fr;gap:20px;margin-top:28px;border:1px solid #292d35;border-radius:17px;background:#111318;color:#fff;padding:21px}.voiceExceptionLead>span{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em;color:#a58aff}.voiceExceptionLead h3{font-size:25px;line-height:1.08;letter-spacing:-.034em;margin:9px 0 7px}.voiceExceptionLead p{font-size:12px;line-height:1.55;color:#aeb5c0;margin:0}.voiceExceptionFlow{display:flex;gap:6px;flex-wrap:wrap;align-content:flex-start}.voiceExceptionFlow span,.voiceHandoffContext span{border:1px solid #30343d;border-radius:999px;background:#171a20;padding:6px 8px;font-size:8.8px;color:#b7bec8}.voiceExceptionDecision{grid-column:2;display:flex;gap:10px;align-items:center}.voiceExceptionDecision b{border:1px solid #493e70;border-radius:10px;background:#1b1727;padding:9px 11px;font-size:10.5px;color:#c4b5ff}.voiceExceptionDecision i{font-style:normal;font-size:9px;color:#7f8792}.voiceHandoffContext{grid-column:1/-1;display:flex;gap:6px;flex-wrap:wrap;padding-top:13px;border-top:1px solid #2f333c}
      .voiceExecutionClosing{margin-top:24px;padding-top:17px;border-top:1px solid #dfe2e7;font-size:16px;font-weight:700;letter-spacing:-.018em;color:#20242d}
      @media(max-width:900px){.voiceExecutionGrid{grid-template-columns:1fr}.voiceExecutionCard.voiceConfirmCard{grid-column:auto}.voiceExceptionPanel{grid-template-columns:1fr}.voiceExceptionDecision{grid-column:1}.voiceRuntimeHeader,.voiceRuntimeRows>div{grid-template-columns:1.1fr 1fr 1fr}.voiceRuntimeHeader span:nth-child(4),.voiceRuntimeRows>div>*:nth-child(4){display:none}}
      @media(max-width:640px){.voiceRuntimeTop{align-items:flex-start;flex-direction:column}.voiceRuntimeHeader,.voiceRuntimeRows>div{grid-template-columns:1fr 1fr}.voiceRuntimeHeader span:nth-child(3),.voiceRuntimeRows>div>*:nth-child(3){display:none}.voiceRuntimeRails{grid-template-columns:1fr}.voiceExecutionCard{padding:17px}.voiceExecutionTop{align-items:flex-start;flex-direction:column;gap:7px}.voiceExecutionTop small{text-align:left}.voiceIntentExample{grid-template-columns:1fr}.voiceVerifyGrid{grid-template-columns:1fr}.voiceExecutionClosing{font-size:15px}}
    `;
    document.head.appendChild(style);
  }
})();
