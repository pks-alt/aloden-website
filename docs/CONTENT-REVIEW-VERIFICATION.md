# Content review — verification and remaining cosmetic finding

## Tested copy checkpoint

`b177c9408d4d2f78c7c76a46d2b58a8e10bac51b` contains the final public copy, including the portfolio service-label normalization. Integration run `34771440893` completed successfully after testing the exact source that it committed. The subsequent housekeeping commit only adds this record, replaces the one-time editor workflow with read-only QA, and removes the editing workflow; it does not change public-page copy.

## Automated checks performed

- Existing site QA: 14 launch pages, hidden/redirect rules, local resources, navigation and metadata checks.
- Careers/backend/jobs/authentication: 37 tests passed.
- Existing Start a Project handler: 10 tests passed.
- Content comparison: 14 pages at 1440, 1024, 768, 390 and 320 pixels, totaling 70 before/after comparisons against `2a75456f481d381e8e4ebbb89ce3191fd54c20c8`.
- Compared section IDs/classes/order, form field contracts and logo sources; checked image decoding, JavaScript errors, JSON-LD parsing, confirmed wording and service-heading links.
- Existing Careers and job-manager browser suites also passed, including the five roles and job-specific application paths. Delivery, Google verification and applicant data in those tests are synthetic/mocked; no live application or email was sent.
- Source diff confirmed no CSS, media/logo asset, shared app controller, backend, job-data, or form-submission-controller changes.

Desktop and mobile screenshots were inspected for Home, Company, Our Work, Careers and Start a Project, with additional desktop inspection of Capabilities and AI Product Engineering. The screenshots and reports are in the workflow artifacts. This is regression and visual review, not an accessibility certification or penetration test.

## Existing mobile issue — not introduced by the wording pass

Home has a document scroll width of **464 pixels** at the tested **390- and 320-pixel** viewports in BOTH the approved baseline and the updated page. Visual inspection shows the footer columns extending beyond the narrow page width. Other tested pages did not show document-width overflow in these comparisons.

The wording-pass test deliberately rejects new/worsened horizontal overflow, rather than claiming that the baseline has no layout defects. The Home footer needs a separate responsive cosmetic fix. Its CSS was not changed in this content-only review. Do not describe the site as having no mobile-layout issues on the strength of this test pass.

## Status and boundaries

The copy is on the review branch; no merge to main, production deployment, or form activation was performed. The Home gallery/Insights exclusions, approved logos, section order, five careers roles and application behavior remain intact. Applicant privacy and live delivery remain with the developer and HR, as documented in the current handoff.
