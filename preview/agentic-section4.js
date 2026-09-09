// Intelligent Workflow & Agentic Systems content-review layer — Section 4 / autonomy and human control.
(() => {
  if (!document.querySelector('.agenticHero')) return;
  const next = document.querySelector('.agenticReviewNext');
  if (!next || document.querySelector('#autonomy-human-control')) return;

  const section = document.createElement('section');
  section.className = 'agenticAutonomy section';
  section.id = 'autonomy-human-control';
  section.innerHTML = `
    <div class="container">
      <div class="agenticAutonomyHead">
        <div class="eyebrow">AUTONOMY &amp; HUMAN CONTROL</div>
        <h2 class="h2">Give the system enough autonomy to be useful—and no more.</h2>
        <p class="lead">The right level of autonomy depends on the action, not on what the model is technically capable of doing. Low-risk, reversible work may proceed automatically. Higher-impact actions may require confirmation, formal approval, or direct human ownership. The product should make those boundaries explicit before the workflow runs.</p>
      </div>

      <div class="agenticAutonomySystem" aria-label="Decision system for choosing the right level of agentic autonomy and human control">
        <div class="agenticAutonomySystemTop"><span>AUTONOMY DECISION SYSTEM</span><b>CONTROL INCREASES WITH CONSEQUENCE</b></div>
        <div class="agenticAutonomyQuestions">
          <article><span>01</span><b>Impact</b><p>What happens if the action is wrong?</p></article>
          <article><span>02</span><b>Reversibility</b><p>Can the action be safely undone?</p></article>
          <article><span>03</span><b>Confidence</b><p>Does the system have enough evidence to proceed?</p></article>
          <article><span>04</span><b>Authority</b><p>Is the user—and the agent acting for them—allowed to take this action?</p></article>
          <article><span>05</span><b>Accountability</b><p>Does policy, regulation, contract, or judgment require a person to own the decision?</p></article>
        </div>

        <div class="agenticAutonomyLadder" aria-label="Autonomy ladder from deterministic rules to human-owned decisions">
          <div class="agenticAutonomyLadderLabel"><span>MORE AUTOMATION</span><span>MORE HUMAN AUTHORITY</span></div>
          <div class="agenticAutonomyLadderSteps">
            <article><span>LEVEL 1</span><b>Rules</b><small>Deterministic automation</small></article>
            <article><span>LEVEL 2</span><b>Agent Acts</b><small>Bounded autonomy</small></article>
            <article><span>LEVEL 3</span><b>User Confirms</b><small>Explicit intent</small></article>
            <article><span>LEVEL 4</span><b>Approver Decides</b><small>Formal authority</small></article>
            <article class="humanOwnedStep"><span>LEVEL 5</span><b>Human Owns</b><small>Judgment &amp; accountability</small></article>
          </div>
          <div class="agenticAutonomyRiskRail"><span>Impact</span><span>Irreversibility</span><span>Uncertainty</span><span>Sensitivity</span><span>Accountability</span></div>
        </div>
      </div>

      <div class="agenticAutonomyGrid">
        <article class="agenticAutonomyCard">
          <div class="agenticAutonomyTop"><span>01</span><small>DETERMINISTIC AUTOMATION</small></div>
          <h3>Use explicit software when the decision does not need AI.</h3>
          <p>Some workflow steps should be fully deterministic. If the inputs and outcome are known, rules can move the process forward more reliably than model judgment.</p>
          <div class="agenticAutonomyExamples"><span>Create a standard workflow record</span><span>Apply an approved template</span><span>Move to the next known state</span><span>Send an approved internal notification</span></div>
          <div class="agenticAutonomyControl"><b>Control</b><span>Rules define the outcome · no agent judgment required</span></div>
        </article>

        <article class="agenticAutonomyCard agentActsCard">
          <div class="agenticAutonomyTop"><span>02</span><small>AGENT MAY ACT</small></div>
          <h3>Allow bounded autonomy for low-risk, reversible work.</h3>
          <p>The agent can choose among permitted tools and complete the next valid step when the action is inside policy, inputs are complete, resulting state can be verified, and failure is recoverable.</p>
          <div class="agenticAutonomyFlow"><span>Eligible action</span><span>Permission valid</span><span>Execute</span><span>Verify</span><span>Continue</span></div>
          <div class="agenticAutonomyControl"><b>Example</b><span>Create the customer workspace using the approved onboarding template.</span></div>
        </article>

        <article class="agenticAutonomyCard">
          <div class="agenticAutonomyTop"><span>03</span><small>USER CONFIRMATION REQUIRED</small></div>
          <h3>The system may prepare the action, but the user confirms the intent.</h3>
          <p>Use confirmation when the system understands what should happen but the consequence should still be made explicit before execution.</p>
          <div class="agenticConfirmationSpeech">“I’m ready to reschedule the kickoff to Friday at 2:30 PM. Should I make that change?”</div>
          <div class="agenticAutonomyControl"><b>Principle</b><span>Conversational inference is not authorization.</span></div>
        </article>

        <article class="agenticAutonomyCard approvalCard">
          <div class="agenticAutonomyTop"><span>04</span><small>FORMAL APPROVAL REQUIRED</small></div>
          <h3>Pause the workflow when someone with specific authority must decide.</h3>
          <p>The agent can gather context, validate the request, identify policy, and prepare a recommendation, but consequential work waits for a recorded approval.</p>
          <div class="agenticApprovalState"><span>WORKFLOW STATE</span><b>WAITING_FOR_APPROVAL</b></div>
          <div class="agenticApprovalEvidence"><span>Requested action</span><span>Business context</span><span>Current state</span><span>Relevant policy</span><span>Evidence</span><span>Risk / consequence</span><span>Agent recommendation</span></div>
          <div class="agenticApprovalActions"><b>Approve</b><b>Modify</b><b>Reject</b></div>
        </article>

        <article class="agenticAutonomyCard humanDecisionCard">
          <div class="agenticAutonomyTop"><span>05</span><small>HUMAN-OWNED DECISION</small></div>
          <h3>Some decisions should remain human-owned even when AI can generate an answer.</h3>
          <p>Material commitments, contractual interpretation, sensitive personnel decisions, high-impact exceptions, ambiguous policy, irreversible external actions, and other accountability-heavy decisions should not become autonomous by default.</p>
          <div class="agenticHumanAssist"><span>Gather evidence</span><span>Organize context</span><span>Identify options</span><span>Prepare the decision</span><b>Human owns the outcome</b></div>
        </article>
      </div>

      <div class="agenticControlMatrixWrap">
        <div class="agenticControlMatrixLabel">ACTION / CONTROL MATRIX</div>
        <div class="agenticControlMatrixScroller">
          <table class="agenticControlMatrix">
            <thead><tr><th>Action</th><th>Agent role</th><th>Control</th></tr></thead>
            <tbody>
              <tr><td>Read customer record</td><td>Retrieve</td><td>Permission</td></tr>
              <tr><td>Create standard workspace</td><td>Execute + verify</td><td>Bounded autonomy</td></tr>
              <tr><td>Schedule approved kickoff</td><td>Prepare / execute</td><td>Confirmation if needed</td></tr>
              <tr><td>Grant elevated access</td><td>Prepare</td><td>Formal approval</td></tr>
              <tr><td>Override security policy</td><td>Assist only</td><td>Human-owned</td></tr>
              <tr><td>Make contractual commitment</td><td>Context / recommendation</td><td>Human-owned</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <aside class="agenticApprovalWorkflowPanel">
        <div class="agenticApprovalWorkflowLead">
          <span>APPROVAL IS A WORKFLOW STATE</span>
          <h3>Human-in-the-loop should be engineered into the state machine—not added as a popup at the end.</h3>
          <p>When approval is required, the system should know exactly what is waiting, who has authority, how long the workflow may wait, what happens after approval or rejection, and where execution resumes.</p>
        </div>
        <div class="agenticApprovalWorkflowState">
          <div><span>WHAT IS WAITING</span><b>Requested action + current state</b></div>
          <div><span>WHO CAN APPROVE</span><b>Role / identity / authority</b></div>
          <div><span>ON APPROVAL</span><b>Resume from saved checkpoint</b></div>
          <div><span>ON REJECTION</span><b>Redirect, revise, or close</b></div>
          <div><span>WAIT POLICY</span><b>Timeout · reminder · escalation</b></div>
          <div><span>AUDIT</span><b>Decision + actor + timestamp retained</b></div>
        </div>
      </aside>

      <div class="agenticAutonomyClosing">Good agentic engineering is not about removing people from the workflow. It is about placing judgment, authority, and automation where each belongs.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.agenticReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Where agentic systems create value</h2><p>Next we’ll distinguish workflows that benefit from agentic orchestration from work that is better handled with deterministic automation, a single AI capability, or direct human ownership.</p>';

  if (!document.querySelector('#agentic-section4-style')) {
    const style = document.createElement('style');
    style.id = 'agentic-section4-style';
    style.textContent = `
      .agenticAutonomy{background:#fff}
      .agenticAutonomyHead .lead{max-width:940px}
      .agenticAutonomySystem{margin-top:28px;border:1px solid #292d35;border-radius:17px;background:#111318;color:#fff;overflow:hidden;box-shadow:0 14px 36px rgba(13,16,25,.06)}
      .agenticAutonomySystemTop{display:flex;justify-content:space-between;gap:16px;padding:12px 14px;border-bottom:1px solid #2e323b;background:#15181e}.agenticAutonomySystemTop span,.agenticAutonomySystemTop b{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em}.agenticAutonomySystemTop span{color:#aa94ff}.agenticAutonomySystemTop b{color:#929aa6;font-weight:500;text-align:right}
      .agenticAutonomyQuestions{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:7px;padding:14px}.agenticAutonomyQuestions article{border:1px solid #2e333c;border-radius:10px;background:#171a20;padding:10px;min-width:0}.agenticAutonomyQuestions span{font-family:'IBM Plex Mono',monospace;font-size:7.5px;color:#a58aff}.agenticAutonomyQuestions b{display:block;font-size:10.5px;margin-top:5px}.agenticAutonomyQuestions p{font-size:8.7px;line-height:1.45;color:#a5adb8;margin:4px 0 0}
      .agenticAutonomyLadder{border-top:1px solid #2d3139;padding:14px}.agenticAutonomyLadderLabel{display:flex;justify-content:space-between;gap:12px;font-family:'IBM Plex Mono',monospace;font-size:7.6px;letter-spacing:.07em;color:#8e96a2}.agenticAutonomyLadderSteps{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-top:9px}.agenticAutonomyLadderSteps article{position:relative;border:1px solid #30353e;border-radius:10px;background:#171a20;padding:10px;min-height:77px}.agenticAutonomyLadderSteps article:nth-child(2){background:#181821;border-color:#38364a}.agenticAutonomyLadderSteps article:nth-child(3){background:#191724;border-color:#433b5c}.agenticAutonomyLadderSteps article:nth-child(4),.agenticAutonomyLadderSteps .humanOwnedStep{background:#1b1727;border-color:#514476}.agenticAutonomyLadderSteps article:not(:last-child):after{content:'→';position:absolute;right:-8px;top:50%;transform:translateY(-50%);z-index:2;color:#907ae2}.agenticAutonomyLadderSteps span{font-family:'IBM Plex Mono',monospace;font-size:7.2px;color:#a58aff}.agenticAutonomyLadderSteps b{display:block;font-size:11px;margin-top:6px}.agenticAutonomyLadderSteps small{display:block;font-size:8px;color:#9ca4af;margin-top:3px}.agenticAutonomyRiskRail{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-top:8px}.agenticAutonomyRiskRail span{text-align:center;border-top:1px solid #34303f;padding-top:8px;font-family:'IBM Plex Mono',monospace;font-size:7.5px;color:#b2a4d9}
      .agenticAutonomyGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:28px}.agenticAutonomyCard{border:1px solid #e0e3e8;border-radius:16px;background:#fff;padding:19px;min-width:0}.agenticAutonomyCard.agentActsCard{background:linear-gradient(145deg,#fff,#faf8ff);border-color:#ddd7f3}.agenticAutonomyCard.approvalCard{background:#111318;border-color:#292d35;color:#fff}.agenticAutonomyCard.humanDecisionCard{grid-column:1/-1;background:linear-gradient(145deg,#fff,#faf8ff);border-color:#ddd7f3}
      .agenticAutonomyTop{display:flex;justify-content:space-between;align-items:center;gap:12px}.agenticAutonomyTop>span{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--violet)}.agenticAutonomyTop small{font-family:'IBM Plex Mono',monospace;font-size:8.3px;letter-spacing:.07em;color:#7c8592;text-align:right}.approvalCard .agenticAutonomyTop>span{color:#a58aff}.approvalCard .agenticAutonomyTop small{color:#969eaa}
      .agenticAutonomyCard h3{font-size:22px;line-height:1.1;letter-spacing:-.03em;margin:14px 0 9px}.agenticAutonomyCard>p{font-size:12px;line-height:1.6;color:var(--body);margin:0}.approvalCard>p{color:#adb5c0}
      .agenticAutonomyExamples,.agenticAutonomyFlow,.agenticApprovalEvidence,.agenticHumanAssist{display:flex;gap:6px;flex-wrap:wrap;margin-top:14px}.agenticAutonomyExamples span,.agenticAutonomyFlow span,.agenticApprovalEvidence span,.agenticHumanAssist span{border:1px solid #e0e4e9;border-radius:999px;background:#fbfcfe;padding:6px 8px;font-size:8.8px;line-height:1.3;color:#69727f}.agentActsCard .agenticAutonomyFlow span{background:#fff;border-color:#ddd7f3;color:#66598f}.approvalCard .agenticApprovalEvidence span{background:#171a20;border-color:#30343d;color:#b5bdc8}.agenticHumanAssist b{border:1px solid #55437b;border-radius:999px;background:#1b1727;padding:6px 9px;font-size:8.8px;font-weight:600;color:#c3b4fa}
      .agenticAutonomyControl{display:grid;grid-template-columns:78px 1fr;gap:9px;margin-top:14px;padding:10px 11px;border:1px solid #e1e4e9;border-radius:10px;background:#fbfcfe}.agenticAutonomyControl b{font-family:'IBM Plex Mono',monospace;font-size:8px;color:#6d5aae}.agenticAutonomyControl span{font-size:10px;line-height:1.45;color:#65707c}
      .agenticConfirmationSpeech{margin-top:14px;border-left:2px solid var(--violet);border-radius:0 10px 10px 0;background:#faf8ff;padding:12px 14px;font-size:13px;line-height:1.45;font-weight:600;color:#3f3470}
      .agenticApprovalState{margin-top:14px;border:1px solid #4c4070;border-radius:10px;background:#1b1727;padding:10px 11px}.agenticApprovalState span{display:block;font-family:'IBM Plex Mono',monospace;font-size:7.8px;color:#a996f5;letter-spacing:.06em}.agenticApprovalState b{display:block;font-family:'IBM Plex Mono',monospace;font-size:11px;color:#d6ccfb;margin-top:4px}.agenticApprovalActions{display:flex;gap:7px;margin-top:12px}.agenticApprovalActions b{flex:1;text-align:center;border:1px solid #373c45;border-radius:9px;background:#171a20;padding:8px;font-size:9px;color:#c3cad3}
      .agenticControlMatrixWrap{margin-top:28px;border:1px solid #e1e4e9;border-radius:14px;background:#fff;overflow:hidden}.agenticControlMatrixLabel{padding:11px 13px;border-bottom:1px solid var(--line);background:#fbfcfd;font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em;color:var(--violet)}.agenticControlMatrixScroller{overflow-x:auto}.agenticControlMatrix{width:100%;min-width:680px;border-collapse:collapse;text-align:left}.agenticControlMatrix th,.agenticControlMatrix td{padding:12px 13px;border-bottom:1px solid var(--line);font-size:11.5px;line-height:1.42}.agenticControlMatrix thead th{font-weight:700;color:#252b34}.agenticControlMatrix tbody td{color:#68727f}.agenticControlMatrix tbody tr:last-child td{border-bottom:0}
      .agenticApprovalWorkflowPanel{display:grid;grid-template-columns:.85fr 1.15fr;gap:22px;margin-top:28px;border:1px solid #292d35;border-radius:17px;background:#111318;color:#fff;padding:21px}.agenticApprovalWorkflowLead>span{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em;color:#a58aff}.agenticApprovalWorkflowLead h3{font-size:25px;line-height:1.08;letter-spacing:-.034em;margin:9px 0 7px}.agenticApprovalWorkflowLead p{font-size:12px;line-height:1.55;color:#aeb5c0;margin:0}.agenticApprovalWorkflowState{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}.agenticApprovalWorkflowState div{border:1px solid #30343d;border-radius:10px;background:#171a20;padding:10px}.agenticApprovalWorkflowState span{display:block;font-family:'IBM Plex Mono',monospace;font-size:7.5px;letter-spacing:.06em;color:#9c8ce0}.agenticApprovalWorkflowState b{display:block;font-size:9.6px;line-height:1.42;color:#dce1e7;margin-top:4px;font-weight:500}
      .agenticAutonomyClosing{margin-top:24px;padding-top:17px;border-top:1px solid #dfe2e7;font-size:16px;font-weight:700;letter-spacing:-.018em;color:#20242d}
      @media(max-width:980px){.agenticAutonomyQuestions{grid-template-columns:repeat(3,1fr)}.agenticAutonomyGrid{grid-template-columns:1fr}.agenticAutonomyCard.humanDecisionCard{grid-column:auto}.agenticApprovalWorkflowPanel{grid-template-columns:1fr}}
      @media(max-width:720px){.agenticAutonomyLadderSteps{grid-template-columns:1fr}.agenticAutonomyLadderSteps article:after{display:none}.agenticAutonomyRiskRail{grid-template-columns:repeat(2,1fr)}.agenticAutonomyQuestions{grid-template-columns:1fr 1fr}.agenticAutonomySystemTop{align-items:flex-start;flex-direction:column}.agenticApprovalWorkflowState{grid-template-columns:1fr}.agenticAutonomyTop{align-items:flex-start;flex-direction:column;gap:7px}.agenticAutonomyTop small{text-align:left}}
      @media(max-width:480px){.agenticAutonomyQuestions,.agenticAutonomyRiskRail{grid-template-columns:1fr}.agenticAutonomyControl{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }
})();
