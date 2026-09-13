# Careers — five openings and HR publishing

## Review scope

PK asked to add the **five active roles in the supplied staffing-plan image**:

| Stable job ID | Current role | Commitment in the source | Scope in the source |
|---|---|---|---|
| ald-202600000001 | Lead Full-Stack Architect | Core team | Next.js, PostgreSQL, RBAC, Hostinger deployment |
| ald-202600000002 | Backend / Data Engineer | Core team | Unified schema, migrations, audit, consent |
| ald-202600000003 | Frontend Engineer | Core team | Wireframes to screens, forms, visibility UI |
| ald-202600000004 | Security / DevOps | Part-time | Secrets, staging, backups, abuse limits |
| ald-202600000005 | QA / Journey Tester | Part-time | Three journeys, failure cases, deadline cases |

The source's **AI/ML engineer** is labeled **Phase 2, optional** and is NOT one of the five current openings. The earlier unfinished implementation incorrectly substituted other Library job descriptions; this version supersedes that list with the actual supplied image.

Descriptions have been expanded from the image's short role briefs for review. No salary, benefits, country, start date, closing date, remote-work entitlement, or minimum years of experience was supplied or invented. "Core team" describes team composition, not an assertion of full-time employment. Part-time was explicitly supplied for Security / DevOps and QA / Journey Tester.

The 55/45/40/20/15-day figures are **development-effort estimates**, not hiring deadlines, time-to-fill promises, or employment/contract durations. They are intentionally omitted from public job descriptions. Hostinger is retained only as a skill/deployment context in the architect brief, not as a decision about the Aloden website hosting provider.

`preview/data/careers-openings.json` is a review snapshot, NOT the runtime job database. All five positions appear in the static HTML review, with individual static role-detail previews and job-specific résumé links. Live public data is rendered from the published database records. If the live API fails, it does not silently show review data as current vacancies.

The original Careers design and section order are retained. Only the Opportunities placeholder and role selection are extended. Home, approved logos, other service pages, and Start a Project are unchanged.

## What HR can do

Open `/hr-jobs.html` on the deployed site and sign in with an individually authorized Google account.

1. **Add job** — enter a title and save a draft. A stable job reference is assigned.
2. **Save draft** — update role, location, content, compensation, benefits, and closing date. Saving never replaces the public version.
3. **Preview** — inspect the current draft. This does not publish it or enable an application to a draft.
4. **Publish** — a publishing-authorized HR user confirms the approval statement. Server validation requires the complete fields and future closing date. Publication creates a distinct live snapshot.
5. **Edit** — saving later changes keeps the live version and its public version/lastmod stable until the revision is published.
6. **Close job** — removes the role from Current Openings and blocks new role-specific applications. The public detail route returns HTTP 410 without JobPosting data.
7. **Duplicate** — creates a separate, unpublished draft with a new reference.

Concurrent edits use version checks; stale writes return a conflict rather than overwriting another editor. Recent changes record actor, operation, version and time. Editor accounts can draft and preview; publisher accounts can additionally publish and close. No applicant-ranking or automated hiring decisions are implemented.

The review at `preview/reviews/hr-jobs.html` is an explicitly labeled interactive demo. All its changes are in-memory, reset on reload, and never reach the HR API. It is not an authentication bypass and must not be deployed as the live workspace. The production shell never falls back to a pretend signed-in state.

## Public and candidate flow

- `GET /careers.html`: server-rendered Current Openings, with progressively enhanced search, discipline and work-arrangement filters.
- `GET /api/careers/jobs`: published, unexpired roles only.
- `GET /jobs/:id`: first-class server-rendered HTML with title, description, canonical, social tags and JobPosting JSON-LD for complete live roles.
- `GET /api/careers/jobs/:id`: selected live role for application context.
- `GET /jobs-sitemap.xml`: current published role URLs; closed or expired jobs are removed.
- Role Apply buttons link to `careers.html?job=<id>#how-to-apply`.
- The candidate sees the selected job title and ID; the hidden ID travels with the résumé. The server resolves title/department/version from its own published record, never a browser-supplied title.
- HR email includes job title, job ID and published version. General introductions remain a separate path.
- Draft, invalid, expired or closed jobs are rejected. Closing during the file scan is checked again before delivery. The server does not silently convert a blocked role submission to general interest.
- A duplicate request already accepted before a job closed can return its original accepted receipt without sending a second message.

## Developer activation — use the chosen production host

Keep résumé delivery setup in `CAREERS-RESUME-UPLOAD.md`; it remains separately gated. The new job tools can be configured independently of Gmail delivery.

