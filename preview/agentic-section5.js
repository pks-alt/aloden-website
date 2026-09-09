// Intelligent Workflow & Agentic Systems content-review layer — Section 5 / where agentic systems earn their place.
(() => {
  if (!document.querySelector('.agenticHero')) return;
  const next = document.querySelector('.agenticReviewNext');
  if (!next || document.querySelector('#where-agentic-earns-its-place')) return;

  const section = document.createElement('section');
  section.className = 'agenticValue section soft';
  section.id = 'where-agentic-earns-its-place';
  section.innerHTML = `
    <div class="container">
      <div class="agenticValueHead">
        <div class="eyebrow">WHERE AGENTIC SYSTEMS CREATE VALUE</div>
        <h2 class="h2">Use agentic systems when the workflow itself needs to adapt.</h2>
        <p class="lead">Not every automation needs an agent. Agentic systems create value when work spans multiple steps, changing context, several tools or systems, exceptions, approvals, and decisions where the next action cannot always be predetermined. When the path is simple and known, conventional software or workflow automation is usually better.</p>
      </div>

      <div class="agenticOperatingDecision" aria-label="Decision system for deterministic workflow, AI capability, agentic workflow, or human decision">
        <div class="agenticOperatingTop"><span>OPERATING MODEL DECISION</span><b>USE THE SIMPLEST SYSTEM THAT CAN RELIABLY COMPLETE THE WORK</b></div>
        <div class="agenticOperatingBody">
          <div class="agenticWorkStart"><span>START</span><b>What kind of work is this?</b><small>Choose the operating model from workflow reality—not from AI capability alone.</small></div>
          <div class="agenticOperatingBranches">
            <article><small>KNOWN STEPS + PREDICTABLE RULES</small><b>Deterministic Workflow</b><p>Explicit software or orchestration where the path is known.</p></article>
            <article><small>ONE INTERPRETATION / GENERATION TASK</small><b>AI Capability</b><p>A focused intelligent step without durable agentic orchestration.</p></article>
            <article class="agenticChoice"><small>MULTIPLE STEPS + CHANGING CONTEXT + TOOLS</small><b>Agentic Workflow</b><p>Dynamic next-step selection inside a controlled, stateful workflow.</p></article>
            <article><small>CONSEQUENTIAL JUDGMENT / AUTHORITY</small><b>Human Decision / Approval</b><p>People retain ownership while AI prepares context and options.</p></article>
          </div>
          <div class="agenticOperatingConverge"><span>CONVERGE</span><b>Right Operating Model</b><small>Rules, AI, agentic orchestration, and human judgment can coexist inside one product workflow.</small></div>
        </div>
      </div>

      <div class="agenticValueGrid">
        <article class="agenticValueCard">
          <div class="agenticValueTop"><span>01</span><small>CROSS-SYSTEM OPERATIONAL COORDINATION</small></div>
          <h3>Coordinate work that currently lives between applications.</h3>
          <p>Many business processes are difficult because people continually move information and decisions across several systems. An agentic workflow can read context, determine the next step, use the right system, verify state, and continue.</p>
          <div class="agenticPattern"><b>Pattern</b><span>Trigger</span><span>CRM</span><span>Internal platform</span><span>Access system</span><span>Scheduling</span><span>Verification</span></div>
          <div class="agenticExamples"><span>Customer onboarding</span><span>Service activation</span><span>Internal fulfillment</span><span>Account setup</span><span>Operational handoffs</span></div>
          <div class="agenticRequirement"><span>Product requirement</span><p>The workflow—not the model—remains the source of progress and state.</p></div>
        </article>

        <article class="agenticValueCard">
          <div class="agenticValueTop"><span>02</span><small>EXCEPTION-RICH WORKFLOWS</small></div>
          <h3>Handle the cases fixed automation cannot anticipate cleanly.</h3>
          <p>Operational work contains missing information, conflicting records, unavailable systems, policy exceptions, unusual requests, and failed actions. Agentic reasoning can help determine the next valid recovery step from the current situation.</p>
          <div class="agenticPattern"><b>Pattern</b><span>Normal path</span><span>Exception</span><span>Gather context</span><span>Evaluate options</span><span>Recover / clarify / escalate</span><span>Resume</span></div>
          <div class="agenticRequirement"><span>Principle</span><p>The system should adapt the path without abandoning the controls.</p></div>
        </article>

        <article class="agenticValueCard agenticStatefulValue">
          <div class="agenticValueTop"><span>03</span><small>LONG-RUNNING, STATEFUL WORK</small></div>
          <h3>Continue the workflow even when the work takes hours, days, or weeks.</h3>
          <p>Some processes wait for documents, external responses, approvals, system events, scheduled dates, or human decisions. The workflow persists independently instead of relying on a model session to remain active.</p>
          <div class="agenticPattern"><b>Pattern</b><span>Start</span><span>Act</span><span>Checkpoint</span><span>Wait</span><span>Event arrives</span><span>Resume</span><span>Continue</span></div>
          <div class="agenticExamples"><span>Onboarding</span><span>Credentialing-style workflows</span><span>Case management</span><span>Multi-stage approvals</span><span>Complex fulfillment</span></div>
          <div class="agenticRequirement"><span>Product requirement</span><p>Durable state must outlive the model session.</p></div>
        </article>

        <article class="agenticValueCard agenticDynamicValue">
          <div class="agenticValueTop"><span>04</span><small>DYNAMIC NEXT-BEST ACTION</small></div>
          <h3>Choose the next useful step from current evidence.</h3>
          <p>Some workflows have a defined objective but several valid ways to get there. The system can inspect current state, identify what is missing, determine what can happen now, select the appropriate tool, and decide whether an approval is required.</p>
          <div class="agenticPattern"><b>Pattern</b><span>Observe state</span><span>Identify gap</span><span>Select next valid action</span><span>Act</span><span>Verify</span><span>Reassess</span></div>
          <div class="agenticRequirement"><span>Principle</span><p>Plan from reality, not from assumptions made ten steps earlier.</p></div>
        </article>

        <article class="agenticValueCard agenticHumanValue">
          <div class="agenticValueTop"><span>05</span><small>HUMAN + AGENT WORKFLOW</small></div>
          <h3>Automate the preparation around human judgment.</h3>
          <p>Some of the highest-value workflows should not remove the decision-maker. The system can gather information, check completeness, retrieve evidence, apply known policy, identify exceptions, prepare a recommendation, and route the work to the right person.</p>
          <div class="agenticPattern"><b>Pattern</b><span>Agent prepares</span><span>Human reviews</span><span>Decision recorded</span><span>Workflow resumes</span><span>Action verified</span></div>
          <div class="agenticRequirement"><span>Product requirement</span><p>Human judgment remains explicit while repetitive preparation and follow-through become easier to operate.</p></div>
        </article>
      </div>

      <aside class="agenticNoAgentPanel">
        <div class="agenticNoAgentLead"><span>THE COUNTERPOINT</span><h3>When an agentic system is not the answer.</h3><p>Use ordinary software, deterministic automation, or a focused AI capability when the work does not need dynamic, stateful orchestration.</p></div>
        <div class="agenticNoAgentReasons">
          <div><span>01</span><p>The workflow follows a known sequence.</p></div>
          <div><span>02</span><p>Explicit rules can reliably determine the next step.</p></div>
          <div><span>03</span><p>One model call or one tool call solves the problem.</p></div>
          <div><span>04</span><p>There is no durable workflow state to manage.</p></div>
          <div><span>05</span><p>Source systems cannot provide reliable verification.</p></div>
          <div><span>06</span><p>Tool permissions and contracts are poorly defined.</p></div>
          <div><span>07</span><p>Added autonomy does not materially improve the outcome.</p></div>
        </div>
        <div class="agenticNoAgentClosing">Good agentic engineering includes knowing when a workflow engine, rule, or ordinary software is better.</div>
      </aside>

      <div class="agenticValueClosing">Agentic systems earn their place when adapting the workflow creates more value than merely automating the steps.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.agenticReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Product proof</h2><p>Next we’ll connect the discipline to products Aloden has built, showing how state, tool use, controlled automation, approvals, verification, and human continuity appear inside real product workflows.</p>';

  if (!document.querySelector('#agentic-section5-style')) {
    const style = document.createElement('style');
    style.id = 'agentic-section5-style';
    style.textContent = `
      .agenticValue{background:linear-gradient(180deg,#fafbfc,#f8f8fb)}
      .agenticValueHead .lead{max-width:940px}
      .agenticOperatingDecision{margin-top:28px;border:1px solid #dfe2e7;border-radius:17px;background:#fff;overflow:hidden;box-shadow:0 12px 32px rgba(21,28,45,.03)}
      .agenticOperatingTop{display:flex;justify-content:space-between;gap:16px;padding:12px 14px;border-bottom:1px solid var(--line);background:#fbfcfd}.agenticOperatingTop span,.agenticOperatingTop b{font-family:'IBM Plex Mono',monospace;font-size:8.4px;letter-spacing:.08em}.agenticOperatingTop span{color:var(--violet)}.agenticOperatingTop b{color:#858d99;font-weight:500;text-align:right}
      .agenticOperatingBody{padding:16px}.agenticWorkStart,.agenticOperatingConverge{max-width:470px;margin:0 auto;border:1px solid #dedff0;border-radius:12px;background:linear-gradient(145deg,#fff,#faf8ff);padding:12px 14px;text-align:center}.agenticWorkStart span,.agenticOperatingConverge span{display:block;font-family:'IBM Plex Mono',monospace;font-size:8px;color:var(--violet);letter-spacing:.08em}.agenticWorkStart b,.agenticOperatingConverge b{display:block;font-size:15px;margin-top:4px}.agenticWorkStart small,.agenticOperatingConverge small{display:block;font-size:9.5px;line-height:1.4;color:#7b8490;margin-top:4px}
      .agenticOperatingBranches{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:9px;margin:25px 0}.agenticOperatingBranches:before,.agenticOperatingBranches:after{content:'';position:absolute;left:50%;transform:translateX(-50%);width:1px;height:25px;background:#cfc8f6}.agenticOperatingBranches:before{top:-25px}.agenticOperatingBranches:after{bottom:-25px}.agenticOperatingBranches article{border:1px solid #e0e4e9;border-radius:12px;background:#fbfcfe;padding:12px;min-height:130px}.agenticOperatingBranches article.agenticChoice{background:#111318;border-color:#292d35;color:#fff}.agenticOperatingBranches small{font-family:'IBM Plex Mono',monospace;font-size:7.6px;line-height:1.4;color:#7b8490;letter-spacing:.05em}.agenticOperatingBranches b{display:block;font-size:12px;line-height:1.3;margin-top:7px;color:#252b34}.agenticOperatingBranches p{font-size:9.5px;line-height:1.48;color:#78818e;margin:5px 0 0}.agenticChoice small{color:#989fac!important}.agenticChoice b{color:#fff!important}.agenticChoice p{color:#aab2be!important}
      .agenticValueGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:28px}.agenticValueCard{border:1px solid #e0e3e8;border-radius:16px;background:#fff;padding:19px;min-width:0}.agenticValueCard.agenticDynamicValue{background:#111318;border-color:#292d35;color:#fff}.agenticValueCard.agenticHumanValue{grid-column:1/-1;background:linear-gradient(145deg,#fff,#faf8ff);border-color:#ddd7f3}.agenticValueCard.agenticStatefulValue{background:linear-gradient(145deg,#fff,#fafbfc)}
      .agenticValueTop{display:flex;align-items:center;justify-content:space-between;gap:12px}.agenticValueTop span{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--violet)}.agenticValueTop small{font-family:'IBM Plex Mono',monospace;font-size:8.2px;letter-spacing:.07em;color:#7c8592;text-align:right}.agenticDynamicValue .agenticValueTop span{color:#a58aff}.agenticDynamicValue .agenticValueTop small{color:#969eaa}.agenticValueCard h3{font-size:22px;line-height:1.1;letter-spacing:-.03em;margin:14px 0 9px}.agenticValueCard>p{font-size:12px;line-height:1.6;color:var(--body);margin:0}.agenticDynamicValue>p{color:#aeb5c0}
      .agenticPattern{display:flex;gap:6px;flex-wrap:wrap;margin-top:14px;padding-top:13px;border-top:1px solid #e4e7eb}.agenticPattern b{width:100%;font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:.08em;color:#7c8592}.agenticPattern span,.agenticExamples span{border:1px solid #e0e4e9;border-radius:999px;background:#fbfcfe;padding:6px 8px;font-size:8.8px;line-height:1.3;color:#69727f}.agenticDynamicValue .agenticPattern{border-color:#30343d}.agenticDynamicValue .agenticPattern b{color:#969eaa}.agenticDynamicValue .agenticPattern span{background:#171a20;border-color:#30343d;color:#b7bec8}.agenticExamples{display:flex;gap:6px;flex-wrap:wrap;margin-top:9px}.agenticRequirement{margin-top:12px;border-left:2px solid var(--violet);border-radius:0 9px 9px 0;background:#faf8ff;padding:8px 10px}.agenticRequirement span{display:block;font-family:'IBM Plex Mono',monospace;font-size:8px;color:#6a55b2;letter-spacing:.05em}.agenticRequirement p{font-size:10.5px;line-height:1.48;color:#655f75;margin:4px 0 0}.agenticDynamicValue .agenticRequirement{background:#1b1727;border-color:#a58aff}.agenticDynamicValue .agenticRequirement span{color:#c0afff}.agenticDynamicValue .agenticRequirement p{color:#b8b0ca}
      .agenticNoAgentPanel{display:grid;grid-template-columns:.78fr 1.22fr;gap:24px;margin-top:28px;border:1px solid #292d35;border-radius:17px;background:#111318;color:#fff;padding:22px}.agenticNoAgentLead>span{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em;color:#a58aff}.agenticNoAgentLead h3{font-size:27px;line-height:1.08;letter-spacing:-.035em;margin:10px 0 7px}.agenticNoAgentLead p{font-size:12.5px;line-height:1.58;color:#aeb4bf;margin:0}.agenticNoAgentReasons{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.agenticNoAgentReasons div{display:grid;grid-template-columns:26px 1fr;gap:7px;border:1px solid #30343d;border-radius:10px;background:#171a20;padding:10px}.agenticNoAgentReasons span{font-family:'IBM Plex Mono',monospace;font-size:8.5px;color:#a58aff}.agenticNoAgentReasons p{font-size:10px;line-height:1.45;color:#b4bbc5;margin:0}.agenticNoAgentClosing{grid-column:1/-1;border-top:1px solid #30343d;padding-top:13px;font-size:12px;font-weight:600;color:#d9dce2}
      .agenticValueClosing{margin-top:24px;padding-top:17px;border-top:1px solid #dfe2e7;font-size:16px;font-weight:700;letter-spacing:-.018em;color:#20242d}
      @media(max-width:920px){.agenticOperatingBranches{grid-template-columns:repeat(2,1fr)}.agenticValueGrid{grid-template-columns:1fr}.agenticValueCard.agenticHumanValue{grid-column:auto}.agenticNoAgentPanel{grid-template-columns:1fr}}
      @media(max-width:620px){.agenticOperatingTop{align-items:flex-start;flex-direction:column}.agenticOperatingBranches{grid-template-columns:1fr}.agenticValueTop{align-items:flex-start;flex-direction:column;gap:7px}.agenticValueTop small{text-align:left}.agenticNoAgentReasons{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }
})();
