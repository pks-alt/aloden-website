(() => {
  const demo = document.querySelector('.heroOneDemo');
  const tabs = [...document.querySelectorAll('.heroOneTab')];
  if (!demo || !tabs.length) return;

  const examples = {
    medlivo: {
      signalTitle: 'New healthcare workforce need',
      signalKey1: 'Requirement',
      signalValue1: 'Clinical coverage',
      signalKey2: 'Timing',
      signalValue2: 'Defined window',
      signalKey3: 'Context',
      signalValue3: 'Facility / care setting',
      outcomeTitle: 'Operationally ready match',
      outcomeText: 'Context, readiness, and workflow state are connected before action.',
      productName: 'Medlivo',
      miniBadge: 'WORKFLOW READY',
      miniTitle: 'Best-fit path identified',
      miniAction: 'Review next step →'
    },
    startupfair: {
      signalTitle: 'New innovation challenge',
      signalKey1: 'Problem',
      signalValue1: 'Real business need',
      signalKey2: 'Builders',
      signalValue2: 'Open participation',
      signalKey3: 'Evidence',
      signalValue3: 'Structured evaluation',
      outcomeTitle: 'Evaluated opportunity',
      outcomeText: 'Challenge, builder evidence, evaluation, and selection stay connected.',
      productName: 'StartupFair',
      miniBadge: 'EVALUATION READY',
      miniTitle: 'Evidence organized for review',
      miniAction: 'Review opportunity →'
    },
    voice: {
      signalTitle: 'Conversation becomes a request',
      signalKey1: 'Intent',
      signalValue1: 'User goal understood',
      signalKey2: 'Context',
      signalValue2: 'System state available',
      signalKey3: 'Authority',
      signalValue3: 'Permission boundary',
      outcomeTitle: 'Verified system action',
      outcomeText: 'The product confirms the result—or escalates with context when human judgment is needed.',
      productName: 'Aloden Voice AI',
      miniBadge: 'ACTION VERIFIED',
      miniTitle: 'Outcome confirmed',
      miniAction: 'Continue workflow →'
    }
  };

  function render(name) {
    const example = examples[name];
    if (!example) return;

    demo.dataset.mode = name;
    demo.classList.remove('isChanging');
    void demo.offsetWidth;
    demo.classList.add('isChanging');

    Object.entries(example).forEach(([key, value]) => {
      const target = demo.querySelector(`[data-bind="${key}"]`);
      if (target) target.textContent = value;
    });

    tabs.forEach((tab) => {
      const active = tab.dataset.demo === name;
      tab.classList.toggle('isActive', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => render(tab.dataset.demo));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      tabs[next].focus();
      render(tabs[next].dataset.demo);
    });
  });

  const menuBtn = document.querySelector('.menuBtn');
  const navLinks = document.querySelector('.navLinks');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const open = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!open));
      if (open) {
        navLinks.removeAttribute('style');
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.left = '16px';
        navLinks.style.right = '16px';
        navLinks.style.top = `${document.querySelector('.nav')?.offsetHeight || 74}px`;
        navLinks.style.background = '#fff';
        navLinks.style.border = '1px solid #e6e8ed';
        navLinks.style.borderRadius = '12px';
        navLinks.style.padding = '14px 16px';
        navLinks.style.flexDirection = 'column';
        navLinks.style.alignItems = 'stretch';
        navLinks.style.gap = '2px';
        navLinks.style.boxShadow = '0 16px 38px rgba(21,28,45,.10)';
      }
    });
  }
})();
