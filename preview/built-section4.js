// Built by Aloden content-review layer — Section 4 / StartupFair product proof.
(() => {
  const section = [...document.querySelectorAll('section.section')].find(sec => sec.querySelector('.supportingGrid'));
  if (!section || !document.querySelector('.builtHeroGrid')) return;
  const container = section.querySelector('.container');
  if (!container) return;

  container.innerHTML = `
    <div class="startupfairSectionHead">
      <div>
        <div class="eyebrow">PRODUCT PROOF</div>
        <img class="startupfairOfficialLogo" src="assets/startupfair-logo.webp" alt="StartupFair">
        <h2 class="h2">Turn real challenges into visible opportunity.</h2>
        <p class="startupfairSupport">An innovation platform connecting organizations, builders, solutions, and evaluation.</p>
      </div>
      <a class="textLink" href="#">Explore StartupFair →</a>
    </div>

    <div class="startupfairIntroGrid">
      <div>
        <p class="startupfairBody">StartupFair brings real-world challenges, people with the skills to solve them, working solutions, and structured evaluation into one connected product experience—making capability easier to discover through what people actually build.</p>
        <div class="startupfairWorkflow">Challenge → Builders → Solutions → Evaluation → Opportunity</div>
        <div class="startupfairAudience"><span>Organizations</span><span>Builders</span><span>Evaluators</span></div>
      </div>

      <div class="startupfairUi" aria-label="Conceptual StartupFair challenge, builder, submission, evaluation, and opportunity workflow">
        <div class="startupfairUiTop">
          <img src="assets/startupfair-logo.webp" alt="" aria-hidden="true">
          <span class="startupfairUiMode">CHALLENGE WORKSPACE</span>
          <span class="startupfairUiRole">BUILDER VIEW</span>
        </div>
        <div class="startupfairUiShell">
          <aside class="startupfairRail">
            <b>Discover</b>
            <span>Challenges</span>
            <span>Workspace</span>
            <span>Submissions</span>
            <span>Evaluation</span>
            <span>Opportunities</span>
          </aside>
          <div class="startupfairWorkspace">
            <div class="startupfairChallengeCard">
              <div><small>OPEN CHALLENGE</small><h3>AI Clinician Matching Challenge</h3></div>
              <span class="startupfairStatus">In build</span>
            </div>
            <div class="startupfairWorkspaceGrid">
              <div class="startupfairBuildPanel">
                <span class="panelLabel">BUILDER WORKSPACE</span>
                <b>Build, document, and submit the solution.</b>
                <div class="startupfairArtifacts"><span>Demo</span><span>Architecture</span><span>Work sample</span></div>
              </div>
              <div class="startupfairEvalPanel">
                <span class="panelLabel">EVALUATION</span>
                <b>Structured review</b>
                <div class="startupfairScoreLines"><i></i><i></i><i></i></div>
              </div>
            </div>
            <div class="startupfairFlowUi">
              <span class="done">Challenge</span><span class="done">Builders</span><span class="active">Solution</span><span>Evaluation</span><span>Opportunity</span>
            </div>
            <div class="startupfairControls"><span>Eligibility</span><span>AI disclosure</span><span>IP &amp; confidentiality terms</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="startupfairProofGrid">
      <article class="startupfairProof"><span class="num">01</span><h3>Multi-Sided Product Experience</h3><strong>Design for different users without fragmenting the product.</strong><p>Create connected experiences for organizations defining challenges, builders creating solutions, evaluators reviewing work, and opportunities emerging from the results.</p></article>
      <article class="startupfairProof"><span class="num">02</span><h3>Evidence Over Claims</h3><strong>Make capability visible through real work.</strong><p>Structure the product around challenges, submissions, work artifacts, and evaluation so talent and ideas can be assessed through demonstrated outcomes.</p></article>
      <article class="startupfairProof"><span class="num">03</span><h3>Workflow to Opportunity</h3><strong>Turn activity into a meaningful next step.</strong><p>Connect challenge creation, participation, solution development, evaluation, recognition, and opportunity into one continuous experience.</p></article>
    </div>

    <div class="startupfairCapabilitiesLine">Product Strategy · Marketplace UX · Workflow Design · Evaluation Systems · Community Experience · Product Engineering</div>`;

  if (!document.querySelector('#built-section4-review-style')) {
    const style = document.createElement('style');
    style.id = 'built-section4-review-style';
    style.textContent = `
      .startupfairSectionHead{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:24px}
      .startupfairOfficialLogo{width:112px;height:auto;max-height:28px;object-fit:contain;object-position:left center;margin:13px 0 12px}
      .startupfairSectionHead .h2{max-width:780px;margin-bottom:0}
      .startupfairSectionHead .textLink{margin-bottom:4px}
      .startupfairSupport{font-size:18px;line-height:1.38;font-weight:600;letter-spacing:-.022em;color:#20242d;margin:11px 0 0;max-width:700px}
      .startupfairIntroGrid{display:grid;grid-template-columns:.82fr 1.18fr;gap:34px;align-items:start}
      .startupfairBody{font-size:15px;line-height:1.66;color:var(--body);margin:0;max-width:570px}
      .startupfairWorkflow{margin-top:20px;padding:14px 15px;border:1px solid #dce9f5;border-radius:11px;background:linear-gradient(135deg,#fff,#f7fbff);font-family:'IBM Plex Mono',monospace;font-size:10px;line-height:1.6;color:#318fc1}
      .startupfairAudience{display:flex;gap:7px;flex-wrap:wrap;margin-top:12px}.startupfairAudience span{border:1px solid #dfe6ed;border-radius:999px;padding:6px 9px;font-size:9.5px;color:#667080;background:#fff}
      .startupfairUi{border:1px solid #dfe5eb;border-radius:17px;background:#fff;box-shadow:0 14px 36px rgba(21,28,45,.05);overflow:hidden}
      .startupfairUiTop{height:44px;border-bottom:1px solid var(--line);background:#fbfdff;display:flex;align-items:center;padding:0 13px;gap:10px}.startupfairUiTop img{width:92px;max-height:22px;object-fit:contain}.startupfairUiMode{font-family:'IBM Plex Mono',monospace;font-size:8.5px;color:#7b8592;letter-spacing:.06em}.startupfairUiRole{margin-left:auto;border:1px solid #cfeafa;background:#f2fbff;color:#2497cc;border-radius:999px;padding:4px 7px;font-family:'IBM Plex Mono',monospace;font-size:7.8px;letter-spacing:.06em}
      .startupfairUiShell{display:grid;grid-template-columns:96px 1fr;min-height:320px}.startupfairRail{background:#10141a;padding:16px 11px;display:grid;align-content:start;gap:8px}.startupfairRail b{font-size:10px;color:#fff;margin-bottom:4px}.startupfairRail span{font-size:8.5px;color:#9ea7b4;padding:5px 0}.startupfairRail span:nth-of-type(3){color:#58c4f1}
      .startupfairWorkspace{padding:15px;background:linear-gradient(180deg,#fff,#fbfcfe)}
      .startupfairChallengeCard{display:flex;justify-content:space-between;gap:14px;align-items:flex-start;border:1px solid var(--line);border-radius:11px;padding:12px;background:#fff}.startupfairChallengeCard small{display:block;font-family:'IBM Plex Mono',monospace;font-size:7.8px;color:#34aee0;letter-spacing:.09em}.startupfairChallengeCard h3{font-size:13px;line-height:1.25;margin:5px 0 0}.startupfairStatus{border-radius:999px;background:#eef9ff;color:#2b9dce;border:1px solid #d5eef9;padding:5px 7px;font-size:8px;white-space:nowrap}
      .startupfairWorkspaceGrid{display:grid;grid-template-columns:1.35fr .65fr;gap:8px;margin-top:9px}.startupfairBuildPanel,.startupfairEvalPanel{border:1px solid var(--line);border-radius:10px;padding:11px;background:#fff}.panelLabel{display:block;font-family:'IBM Plex Mono',monospace;font-size:7.7px;letter-spacing:.08em;color:#7d8794}.startupfairBuildPanel b,.startupfairEvalPanel b{display:block;font-size:10.5px;margin-top:5px}.startupfairArtifacts{display:flex;gap:5px;flex-wrap:wrap;margin-top:9px}.startupfairArtifacts span{border:1px solid #dfe4ea;border-radius:7px;padding:6px 7px;font-size:8px;color:#667080;background:#fafcfe}.startupfairScoreLines{display:grid;gap:6px;margin-top:10px}.startupfairScoreLines i{height:5px;border-radius:99px;background:#e6e9ee}.startupfairScoreLines i:nth-child(1){width:88%;background:#60c6ef}.startupfairScoreLines i:nth-child(2){width:72%;background:#7c4dff}.startupfairScoreLines i:nth-child(3){width:80%;background:#ccd3db}
      .startupfairFlowUi{display:grid;grid-template-columns:repeat(5,1fr);gap:5px;margin-top:11px}.startupfairFlowUi span{position:relative;border-top:2px solid #dce1e7;padding-top:9px;text-align:center;font-size:7.8px;color:#7b8491}.startupfairFlowUi span:before{content:'';position:absolute;top:-4px;left:50%;transform:translateX(-50%);width:7px;height:7px;border-radius:50%;background:#c9cfd7}.startupfairFlowUi span.done{color:#3a829f}.startupfairFlowUi span.done:before{background:#50bfe9}.startupfairFlowUi span.active{color:#6c43de;font-weight:600}.startupfairFlowUi span.active:before{background:#7c4dff}
      .startupfairControls{display:flex;gap:6px;flex-wrap:wrap;margin-top:12px}.startupfairControls span{border:1px solid #e0e4e9;border-radius:7px;background:#fff;padding:6px 7px;font-size:7.8px;color:#78818e}
      .startupfairProofGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:28px}.startupfairProof{border-top:1px solid var(--line);padding-top:17px}.startupfairProof .num{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:#34aee0}.startupfairProof h3{font-size:17px;line-height:1.2;margin:10px 0 5px}.startupfairProof strong{display:block;font-size:12.5px;line-height:1.45;color:#20242d;margin-bottom:6px}.startupfairProof p{font-size:12px;line-height:1.55;color:var(--muted);margin:0}
      .startupfairCapabilitiesLine{margin-top:24px;padding-top:16px;border-top:1px solid var(--line);font-family:'IBM Plex Mono',monospace;font-size:9.5px;line-height:1.6;color:#318fc1}
      @media(max-width:980px){.startupfairIntroGrid{grid-template-columns:1fr}.startupfairUi{max-width:780px}.startupfairProofGrid{grid-template-columns:1fr}}
      @media(max-width:640px){.startupfairSectionHead{align-items:flex-start;flex-direction:column}.startupfairUiShell{grid-template-columns:72px 1fr}.startupfairWorkspaceGrid{grid-template-columns:1fr}.startupfairFlowUi{grid-template-columns:repeat(3,1fr)}.startupfairUiTop .startupfairUiMode{display:none}}
    `;
    document.head.appendChild(style);
  }
})();
