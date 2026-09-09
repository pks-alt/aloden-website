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
