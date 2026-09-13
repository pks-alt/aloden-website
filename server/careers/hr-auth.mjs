/** Google authorization-code + PKCE sign-in. Exact user allowlist, no shared passwords. */
import { DatabaseSync } from 'node:sqlite';
import { randomBytes, createHash, createPublicKey, verify, timingSafeEqual } from 'node:crypto';
import { json } from './handler.mjs';
import { problem } from './jobs-store.mjs';
const hash=s=>createHash('sha256').update(s).digest('hex');
const random=()=>randomBytes(32).toString('base64url');
const equal=(a,b)=>{if(typeof a!=='string'||typeof b!=='string')return false;const x=Buffer.from(a),y=Buffer.from(b);return x.length===y.length&&timingSafeEqual(x,y);};
const readCookie=(request,key)=>{const parts=(request.headers.get('cookie')||'').split(';').map(s=>s.trim()).filter(s=>s.startsWith(`${key}=`));return parts.length===1?parts[0].slice(key.length+1):'';};
const redirect=(url,cookie)=>new Response(null,{status:303,headers:{Location:url,'Cache-Control':'no-store','Referrer-Policy':'no-referrer',...(cookie?{'Set-Cookie':cookie}:{})}});
export function createGoogleVerifier({clientId,fetchImpl=fetch,now=Date.now}) {
  let cached=null,until=0;
  return async (jwt,nonce)=>{
    if(typeof jwt!=='string'||jwt.length>16000)throw problem('login_failed',401);
    try {
      const parts=jwt.split('.');if(parts.length!==3)throw Error();
      const header=JSON.parse(Buffer.from(parts[0],'base64url')),payload=JSON.parse(Buffer.from(parts[1],'base64url'));
      if(header.alg!=='RS256'||typeof header.kid!=='string'||header.kid.length>200)throw Error();
      if(!cached||now()>until){const r=await fetchImpl('https://www.googleapis.com/oauth2/v3/certs',{signal:AbortSignal.timeout(10000)});if(!r.ok)throw Error();cached=(await r.json()).keys;until=now()+300000;}
      const jwk=cached.find(k=>k.kid===header.kid&&k.kty==='RSA'&&k.use==='sig');
      if(!jwk||!verify('RSA-SHA256',Buffer.from(`${parts[0]}.${parts[1]}`),createPublicKey({key:jwk,format:'jwk'}),Buffer.from(parts[2],'base64url')))throw Error();
      const seconds=Math.floor(now()/1000),aud=Array.isArray(payload.aud)?payload.aud:[payload.aud];
      if(!['accounts.google.com','https://accounts.google.com'].includes(payload.iss)||!aud.includes(clientId)||(payload.azp&&payload.azp!==clientId)||(aud.length>1&&payload.azp!==clientId)||!Number.isFinite(payload.exp)||payload.exp<=seconds||!Number.isFinite(payload.iat)||payload.iat>seconds+60||payload.iat<seconds-600||!equal(payload.nonce,nonce)||payload.email_verified!==true||typeof payload.sub!=='string'||!payload.sub||payload.sub.length>255||typeof payload.email!=='string'||payload.email.length>254)throw Error();
      return {sub:payload.sub,email:payload.email.toLowerCase()};
    } catch {throw problem('login_failed',401);}
  };
}
export function createHrAuth({filename,origin,clientId,clientSecret,users,fetchImpl=fetch,now=Date.now}) {
  const u=new URL(origin);
  if(u.origin!==origin||u.protocol!=='https:'||!filename||!clientId||!clientSecret||!users||!Object.keys(users).length||Object.entries(users).some(([email,role])=>email!==email.toLowerCase()||!email.includes('@')||!['editor','publisher'].includes(role)))throw Error('HR sign-in requires HTTPS origin, credentials and exact user allowlist.');
  const db=new DatabaseSync(filename);
  db.exec(`PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000;
    CREATE TABLE IF NOT EXISTS hr_login(state TEXT PRIMARY KEY, binding TEXT NOT NULL, verifier TEXT NOT NULL, nonce TEXT NOT NULL, until INTEGER NOT NULL);
    CREATE TABLE IF NOT EXISTS hr_session(token TEXT PRIMARY KEY, sub TEXT NOT NULL, email TEXT NOT NULL, csrf TEXT NOT NULL, until INTEGER NOT NULL, touched INTEGER NOT NULL);
    CREATE TABLE IF NOT EXISTS hr_login_rate(key TEXT PRIMARY KEY, bucket INTEGER NOT NULL, hits INTEGER NOT NULL);`);
  const verifier=createGoogleVerifier({clientId,fetchImpl,now});
  const cookie=(name,value,age,same='Strict')=>`${name}=${value}; Max-Age=${age}; Path=/; Secure; HttpOnly; SameSite=${same}`;
  function cleanup(){db.prepare('DELETE FROM hr_login WHERE until < ?').run(now());db.prepare('DELETE FROM hr_session WHERE until < ? OR touched < ?').run(now(),now()-1800000);db.prepare('DELETE FROM hr_login_rate WHERE bucket < ?').run(Math.floor(now()/3600000)-1);}
  function limited(clientKey){const bucket=Math.floor(now()/3600000);for(const [key,limit] of [[hash(clientKey||'unknown'),20],['global',200]]){db.prepare('INSERT INTO hr_login_rate VALUES(?,?,1) ON CONFLICT(key) DO UPDATE SET hits=CASE WHEN bucket=excluded.bucket THEN hits+1 ELSE 1 END,bucket=excluded.bucket').run(key,bucket);if(db.prepare('SELECT hits FROM hr_login_rate WHERE key=?').get(key).hits>limit)return true;}return false;}
  function session(request){cleanup();const token=readCookie(request,'__Host-aloden_hr');if(!/^[\w-]{43}$/.test(token))return null;const s=db.prepare('SELECT * FROM hr_session WHERE token=?').get(hash(token));if(!s)return null;const role=users[s.email];if(!role){db.prepare('DELETE FROM hr_session WHERE token=?').run(hash(token));return null;}db.prepare('UPDATE hr_session SET touched=? WHERE token=?').run(now(),hash(token));return {sub:s.sub,email:s.email,role,csrf:s.csrf};}
  return {
    session,
    authorize(request,publish=false){const s=session(request);if(!s)throw problem('sign_in_required',401);if(publish&&s.role!=='publisher')throw problem('publisher_required',403);if(!['GET','HEAD'].includes(request.method)&&(request.headers.get('origin')!==origin||!equal(request.headers.get('x-csrf-token'),s.csrf)))throw problem('request_not_allowed',403);return s;},
    async route(request,{clientKey}={}){
      const url=new URL(request.url);
      if(url.pathname==='/auth/careers/login'&&request.method==='GET'){
        cleanup();if(limited(clientKey))return json({error:'rate_limited'},429);
        const state=random(),binding=random(),pkce=random(),nonce=random();
        db.prepare('INSERT INTO hr_login VALUES(?,?,?,?,?)').run(hash(state),hash(binding),pkce,nonce,now()+600000);
        const params=new URLSearchParams({client_id:clientId,redirect_uri:`${origin}/auth/careers/callback`,response_type:'code',scope:'openid email',state,nonce,code_challenge:createHash('sha256').update(pkce).digest('base64url'),code_challenge_method:'S256',prompt:'select_account'});
        return redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params}`,cookie('__Host-aloden_hr_login',binding,600,'Lax'));
      }
      if(url.pathname==='/auth/careers/callback'&&request.method==='GET'){
        const state=url.searchParams.get('state')||'',binding=readCookie(request,'__Host-aloden_hr_login'),code=url.searchParams.get('code');
        if(!/^[\w-]{43}$/.test(state)||!binding||!code||code.length>3000)return redirect(`${origin}/hr-jobs.html?login=failed`);
        const pending=db.prepare('SELECT * FROM hr_login WHERE state=?').get(hash(state));
        if(!pending||pending.until<now()||!equal(pending.binding,hash(binding)))return redirect(`${origin}/hr-jobs.html?login=failed`);
        // Consume the state atomically; a replay must not get a second code exchange.
        if(!db.prepare('DELETE FROM hr_login WHERE state=?').run(hash(state)).changes)return redirect(`${origin}/hr-jobs.html?login=failed`);
        try {
          const r=await fetchImpl('https://oauth2.googleapis.com/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({client_id:clientId,client_secret:clientSecret,code,code_verifier:pending.verifier,redirect_uri:`${origin}/auth/careers/callback`,grant_type:'authorization_code'}),signal:AbortSignal.timeout(10000)});
          if(!r.ok)throw Error();
          const identity=await verifier((await r.json()).id_token,pending.nonce);
          if(!users[identity.email])throw Error();
          const token=random(),csrf=random();db.prepare('INSERT INTO hr_session VALUES(?,?,?,?,?,?)').run(hash(token),identity.sub,identity.email,csrf,now()+8*3600000,now());
          return redirect(`${origin}/hr-jobs.html`,cookie('__Host-aloden_hr',token,8*3600));
        } catch {return redirect(`${origin}/hr-jobs.html?login=failed`);}
      }
      if(url.pathname==='/api/hr/session'&&request.method==='GET'){const s=session(request);return s?json({ok:true,user:s}):json({ok:false,error:'sign_in_required'},401);}
      if(url.pathname==='/api/hr/logout'&&request.method==='POST'){this.authorize(request);db.prepare('DELETE FROM hr_session WHERE token=?').run(hash(readCookie(request,'__Host-aloden_hr')));return new Response(JSON.stringify({ok:true}),{headers:{'Content-Type':'application/json','Cache-Control':'no-store','Set-Cookie':cookie('__Host-aloden_hr','',0)}});}
      return null;
    },close(){db.close();}
  };
}
