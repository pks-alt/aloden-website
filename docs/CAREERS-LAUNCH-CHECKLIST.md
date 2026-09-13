# Careers page: completion and launch checklist

## Implemented in the review branch

- Original Careers layout, logo assets, section order, and visual language retained.
- The opportunities area clearly separates role inquiries from general introductions.
- Application guidance covers a resume, relevant work/contribution, broad location/time zone, and availability.
- Introduction links prepare an email draft to hr@aloden.com. They do not transmit an application or imply delivery.
- Copy-email control reports success only after the clipboard call succeeds, with a visible-address fallback on denial.
- Six native FAQ disclosures cover vacancies vs talent areas, early career, work arrangements, AI-assisted work, safe sharing, and accessibility/verification contact.
- Early-career language does not promise dates, prizes, certificates, or employment. Participation is not an employment guarantee.
- An Our Work link lets applicants inspect product evidence without duplicating the portfolio.
- Footer legal links use the site's existing footerLegal style. Current-page semantics no longer incorrectly identify Company as the current page.
- Existing Careers metadata, canonical, social card, sitemap entry, and keyword-map entry retained. No JobPosting markup is emitted for the talent-network page.
- Browser QA captures the exact commit at 1440, 1024, 768, 390, and 320 pixels and checks local resources, overflow, keyboard interactions, email-draft content, clipboard outcomes, and the no-JavaScript application path.

## Needs HR/business confirmation before publishing individual openings

1. Which existing Aloden role descriptions are still active; hiring approval, title, responsibilities, qualifications, location eligibility, work model, and employment type.
2. Approved compensation/benefits information and any disclosures required for each hiring location. Do not assume a universal remote-work, benefits, or sponsorship policy.
3. Confirm hr@aloden.com is monitored and test receipt/ownership of a real candidate introduction. No applicant email was sent by the page tests.
4. Applicant-specific privacy/retention/access/deletion procedures and the appropriate notice for each hiring entity/location. The current link is to the website privacy notice, not an invented applicant-data policy.
5. For a campus or hackathon event: approved dates, venue/format, eligibility, registration route, selection process, and final public terms. Previously drafted program plans are not live event announcements.

## Developer launch tasks

- Deploy the reviewed branch only after approval; maintain the already-approved homepage and other page designs.
- Verify Careers is discoverable from the shared footer, its canonical and sitemap use the final host, and mobile navigation works on the deployed URL.
- Test the mailto draft with the actual supported email clients. Clipboard enhancement requires a secure context and permission; the visible address remains usable without it.
- A web application form, resume upload, ATS integration, and automated receipt are optional later work, not part of the current email-based page. Add them only with validated delivery, access controls, upload safeguards, privacy notice, retention policy, and anti-abuse controls. Do not show a submission-success message without confirmed delivery.
- Add a dedicated, truthful detail page and valid JobPosting data only for an approved, active job. Remove/expire closed postings promptly.

## Review status

Draft PR #8 targets feature/site-cosmetic-pass. No merge to main or production deployment is authorized by this checklist.

Technical references: Google Search Central JobPosting documentation (https://developers.google.com/search/docs/appearance/structured-data/job-posting); MDN details element (https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details).
