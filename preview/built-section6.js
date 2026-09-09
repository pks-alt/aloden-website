// Built by Aloden content-review layer — Section 6 / portfolio evidence.
(() => {
  if (!document.querySelector('.builtHeroGrid')) return;
  const section = [...document.querySelectorAll('section.section')].find(sec => sec.querySelector('.evidenceGrid'));
  if (!section) return;
  const container = section.querySelector('.container');
  if (!container) return;

  container.innerHTML = `
    <div class="portfolioEvidenceHead">
      <div class="eyebrow">WHAT THE PRODUCTS PROVE</div>
      <h2 class="h2">Different products. Shared evidence.</h2>
      <p class="lead">Medlivo, StartupFair, and Aloden Voice AI solve very different problems. Together, they demonstrate Aloden’s ability to turn complex workflows into clear, intelligent, production-ready digital products.</p>
    </div>

    <div class="portfolioEvidenceGrid">
      <article class="portfolioEvidenceCard">
        <span class="num">01</span>
        <h3>Product &amp; Workflow Architecture</h3>
        <strong>Make complex systems understandable.</strong>
        <p>Design multi-stage products that coordinate users, workflows, decisions, data, and exceptions without making the experience feel complicated.</p>
      </article>
      <article class="portfolioEvidenceCard">
        <span class="num">02</span>
        <h3>AI Embedded in the Product</h3>
        <strong>Intelligence belongs where work happens.</strong>
        <p>Use AI for matching, reasoning, prioritization, conversational understanding, automation, and decision support as part of the core product experience.</p>
      </article>
      <article class="portfolioEvidenceCard">
        <span class="num">03</span>
        <h3>Multi-Role Experience Design</h3>
        <strong>Different users. One coherent product.</strong>
        <p>Design connected experiences for clinicians, operations teams, organizations, builders, evaluators, customers, administrators, and other roles without fragmenting the platform.</p>
      </article>
      <article class="portfolioEvidenceCard">
        <span class="num">04</span>
        <h3>Human Control &amp; Production Discipline</h3>
        <strong>AI should operate inside clear boundaries.</strong>
        <p>Build permissions, approvals, escalation, exception handling, system integrations, monitoring, security, accessibility, and maintainability into the product from the beginning.</p>
      </article>
    </div>

    <div class="portfolioMatrixWrap">
      <div class="portfolioMatrixLabel">CROSS-PRODUCT EVIDENCE</div>
      <div class="portfolioMatrixScroller">
        <table class="portfolioMatrix">
          <thead>
            <tr><th>Product evidence</th><th>Medlivo</th><th>StartupFair</th><th>Aloden Voice AI</th></tr>
          </thead>
          <tbody>
            <tr><th>Complex workflow</th><td>Intake → credential → operations</td><td>Challenge → build → evaluation</td><td>Conversation → action</td></tr>
            <tr><th>AI in product</th><td>Matching + decision support</td><td>Evaluation + discovery workflows</td><td>Intent + agentic action</td></tr>
            <tr><th>Multi-role UX</th><td>Workforce + operations</td><td>Organization + builder + evaluator</td><td>Caller + system + human</td></tr>
            <tr><th>Human control</th><td>Review + exceptions</td><td>Governance + evaluation</td><td>Permissions + escalation</td></tr>
            <tr><th>Connected systems</th><td>Workflow integrations</td><td>Platform ecosystem</td><td>APIs + business tools</td></tr>
            <tr><th>Production thinking</th><td>Readiness + operations</td><td>Full event lifecycle</td><td>Action + confirmation</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="portfolioEvidenceClosing">The technology changes. The product discipline stays consistent.</div>`;

  if (!document.querySelector('#built-section6-review-style')) {
    const style = document.createElement('style');
    style.id = 'built-section6-review-style';
    style.textContent = `
      .portfolioEvidenceHead .lead{max-width:860px}
      .portfolioEvidenceGrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:28px}
      .portfolioEvidenceCard{border-top:1px solid var(--line);padding-top:17px;min-width:0}
      .portfolioEvidenceCard .num{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--violet)}
      .portfolioEvidenceCard h3{font-size:17px;line-height:1.2;letter-spacing:-.018em;margin:10px 0 5px}
      .portfolioEvidenceCard strong{display:block;font-size:12.5px;line-height:1.45;color:#20242d;margin-bottom:6px}
      .portfolioEvidenceCard p{font-size:12px;line-height:1.55;color:var(--muted);margin:0}
      .portfolioMatrixWrap{margin-top:34px;border:1px solid #e1e4e9;border-radius:15px;background:#fff;overflow:hidden;box-shadow:0 10px 28px rgba(21,28,45,.025)}
      .portfolioMatrixLabel{padding:12px 14px;border-bottom:1px solid var(--line);background:#fbfcfd;font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.1em;color:var(--violet)}
      .portfolioMatrixScroller{overflow-x:auto;-webkit-overflow-scrolling:touch}
      .portfolioMatrix{width:100%;min-width:760px;border-collapse:collapse;text-align:left}
      .portfolioMatrix th,.portfolioMatrix td{padding:12px 14px;border-bottom:1px solid var(--line);vertical-align:top}
      .portfolioMatrix thead th{background:#fff;font-size:11.5px;font-weight:700;color:#20242d}
      .portfolioMatrix thead th:not(:first-child){color:var(--violet)}
      .portfolioMatrix tbody th{width:165px;font-size:11.5px;font-weight:600;color:#313844;background:#fbfcfd}
      .portfolioMatrix tbody td{font-size:11.5px;line-height:1.45;color:#667080}
      .portfolioMatrix tbody tr:last-child th,.portfolioMatrix tbody tr:last-child td{border-bottom:0}
      .portfolioEvidenceClosing{margin-top:24px;padding-top:17px;border-top:1px solid var(--line);font-size:16px;font-weight:700;letter-spacing:-.018em;color:#20242d}
      @media(max-width:980px){.portfolioEvidenceGrid{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media(max-width:640px){.portfolioEvidenceGrid{grid-template-columns:1fr}.portfolioEvidenceClosing{font-size:15px}}
    `;
    document.head.appendChild(style);
  }
})();
