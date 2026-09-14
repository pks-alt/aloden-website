import fs from 'node:fs';

const edits = new Map([
  ['preview/start-project-form.js', [
    [
`  if(offline){
    submitButton.disabled=true;
    submitButton.textContent='Online inquiries unavailable';
    if(reviewNote) reviewNote.innerHTML='To discuss your project, email <a href="mailto:hello@aloden.com?subject=Start%20a%20Project">hello@aloden.com</a>. Online inquiries are currently unavailable.';
  }`,
`  if(offline){
    submitButton.hidden = true;
    if(reviewNote) reviewNote.innerHTML='Prefer email? <a href="mailto:hello@aloden.com?subject=Start%20a%20Project">hello@aloden.com</a>.';
  }`
    ]
  ]],
  ['preview/careers.html', [
    [
`<div class="cr-uploadMode" id="careers-upload-mode" role="status" aria-live="polite">Online applications are currently unavailable. Email your résumé to <a data-careers-delivery-email href="mailto:hr@aloden.com?subject=Career%20introduction%20%7C%20Aloden">hr@aloden.com</a>, with the role title and reference.</div>`,
`<div class="cr-uploadMode" id="careers-upload-mode" role="status" aria-live="polite">Apply to a specific role above, or email your résumé to <a data-careers-delivery-email href="mailto:hr@aloden.com?subject=Career%20introduction%20%7C%20Aloden">hr@aloden.com</a> with the role title and reference.</div>`
    ],
    [
`<div class="cr-submitRow"><button type="submit" class="btn primary" id="career-submit" disabled>Online applications unavailable</button><span>Fields marked * are required.</span></div>`,
`<div class="cr-submitRow"><button type="submit" class="btn primary" id="career-submit" disabled hidden>Submit application →</button><span>Fields marked * are required.</span></div>`
    ],
    [
`<noscript><p class="cr-emailHelp">JavaScript is needed for online upload. Please email your résumé to <a href="mailto:hr@aloden.com">hr@aloden.com</a> instead.</p></noscript>`,
`<noscript><p class="cr-emailHelp">Email your résumé to <a href="mailto:hr@aloden.com">hr@aloden.com</a>.</p></noscript>`
    ],
    [
`<details><summary>How do I send my résumé?</summary><p id="careers-upload-faq">Email a PDF or DOCX résumé to <a href="mailto:hr@aloden.com?subject=Career%20application">hr@aloden.com</a>, including the role title and reference. Selecting a file in the form does not send it; online applications are currently unavailable.</p></details>`,
`<details><summary>How do I send my résumé?</summary><p id="careers-upload-faq">For a specific opening, choose Apply for this role so the job reference is included. You can also email a PDF or DOCX résumé to <a href="mailto:hr@aloden.com?subject=Career%20application">hr@aloden.com</a> with the role title and reference.</p></details>`
    ]
  ]],
  ['preview/careers-application.js', [
    [
`    if (!ready) { setStatus('Online applications are currently unavailable. Your résumé has not been sent. Email hr@aloden.com to apply.', 'error'); return; }`,
`    if (!ready) { setStatus('Please email your résumé to hr@aloden.com to apply.', 'error'); return; }`
    ],
    [
`          service_not_configured: 'Online applications are not available yet. Please email hr@aloden.com.',`,
`          service_not_configured: 'Please email your résumé to hr@aloden.com to apply.',`
    ],
    [
`          security_check_unavailable: 'The file-checking service is temporarily unavailable. No application was sent.',`,
`          security_check_unavailable: 'We could not complete the upload check. Please email your résumé to hr@aloden.com.',`
    ],
    [
`  if (preview) return;`,
`  if (preview) {
    submit.hidden = true;
    return;
  }`
    ],
    [
`      mode.textContent = 'Complete the form and upload one résumé. Your application will be sent to hr@aloden.com after verification.';`,
`      mode.textContent = 'Complete the form and upload one résumé. Your application will be sent to Aloden HR after verification.';
      submit.hidden = false;`
    ],
    [
`          'error-callback': () => { token = ''; buttonState(); setStatus('Verification is unavailable. Please retry later or email HR.', 'error'); }`,
`          'error-callback': () => { token = ''; buttonState(); setStatus('Verification could not be completed. Please email your résumé to hr@aloden.com.', 'error'); }`
    ],
    [
`      script.onerror = () => { mode.textContent = 'Verification could not load. Please email hr@aloden.com to apply.'; };`,
`      script.onerror = () => { mode.textContent = 'Please email your résumé to hr@aloden.com to apply.'; submit.hidden = true; };`
    ]
  ]],
  ['preview/careers-jobs.js', [
    [
`catch{counter.textContent='Unable to load openings';list.innerHTML='<div class="jobs-empty"><h3>Openings are temporarily unavailable.</h3><p>Please contact HR about current roles or send a general introduction.</p><a href="mailto:hr@aloden.com">Contact hr@aloden.com ↗</a></div>';}`,
`catch{counter.textContent='Current roles';list.innerHTML='<div class="jobs-empty"><h3>Looking for an opening?</h3><p>Contact Aloden HR for current roles or send a general introduction.</p><a href="mailto:hr@aloden.com">Contact hr@aloden.com ↗</a></div>';}`
    ]
  ]]
]);

for (const [file, replacements] of edits) {
  let text = fs.readFileSync(file, 'utf8');
  for (const [from, to] of replacements) {
    if (!text.includes(from)) throw new Error(`Expected text not found in ${file}: ${from.slice(0,120)}`);
    text = text.replace(from, to);
  }
  fs.writeFileSync(file, text);
  console.log(`Cleaned ${file}`);
}
