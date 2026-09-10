const ALLOWED = Object.freeze({
  projectType: new Set(['new-product', 'ai-capability', 'modernization', 'agentic-workflow', 'voice-ai', 'healthcare-ai', 'not-sure']),
  projectStage: new Set(['early-idea', 'validated-concept', 'production-product', 'active-modernization', 'ai-underway', 'diagnose']),
  projectHelp: new Set(['define-product', 'ai-capability', 'agentic-workflow', 'voice-experience', 'modernize-product', 'systems-data', 'production', 'healthcare', 'not-sure']),
  timing: new Set(['exploring', 'quarter', 'six-months', 'urgent'])
});

const LABELS = Object.freeze({
  projectType: {
    'new-product': 'New intelligent product',
    'ai-capability': 'AI inside an existing product',
    modernization: 'Product modernization',
    'agentic-workflow': 'Agentic workflow / automation',
    'voice-ai': 'Voice AI experience',
    'healthcare-ai': 'Healthcare AI platform / workflow',
    'not-sure': 'Not sure yet'
  },
  projectStage: {
    'early-idea': 'Early idea',
    'validated-concept': 'Validated concept / prototype',
    'production-product': 'Existing product in production',
    'active-modernization': 'Active modernization',
    'ai-underway': 'AI initiative already underway',
    diagnose: 'Need help diagnosing the problem'
  },
  projectHelp: {
    'define-product': 'Define or productize the idea',
    'ai-capability': 'Add AI where it creates real value',
    'agentic-workflow': 'Automate a complex workflow',
    'voice-experience': 'Create a voice or conversational experience',
    'modernize-product': 'Modernize an existing product',
    'systems-data': 'Connect systems, data, and workflows',
    production: 'Make the product more production-ready',
    healthcare: 'Apply healthcare workflow expertise',
    'not-sure': 'Not sure which path fits'
  },
  timing: {
    exploring: 'Exploring / no fixed date',
    quarter: 'Within the next quarter',
    'six-months': 'Within 3–6 months',
    urgent: 'Active / time-sensitive initiative'
  }
});

const MAX_BODY_BYTES = 32_000;
const text = (value, max) => typeof value === 'string' ? value.trim().slice(0, max + 1) : '';
const json = (body, status = 200, headers = {}) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...headers }
});

function clientKey(request) {
  const platformIp = request.headers.get('cf-connecting-ip') || request.headers.get('x-nf-client-connection-ip');
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return platformIp || forwarded || 'unknown';
}

async function readJson(request) {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength && contentLength > MAX_BODY_BYTES) throw new Error('body_too_large');
  const raw = await request.text();
  if (new TextEncoder().encode(raw).length > MAX_BODY_BYTES) throw new Error('body_too_large');
  return JSON.parse(raw || '{}');
}

function validate(input) {
  const errors = [];
  const contact = input && typeof input.contact === 'object' && input.contact ? input.contact : {};
  const clean = {
    projectType: text(input?.projectType, 80),
    projectStage: text(input?.projectStage, 80),
    projectHelp: Array.isArray(input?.projectHelp) ? input.projectHelp.filter((value) => typeof value === 'string').slice(0, 12) : [],
    outcome: text(input?.outcome, 2000),
    constraints: text(input?.constraints, 2000),
    timing: text(input?.timing, 80),
    systems: text(input?.systems, 500),
    contact: {
      name: text(contact.name, 120),
      email: text(contact.email, 254).toLowerCase(),
      company: text(contact.company, 160),
      role: text(contact.role, 120)
    },
    website: text(input?.website, 200),
    turnstileToken: text(input?.turnstileToken, 4096),
    pagePath: text(input?.pagePath, 200),
    submittedAtClient: text(input?.submittedAtClient, 80)
  };

  const add = (field, message) => errors.push({ field, message });
  if (!ALLOWED.projectType.has(clean.projectType)) add('projectType', 'Choose what you are building or changing.');
  if (!ALLOWED.projectStage.has(clean.projectStage)) add('projectStage', 'Choose the current state of the product.');
  if (!clean.projectHelp.length || clean.projectHelp.some((value) => !ALLOWED.projectHelp.has(value))) add('projectHelp', 'Choose at least one valid area where you need help.');
  if (!clean.outcome) add('outcome', 'Describe the outcome you are trying to achieve.');
  if (clean.outcome.length > 2000) add('outcome', 'Keep the desired outcome under 2,000 characters.');
  if (!ALLOWED.timing.has(clean.timing)) add('timing', 'Choose the timing that is closest to the project.');
  if (!clean.contact.name) add('name', 'Enter your name.');
  if (!clean.contact.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.contact.email)) add('email', 'Enter a valid work email address.');
  if (!clean.contact.company) add('company', 'Enter your company or organization.');
  if (clean.constraints.length > 2000) add('constraints', 'Keep the constraints under 2,000 characters.');
  if (clean.systems.length > 500) add('systems', 'Keep the systems description under 500 characters.');
  if (clean.contact.role.length > 120) add('role', 'Keep the role or title under 120 characters.');

  return { clean, errors };
}

