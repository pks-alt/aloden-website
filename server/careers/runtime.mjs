/** Node 22.16+ container/VM reference adapter. Mount behind HTTPS on the website origin.
 * Default is DISABLED. No Gmail or scanner calls occur without explicit production configuration.
 * This API process never serves the repository or uploaded files as static content.
 */
import http from 'node:http';
import net from 'node:net';
import { Readable } from 'node:stream';
import { pathToFileURL } from 'node:url';
import { createCareersHandler, publicCareersConfig, json } from './handler.mjs';
import { createGmailDelivery } from './gmail.mjs';
import { createSqliteServices, createClamScanner, createBotVerifier } from './services.mjs';
export function createCareersServer({services={},trustedProxyIps=[],host='127.0.0.1'}={}) {
  const handle=createCareersHandler(services);
  let inFlight = 0;
  const server=http.createServer({requestTimeout:70000,headersTimeout:10000,maxHeaderSize:16384},async(req,res)=>{
    let response;
    if (inFlight >= 4) { res.writeHead(429, {'Content-Type':'application/json','Cache-Control':'no-store','Retry-After':'30'}); res.end(JSON.stringify({ok:false,error:'rate_limited'})); return; }
    inFlight++;
    try {
      const path=(req.url||'').split('?')[0];
      if(req.method==='GET'&&path==='/api/careers/config') response=publicCareersConfig(services);
      else if(path==='/api/careers/applications') {
        let ip=req.socket.remoteAddress||'';
        if(ip.startsWith('::ffff:')) ip=ip.slice(7);
        if(trustedProxyIps.includes(ip)) {
          const forwarded=req.headers['x-real-ip'];
          if(typeof forwarded!=='string'||!net.isIP(forwarded)) {response=json({ok:false,error:'origin_not_allowed'},403);}
          else ip=forwarded;
        }
        if(!response){
          const opts={method:req.method,headers:req.headers};
          if(!['GET','HEAD'].includes(req.method)){opts.body=Readable.toWeb(req);opts.duplex='half';}
          const request=new Request(`http://${host}${path}`,opts);
          response=await handle(request,{clientKey:ip});
        }
      } else response=json({ok:false,error:'not_found'},404);
    } catch { response=json({ok:false,error:'service_unavailable'},503); }
    inFlight--;
    if(!res.destroyed){res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()));}
  });
  server.on('clientError',(_err,socket)=>{if(socket.writable)socket.end('HTTP/1.1 400 Bad Request\r\nConnection: close\r\n\r\n');});
  return server;
}
function servicesFromEnv(env){
  if(env.CAREERS_ENABLED!=='true')return {services:{enabled:false},close:()=>{}};
  const required=['CAREERS_ALLOWED_ORIGINS','CAREERS_APPLICANT_NOTICE_URL','CAREERS_TURNSTILE_SITE_KEY','CAREERS_TURNSTILE_SECRET','CAREERS_STATE_DB','CAREERS_RATE_SALT','GMAIL_CLIENT_ID','GMAIL_CLIENT_SECRET','GMAIL_REFRESH_TOKEN','GMAIL_SENDER'];
  if(required.some(k=>!env[k]))throw new Error('Missing required Careers configuration. See docs/CAREERS-RESUME-UPLOAD.md.');
  if(env.CAREERS_PRIVACY_APPROVED!=='true')throw new Error('Applicant privacy approval is required before enabling uploads.');
  const state=createSqliteServices(env.CAREERS_STATE_DB,env.CAREERS_RATE_SALT);
  const services={...state,enabled:true,allowedOrigins:env.CAREERS_ALLOWED_ORIGINS.split(',').map(x=>x.trim()),applicantNoticeUrl:env.CAREERS_APPLICANT_NOTICE_URL,turnstileSiteKey:env.CAREERS_TURNSTILE_SITE_KEY,
    verifyBot:createBotVerifier(env.CAREERS_TURNSTILE_SECRET),scanResume:createClamScanner({host:env.CAREERS_CLAM_HOST||'127.0.0.1',port:Number(env.CAREERS_CLAM_PORT||3310)}),
    deliver:createGmailDelivery({clientId:env.GMAIL_CLIENT_ID,clientSecret:env.GMAIL_CLIENT_SECRET,refreshToken:env.GMAIL_REFRESH_TOKEN,sender:env.GMAIL_SENDER})};
  return {services,close:state.close};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
  try {
    const {services,close}=servicesFromEnv(process.env);
    const trustedProxyIps=(process.env.CAREERS_TRUSTED_PROXY_IPS||'').split(',').filter(Boolean);
    if(trustedProxyIps.some(ip=>!net.isIP(ip)))throw new Error('Trusted proxies must be exact IP addresses.');
    const host=process.env.CAREERS_BIND_HOST||'127.0.0.1';
    const server=createCareersServer({services,trustedProxyIps});
    server.listen(Number(process.env.CAREERS_PORT||8788),host,()=>console.log(`Careers API listening; ${services.enabled?'enabled':'disabled'}.`));
    for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>server.close(()=>{close();process.exit(0);}));
  } catch(error) {console.error(error.message);process.exitCode=1;}
}
