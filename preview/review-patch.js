(async () => {
  const bust = '?v=' + Date.now();
  const [content, medlivoB64, startupfairB64] = await Promise.all([
    fetch('content-review.json' + bust, { cache: 'no-store' }).then(r => {
      if (!r.ok) throw new Error('Content ' + r.status);
      return r.json();
    }),
    fetch('medlivo-logo.b64' + bust, { cache: 'no-store' }).then(r => {
      if (!r.ok) throw new Error('Medlivo logo ' + r.status);
      return r.text();
    }),
    fetch('startupfair-logo.b64' + bust, { cache: 'no-store' }).then(r => {
      if (!r.ok) throw new Error('StartupFair logo ' + r.status);
      return r.text();
    })
  ]);

  const set = (selector, value, root = document) => {
    const el = root.querySelector(selector);
    if (el && value !== undefined && value !== null) el.textContent = value;
    return el;
  };

  const makeText = (tag, text, styles = {}) => {
    const el = document.createElement(tag);
    el.textContent = text || '';
    Object.assign(el.style, styles);
    return el;
  };

  // SECTION 1 — HERO
  const hero = content.hero || {};
  set('.hero .eyebrow', hero.eyebrow);
  set('.hero h1', hero.headline);
  set('.heroSub', hero.subheadline);
  set('.heroDesc', hero.description);
  if (Array.isArray(hero.proof)) {
    hero.proof.forEach((item, i) => {
      set(`.proofStrip > div:nth-child(${i + 1}) b`, item.title);
      set(`.proofStrip > div:nth-child(${i + 1}) span`, item.text);
    });
  }

  // SECTION 2 — BUILT BY ALODEN
  const built = content.built || {};
  const builtSection = document.querySelector('#built');
  if (builtSection) {
    set('.eyebrow', built.eyebrow, builtSection);
    set('.h2', built.headline, builtSection);
    set('.lead', built.intro, builtSection);

    const cards = [...builtSection.querySelectorAll('.productCard')];
    const logoData = [
      { src: `data:image/jpeg;base64,${medlivoB64.trim()}`, alt: 'Medlivo', width: '118px', maxHeight: '29px' },
      { src: `data:image/jpeg;base64,${startupfairB64.trim()}`, alt: 'StartupFair', width: '112px', maxHeight: '28px' }
    ];

    logoData.forEach((logo, i) => {
      const card = cards[i];
      const brand = card && card.querySelector('.productBrand');
      if (!brand) return;
      brand.innerHTML = '';
      brand.style.minHeight = '38px';
      brand.style.display = 'flex';
      brand.style.alignItems = 'center';
      const img = document.createElement('img');
      img.src = logo.src;
      img.alt = logo.alt;
      img.style.width = logo.width;
      img.style.maxWidth = '100%';
      img.style.maxHeight = logo.maxHeight;
      img.style.height = 'auto';
      img.style.objectFit = 'contain';
      img.style.objectPosition = 'left center';
      img.style.display = 'block';
      brand.appendChild(img);
    });

    if (Array.isArray(built.products)) {
      built.products.forEach((product, i) => {
        const card = cards[i];
        if (!card) return;
        const paragraph = card.querySelector(':scope > p');
        if (paragraph) paragraph.textContent = product.body || product.description || '';
        const link = card.querySelector('.textLink');
        if (link && product.cta) link.textContent = product.cta;

        let detail = card.querySelector('.contentReviewDetail');
        if (!detail) {
          detail = document.createElement('div');
          detail.className = 'contentReviewDetail';
          const screen = card.querySelector('.productScreen');
          if (screen) card.insertBefore(detail, screen);
          else card.appendChild(detail);
        }
        detail.innerHTML = '';
        Object.assign(detail.style, { margin: '10px 0 0', display: 'grid', gap: '5px' });
        if (product.description) {
          detail.appendChild(makeText('strong', product.description, {
            fontSize: '13.5px', lineHeight: '1.38', letterSpacing: '-.015em', fontWeight: '600'
          }));
        }
        if (product.workflow) {
          detail.appendChild(makeText('span', product.workflow, {
            fontFamily: 'IBM Plex Mono,monospace', fontSize: '8.7px', lineHeight: '1.5', color: '#7c4dff'
          }));
        }
      });
    }

    let closing = builtSection.querySelector('.contentReviewClosing');
    if (!closing) {
      closing = document.createElement('div');
      closing.className = 'contentReviewClosing';
      builtSection.querySelector('.container')?.appendChild(closing);
    }
    closing.innerHTML = '';
    Object.assign(closing.style, { marginTop: '26px', paddingTop: '20px', borderTop: '1px solid #e6e8ed' });
    closing.append(
      makeText('b', built.closing, { display: 'block', fontSize: '18px', letterSpacing: '-.02em' }),
      makeText('span', built.discipline, {
        display: 'block', marginTop: '7px', fontFamily: 'IBM Plex Mono,monospace',
        fontSize: '10px', color: '#727b8b', letterSpacing: '.04em'
      })
    );
  }

  // SECTION 3 — BUILD NEW / MODERNIZE EXISTING
  const engagement = content.engagement || {};
  const engagementSection = [...document.querySelectorAll('section.section')].find(sec => {
    const e = sec.querySelector('.eyebrow');
    return e && /Build New/i.test(e.textContent || '');
  });
  if (engagementSection) {
    set('.eyebrow', engagement.eyebrow, engagementSection);
    set('.h2', engagement.headline, engagementSection);
    set('.lead', engagement.intro, engagementSection);
    const cards = [...engagementSection.querySelectorAll('.pathCard')];
    if (Array.isArray(engagement.paths)) {
      engagement.paths.forEach((path, i) => {
        const card = cards[i];
        if (!card) return;
        set('.pathTitle h3', path.title, card);
        const desc = card.querySelector(':scope > p');
        if (desc && path.description) desc.textContent = path.description;
        const steps = [...card.querySelectorAll('.pathSteps > div')];
        if (Array.isArray(path.steps)) {
          path.steps.forEach((step, j) => {
            const cell = steps[j];
            if (!cell) return;
            set('span', step.number, cell);
            set('b', step.title, cell);
            let detail = cell.querySelector('.contentReviewStepDesc');
            if (!detail) {
              detail = document.createElement('small');
              detail.className = 'contentReviewStepDesc';
              cell.appendChild(detail);
            }
            detail.textContent = step.description || '';
            Object.assign(detail.style, {
              display: 'block', marginTop: '5px', fontSize: '9px', lineHeight: '1.35', color: '#727b8b'
            });
          });
        }
      });
    }
  }

  // SECTION 4 — WHO WE BUILD FOR
  const audience = content.audience || {};
  const whoGrid = document.querySelector('.whoGrid');
  const audienceSection = whoGrid?.closest('section');
  if (audienceSection) {
    set('.eyebrow', audience.eyebrow, audienceSection);
    set('.h2', audience.headline, audienceSection);
    set('.lead', audience.intro, audienceSection);
    const rows = [...audienceSection.querySelectorAll('.whoItem')];
    if (Array.isArray(audience.items)) {
      audience.items.forEach((item, i) => {
        const row = rows[i];
        if (!row) return;
        set('b', item.title, row);
        set('span', item.text, row);
      });
    }
  }

  // SECTION 5 — CAPABILITIES
  const capabilities = content.capabilities || {};
  const capSection = document.querySelector('#capabilities');
  if (capSection) {
    set('.eyebrow', capabilities.eyebrow, capSection);
    set('.h2', capabilities.headline, capSection);
    set('.lead', capabilities.intro, capSection);
    const items = [...capSection.querySelectorAll('.capItem')];
    if (Array.isArray(capabilities.items)) {
      capabilities.items.forEach((cap, i) => {
        const item = items[i];
        if (!item) return;
        set('h3', cap.title, item);
        const p = item.querySelector('p');
        if (p) p.textContent = cap.text || '';

        let tagline = item.querySelector('.contentReviewCapTagline');
        if (!tagline) {
          tagline = document.createElement('strong');
          tagline.className = 'contentReviewCapTagline';
          item.insertBefore(tagline, p || null);
        }
        tagline.textContent = cap.tagline || '';
        Object.assign(tagline.style, {
          display: 'block', margin: '-1px 0 8px', fontSize: '12px', lineHeight: '1.4', color: '#fff', fontWeight: '600'
        });

        let areas = item.querySelector('.contentReviewCapAreas');
        if (!areas) {
          areas = document.createElement('span');
          areas.className = 'contentReviewCapAreas';
          item.appendChild(areas);
        }
        areas.textContent = cap.areas || '';
        Object.assign(areas.style, {
          display: 'block', marginTop: '10px', fontFamily: 'IBM Plex Mono,monospace',
          fontSize: '8.4px', lineHeight: '1.55', color: '#a58aff'
        });
      });
    }

    let support = capSection.querySelector('.contentReviewHealthcareSupport');
    if (!support) {
      support = document.createElement('div');
      support.className = 'contentReviewHealthcareSupport';
      capSection.querySelector('.container')?.appendChild(support);
    }
    support.innerHTML = '';
    Object.assign(support.style, {
      marginTop: '22px', paddingTop: '18px', borderTop: '1px solid #242730',
      display: 'flex', flexWrap: 'wrap', gap: '12px 22px', alignItems: 'center', justifyContent: 'space-between'
    });
    support.append(
      makeText('span', capabilities.support, { fontSize: '13px', color: '#c9cdd6' }),
      makeText('a', capabilities.cta, { fontSize: '12.5px', color: '#a58aff', fontWeight: '600' })
    );
  }

  // SECTION 6 — HOW ALODEN BUILDS
  const process = content.process || {};
  const processSection = [...document.querySelectorAll('section.section')].find(sec => {
    const e = sec.querySelector('.eyebrow');
    return e && /How Aloden Builds/i.test(e.textContent || '');
  });
  if (processSection) {
    set('.eyebrow', process.eyebrow, processSection);
    set('.h2', process.headline, processSection);
    set('.lead', process.intro, processSection);
    const processItems = [...processSection.querySelectorAll('.processItem')];
    if (Array.isArray(process.items)) {
      process.items.forEach((step, i) => {
        const item = processItems[i];
        if (!item) return;
        item.innerHTML = '';
        const num = makeText('span', step.number, {
          fontFamily: 'IBM Plex Mono,monospace', fontSize: '10px', color: '#7c4dff'
        });
        num.className = 'processNum';
        const title = makeText('b', step.title, {
          display: 'block', fontSize: '15px', marginTop: '10px', fontWeight: '600'
        });
        const tagline = makeText('strong', step.tagline, {
          display: 'block', fontSize: '11.5px', lineHeight: '1.4', marginTop: '6px', color: '#20242d', fontWeight: '600'
        });
        const body = makeText('span', step.text, {
          display: 'block', fontSize: '10.5px', lineHeight: '1.48', marginTop: '6px', color: '#727b8b'
        });
        item.append(num, title, tagline, body);
      });
    }

    let closing = processSection.querySelector('.contentReviewProcessClosing');
    if (!closing) {
      closing = document.createElement('div');
      closing.className = 'contentReviewProcessClosing';
      processSection.querySelector('.container')?.appendChild(closing);
    }
    closing.textContent = process.closing || '';
    Object.assign(closing.style, {
      marginTop: '22px', paddingTop: '18px', borderTop: '1px solid #e6e8ed',
      fontSize: '13px', fontWeight: '600', letterSpacing: '-.01em', color: '#20242d'
    });
  }
})().catch(err => {
  console.error('Aloden content review patch failed', err);
});
