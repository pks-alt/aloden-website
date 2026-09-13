# Aloden — content consistency review

Status: implemented for review, not merged or deployed. Baseline: `2a75456f481d381e8e4ebbb89ce3191fd54c20c8`.

## Owner confirmations for this pass

PK confirmed in this conversation that:

- The Medlivo software platform is currently in use, not just the staffing business.
- StartupFair is fully functional. This does not add a claim about user counts or customer adoption.
- The voice AI solution is deployed and used by real users.
- The operating figures shown in the showcases are real. The website displays fixed snapshots, not live feeds. No capture date, new performance claim, or independently verified metric is asserted.
- Aloden has been in business since 2024. AI product engineering was not its original focus. Remove “AI-native from day one” and the claim about never having to retrofit a legacy delivery model.
- Each client has one accountable delivery lead, direct access to engineers for technical discussions, and regular progress updates and working-software demonstrations. No weekly cadence, response SLA, guaranteed delivery date, or automatic post-launch support entitlement was confirmed.

These are owner-supplied confirmations, not independent product or financial audits.

## Content changes

- Keep the Home headline and supporting line; make the following sections do different jobs: explain the business, identify services, recognize a starting point, identify the client, explain delivery, and address launch risks.
- Use the four service names consistently: AI Product Engineering; AI-Native Modernization; Agentic Workflow Engineering; Voice & Conversational AI. Healthcare AI is domain expertise, not a fifth equal core service.
- Remove “Aloden Product Engineering System” as an offering/methodology label. Use “How Aloden builds” for the process section.
- Link existing capability headings to their service detail pages without adding cards or altering the grid.
- Replace repetitive or abstract wording with tasks, deliverables, constraints, and next steps. Keep necessary technical depth inside service sections.
- Explain Company through the current focus and confirmed delivery arrangement. State the founding year separately from today's AI focus.
- Label showcase activity/figures as fixed views or snapshots; distinguish product operation from this static marketing preview. Do not replace the confirmed operating values.
- Make Careers address applicants; keep the five agreed jobs, their source-based descriptions, application fields, privacy warnings, and disabled delivery state unchanged.
- Simplify project-form instructions without changing field names, validation, submission logic, or backend contracts.
- Make the 404 message useful to a visitor instead of discussing product state.
- Keep metadata and the SEO-generator summaries aligned with the body copy.

## Preserved

No layout/CSS, logo/media asset, section-order, color, navigation-order, application-backend, job-data, or HR-permission changes. No Selected Work section or named showcase tabs are reintroduced on Home. Insights stays excluded from launch. No new testimonials, clients, certifications, metrics, salaries, office locations, or historical claims are added.

The new authoritative handoff is `SITE-FINAL-HANDOFF.md`. Earlier “FINAL” design documents are historical when they conflict with it; do not restore their Insights, no-Careers, old capability names, or proprietary-system language.

## Items intentionally left to launch approval

Production hosting, HR sign-in, durable job storage, actual job publication, email/upload delivery, bot/file scanning, and live end-to-end testing remain with the developer and HR. Applicant privacy, retention, access, deletion, and the applicable employment disclosures require the real approved arrangements. The general website Privacy and Terms are not silently expanded into an applicant policy by this copy edit.

## Verification

Run the existing site-source, Careers/backend/jobs, and project-form tests. Review rendered pages at desktop, tablet, and mobile widths. Compare structural landmarks, logo sources, input contracts, and service links against the baseline; inspect the screenshots as well as automated results. Record actual test outcomes in the review PR, not assumptions about production readiness.
