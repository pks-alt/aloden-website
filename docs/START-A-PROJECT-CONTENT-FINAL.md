# Start a Project — CONTENT & DESIGN FINAL / LOCKED

Status: **CONTENT & DESIGN FINAL / LOCKED**  
Branch: `feature/start-project-content-review`  
Canonical page: `preview/start-project.html`  
Canonical HTML blob SHA at content lock: `cd9b01a143d1174a2fa622439b0104b639390a8f`  
Shared `preview/app.js` navigation-only blob SHA: `bbd2d8ae5188e6624c99224edfef1a8be73bd9b3`

Final content/design preview: `https://raw.githack.com/pks-alt/aloden-website/feature/start-project-content-review/preview/start-project.html?v=content-final`

## Status boundary

The page content, five-step intake structure, visual design, field set, consent language, and direct-email alternative are approved and locked.

**Submission functionality is not yet final or launched.** The `Submit Project Brief` control remains presentation-only until the submission workflow, validation, security, privacy handling, routing, and confirmation behavior are separately reviewed and approved.

Do not redesign or materially rewrite the approved page while implementing submission functionality unless explicitly requested.

## Approved positioning

The Start a Project page is a product-engineering conversation, not a generic consulting lead form or long RFP intake.

Core headline: **Start with what needs to become better.**

Core principle: visitors do not need a finished technical specification before speaking with Aloden. The brief starts with the product problem and outcome, then gathers only enough context to define a useful next conversation.

## Approved five-step brief

### Step 1 — What are you building or changing?

Options:
- New intelligent product
- AI inside an existing product
- Product modernization
- Agentic workflow / automation
- Voice AI experience
- Healthcare AI platform / workflow
- Not sure yet

Principles:
- Focused, not generic
- Product-first
- Useful even if early
- No long RFP required

### Step 2 — Where is the product today?

Options:
- Early idea
- Validated concept / prototype
- Existing product in production
- Active modernization
- AI initiative already underway
- Need help diagnosing the problem

Purpose: distinguish definition, productization, modernization, integration, or production-engineering needs without forcing the visitor into a fixed delivery package.

### Step 3 — What do you need help with?

This is intentionally multi-select.

Options:
- Define or productize the idea
- Add AI where it creates real value
- Automate a complex workflow
- Create a voice or conversational experience
- Modernize an existing product
- Connect systems, data, and workflows
- Make the product more production-ready
- Apply healthcare workflow expertise
- Not sure which path fits

Core principle: **Outcomes first → solution second.**

### Step 4 — What should we know about the project?

Fields:
- Desired outcome
- Important constraints — optional
- Timing
- Existing product, systems, or data environment — optional

Timing choices:
- Exploring / no fixed date
- Within the next quarter
- Within 3–6 months
- Active / time-sensitive initiative

Safety/privacy message: keep confidential, sensitive, regulated, and proprietary information out of the initial brief. Detailed information can be handled later through the appropriate process.

### Step 5 — Who should we contact about the project?

Fields:
- Your name
- Work email
- Company / organization
- Role / title — optional

Phone number is not required for the initial inquiry.

What happens next:
1. Aloden reviews the product context.
2. Aloden connects with the visitor.
3. Aloden helps define the right path.

Consent line: **By submitting this brief, you are asking Aloden to contact you about this project.**

Direct-email alternative remains available through `hello@aloden.com`.

## Implementation state

- All five approved steps are baked directly into `preview/start-project.html`.
- `preview/start-project-section2.css` through `preview/start-project-section5.css` are loaded statically by the canonical page.
- Temporary review injection scripts for Steps 2–5 have been removed.
- `preview/app.js` is restored to the canonical navigation-only implementation.
- The finalized Aloden logo treatment, current navigation, Insights link, global footer, accessibility direction, and responsive styling are preserved.

## Functionality still to approve

Before launch, separately review and approve:
- Required-field rules and validation behavior
- Accessible inline errors and focus handling
- Secure submission endpoint
- Spam / bot protection
- Email and/or CRM routing
- Success confirmation and failure recovery
- Privacy, retention, and logging boundaries
- Submission rate limiting and abuse controls
- Production monitoring / observability

Content/design lock does not imply that the submission backend is active.
