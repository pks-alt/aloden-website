// Product Modernization content-review layer — Section 5 / modernization priorities.
(() => {
  if (!document.querySelector('.modernizationHero')) return;
  const next = document.querySelector('.modernizationReviewNext');
  if (!next || document.querySelector('#modernization-priorities')) return;

  const section = document.createElement('section');
  section.className = 'modernizationPriorities section';
  section.id = 'modernization-priorities';
  section.innerHTML = `
    <div class="container">
      <div class="modernizationPrioritiesHead">
        <div class="eyebrow">MODERNIZATION PRIORITIES</div>
        <h2 class="h2">Modernize what creates the most value—not what looks the oldest.</h2>
        <p class="lead">A useful modernization roadmap ranks change by product impact, operational pain, technical constraint, dependency risk, and whether the outcome can be measured. The goal is to sequence improvements so each slice creates value while reducing uncertainty for the next one.</p>
      </div>

      <div class="modernizationPrioritySystem" aria-label="Modernization prioritization system using value, pain, constraint, risk, and measurability">
        <div class="modernizationPriorityTop"><span>PRIORITY ENGINE</span><b>VALUE × CONSTRAINT × CHANGE RISK</b></div>
        <div class="modernizationPriorityFactors">
          <article><span>01</span><b>Business Value</b><p>Will this unlock revenue, growth, product capability, strategic flexibility, or meaningful operating leverage?</p></article>
          <article><span>02</span><b>User / Operational Pain</b><p>Does the current experience create repeated friction, manual work, delay, support burden, or avoidable failure?</p></article>
          <article><span>03</span><b>Technical Constraint</b><p>Is architecture, data, integration, reliability, or delivery materially limiting what the product needs to do next?</p></article>
          <article><span>04</span><b>Dependency &amp; Migration Risk</b><p>How tightly is the capability connected to shared data, other services, users, vendors, and downstream workflows?</p></article>
          <article><span>05</span><b>Measurable Outcome</b><p>Can the team verify that the modernization actually improved product behavior, delivery, reliability, or adoption?</p></article>
        </div>
      </div>

      <div class="modernizationPriorityMatrix" aria-label="Modernization priority decision matrix">
        <div class="modernizationMatrixLabel modernizationMatrixY">INCREASING PRODUCT VALUE</div>
        <div class="modernizationMatrixLabel modernizationMatrixX">INCREASING CHANGE / DEPENDENCY RISK →</div>
        <article class="modernizationMatrixCell firstMove"><span>HIGH VALUE · CONTROLLED RISK</span><h3>Modernize first.</h3><p>Meaningful outcome, manageable dependency surface, measurable result.</p><b>Best candidate for an early modernization slice.</b></article>
        <article class="modernizationMatrixCell seamMove"><span>HIGH VALUE · HIGH DEPENDENCY</span><h3>Create the seam first.</h3><p>The capability matters, but changing it directly would create excessive migration or continuity risk.</p><b>Decouple before replacing.</b></article>
        <article class="modernizationMatrixCell preserveMove"><span>STABLE · LOW CONSTRAINT</span><h3>Preserve.</h3><p>The capability still works, remains supportable, and does not materially limit the product.</p><b>Do not spend modernization budget here yet.</b></article>
        <article class="modernizationMatrixCell retireMove"><span>LOW VALUE · HIGH MAINTENANCE</span><h3>Consider retirement.</h3><p>Modernizing a capability with little future value may simply preserve unnecessary complexity.</p><b>Remove the need before rebuilding the implementation.</b></article>
      </div>

      <div class="modernizationSequence">
        <div class="modernizationSequenceIntro">
          <span>ROADMAP LOGIC</span>
          <h3>Sequence product outcomes—not technology projects.</h3>
          <p>Each slice should create an observable improvement and leave the product easier to change than it was before. Technical work sits underneath that outcome rather than becoming the roadmap itself.</p>
        </div>
        <div class="modernizationSequenceFlow">
          <article><span>OUTCOME 01</span><b>Remove a high-friction workflow constraint</b><small>Define the measurable product result</small></article>
          <article><span>ENABLE</span><b>Create the architecture / data / integration seam</b><small>Make safe change possible</small></article>
          <article><span>CHANGE</span><b>Modernize the bounded slice</b><small>Build alongside the current product</small></article>
          <article><span>VERIFY</span><b>Measure behavior, adoption, reliability, and risk</b><small>Expand only when evidence is sufficient</small></article>
          <article><span>NEXT</span><b>Select the next highest-value constraint</b><small>Use what the first slice taught you</small></article>
        </div>
      </div>

      <div class="modernizationRoadmapContrast">
        <div class="modernizationRoadmapBad">
          <span>TECHNOLOGY-LIST ROADMAP</span>
          <h3>Replace the stack.</h3>
          <div><b>Upgrade framework</b><b>Split services</b><b>Migrate database</b><b>Move runtime</b></div>
          <p>These may be necessary implementation tasks, but by themselves they do not explain why the product becomes better.</p>
        </div>
        <div class="modernizationRoadmapGood">
          <span>PRODUCT-OUTCOME ROADMAP</span>
          <h3>Remove the constraints.</h3>
          <div><b>Ship changes safely every week</b><b>Eliminate duplicate workflow steps</b><b>Stabilize partner integration</b><b>Create reliable context for AI</b></div>
          <p>Each outcome has technical work underneath it, but the roadmap stays anchored to product and operating value.</p>
        </div>
      </div>

      <div class="modernizationPrioritiesClosing">A modernization roadmap should be a sequence of product outcomes, not a list of technologies to replace.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.modernizationReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: What a modernized product should make possible</h2><p>Next we’ll define the outcomes modernization should create across product change velocity, experience, integrations, data, reliability, operating visibility, and readiness for AI-enabled workflows.</p>';

  if (!document.querySelector('#modernization-section5-style')) {
    const style = document.createElement('style');
    style.id = 'modernization-section5-style';
    style.textContent = `
      .modernizationPriorities{background:#fff}
      .modernizationPrioritiesHead .lead{max-width:930px}
      .modernizationPrioritySystem{margin-top:28px;border:1px solid #292d35;border-radius:17px;background:#111318;color:#fff;overflow:hidden;box-shadow:0 15px 36px rgba(13,16,25,.06)}
      .modernizationPriorityTop{display:flex;justify-content:space-between;gap:16px;padding:12px 14px;border-bottom:1px solid #2e323b;background:#15181e}.modernizationPriorityTop span,.modernizationPriorityTop b{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em}.modernizationPriorityTop span{color:#aa94ff}.modernizationPriorityTop b{color:#929aa6;font-weight:500;text-align:right}
      .modernizationPriorityFactors{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:#2d3139}.modernizationPriorityFactors article{background:#14171d;padding:15px 13px;min-width:0}.modernizationPriorityFactors span{font-family:'IBM Plex Mono',monospace;font-size:8px;color:#a58aff}.modernizationPriorityFactors b{display:block;font-size:12px;line-height:1.3;color:#f0f2f5;margin-top:8px}.modernizationPriorityFactors p{font-size:9.2px;line-height:1.5;color:#9ea6b1;margin:6px 0 0}
      .modernizationPriorityMatrix{position:relative;display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:28px;padding:25px 0 24px 30px}.modernizationMatrixLabel{position:absolute;font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:.08em;color:#858d99}.modernizationMatrixY{left:-48px;top:50%;transform:rotate(-90deg) translateY(-50%);transform-origin:center}.modernizationMatrixX{left:50%;bottom:0;transform:translateX(-50%);white-space:nowrap}.modernizationMatrixCell{border:1px solid #e1e4e9;border-radius:14px;background:#fbfcfe;padding:17px;min-height:175px}.modernizationMatrixCell.firstMove{background:#111318;border-color:#292d35;color:#fff}.modernizationMatrixCell.seamMove{background:linear-gradient(145deg,#fff,#faf8ff);border-color:#ded7f3}.modernizationMatrixCell.retireMove{background:#fafafa}.modernizationMatrixCell>span{font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:.07em;color:var(--violet)}.modernizationMatrixCell.firstMove>span{color:#aa94ff}.modernizationMatrixCell h3{font-size:23px;line-height:1.08;letter-spacing:-.03em;margin:10px 0 7px}.modernizationMatrixCell p{font-size:11.5px;line-height:1.55;color:var(--body);margin:0}.modernizationMatrixCell.firstMove p{color:#aeb5c0}.modernizationMatrixCell>b{display:block;margin-top:12px;padding-top:11px;border-top:1px solid #e2e5e9;font-size:10px;line-height:1.45;color:#50437c}.modernizationMatrixCell.firstMove>b{border-color:#2f333b;color:#c2b2ff}
      .modernizationSequence{display:grid;grid-template-columns:.78fr 1.22fr;gap:24px;margin-top:34px;border-top:1px solid var(--line);padding-top:26px}.modernizationSequenceIntro>span{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em;color:var(--violet)}.modernizationSequenceIntro h3{font-size:28px;line-height:1.08;letter-spacing:-.035em;margin:9px 0 8px}.modernizationSequenceIntro p{font-size:12px;line-height:1.6;color:var(--body);margin:0;max-width:430px}.modernizationSequenceFlow{display:grid;gap:7px}.modernizationSequenceFlow article{display:grid;grid-template-columns:82px 1fr 180px;gap:12px;align-items:center;border:1px solid #e1e4e9;border-radius:11px;background:#fff;padding:11px 12px}.modernizationSequenceFlow article:nth-child(2),.modernizationSequenceFlow article:nth-child(3){background:#faf8ff;border-color:#e0d9f5}.modernizationSequenceFlow span{font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:.06em;color:var(--violet)}.modernizationSequenceFlow b{font-size:11px;line-height:1.35}.modernizationSequenceFlow small{font-size:9px;line-height:1.4;color:#7d8693}
      .modernizationRoadmapContrast{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:30px}.modernizationRoadmapBad,.modernizationRoadmapGood{border:1px solid #e1e4e9;border-radius:15px;padding:19px}.modernizationRoadmapBad{background:#fafafa}.modernizationRoadmapGood{background:#111318;border-color:#292d35;color:#fff}.modernizationRoadmapBad>span,.modernizationRoadmapGood>span{font-family:'IBM Plex Mono',monospace;font-size:8.2px;letter-spacing:.08em}.modernizationRoadmapBad>span{color:#858d99}.modernizationRoadmapGood>span{color:#aa94ff}.modernizationRoadmapBad h3,.modernizationRoadmapGood h3{font-size:23px;line-height:1.1;letter-spacing:-.03em;margin:9px 0 12px}.modernizationRoadmapBad>div,.modernizationRoadmapGood>div{display:grid;grid-template-columns:1fr 1fr;gap:6px}.modernizationRoadmapBad b,.modernizationRoadmapGood b{border:1px solid #e1e4e9;border-radius:9px;background:#fff;padding:9px;font-size:9.5px;line-height:1.35}.modernizationRoadmapGood b{border-color:#30343d;background:#171a20;color:#d5dae1}.modernizationRoadmapBad p,.modernizationRoadmapGood p{font-size:10.5px;line-height:1.55;margin:13px 0 0}.modernizationRoadmapBad p{color:#747d8a}.modernizationRoadmapGood p{color:#aeb5c0}
      .modernizationPrioritiesClosing{margin-top:26px;padding-top:18px;border-top:1px solid var(--line);font-size:16px;font-weight:700;letter-spacing:-.018em;color:#20242d}
      @media(max-width:980px){.modernizationPriorityFactors{grid-template-columns:1fr 1fr}.modernizationPriorityFactors article:last-child{grid-column:1/-1}.modernizationSequence{grid-template-columns:1fr}.modernizationSequenceFlow article{grid-template-columns:80px 1fr}.modernizationSequenceFlow small{grid-column:2}}
      @media(max-width:700px){.modernizationPriorityTop{flex-direction:column;align-items:flex-start}.modernizationPriorityTop b{text-align:left}.modernizationPriorityFactors{grid-template-columns:1fr}.modernizationPriorityFactors article:last-child{grid-column:auto}.modernizationPriorityMatrix{grid-template-columns:1fr;padding-left:0}.modernizationMatrixY,.modernizationMatrixX{display:none}.modernizationRoadmapContrast{grid-template-columns:1fr}.modernizationRoadmapBad>div,.modernizationRoadmapGood>div{grid-template-columns:1fr}}
      @media(max-width:520px){.modernizationSequenceFlow article{grid-template-columns:1fr}.modernizationSequenceFlow small{grid-column:auto}}
    `;
    document.head.appendChild(style);
  }
})();
