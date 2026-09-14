/* Public form only. Secrets stay on the server; previews never transmit files. */
(() => {
  const form = document.querySelector('#careers-application');
  if (!form) return;
  const fileInput = form.querySelector('#career-resume');
  const dropzone = form.querySelector('#career-dropzone');
  const selected = form.querySelector('#career-file-selected');
  const error = form.querySelector('#career-file-error');
  const status = form.querySelector('#career-submit-status');
  const mode = document.querySelector('#careers-upload-mode');
  const submit = form.querySelector('#career-submit');
  const remove = form.querySelector('#career-file-remove');
  const LIMIT = 5 * 1024 * 1024;
  const preview = /(^|\.)(githack\.com|shipstatic\.com)$/.test(location.hostname) || location.protocol === 'file:';
  let jobReady = !new URL(location.href).searchParams.has('job') || ['general','active'].includes(form.dataset.jobState);
  let ready = false, busy = false, completed = false, uncertain = false;
  let token = '', widget = null, file = null, requestKey = null;
  const makeKey = () => crypto.randomUUID();
  const setStatus = (text, state = '') => { status.textContent = text; status.dataset.state = state; };
  const buttonState = () => { submit.disabled = !ready || !jobReady || !token || busy || completed || uncertain; };
  form.addEventListener('careers-job-state', () => { jobReady = ['general','active'].includes(form.dataset.jobState); buttonState(); });
  function choose(files) {
    error.textContent = '';
    fileInput.setCustomValidity('');
    selected.hidden = true;
    file = null;
    requestKey = null;
    if (!files?.length) return;
    const candidate = files[0];
    let message = '';
    if (files.length !== 1) message = 'Choose one résumé at a time.';
    else if (!/\.(pdf|docx)$/i.test(candidate.name)) message = 'Please use a PDF or DOCX file. Other formats are not accepted.';
    else if (!candidate.size) message = 'This file is empty. Choose another résumé.';
    else if (candidate.size > LIMIT) message = 'This file exceeds 5 MB. Choose a smaller PDF or DOCX.';
    if (message) {
      fileInput.value = '';
      fileInput.setCustomValidity(message);
      error.textContent = message;
      return;
    }
    file = candidate;
    form.querySelector('#career-filename').textContent = file.name;
    form.querySelector('#career-filesize').textContent = `${(file.size / 1024).toFixed(0)} KB · Selected on your device`;
    selected.hidden = false;
  }
  fileInput.addEventListener('change', () => choose(fileInput.files));
  remove.addEventListener('click', () => {
    if (busy || completed || uncertain) return;
    fileInput.value = '';
    choose([]);
    fileInput.focus();
  });
  for (const event of ['dragenter', 'dragover']) dropzone.addEventListener(event, e => {
    e.preventDefault();
    if (!busy && !completed && !uncertain) dropzone.classList.add('is-dragging');
  });
  for (const event of ['dragleave', 'drop']) dropzone.addEventListener(event, e => {
    e.preventDefault();
    dropzone.classList.remove('is-dragging');
  });
  dropzone.addEventListener('drop', e => {
    if (busy || completed || uncertain) return;
    choose(e.dataTransfer?.files);
    if (file) {
      // Retain a native FileList so built-in required validation remains effective.
      try { const list = new DataTransfer(); list.items.add(file); fileInput.files = list.files; }
      catch { file = null; selected.hidden = true; error.textContent = 'Please use Choose file on this browser.'; }
    }
  });
  form.addEventListener('input', event => {
    if (event.target.name !== 'cf-turnstile-response' && !busy && !completed && !uncertain) requestKey = null;
  });
  function lockFields(locked) {
    form.querySelectorAll('input, select, textarea, #career-file-remove').forEach(n => { n.disabled = locked; });
  }
  function resetChallenge() {
    token = '';
    if (widget !== null && window.turnstile) window.turnstile.reset(widget);
    buttonState();
  }
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!ready) { setStatus('Please email your résumé to hr@aloden.com to apply.', 'error'); return; }
    if (busy || completed || uncertain || !jobReady) return;
    if (!form.reportValidity() || !file) return;
    if (!token) { setStatus('Please complete the verification before submitting.', 'error'); return; }
    requestKey ||= makeKey();
    const data = new FormData(form);
    data.set('resume', file, file.name);
    data.set('turnstileToken', token);
    data.delete('cf-turnstile-response');
    busy = true;
    lockFields(true);
    buttonState();
    submit.textContent = 'Sending application…';
    setStatus('Uploading and checking your résumé. Please keep this page open.');
    try {
      const response = await fetch('/api/careers/applications', {
        method: 'POST', body: data, credentials: 'omit',
        headers: { 'Idempotency-Key': requestKey }, signal: AbortSignal.timeout(75000)
      });
      let result;
      try { result = await response.json(); } catch { throw new Error('unconfirmed'); }
      if (response.ok && result.ok === true && result.status === 'accepted' && /^[0-9a-f-]{36}$/i.test(result.applicationId || '')) {
        completed = true;
        setStatus(`Your application was accepted for delivery to Aloden HR. Reference: ${result.applicationId}. This is not an interview or employment confirmation.`, 'success');
        form.querySelector('#career-filesize').textContent = 'Accepted with your application';
        fileInput.value = '';
        file = null;
      } else if (result.error === 'delivery_unconfirmed' || result.error === 'application_processing') {
        uncertain = true;
        setStatus(`Delivery has not been confirmed. Please contact hr@aloden.com before submitting again. Reference: ${requestKey}.`, 'error');
      } else {
        const messages = {
          job_unavailable: 'This role is no longer accepting applications. Please check Current Openings. Your submission was not converted to a general introduction.',
          validation_failed: 'Check the required fields, valid email, and portfolio URL.',
          invalid_resume: 'The résumé could not be verified. Please use a standard, unencrypted PDF or DOCX.',
          unsafe_resume: 'This file could not pass the upload checks. Please export a fresh PDF or DOCX.',
          payload_too_large: 'The file is too large. The maximum résumé size is 5 MB.',
          rate_limited: 'Too many attempts. Please wait before trying again, or email HR.',
          bot_verification_failed: 'Verification expired or failed. Complete the check and try again.',
          origin_not_allowed: 'Please apply from the official Aloden website.',
          service_not_configured: 'Please email your résumé to hr@aloden.com to apply.',
          security_check_unavailable: 'We could not complete the upload check. Please email your résumé to hr@aloden.com.',
          delivery_failed: 'Delivery could not be completed. Please try again later or email HR.',
          request_conflict: 'This submission reference is already in use. Contact HR before submitting again.'
        };
        setStatus(messages[result.error] || 'Your application was not accepted. Please email HR for help.', 'error');
        if (result.error === 'service_not_configured') ready = false;
        if (result.error === 'job_unavailable') jobReady = false;
        if (['invalid_resume', 'unsafe_resume'].includes(result.error)) requestKey = null;
      }
    } catch {
      // Network timeouts can occur after a provider accepted a message. Never auto-retry.
      uncertain = true;
      setStatus(`We could not confirm delivery. Do not submit again until you check with hr@aloden.com. Your reference is ${requestKey}.`, 'error');
    } finally {
      busy = false;
      lockFields(completed || uncertain);
      submit.textContent = completed ? 'Application accepted' : uncertain ? 'Check delivery with HR' : 'Submit application →';
      resetChallenge();
      status.focus();
    }
  });
  if (preview) {
    submit.hidden = true;
    return;
  }
  (async () => {
    try {
      const response = await fetch('/api/careers/config', { cache: 'no-store', credentials: 'omit', signal: AbortSignal.timeout(8000) });
      if (!response.ok) return;
      const config = await response.json();
      if (config.enabled !== true || typeof config.turnstileSiteKey !== 'string' || !/^[a-zA-Z0-9_-]{10,100}$/.test(config.turnstileSiteKey)) return;
      const notice = new URL(config.applicantNoticeUrl, location.origin);
      if (notice.origin !== location.origin || !['https:', 'http:'].includes(notice.protocol)) return;
      const noticeLink = form.querySelector('#career-applicant-notice');
      noticeLink.href = notice.href;
      noticeLink.hidden = false;
      mode.textContent = 'Complete the form and upload one résumé. Your application will be sent to Aloden HR after verification.';
      submit.hidden = false;
      mode.dataset.live = 'true';
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.onload = () => {
        if (!window.turnstile) return;
        widget = window.turnstile.render('#career-bot-check', {
          sitekey: config.turnstileSiteKey, action: 'careers_application', theme: 'light', size: 'flexible',
          callback: value => { token = value; buttonState(); },
          'expired-callback': () => { token = ''; buttonState(); },
          'error-callback': () => { token = ''; buttonState(); setStatus('Verification could not be completed. Please email your résumé to hr@aloden.com.', 'error'); }
        });
        ready = true;
        submit.textContent = 'Submit application →';
        const faq = document.querySelector('#careers-upload-faq');
        if (faq) faq.textContent = 'Select one PDF or DOCX up to 5 MB, complete the required fields, and submit. Selecting a file alone does not send it. A confirmation appears after your application is accepted. You may also email your résumé to hr@aloden.com.';
        buttonState();
      };
      script.onerror = () => { mode.textContent = 'Please email your résumé to hr@aloden.com to apply.'; submit.hidden = true; };
      document.head.appendChild(script);
    } catch { /* Static previews retain the explicit offline message and email fallback. */ }
  })();
})();
