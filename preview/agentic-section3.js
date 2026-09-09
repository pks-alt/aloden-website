// Intelligent Workflow & Agentic Systems content-review layer — Section 3 / trigger to verified outcome.
(() => {
  if (!document.querySelector('.agenticHero')) return;
  const next = document.querySelector('.agenticReviewNext');
  if (!next || document.querySelector('#trigger-to-verified-outcome')) return;

  const section = document.createElement('section');
  section.className = 'agenticRuntime section soft';
  section.id = 'trigger-to-verified-outcome';
  section.innerHTML = `
    <div class="container">
      <div class="agenticRuntimeHead">
        <div class="eyebrow">FROM TRIGGER TO VERIFIED OUTCOME</div>
        <h2 class="h2">The workflow advances one verified state change at a time.</h2>
        <p class="lead">An agentic system should not receive a goal and disappear into an opaque loop. Each step should begin from known state, make a bounded decision, use permitted tools, record what changed, verify the result, and determine whether the workflow can continue, needs approval, must recover, or is actually complete.</p>
      </div>

      <div class="agenticRunConsole" aria-label="Customer onboarding agentic workflow execution trace">
        <div class="agenticRunTop"><span>RUNTIME ORCHESTRATION CONSOLE</span><b>CUSTOMER ONBOARDING · CONTROLLED EXECUTION</b></div>
        <div class="agenticRunTrigger"><span>TRIGGER</span><b>Customer approved for onboarding</b><small>CRM status → Approved</small></div>
        <div class="agenticRunHeader"><span>Step</span><span>Workflow State</span><span>Decision / Tool</span><span>Control</span></div>
        <div class="agenticRunRows">
          <div><span>Customer approved</span><b>STARTED</b><span>Load onboarding context</span><em>Initiator verified</em></div>
          <div><span>Context assembled</span><b>READY_TO_ACT</b><span>Choose next valid step</span><em>Policy applied</em></div>
          <div><span>Workspace missing</span><b>IN_PROGRESS</b><span>Create customer workspace</span><em>Permitted</em></div>
          <div><span>Tool reports created</span><b>VERIFYING</b><span>Read resulting system state</span><em>No assumption of success</em></div>
          <div class="agenticRunVerified"><span>Workspace verified</span><b>WORKSPACE_READY</b><span>Provision standard access</span><em>Standard scope</em></div>
          <div class="agenticRunApproval"><span>Elevated access requested</span><b>WAITING_FOR_APPROVAL</b><span>Pause workflow</span><em>Approval required</em></div>
          <div><span>Reviewer approves</span><b>RESUMED</b><span>Provision approved access</span><em>Approval recorded</em></div>
          <div class="agenticRunException"><span>Calendar timeout</span><b>SCHEDULING_EXCEPTION</b><span>Retry / alternate path</span><em>Safe recovery</em></div>
          <div class="agenticRunComplete"><span>All criteria true</span><b>COMPLETE</b><span>Close workflow</span><em>Audit record finalized</em></div>
        </div>
        <div class="agenticRunRails"><span>Durable State</span><span>Permissions</span><span>Verification</span><span>Exceptions</span><span>Observability</span></div>
      </div>

      <div class="agenticDecisionLoop" aria-label="Controlled agentic decision loop">
        <div class="agenticLoopLabel">CONTROLLED DECISION LOOP</div>
        <div class="agenticLoopFlow"><span>Observe Current State</span><span>Choose Next Valid Step</span><span>Check Permission / Policy</span><span>Use Tool</span><span>Verify Result</span><span>Update State</span></div>
        <div class="agenticLoopOutcomes"><div><b>Complete?</b><span>No → repeat from updated state</span></div><div><b>Approval needed?</b><span>Pause → resume from checkpoint</span></div><div><b>Exception?</b><span>Recover → retry / alternate / escalate</span></div><div><b>Yes</b><span>Close workflow with evidence</span></div></div>
      </div>

      <div class="agenticRuntimeGrid">
        <article class="agenticRuntimeCard"><div class="agenticRuntimeCardTop"><span>01</span><small>TRIGGER THE WORKFLOW</small></div><h3>Start from an explicit business event.</h3><p>A CRM status change creates a workflow with a durable identity, initiating user, customer, target start date, and policy context.</p><div class="agenticRuntimeOutput"><b>Created</b><span>Workflow ID</span><span>Initiating user</span><span>Customer</span><span>Target date</span><span>Policy context</span></div></article>
        <article class="agenticRuntimeCard"><div class="agenticRuntimeCardTop"><span>02</span><small>ASSEMBLE CONTEXT</small></div><h3>Build a current snapshot before deciding.</h3><p>Retrieve the customer record, agreement, scope, contacts, target date, account requirements, and open exceptions.</p><div class="agenticRuntimeState"><span>Result</span><b>Context snapshot created</b></div></article>
        <article class="agenticRuntimeCard"><div class="agenticRuntimeCardTop"><span>03</span><small>CHOOSE THE NEXT VALID STEP</small></div><h3>Reason from current state—not from an imaginary full plan.</h3><p>The system identifies that the workspace is missing while owner assignment already exists, so creating the workspace becomes the next valid action.</p><div class="agenticRuntimeState"><span>Decision</span><b>Create workspace first</b></div></article>
        <article class="agenticRuntimeCard agenticToolRuntimeCard"><div class="agenticRuntimeCardTop"><span>04</span><small>SELECT &amp; VALIDATE THE TOOL</small></div><h3>Check the action contract before execution.</h3><p>Validate inputs, identity, required fields, permission, and reversibility before calling the tool.</p><div class="agenticToolChecklist"><span>Input valid ✓</span><span>Identity permitted ✓</span><span>Required fields ✓</span><span>Reversible ✓</span></div></article>
        <article class="agenticRuntimeCard"><div class="agenticRuntimeCardTop"><span>05</span><small>VERIFY THE RESULT</small></div><h3>Tool response is not the same as verified state.</h3><p>Read the system again to confirm the workspace exists, belongs to the right customer, and contains the required template.</p><div class="agenticRuntimeState verified"><span>Verified state</span><b>WORKSPACE_READY</b></div></article>
        <article class="agenticRuntimeCard"><div class="agenticRuntimeCardTop"><span>06</span><small>CONTINUE FROM UPDATED STATE</small></div><h3>Re-evaluate after every meaningful state change.</h3><p>Workspace ready. Access pending. Kickoff pending. The next step is determined from the updated workflow state, not the original request.</p><div class="agenticRuntimeState"><span>Next action</span><b>Provision standard access</b></div></article>
        <article class="agenticRuntimeCard agenticApprovalRuntimeCard"><div class="agenticRuntimeCardTop"><span>07</span><small>PAUSE FOR HUMAN APPROVAL</small></div><h3>Consequential work waits for explicit authority.</h3><p>If elevated permissions are requested, the workflow moves to a durable waiting state and presents the reviewer with the action, context, policy information, and prior workflow state.</p><div class="agenticApprovalChoices"><span>Approve</span><span>Modify</span><span>Reject</span></div></article>
        <article class="agenticRuntimeCard"><div class="agenticRuntimeCardTop"><span>08</span><small>RESUME, ACT &amp; VERIFY</small></div><h3>Resume from the checkpoint—not from the beginning.</h3><p>Once approval is recorded, the workflow continues with the approved scope and verifies the resulting access state.</p><div class="agenticRuntimeState verified"><span>State</span><b>ACCESS_READY</b></div></article>
        <article class="agenticRuntimeCard agenticExceptionRuntimeCard"><div class="agenticRuntimeCardTop"><span>09</span><small>HANDLE AN EXCEPTION</small></div><h3>Failure changes the workflow state instead of being hidden.</h3><p>If calendar integration times out, the workflow remains incomplete and selects a safe recovery path.</p><div class="agenticRecoveryChoices"><span>Retry safely</span><span>Alternate path</span><span>Wait &amp; resume</span><span>Clarify</span><span>Escalate</span></div></article>
        <article class="agenticRuntimeCard agenticCompleteRuntimeCard"><div class="agenticRuntimeCardTop"><span>10</span><small>COMPLETE AGAINST CRITERIA</small></div><h3>Finish only when the required state is actually true.</h3><p>Workspace ready, access provisioned, owner assigned, kickoff scheduled, and required records updated. Only then is the workflow marked complete.</p><div class="agenticCompletionChecklist"><span>Workspace ready ✓</span><span>Access ready ✓</span><span>Owner assigned ✓</span><span>Kickoff scheduled ✓</span><span>Records updated ✓</span></div></article>
      </div>

      <div class="agenticRuntimeClosing">A dependable agentic workflow does not simply keep acting. It knows when to continue, when to wait, when to recover, and when the work is actually done.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.agenticReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Where autonomy should stop</h2><p>Next we’ll define the autonomy boundary—what an agent may do automatically, what requires confirmation or approval, what should remain deterministic, and what must stay human-owned.</p>';

  if (!document.querySelector('#agentic-section3-style')) {
    const style = document.createElement('style');
    style.id = 'agentic-section3-style';
    style.textContent = `
      .agenticRuntime{background:linear-gradient(180deg,#fafbfc,#f8f8fb)}.agenticRuntimeHead .lead{max-width:950px}
      .agenticRunConsole{margin-top:28px;border:1px solid #292d35;border-radius:17px;background:#111318;color:#fff;overflow:hidden;box-shadow:0 15px 36px rgba(13,16,25,.07)}
      .agenticRunTop{display:flex;justify-content:space-between;gap:16px;padding:12px 14px;border-bottom:1px solid #2e323b;background:#15181e}.agenticRunTop span,.agenticRunTop b{font-family:'IBM Plex Mono',monospace;font-size:8.4px;letter-spacing:.08em}.agenticRunTop span{color:#aa94ff}.agenticRunTop b{color:#929aa6;font-weight:500;text-align:right}
      .agenticRunTrigger{display:grid;grid-template-columns:62px 1fr auto;gap:10px;align-items:center;padding:11px 14px;border-bottom:1px solid #2e323b;background:#181523}.agenticRunTrigger>span{font-family:'IBM Plex Mono',monospace;font-size:8px;color:#b8a7ff}.agenticRunTrigger b{font-size:11px}.agenticRunTrigger small{font-size:8.5px;color:#9aa2ae}
      .agenticRunHeader,.agenticRunRows>div{display:grid;grid-template-columns:1.15fr .95fr 1.25fr .9fr;gap:1px}.agenticRunHeader{background:#2c3038}.agenticRunHeader span{background:#171a20;padding:9px 11px;font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:.06em;color:#8f98a4}.agenticRunRows{display:grid;gap:1px;background:#2b2f37}.agenticRunRows>div>*{padding:10px 11px;background:#15181e;font-size:9.5px;line-height:1.4}.agenticRunRows span{color:#c3c9d1}.agenticRunRows b{color:#eee;font-weight:500}.agenticRunRows em{font-style:normal;color:#b7a9e4}.agenticRunRows .agenticRunVerified>*{background:#181523}.agenticRunRows .agenticRunApproval>*{background:#1c1824}.agenticRunRows .agenticRunException>*{background:#211a18}.agenticRunRows .agenticRunComplete>*{background:#17201b}.agenticRunRows .agenticRunComplete b{color:#b8e7c9}
      .agenticRunRails{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:#2d3139;padding-top:1px}.agenticRunRails span{background:#14171d;text-align:center;padding:9px 7px;font-family:'IBM Plex Mono',monospace;font-size:7.8px;color:#b8abdf}
      .agenticDecisionLoop{margin-top:20px;border:1px solid #dedff0;border-radius:15px;background:#fff;padding:14px}.agenticLoopLabel{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em;color:var(--violet)}.agenticLoopFlow{display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin-top:11px}.agenticLoopFlow span{position:relative;border:1px solid #e0e4e9;border-radius:10px;background:#fbfcfe;padding:10px 8px;text-align:center;font-size:9px;line-height:1.35;color:#5f6874}.agenticLoopFlow span:not(:last-child):after{content:'→';position:absolute;right:-9px;top:50%;transform:translateY(-50%);color:#947ee6}.agenticLoopOutcomes{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-top:10px}.agenticLoopOutcomes div{border:1px solid #e3e5ea;border-radius:10px;background:#fafbfc;padding:9px}.agenticLoopOutcomes b{display:block;font-size:9.5px;color:#2d333d}.agenticLoopOutcomes span{display:block;font-size:8.5px;line-height:1.4;color:#7a8390;margin-top:3px}
      .agenticRuntimeGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:24px}.agenticRuntimeCard{border:1px solid #e0e3e8;border-radius:16px;background:#fff;padding:19px;min-width:0}.agenticRuntimeCard.agenticToolRuntimeCard,.agenticRuntimeCard.agenticApprovalRuntimeCard{background:#111318;border-color:#292d35;color:#fff}.agenticRuntimeCard.agenticExceptionRuntimeCard{background:#fffaf7}.agenticRuntimeCard.agenticCompleteRuntimeCard{background:linear-gradient(145deg,#fff,#f8fffb)}
      .agenticRuntimeCardTop{display:flex;align-items:center;justify-content:space-between;gap:12px}.agenticRuntimeCardTop>span{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--violet)}.agenticRuntimeCardTop small{font-family:'IBM Plex Mono',monospace;font-size:8.2px;letter-spacing:.07em;color:#7c8592;text-align:right}.agenticToolRuntimeCard .agenticRuntimeCardTop>span,.agenticApprovalRuntimeCard .agenticRuntimeCardTop>span{color:#a58aff}.agenticToolRuntimeCard .agenticRuntimeCardTop small,.agenticApprovalRuntimeCard .agenticRuntimeCardTop small{color:#969eaa}
      .agenticRuntimeCard h3{font-size:22px;line-height:1.1;letter-spacing:-.03em;margin:14px 0 9px}.agenticRuntimeCard>p{font-size:12px;line-height:1.6;color:var(--body);margin:0}.agenticToolRuntimeCard>p,.agenticApprovalRuntimeCard>p{color:#aeb5c0}
      .agenticRuntimeOutput,.agenticToolChecklist,.agenticApprovalChoices,.agenticRecoveryChoices,.agenticCompletionChecklist{display:flex;gap:6px;flex-wrap:wrap;margin-top:14px;padding-top:13px;border-top:1px solid #e3e6ea}.agenticRuntimeOutput b{width:100%;font-family:'IBM Plex Mono',monospace;font-size:8px;color:#7a8390}.agenticRuntimeOutput span,.agenticToolChecklist span,.agenticApprovalChoices span,.agenticRecoveryChoices span,.agenticCompletionChecklist span{border:1px solid #e0e4e9;border-radius:999px;background:#fbfcfe;padding:6px 8px;font-size:8.8px;color:#67717d}.agenticToolRuntimeCard .agenticToolChecklist,.agenticApprovalRuntimeCard .agenticApprovalChoices{border-color:#30343d}.agenticToolRuntimeCard .agenticToolChecklist span,.agenticApprovalRuntimeCard .agenticApprovalChoices span{background:#171a20;border-color:#343944;color:#b9c0c9}.agenticApprovalRuntimeCard .agenticApprovalChoices span{border-color:#493e70;background:#1b1727;color:#c0b1f6}.agenticExceptionRuntimeCard .agenticRecoveryChoices span{background:#fff;border-color:#eadfd7}.agenticCompleteRuntimeCard .agenticCompletionChecklist span{background:#fff;border-color:#d8e9df;color:#527060}
      .agenticRuntimeState{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-top:14px;padding:10px 11px;border:1px solid #e1e4e9;border-radius:10px;background:#fbfcfe}.agenticRuntimeState span{font-family:'IBM Plex Mono',monospace;font-size:8px;color:#7a8390}.agenticRuntimeState b{font-size:10.5px;color:#5b46a8}.agenticRuntimeState.verified{background:#faf8ff;border-color:#ded8f3}
      .agenticRuntimeClosing{margin-top:24px;padding-top:17px;border-top:1px solid #dfe2e7;font-size:16px;font-weight:700;letter-spacing:-.018em;color:#20242d}
      @media(max-width:950px){.agenticRuntimeGrid{grid-template-columns:1fr}.agenticLoopFlow{grid-template-columns:repeat(3,1fr)}.agenticLoopOutcomes{grid-template-columns:repeat(2,1fr)}.agenticRunHeader,.agenticRunRows>div{grid-template-columns:1.1fr 1fr 1.2fr}.agenticRunHeader span:nth-child(4),.agenticRunRows>div>*:nth-child(4){display:none}}
      @media(max-width:650px){.agenticRunTop{align-items:flex-start;flex-direction:column}.agenticRunTrigger{grid-template-columns:1fr}.agenticRunHeader,.agenticRunRows>div{grid-template-columns:1fr 1fr}.agenticRunHeader span:nth-child(3),.agenticRunRows>div>*:nth-child(3){display:none}.agenticRunRails{grid-template-columns:1fr}.agenticLoopFlow{grid-template-columns:1fr 1fr}.agenticLoopFlow span:after{display:none}.agenticLoopOutcomes{grid-template-columns:1fr}.agenticRuntimeCardTop{align-items:flex-start;flex-direction:column;gap:7px}.agenticRuntimeCardTop small{text-align:left}}
    `;
    document.head.appendChild(style);
  }
})();
