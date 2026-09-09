(async()=>{
  const bust='?v='+Date.now();
  const content=await fetch('content-review.json'+bust,{cache:'no-store'}).then(r=>{
    if(!r.ok) throw new Error('Content '+r.status);
    return r.json();
  });
  const philosophy=content.philosophy||{};
  const section=[...document.querySelectorAll('section.section')].find(sec=>{
    const e=sec.querySelector('.eyebrow');
    return e && /How We Think/i.test(e.textContent||'');
  });
  if(!section) return;
  const set=(sel,val)=>{const el=section.querySelector(sel); if(el&&val!=null) el.textContent=val; return el;};
  set('.eyebrow',philosophy.eyebrow);
  const heading=section.querySelector('.h2');
  if(heading&&philosophy.headline) heading.textContent=philosophy.headline;
  let intro=section.querySelector('.contentReviewPhilosophyIntro');
  if(!intro){
    intro=document.createElement('p');
    intro.className='lead contentReviewPhilosophyIntro';
    const principles=section.querySelector('.principles');
    if(principles) principles.parentNode.insertBefore(intro,principles);
  }
  intro.textContent=philosophy.intro||'';
  Object.assign(intro.style,{marginTop:'10px',maxWidth:'780px'});
  const cards=[...section.querySelectorAll('.principle')];
  if(Array.isArray(philosophy.items)) philosophy.items.forEach((item,i)=>{
    const card=cards[i]; if(!card) return;
    card.innerHTML='';
    const num=document.createElement('span'); num.textContent=item.number||'';
    const title=document.createElement('b'); title.textContent=item.title||'';
    const tagline=document.createElement('strong'); tagline.textContent=item.tagline||'';
    const body=document.createElement('p'); body.textContent=item.text||'';
    Object.assign(tagline.style,{display:'block',fontSize:'12px',lineHeight:'1.4',margin:'7px 0 0',fontWeight:'600',color:'#20242d'});
    Object.assign(body.style,{margin:'7px 0 0',fontSize:'11.5px',lineHeight:'1.5',color:'#727b8b'});
    card.append(num,title,tagline,body);
  });
  let closing=section.querySelector('.contentReviewPhilosophyClosing');
  if(!closing){
    closing=document.createElement('div');
    closing.className='contentReviewPhilosophyClosing';
    section.querySelector('.container')?.appendChild(closing);
  }
  closing.textContent=philosophy.closing||'';
  Object.assign(closing.style,{marginTop:'24px',paddingTop:'18px',borderTop:'1px solid #e6e8ed',fontSize:'18px',fontWeight:'700',letterSpacing:'-.02em',color:'#0b0d12'});
})().catch(err=>console.error('Aloden philosophy review patch failed',err));
