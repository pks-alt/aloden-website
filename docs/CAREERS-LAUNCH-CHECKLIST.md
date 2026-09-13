# Careers page — review and activation checklist

## Implemented

- Approved Careers composition, logo assets, existing section order, SEO, sitemap and footer links retained. Home and all other existing page designs are untouched by the resume-upload update.
- Candidate FAQs, practical hiring information, honest distinction between disciplines and actual vacancies, and early-career language without an employment guarantee.
- Native PDF/DOCX resume upload with drag/drop, file selection/removal, 5 MB limit, required contact/interest/location/availability fields, optional portfolio/introduction, and permission acknowledgment.
- Clear offline preview state. File selection alone stays in the browser; the static preview cannot send an application.
- Server-side multipart validation, bounded file structure checks, mandatory private malware-scan adapter, Turnstile hostname/action verification, durable rate limits and duplicate protection.
- Gmail MIME attachment delivery adapter with fixed HR recipient, candidate Reply-To, and server-held OAuth credentials. Success requires a provider receipt; uncertain sends are not automatically retried.
- Runnable Node API reference adapter, environment-variable template, and backend/browser tests using synthetic data and mocked external services only.

## Still requires activation, not another page redesign

1. Developer: choose/deploy the production hosting adapter and same-origin API routes; provision private persistent state, scanner, bot keys, and website-owned Gmail sender authorization.
2. HR: approve the applicant-data notice and actual retention, access, and deletion processes, including the sender and HR mailboxes. Do not invent these policies in website copy.
3. Owner/developer: authorize a synthetic live submission, then verify the real attachment arrives at HR and that security, duplicate, and failure cases behave as intended.
4. Owner: approve the reviewed branch before merge/deployment. Draft PR #8 targets feature/site-cosmetic-pass; no main merge has been performed.

## Publishing individual vacancies or programs

- Confirm active roles, employment entity, title, requirements, eligible locations, work arrangement, and approved compensation/benefit disclosures before publishing specific jobs. Talent areas are not JobPosting entries.
- Confirm campus/hackathon dates, venue/format, eligibility, registration route, selection process, and final public terms. Existing planning documents do not establish a live event.
- Do not publish placeholder salaries, promise remote work everywhere, or imply an application guarantees an interview or employment.

See **docs/CAREERS-RESUME-UPLOAD.md** for implementation, security, deployment, and test details. The Gmail connection in ChatGPT is not the website's OAuth credential. No live applicant or test email was sent during this update.
