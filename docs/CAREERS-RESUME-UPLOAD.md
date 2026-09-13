# Careers resume upload — developer handoff

## Status

The upload UI and runnable Node API reference are implemented for review. **Live delivery is not activated.** Home and other approved page designs are unchanged. This is not a hosting decision or merge approval.

The Gmail connection in ChatGPT was used only to read relevant HR-address routing context. It does not expose website OAuth credentials or activate a public API. No real applicant was used in test fixtures and no test application was sent to HR.

## Candidate experience

The existing candidate area has full name, email, area of interest, city/country, availability, optional portfolio/introduction, required PDF/DOCX resume, and required permission acknowledgment. Drag/drop and native file selection both work; candidates can inspect/remove the filename and receive size/type errors.

File limit: **5 × 1024 × 1024 bytes**, shown as 5 MB. File selection alone never sends or persists the resume. No applicant analytics, browser localStorage, external document preview, or automatic candidate email is added. Githack, ShipStatic mirrors, and local-file previews remain explicitly offline, with email as fallback.

## API and delivery

- `GET /api/careers/config`: public enabled state, sitekey, approved notice path, limits. Never secrets.
- `POST /api/careers/applications`: multipart fields plus UUIDv4 `Idempotency-Key` header.
- Configuration, exact Origin, trusted transport IP, durable limits, bounded body parsing, fields/consent, and Turnstile hostname/action are checked independently of the browser.
- File checks cover extension/MIME/bytes, PDF framing, and bounded DOCX ZIP structure, expanded sizes, CRCs, mandatory parts, traversal/duplicate entries and active-content restrictions. Structural checks are NOT malware detection.
- A clean result from private, operator-controlled ClamAV is mandatory. Scanner failure, timeout, or unknown verdict blocks delivery.
- Gmail sends a plain-text summary and resume attachment only to `hr@aloden.com`, with candidate email as Reply-To. Attachment filenames are server-generated. Applicant text cannot change recipients or email headers.
- Acceptance requires a Gmail message ID and durable accepted-state write. This does not guarantee inbox placement, HR review, or an interview.
- Outbound timeouts are ambiguous: the ledger holds them for reconciliation and the browser does not automatically resend.

## Runtime requirements

`server/careers/runtime.mjs` is a Node 22.16+ single-instance container/VM reference adapter, not a decision to use a particular host. Its `node:sqlite` API is active-development in the tested Node version. SQLite WAL needs private persistent LOCAL storage; do not use an ephemeral serverless filesystem or network share. For other hosts, supply atomic durable ledger/rate services and retain the handler tests.

Bind the API to loopback and reverse-proxy the two routes on the SAME HTTPS origin as Careers. The API never serves repository, database, or uploaded files as static content. Set the proxy body limit to 6 MiB for a 5 MiB resume plus multipart overhead, and provide an adequate processing timeout. Check the selected platform's actual upload limit before deploying this adapter unchanged.

Default limits: four concurrent requests; ten attempts/client/hour; 200 attempts/hour overall. The socket IP is authoritative. Only explicitly listed private proxy IPs may supply an overwritten `X-Real-IP`; arbitrary browser forwarding headers are not trusted. Rate-limit IP keys use a private HMAC salt.

Run disabled without credentials:

```sh
node server/careers/runtime.mjs
```

For activation, use `server/careers/.env.example` as a template outside the repository or in the hosting secret manager:

```sh
umask 077
node --env-file=/private/path/careers.env server/careers/runtime.mjs
```

## Activation checklist

1. Deploy same-origin API routes, private persistent state directory and restrictive service-account permissions. No credentials belong in browser code, screenshots, source control, or ChatGPT.
2. In a website-owned Google Cloud project, enable Gmail API and obtain reviewed server-side offline OAuth authorization with least-privileged `gmail.send`. Authorize a REAL mailbox permitted to send as `GMAIL_SENDER`. HR may be an alias/group; do not assume the recipient address is a Google login. Store client ID/secret/refresh token server-side. Candidates must never sign in to Google to apply.
3. Configure a Turnstile widget for the approved hostname. Set sitekey/secret, validate `action=careers_application`, and do not use test keys in production.
4. Run ClamAV privately with current signatures, document/archive scanning enabled, and scan/stream limits aligned to the 5 MiB file and bounded DOCX expansion limits. Never expose clamd TCP publicly or send resumes to public scanning services. Validate real clean/blocked behavior and signature freshness; tests use a mock scanner.
5. Publish an HR-approved applicant-data notice covering actual hiring entity, recruitment use, access, providers/transfers, retention/deletion, and relevant rights/contact routes. Set `CAREERS_APPLICANT_NOTICE_URL` to its same-origin path and `CAREERS_PRIVACY_APPROVED=true`. Do not substitute the general website notice without HR review.
6. Set `CAREERS_ENABLED=true`; verify config and notice reachability. With explicit authorization, submit a SYNTHETIC live application, verify the attachment arrives at HR and Reply-To works, and test duplicate, bot-replay, and unsafe-file cases. Verify sender identity and the applicable Google Workspace email-authentication configuration.
7. Monitor scanner/authentication errors, rate limits, and uncertain/interrupted application states without logging applicant contents or credentials. Assign an HR owner and keep email available as fallback.

## Retention and reconciliation

The reference API processes resumes in request memory, not a public upload directory/object bucket. Gmail stores message/attachment copies in the sender's Sent mailbox and recipient delivery path. Aloden must manage mailbox access, retention, backups, and deletion; the code does not automatically delete resumes from Gmail.

SQLite stores reference, request fingerprint, status, provider message ID and timestamp, not raw name/email/resume. It prunes terminal rows after seven days and obsolete rate buckets after the current/previous hour. These are technical idempotency settings, NOT an applicant retention policy. Unknown/interrupted records need operator reconciliation and an approved purge schedule. Treat hashed metadata as private.

For uncertain delivery, look up the application reference in the authorized sender/HR mailbox. Do not blindly mark it unsent or resend it. There is no public administrative retry or attachment-download endpoint.

## Tests and limitations

```sh
node --check preview/careers-application.js
node scripts/site-qa.mjs
node --test server/careers/careers.test.mjs
node --test server/project-brief-handler.test.mjs
```

Careers Browser QA runs Playwright at 1440/1024/768/390/320 pixels. It covers file choose/remove/drop, size/type errors, required fields/consent, no preview transmission, accepted/failure/uncertain responses, keyboard behavior, clipboard, and no-JavaScript fallback. Backend tests cover bounded PDF/DOCX validation, request abuse, origin/bot/scanner/rate failures, MIME, duplicate protection, durable restart, and the real HTTP adapter.

External services are mocked and all applicant data is synthetic. Passing tests do not demonstrate live Gmail delivery, legal compliance, or completion of a penetration test.

## Technical references

- OWASP uploads: https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html
- Gmail MIME/attachments: https://developers.google.com/workspace/gmail/api/guides/sending
- Gmail scopes: https://developers.google.com/workspace/gmail/api/auth/scopes
- Gmail server OAuth: https://developers.google.com/workspace/gmail/api/auth/web-server
- Turnstile validation: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
- ClamAV protocol: https://docs.clamav.net/manual/Usage/ClamdProtocol.html
- Tested Node SQLite: https://nodejs.org/download/release/v22.16.0/docs/api/sqlite.html
