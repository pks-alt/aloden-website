import test from 'node:test';
import assert from 'node:assert/strict';
import { createProjectBriefHandler } from './project-brief-handler.mjs';

const valid = {
  projectType: 'new-product',
  projectStage: 'early-idea',
  projectHelp: ['define-product', 'ai-capability'],
  outcome: 'Turn a validated workflow into a dependable product.',
  constraints: '',
  timing: 'quarter',
  systems: '',
  contact: { name: 'Test User', email: 'test@example.com', company: 'Example Co', role: '' },
  website: '',
  turnstileToken: 'token'
};

const makeRequest = (body = valid, method = 'POST') => new Request('https://aloden.com/api/project-brief', {
  method,
  headers: method === 'POST' ? { 'Content-Type': 'application/json', Origin: 'https://aloden.com' } : undefined,
  body: method === 'POST' ? JSON.stringify(body) : undefined
});

const services = () => ({
  allowedOrigins: ['https://aloden.com'],
  rateLimit: async () => ({ allowed: true }),
  verifyBot: async ({ token }) => token === 'token',
  deliver: async () => {}
});

test('rejects unsupported methods', async () => {
  const response = await createProjectBriefHandler(services())(makeRequest(undefined, 'GET'));
  assert.equal(response.status, 405);
});

test('returns field validation errors', async () => {
  const response = await createProjectBriefHandler(services())(makeRequest({}));
  const data = await response.json();
  assert.equal(response.status, 400);
  assert.equal(data.error, 'validation_failed');
  assert.ok(data.errors.length >= 7);
});

test('honeypot submissions are silently acknowledged without delivery', async () => {
  let delivered = false;
  const secure = services();
  secure.deliver = async () => { delivered = true; };
  const response = await createProjectBriefHandler(secure)(makeRequest({ ...valid, website: 'https://spam.example' }));
  assert.equal(response.status, 202);
  assert.equal(delivered, false);
});

test('fails closed when security services are missing', async () => {
  const response = await createProjectBriefHandler({})(makeRequest());
  assert.equal(response.status, 503);
});

test('rejects requests from an unapproved browser origin', async () => {
  const request = new Request('https://aloden.com/api/project-brief', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: 'https://example.net' },
    body: JSON.stringify(valid)
  });
  const response = await createProjectBriefHandler(services())(request);
  assert.equal(response.status, 403);
});

test('rejects requests without a browser origin', async () => {
  const request = new Request('https://aloden.com/api/project-brief', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(valid)
  });
  const response = await createProjectBriefHandler(services())(request);
  const data = await response.json();
  assert.equal(response.status, 403);
  assert.equal(data.error, 'origin_not_allowed');
});

test('requires bot verification before delivery', async () => {
  let delivered = false;
  const secure = services();
  secure.verifyBot = async () => false;
  secure.deliver = async () => { delivered = true; };
  const response = await createProjectBriefHandler(secure)(makeRequest());
  assert.equal(response.status, 400);
  assert.equal(delivered, false);
});

test('rate limiting is enforced', async () => {
  const secure = services();
  secure.rateLimit = async () => ({ allowed: false, retryAfter: 90 });
  const response = await createProjectBriefHandler(secure)(makeRequest());
  assert.equal(response.status, 429);
  assert.equal(response.headers.get('retry-after'), '90');
});

test('single-line contact metadata is sanitized before delivery', async () => {
  let delivered;
  const secure = services();
  secure.deliver = async (payload) => { delivered = payload; };
  const input = {
    ...valid,
    contact: { ...valid.contact, company: 'Example Co\r\nBcc: unwanted@example.com' }
  };
  const response = await createProjectBriefHandler(secure)(makeRequest(input));
  assert.equal(response.status, 201);
  assert.equal(delivered.brief.contact.company, 'Example Co Bcc: unwanted@example.com');
  assert.doesNotMatch(delivered.subject, /[\r\n]/);
});

test('successful submissions call delivery and return a safe summary', async () => {
  let delivered;
  const secure = services();
  secure.deliver = async (payload) => { delivered = payload; };
  const response = await createProjectBriefHandler(secure)(makeRequest());
  const data = await response.json();
  assert.equal(response.status, 201);
  assert.equal(data.ok, true);
  assert.equal(data.summary.company, 'Example Co');
  assert.equal(delivered.destination, 'hello@aloden.com');
  assert.match(delivered.subject, /Example Co/);
});
