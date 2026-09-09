// Product Modernization content-review layer — Section 3 / progressive modernization.
(() => {
  if (!document.querySelector('.modernizationHero')) return;
  const next = document.querySelector('.modernizationReviewNext');
  if (!next || document.querySelector('#modernize-without-big-bang')) return;

  const section = document.createElement('section');
  section.className = 'modernizationPath section soft';
  section.id = 'modernize-without-big-bang';
  section.innerHTML = `
    <div class="container">
      <div class="modernizationPathHead">
        <div class="eyebrow">FROM CURRENT PRODUCT TO MODERN PRODUCT</div>
        <h2 class="h2">Modernize in slices. Keep the product working while the foundations change.</h2>
        <p class="lead">The safest modernization path is rarely to stop the business, rebuild the entire product somewhere else, and switch everything over at once. Aloden identifies bounded parts of the product that can be improved independently, creates clear compatibility boundaries around them, moves users and workflows gradually, verifies the new behavior, and expands modernization only as evidence supports the next step.</p>
      </div>

      <div class="modernizationTransform" aria-label="Progressive transformation from current product to modern product">
        <div class="modernizationTransformTop"><span>PROGRESSIVE TRANSFORMATION ARCHITECTURE</span><b>CHANGE ONE BOUNDED SLICE AT A TIME</b></div>
        <div class="modernizationPhases">
          <article><small>PHASE 1</small><b>Current Product</b><div><span>Legacy A</span><span>Legacy B</span><span>Legacy C</span><span>Shared Data</span></div></article>
          <article><small>PHASE 2</small><b>Create the Seam</b><div><span>Legacy A</span><span class="boundary">Boundary</span><span>Legacy B</span><span>Legacy C</span></div></article>
          <article><small>PHASE 3</small><b>Modernize One Slice</b><div><span>Legacy A</span><span class="boundary">Boundary → Modern B</span><span>Legacy C</span></div></article>
          <article><small>PHASE 4</small><b>Shift Use Gradually</b><div><span>Old B ↓</span><span class="modern">Modern B ↑</span><span>Feature flags</span><span>Verification</span></div></article>
          <article><small>PHASE 5</small><b>Retire When Proven</b><div><span>Legacy A</span><span class="modern">Modern B</span><span>Legacy C</span></div></article>
        </div>
        <div class="modernizationTransformRails"><span>Business Continuity</span><span>Data Integrity</span><span>Compatibility</span><span>Security</span><span>Observability</span><span>Rollback</span></div>
      </div>

      <div class="modernizationPathGrid">
        <article class="modernizationPathCard"><div class="modernizationPathTop"><span>01</span><small>ESTABLISH CURRENT-STATE EVIDENCE</small></div><h3>Understand how the product actually behaves before changing it.</h3><p>Document enough of the users, workflows, architecture, data ownership, integrations, dependencies, operations, and failure points to know what cannot break, what is slowing the product down, and what can change independently.</p><div class="modernizationOutput"><b>Output</b><span>Current-state map</span><span>Critical dependencies</span><span>Constraints</span><span>Baseline measures</span></div></article>

        <article class="modernizationPathCard"><div class="modernizationPathTop"><span>02</span><small>MAP DEPENDENCIES &amp; CHANGE RISK</small></div><h3>Find what moves when one component changes.</h3><p>A feature that looks isolated may depend on shared database tables, authentication, business rules, batch processes, external integrations, reporting, and downstream workflows.</p><div class="modernizationDependency"><span>Capability</span><span>Data</span><span>Services</span><span>Integrations</span><span>Users / workflows</span><span>Downstream impact</span></div><div class="modernizationPrinciple">Modernization risk often lives between components, not inside them.</div></article>

        <article class="modernizationPathCard targetCard"><div class="modernizationPathTop"><span>03</span><small>DEFINE THE TARGET</small></div><h3>Know what needs to become better before choosing the technology.</h3><p>The target state should describe measurable product capabilities: faster releases, clearer boundaries, improved UX, better reliability, more usable data, lower integration complexity, and AI-ready context—not just a newer stack.</p><div class="modernizationNotGoal"><span>Not the goal</span><b>“Move to microservices.” · “Move to cloud.” · “Rewrite in a newer framework.”</b></div></article>

        <article class="modernizationPathCard"><div class="modernizationPathTop"><span>04</span><small>CHOOSE THE RIGHT FIRST SLICE</small></div><h3>Start somewhere valuable enough to matter and bounded enough to learn.</h3><p>Evaluate candidate slices by business value, current pain, isolation, dependencies, migration risk, and measurability.</p><div class="modernizationSliceScore"><span>Business Value</span><span>Current Pain</span><span>Isolation</span><span>Dependencies</span><span>Migration Risk</span><span>Measurability</span></div><div class="modernizationPrinciple">High learning + meaningful value + controlled risk.</div></article>

        <article class="modernizationPathCard seamCard"><div class="modernizationPathTop"><span>05</span><small>CREATE A COMPATIBILITY BOUNDARY</small></div><h3>Make the old and new product able to coexist.</h3><p>Create a clean seam around the capability using an API facade, adapter, event boundary, service interface, compatibility layer, routing layer, or data synchronization boundary.</p><div class="modernizationSeam"><span>Existing Product</span><b>Compatibility Boundary</b><span>Modernized Slice</span></div><div class="modernizationPrinciple">The product can contain old and new architecture at the same time.</div></article>

        <article class="modernizationPathCard"><div class="modernizationPathTop"><span>06</span><small>BUILD ALONGSIDE THE EXISTING PRODUCT</small></div><h3>Modernization should create working product behavior, not a parallel science project.</h3><p>Connect the modernized slice to real users, permissions, data, integrations, and operational workflows early enough to generate evidence.</p><div class="modernizationTechniques"><span>Feature flags</span><span>Selective routing</span><span>Shadow processing</span><span>Read-only comparison</span><span>Parallel operation</span><span>Compatibility adapters</span></div></article>

        <article class="modernizationPathCard migrationCard"><div class="modernizationPathTop"><span>07</span><small>MIGRATE IN CONTROLLED STEPS</small></div><h3>Move behavior, data, traffic, users, and operations separately when that reduces risk.</h3><p>Not every part of migration has to happen on the same day. Shift use gradually and verify at each stage while fallback remains available.</p><div class="modernizationRollout"><span>5%</span><i>→ verify →</i><span>25%</span><i>→ verify →</i><span>50%</span><i>→ verify →</i><span>100%</span></div><div class="modernizationPrinciple">Fallback available until confidence is earned.</div></article>

        <article class="modernizationPathCard"><div class="modernizationPathTop"><span>08</span><small>VERIFY BEFORE RETIRING</small></div><h3>New does not mean proven.</h3><p>Compare functional behavior, workflow completion, performance, errors, data consistency, integrations, adoption, and operational support before deciding whether to expand, adjust, pause, or roll back.</p><div class="modernizationDecisions"><span>Expand</span><span>Adjust</span><span>Pause</span><span>Roll back</span></div><div class="modernizationPrinciple">Retirement is the final modernization decision—not the first one.</div></article>

        <article class="modernizationPathCard repeatCard"><div class="modernizationPathTop"><span>09</span><small>REPEAT WITH BETTER INFORMATION</small></div><h3>Each completed slice makes the next modernization decision better.</h3><p>Every slice improves understanding of architecture, data, dependencies, users, migration mechanics, and real modernization cost.</p><div class="modernizationRepeat"><span>Assess</span><span>Select Slice</span><span>Create Boundary</span><span>Modernize</span><span>Integrate</span><span>Migrate</span><span>Verify</span><span>Learn</span><span>Next Slice</span></div></article>
      </div>

      <div class="modernizationPathClosing">Modernization should reduce technical risk while the product is changing—not create a larger one in the name of replacing the old system.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.modernizationReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Where modernization creates the most value</h2><p>Next we’ll show the signals that indicate where modernization should start, how to distinguish structural constraints from cosmetic change, and when modernization is not the right answer.</p>';

  if (!document.querySelector('#modernization-section3-style')) {
    const style = document.createElement('style');
    style.id = 'modernization-section3-style';
    style.textContent = `
      .modernizationPath{background:linear-gradient(180deg,#fafbfc,#f8f8fb)}
      .modernizationPathHead .lead{max-width:940px}
      .modernizationTransform{margin-top:28px;border:1px solid #292d35;border-radius:17px;background:#111318;color:#fff;overflow:hidden;box-shadow:0 15px 36px rgba(13,16,25,.06)}
      .modernizationTransformTop{display:flex;justify-content:space-between;gap:16px;padding:12px 14px;border-bottom:1px solid #2e323b;background:#15181e}.modernizationTransformTop span,.modernizationTransformTop b{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em}.modernizationTransformTop span{color:#aa94ff}.modernizationTransformTop b{color:#929aa6;font-weight:500;text-align:right}
      .modernizationPhases{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:7px;padding:14px}.modernizationPhases article{border:1px solid #2d323b;border-radius:11px;background:#171a20;padding:11px;min-width:0}.modernizationPhases small{font-family:'IBM Plex Mono',monospace;font-size:7.6px;color:#a58aff}.modernizationPhases b{display:block;font-size:11px;margin-top:6px}.modernizationPhases article>div{display:flex;gap:5px;flex-wrap:wrap;margin-top:9px}.modernizationPhases article span{border:1px solid #30343d;border-radius:999px;background:#14171d;padding:5px 6px;font-size:7.8px;color:#aeb5c0}.modernizationPhases article span.boundary{border-color:#574783;background:#1b1727;color:#c3b4ff}.modernizationPhases article span.modern{border-color:#5e4c91;background:#1d182b;color:#d0c3ff}
      .modernizationTransformRails{display:grid;grid-template-columns:repeat(6,1fr);gap:1px;background:#2d3139;padding-top:1px}.modernizationTransformRails span{background:#14171d;text-align:center;padding:9px 7px;font-family:'IBM Plex Mono',monospace;font-size:7.8px;color:#b8abdf}
      .modernizationPathGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:28px}.modernizationPathCard{border:1px solid #e0e3e8;border-radius:16px;background:#fff;padding:19px;min-width:0}.modernizationPathCard.seamCard{background:#111318;border-color:#292d35;color:#fff}.modernizationPathCard.targetCard,.modernizationPathCard.repeatCard{background:linear-gradient(145deg,#fff,#faf8ff);border-color:#ddd7f3}.modernizationPathCard.repeatCard{grid-column:1/-1}
      .modernizationPathTop{display:flex;justify-content:space-between;gap:12px;align-items:center}.modernizationPathTop>span{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--violet)}.modernizationPathTop small{font-family:'IBM Plex Mono',monospace;font-size:8.2px;letter-spacing:.07em;color:#7c8592;text-align:right}.seamCard .modernizationPathTop>span{color:#a58aff}.seamCard .modernizationPathTop small{color:#979faa}
      .modernizationPathCard h3{font-size:22px;line-height:1.1;letter-spacing:-.03em;margin:14px 0 9px}.modernizationPathCard>p{font-size:12px;line-height:1.6;color:var(--body);margin:0}.seamCard>p{color:#aeb5c0}
      .modernizationOutput,.modernizationSliceScore,.modernizationTechniques,.modernizationDecisions,.modernizationRepeat{display:flex;gap:6px;flex-wrap:wrap;margin-top:14px;padding-top:13px;border-top:1px solid #e3e6ea}.modernizationOutput b{width:100%;font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:.08em;color:#7a8390}.modernizationOutput span,.modernizationSliceScore span,.modernizationTechniques span,.modernizationDecisions span,.modernizationRepeat span{border:1px solid #e0e4e9;border-radius:999px;background:#fbfcfe;padding:6px 8px;font-size:8.8px;color:#68717d}
      .modernizationDependency{display:flex;gap:5px;flex-wrap:wrap;margin-top:14px}.modernizationDependency span{border:1px solid #e0e4e9;border-radius:8px;background:#fbfcfe;padding:7px 8px;font-size:8.6px;color:#66707c}.modernizationDependency span:not(:last-child):after{content:' →';color:#8b73d2}
      .modernizationPrinciple{margin-top:12px;border-left:2px solid var(--violet);background:#faf8ff;border-radius:0 9px 9px 0;padding:9px 10px;font-size:10px;line-height:1.45;color:#5f5675}.seamCard .modernizationPrinciple{background:#1b1727;color:#c4b7ec;border-color:#a58aff}
      .modernizationNotGoal{margin-top:14px;border:1px solid #e1dcef;border-radius:10px;background:#fff;padding:10px}.modernizationNotGoal span{display:block;font-family:'IBM Plex Mono',monospace;font-size:8px;color:#7a67bd}.modernizationNotGoal b{display:block;font-size:10.5px;line-height:1.45;color:#4b435d;margin-top:4px}
      .modernizationSeam{display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:center;margin-top:14px}.modernizationSeam span,.modernizationSeam b{border:1px solid #30343d;border-radius:10px;background:#171a20;padding:9px;text-align:center;font-size:9px;color:#b5bdc8}.modernizationSeam b{background:#1b1727;border-color:#493f70;color:#c7b8ff}
      .modernizationRollout{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-top:14px}.modernizationRollout span{min-width:42px;border:1px solid #ded8f3;border-radius:999px;background:#faf8ff;padding:7px 9px;text-align:center;font-size:9px;color:#6755ad}.modernizationRollout i{font-style:normal;font-family:'IBM Plex Mono',monospace;font-size:7.8px;color:#8c859c}
      .modernizationPathClosing{margin-top:24px;padding-top:17px;border-top:1px solid #dfe2e7;font-size:16px;font-weight:700;letter-spacing:-.018em;color:#20242d}
      @media(max-width:980px){.modernizationPhases{grid-template-columns:repeat(2,1fr)}.modernizationTransformRails{grid-template-columns:repeat(3,1fr)}}
      @media(max-width:820px){.modernizationPathGrid{grid-template-columns:1fr}.modernizationPathCard.repeatCard{grid-column:auto}}
      @media(max-width:620px){.modernizationTransformTop{align-items:flex-start;flex-direction:column}.modernizationPhases{grid-template-columns:1fr}.modernizationTransformRails{grid-template-columns:1fr}.modernizationPathTop{align-items:flex-start;flex-direction:column;gap:7px}.modernizationPathTop small{text-align:left}.modernizationSeam{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }
})();
