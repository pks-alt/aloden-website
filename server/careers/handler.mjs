import { createHash } from 'node:crypto';
import { MAX_RESUME_BYTES, validateResume } from './resume.mjs';
export const MAX_REQUEST_BYTES = MAX_RESUME_BYTES + 64 * 1024;
export const INTERESTS = Object.freeze({ software:'Software Engineering', ai:'AI & Agentic Engineering', product:'Product & Experience', platform:'Platform, Data & Cloud', delivery:'Delivery & Product Operations', 'early-career':'Early-Career Builders', general:'General introduction' });
export const AVAILABILITY = Object.freeze({ immediate:'Available now', 'two-weeks':'Within 2 weeks', 'one-month':'Within 1 month', 'two-months':'Within 2 months', later:'Later / exploring' });
const fields = new Set(['name','email','interest','location','availability','portfolio','introduction','consent','website','turnstileToken','resume']);
export const json = (body,status=200,headers={}) => new Response(JSON.stringify(body), { status, headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff',...headers} });
const validId = id => typeof id === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id);
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+\/= ?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9.-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,63}$/;
export function validEmail(s) { return typeof s === 'string' && s.length <= 254 && !/[\s\r\n\x00-\x1f\x7f]/.test(s) && emailPattern.test(s); }
function configured(s) {
  return s.enabled === true && Array.isArray(s.allowedOrigins) && s.allowedOrigins.length && s.allowedOrigins.every(origin => {
    try { const u = new URL(origin); return u.origin === origin && (u.protocol === 'https:' || ['localhost','127.0.0.1'].includes(u.hostname)); } catch { return false; }
  }) && typeof s.applicantNoticeUrl === 'string' && s.applicantNoticeUrl.startsWith('/') && !s.applicantNoticeUrl.startsWith('//') &&
    typeof s.turnstileSiteKey === 'string' && s.turnstileSiteKey.length >= 10 &&
    ['rateLimit','verifyBot','scanResume','deliver'].every(k => typeof s[k] === 'function') &&
    s.ledger && ['reserve','mark'].every(k => typeof s.ledger[k] === 'function');
}
export function publicCareersConfig(s) {
  const enabled = Boolean(configured(s));
  return json(enabled ? { enabled, turnstileSiteKey:s.turnstileSiteKey, applicantNoticeUrl:s.applicantNoticeUrl, maxResumeBytes:MAX_RESUME_BYTES, extensions:['pdf','docx'] } : { enabled:false });
}
async function boundedForm(request) {
  const length = request.headers.get('content-length');
  if (length && (!/^\d+$/.test(length) || Number(length) > MAX_REQUEST_BYTES)) throw new Error('payload_too_large');
  const reader = request.body?.getReader();
  if (!reader) throw new Error('invalid_form');
  let size=0;
  const parts=[];
  try {
    while (true) {
      const {done,value}=await reader.read();
      if(done) break;
      size += value.byteLength;
      if(size > MAX_REQUEST_BYTES) { await reader.cancel(); throw new Error('payload_too_large'); }
      parts.push(value);
    }
    return await new Response(Buffer.concat(parts,size), {headers:{'Content-Type':request.headers.get('content-type')}}).formData();
  } finally { reader.releaseLock(); }
}
function cleanFields(form) {
  const data={};
  for(const [key,value] of form) {
    if(!fields.has(key) || Object.hasOwn(data,key)) throw new Error('validation_failed');
    if(key==='resume') { data.resume=value; continue; }
    if(typeof value!=='string' || value.length > (key==='introduction'?1500:key==='turnstileToken'?2048:key==='portfolio'?500:254)) throw new Error('validation_failed');
    data[key]=value.trim();
  }
  for(const [key,max] of [['name',120],['email',254],['location',160]]) if(!data[key] || data[key].length>max || /[\x00-\x1f\x7f]/.test(data[key])) throw new Error('validation_failed');
  if(!validEmail(data.email) || !Object.hasOwn(INTERESTS,data.interest) || !Object.hasOwn(AVAILABILITY,data.availability) || data.consent!=='yes' || data.website) throw new Error('validation_failed');
  if(data.portfolio) { const u=new URL(data.portfolio); if(!['https:','http:'].includes(u.protocol)||u.username||u.password) throw new Error('validation_failed'); }
  if(data.introduction && /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(data.introduction)) throw new Error('validation_failed');
  return data;
}
/** Web Request/Response handler. Trusted clientKey must be provided by the host adapter,
 * never taken from a browser-supplied forwarding header. All services fail closed.
 * ledger stores hashes/status only; file content is kept in request memory, not the webroot.
 */
