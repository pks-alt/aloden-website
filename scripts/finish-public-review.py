from pathlib import Path
import re
root=Path('.')
def edit(path,old,new):
 p=root/path;s=p.read_text();assert old in s,(path,old[:100]);p.write_text(s.replace(old,new))
for p in ['preview/homepage-section1-review.js','preview/homepage-section1.html']:
 edit(p,'<span class="heroOneCoreMark" aria-hidden="true"><i></i><i></i><i></i><i></i></span>','<img class="heroOneCoreMark" src="assets/aloden-cube-symbol.svg" alt="" width="28" height="28" aria-hidden="true" decoding="async">')
p=root/'preview/homepage-section1.css';s=p.read_text();s=re.sub(r'\.heroOneCoreMark\{[^\n]*','''.heroOneCoreMark{display:block;width:28px;height:28px;flex:0 0 28px;object-fit:contain;margin-top:2px}
.heroOneCoreHead{align-items:flex-start}
.heroOneCoreHead>div{min-width:0}''',s);p.write_text(s)
p=root/'preview/index.html';s=p.read_text();s=re.sub(r'(<a aria-label="Aloden home" class="brand" href=")[^"]*(">)[\s\S]*?</a>',r'\1index.html\2<img class="siteBrandLogo siteLogo" src="assets/aloden-cube-logo-dark.svg" alt="Aloden" width="188" height="48" decoding="async"></a>',s,count=1);s=re.sub(r'<span class="alodenLockup">[\s\S]*?<span class="alodenWord">aloden</span></span>','<img class="siteFooterLogo" src="assets/aloden-cube-logo-dark.svg" alt="Aloden" width="176" height="45" loading="lazy" decoding="async">',s);p.write_text(s)
p=root/'preview/final.css';s=p.read_text();start=s.index('/* ===== OFFICIAL ALODEN BRAND');end=s.index('@media(max-width:980px)',start);s=s[:start]+'''/* Compatibility for legacy lockup markup; current pages use the SVG <img>. */
.brand .alodenLockup,.footer .alodenLockup{display:block;flex:none;width:158px;height:40px;background:url("assets/aloden-cube-logo.svg") left center / contain no-repeat}
.footer .alodenLockup{background-image:url("assets/aloden-cube-logo-dark.svg")}
.brand .alodenLockup>*,.footer .alodenLockup>*{display:none}
.brand .alodenLockup::before,.brand .alodenLockup::after,.footer .alodenLockup::before,.footer .alodenLockup::after{content:none}

'''+s[end:];s=re.sub(r'  [^\n]*\.alodenLockup::[^\n]*\n','',s);p.write_text(s.rstrip()+'\n')
p=root/'server/careers/jobs-api.mjs';s=p.read_text();old='${review?\'<p class="jobs-reviewNotice">REVIEW SNAPSHOT · Five hiring needs confirmed by PK. This is not the live job feed; HR publishing and résumé delivery still require activation.</p>\':\'\'}';assert old in s;p.write_text(s.replace(old,''))
p=root/'preview/careers-job-shared.mjs';s=p.read_text();s=s.replace('    ${review?`<p class="jobs-reviewNotice">REVIEW SNAPSHOT · Hiring confirmed by PK. Descriptions expanded from the supplied role briefs. Live publishing and website submissions are not activated.</p>`:\'\'}\n','')
s=s.replace("  const chips=[", "  const emailHref=`mailto:hr@aloden.com?${new URLSearchParams({subject:`Application | ${j.title} | ${j.id}`,body:`Hello Aloden HR,\\n\\nI am applying for ${j.title} (${j.id}).\\n\\nMy name:\\nLocation:\\nAvailability:\\n\\nI will attach my résumé before sending.`})}`;\n  const hasPay=Boolean(j.currency&&j.salaryMin!==''&&j.salaryMax!=='');\n  const chips=[")
s=s.replace('<small>Share your résumé and a short introduction.</small>','<small>Share your résumé and a short introduction.</small>${!preview?`<a class="jr-email" href="${esc(emailHref)}">Email hr@aloden.com ↗</a>`:\'\'}')
s=s.replace("${section('Compensation & benefits',`<p><strong>${esc(payOf(j))}</strong></p>${paragraphs(j.benefits||'Ask HR about the applicable compensation and benefits before proceeding. No salary or benefits package is implied by this review.')}`)}", "${section('Compensation & benefits',hasPay||j.benefits?`${hasPay?`<p><strong>${esc(payOf(j))}</strong></p>`:''}${paragraphs(j.benefits)}`:'<p>Contact <a href=\"mailto:hr@aloden.com?subject=Role%20compensation%20question\">hr@aloden.com</a> to discuss compensation and employment details for this role.</p>')}")
s=s.replace("${detail('Location',locationOf(j))}","${detail('Location',j.workModel||j.city||j.country?locationOf(j):'')}").replace("${detail('Employment',TYPES[j.employmentType]||'To be confirmed by HR')}","${detail('Employment',TYPES[j.employmentType])}").replace("${detail('Applications close',j.expiresAt?`${j.expiresAt} · 23:59 UTC`:'No closing date specified')}","${detail('Applications close',j.expiresAt?`${j.expiresAt} · 23:59 UTC`:'')}")
s=s.replace('Questions? Contact HR ↗','Questions? hr@aloden.com ↗')
start=s.index('export function jobRow(');end=s.index('\nexport function jobSchema',start)
s=s[:start]+'''export function jobRow(j,url){
  const facts=[j.workModel||j.city||j.country?locationOf(j):'',TEAM_TYPES[j.teamType]||TYPES[j.employmentType],j.experience].filter(Boolean);
  return `<article class="jobs-row"><div><span class="jobs-dept">${esc(DEPTS[j.department]||'Engineering')}</span><h3><a href="${esc(url)}">${esc(j.title)}</a></h3><p>${facts.map(esc).join('<span aria-hidden="true"> · </span>')}</p></div><div class="jobs-rowActions"><a class="jobs-rowLink" href="${esc(url)}" aria-label="View ${esc(j.title)}">View role <span aria-hidden="true">↗</span></a><a class="jobs-applyLink" href="careers.html?job=${encodeURIComponent(j.id)}#how-to-apply" aria-label="Apply for ${esc(j.title)}">Apply →</a></div></article>`;
}'''+s[end:];p.write_text(s)
edit('preview/careers-jobs.js',"label.textContent=review?'SELECTED ROLE · REVIEW MODE':'APPLYING FOR'","label.textContent='APPLYING FOR'")
edit('preview/careers-jobs.js',"document.querySelector('[data-careers-email]').href=","document.querySelectorAll('[data-careers-email],[data-careers-delivery-email]').forEach(link=>link.href=")
edit('preview/careers-jobs.js','I will attach my résumé before sending.`})}`;','I will attach my résumé before sending.`})}`);')
edit('preview/careers.html','Review mode · You can select a résumé here. Online delivery is not connected; email HR to apply.','Online applications are currently unavailable. Email your résumé to <a data-careers-delivery-email href="mailto:hr@aloden.com?subject=Career%20introduction%20%7C%20Aloden">hr@aloden.com</a>, with the role title and reference.')
edit('preview/careers.html','<div class="cr-uploadMode" id="careers-upload-mode" role="status">','<div class="cr-uploadMode" id="careers-upload-mode" role="status" aria-live="polite">')
edit('preview/careers.html','id="career-submit" disabled>Submit application <span aria-hidden="true">→</span>','id="career-submit" disabled>Online applications unavailable')
edit('preview/careers.html','<details><summary>How does résumé upload work?</summary><p>Select one PDF or DOCX up to 5 MB, complete the required fields, and submit when online applications are enabled. A confirmation appears only after the server confirms acceptance. On a review link, file selection stays in your browser and nothing is sent. You can always email HR instead.</p></details>','<details><summary>How do I send my résumé?</summary><p id="careers-upload-faq">Email a PDF or DOCX résumé to <a href="mailto:hr@aloden.com?subject=Career%20application">hr@aloden.com</a>, including the role title and reference. Selecting a file in the form does not send it; online applications are currently unavailable.</p></details>')
edit('preview/careers.html','<div class="jobs-talent"><span><strong>Not seeing your next role?</strong> We would still like to hear about your work.</span>','<div class="jobs-talent"><span><strong>Not seeing your next role?</strong> Send your résumé to <a href="mailto:hr@aloden.com?subject=Career%20introduction">hr@aloden.com</a>.</span>')
edit('preview/careers.html','href="mailto:hr@aloden.com?subject=Early%20Career%20at%20Aloden">Ask about early-career opportunities →','href="mailto:hr@aloden.com?subject=Early%20Career%20at%20Aloden">Early-career inquiries: hr@aloden.com →')
edit('preview/careers-application.js','Online submissions are not connected here. Your résumé has not been sent. Email hr@aloden.com instead.','Online applications are currently unavailable. Your résumé has not been sent. Email hr@aloden.com to apply.')
edit('preview/careers-application.js',"mode.textContent = 'Online applications · One résumé, sent with your details to Aloden HR after verification.';","mode.textContent = 'Complete the form and upload one résumé. Your application will be sent to hr@aloden.com after verification.';")
edit('preview/careers-application.js','        ready = true;\n        buttonState();','''        ready = true;
        submit.textContent = 'Submit application →';
        const faq = document.querySelector('#careers-upload-faq');
        if (faq) faq.textContent = 'Select one PDF or DOCX up to 5 MB, complete the required fields, and submit. Selecting a file alone does not send it. A confirmation appears after your application is accepted. You may also email your résumé to hr@aloden.com.';
        buttonState();''')
