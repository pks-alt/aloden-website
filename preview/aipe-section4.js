// AI Product Engineering content-review layer — Section 4 / prototype to dependable product.
(() => {
  if (!document.querySelector('.aipeHero')) return;
  const next = document.querySelector('.aipeReviewNext');
  if (!next || document.querySelector('#prototype-to-product')) return;

  const section = document.createElement('section');
  section.className = 'aipePrototype section';
  section.id = 'prototype-to-product';
  section.innerHTML = `
    <div class="container">
      <div class="aipePrototypeHead">
        <div class="eyebrow">FROM PROTOTYPE TO PRODUCT</div>
        <h2 class="h2">The hard part begins after the demo works.</h2>
        <p class="lead">A prototype can prove that an AI idea is possible. A real product has to work consistently across users, workflows, systems, edge cases, permissions, failures, costs, and changing models. AI Product Engineering is what closes that gap.</p>
      </div>

      <div class="aipePrototypeMatrix" aria-label="Transformation from AI prototype to production product">
        <div class="aipePrototypeMatrixTop"><span>PROTOTYPE</span><i>→</i><b>PRODUCTION PRODUCT</b></div>
        <div class="aipePrototypeMatrixBody">
          <div><span>Prompt</span><i>→</i><b>Workflow</b></div>
          <div><span>Response</span><i>→</i><b>Decision</b></div>
          <div><span>Static context</span><i>→</i><b>Governed context</b></div>
          <div><span>Happy path</span><i>→</i><b>Exception handling</b></div>
          <div><span>Manual testing</span><i>→</i><b>Continuous evaluation</b></div>
          <div><span>Model dependency</span><i>→</i><b>Adaptable architecture</b></div>
        </div>
        <div class="aipeProductionBar"><span>Product State</span><span>Permissions</span><span>Data</span><span>Integrations</span><span>Evaluation</span><span>Human Control</span><span>Observability</span></div>
      </div>

      <div class="aipePrototypeGrid">
        <article class="aipePrototypeCard">
          <div class="aipePrototypeTop"><span>01</span><small>PROMPT → PRODUCT BEHAVIOR</small></div>
          <div class="aipePrototypeCompare"><div><b>Prototype</b><p>A prompt produces an impressive response.</p></div><div><b>Production product</b><p>AI behavior is embedded inside a defined workflow with product state, rules, permissions, confirmations, and fallback behavior.</p></div></div>
          <div class="aipeEngineeringShift"><span>Engineering shift</span><b>Prompt logic → orchestrated product behavior</b></div>
        </article>

        <article class="aipePrototypeCard">
          <div class="aipePrototypeTop"><span>02</span><small>MODEL OUTPUT → CONTROLLED DECISION</small></div>
          <div class="aipePrototypeCompare"><div><b>Prototype</b><p>The model generates an answer or recommendation.</p></div><div><b>Production product</b><p>The system determines what AI may recommend, what it may act on, what requires validation, and when human judgment takes over.</p></div></div>
          <div class="aipeEngineeringShift"><span>Engineering shift</span><b>Generation → decision architecture</b></div>
        </article>

        <article class="aipePrototypeCard">
          <div class="aipePrototypeTop"><span>03</span><small>STATIC CONTEXT → GOVERNED CONTEXT</small></div>
          <div class="aipePrototypeCompare"><div><b>Prototype</b><p>A few documents or sample records are supplied to the model.</p></div><div><b>Production product</b><p>Context comes from governed data, retrieval, application state, permissions, business rules, and connected systems.</p></div></div>
          <div class="aipeEngineeringShift"><span>Engineering shift</span><b>Prompt context → context architecture</b></div>
        </article>

        <article class="aipePrototypeCard darkPrototypeCard">
          <div class="aipePrototypeTop"><span>04</span><small>HAPPY PATH → REAL-WORLD EXCEPTIONS</small></div>
          <div class="aipePrototypeCompare"><div><b>Prototype</b><p>The main scenario works.</p></div><div><b>Production product</b><p>Ambiguity, missing information, tool failures, unavailable systems, invalid actions, low-confidence outcomes, and unusual user behavior have defined responses.</p></div></div>
          <div class="aipeEngineeringShift"><span>Engineering shift</span><b>Demo flow → resilient workflow</b></div>
        </article>

        <article class="aipePrototypeCard">
          <div class="aipePrototypeTop"><span>05</span><small>ONE-TIME TESTING → CONTINUOUS EVALUATION</small></div>
          <div class="aipePrototypeCompare"><div><b>Prototype</b><p>A team manually checks a few outputs.</p></div><div><b>Production product</b><p>Quality, behavior, reliability, latency, cost, failures, and workflow outcomes can be measured across versions and real usage.</p></div></div>
          <div class="aipeEngineeringShift"><span>Engineering shift</span><b>Spot checking → evaluation + observability</b></div>
        </article>

        <article class="aipePrototypeCard">
          <div class="aipePrototypeTop"><span>06</span><small>MODEL DEPENDENCY → PRODUCT ARCHITECTURE</small></div>
          <div class="aipePrototypeCompare"><div><b>Prototype</b><p>The solution is tightly coupled to one model or vendor.</p></div><div><b>Production product</b><p>Model choice is one architectural decision among many. The system can evolve as models, economics, latency, and capabilities change.</p></div></div>
          <div class="aipeEngineeringShift"><span>Engineering shift</span><b>Model implementation → adaptable product architecture</b></div>
        </article>
      </div>

      <div class="aipePrototypeClosing">A demo proves possibility. A product proves dependability.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);

  const nextInner = next.querySelector('.aipeReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Where AI Product Engineering creates the most value</h2><p>Next we’ll show the product situations where this discipline is most useful—new AI products, intelligence added to existing workflows, AI-enabled modernization, and products where reliability and human control matter.</p>';

  if (!document.querySelector('#aipe-section4-style')) {
    const style = document.createElement('style');
    style.id = 'aipe-section4-style';
    style.textContent = `
      .aipePrototype{background:#fff}
      .aipePrototypeHead .lead{max-width:900px}
      .aipePrototypeMatrix{margin-top:28px;border:1px solid #e1e4e9;border-radius:16px;background:#fff;overflow:hidden;box-shadow:0 10px 30px rgba(21,28,45,.025)}
      .aipePrototypeMatrixTop{display:grid;grid-template-columns:1fr 44px 1fr;align-items:center;padding:12px 14px;border-bottom:1px solid var(--line);background:#fbfcfd;font-family:'IBM Plex Mono',monospace;font-size:8.8px;letter-spacing:.08em}.aipePrototypeMatrixTop span{color:#747d89}.aipePrototypeMatrixTop i{text-align:center;font-style:normal;color:var(--violet)}.aipePrototypeMatrixTop b{color:var(--violet);font-weight:500;text-align:right}
      .aipePrototypeMatrixBody{display:grid;gap:1px;background:#e9ebef}.aipePrototypeMatrixBody>div{display:grid;grid-template-columns:1fr 44px 1fr;align-items:center;background:#fff;padding:11px 14px}.aipePrototypeMatrixBody span,.aipePrototypeMatrixBody b{font-size:11.5px;line-height:1.35}.aipePrototypeMatrixBody span{color:#6c7581}.aipePrototypeMatrixBody i{text-align:center;font-style:normal;color:#8a6fff}.aipePrototypeMatrixBody b{color:#232832;font-weight:600;text-align:right}
      .aipeProductionBar{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:1px;background:#2a2e36;padding-top:1px}.aipeProductionBar span{background:#12151b;color:#c2c8d1;text-align:center;padding:10px 6px;font-family:'IBM Plex Mono',monospace;font-size:8px;line-height:1.3}
      .aipePrototypeGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:28px}.aipePrototypeCard{border:1px solid #e1e4e9;border-radius:16px;background:#fff;padding:19px;min-width:0}.aipePrototypeCard.darkPrototypeCard{background:#111318;border-color:#292d35;color:#fff}
      .aipePrototypeTop{display:flex;align-items:center;justify-content:space-between;gap:14px}.aipePrototypeTop>span{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--violet)}.aipePrototypeTop small{font-family:'IBM Plex Mono',monospace;font-size:8.3px;letter-spacing:.07em;color:#7c8592;text-align:right}.darkPrototypeCard .aipePrototypeTop>span{color:#a58aff}.darkPrototypeCard .aipePrototypeTop small{color:#969eaa}
      .aipePrototypeCompare{display:grid;grid-template-columns:.78fr 1.22fr;gap:10px;margin-top:15px}.aipePrototypeCompare>div{border:1px solid #e1e4e9;border-radius:11px;background:#fbfcfe;padding:11px}.aipePrototypeCompare>div:nth-child(2){background:linear-gradient(150deg,#fff,#faf8ff);border-color:#ddd7f5}.aipePrototypeCompare b{display:block;font-size:10.5px;color:#252b34}.aipePrototypeCompare p{font-size:10.5px;line-height:1.5;color:#727c89;margin:5px 0 0}.darkPrototypeCard .aipePrototypeCompare>div{background:#171a20;border-color:#30343d}.darkPrototypeCard .aipePrototypeCompare>div:nth-child(2){background:#1b1727;border-color:#493e70}.darkPrototypeCard .aipePrototypeCompare b{color:#e5e8ed}.darkPrototypeCard .aipePrototypeCompare p{color:#aab2be}
      .aipeEngineeringShift{margin-top:12px;padding-top:11px;border-top:1px solid #e4e6ea;display:grid;grid-template-columns:110px 1fr;gap:10px;align-items:center}.aipeEngineeringShift span{font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:.06em;color:#7b8490}.aipeEngineeringShift b{font-size:11px;line-height:1.4;color:#5b46a8}.darkPrototypeCard .aipeEngineeringShift{border-color:#2f333c}.darkPrototypeCard .aipeEngineeringShift span{color:#949ca8}.darkPrototypeCard .aipeEngineeringShift b{color:#b8a6ff}
      .aipePrototypeClosing{margin-top:24px;padding-top:17px;border-top:1px solid var(--line);font-size:16px;font-weight:700;letter-spacing:-.018em;color:#20242d}
      @media(max-width:900px){.aipePrototypeGrid{grid-template-columns:1fr}.aipeProductionBar{grid-template-columns:repeat(4,minmax(0,1fr))}}
      @media(max-width:640px){.aipePrototypeMatrixTop,.aipePrototypeMatrixBody>div{grid-template-columns:1fr 28px 1fr;padding-left:10px;padding-right:10px}.aipePrototypeCompare{grid-template-columns:1fr}.aipeEngineeringShift{grid-template-columns:1fr;gap:5px}.aipeProductionBar{grid-template-columns:repeat(2,minmax(0,1fr))}.aipePrototypeClosing{font-size:15px}}
    `;
    document.head.appendChild(style);
  }
})();
