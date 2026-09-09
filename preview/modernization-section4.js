// Product Modernization content-review layer — Section 4 / where modernization creates value.
(() => {
  if (!document.querySelector('.modernizationHero')) return;
  const next = document.querySelector('.modernizationReviewNext');
  if (!next || document.querySelector('#where-modernization-creates-value')) return;

  const section = document.createElement('section');
  section.className = 'modernizationValue section soft';
  section.id = 'where-modernization-creates-value';
  section.innerHTML = `
    <div class="container">
      <div class="modernizationValueHead">
        <div class="eyebrow">WHERE MODERNIZATION CREATES VALUE</div>
        <h2 class="h2">Modernize where the current product limits what needs to happen next.</h2>
        <p class="lead">Age alone is not a modernization strategy. Software should change when its current architecture, experience, data, integrations, reliability, or delivery model is materially limiting users, operations, growth, or the product’s ability to evolve.</p>
      </div>

      <div class="modernizationDiagnostic" aria-label="Product modernization constraint diagnostic">
        <div class="modernizationDiagnosticTop"><span>CONSTRAINT DIAGNOSTIC</span><b>TARGET THE FOUNDATION THAT IS ACTUALLY HOLDING THE PRODUCT BACK</b></div>
        <div class="modernizationDiagnosticStart"><span>PRODUCT GOAL</span><b>What needs to become meaningfully better?</b></div>
        <div class="modernizationDiagnosticGrid">
          <article><span>EXPERIENCE</span><b>Users struggle to complete the work.</b><small>Experience + workflow</small></article>
          <article><span>ARCHITECTURE</span><b>Changes are expensive, risky, or tightly coupled.</b><small>Architecture + delivery</small></article>
          <article><span>INTEGRATION</span><b>Connected systems are fragile or hard to extend.</b><small>Interfaces + contracts</small></article>
          <article><span>DATA</span><b>Important context is fragmented, stale, or inaccessible.</b><small>Data foundation</small></article>
          <article><span>DELIVERY &amp; OPERATIONS</span><b>Testing, deployment, scaling, monitoring, or recovery limit progress.</b><small>Platform + reliability</small></article>
          <article class="modernizationDiagnosticAi"><span>INTELLIGENCE READINESS</span><b>The product cannot safely support AI, automation, or agentic workflows yet.</b><small>Enabling foundation</small></article>
        </div>
        <div class="modernizationDiagnosticDecision"><span>WILL CHANGING THE FOUNDATION MATERIALLY IMPROVE THE OUTCOME?</span><b>Yes → Targeted Modernization</b><i>No → Solve the actual product problem another way</i></div>
      </div>

      <div class="modernizationValueGrid">
        <article class="modernizationValueCard">
          <div class="modernizationValueTop"><span>01</span><small>DELIVERY FRICTION</small></div>
          <h3>When every change feels larger than the feature itself.</h3>
          <p>Small changes touch many components, releases require manual coordination, testing is slow, or teams avoid parts of the codebase because change feels risky.</p>
          <div class="modernizationValueShift"><span>Modernization opportunity</span><b>Create clearer boundaries and improve delivery capability.</b></div>
          <div class="modernizationValueAreas"><span>Modularization</span><span>Test automation</span><span>CI/CD</span><span>Service boundaries</span><span>Deployment isolation</span><span>Observability</span></div>
          <strong class="modernizationValuePrinciple">The target is a product that can change more safely and frequently.</strong>
        </article>

        <article class="modernizationValueCard">
          <div class="modernizationValueTop"><span>02</span><small>EXPERIENCE CONSTRAINED BY THE SYSTEM</small></div>
          <h3>When users are experiencing the architecture.</h3>
          <p>Too many screens, duplicate entry, long waits, disconnected workflows, manual workarounds, inconsistent behavior, or poor mobile experience can signal deeper system constraints.</p>
          <div class="modernizationValueFlow"><span>User friction</span><span>Workflow constraint</span><span>System constraint</span><span>Targeted modernization</span></div>
          <div class="modernizationValueShift"><span>Modernization opportunity</span><b>Experience redesign + workflow redesign + supporting application changes.</b></div>
        </article>

        <article class="modernizationValueCard modernizationIntegrationCard">
          <div class="modernizationValueTop"><span>03</span><small>INTEGRATION FRICTION</small></div>
          <h3>When connecting one more system creates disproportionate complexity.</h3>
          <p>Point-to-point integrations, duplicate logic, manual file transfers, brittle scheduled jobs, and disagreeing system state can turn integrations into a product constraint.</p>
          <div class="modernizationValueAreas"><span>APIs</span><span>Adapters</span><span>Event flows</span><span>Integration services</span><span>Contracts</span><span>Identity boundaries</span></div>
          <strong class="modernizationValuePrinciple">The objective is not more APIs. It is lower coupling between products and systems.</strong>
        </article>

        <article class="modernizationValueCard">
          <div class="modernizationValueTop"><span>04</span><small>DATA FRICTION</small></div>
          <h3>When the information exists, but the product cannot reliably use it.</h3>
          <p>Multiple versions of the same entity, unclear sources of truth, stale synchronization, weak search, inaccessible context, and unreliable reporting can block both product improvement and AI.</p>
          <div class="modernizationValueFlow"><span>Fragmented data</span><span>Reliable product context</span><span>Better workflows</span><span>Intelligence where useful</span></div>
          <div class="modernizationValueAreas"><span>Ownership</span><span>Contracts</span><span>Quality</span><span>Synchronization</span><span>Retrieval</span><span>Governance</span></div>
        </article>

        <article class="modernizationValueCard">
          <div class="modernizationValueTop"><span>05</span><small>RELIABILITY &amp; OPERATING FRICTION</small></div>
          <h3>When maintaining the product consumes the capacity needed to improve it.</h3>
          <p>Frequent incidents, slow recovery, performance bottlenecks, manual scaling, concentrated infrastructure knowledge, and growing support burden can limit the product’s ability to grow.</p>
          <div class="modernizationValueShift"><span>Modernization opportunity</span><b>Improve architecture, runtime, resilience, observability, automation, and operating model.</b></div>
          <strong class="modernizationValuePrinciple">Less operational friction + more product capacity.</strong>
        </article>

        <article class="modernizationValueCard modernizationAiCard">
          <div class="modernizationValueTop"><span>06</span><small>AI OPPORTUNITY BLOCKED BY THE FOUNDATION</small></div>
          <h3>When the AI idea is viable but the surrounding software is not ready.</h3>
          <p>A team may want AI search, recommendations, decision support, agentic workflows, Voice AI, or automation while the current product still lacks reliable APIs, usable context, permission boundaries, workflow state, evaluation hooks, or observability.</p>
          <div class="modernizationValueFlow"><span>Modernize enabling foundation</span><span>Introduce intelligence</span><span>Evaluate outcome</span></div>
          <strong class="modernizationValuePrinciple">Sometimes the most important AI work is the modernization required before the AI can be useful.</strong>
        </article>
      </div>

      <aside class="modernizationCounterpoint">
        <div><span>WHEN MODERNIZATION IS NOT THE ANSWER</span><h3>Do not create a modernization program simply because the technology is old.</h3><p>A focused product change—or no technical change at all—may be better when the current system still serves the business well.</p></div>
        <div class="modernizationCounterpointList">
          <span>Stable system still supports the business</span>
          <span>Requested improvement is isolated and inexpensive</span>
          <span>Architecture is not materially slowing delivery</span>
          <span>The business process—not the software—is the problem</span>
          <span>A capability should be retired rather than modernized</span>
          <span>The product no longer justifies the investment</span>
          <span>Modernization cost exceeds the future value unlocked</span>
        </div>
        <strong>Good modernization includes deciding what does not need to change.</strong>
      </aside>

      <div class="modernizationValueClosing">Modernization earns its place when changing the foundation materially improves the product’s ability to serve users, operate reliably, and evolve.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);
  const nextInner = next.querySelector('.modernizationReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: How modernization decisions get prioritized</h2><p>Next we’ll connect business value, technical constraint, dependency, migration risk, and measurable outcome into a practical modernization portfolio rather than a technology wish list.</p>';

  if (!document.querySelector('#modernization-section4-style')) {
    const style = document.createElement('style');
    style.id = 'modernization-section4-style';
    style.textContent = `
      .modernizationValue{background:linear-gradient(180deg,#fafbfc 0%,#f7f8fb 100%)}
      .modernizationValueHead .lead{max-width:940px}
      .modernizationDiagnostic{margin-top:28px;border:1px solid #292d35;border-radius:17px;background:#111318;color:#fff;overflow:hidden}
      .modernizationDiagnosticTop{display:flex;justify-content:space-between;gap:16px;padding:12px 14px;border-bottom:1px solid #2d3139;background:#15181e}.modernizationDiagnosticTop span,.modernizationDiagnosticTop b{font-family:'IBM Plex Mono',monospace;font-size:8.4px;letter-spacing:.08em}.modernizationDiagnosticTop span{color:#aa94ff}.modernizationDiagnosticTop b{color:#9098a4;font-weight:500;text-align:right}
      .modernizationDiagnosticStart{display:grid;grid-template-columns:110px 1fr;gap:12px;align-items:center;margin:13px;border:1px solid #3b334e;border-radius:11px;background:#1a1724;padding:11px}.modernizationDiagnosticStart span{font-family:'IBM Plex Mono',monospace;font-size:8px;color:#af9bf2}.modernizationDiagnosticStart b{font-size:13px}
      .modernizationDiagnosticGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:0 13px 13px}.modernizationDiagnosticGrid article{border:1px solid #2f343d;border-radius:10px;background:#171a20;padding:11px}.modernizationDiagnosticGrid article.modernizationDiagnosticAi{border-color:#4c4072;background:#1b1727}.modernizationDiagnosticGrid span{display:block;font-family:'IBM Plex Mono',monospace;font-size:7.7px;letter-spacing:.07em;color:#9f89f5}.modernizationDiagnosticGrid b{display:block;font-size:10.5px;line-height:1.38;margin-top:6px}.modernizationDiagnosticGrid small{display:block;font-size:8.5px;color:#929aa5;margin-top:5px}
      .modernizationDiagnosticDecision{display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:12px 14px;border-top:1px solid #2d3139;background:#14171d}.modernizationDiagnosticDecision span{width:100%;font-family:'IBM Plex Mono',monospace;font-size:7.8px;color:#969eaa}.modernizationDiagnosticDecision b,.modernizationDiagnosticDecision i{font-size:9.5px;border:1px solid #3a3f49;border-radius:999px;padding:6px 9px}.modernizationDiagnosticDecision b{background:#1b1727;border-color:#493f70;color:#c1b1f8}.modernizationDiagnosticDecision i{font-style:normal;color:#a9b0ba}
      .modernizationValueGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:28px}.modernizationValueCard{border:1px solid #e0e3e8;border-radius:16px;background:#fff;padding:19px;min-width:0}.modernizationValueCard.modernizationIntegrationCard{background:#111318;border-color:#292d35;color:#fff}.modernizationValueCard.modernizationAiCard{background:linear-gradient(145deg,#fff,#faf8ff);border-color:#ded8f3}
      .modernizationValueTop{display:flex;align-items:center;justify-content:space-between;gap:12px}.modernizationValueTop>span{font-family:'IBM Plex Mono',monospace;font-size:9.4px;color:var(--violet)}.modernizationValueTop small{font-family:'IBM Plex Mono',monospace;font-size:8.3px;letter-spacing:.07em;color:#7c8592;text-align:right}.modernizationIntegrationCard .modernizationValueTop>span{color:#a58aff}.modernizationIntegrationCard .modernizationValueTop small{color:#969eaa}
      .modernizationValueCard h3{font-size:22px;line-height:1.1;letter-spacing:-.03em;margin:14px 0 9px}.modernizationValueCard>p{font-size:12px;line-height:1.6;color:var(--body);margin:0}.modernizationIntegrationCard>p{color:#aeb5c0}
      .modernizationValueShift{margin-top:14px;border:1px solid #e1e4e9;border-radius:10px;background:#fbfcfe;padding:10px}.modernizationValueShift span{display:block;font-family:'IBM Plex Mono',monospace;font-size:8px;color:#7a8390}.modernizationValueShift b{display:block;font-size:10.5px;line-height:1.42;color:#343a45;margin-top:4px}
      .modernizationValueAreas{display:flex;gap:6px;flex-wrap:wrap;margin-top:14px}.modernizationValueAreas span{border:1px solid #e0e4e9;border-radius:999px;background:#fbfcfe;padding:6px 8px;font-size:8.8px;color:#67717d}.modernizationIntegrationCard .modernizationValueAreas span{background:#171a20;border-color:#30343d;color:#b6bdc7}
      .modernizationValueFlow{display:flex;gap:5px;flex-wrap:wrap;margin-top:14px}.modernizationValueFlow span{position:relative;border:1px solid #ded8f3;border-radius:8px;background:#faf8ff;padding:7px 9px;font-size:8.8px;color:#635494}.modernizationValueFlow span:not(:last-child):after{content:'→';margin-left:7px;color:#8d78dc}
      .modernizationValuePrinciple{display:block;margin-top:14px;padding-top:12px;border-top:1px solid #e2e5ea;font-size:11.2px;line-height:1.48;color:#2d333d}.modernizationIntegrationCard .modernizationValuePrinciple{border-color:#30343d;color:#d8dde5}
      .modernizationCounterpoint{display:grid;grid-template-columns:.9fr 1.1fr;gap:20px;margin-top:28px;border:1px solid #292d35;border-radius:17px;background:#111318;color:#fff;padding:21px}.modernizationCounterpoint>div:first-child>span{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em;color:#a58aff}.modernizationCounterpoint h3{font-size:25px;line-height:1.08;letter-spacing:-.034em;margin:9px 0 7px}.modernizationCounterpoint p{font-size:12px;line-height:1.55;color:#aeb5c0;margin:0}.modernizationCounterpointList{display:flex;gap:6px;flex-wrap:wrap;align-content:flex-start}.modernizationCounterpointList span{border:1px solid #30343d;border-radius:999px;background:#171a20;padding:6px 8px;font-size:8.8px;color:#b7bec8}.modernizationCounterpoint>strong{grid-column:1/-1;padding-top:13px;border-top:1px solid #2f333c;color:#c2b3fb;font-size:11px}
      .modernizationValueClosing{margin-top:24px;padding-top:17px;border-top:1px solid #dfe2e7;font-size:16px;font-weight:700;letter-spacing:-.018em;color:#20242d}
      @media(max-width:900px){.modernizationDiagnosticGrid{grid-template-columns:1fr 1fr}.modernizationValueGrid{grid-template-columns:1fr}.modernizationCounterpoint{grid-template-columns:1fr}.modernizationCounterpoint>strong{grid-column:1}}
      @media(max-width:620px){.modernizationDiagnosticTop{align-items:flex-start;flex-direction:column}.modernizationDiagnosticGrid{grid-template-columns:1fr}.modernizationDiagnosticStart{grid-template-columns:1fr;gap:5px}.modernizationValueCard{padding:17px}.modernizationValueTop{align-items:flex-start;flex-direction:column;gap:7px}.modernizationValueTop small{text-align:left}}
    `;
    document.head.appendChild(style);
  }
})();
