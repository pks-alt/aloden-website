import { validEmail } from './handler.mjs';
const fold = bytes => Buffer.from(bytes).toString('base64').match(/.{1,76}/g)?.join('\r\n') || '';
const error = definitive => Object.assign(new Error('gmail_delivery_failed'),{definitive});
/** The OAuth account must own or be permitted to send from sender. Never expose refreshToken to the browser. */
export function createGmailDelivery({clientId,clientSecret,refreshToken,sender,fetchImpl=fetch}={}) {
  if(!clientId||!clientSecret||!refreshToken||!validEmail(sender)) throw new Error('gmail_not_configured');
  let accessToken='',expires=0;
  async function token() {
    if(accessToken && Date.now()<expires) return accessToken;
    try {
      const response=await fetchImpl('https://oauth2.googleapis.com/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({client_id:clientId,client_secret:clientSecret,refresh_token:refreshToken,grant_type:'refresh_token'}),signal:AbortSignal.timeout(10000)});
      const data=await response.json();
      if(!response.ok||typeof data.access_token!=='string') throw error(true);
      accessToken=data.access_token;
      expires=Date.now()+(Math.max(60,Number(data.expires_in)||3600)-30)*1000;
      return accessToken;
    } catch { throw error(true); } // No email send has occurred yet.
  }
  return async payload => {
    const bearer=await token();
    const mime=buildMime(payload,sender);
    let response;
    try {
      response=await fetchImpl('https://gmail.googleapis.com/gmail/v1/users/me/messages/send',{method:'POST',headers:{Authorization:`Bearer ${bearer}`,'Content-Type':'application/json'},body:JSON.stringify({raw:Buffer.from(mime,'utf8').toString('base64url')}),signal:AbortSignal.timeout(25000)});
    } catch { throw error(false); }
    if(!response.ok) { if(response.status===401) {accessToken='';expires=0;} throw error(response.status>=400 && response.status<500); }
    let data;
    try { data=await response.json(); } catch { throw error(false); }
    if(typeof data.id!=='string'||!data.id) throw error(false);
    return {providerId:data.id};
  };
}
export function buildMime({applicationId,candidate,resume,receivedAt},sender) {
  if(!/^[a-f0-9-]{36}$/i.test(applicationId)||!validEmail(candidate.email)||!validEmail(sender)||!['resume.pdf','resume.docx'].includes(resume.filename)) throw error(true);
  const boundary=`aloden-careers-${applicationId}`;
  const text=[
    candidate.job ? 'Application to an advertised Aloden vacancy.' : 'General Aloden career introduction.',
    ...(candidate.job ? [`Job: ${candidate.job.title}`, `Job reference: ${candidate.job.id}`, `Published record version: ${candidate.job.version}`] : []),
    `Reference: ${applicationId}`,`Received: ${receivedAt}`,'',
    `Name: ${candidate.name}`,`Email: ${candidate.email}`,`Area of interest: ${candidate.interest}`,`Location: ${candidate.location}`,`Availability: ${candidate.availability}`,`Portfolio: ${candidate.portfolio || 'Not supplied'}`,'',
    'Introduction:',candidate.introduction || 'Not supplied','',
    'Candidate confirmed permission to share this information for recruitment review.',
    'Resume is attached. Treat applicant links and attachments as untrusted. File checks are not a guarantee of safety.'
  ].join('\n');
  return [
    `From: Aloden Careers <${sender}>`,'To: hr@aloden.com',`Reply-To: ${candidate.email}`,
    `Subject: Aloden career application | ${applicationId}`,`Date: ${new Date(receivedAt).toUTCString()}`,
    `Message-ID: <career-${applicationId}@aloden.com>`,'MIME-Version: 1.0',`Content-Type: multipart/mixed; boundary="${boundary}"`,'',
    `--${boundary}`,'Content-Type: text/plain; charset=UTF-8','Content-Transfer-Encoding: base64','',fold(Buffer.from(text,'utf8')),'',
    `--${boundary}`,`Content-Type: ${resume.contentType}; name="${resume.filename}"`,`Content-Disposition: attachment; filename="${resume.filename}"`,'Content-Transfer-Encoding: base64','',fold(resume.bytes),'',`--${boundary}--`,''
  ].join('\r\n');
}