function summary(clean) {
  return {
    projectType: LABELS.projectType[clean.projectType] || clean.projectType,
    projectStage: LABELS.projectStage[clean.projectStage] || clean.projectStage,
    projectHelp: clean.projectHelp.map((value) => LABELS.projectHelp[value] || value),
    company: clean.contact.company
  };
}

function deliveryPayload(clean, requestId, receivedAt) {
  const safeSummary = summary(clean);
  return {
    requestId,
    receivedAt,
    destination: 'hello@aloden.com',
    subject: `New Aloden Project Brief — ${clean.contact.company}`,
    brief: {
      projectType: safeSummary.projectType,
      currentState: safeSummary.projectStage,
      areasOfHelp: safeSummary.projectHelp,
      desiredOutcome: clean.outcome,
      constraints: clean.constraints || null,
      timing: LABELS.timing[clean.timing] || clean.timing,
      systems: clean.systems || null,
      contact: {
        name: clean.contact.name,
        email: clean.contact.email,
        company: clean.contact.company,
        role: clean.contact.role || null
      }
    }
  };
}

/**
 * Provider-neutral secure project-brief handler.
 *
 * Required services:
 * - rateLimit({ key, request }): Promise<{ allowed:boolean, retryAfter?:number }>
 * - verifyBot({ token, request }): Promise<boolean>
 * - deliver(payload): Promise<void>
 * - allowedOrigins: string[] (for example ['https://aloden.com', 'https://www.aloden.com'])
 *
 * The runtime adapter that exposes /api/project-brief must supply all three services.
 * Missing security/delivery services fail closed with HTTP 503.
 */
export function createProjectBriefHandler(services = {}) {
  return async function handleProjectBrief(request) {
    if (request.method !== 'POST') return json({ ok: false, error: 'method_not_allowed' }, 405, { Allow: 'POST' });
    if (!String(request.headers.get('content-type') || '').toLowerCase().includes('application/json')) return json({ ok: false, error: 'unsupported_media_type' }, 415);

    let input;
    try {
      input = await readJson(request);
    } catch (error) {
      return json({ ok: false, error: error?.message === 'body_too_large' ? 'payload_too_large' : 'invalid_json' }, error?.message === 'body_too_large' ? 413 : 400);
    }

    const { clean, errors } = validate(input);

    // Honeypot: acknowledge silently so simple bots do not learn how they were filtered.
    if (clean.website) return json({ ok: true, requestId: crypto.randomUUID(), summary: summary(clean) }, 202);

    if (errors.length) return json({ ok: false, error: 'validation_failed', errors }, 400);

    if (typeof services.rateLimit !== 'function' || typeof services.verifyBot !== 'function' || typeof services.deliver !== 'function' || !Array.isArray(services.allowedOrigins) || !services.allowedOrigins.length) {
      return json({ ok: false, error: 'service_not_configured' }, 503);
    }

    const origin = request.headers.get('origin');
    if (!origin || !services.allowedOrigins.includes(origin)) return json({ ok: false, error: 'origin_not_allowed' }, 403);

    const rate = await services.rateLimit({ key: clientKey(request), request });
    if (!rate?.allowed) {
      const retryAfter = Math.max(1, Number(rate?.retryAfter || 60));
      return json({ ok: false, error: 'rate_limited' }, 429, { 'Retry-After': String(retryAfter) });
    }

    const human = await services.verifyBot({ token: clean.turnstileToken, request });
    if (!human) return json({ ok: false, error: 'bot_verification_failed' }, 400);

    const requestId = crypto.randomUUID();
    const receivedAt = new Date().toISOString();

    try {
      await services.deliver(deliveryPayload(clean, requestId, receivedAt));
    } catch (_) {
      return json({ ok: false, error: 'delivery_failed', requestId }, 503);
    }

    return json({ ok: true, requestId, summary: summary(clean) }, 201);
  };
}

export { ALLOWED, LABELS, validate };
