const menuBtn = document.querySelector('.menuBtn');
const navLinks = document.querySelector('.navLinks');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!isOpen));

    if (!isOpen) {
      navLinks.style.display = 'flex';
      navLinks.style.position = 'absolute';
      navLinks.style.left = '16px';
      navLinks.style.right = '16px';
      navLinks.style.top = '68px';
      navLinks.style.background = '#fff';
      navLinks.style.border = '1px solid #e6e8ed';
      navLinks.style.borderRadius = '12px';
      navLinks.style.padding = '14px 16px';
      navLinks.style.flexDirection = 'column';
      navLinks.style.alignItems = 'stretch';
      navLinks.style.gap = '2px';
      navLinks.style.boxShadow = '0 16px 38px rgba(21,28,45,.10)';
    } else {
      navLinks.removeAttribute('style');
    }
  });
}

// Built by Aloden content-review layer — Section 2.
(() => {
  const section = document.querySelector('#discipline');
  if (!section || !document.querySelector('.builtHeroGrid')) return;

  const eyebrow = section.querySelector('.eyebrow');
  if (eyebrow) eyebrow.textContent = 'ONE ENGINEERING DISCIPLINE';
  const h2 = section.querySelector('.h2');
  if (h2) h2.textContent = 'Different products. The same discipline from problem to production.';
  const lead = section.querySelector('.lead');
  if (lead) lead.textContent = 'The domain may change, but the fundamentals do not. Aloden starts with the problem and the people using the product, then connects product definition, experience design, engineering, AI, and production into one continuous discipline.';

  const steps = [
    ['01','Understand the Problem','Know what needs to change.','Define the users, business problem, workflows, constraints, and outcomes before choosing technology.'],
    ['02','Define the Product','Turn the problem into a clear product direction.','Shape priorities, product flows, success criteria, technical boundaries, and the path to delivery.'],
    ['03','Design the Experience','Make complexity understandable.','Design user journeys, interactions, system behavior, AI moments, and human controls around real use.'],
    ['04','Engineer the System','Build the product behind the experience.','Create the architecture, applications, APIs, integrations, data flows, and engineering foundation required for production.'],
    ['05','Add Intelligence & Automation','Use AI where it meaningfully improves the product.','Apply AI, agents, voice, automation, and decision support where they improve outcomes—with the right controls and human review.'],
    ['06','Ship & Evolve','Production is where learning continues.','Deploy, observe, evaluate, learn from users and system behavior, and improve the product with evidence.']
  ];

  const grid = section.querySelector('.disciplineStrip');
  if (grid) {
    grid.classList.add('disciplineDetailed');
    grid.innerHTML = steps.map(([num,title,tagline,text]) => `
      <article class="disciplineCard">
        <span class="disciplineNumber">${num}</span>
        <h3>${title}</h3>
        <strong>${tagline}</strong>
        <p>${text}</p>
      </article>`).join('');
  }

  let closing = section.querySelector('.disciplineClosing');
  if (!closing) {
    closing = document.createElement('div');
    closing.className = 'disciplineClosing';
    section.querySelector('.container')?.appendChild(closing);
  }
  closing.textContent = 'Different domains change the product. They do not change the discipline.';

  if (!document.querySelector('#built-section2-review-style')) {
    const style = document.createElement('style');
    style.id = 'built-section2-review-style';
    style.textContent = `
      #discipline .lead{max-width:850px}
      .disciplineStrip.disciplineDetailed{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;background:transparent;border:0;margin-top:27px}
      .disciplineStrip.disciplineDetailed .disciplineCard{background:#fff;border:1px solid #e3e5ea;border-radius:14px;padding:17px 17px 18px;min-width:0}
      .disciplineNumber{display:block;font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:#7c4dff;letter-spacing:.05em}
      .disciplineCard h3{font-size:16px;line-height:1.2;letter-spacing:-.02em;margin:11px 0 0}
      .disciplineCard strong{display:block;font-size:11.5px;line-height:1.42;color:#20242d;margin-top:7px;font-weight:600}
      .disciplineCard p{font-size:11.5px;line-height:1.52;color:#727b8b;margin:7px 0 0}
      .disciplineClosing{margin-top:22px;padding-top:17px;border-top:1px solid #e6e8ed;font-size:14px;font-weight:650;letter-spacing:-.015em;color:#20242d}
      @media(max-width:960px){.disciplineStrip.disciplineDetailed{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media(max-width:640px){.disciplineStrip.disciplineDetailed{grid-template-columns:1fr}.disciplineCard h3{font-size:15.5px}}
    `;
    document.head.appendChild(style);
  }
})();

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

