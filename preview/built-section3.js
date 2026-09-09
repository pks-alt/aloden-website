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
        <div class="medlivoWorkflow">Need → Intelligence → Matching → Credentialing → Scheduling → Operations</div>
      </div>
      <div class="medlivoUi" aria-label="Conceptual Medlivo workforce workflow interface">
        <div class="medlivoUiChrome"><i></i><i></i><i></i><span>WORKFORCE INTELLIGENCE</span></div>
        <div class="medlivoUiBody">
          <div class="medlivoRequest"><small>Workforce need</small><b>Coverage request ready for matching</b></div>
          <div class="medlivoUiStats">
            <div><span>Matching</span><b>Evidence-aware</b></div>
            <div><span>Credentialing</span><b>Readiness visible</b></div>
            <div><span>Scheduling</span><b>Workflow connected</b></div>
          </div>
          <div class="medlivoUiFlow"><span>Need</span><span>Intel</span><span>Match</span><span>Credential</span><span>Schedule</span><span>Operate</span></div>
          <div class="medlivoUiRows"><div></div><div></div><div></div></div>
        </div>
      </div>
    </div>
    <div class="medlivoProofGrid">
      <article class="medlivoProof"><span class="num">01</span><h3>Connected Workflow</h3><strong>Turn fragmented steps into one product experience.</strong><p>Bring workforce needs, candidate readiness, credentialing, scheduling, and operational activity into a connected workflow instead of isolated systems and manual handoffs.</p></article>
      <article class="medlivoProof"><span class="num">02</span><h3>Intelligence at the Decision Point</h3><strong>Use AI where better decisions matter.</strong><p>Apply intelligence to matching, prioritization, workflow guidance, and decision support while keeping the reasoning understandable to the people using the product.</p></article>
      <article class="medlivoProof"><span class="num">03</span><h3>Human Control &amp; Operational Readiness</h3><strong>Automation should support operations, not remove accountability.</strong><p>Design approvals, exception handling, system integrations, and human review into the workflow so the product can operate in complex real-world environments.</p></article>
    </div>
    <div class="medlivoCapabilitiesLine">Product Strategy · Workflow Design · AI Product Engineering · Experience Design · Integration · Production Architecture</div>`;

  if (!document.querySelector('#built-section3-review-style')) {
    const style = document.createElement('style');
    style.id = 'built-section3-review-style';
    style.textContent = `
      .medlivoSectionHead{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:24px}
      .medlivoOfficialLogo{width:118px;height:auto;max-height:30px;object-fit:contain;object-position:left center;margin:13px 0 12px}
      .medlivoSectionHead .h2{max-width:780px;margin-bottom:0}
      .medlivoSectionHead .textLink{margin-bottom:4px}
      .medlivoSupport{font-size:18px;line-height:1.38;font-weight:600;letter-spacing:-.022em;color:#20242d;margin:11px 0 0;max-width:620px}
      .medlivoIntroGrid{display:grid;grid-template-columns:.88fr 1.12fr;gap:34px;align-items:start}
      .medlivoBody{font-size:15px;line-height:1.66;color:var(--body);margin:0;max-width:570px}
      .medlivoWorkflow{margin-top:20px;padding:14px 15px;border:1px solid #dedff0;border-radius:11px;background:#fff;font-family:'IBM Plex Mono',monospace;font-size:10px;line-height:1.6;color:var(--violet)}
      .medlivoUi{border:1px solid var(--line);border-radius:17px;background:#fff;box-shadow:0 14px 36px rgba(21,28,45,.05);overflow:hidden}
      .medlivoUiChrome{height:40px;border-bottom:1px solid var(--line);background:#fafbfc;display:flex;align-items:center;padding:0 13px;gap:7px}
      .medlivoUiChrome i{width:7px;height:7px;border-radius:50%;background:#d1d4db}.medlivoUiChrome span{margin-left:5px;font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--muted);letter-spacing:.05em}
      .medlivoUiBody{padding:18px}.medlivoRequest{border:1px solid var(--line);border-radius:11px;padding:13px;background:#fbfcfe}.medlivoRequest small{display:block;font-family:'IBM Plex Mono',monospace;font-size:8.5px;color:var(--violet);letter-spacing:.08em;text-transform:uppercase}.medlivoRequest b{display:block;font-size:13px;margin-top:5px}
      .medlivoUiStats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px}.medlivoUiStats div{border:1px solid var(--line);border-radius:9px;padding:10px;background:#fff}.medlivoUiStats span{display:block;font-size:9px;color:var(--muted)}.medlivoUiStats b{display:block;font-size:11px;margin-top:4px}
      .medlivoUiFlow{display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin-top:14px}.medlivoUiFlow span{position:relative;border-top:2px solid #dedfe5;padding-top:10px;text-align:center;font-size:8.5px;color:#596273}.medlivoUiFlow span:before{content:'';position:absolute;top:-4px;left:50%;transform:translateX(-50%);width:7px;height:7px;border-radius:50%;background:var(--violet)}
      .medlivoUiRows{display:grid;gap:7px;margin-top:14px}.medlivoUiRows div{height:39px;border:1px solid var(--line);border-radius:9px;background:linear-gradient(90deg,#fff,#fafbfc)}
      .medlivoProofGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:28px}.medlivoProof{border-top:1px solid var(--line);padding-top:17px}.medlivoProof .num{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--violet)}.medlivoProof h3{font-size:17px;line-height:1.2;margin:10px 0 5px}.medlivoProof strong{display:block;font-size:12.5px;line-height:1.45;color:#20242d;margin-bottom:6px}.medlivoProof p{font-size:12px;line-height:1.55;color:var(--muted);margin:0}
      .medlivoCapabilitiesLine{margin-top:24px;padding-top:16px;border-top:1px solid var(--line);font-family:'IBM Plex Mono',monospace;font-size:9.5px;line-height:1.6;color:var(--violet)}
      @media(max-width:980px){.medlivoIntroGrid{grid-template-columns:1fr}.medlivoUi{max-width:760px}.medlivoProofGrid{grid-template-columns:1fr}}
      @media(max-width:640px){.medlivoSectionHead{align-items:flex-start;flex-direction:column}.medlivoUiFlow{grid-template-columns:repeat(3,1fr)}.medlivoUiStats{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }
})();
