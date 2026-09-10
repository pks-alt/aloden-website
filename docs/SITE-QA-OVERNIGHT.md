# Aloden V1 — Overnight Site QA Handoff

Status: **SITE CONTENT / DESIGN / STRUCTURAL QA COMPLETE — PRODUCTION WIRING PENDING**  
Branch: `feature/start-project-content-review`  
QA date: September 9–10, 2026  
Production deployment: **Not performed**  
Merge to `develop` / `main`: **Not performed**

## Executive summary

The current QA branch now carries the approved Aloden V1 website content and design plus a site-wide launch-hardening pass. Approved page designs were preserved; QA work focused on navigation, hyperlinks, form behavior, accessibility, search/share metadata, missing support pages, crawl files, form security, and repeatable automated checks.

The website is not being represented as production-deployed. The remaining work is concentrated in production infrastructure and approvals that require real hosting/service credentials rather than additional marketing-page design.

## Pages reviewed

The automated QA gate audits 14 public/support HTML pages:

1. `index.html` — Home
2. `built-by-aloden.html` — Built by Aloden
3. `capabilities.html` — Capabilities
4. `ai-product-engineering.html` — AI Product Engineering
5. `voice-ai-engineering.html` — Voice AI Engineering
6. `agentic-ai.html` — Intelligent Workflow & Agentic Systems
7. `product-modernization.html` — Product Modernization
8. `healthcare-ai.html` — Healthcare AI
9. `insights.html` — Insights
10. `company.html` — Company
11. `start-project.html` — Start a Project
12. `privacy.html` — Privacy Notice
13. `terms.html` — Website Terms
14. `404.html` — Page Not Found

`live-review.html` remains an internal review redirect and is deliberately excluded from the public-page count and from search indexing.

## Page-by-page status

### Home — locked design preserved

- Approved hero and product-led positioning preserved.
- Primary navigation resolves to finalized top-level pages.
- Built by Aloden, capability, Insights, Company, and Start a Project destinations are normalized to their final routes.
- Footer Privacy, Terms, LinkedIn, and Start a Project links resolve to real destinations.
- Shared accessibility and metadata baseline is applied.

### Built by Aloden — locked design preserved

- Product proof remains Medlivo-first with StartupFair and Aloden Voice AI as secondary proof.
- Internal proof anchors used by cross-site links were verified: `#products`, `#startupfair-proof`, and `#voice-ai-proof`.
- Product CTAs from other pages now route to valid proof sections rather than obsolete homepage anchors.
- No fake customer metrics or unsupported claims were introduced.

### Capabilities — locked design preserved

- Four core capabilities remain the primary capability model.
- Healthcare AI remains domain depth rather than a fifth core capability.
- “Explore” capability links now resolve to their dedicated capability pages.
- Start a Project CTA resolves to the finalized project brief.

### AI Product Engineering — locked design preserved

- Approved content and system thinking preserved.
- Cross-site navigation, product proof, Insights, footer legal, LinkedIn, and project CTA destinations are normalized.

### Voice AI Engineering — locked design preserved

- Approved production voice-system positioning preserved.
- Cross-site navigation, product proof, Insights, footer legal, LinkedIn, and project CTA destinations are normalized.

### Intelligent Workflow & Agentic Systems — locked design preserved

- Approved agentic-system authority / state / verification positioning preserved.
- Cross-site navigation, proof, Insights, legal, LinkedIn, and project CTA destinations are normalized.

### Product Modernization — locked design preserved

- Approved “evolution strategy, not rewrite reflex” positioning preserved.
- Cross-site navigation, proof, Insights, legal, LinkedIn, and project CTA destinations are normalized.

### Healthcare AI — locked design preserved

- Broad healthcare operating-system view is preserved; the page was not narrowed to staffing or therapy.
- Cross-site navigation, Medlivo proof, Insights, legal, LinkedIn, and project CTA destinations are normalized.

### Insights — final / locked

