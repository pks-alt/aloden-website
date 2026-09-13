import net from 'node:net';
import { createHmac } from 'node:crypto';
import { DatabaseSync } from 'node:sqlite';
/** SQLite must be on private, persistent storage; single Node instance. No resume or contact content is persisted. */
export function createSqliteServices(filename,salt) {
  if(!filename||typeof salt!=='string'||salt.length<32) throw new Error('state_not_configured');
  const db=new DatabaseSync(filename);
  db.exec(`PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000;
    CREATE TABLE IF NOT EXISTS applications (id TEXT PRIMARY KEY, fingerprint TEXT NOT NULL, state TEXT NOT NULL, provider TEXT, created INTEGER NOT NULL);
    CREATE TABLE IF NOT EXISTS rate (key TEXT NOT NULL, bucket INTEGER NOT NULL, hits INTEGER NOT NULL, PRIMARY KEY(key,bucket));`);
  const transaction=fn=>{db.exec('BEGIN IMMEDIATE');try{const v=fn();db.exec('COMMIT');return v;}catch(e){db.exec('ROLLBACK');throw e;}};
  const ledger={
    reserve(id,fingerprint) {return transaction(()=>{
      // Do not auto-delete unknown deliveries: HR must reconcile them before a retry.
      db.prepare("DELETE FROM applications WHERE created < ? AND state NOT IN ('unknown','processing')").run(Date.now()-7*86400000);
      const row=db.prepare('SELECT * FROM applications WHERE id=?').get(id);
      if(row) {
        if(row.fingerprint!==fingerprint) return {status:'conflict'};
        if(row.state!=='failed') return {status:row.state};
        db.prepare("UPDATE applications SET state='processing' WHERE id=?").run(id);
      } else db.prepare("INSERT INTO applications(id,fingerprint,state,created) VALUES (?,?,'processing',?)").run(id,fingerprint,Date.now());
      return {status:'reserved'};
    });},
    mark(id,state,providerId=null) {
      if(!['accepted','failed','rejected','unknown'].includes(state)) throw new Error('invalid_state');
      const changed=db.prepare('UPDATE applications SET state=?,provider=? WHERE id=?').run(state,providerId,id);
      if(!changed.changes) throw new Error('missing_reservation');
    }
  };
  function rateLimit(clientKey) {return transaction(()=>{
    const bucket=Math.floor(Date.now()/3600000);
    db.prepare('DELETE FROM rate WHERE bucket < ?').run(bucket-1);
    const key=createHmac('sha256',salt).update(clientKey).digest('hex');
    let permitted=true;
    for(const [k,limit] of [[key,10],['global',200]]) {
      db.prepare('INSERT INTO rate(key,bucket,hits) VALUES (?,?,1) ON CONFLICT(key,bucket) DO UPDATE SET hits=hits+1').run(k,bucket);
      if(db.prepare('SELECT hits FROM rate WHERE key=? AND bucket=?').get(k,bucket).hits>limit) permitted=false;
    }
    return {allowed:permitted,retryAfter:3600-Math.floor(Date.now()/1000)%3600};
  });}
  return {ledger,rateLimit,close:()=>db.close()};
}
export function createBotVerifier(secret,fetchImpl=fetch) {
  if(!secret) throw new Error('bot_not_configured');
  return async ({token,hostname,action})=>{
    if(!token||token.length>2048) return false;
    const r=await fetchImpl('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({secret,response:token}),signal:AbortSignal.timeout(10000)});
    if(!r.ok) throw new Error('bot_unavailable');
    const result=await r.json();
    return result.success===true && result.hostname===hostname && result.action===action;
  };
}
/** Stream only to a private, operator-controlled clamd. Never send resumes to public scanning services. */
export function createClamScanner({host='127.0.0.1',port=3310,timeout=15000}={}) {
  return bytes=>new Promise((resolve,reject)=>{
    const socket=net.createConnection({host,port});
    let reply=Buffer.alloc(0),finished=false;
    const finish=(err,result)=>{if(finished)return;finished=true;socket.destroy();if(err)reject(err);else resolve(result);};
    socket.setTimeout(timeout,()=>finish(new Error('scanner_timeout')));
    socket.on('error',()=>finish(new Error('scanner_unavailable')));
    socket.on('close',()=>{if(!finished)finish(new Error('scanner_unavailable'));});
    socket.on('data',chunk=>{reply=Buffer.concat([reply,chunk]);if(reply.length>4096)return finish(new Error('scanner_response_invalid'));if(reply.includes(0))parse();});
    function parse(){
      const result=reply.toString('utf8').replace(/\0.*$/s,'').trim();
      if(/^stream: OK$/.test(result)) finish(null,{clean:true});
      else if(/^stream: .+ FOUND$/.test(result)) finish(null,{clean:false});
      else finish(new Error('scanner_failed'));
    }
    socket.on('end',parse);
    socket.on('connect',()=>{
      socket.write('zINSTREAM\0');
      // Total input is bounded at 5 MB before this adapter is called.
      for(let i=0;i<bytes.length;i+=65536){const chunk=bytes.subarray(i,i+65536),size=Buffer.alloc(4);size.writeUInt32BE(chunk.length);socket.write(size);socket.write(chunk);}
      socket.write(Buffer.alloc(4));
    });
  });
}
