(() => {
  const section = document.querySelector('#insights');
  if (!section) return;

  const set = (selector, value, root = section) => {
    const el = root.querySelector(selector);
    if (el && value !== undefined && value !== null) el.textContent = value;
    return el;
  };

  set('.eyebrow', 'FEATURED INSIGHT');
  set('.h2', 'From AI experimentation to real-world impact.');
  set('.lead', 'AI creates value when it moves beyond isolated pilots and becomes part of a product, workflow, or decision that people actually use.');

  const primary = section.querySelector('.btn.primary');
  if (primary) primary.textContent = 'Read the Insight →';
  const secondary = section.querySelector('.textLink');
  if (secondary) secondary.textContent = 'Explore Aloden Insights →';

  const card = section.querySelector('.insightCard');
  if (card) {
    const text = card.querySelector('.insightText');
    if (text) {
      set('.tag', 'AI · PRODUCT · PRODUCTION', text);
      set('h3', 'Moving AI from pilot to production', text);
      set('p', 'A practical perspective on how product leaders can move from AI exploration to production—by focusing on the right problem, validating behavior early, designing for real workflows, and measuring outcomes after launch.', text);

      let flow = text.querySelector('.contentReviewInsightFlow');
      if (!flow) {
        flow = document.createElement('div');
        flow.className = 'contentReviewInsightFlow';
        text.appendChild(flow);
      }
      flow.textContent = 'Strategy → Validate → Build → Deploy → Measure → Evolve';
      Object.assign(flow.style, {
        marginTop: '14px',
        fontFamily: 'IBM Plex Mono,monospace',
        fontSize: '9px',
        lineHeight: '1.55',
        color: '#7c4dff',
        letterSpacing: '.015em'
      });
    }
  }

  let support = section.querySelector('.contentReviewInsightSupport');
  if (!support) {
    support = document.createElement('p');
    support.className = 'contentReviewInsightSupport';
    section.querySelector('.container')?.appendChild(support);
  }
  support.textContent = 'Practical thinking on AI, product engineering, modernization, and what it takes to build for real use.';
  Object.assign(support.style, {
    margin: '22px 0 0',
    paddingTop: '18px',
    borderTop: '1px solid #e6e8ed',
    fontSize: '12.5px',
    lineHeight: '1.55',
    color: '#727b8b'
  });
})();
