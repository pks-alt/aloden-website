(() => {
  const page = document.querySelector('.startProjectHero');
  const submitButton = document.querySelector('#submit-project-brief');
  if (!page || !submitButton) return;

  const cssHref = 'start-project-form.css?v=1';
  if (!document.querySelector(`link[href^="start-project-form.css"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssHref;
    document.head.appendChild(link);
  }

  const main = document.querySelector('main');
  const firstSection = document.querySelector('.startProjectHero');
  const lastSection = document.querySelector('.projectContactSection');
  if (!main || !firstSection || !lastSection) return;

  let form = document.querySelector('#project-brief-form');
  if (!form) {
    form = document.createElement('form');
    form.id = 'project-brief-form';
    form.noValidate = true;
    form.setAttribute('aria-label', 'Start a project brief');
    main.insertBefore(form, firstSection);

    let node = firstSection;
    while (node) {
      const next = node.nextSibling;
      form.appendChild(node);
      if (node === lastSection) break;
      node = next;
    }
  }

  submitButton.type = 'submit';
  submitButton.removeAttribute('aria-disabled');

  const honeypot = document.createElement('div');
  honeypot.className = 'projectHoneypot';
  honeypot.setAttribute('aria-hidden', 'true');
  honeypot.innerHTML = '<label for="project-website">Website</label><input id="project-website" name="website" type="text" tabindex="-1" autocomplete="off">';
  form.appendChild(honeypot);

  const statusRegion = document.createElement('div');
  statusRegion.className = 'projectSubmissionState';
  statusRegion.id = 'project-submission-state';
  statusRegion.setAttribute('role', 'status');
  statusRegion.setAttribute('aria-live', 'polite');
  statusRegion.hidden = true;

  const submitFooter = document.querySelector('.projectSubmitFooter');
  if (submitFooter) submitFooter.before(statusRegion);

  const errorSummary = document.createElement('div');
  errorSummary.className = 'projectErrorSummary';
  errorSummary.id = 'project-error-summary';
  errorSummary.setAttribute('role', 'alert');
  errorSummary.setAttribute('tabindex', '-1');
  errorSummary.hidden = true;
  if (submitFooter) submitFooter.before(errorSummary);

  const fields = {
    projectType: [...form.querySelectorAll('input[name="project-type"]')],
    projectStage: [...form.querySelectorAll('input[name="project-stage"]')],
    projectHelp: [...form.querySelectorAll('input[name="project-help"]')],
    outcome: form.querySelector('#project-outcome'),
    constraints: form.querySelector('#project-constraints'),
    timing: [...form.querySelectorAll('input[name="project-timing"]')],
    systems: form.querySelector('#project-systems'),
    name: form.querySelector('#project-name'),
    email: form.querySelector('#project-email'),
    company: form.querySelector('#project-company'),
    role: form.querySelector('#project-role'),
    website: form.querySelector('#project-website')
  };

  const labels = {
    projectType: 'What are you building or changing?',
    projectStage: 'Where is the product today?',
    projectHelp: 'What do you need help with?',
    outcome: 'What outcome are you trying to achieve?',
    timing: 'When does timing matter?',
    name: 'Your name',
    email: 'Work email',
    company: 'Company / organization',
    constraints: 'Project constraints',
    systems: 'Existing systems or data environment',
    role: 'Role / title'
  };

  const valueLabels = {
    projectType: {
      'new-product': 'New intelligent product',
      'ai-capability': 'AI inside an existing product',
      modernization: 'Product modernization',
      'agentic-workflow': 'Agentic workflow / automation',
      'voice-ai': 'Voice AI experience',
      'healthcare-ai': 'Healthcare AI platform / workflow',
      'not-sure': 'Not sure yet'
    },
    projectStage: {
      'early-idea': 'Early idea',
      'validated-concept': 'Validated concept / prototype',
      'production-product': 'Existing product in production',
      'active-modernization': 'Active modernization',
      'ai-underway': 'AI initiative already underway',
      diagnose: 'Need help diagnosing the problem'
    },
    projectHelp: {
      'define-product': 'Define or productize the idea',
      'ai-capability': 'Add AI where it creates real value',
      'agentic-workflow': 'Automate a complex workflow',
      'voice-experience': 'Create a voice or conversational experience',
      'modernize-product': 'Modernize an existing product',
      'systems-data': 'Connect systems, data, and workflows',
      production: 'Make the product more production-ready',
      healthcare: 'Apply healthcare workflow expertise',
      'not-sure': 'Not sure which path fits'
    },
    timing: {
      exploring: 'Exploring / no fixed date',
      quarter: 'Within the next quarter',
      'six-months': 'Within 3–6 months',
      urgent: 'Active / time-sensitive initiative'
    }
  };

  const groupContainers = {
    projectType: form.querySelector('.projectQualifier fieldset'),
    projectStage: form.querySelector('.projectStageField'),
    projectHelp: form.querySelector('.projectHelpField'),
    timing: form.querySelector('.projectContextField fieldset, fieldset.projectContextField')
  };
  if (!groupContainers.timing && fields.timing[0]) groupContainers.timing = fields.timing[0].closest('fieldset');

  const errorNodes = new Map();

  function firstControl(key) {
    const field = fields[key];
    return Array.isArray(field) ? field[0] : field;
  }

  function errorHost(key) {
    if (groupContainers[key]) return groupContainers[key];
    const field = firstControl(key);
    if (!field) return null;
    return field.closest('.projectContextField, .projectContactField') || field.parentElement;
  }

  function ensureErrorNode(key) {
    if (errorNodes.has(key)) return errorNodes.get(key);
    const host = errorHost(key);
    if (!host) return null;
    const node = document.createElement('p');
    node.className = 'projectFieldError';
    node.id = `project-error-${key}`;
    node.hidden = true;
    host.appendChild(node);
    errorNodes.set(key, node);
    return node;
  }

  Object.keys(labels).forEach(ensureErrorNode);

  function setInvalid(key, message) {
    const controls = Array.isArray(fields[key]) ? fields[key] : [fields[key]];
    controls.filter(Boolean).forEach((control) => {
      control.setAttribute('aria-invalid', 'true');
      control.setAttribute('aria-describedby', `project-error-${key}`);
    });
    const host = errorHost(key);
    if (host) host.classList.add('hasFormError');
    const node = ensureErrorNode(key);
    if (node) {
      node.textContent = message;
      node.hidden = false;
    }
  }

  function clearInvalid(key) {
    const controls = Array.isArray(fields[key]) ? fields[key] : [fields[key]];
    controls.filter(Boolean).forEach((control) => {
      control.removeAttribute('aria-invalid');
      if (control.getAttribute('aria-describedby') === `project-error-${key}`) control.removeAttribute('aria-describedby');
    });
    const host = errorHost(key);
    if (host) host.classList.remove('hasFormError');
    const node = ensureErrorNode(key);
    if (node) {
      node.textContent = '';
      node.hidden = true;
    }
  }

  function checkedValue(list) {
    return list.find((input) => input.checked)?.value || '';
  }

  function checkedValues(list) {
    return list.filter((input) => input.checked).map((input) => input.value);
  }

  function trimValue(field) {
    return field ? field.value.trim() : '';
  }

  function validate() {
    const errors = [];
    const projectType = checkedValue(fields.projectType);
    const projectStage = checkedValue(fields.projectStage);
    const projectHelp = checkedValues(fields.projectHelp);
    const outcome = trimValue(fields.outcome);
    const timing = checkedValue(fields.timing);
    const name = trimValue(fields.name);
    const email = trimValue(fields.email);
    const company = trimValue(fields.company);

    const add = (key, message) => {
      setInvalid(key, message);
      errors.push({ key, message });
    };

    Object.keys(labels).forEach(clearInvalid);

    if (!projectType) add('projectType', 'Choose what you are building or changing.');
    if (!projectStage) add('projectStage', 'Choose the current state of the product.');
    if (!projectHelp.length) add('projectHelp', 'Choose at least one area where you need help.');
    if (!outcome) add('outcome', 'Describe the outcome you are trying to achieve.');
    else if (outcome.length > 2000) add('outcome', 'Keep the desired outcome under 2,000 characters.');
    if (!timing) add('timing', 'Choose the timing that is closest to the project.');
    if (!name) add('name', 'Enter your name.');
    else if (name.length > 120) add('name', 'Keep your name under 120 characters.');
    if (!email) add('email', 'Enter your work email.');
    else if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) add('email', 'Enter a valid work email address.');
    if (!company) add('company', 'Enter your company or organization.');
    else if (company.length > 160) add('company', 'Keep the company or organization under 160 characters.');
    if (trimValue(fields.constraints).length > 2000) add('constraints', 'Keep the constraints under 2,000 characters.');
    if (trimValue(fields.systems).length > 500) add('systems', 'Keep the systems description under 500 characters.');
    if (trimValue(fields.role).length > 120) add('role', 'Keep the role or title under 120 characters.');

    return errors;
  }

  function showErrorSummary(errors) {
    if (!errors.length) {
      errorSummary.hidden = true;
      errorSummary.innerHTML = '';
      return;
    }
    errorSummary.innerHTML = `<b>Please complete ${errors.length === 1 ? 'the highlighted item' : 'the highlighted items'} before submitting.</b><ul>${errors.map(({ key, message }) => `<li><a href="#${firstControl(key)?.id || ''}" data-error-key="${key}">${message}</a></li>`).join('')}</ul>`;
    errorSummary.hidden = false;
    errorSummary.querySelectorAll('a[data-error-key]').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        focusField(link.dataset.errorKey);
      });
    });
  }

  function focusField(key) {
    const control = firstControl(key);
    if (!control) return;
    control.focus({ preventScroll: true });
    const section = control.closest('section');
    (section || control).scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  }

  function payload() {
    return {
      projectType: checkedValue(fields.projectType),
      projectStage: checkedValue(fields.projectStage),
      projectHelp: checkedValues(fields.projectHelp),
      outcome: trimValue(fields.outcome),
      constraints: trimValue(fields.constraints),
      timing: checkedValue(fields.timing),
      systems: trimValue(fields.systems),
      contact: {
        name: trimValue(fields.name),
        email: trimValue(fields.email),
        company: trimValue(fields.company),
        role: trimValue(fields.role)
      },
      website: trimValue(fields.website),
      turnstileToken: form.querySelector('input[name="cf-turnstile-response"]')?.value || '',
      pagePath: location.pathname,
      submittedAtClient: new Date().toISOString()
    };
  }

  function human(value, map) {
    return map[value] || value || '—';
  }

  function renderSuccess(data, submitted) {
    const summary = data?.summary || {
      projectType: human(submitted.projectType, valueLabels.projectType),
      projectStage: human(submitted.projectStage, valueLabels.projectStage),
      projectHelp: submitted.projectHelp.map((item) => human(item, valueLabels.projectHelp)),
      company: submitted.contact.company
    };
    statusRegion.className = 'projectSubmissionState isSuccess';
    statusRegion.innerHTML = `<div><span>BRIEF RECEIVED</span><h3>Project brief received.</h3><p>We’ll review the context and follow up using the work email you provided.</p></div><dl><div><dt>Project type</dt><dd>${escapeHtml(summary.projectType)}</dd></div><div><dt>Current state</dt><dd>${escapeHtml(summary.projectStage)}</dd></div><div><dt>Areas of help</dt><dd>${escapeHtml(Array.isArray(summary.projectHelp) ? summary.projectHelp.join(' · ') : String(summary.projectHelp || '—'))}</dd></div><div><dt>Company</dt><dd>${escapeHtml(summary.company || submitted.contact.company)}</dd></div></dl>`;
    statusRegion.hidden = false;
    statusRegion.setAttribute('tabindex', '-1');
    statusRegion.focus({ preventScroll: true });
    statusRegion.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
    submitButton.disabled = true;
    submitButton.textContent = 'Project Brief Received ✓';
    errorSummary.hidden = true;
  }

  function renderFailure(message, isRateLimit = false) {
    statusRegion.className = 'projectSubmissionState isFailure';
    statusRegion.innerHTML = `<div><span>${isRateLimit ? 'PLEASE WAIT' : 'BRIEF NOT SENT'}</span><h3>${isRateLimit ? 'Please wait before trying again.' : 'We could not send the project brief yet.'}</h3><p>${escapeHtml(message)}</p><p>Your entries are still on this page. You can retry, or email <a href="mailto:hello@aloden.com?subject=Start%20a%20Project">hello@aloden.com</a>.</p></div>`;
    statusRegion.hidden = false;
    statusRegion.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  }

  Object.entries(fields).forEach(([key, field]) => {
    if (!labels[key]) return;
    const controls = Array.isArray(field) ? field : [field];
    controls.filter(Boolean).forEach((control) => {
      const eventName = control.matches('input[type="radio"], input[type="checkbox"]') ? 'change' : 'input';
      control.addEventListener(eventName, () => clearInvalid(key));
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submitButton.disabled) return;

    statusRegion.hidden = true;
    const errors = validate();
    showErrorSummary(errors);
    if (errors.length) {
      errorSummary.focus({ preventScroll: true });
      errorSummary.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
      return;
    }

    const submitted = payload();
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.setAttribute('aria-busy', 'true');
    submitButton.textContent = 'Submitting…';

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch('/api/project-brief', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submitted),
        signal: controller.signal
      });

      let data = null;
      try { data = await response.json(); } catch (_) { /* non-JSON failure */ }

      if (response.ok && data?.ok) {
        renderSuccess(data, submitted);
        return;
      }

      if (response.status === 400 && Array.isArray(data?.errors)) {
        const serverErrors = data.errors.filter((item) => labels[item.field]).map((item) => ({ key: item.field, message: item.message }));
        serverErrors.forEach(({ key, message }) => setInvalid(key, message));
        if (serverErrors.length) {
          showErrorSummary(serverErrors);
          errorSummary.focus();
          return;
        }
      }

      if (response.status === 429) {
        renderFailure('Too many submission attempts were received from this connection. Please wait a little and try again.', true);
      } else if (response.status === 503) {
        renderFailure('The secure submission service is not available at the moment. Please try again shortly or use the email option below.');
      } else {
        renderFailure('Nothing was cleared. Please try again, or use the email option below if the issue continues.');
      }
    } catch (error) {
      const message = error?.name === 'AbortError'
        ? 'The request took too long. Nothing was cleared; please retry.'
        : 'The secure submission service could not be reached. Nothing was cleared; please retry or use email.';
      renderFailure(message);
    } finally {
      window.clearTimeout(timeout);
      submitButton.removeAttribute('aria-busy');
      if (!statusRegion.classList.contains('isSuccess')) {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    }
  });
})();