- Approved editorial landing page preserved.
- Five launch ideas remain an editorial set; no fake authors, dates, reading times, or article metrics were added.
- The site does not pretend unfinalized article-detail pages are already published.
- “Read the Insight” / Insights navigation resolves to the finalized Insights surface.

### Company — final / locked

- Approved AI product engineering and digital modernization positioning preserved.
- Product proof, capability, Insights, legal, LinkedIn, and project CTA destinations are normalized.

### Start a Project — content/design final; functionality review ready

All five approved steps are present and designed:

1. What are you building or changing?
2. Where is the product today?
3. What do you need help with? — intentionally multi-select
4. What should we know about the project?
5. Who should we contact about the project?

Required fields are validated for project type, current state, at least one help area, desired outcome, timing, name, work email, and company/organization. Optional fields remain constraints, systems/data environment, and role/title. Phone number is intentionally not required.

The client controller provides accessible inline errors, an error summary, focus handling, preserved entries on failure, submitting state, timeout recovery, rate-limit/unavailable states, safe success summary, a honeypot, optional Turnstile support, and same-origin `/api/project-brief` submission.

The server core is fail-closed until production security and delivery services are configured. It validates input server-side, limits request size, requires an approved Origin, requires rate limiting and bot verification, sanitizes single-line contact/delivery metadata, and sends only through the configured delivery adapter.

The visible internal review note is replaced at runtime with permanent visitor-facing wording: **INITIAL PROJECT BRIEF · HIGH-LEVEL CONTEXT ONLY.**

### Privacy — added

A V1 privacy notice now exists and is linked from site footers. It covers website/project-inquiry information, operational/security data, service-provider processing, project-contact use, retention principles, privacy requests, and the instruction not to place confidential/sensitive/regulated/proprietary information in the initial project brief.

This is launch-ready website content from a product/UX perspective, but it should receive final legal review before production publication.

### Terms — added

V1 website terms now exist and are linked from site footers. They distinguish public website use from a services agreement, address project inquiries, product examples, intellectual property, acceptable use, third-party services, disclaimers, privacy, changes, and contact.

No unsupported governing-law/jurisdiction clause was invented. Final legal review is recommended before production publication.

### 404 — added

A branded, noindex 404 page now provides Home, Built by Aloden, and Start a Project recovery paths while preserving the Aloden visual system.

## Hyperlink QA

A shared route-normalization layer corrects older locked-page links without rewriting approved page layouts. It covers:

- all top-level navigation destinations
- all four core capability pages
- Healthcare AI
- Built by Aloden proof destinations
- Insights
- Start a Project
- Privacy
- Terms
- LinkedIn
- major product-proof CTAs

The automated QA gate verifies that effective local page destinations and fragment targets exist and that unresolved placeholder links fail the build.

The official LinkedIn destination used by the site is `https://www.linkedin.com/company/alodenllc`. The destination was publicly verified as the Aloden LLC company page during this QA pass. The LinkedIn profile itself still contains older IT solutions/staffing-oriented company copy; that is an external brand-profile cleanup item, not a broken website hyperlink.

Email contact links use `hello@aloden.com`.

## Accessibility hardening

Without changing approved page layouts, the shared QA layer now includes:

- skip-to-main navigation
- reliable keyboard focus transfer into main content
- visible `:focus-visible` states for links, buttons, inputs, and textareas
- mobile-navigation `aria-expanded` and `aria-controls`
- Escape-to-close mobile navigation with focus return
- mobile navigation closes after selecting a link
- responsive menu behavior aligned to the existing 1020px breakpoint
- mobile menu positioning derived from the actual header height
- `aria-current="page"` on active primary navigation links
- reduced-motion-safe behavior
- a darker global muted-text token and contrast-only form helper-text overrides on light backgrounds

The automated audit also checks image `alt` presence, one H1 per public page, duplicate IDs, and valid fragment anchors.

## SEO / search / share hardening

The shared site controller now supplies a consistent baseline for indexable pages:

- canonical URL under `https://www.aloden.com`
- Open Graph title, description, URL, type, and site name
- Twitter summary-card metadata
- white browser theme color
- official Aloden SVG as the site icon source
- Organization JSON-LD using only verified Aloden name, website, logo, contact email, and LinkedIn destination

Added crawl/support files:

- `preview/robots.txt`
- `preview/sitemap.xml`

The internal `live-review.html` redirect is `noindex,nofollow`; the 404 page is `noindex,follow`. Neither appears in the sitemap.

## Automated QA gate

Added:

- `scripts/site-qa.mjs`
- `.github/workflows/site-qa.yml`

The GitHub Actions gate runs on the QA branch, `develop`, `main`, pull requests, and manual dispatch. It currently checks:

- JavaScript syntax for shared navigation, project-form controller, and server handler
- required public/support pages
- local page targets and fragment targets
- unresolved placeholder links after effective route normalization
- local JS/CSS/image/resource existence
- CSS `url(...)` asset existence
- one H1 per public/support page
- duplicate IDs
- image alt attributes
- baseline document metadata/landmarks
- Start a Project required element/group structure
- robots and sitemap coverage
- project-brief server tests

Multiple consecutive QA runs during this pass completed successfully, including the strengthened heading/anchor/CSS-asset gate and the latest shared-controller/security changes.

## Project-form security test coverage

The server test suite now contains 10 tests covering:

1. unsupported methods
2. invalid field payloads
3. honeypot behavior
4. fail-closed missing security services
5. unapproved browser origin
6. missing browser origin
7. bot-verification failure
8. rate limiting
9. single-line contact/delivery metadata sanitization
10. successful secure delivery flow with safe response summary

## What is intentionally NOT claimed as complete

The following cannot be truthfully completed in source code without choosing/configuring the production environment:

1. Final hosting/runtime adapter and permanent deployment.
2. Live `/api/project-brief` endpoint on the production domain.
3. Production allowed-origin configuration.
4. Durable rate-limit storage/service.
5. Cloudflare Turnstile public site key and server secret (or an explicitly chosen equivalent).
6. Secure email or CRM delivery credentials/routing to `hello@aloden.com`.
7. Sender/domain verification if email delivery is used.
8. Production endpoint monitoring/alerting and live delivery failure monitoring.
9. Full end-to-end live form submission on the production domain.
10. Final legal review of Privacy and Terms.
11. Production performance/Core Web Vitals measurements after the real hosting environment exists.
12. Final cross-browser visual acceptance on the production build.

These are the remaining launch tasks; they are not missing marketing-page sections.

## Deliberately not added

- No Careers section in V1.
- No Industries section in V1.
- No CMS in V1.
- No fake Insights article dates/authors/metrics.
- No unapproved customer logos or metrics.
- No newsletter consent bundled into the project inquiry.
- No phone-number requirement on the project brief.
- No fake backend or browser-exposed email/API secret.

## Morning review links

Homepage QA branch:
`https://raw.githack.com/pks-alt/aloden-website/feature/start-project-content-review/preview/index.html?v=overnight-qa`

Start a Project QA branch:
`https://raw.githack.com/pks-alt/aloden-website/feature/start-project-content-review/preview/start-project.html?v=overnight-qa`

Privacy:
`https://raw.githack.com/pks-alt/aloden-website/feature/start-project-content-review/preview/privacy.html?v=overnight-qa`

Terms:
`https://raw.githack.com/pks-alt/aloden-website/feature/start-project-content-review/preview/terms.html?v=overnight-qa`

404:
`https://raw.githack.com/pks-alt/aloden-website/feature/start-project-content-review/preview/404.html?v=overnight-qa`

## Recommended next action tomorrow

Do one visual approval pass on the QA branch, then choose the production hosting/runtime. Once the runtime is selected, wire the secure project-form adapter and production secrets, run the same QA gate against the production build, perform live desktop/mobile/browser and Core Web Vitals checks, submit one real project brief end-to-end, obtain final legal review, and only then promote the release toward `develop` / `main`.