1. Use the Node 22.16+ reference adapter (single-instance/private persistent SQLite), or implement equivalent durable interfaces for your hosting platform. Do not use ephemeral serverless local storage. Run under a least-privilege service account with restrictive private database permissions and backups.
2. Reverse-proxy **`/careers.html`, `/jobs/*`, `/jobs-sitemap.xml`, `/api/careers/*`, `/api/hr/*`, and `/auth/careers/*`** to the runtime on the same HTTPS origin. Serve approved static assets normally. Private API routes must never fall through to an HTTP 200 static HTML page.
3. Set `CAREERS_JOBS_ENABLED`, `CAREERS_JOBS_DB`, `CAREERS_SITE_ORIGIN` and the HR settings in `server/careers/.env.example`. Keep jobs/HR and upload sending disabled until their respective configuration is validated.
4. For HR sign-in, create a website-owned Google OAuth web client using only `openid email`, with redirect URI `https://<canonical-host>/auth/careers/callback`. This is separate from Gmail's sending OAuth client and separate from ChatGPT's connector.
5. Configure **exact lowercase individual account emails** in `CAREERS_HR_USERS_JSON`, mapped to `editor` or `publisher`. There are no default users, shared passwords, or domain-wide automatic privileges. Use organizational MFA. The application verifies issuer/audience/signature/nonce/email verification, PKCE/state/cookie binding, Secure HttpOnly sessions, exact Origin and per-session CSRF for writes. Sessions expire after 30 minutes idle or eight hours absolute. Removing a user from the allowlist takes effect on subsequent authorization.
6. Import the confirmed hiring needs as drafts, explicitly:

```sh
# Set CAREERS_JOBS_DB to a private absolute path, not the webroot.
umask 077
node --env-file=/private/path/careers.env scripts/careers-import-jobs.mjs
```

The import is create-only: it does not overwrite existing HR edits, reopen a job or publish it. Confirm the expanded descriptions and enter the actual employment terms before publishing through the workspace. The five roles are present without fabricated compensation or location details. If someone imported the earlier unfinished list, review and correct those unpublished drafts in HR; the importer intentionally does not overwrite existing edits.

7. This implementation conservatively requires compensation range, currency, pay period, benefits, eligible location(s), full description and a valid closing date before publishing. This is a product guardrail, not a claim of universal legal requirements or legal compliance. HR must check the disclosures applicable to each hiring location. Do not insert artificial values to bypass validation.
8. Do not publish `/reviews/` or the review data snapshot as the live job feed. The individual files under `reviews/jobs/` and generic `career-role.html?job=...` are noindex static-review routes; canonical live jobs are served at `/jobs/:id`.
9. Test Google login with an authorized editor and publisher, an unauthorized user, state replay, sign-out, stale edits, closing, expiry and application job references on the real deployment. The included tests mock Google and Gmail; no live email or job was published during development.
10. Submit the live job sitemap and validate actual detail pages with Google Rich Results Test. Closing must remove JobPosting data and the active sitemap URL; do not emit JobPosting for general talent interest or unpublished drafts.

## Tests

```sh
node scripts/site-qa.mjs
node --test server/careers/careers.test.mjs server/careers/jobs.test.mjs
node --test server/project-brief-handler.test.mjs
# Careers Browser QA installs Playwright in an isolated /tmp package:
node scripts/careers-browser-qa.mjs
node scripts/careers-jobs-browser-qa.mjs
```

Tests use only synthetic applicants, mocked Google/Gmail services, and private temporary databases. The browser review covers all five jobs and their application links, filtering, desktop/tablet/mobile, the protected shell, job-manager interactions and no-preview transmission. Backend tests exercise publication, drafts vs live data, stale-write protection, expiry, closure, audit entries, SSR/schema, injection escaping, role-linked email, OIDC and CSRF.

Technical implementation references:
- Google OIDC: https://developers.google.com/identity/openid-connect/openid-connect
- Google JobPosting: https://developers.google.com/search/docs/appearance/structured-data/job-posting
- OWASP CSRF: https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html

No main merge or production deployment is authorized by this handoff.

## Review completion

The failed integration was a premature assertion about a lazy-loaded footer logo. The browser check now scrolls each image into view and waits for decoding before asserting success; it does not bypass or remove image-loading assertions. All related source is integrated directly; the old staging patch files and self-editing integration workflow are removed. Normal read-only QA covers the committed source.

Run `node scripts/careers-job-previews.mjs` after editing review data or the shared role renderer. It regenerates the HTML snapshot, five noindex role previews, and isolated HR demo deterministically. Production jobs never use this review generator as their database.
