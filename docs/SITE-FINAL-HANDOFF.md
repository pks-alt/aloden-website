# Aloden V1 — Final Design Handoff

Status: **FINAL DESIGN / CONTENT DIRECTION — READY FOR VISUAL APPROVAL**  
Branch: `feature/homepage-design-rework`  
Production merge/deployment: **NOT performed**

## Locked global system

- Max content width: 1260px.
- Instrument Sans + IBM Plex Mono.
- Graphite / warm white / soft lavender / Aloden violet.
- Dark treatment concentrated in the homepage hero and conversion moments.
- One primary button, one secondary button, one text-link behavior.
- Official cube + wordmark SVG used across site chrome.
- Shared header, footer, spacing, focus and responsive standards supplied through `preview/site-final-system.css`.
- Shared controller `preview/app.js` normalizes navigation, links, accessibility and metadata.

## Navigation naming

Rendered primary navigation:

1. Home
2. **Our Work**
3. Capabilities
4. Insights
5. Company
6. Start a Project

The destination remains `built-by-aloden.html` and the page identity remains **Built by Aloden**. “Our Work” is the familiar navigation label; “Built by Aloden” is the branded portfolio-page title.

## Homepage final flow

1. Hero / positioning — locked dark treatment.
2. What Aloden Does / enterprise positioning.
3. Core Capabilities.
4. Build New / Modernize Existing.
5. Who We Work With.
6. Why Aloden.
7. Featured Insight.
8. Trust & Production Readiness.
9. Final CTA.
10. Footer.

Detailed Medlivo / StartupFair / Aloden Voice proof is intentionally NOT a homepage section. It belongs on Our Work / Built by Aloden.

## Homepage hero wording

Primary message: **We build and modernize intelligent digital products.**

Supporting line: **Built around your vision. Engineered for real-world impact.**

The engineering visual uses **ALODEN PRODUCT ENGINEERING** and **ENGINEERED FOR PRODUCTION** rather than language that implies a separate proprietary product called “Aloden Product Engineering System.”

## Core capability model

1. AI Product Engineering
2. Voice AI Engineering
3. Intelligent Workflow & Agentic Systems
4. Product Modernization

Healthcare AI remains domain depth, not a fifth equal capability.

## Pages in V1

- Home
- Built by Aloden / Our Work
- Capabilities
- AI Product Engineering
- Voice AI Engineering
- Intelligent Workflow & Agentic Systems
- Product Modernization
- Healthcare AI
- Insights
- Company
- Start a Project
- Privacy
- Terms
- 404

## Sitewide finalization applied

- “Our Work” rendered consistently in primary navigation and footer navigation.
- Official logo treatment standardized.
- Header and footer proportions standardized.
- 1260px site grid and responsive gutters standardized.
- Secondary-page title scale and hero spacing standardized.
- Secondary-page system canvases use consistent radius / shadow discipline.
- Section spacing tightened to remove unnecessary vertical length.
- Legacy multi-color variables normalized toward the Aloden violet palette.
- CTA bands standardized.
- Accessible focus treatment, skip link, responsive menu behavior and reduced-motion support retained.
- Canonical / Open Graph / Twitter / Organization JSON-LD baseline retained.
- Start a Project functionality/security architecture retained.

## Deliberate non-changes

- No fake client logos, metrics or testimonials.
- No Careers or Industries section in V1.
- No CMS in V1.
- No detailed product gallery on Home.
- No merge to `main` before explicit visual approval.
- No production hosting claims.

## Remaining launch-only items

These require production environment choices or external approvals, not more page design:

- hosting/runtime selection and production deployment
- live project-brief delivery adapter and secrets
- rate-limit/bot-verification production services
- production monitoring
- final legal review of Privacy and Terms
- production Core Web Vitals and cross-browser acceptance
- one real end-to-end Start a Project submission

## Morning review

Review the feature branch visually across desktop, tablet and mobile. If approved, the next step is production wiring and controlled promotion toward `develop` / `main`.