export function createCareersHandler(services={}) {
  return async function handle(request,{clientKey}={}) {
    if(request.method!=='POST') return json({ok:false,error:'method_not_allowed'},405,{Allow:'POST'});
    if(!configured(services)) return json({ok:false,error:'service_not_configured'},503);
    const origin=request.headers.get('origin');
    if(!origin || !services.allowedOrigins.includes(origin)) return json({ok:false,error:'origin_not_allowed'},403);
    if(!/multipart\/form-data;\s*boundary=/i.test(request.headers.get('content-type')||'')) return json({ok:false,error:'unsupported_media_type'},415);
    const applicationId=request.headers.get('idempotency-key');
    if(!validId(applicationId)||!clientKey) return json({ok:false,error:'validation_failed'},400);
    try {
      const rate=await services.rateLimit(clientKey);
      if(!rate?.allowed) return json({ok:false,error:'rate_limited'},429,{'Retry-After':String(Math.max(1,Math.min(3600,Number(rate?.retryAfter)||60)))});
    } catch { return json({ok:false,error:'security_check_unavailable'},503); }
    let data;
    try { data=cleanFields(await boundedForm(request)); }
    catch(error) { return json({ok:false,error:error.message==='payload_too_large'?'payload_too_large':'validation_failed'},error.message==='payload_too_large'?413:400); }
    if(!data.resume || typeof data.resume.arrayBuffer!=='function' || !data.resume.size) return json({ok:false,error:'invalid_resume'},400);
    if(data.resume.size > MAX_RESUME_BYTES) return json({ok:false,error:'payload_too_large'},413);
    try {
      const verified=await services.verifyBot({token:data.turnstileToken||'',hostname:new URL(origin).hostname,action:'careers_application'});
      if(verified!==true) return json({ok:false,error:'bot_verification_failed'},400);
    } catch { return json({ok:false,error:'security_check_unavailable'},503); }
    let resume;
    try { resume=validateResume(Buffer.from(await data.resume.arrayBuffer()),data.resume.name,data.resume.type); }
    catch { return json({ok:false,error:'invalid_resume'},400); }
    const candidate={name:data.name,email:data.email,interest:INTERESTS[data.interest],location:data.location,availability:AVAILABILITY[data.availability],portfolio:data.portfolio||'',introduction:data.introduction||'',consent:true};
    const fingerprint=createHash('sha256').update(JSON.stringify(candidate)).update(resume.bytes).digest('hex');
    let reservation;
    try { reservation=await services.ledger.reserve(applicationId,fingerprint); }
    catch { return json({ok:false,error:'security_check_unavailable'},503); }
    if(reservation.status==='conflict') return json({ok:false,error:'request_conflict'},409);
    if(reservation.status==='accepted') return json({ok:true,status:'accepted',applicationId},200);
    if(reservation.status==='unknown') return json({ok:false,error:'delivery_unconfirmed',applicationId},503);
    if(reservation.status==='rejected') return json({ok:false,error:'unsafe_resume'},422);
    if(reservation.status!=='reserved') return json({ok:false,error:'application_processing',applicationId},409);
    const mark=async (state,providerId=null) => services.ledger.mark(applicationId,state,providerId);
    try {
      let verdict;
      try { verdict=await services.scanResume(resume.bytes); }
      catch { await mark('failed'); return json({ok:false,error:'security_check_unavailable'},503); }
      if(verdict?.clean!==true) { await mark('rejected'); return json({ok:false,error:'unsafe_resume'},422); }
      // Record the ambiguity boundary BEFORE the outbound send, so a crash never auto-resends.
      await mark('unknown');
      let receipt;
      try { receipt=await services.deliver({applicationId,candidate,resume,receivedAt:new Date().toISOString()}); }
      catch(error) {
        if(error.definitive===true) { await mark('failed'); return json({ok:false,error:'delivery_failed'},503); }
        return json({ok:false,error:'delivery_unconfirmed',applicationId},503);
      }
      if(!receipt?.providerId) return json({ok:false,error:'delivery_unconfirmed',applicationId},503);
      await mark('accepted',String(receipt.providerId));
      return json({ok:true,status:'accepted',applicationId},201);
    } catch { return json({ok:false,error:'delivery_unconfirmed',applicationId},503); }
    finally { resume.bytes.fill(0); }
  };
}
