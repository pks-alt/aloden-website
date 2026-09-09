(() => {
  const section = document.querySelector('.trustBand');
  if (!section) return;

  const grid = section.querySelector('.trustGrid');
  if (!grid) return;
  const container = grid.closest('.container');
  if (!container) return;

  section.style.padding = '44px 0 40px';

  let head = section.querySelector('.contentReviewTrustHead');
  if (!head) {
    head = document.createElement('div');
    head.className = 'contentReviewTrustHead';
    container.insertBefore(head, grid);
  }
  head.innerHTML = '';
  Object.assign(head.style, { maxWidth: '840px', marginBottom: '24px' });

  const eyebrow = document.createElement('div');
  eyebrow.className = 'eyebrow';
  eyebrow.textContent = 'TRUST & DELIVERY';

  const h2 = document.createElement('h2');
  h2.className = 'h2';
  h2.textContent = 'Trust is engineered into the way we build.';
  Object.assign(h2.style, { fontSize: 'clamp(29px,3.2vw,40px)', marginBottom: '9px' });

  const intro = document.createElement('p');
  intro.className = 'lead';
  intro.textContent = 'Intelligent products touch data, workflows, decisions, and people. Aloden treats confidentiality, delivery control, evaluation, and responsible AI as part of product engineering—not as an afterthought.';
  Object.assign(intro.style, { fontSize: '15px', maxWidth: '820px' });
  head.append(eyebrow, h2, intro);

  const items = [
    {
      title: 'Confidentiality',
      tagline: 'Protect the work from day one.',
      text: 'We treat client ideas, data, workflows, and product information as confidential throughout discovery, design, engineering, and delivery.'
    },
    {
      title: 'Controlled Delivery',
      tagline: 'Visibility without chaos.',
      text: 'Clear priorities, decision points, working increments, documented handoffs, and controlled releases keep teams aligned from early development through production.'
    },
    {
      title: 'Quality & Evaluation',
      tagline: 'Test what matters before production.',
      text: 'We evaluate product behavior, integrations, workflows, edge cases, and AI outputs—not just whether the software technically runs.'
    },
    {
      title: 'Responsible AI',
      tagline: 'Keep people and accountability in the loop.',
      text: 'AI systems are designed with appropriate permissions, guardrails, review, and human escalation where decisions require judgment.'
    }
  ];

  const cells = [...grid.children];
  items.forEach((item, i) => {
    const cell = cells[i];
    if (!cell) return;
    cell.innerHTML = '';
    Object.assign(cell.style, { paddingRight: '10px' });

    const title = document.createElement('b');
    title.textContent = item.title;
    Object.assign(title.style, { fontSize: '13.5px' });

    const tagline = document.createElement('strong');
    tagline.textContent = item.tagline;
    Object.assign(tagline.style, { display: 'block', marginTop: '7px', fontSize: '11.5px', lineHeight: '1.4', color: '#20242d', fontWeight: '600' });

    const body = document.createElement('span');
    body.textContent = item.text;
    Object.assign(body.style, { display: 'block', marginTop: '6px', fontSize: '10.5px', lineHeight: '1.5', color: '#727b8b' });

    cell.append(title, tagline, body);
  });

  let closing = section.querySelector('.contentReviewTrustClosing');
  if (!closing) {
    closing = document.createElement('div');
    closing.className = 'contentReviewTrustClosing';
    container.appendChild(closing);
  }
  closing.textContent = 'Security, privacy, reliability, and human control are design constraints—not launch-day add-ons.';
  Object.assign(closing.style, {
    marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #e6e8ed',
    fontSize: '13px', fontWeight: '600', lineHeight: '1.45', letterSpacing: '-.01em', color: '#20242d'
  });
})();
