# Aloden — current website handoff

This is the authoritative release scope and content direction. It supersedes conflicting navigation, page-scope, history, and naming instructions in earlier design documents. Content-consistency baseline: `2a75456f481d381e8e4ebbb89ce3191fd54c20c8` on `feature/careers-page`. The content edit is reviewed separately before any merge. Production deployment and live form activation remain the developer's responsibility.

## Preserve the approved design

Keep the existing layouts, section order, spacing system, typography, colors, responsive behavior, and official Aloden logo assets. No redesign is part of the wording pass. The shared controller is `preview/app.js`; Home content is also supplied by `homepage-section1-review.js`, `homepage-section1.js`, and `homepage-final.js`. Do not add another competing runtime copy layer.

Use the official `aloden-cube-logo.svg` and `aloden-cube-logo-dark.svg` treatments selected for their backgrounds. Voice AI is not a separately invented Aloden-branded product logo.

## Navigation and page scope

Primary navigation: Home, Our Work, Capabilities, Company, Start a Project. Careers is accessible through the shared footer. “Our Work” is the public page name; its existing URL remains `built-by-aloden.html`.

Public pages: Home; Our Work; Capabilities; AI Product Engineering; AI-Native Modernization; Agentic Workflow Engineering; Voice & Conversational AI; Healthcare AI; Company; Careers; Start a Project; Privacy; Terms; 404.

Contact is an alias to Start a Project, not a separate general-contact design. The page also supplies `hello@aloden.com` for general inquiries. Insights is excluded from the launch navigation and sitemap and stays noindex. Do not restore it from an older handoff.

Careers includes Current Openings, five role-detail reviews, job-linked résumé upload, general introductions, and an authenticated HR job manager. The interactive HR demonstration is separate, in-memory, and not a live sign-in substitute. This is a scoped job-publishing tool, not a new sitewide CMS.

## Home flow — locked

1. Hero and engineering illustration.
2. What Aloden Does.
3. Core Capabilities.
4. Build New / Modernize Existing.
5. Who We Work With.
6. Why Aloden.
7. Trust & Production Readiness.
8. Final project call to action.
9. Footer.

No Selected Work gallery or Featured Insight section on Home. The hero uses generic Healthcare, Innovation, and Voice examples; named Medlivo/StartupFair showcases belong on Our Work.

Locked headline: **We build and modernize intelligent digital products.**
Locked supporting line: **Built around your vision. Engineered for real-world impact.**
Engineering illustration labels: **ALODEN PRODUCT ENGINEERING** and **ENGINEERED FOR PRODUCTION**. Do not imply a separately named proprietary “Product Engineering System.”

## One service vocabulary

- AI Product Engineering → `ai-product-engineering.html`
- AI-Native Modernization → `product-modernization.html`
- Agentic Workflow Engineering → `agentic-ai.html`
- Voice & Conversational AI → `voice-ai-engineering.html`

Healthcare AI is domain depth with its own page, not a fifth equal core capability. Keep technical search synonyms where useful, but do not rename the same service between Home, cards, page labels, footers, metadata, and inquiry descriptions.

## Company history and delivery

Aloden was founded in 2024. Today it helps companies build intelligent digital products and modernize the software they depend on. AI product engineering was not confirmed as its original focus: do not use “AI-native from day one” or claim that no legacy delivery model was ever adapted.

PK confirmed one accountable delivery lead per client, direct access to the engineers for technical conversations, and regular updates and demonstrations of working software. Do not invent a fixed cadence, response SLA, delivery guarantee, or unsupported staffing/leadership claim.

## Product evidence

Owner-confirmed status: Medlivo software is in use; StartupFair is fully functional; voice AI is deployed and in use. The displayed operating figures are real snapshots according to PK. They are not a live feed, a guaranteed customer result, or newly measured performance statistics. Do not invent dates or change their values during cosmetic/copy edits.

## Writing direction

Home explains the business. Capabilities helps a buyer choose. Service pages describe relevant problems and deliverables. Our Work provides product evidence. Company explains Aloden and the working relationship. Start a Project makes inquiry straightforward. Careers speaks to candidates.

Use clear tasks and specific explanations. Avoid repeated slogans, long strings of abstract nouns, internal planning notes, and unsupported superlatives. Technical detail belongs after the customer problem, not instead of it. Keep the approved section structure; change the purpose and wording within it where repetition was found.

## Production handoff

- Deploy the approved code using the developer's selected hosting platform and final HTTPS origin.
- Configure and live-test Start a Project delivery, Careers résumé delivery, job storage, protected HR sign-in, anti-abuse checks, and file scanning.
- HR approves actual employment terms before publishing the five draft roles. See `CAREERS-JOB-MANAGEMENT.md`.
- HR and the appropriate reviewer approve applicant-data handling and notice. General website Privacy and Terms are not a completed recruitment-data policy.
- Verify metadata, the public and job sitemaps, actual indexed pages, social previews, responsive behavior, keyboard interactions, and form delivery on the deployed site.
- Keep secrets out of source control and browser code. Do not show delivery success without backend acceptance.
- No production deployment or merge into `main` is authorized by this document.

Reference: `CONTENT-CONSISTENCY-REVIEW.md`, `CAREERS-JOB-MANAGEMENT.md`, `CAREERS-RESUME-UPLOAD.md`, `CAREERS-LAUNCH-CHECKLIST.md`, `SEO-KEYWORD-MAP.md`.
