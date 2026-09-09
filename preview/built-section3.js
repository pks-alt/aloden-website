// Built by Aloden content-review layer — Section 3 / Medlivo flagship proof.
(() => {
  const section = document.querySelector('#products');
  if (!section || !document.querySelector('.builtHeroGrid')) return;
  const container = section.querySelector('.container');
  if (!container) return;

  container.innerHTML = `
    <div class="medlivoSectionHead">
      <div>
        <div class="eyebrow">FLAGSHIP PRODUCT</div>
        <img class="medlivoOfficialLogo" src="assets/medlivo-logo.webp" alt="Medlivo">
        <h2 class="h2">From workforce need to operational readiness.</h2>
        <p class="medlivoSupport">Intelligent technology for complex healthcare workforce operations.</p>
      </div>
      <a class="textLink" href="#">Explore Medlivo →</a>
    </div>

    <div class="medlivoIntroGrid">
      <div>
        <p class="medlivoBody">Medlivo brings complex healthcare workforce workflows into one connected product experience—combining intelligence, matching, credentialing, scheduling, and operational coordination around the people and decisions that keep care moving.</p>
        <div class="medlivoWorkflow">Need / Referral → Intelligence → Match → Clinician Passport → Credentialing → Scheduling / Visit → Documentation → Operations</div>
        <div class="medlivoScopeNote">One connected product story across workforce intake, clinician readiness, compliance, scheduling, and downstream operations.</div>
      </div>

      <div class="medlivoPlatform" aria-label="Conceptual Medlivo product flow from workforce need or referral through clinician passport, credentialing, scheduling, documentation, and operations">
        <div class="medlivoPlatformTop">
          <img src="assets/medlivo-logo.webp" alt="" aria-hidden="true">
          <span class="mono">CONNECTED WORKFORCE OPERATIONS</span>
          <span class="medlivoLiveState">Workflow active</span>
        </div>

        <div class="medlivoPlatformShell">
          <aside class="medlivoPlatformRail" aria-hidden="true">
            <b>Workflow</b>
            <span class="active">Intake</span>
            <span>Match</span>
            <span>Passport</span>
            <span>Credential</span>
            <span>Schedule</span>
            <span>Operate</span>
          </aside>

          <div class="medlivoPlatformMain">
            <div class="medlivoLifecycle">
              <span class="done">Need</span>
              <span class="done">Intelligence</span>
              <span class="active">Match</span>
              <span>Passport</span>
              <span>Credential</span>
              <span>Schedule</span>
              <span>Document</span>
              <span>Operate</span>
            </div>

            <div class="medlivoStateGrid">
              <article class="medStateCard medStateIntake">
                <div class="medStateHead"><span>01</span><b>Workforce Need / Referral Intake</b></div>
                <p>Turn incoming demand into structured workflow context.</p>
                <div class="medStateFields">
                  <div><small>Role / care setting</small><strong>Coverage need</strong></div>
                  <div><small>Location / timing</small><strong>Structured</strong></div>
                  <div><small>Requirements</small><strong>Captured</strong></div>
                </div>
                <div class="medStateStatus"><i></i> Ready for intelligence</div>
              </article>

              <article class="medStateCard medStatePassport">
                <div class="medStateHead"><span>02</span><b>AI Matching + Clinician Passport</b></div>
                <p>Bring fit, readiness, and explainable context into one review experience.</p>
                <div class="medPassportProfile">
                  <div class="medPassportAvatar">CP</div>
                  <div><small>BEST-FIT PROFILE</small><strong>Clinician Passport</strong></div>
                  <span class="medPassportBadge">Human review</span>
                </div>
                <div class="medPassportSignals">
                  <span>License ready</span><span>Experience aligned</span><span>Availability fit</span>
                </div>
                <div class="medExplainRows">
                  <div><b>Why this match</b><span>Skills + license + timing</span></div>
                  <div><b>Readiness</b><span>Credential context visible</span></div>
                </div>
              </article>

              <article class="medStateCard medStateCredential">
                <div class="medStateHead"><span>03</span><b>Credentialing &amp; Readiness</b></div>
                <p>Make requirements, approvals, and exceptions visible before assignment.</p>
                <div class="medCredentialList">
                  <div><i class="complete"></i><span>License verification</span><b>Complete</b></div>
                  <div><i class="complete"></i><span>Required documentation</span><b>Reviewed</b></div>
                  <div><i></i><span>Clinical / assignment review</span><b>In review</b></div>
                </div>
                <div class="medReadinessBar"><span></span></div>
              </article>

              <article class="medStateCard medStateOperations">
                <div class="medStateHead"><span>04</span><b>Scheduling / Visit / Operations</b></div>
                <p>Carry the approved workflow into real operational execution.</p>
                <div class="medOpsGrid">
                  <div><small>Assignment / visit</small><strong>Scheduled</strong></div>
                  <div><small>Documentation / EVV</small><strong>Workflow visible</strong></div>
                  <div><small>Approved time</small><strong>Operational status</strong></div>
                  <div><small>Exceptions</small><strong>Human escalation</strong></div>
                </div>
              </article>
            </div>

            <div class="medlivoPlatformFooter">
              <span>Structured inputs</span><i>→</i><span>Explainable intelligence</span><i>→</i><span>Human-controlled readiness</span><i>→</i><span>Operational execution</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="medlivoProofGrid">
      <article class="medlivoProof"><span class="num">01</span><h3>Connected Workflow</h3><strong>Turn fragmented steps into one product experience.</strong><p>Bring workforce needs, referral intake, candidate readiness, credentialing, scheduling, and operational coordination into one connected workflow instead of isolated systems and manual handoffs.</p></article>
      <article class="medlivoProof"><span class="num">02</span><h3>Intelligence at the Decision Point</h3><strong>Use AI where better decisions matter.</strong><p>Apply intelligence to matching, prioritization, workflow guidance, and decision support while keeping the reasoning understandable to the people using the product.</p></article>
      <article class="medlivoProof"><span class="num">03</span><h3>Human Control &amp; Operational Readiness</h3><strong>Automation should support operations, not remove accountability.</strong><p>Design approvals, exception handling, system integrations, and human review into the workflow so the product can operate in complex real-world environments.</p></article>
    </div>

    <div class="medlivoCapabilitiesLine">Product Strategy · Workflow Design · AI Matching · Clinician Passport · Credentialing UX · Scheduling &amp; Operations · Production Architecture</div>`;

  if (!document.querySelector('#built-section3-review-style')) {
    const style = document.createElement('style');
    style.id = 'built-section3-review-style';
    document.head.appendChild(style);
  }

  document.querySelector('#built-section3-review-style').textContent = `
    .medlivoSectionHead{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:24px}
    .medlivoOfficialLogo{width:118px;height:auto;max-height:30px;object-fit:contain;object-position:left center;margin:13px 0 12px}
    .medlivoSectionHead .h2{max-width:780px;margin-bottom:0}
    .medlivoSectionHead .textLink{margin-bottom:4px}
    .medlivoSupport{font-size:18px;line-height:1.38;font-weight:600;letter-spacing:-.022em;color:#20242d;margin:11px 0 0;max-width:620px}
    .medlivoIntroGrid{display:grid;grid-template-columns:.76fr 1.24fr;gap:34px;align-items:start}
    .medlivoBody{font-size:15px;line-height:1.66;color:var(--body);margin:0;max-width:570px}
    .medlivoWorkflow{margin-top:20px;padding:14px 15px;border:1px solid #dedff0;border-radius:11px;background:#fff;font-family:'IBM Plex Mono',monospace;font-size:9.5px;line-height:1.65;color:var(--violet)}
    .medlivoScopeNote{margin-top:12px;font-size:11.5px;line-height:1.55;color:var(--muted);max-width:540px}

    .medlivoPlatform{border:1px solid #dfe3e9;border-radius:18px;background:#fff;box-shadow:0 16px 40px rgba(21,28,45,.055);overflow:hidden}
    .medlivoPlatformTop{height:44px;display:flex;align-items:center;gap:10px;padding:0 13px;border-bottom:1px solid var(--line);background:#fbfcfd}
    .medlivoPlatformTop img{width:90px;max-height:22px;object-fit:contain;object-position:left center}
    .medlivoPlatformTop .mono{font-size:8px;letter-spacing:.07em;color:#7e8794}
    .medlivoLiveState{margin-left:auto;border:1px solid #d8d0fb;border-radius:999px;background:#f7f4ff;color:var(--violet);padding:4px 7px;font-size:7.8px;white-space:nowrap}
    .medlivoPlatformShell{display:grid;grid-template-columns:82px 1fr;min-height:430px}
    .medlivoPlatformRail{background:#10131a;padding:15px 10px;display:grid;align-content:start;gap:7px}
    .medlivoPlatformRail b{font-size:9.5px;color:#fff;margin-bottom:4px}
    .medlivoPlatformRail span{font-size:8px;color:#8f98a6;padding:5px 0;border-left:2px solid transparent;padding-left:7px}
    .medlivoPlatformRail span.active{color:#bba9ff;border-color:#8d69ff}
    .medlivoPlatformMain{padding:14px;background:linear-gradient(180deg,#fff,#fbfcfe)}

    .medlivoLifecycle{display:grid;grid-template-columns:repeat(8,1fr);gap:4px;margin-bottom:12px}
    .medlivoLifecycle span{position:relative;border-top:2px solid #dce1e7;padding-top:8px;text-align:center;font-size:7.3px;color:#7c8591;white-space:nowrap}
    .medlivoLifecycle span:before{content:'';position:absolute;top:-4px;left:50%;transform:translateX(-50%);width:7px;height:7px;border-radius:50%;background:#c9cfd7}
    .medlivoLifecycle span.done{color:#426b66}.medlivoLifecycle span.done:before{background:#45ba9d}
    .medlivoLifecycle span.active{color:#6d44de;font-weight:600}.medlivoLifecycle span.active:before{background:var(--violet)}

    .medlivoStateGrid{display:grid;grid-template-columns:.86fr 1.14fr;gap:9px}
    .medStateCard{border:1px solid #e1e4ea;border-radius:11px;background:#fff;padding:11px;min-width:0;box-shadow:0 7px 18px rgba(24,29,40,.025)}
    .medStatePassport{border-color:#d9d1f7;background:linear-gradient(145deg,#fff,#fbf9ff)}
    .medStateHead{display:flex;align-items:center;gap:7px}
    .medStateHead>span{width:21px;height:21px;display:grid;place-items:center;border-radius:50%;background:#f1edff;color:var(--violet);font-family:'IBM Plex Mono',monospace;font-size:7.8px;flex:none}
    .medStateHead b{font-size:10.5px;line-height:1.22}
    .medStateCard>p{font-size:8.6px;line-height:1.4;color:#7b8491;margin:7px 0 0}

    .medStateFields{display:grid;gap:5px;margin-top:9px}.medStateFields div{border:1px solid #e6e9ee;border-radius:7px;padding:7px;background:#fafbfc}.medStateFields small,.medOpsGrid small{display:block;font-size:7.3px;color:#89929e}.medStateFields strong,.medOpsGrid strong{display:block;font-size:8.8px;margin-top:2px}
    .medStateStatus{margin-top:8px;border-top:1px solid #eceef2;padding-top:7px;font-size:7.8px;color:#5b6b68}.medStateStatus i{display:inline-block;width:6px;height:6px;border-radius:50%;background:#45ba9d;margin-right:5px}

    .medPassportProfile{display:grid;grid-template-columns:31px 1fr auto;gap:7px;align-items:center;margin-top:9px;border:1px solid #e4def8;border-radius:8px;padding:8px;background:#fff}
    .medPassportAvatar{width:31px;height:31px;border-radius:9px;background:linear-gradient(145deg,#18131f,#7c4dff);color:#fff;display:grid;place-items:center;font-size:8.5px;font-weight:700}
    .medPassportProfile small{display:block;font-family:'IBM Plex Mono',monospace;font-size:6.8px;color:#8d78c9;letter-spacing:.06em}.medPassportProfile strong{display:block;font-size:9.5px;margin-top:2px}
    .medPassportBadge{font-size:6.9px;border:1px solid #dfd7f7;background:#f8f5ff;color:#7854d5;border-radius:999px;padding:4px 5px;white-space:nowrap}
    .medPassportSignals{display:flex;gap:4px;flex-wrap:wrap;margin-top:7px}.medPassportSignals span{border:1px solid #e1e5ea;background:#fff;border-radius:999px;padding:4px 6px;font-size:6.9px;color:#65707e}
    .medExplainRows{display:grid;gap:4px;margin-top:7px}.medExplainRows div{display:flex;justify-content:space-between;gap:8px;border-top:1px solid #eceef2;padding-top:5px}.medExplainRows b{font-size:7.5px}.medExplainRows span{font-size:7.2px;color:#858e9a;text-align:right}

    .medCredentialList{display:grid;gap:6px;margin-top:9px}.medCredentialList div{display:grid;grid-template-columns:8px 1fr auto;gap:6px;align-items:center}.medCredentialList i{width:7px;height:7px;border-radius:50%;background:#d6dbe2}.medCredentialList i.complete{background:#45ba9d}.medCredentialList span{font-size:7.8px;color:#66717e}.medCredentialList b{font-size:7.3px;color:#4f5967}
    .medReadinessBar{height:5px;background:#edf0f3;border-radius:99px;margin-top:10px;overflow:hidden}.medReadinessBar span{display:block;width:74%;height:100%;background:linear-gradient(90deg,#45ba9d,#7c4dff);border-radius:99px}

    .medOpsGrid{display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-top:9px}.medOpsGrid div{border:1px solid #e5e8ed;border-radius:7px;padding:7px;background:#fafbfc}

    .medlivoPlatformFooter{display:flex;align-items:center;justify-content:center;gap:7px;flex-wrap:wrap;margin-top:11px;padding-top:9px;border-top:1px solid #e5e8ed;font-family:'IBM Plex Mono',monospace;font-size:6.9px;color:#78818e}.medlivoPlatformFooter i{font-style:normal;color:#9f84eb}

    .medlivoProofGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:28px}
    .medlivoProof{border-top:1px solid var(--line);padding-top:17px}.medlivoProof .num{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--violet)}.medlivoProof h3{font-size:17px;line-height:1.2;margin:10px 0 5px}.medlivoProof strong{display:block;font-size:12.5px;line-height:1.45;color:#20242d;margin-bottom:6px}.medlivoProof p{font-size:12px;line-height:1.55;color:var(--muted);margin:0}
    .medlivoCapabilitiesLine{margin-top:24px;padding-top:16px;border-top:1px solid var(--line);font-family:'IBM Plex Mono',monospace;font-size:9.5px;line-height:1.6;color:var(--violet)}

    @media(max-width:1080px){.medlivoIntroGrid{grid-template-columns:1fr}.medlivoPlatform{max-width:900px}.medlivoProofGrid{grid-template-columns:1fr}}
    @media(max-width:720px){.medlivoSectionHead{align-items:flex-start;flex-direction:column}.medlivoPlatformShell{grid-template-columns:62px 1fr}.medlivoStateGrid{grid-template-columns:1fr}.medlivoLifecycle{grid-template-columns:repeat(4,1fr);row-gap:10px}.medlivoPlatformFooter{justify-content:flex-start}.medlivoPlatformTop .mono{display:none}}
    @media(max-width:480px){.medlivoPlatformRail{display:none}.medlivoPlatformShell{grid-template-columns:1fr}.medlivoOpsGrid{grid-template-columns:1fr}.medlivoWorkflow{font-size:8.8px}}
  `;
})();