// Built by Aloden content-review layer — Section 4 / StartupFair product proof.
(() => {
  if (!document.querySelector('.builtHeroGrid') || document.querySelector('#startupfair')) return;
  const supportingGrid = document.querySelector('.supportingGrid');
  const originalSection = supportingGrid?.closest('section.section');
  if (!originalSection) return;

  const startupCard = supportingGrid.querySelector('.supportCard:not(.dark)');
  if (startupCard) startupCard.remove();

  const section = document.createElement('section');
  section.className = 'section startupfairSection';
  section.id = 'startupfair';
  section.innerHTML = `
    <div class="container">
      <div class="startupfairHead">
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
        </div>
        <div class="startupfairUi" aria-label="Conceptual StartupFair challenge-to-opportunity workflow">
          <div class="startupfairUiTop"><span class="sfSquare"></span><b>Innovation Platform</b><span class="mono">CHALLENGE → OPPORTUNITY</span></div>
          <div class="startupfairUiBody">
            <div class="startupfairBrief"><small>Challenge brief</small><b>Define a real problem worth solving</b><span>Problem · context · outcome</span></div>
            <div class="startupfairJourney">
              <div><span>01</span><b>Challenge</b></div><div><span>02</span><b>Builders</b></div><div><span>03</span><b>Solutions</b></div><div><span>04</span><b>Evaluation</b></div><div><span>05</span><b>Opportunity</b></div>
            </div>
            <div class="startupfairArtifacts"><div>Builder workspace</div><div>Solution submitted</div><div>Evaluation ready</div></div>
          </div>
        </div>
      </div>
      <div class="startupfairProofGrid">
        <article class="startupfairProof"><span class="num">01</span><h3>Multi-Sided Product Experience</h3><strong>Design for different users without fragmenting the product.</strong><p>Create connected experiences for organizations defining challenges, builders creating solutions, evaluators reviewing work, and opportunities emerging from the results.</p></article>
        <article class="startupfairProof"><span class="num">02</span><h3>Evidence Over Claims</h3><strong>Make capability visible through real work.</strong><p>Structure the product around challenges, submissions, work artifacts, and evaluation so talent and ideas can be assessed through demonstrated outcomes.</p></article>
        <article class="startupfairProof"><span class="num">03</span><h3>Workflow to Opportunity</h3><strong>Turn activity into a meaningful next step.</strong><p>Connect challenge creation, participation, solution development, evaluation, recognition, and opportunity into one continuous experience.</p></article>
      </div>
      <div class="startupfairCapabilitiesLine">Product Strategy · Marketplace UX · Workflow Design · Evaluation Systems · Community Experience · Product Engineering</div>
    </div>`;
  originalSection.parentNode.insertBefore(section, originalSection);

  if (!document.querySelector('#built-section4-review-style')) {
    const style = document.createElement('style');
    style.id = 'built-section4-review-style';
    style.textContent = `
      .startupfairSection{background:#fff}
      .startupfairHead{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:24px}
      .startupfairOfficialLogo{width:112px;height:auto;max-height:28px;object-fit:contain;object-position:left center;margin:13px 0 12px}
      .startupfairHead .h2{max-width:780px;margin-bottom:0}
      .startupfairHead .textLink{margin-bottom:4px}
      .startupfairSupport{font-size:18px;line-height:1.38;font-weight:600;letter-spacing:-.022em;color:#20242d;margin:11px 0 0;max-width:670px}
      .startupfairIntroGrid{display:grid;grid-template-columns:.86fr 1.14fr;gap:34px;align-items:start}
      .startupfairBody{font-size:15px;line-height:1.66;color:var(--body);margin:0;max-width:575px}
      .startupfairWorkflow{margin-top:20px;padding:14px 15px;border:1px solid #dce7f4;border-radius:11px;background:#fbfdff;font-family:'IBM Plex Mono',monospace;font-size:10px;line-height:1.6;color:#287eb2}
      .startupfairUi{border:1px solid #dfe5ec;border-radius:17px;background:#fff;box-shadow:0 14px 36px rgba(21,28,45,.05);overflow:hidden}
      .startupfairUiTop{height:42px;border-bottom:1px solid var(--line);background:#fbfcfd;display:flex;align-items:center;gap:9px;padding:0 13px}.startupfairUiTop .sfSquare{width:15px;height:15px;border-radius:4px;background:#35aee4;flex:none}.startupfairUiTop b{font-size:11px}.startupfairUiTop .mono{margin-left:auto;font-size:8.5px;color:#6e8292}
      .startupfairUiBody{padding:18px}.startupfairBrief{border-radius:11px;background:linear-gradient(135deg,#0b0d12,#202633 68%,#287eb2 160%);color:#fff;padding:14px}.startupfairBrief small{display:block;font-family:'IBM Plex Mono',monospace;font-size:8.5px;color:#7ed2ff;text-transform:uppercase;letter-spacing:.08em}.startupfairBrief b{display:block;font-size:13px;margin-top:5px}.startupfairBrief span{display:block;font-size:9.5px;color:#bac5cf;margin-top:3px}
      .startupfairJourney{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-top:12px}.startupfairJourney div{border:1px solid var(--line);border-radius:9px;padding:9px 7px;background:#fff}.startupfairJourney span{display:block;font-family:'IBM Plex Mono',monospace;font-size:8px;color:#35aee4}.startupfairJourney b{display:block;font-size:9.5px;margin-top:4px}
      .startupfairArtifacts{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-top:10px}.startupfairArtifacts div{border:1px dashed #ced8e1;border-radius:8px;padding:10px;text-align:center;font-size:9px;color:#667586;background:#fbfdff}
      .startupfairProofGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:28px}.startupfairProof{border-top:1px solid var(--line);padding-top:17px}.startupfairProof .num{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:#35aee4}.startupfairProof h3{font-size:17px;line-height:1.2;margin:10px 0 5px}.startupfairProof strong{display:block;font-size:12.5px;line-height:1.45;color:#20242d;margin-bottom:6px}.startupfairProof p{font-size:12px;line-height:1.55;color:var(--muted);margin:0}
      .startupfairCapabilitiesLine{margin-top:24px;padding-top:16px;border-top:1px solid var(--line);font-family:'IBM Plex Mono',monospace;font-size:9.5px;line-height:1.6;color:#287eb2}
      .supportingGrid:has(.supportCard.dark){grid-template-columns:1fr}.supportingGrid:has(.supportCard.dark) .supportCard.dark{max-width:none}
      @media(max-width:980px){.startupfairIntroGrid{grid-template-columns:1fr}.startupfairUi{max-width:760px}.startupfairProofGrid{grid-template-columns:1fr}}
      @media(max-width:640px){.startupfairHead{align-items:flex-start;flex-direction:column}.startupfairJourney{grid-template-columns:1fr 1fr}.startupfairArtifacts{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }
})();
