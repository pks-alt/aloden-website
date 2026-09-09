// Product Modernization content-review layer — Section 6 / what modernization should enable.
(() => {
  if (!document.querySelector('.modernizationHero')) return;
  const next = document.querySelector('.modernizationReviewNext');
  if (!next || document.querySelector('#modernization-enables')) return;

  const section = document.createElement('section');
  section.className = 'modernizationEnables section soft';
  section.id = 'modernization-enables';
  section.innerHTML = `
    <div class="container">
      <div class="modernizationEnablesHead">
        <div class="eyebrow">WHAT MODERNIZATION SHOULD ENABLE</div>
        <h2 class="h2">The goal is not newer software. It is a product that can move.</h2>
        <p class="lead">Successful modernization should make the product easier to improve, easier to operate, easier to connect, and better prepared for what comes next. The technology matters because of the product capabilities it unlocks.</p>
      </div>

      <div class="modernizationOutcomeSystem" aria-label="Before and after product modernization outcomes">
        <div class="modernizationOutcomeTop"><span>MODERNIZATION OUTCOMES</span><b>PRODUCT CAPABILITY, NOT TECHNOLOGY FOR ITS OWN SAKE</b></div>
        <div class="modernizationOutcomeRows">
          <div><span>Hard to change</span><i>→</i><b>Safer, faster product evolution</b></div>
          <div><span>Workflow shaped by legacy constraints</span><i>→</i><b>Experience designed around users and work</b></div>
          <div><span>Tightly coupled components</span><i>→</i><b>Clearer capability boundaries</b></div>
          <div><span>Fragile point-to-point integrations</span><i>→</i><b>Defined interfaces and contracts</b></div>
          <div><span>Fragmented or inaccessible data</span><i>→</i><b>Reliable product context</b></div>
          <div><span>Limited production visibility</span><i>→</i><b>Observable behavior and operations</b></div>
          <div class="modernizationAiOutcome"><span>AI blocked by product foundations</span><i>→</i><b>AI-ready context, APIs, permissions, and controls</b></div>
        </div>
      </div>

      <div class="modernizationEnableGrid">
        <article class="modernizationEnableCard">
          <div class="modernizationEnableTop"><span>01</span><small>FASTER PRODUCT CHANGE</small></div>
          <h3>Make one improvement without destabilizing everything around it.</h3>
          <p>Clearer boundaries, better tests, safer deployment paths, and more modular product behavior reduce the cost and risk of changing the system.</p>
          <div class="modernizationEnableEvidence"><span>Change isolation</span><span>Release confidence</span><span>Shorter feedback loops</span></div>
        </article>

        <article class="modernizationEnableCard">
          <div class="modernizationEnableTop"><span>02</span><small>BETTER USER &amp; WORKFLOW EXPERIENCE</small></div>
          <h3>Stop forcing users to work around the system.</h3>
          <p>Modernization should remove technical constraints from the experience so people can complete the work with fewer steps, clearer state, and less manual coordination.</p>
          <div class="modernizationEnableEvidence"><span>Fewer workarounds</span><span>Clearer workflow</span><span>Better accessibility</span></div>
        </article>

        <article class="modernizationEnableCard">
          <div class="modernizationEnableTop"><span>03</span><small>CLEARER SYSTEM BOUNDARIES</small></div>
          <h3>Make responsibilities and interfaces easier to understand.</h3>
          <p>Components, services, data ownership, and integrations should have explicit boundaries so teams can evolve one part of the product without accidental coupling elsewhere.</p>
          <div class="modernizationEnableEvidence"><span>Capability boundaries</span><span>Service contracts</span><span>Data ownership</span></div>
        </article>

        <article class="modernizationEnableCard">
          <div class="modernizationEnableTop"><span>04</span><small>MORE RELIABLE PRODUCT DATA</small></div>
          <h3>Turn fragmented information into dependable product context.</h3>
          <p>The product should be able to identify authoritative state, retrieve useful context, support analytics, and provide the data quality needed for intelligent workflows.</p>
          <div class="modernizationEnableEvidence"><span>Source of truth</span><span>Data contracts</span><span>Usable context</span></div>
        </article>

        <article class="modernizationEnableCard">
          <div class="modernizationEnableTop"><span>05</span><small>STRONGER RELIABILITY &amp; OPERATING VISIBILITY</small></div>
          <h3>Make production behavior easier to understand and recover.</h3>
          <p>Teams should be able to see failures, trace product behavior, understand performance, deploy more predictably, and recover without depending on hidden operational knowledge.</p>
          <div class="modernizationEnableEvidence"><span>Observability</span><span>Resilience</span><span>Operational confidence</span></div>
        </article>

        <article class="modernizationEnableCard modernizationEnableAiCard">
          <div class="modernizationEnableTop"><span>06</span><small>READINESS FOR INTELLIGENCE</small></div>
          <h3>Give AI, agentic workflows, and voice a dependable product foundation.</h3>
          <p>Modern APIs, reliable context, workflow state, permissions, event architecture, and evaluation hooks make it possible to add intelligence without asking AI to compensate for a weak product foundation.</p>
          <div class="modernizationEnableEvidence"><span>AI-ready context</span><span>Workflow state</span><span>Permissions &amp; controls</span><span>Evaluation hooks</span></div>
        </article>
      </div>

      <div class="modernizationCapabilityProgression" aria-label="Progression from modern foundation to measurable intelligent product outcomes">
        <div class="modernizationCapabilityProgressionTop"><span>WHAT A MODERN FOUNDATION MAKES POSSIBLE</span></div>
        <div class="modernizationCapabilityFlow">
          <span>Modern Foundation</span><span>Reliable Context</span><span>Connected Workflow</span><span>AI / Agentic / Voice Capability</span><span>Measured Product Outcome</span>
        </div>
      </div>

      <aside class="modernizationMeasurementPanel">
        <div><span>MODERNIZATION IS NOT FINISHED WHEN THE NEW ARCHITECTURE SHIPS.</span><h3>Measure whether the product actually became better.</h3></div>
        <div class="modernizationMeasurementMetrics"><span>Change velocity</span><span>Workflow completion</span><span>Reliability</span><span>User adoption</span><span>Integration stability</span><span>Operating effort</span></div>
      </aside>

      <div class="modernizationEnablesClosing">Modernization succeeds when the product becomes easier to use, easier to change, and better prepared for what comes next.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.modernizationReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Final project CTA</h2><p>Next we’ll close the Product Modernization page with one focused call to action for teams that need to improve an existing product without unnecessary rewrite risk.</p>';

  if (!document.querySelector('#modernization-section6-style')) {
    const style = document.createElement('style');
    style.id = 'modernization-section6-style';
    style.textContent = `
      .modernizationEnables{background:linear-gradient(180deg,#fafbfc 0%,#f8f8fb 100%)}
      .modernizationEnablesHead .lead{max-width:930px}
      .modernizationOutcomeSystem{margin-top:28px;border:1px solid #292d35;border-radius:17px;background:#111318;color:#fff;overflow:hidden;box-shadow:0 15px 36px rgba(13,16,25,.06)}
      .modernizationOutcomeTop{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:12px 14px;border-bottom:1px solid #2d3139;background:#15181e}.modernizationOutcomeTop span,.modernizationOutcomeTop b{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em}.modernizationOutcomeTop span{color:#aa94ff}.modernizationOutcomeTop b{color:#939ba7;font-weight:500;text-align:right}
      .modernizationOutcomeRows{display:grid;grid-template-columns:1fr 1fr}.modernizationOutcomeRows>div{display:grid;grid-template-columns:1fr 28px 1.15fr;gap:8px;align-items:center;padding:12px 14px;border-bottom:1px solid #292d35}.modernizationOutcomeRows>div:nth-child(odd){border-right:1px solid #292d35}.modernizationOutcomeRows>div:nth-last-child(-n+2){border-bottom:0}.modernizationOutcomeRows .modernizationAiOutcome{grid-column:1/-1;border-right:0;background:#181523}.modernizationOutcomeRows span{font-size:10px;line-height:1.45;color:#9fa7b2}.modernizationOutcomeRows i{font-style:normal;text-align:center;color:#8f78e7}.modernizationOutcomeRows b{font-size:10.5px;line-height:1.4;color:#eef1f5;font-weight:500}.modernizationAiOutcome b{color:#c9bbff}
      .modernizationEnableGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:28px}.modernizationEnableCard{border:1px solid #e0e3e8;border-radius:16px;background:#fff;padding:20px;min-width:0}.modernizationEnableAiCard{background:linear-gradient(145deg,#fff,#faf8ff);border-color:#ddd7f3}.modernizationEnableTop{display:flex;align-items:center;justify-content:space-between;gap:12px}.modernizationEnableTop>span{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--violet)}.modernizationEnableTop small{font-family:'IBM Plex Mono',monospace;font-size:8.3px;letter-spacing:.07em;color:#7c8592;text-align:right}.modernizationEnableCard h3{font-size:23px;line-height:1.1;letter-spacing:-.032em;margin:14px 0 9px;max-width:600px}.modernizationEnableCard>p{font-size:12.5px;line-height:1.62;color:var(--body);margin:0}.modernizationEnableEvidence{display:flex;gap:6px;flex-wrap:wrap;margin-top:15px;padding-top:13px;border-top:1px solid #e3e6ea}.modernizationEnableEvidence span{border:1px solid #e0e4e9;border-radius:999px;background:#fbfcfe;padding:6px 8px;font-size:8.8px;color:#66707c}.modernizationEnableAiCard .modernizationEnableEvidence span{background:#fff;border-color:#ded8f3;color:#695a95}
      .modernizationCapabilityProgression{margin-top:28px;border:1px solid #ded8f3;border-radius:16px;background:linear-gradient(145deg,#fff,#faf8ff);padding:16px}.modernizationCapabilityProgressionTop span{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em;color:#6955ad}.modernizationCapabilityFlow{display:grid;grid-template-columns:repeat(5,1fr);gap:7px;margin-top:12px}.modernizationCapabilityFlow span{position:relative;border:1px solid #dfdaf0;border-radius:10px;background:#fff;padding:11px 10px;font-size:9.5px;line-height:1.35;color:#4b4561;text-align:center;font-weight:600}.modernizationCapabilityFlow span:not(:last-child):after{content:'→';position:absolute;right:-9px;top:50%;transform:translateY(-50%);color:#8f78e7;z-index:2}
      .modernizationMeasurementPanel{display:grid;grid-template-columns:.9fr 1.1fr;gap:24px;margin-top:28px;border:1px solid #292d35;border-radius:17px;background:#111318;color:#fff;padding:22px}.modernizationMeasurementPanel>div:first-child>span{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em;color:#a58aff}.modernizationMeasurementPanel h3{font-size:25px;line-height:1.08;letter-spacing:-.034em;margin:9px 0 0}.modernizationMeasurementMetrics{display:flex;gap:7px;flex-wrap:wrap;align-content:center}.modernizationMeasurementMetrics span{border:1px solid #343944;border-radius:999px;background:#171a20;padding:7px 9px;font-size:9px;color:#bcc3cc}
      .modernizationEnablesClosing{margin-top:24px;padding-top:17px;border-top:1px solid #dfe2e7;font-size:16px;font-weight:700;letter-spacing:-.018em;color:#20242d}
      @media(max-width:900px){.modernizationOutcomeRows,.modernizationEnableGrid{grid-template-columns:1fr}.modernizationOutcomeRows>div,.modernizationOutcomeRows>div:nth-child(odd),.modernizationOutcomeRows>div:nth-last-child(-n+2){border-right:0;border-bottom:1px solid #292d35}.modernizationOutcomeRows .modernizationAiOutcome{grid-column:auto}.modernizationOutcomeRows>div:last-child{border-bottom:0}.modernizationCapabilityFlow{grid-template-columns:1fr 1fr}.modernizationCapabilityFlow span:after{display:none}.modernizationMeasurementPanel{grid-template-columns:1fr}}
      @media(max-width:620px){.modernizationOutcomeTop{align-items:flex-start;flex-direction:column}.modernizationOutcomeRows>div{grid-template-columns:1fr}.modernizationOutcomeRows i{text-align:left}.modernizationEnableCard{padding:17px}.modernizationEnableTop{align-items:flex-start;flex-direction:column;gap:7px}.modernizationEnableTop small{text-align:left}.modernizationCapabilityFlow{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }
})();
