# Start a Project — FUNCTIONALITY REVIEW READY

Status: **FUNCTIONALITY REVIEW READY / NOT DEPLOYED**  
Branch: `feature/start-project-content-review`  
Canonical page: `preview/start-project.html`  
Client controller: `preview/start-project-form.js`  
Submission-state styles: `preview/start-project-form.css`  
Provider-neutral server core: `server/project-brief-handler.mjs`  
Server tests: `server/project-brief-handler.test.mjs`

## Locked design boundary

The approved five-step Start a Project page remains content/design locked. The functionality layer does not redesign the approved sections, fields, labels, or visual hierarchy.

## Front-end behavior implemented

- Creates one semantic project-brief form around the five approved steps without changing their visual layout.
- Converts `Submit Project Brief` into the actual submit control.
- Validates required fields before any network request.
- Shows accessible inline field errors and an error summary.
- Moves focus to the error summary and supports navigation back to invalid fields.
- Clears individual error states as the visitor corrects fields.
- Preserves all entered information after a failed submission.
- Adds a submitting state and prevents duplicate clicks while a request is in flight.
- Uses a 15-second client timeout with a recoverable failure message.
- Shows a success panel containing only a safe summary: project type, current state, areas of help, and company.
- Shows rate-limit and service-unavailable states with `hello@aloden.com` as the fallback.
- Adds a hidden honeypot field.
- Supports Cloudflare Turnstile when a public site key is provided through a `meta[name="aloden-turnstile-site-key"]` value.
- Posts JSON only to same-origin `/api/project-brief`.

## Required fields

- Step 1 project type
- Step 2 current state
- At least one Step 3 area of help
- Step 4 desired outcome
- Step 4 timing
- Step 5 name
- Step 5 work email
- Step 5 company / organization

Optional fields remain optional: project constraints, existing systems/data environment, and role/title.

## Server-side core implemented

`server/project-brief-handler.mjs` is a provider-neutral Web Fetch API handler intended to sit behind `/api/project-brief` through the final hosting adapter.

It implements:

- POST-only requests
- JSON content-type enforcement
- 32 KB request-body limit
- Server-side allow-list validation for all option fields
- Server-side length validation for free-text/contact fields
- Honeypot handling that silently acknowledges bot-like submissions without delivery
- Required allowed-origin enforcement; missing or unapproved browser origins are rejected
- Durable rate-limiter service contract
- Bot-verification service contract
- Delivery service contract
- No-cache responses
- Generic delivery-failure responses
- Request IDs for successful/failed delivery attempts
- Safe response summaries that do not echo free-text project details
- Delivery payload addressed to `hello@aloden.com`
- Subject format: `New Aloden Project Brief — Company Name`

## Fail-closed production rule

The server core intentionally returns HTTP 503 until the hosting runtime supplies all of the following:

1. `allowedOrigins`
2. `rateLimit(...)`
3. `verifyBot(...)`
4. `deliver(...)`

No API keys, email credentials, rate-limit credentials, or bot-verification secrets are committed to the repository or browser code.

## Testing completed

The server core is syntax-checked and tested with Node's built-in test runner. **Nine tests pass** covering:

- Unsupported methods
- Invalid field payloads
- Honeypot behavior
- Fail-closed configuration
- Unapproved-origin rejection
- Missing-origin rejection
- Bot-verification failure
- Rate limiting
- Successful secure delivery flow and safe summary response

The full-site GitHub Actions QA workflow also checks the shared navigation controller and client form JavaScript for syntax before running the structural site audit and these server tests.

## Deployment still required

The RawGitHack preview can exercise browser validation and failure recovery, but it cannot deliver a real project brief because RawGitHack does not host the `/api/project-brief` server endpoint.

Before production activation, choose the final hosting/runtime adapter and configure:

- Production origin(s)
- Durable rate-limit storage/service
- Turnstile public site key and server secret
- Secure email or CRM delivery service
- Sender/domain verification if email delivery is used
- Production monitoring for endpoint errors and delivery failures
- Final legal review of Privacy/Terms and any required retention language

The content/design lock remains in force while these deployment details are completed.
