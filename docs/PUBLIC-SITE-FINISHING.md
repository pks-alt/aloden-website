# Public website finishing — logo, copy and contact routes

## Reviewed checkpoint

Public implementation: `29896453d92a2a6cca06fd8540877fb527c895c2` on `feature/content-consistency-review` (PR #9). Workflow `34773010943` passed before committing that exact source. The subsequent documentation/workflow-cleanup commit does not change the public implementation.

## Corrections

- Replaced the retired four-dot mark in the Home process card with `assets/aloden-cube-symbol.svg`, aligned to the left of the “Connected from problem to production.” heading. The Home HTML also starts with the approved cube logo, rather than briefly relying on the old lockup.
- Removed the obsolete four-dot CSS artwork references from the shared compatibility layer. Updated `ALODEN-OFFICIAL-LOGO.md` so the developer's brand source agrees with the currently approved cube artwork. The artwork files themselves are unchanged.
- Removed the “REVIEW SNAPSHOT · Five hiring needs confirmed by PK…” message from the job-list generator, not just the rendered page. Removed corresponding internal authoring notes from public role details and regenerated all five HTML role pages.
- Omitted unknown location, employment-type and closing-date rows instead of filling the page with “to be confirmed” placeholders. No location, compensation, employment entitlement or deadline was invented. Real terms remain required by the HR publishing validation.
- Added a clear HR email application route to each role, including its title and stable reference in the draft email subject. Selecting a role also updates the email fallback beside the résumé form.
- Replaced technical preview/configuration notices in candidate and project-inquiry areas with plain-language availability and email instructions. Online submission remains disabled while unavailable; selecting a résumé does not transmit it. A working provider receipt is still required before showing application acceptance.
- Repaired the Home footer's mobile grid at its source. It now uses two columns on tablets and one on narrow phones, without concealing overflow with clipping.
- Corrected the shared Start a Project anchor and skip-link target to their actual page sections.

## Approved public email routes

| Purpose | Address |
|---|---|
| Project inquiries, capabilities, product-showcase inquiries and general business contact | hello@aloden.com |
| Careers, role applications, recruitment and early-career inquiries | hr@aloden.com |
| Website privacy and terms contact | hello@aloden.com, retaining its purpose-specific subject |

The shared footer labels Project inquiries and Careers & recruitment separately. Relevant service CTAs and all three showcase sections have direct project email links. Job details and the candidate path use HR, not the project inbox. No new departmental mailbox is invented. Mailto opens the visitor's email app; they must attach their résumé there and send the message themselves.

## Verification completed

- 14 public pages plus five role-detail pages at 1440, 1024, 768, 390 and 320 pixels: **95 page/width checks**, zero failures in `public-polish-report.json`.
- All tested pages fit their viewport without horizontal document overflow. Home measures 390px at the 390px viewport and 320px at the 320px viewport, resolving the earlier 464px footer issue.
- Checked rendered text for the removed internal notices, official logo sources/placement, loaded images, email destinations and subjects, role references, and JavaScript errors.
- Existing before/after content suite passed across 14 pages and five widths, preserving section order, header/footer logo sources and form field contracts.
- Existing Careers and HR job-management browser suites passed, including mocked acceptance/failure paths, keyboard interactions, file validation, and unavailable-form behavior.
- 37 Careers/backend/jobs/authentication tests and 10 project-inquiry handler tests passed.
- Inspected desktop screenshots of Home, openings and a full role page, and narrow-screen footer/application views. Locator screenshots can include the sticky header inside a tall capture; full-page captures were used to distinguish that screenshot effect from page layout.

This is visual/regression testing, not an accessibility certification, penetration test, verified mailbox receipt or an email-client compatibility certification. All test applicant data and external delivery responses are synthetic/mocked. No real application or email was sent.

## Remaining production work

The developer still owns hosting, live Google/HR sign-in, published database records, applicant privacy approval and live résumé/project-inquiry delivery testing. The private HR demonstration remains explicitly labeled because it does not publish jobs. Neither PR #9 nor its dependency PR #8 has been merged by this work. Do not represent a static browser review as an activated production backend.