p=root/'preview/app.js';s=p.read_text();idx=s.index('function installAccessibilityBaseline()')
fn='''// Approved public contacts. Do not invent department-specific mailboxes.
const ALODEN_CONTACTS = Object.freeze({projects:'hello@aloden.com',careers:'hr@aloden.com'});
function installPublicContacts() {
  const file=(location.pathname.split('/').pop()||'index.html');
  const topics={'index.html':'New project','capabilities.html':'Services inquiry','ai-product-engineering.html':'AI Product Engineering','product-modernization.html':'AI-Native Modernization','agentic-ai.html':'Agentic Workflow Engineering','voice-ai-engineering.html':'Voice & Conversational AI','healthcare-ai.html':'Healthcare technology project','built-by-aloden.html':'Product engineering inquiry','company.html':'Business inquiry','privacy.html':'Privacy request','terms.html':'Website terms question'};
  const mail=(address,subject)=>`mailto:${address}?${new URLSearchParams({subject})}`;
  function contactLine(host,address,subject,label) {
    if(!host||host.querySelector('[data-contact-line]'))return;
    const p=document.createElement('p');p.className='siteContactLine';p.dataset.contactLine='true';
    p.append(`${label}: `);const a=document.createElement('a');a.href=mail(address,subject);a.textContent=address;p.append(a);host.append(p);
  }
  const hiring=file==='careers.html';
  document.querySelectorAll('.ctaBand>div,.w9-ctaBand>div').forEach(n=>contactLine(n,hiring?ALODEN_CONTACTS.careers:ALODEN_CONTACTS.projects,hiring?'Career introduction':topics[file]||'Project inquiry',hiring?'Careers':'Project inquiries'));
  for(const [id,subject] of [['medlivo','Healthcare workforce project'],['startupfair','Innovation platform project'],['voice','Voice & Conversational AI project']]) {
    const section=file==='built-by-aloden.html'?document.getElementById(id):null;
    contactLine(section?.querySelector('.w9-intro>div'),ALODEN_CONTACTS.projects,subject,'Discuss a similar project');
  }
  document.querySelectorAll('footer .footerFinalCol,footer .contentReviewFooterCol').forEach(column=>{
    if(column.querySelector('h4')?.textContent.trim()!=='Connect')return;
    for(const [purpose,label,subject] of [['projects','Project inquiries','New project'],['careers','Careers & recruitment','Career inquiry']]) {
      const address=ALODEN_CONTACTS[purpose];
      const existing=[...column.querySelectorAll('a')].filter(a=>a.getAttribute('href')?.startsWith(`mailto:${address}`));
      const a=existing.shift()||document.createElement('a');existing.forEach(n=>n.remove());
      a.href=mail(address,subject);a.classList.add('siteContactLink');a.setAttribute('aria-label',`${label}: ${address}`);
      a.replaceChildren();const small=document.createElement('span');small.className='siteContactLabel';small.textContent=label;a.append(small,document.createTextNode(address));
      if(!a.parentElement){const linkedin=[...column.querySelectorAll('a')].find(n=>n.href.includes('linkedin.com'));linkedin?column.insertBefore(a,linkedin):column.append(a);}
    }
  });
  document.querySelectorAll('a[href^="mailto:"]').forEach(a=>{
    const uri=new URL(a.getAttribute('href'));
    if(!Object.values(ALODEN_CONTACTS).includes(uri.pathname)||uri.searchParams.has('subject'))return;
    uri.searchParams.set('subject',uri.pathname===ALODEN_CONTACTS.careers?'Career inquiry':topics[file]||'Project inquiry');
    a.href=uri.toString();
  });
}

'''
s=s[:idx]+fn+s[idx:];s=s.replace('removeInsightsFromLaunch();\ninstallAccessibilityBaseline();','removeInsightsFromLaunch();\ninstallPublicContacts();\ninstallAccessibilityBaseline();').replace("    skip.href = '#main-content';","    skip.href = `#${main.id}`;").replace("      anchor.href = onStartProject ? '#project-start' : 'start-project.html';","      anchor.href = onStartProject ? '#project-contact' : 'start-project.html';").replace("    const note = document.querySelector('.projectSubmissionReview');\n    if (note) note.textContent = 'INITIAL PROJECT BRIEF · HIGH-LEVEL CONTEXT ONLY.';","    installPublicContacts();")
p.write_text(s)
p=root/'preview/homepage-all-sections.css';s=p.read_text();s+='''
/* Footer tracks must shrink on tablets/phones; never retain desktop minimums. */
@media(max-width:1020px){
  body.siteFinalSystem.homepageRework .footerFinalGrid{grid-template-columns:repeat(2,minmax(0,1fr));gap:30px!important}
}
@media(max-width:680px){
  body.siteFinalSystem.homepageRework .footerFinalGrid{grid-template-columns:minmax(0,1fr);gap:26px!important}
}
''';p.write_text(s)
p=root/'preview/site-final-system.css';s=p.read_text();s+='''
/* Public contact paths use the two approved company mailboxes. */
body.siteFinalSystem .siteContactLine{font-size:13px!important;line-height:1.65!important;margin:12px 0 0!important}
body.siteFinalSystem .siteContactLine a{color:inherit;text-decoration:underline;text-underline-offset:3px;overflow-wrap:anywhere}
body.siteFinalSystem footer .siteContactLabel{display:block;font-size:10px;color:#9aa3b1;margin-bottom:2px}
body.siteFinalSystem footer .siteContactLink{display:block;line-height:1.55;margin-bottom:10px;overflow-wrap:anywhere}
body.siteFinalSystem :is(.footerFinalGrid,.contentReviewFooterGrid)>*{min-width:0}
body.siteFinalSystem :is(.footerFinalCol,.contentReviewFooterCol) a{white-space:normal;overflow-wrap:anywhere}
body.siteFinalSystem .cr-uploadMode a,body.siteFinalSystem .jr-email{color:#5134bd;text-decoration:underline;text-underline-offset:3px}
body.siteFinalSystem .jr-applyCard .jr-email{display:block;font-size:13px;margin-top:15px;line-height:1.6}
''';p.write_text(s)
p=root/'preview/start-project-form.js';s=p.read_text();s=s.replace("  if (reviewNote) reviewNote.textContent = 'FUNCTIONALITY PREVIEW · SECURE DELIVERY ACTIVATES AFTER DEPLOYMENT CONFIGURATION.';","  if (reviewNote) reviewNote.textContent = 'You can also email hello@aloden.com.';")
s=s.replace("  if (turnstileSiteKey) {","  const offline=/^file:$/.test(location.protocol)||/(^|\\.)(githack\\.com|shipstatic\\.com)$/.test(location.hostname)||!turnstileSiteKey;\n  if(offline){\n    submitButton.disabled=true;\n    submitButton.textContent='Online inquiries unavailable';\n    if(reviewNote) reviewNote.innerHTML='To discuss your project, email <a href=\"mailto:hello@aloden.com?subject=Start%20a%20Project\">hello@aloden.com</a>. Online inquiries are currently unavailable.';\n  }\n  if (turnstileSiteKey && !offline) {")
p.write_text(s)
p=root/'scripts/careers-browser-qa.mjs';s=p.read_text();s=s.replace("assert(html.includes('Online delivery is not connected'), 'Offline preview must be explicit');","assert(html.includes('Online applications are currently unavailable.'), 'Inactive delivery must be explicit');\nassert(html.includes('data-careers-delivery-email'), 'Applicants must have an email route when online submissions are unavailable');");p.write_text(s)
(root/'docs/ALODEN-OFFICIAL-LOGO.md').write_text('''# Aloden approved logo — current source of truth

Use the existing violet cube logo approved for the current website:
- Light backgrounds: `preview/assets/aloden-cube-logo.svg`.
- Dark backgrounds (Home header and all public footers): `preview/assets/aloden-cube-logo-dark.svg`.
- Small brand mark and favicon: `preview/assets/aloden-cube-symbol.svg`.

The header/footer controller is `preview/app.js`. The Home process-card mark is in `preview/homepage-section1-review.js` and uses the same approved cube symbol. It sits to the left of the process heading, not as another company lockup below it.

Do not reintroduce the retired four-dot logo, CSS-drawn dots, or `aloden-logo-official.svg` on current pages. Those assets may remain in historical archives but are not the current brand source. Do not use the Aloden lockup as a separate Voice AI product logo.

Preserve the approved cube artwork and wordmark proportions. This repair changes usage, not the artwork itself.
''')
print('Applied public logo, contact and candidate-copy repairs. No hiring data or delivery credentials changed.')
