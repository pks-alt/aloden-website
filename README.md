# Aloden Website

Official website repository for **Aloden LLC**.

Aloden is positioned as an **AI Product Engineering and Digital Modernization** company. This repository contains the custom-built public website used to present Aloden's capabilities, products, insights, company story, and project engagement experience.

## V1 Website Direction

The Version 1 website is built around the following approved principles:

- Custom modern frontend; no template-based or no-code implementation
- Reusable design and component system
- Premium, restrained motion with reduced-motion support
- Strong accessibility and WCAG-conscious implementation
- Performance-first engineering and strong Core Web Vitals
- SEO-ready architecture, metadata, structured data, sitemap, and internal linking
- English-only launch
- Developer-controlled content for V1; no CMS initially

## V1 Navigation

- Home
- Built by Aloden
- Capabilities
- Insights
- Company
- Start a Project

Supporting pages include Privacy, Terms, and a branded 404 page.

## Product Proof

The site uses real Aloden-built products and initiatives as proof of product-engineering capability, including:

- Medlivo
- StartupFair
- Aloden Voice AI

## Development Workflow

- `main` — production/release branch
- `develop` — active integration branch
- Feature work uses focused branches
- Changes should return to `develop` through pull requests
- Release-ready work should be promoted from `develop` to `main`

## Quality Gates

Before release, the website is reviewed for:

1. Responsive UX across desktop, tablet, and mobile
2. Keyboard navigation and accessibility
3. Semantic HTML and descriptive media alternatives
4. Reduced-motion behavior
5. Core Web Vitals and page-load performance
6. SEO metadata and structured data
7. Cross-browser behavior
8. Broken links and form validation
9. Project-form security, anti-abuse, and failure recovery
10. Privacy, Terms, robots, sitemap, and 404 support

The repository includes an automated GitHub Actions QA gate for page structure, headings, unique anchors, effective local links, local resources, CSS assets, metadata, image alt coverage, project-form structure, JavaScript syntax, and secure project-brief handler tests.

## Status

**Version 1 — content/design complete on the current QA branch; site-wide QA hardening complete; production deployment and live project-form service wiring remain pending.**

The Start a Project form is intentionally fail-closed until a production hosting adapter supplies allowed origins, durable rate limiting, bot verification, and secure delivery to `hello@aloden.com`. No production credentials are committed to the repository.

See `docs/SITE-QA-OVERNIGHT.md` for the latest launch-readiness handoff.

© Aloden LLC. All rights reserved.
