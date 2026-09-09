// Capabilities content-review layer — Section 4 / how capabilities work together.
(() => {
  if (!document.querySelector('.capPageHero')) return;
  const next = document.querySelector('.capReviewNext');
  if (!next || document.querySelector('#capability-composition')) return;

  const section = document.createElement('section');
  section.className = 'capabilityComposition section';
  section.id = 'capability-composition';
  section.innerHTML = `
    <div class="container">
      <div class="capabilityCompositionHead">
        <div class="eyebrow">HOW THE CAPABILITIES WORK TOGETHER</div>
        <h2 class="h2">The capability mix follows the problem.</h2>
        <p class="lead">Aloden does not force every product into the same delivery model. We start with the problem, the product that already exists—or needs to exist—and the outcome the business is trying to create. Then we bring together the right combination of product, AI, workflow, voice, modernization, and engineering disciplines.</p>
      </div>

      <div class="capabilityPathStack">
        <article class="capabilityPathRow">
          <div class="capabilityPathIntro">
            <span class="capabilityPathNum">01</span>
            <div class="capabilityStartTag">BUILD NEW</div>
            <h3>Build a New Intelligent Product</h3>
            <strong>Turn an opportunity into something people can actually use.</strong>
            <p>For a new product, the work usually begins with product definition and architecture, then expands into experience design, engineering, AI, integrations, evaluation, and production.</p>
          </div>
          <div class="capabilityPathSystem">
            <div class="capabilityMix">
              <span class="mixLabel">TYPICAL CAPABILITY MIX</span>
              <div class="mixPills"><b>AI Product Engineering <em>Primary</em></b><span>Agentic Systems · as needed</span><span>Voice AI · as needed</span><span class="mutedMix">Modernization · minimal</span></div>
            </div>
            <div class="capabilityJourney" aria-label="Build new product flow"><span>Opportunity</span><span>Product Definition</span><span>Architecture</span><span>Experience</span><span>Engineering</span><span>Production</span></div>
          </div>
        </article>

        <article class="capabilityPathRow modernizationPath">
          <div class="capabilityPathIntro">
            <span class="capabilityPathNum">02</span>
            <div class="capabilityStartTag">MODERNIZE</div>
            <h3>Modernize an Existing Product</h3>
            <strong>Improve what already has value without rebuilding everything.</strong>
            <p>For an existing product, we first understand what should stay, what is holding the product back, and where modernization will create the most value. Architecture, experience, integrations, data, and AI can then evolve in controlled stages.</p>
          </div>
          <div class="capabilityPathSystem">
            <div class="capabilityMix">
              <span class="mixLabel">TYPICAL CAPABILITY MIX</span>
              <div class="mixPills"><b>Product Modernization <em>Primary</em></b><span>AI Product Engineering · supporting</span><span>Agentic Systems · as needed</span><span>Voice AI · as needed</span></div>
            </div>
            <div class="capabilityJourney" aria-label="Product modernization flow"><span>Current Product</span><span>Priorities</span><span>Modernization Path</span><span>Incremental Change</span><span>Integration</span><span>Evolution</span></div>
          </div>
        </article>

        <article class="capabilityPathRow intelligencePath">
          <div class="capabilityPathIntro">
            <span class="capabilityPathNum">03</span>
            <div class="capabilityStartTag">ADD INTELLIGENCE</div>
            <h3>Add Intelligence to a Workflow</h3>
            <strong>Improve a decision or workflow without inventing AI for its own sake.</strong>
            <p>Sometimes the product already works—the opportunity is to make a particular workflow more intelligent, automated, conversational, or easier to operate.</p>
          </div>
          <div class="capabilityPathSystem">
            <div class="capabilityMix">
              <span class="mixLabel">TYPICAL CAPABILITY MIX</span>
              <div class="mixPills"><b>Intelligent Workflow &amp; Agentic Systems <em>Primary</em></b><span>AI Product Engineering · supporting</span><span>Voice AI · as needed</span><span>Modernization · as needed</span></div>
            </div>
            <div class="capabilityJourney" aria-label="Add intelligence to workflow flow"><span>Workflow</span><span>Decision Point</span><span>Intelligence</span><span>Tools / Systems</span><span>Human Control</span><span>Measure &amp; Improve</span></div>
          </div>
        </article>
      </div>

      <div class="capabilityMatrixWrap">
        <div class="capabilityMatrixLabel">CAPABILITY COMPOSITION</div>
        <div class="capabilityMatrixScroller">
          <table class="capabilityMatrix">
            <thead><tr><th>Starting point</th><th>AI Product Engineering</th><th>Voice AI</th><th>Agentic Systems</th><th>Modernization</th></tr></thead>
            <tbody>
              <tr><th>Build New</th><td><b>Primary</b></td><td>As needed</td><td>As needed</td><td>—</td></tr>
              <tr><th>Modernize</th><td>Supporting</td><td>As needed</td><td>As needed</td><td><b>Primary</b></td></tr>
              <tr><th>Add Intelligence</th><td>Supporting</td><td>As needed</td><td><b>Primary</b></td><td>As needed</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="capabilityCompositionClosing">Start with the outcome. Use the technology that earns its place.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.capReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Final CTA</h2><p>With the capability architecture now defined, the last content section will turn the page toward a clear project conversation without repeating the homepage CTA.</p>';

  if (!document.querySelector('#capabilities-section4-style')) {
    const style = document.createElement('style');
    style.id = 'capabilities-section4-style';
    style.textContent = `
      .capabilityComposition{background:#fff}
      .capabilityCompositionHead .lead{max-width:920px}
      .capabilityPathStack{display:grid;gap:12px;margin-top:30px}
      .capabilityPathRow{display:grid;grid-template-columns:.78fr 1.22fr;gap:28px;border:1px solid #e1e4e9;border-radius:17px;padding:20px;background:#fff;align-items:stretch}
      .capabilityPathRow.modernizationPath{background:linear-gradient(145deg,#fff,#fafbfc)}
      .capabilityPathRow.intelligencePath{background:#111318;border-color:#292d35;color:#fff}
      .capabilityPathIntro{min-width:0}
      .capabilityPathNum{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--violet);letter-spacing:.07em}.intelligencePath .capabilityPathNum{color:#a58aff}
      .capabilityStartTag{display:inline-block;margin-top:10px;border:1px solid #e0e4e9;border-radius:999px;padding:5px 8px;font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:.08em;color:#6b7481;background:#fbfcfd}.intelligencePath .capabilityStartTag{border-color:#343944;background:#171a20;color:#b7bec8}
      .capabilityPathIntro h3{font-size:24px;line-height:1.08;letter-spacing:-.034em;margin:12px 0 6px}.capabilityPathIntro strong{display:block;font-size:12.5px;line-height:1.45;color:#262b34}.intelligencePath .capabilityPathIntro strong{color:#d9dde4}.capabilityPathIntro p{font-size:12.5px;line-height:1.58;color:var(--muted);margin:8px 0 0}.intelligencePath .capabilityPathIntro p{color:#9da5b0}
      .capabilityPathSystem{display:grid;align-content:center;gap:12px;border-left:1px solid #e3e6eb;padding-left:25px;min-width:0}.intelligencePath .capabilityPathSystem{border-color:#2e323b}
      .capabilityMix{min-width:0}.mixLabel{display:block;font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:.09em;color:#7d8592}.intelligencePath .mixLabel{color:#949ca8}
      .mixPills{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}.mixPills b,.mixPills span{border:1px solid #e0e4e9;border-radius:999px;background:#fff;padding:6px 8px;font-size:8.8px;line-height:1.25;color:#68717e;font-weight:500}.mixPills b{color:#4f36aa;border-color:#d9d0ff;background:#faf8ff}.mixPills b em{font-style:normal;font-family:'IBM Plex Mono',monospace;font-size:7.2px;letter-spacing:.04em;margin-left:4px}.mixPills .mutedMix{color:#9aa1aa;background:#fbfcfd}.intelligencePath .mixPills b,.intelligencePath .mixPills span{background:#171a20;border-color:#30343d;color:#b7bec8}.intelligencePath .mixPills b{border-color:#493e70;color:#c1b1ff;background:#1b1727}
      .capabilityJourney{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:5px;padding:14px 10px 9px;border:1px solid #e1e4e9;border-radius:11px;background:#fbfcfe}.capabilityJourney span{position:relative;border-top:2px solid #dce0e5;padding-top:10px;text-align:center;font-size:8.5px;line-height:1.3;color:#65707d;min-width:0}.capabilityJourney span:before{content:'';position:absolute;top:-4px;left:50%;transform:translateX(-50%);width:7px;height:7px;border-radius:50%;background:var(--violet)}.intelligencePath .capabilityJourney{background:#171a20;border-color:#2f333c}.intelligencePath .capabilityJourney span{border-color:#383d47;color:#b2bac5}.intelligencePath .capabilityJourney span:before{background:#a58aff}
      .capabilityMatrixWrap{margin-top:28px;border:1px solid #e1e4e9;border-radius:14px;background:#fff;overflow:hidden}.capabilityMatrixLabel{padding:11px 13px;border-bottom:1px solid var(--line);background:#fbfcfd;font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.09em;color:var(--violet)}.capabilityMatrixScroller{overflow-x:auto;-webkit-overflow-scrolling:touch}.capabilityMatrix{width:100%;min-width:760px;border-collapse:collapse;text-align:left}.capabilityMatrix th,.capabilityMatrix td{padding:12px 13px;border-bottom:1px solid var(--line);font-size:11.5px;line-height:1.4}.capabilityMatrix thead th{font-weight:700;color:#20242d;background:#fff}.capabilityMatrix tbody th{font-weight:600;color:#313844;background:#fbfcfd}.capabilityMatrix td{color:#69727f}.capabilityMatrix td b{color:var(--violet)}.capabilityMatrix tbody tr:last-child th,.capabilityMatrix tbody tr:last-child td{border-bottom:0}
      .capabilityCompositionClosing{margin-top:23px;padding-top:17px;border-top:1px solid var(--line);font-size:16px;font-weight:700;letter-spacing:-.018em;color:#20242d}
      @media(max-width:980px){.capabilityPathRow{grid-template-columns:1fr}.capabilityPathSystem{border-left:0;border-top:1px solid #e3e6eb;padding:18px 0 0}.intelligencePath .capabilityPathSystem{border-color:#2e323b}}
      @media(max-width:640px){.capabilityPathRow{padding:17px}.capabilityJourney{grid-template-columns:repeat(3,minmax(0,1fr))}.capabilityCompositionClosing{font-size:15px}}
    `;
    document.head.appendChild(style);
  }
})();
