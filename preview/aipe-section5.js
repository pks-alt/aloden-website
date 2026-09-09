// AI Product Engineering content-review layer — Section 5 / where AI earns its place.
(() => {
  if (!document.querySelector('.aipeHero')) return;
  const next = document.querySelector('.aipeReviewNext');
  if (!next || document.querySelector('#where-ai-earns-its-place')) return;

  const section = document.createElement('section');
  section.className = 'aipeValue section soft';
  section.id = 'where-ai-earns-its-place';
  section.innerHTML = `
    <div class="container">
      <div class="aipeValueHead">
        <div class="eyebrow">WHERE AI CREATES VALUE</div>
        <h2 class="h2">Use AI where it changes the product—not where it decorates it.</h2>
        <p class="lead">Not every workflow needs a model, an agent, or generated output. The strongest AI products use intelligence where uncertainty, scale, language, context, or complex decision-making make traditional software insufficient—and keep deterministic software or human judgment where those approaches are better.</p>
      </div>

      <div class="aipeValueDecision" aria-label="Decision system for choosing AI, deterministic software, agentic workflows, or human control">
        <div class="aipeValueDecisionTop"><span>PRODUCT DECISION SYSTEM</span><b>USE THE SIMPLEST APPROACH THAT EARNS ITS PLACE</b></div>
        <div class="aipeValueDecisionBody">
          <div class="aipeValueProblem"><span>START</span><b>Product Problem</b><small>What must become meaningfully better?</small></div>
          <div class="aipeValueBranches">
            <article><small>STRUCTURED + PREDICTABLE</small><b>Rules / Conventional Software</b><p>Explicit logic where reliability matters more than probabilistic behavior.</p></article>
            <article class="aiBranch"><small>UNSTRUCTURED / CONTEXTUAL / PROBABILISTIC</small><b>AI Capability</b><p>Language, context, ranking, inference, or generated output where traditional software is insufficient.</p></article>
            <article class="agentBranch"><small>MULTI-STEP + TOOL-CONNECTED</small><b>Agentic Workflow</b><p>Reasoning, tools, workflow state, permissions, and coordinated action.</p></article>
            <article><small>JUDGMENT / ACCOUNTABILITY REQUIRED</small><b>Human Control</b><p>Review, approval, escalation, or ownership where people must remain accountable.</p></article>
          </div>
          <div class="aipeValueConverge"><span>CONVERGE</span><b>One Product Experience</b><small>The technology disappears behind a coherent workflow.</small></div>
        </div>
      </div>

      <div class="aipeValueGrid">
        <article class="aipeValueCard">
          <div class="aipeValueTop"><span>01</span><small>UNSTRUCTURED INFORMATION</small></div>
          <h3>Understand unstructured information.</h3>
          <div class="aipeValueUse"><b>When the problem</b><p>Important context is buried in language, documents, conversations, notes, or other unstructured information.</p></div>
          <div class="aipeValueUse"><b>AI can help</b><p>Extract meaning, classify information, summarize context, identify relationships, or prepare structured inputs for downstream workflows.</p></div>
          <div class="aipeValueRequirement"><span>Product requirement</span><p>The result must connect to a real user decision or workflow—not end as generated text.</p></div>
          <div class="aipeValueExamples"><span>Documents → structured context</span><span>Conversation → intent</span><span>Free text → workflow signal</span></div>
        </article>

        <article class="aipeValueCard">
          <div class="aipeValueTop"><span>02</span><small>MATCHING, RANKING &amp; PRIORITIZATION</small></div>
          <h3>Improve matching, ranking, and prioritization.</h3>
          <div class="aipeValueUse"><b>When the problem</b><p>Users have too many possibilities to evaluate manually or simple filtering misses important context.</p></div>
          <div class="aipeValueUse"><b>AI can help</b><p>Rank, match, recommend, prioritize, and explain why an option may fit.</p></div>
          <div class="aipeValueRequirement"><span>Product requirement</span><p>Recommendations need evidence, understandable reasoning, controls, and human review where decisions matter.</p></div>
          <div class="aipeValueExamples"><span>Need → best-fit options</span><span>Signals → priority</span><span>Evidence → recommendation</span></div>
        </article>

        <article class="aipeValueCard decisionValueCard">
          <div class="aipeValueTop"><span>03</span><small>COMPLEX DECISION SUPPORT</small></div>
          <h3>Support complex decisions.</h3>
          <div class="aipeValueUse"><b>When the problem</b><p>A decision depends on many signals, changing context, or information spread across systems.</p></div>
          <div class="aipeValueUse"><b>AI can help</b><p>Assemble context, surface relevant evidence, identify options, and provide decision support.</p></div>
          <div class="aipeValueRequirement"><span>Product requirement</span><p>AI should inform the decision without obscuring who is accountable for it.</p></div>
          <div class="aipeValueExamples"><span>Context → options</span><span>Evidence → recommendation</span><span>Recommendation → human decision</span></div>
        </article>

        <article class="aipeValueCard darkValueCard">
          <div class="aipeValueTop"><span>04</span><small>MULTI-STEP WORKFLOWS</small></div>
          <h3>Transform multi-step workflows.</h3>
          <div class="aipeValueUse"><b>When the problem</b><p>People repeatedly move between systems, gather information, interpret it, choose an action, and complete several connected steps.</p></div>
          <div class="aipeValueUse"><b>AI can help</b><p>Reason across the workflow, use tools, coordinate steps, and automate permitted actions.</p></div>
          <div class="aipeValueRequirement"><span>Product requirement</span><p>State, permissions, validations, exception handling, and escalation have to exist around the intelligence.</p></div>
          <div class="aipeValueExamples"><span>Intent → tools</span><span>Tools → action</span><span>Action → confirmation / escalation</span></div>
        </article>

        <article class="aipeValueCard conversationalValueCard">
          <div class="aipeValueTop"><span>05</span><small>CONVERSATIONAL PRODUCTS</small></div>
          <h3>Make products conversational.</h3>
          <div class="aipeValueUse"><b>When the problem</b><p>Traditional interfaces create unnecessary friction for tasks that people can express naturally.</p></div>
          <div class="aipeValueUse"><b>AI can help</b><p>Understand intent and context, guide the user, retrieve information, and connect conversation to permitted actions.</p></div>
          <div class="aipeValueRequirement"><span>Product requirement</span><p>Conversation must connect to product state and systems—not operate as an isolated chatbot.</p></div>
          <div class="aipeValueExamples"><span>Conversation → intent</span><span>Intent → system</span><span>System → completed action</span></div>
        </article>
      </div>

      <aside class="aipeNoAiPanel">
        <div class="aipeNoAiLead">
          <span>THE COUNTERPOINT</span>
          <h3>When AI should not be the answer.</h3>
          <p>Use deterministic software, rules, or conventional automation when the problem is better served by explicit, predictable logic.</p>
        </div>
        <div class="aipeNoAiReasons">
          <div><span>01</span><p>The outcome can be defined reliably with explicit logic.</p></div>
          <div><span>02</span><p>Probabilistic behavior adds unnecessary risk.</p></div>
          <div><span>03</span><p>The data or context is insufficient.</p></div>
          <div><span>04</span><p>AI does not materially improve the user or business outcome.</p></div>
          <div><span>05</span><p>The economics do not justify the added complexity.</p></div>
        </div>
        <div class="aipeNoAiClosing">Good AI product engineering includes knowing where not to use AI.</div>
      </aside>

      <div class="aipeValueClosing">AI earns its place when it makes the product meaningfully better.</div>
    </div>`;

  next.insertAdjacentElement('beforebegin', section);

  const nextInner = next.querySelector('.aipeReviewNextInner');
  if (nextInner) nextInner.innerHTML = '<span>CONTENT REVIEW IN PROGRESS</span><h2>Next: Product proof</h2><p>Next we’ll connect this engineering discipline to the products Aloden has built, showing how the same product-first approach appears across healthcare workforce intelligence, innovation workflows, and system-connected voice AI.</p>';

  if (!document.querySelector('#aipe-section5-style')) {
    const style = document.createElement('style');
    style.id = 'aipe-section5-style';
    style.textContent = `
      .aipeValue{background:linear-gradient(180deg,#fafbfc 0%,#f8f8fb 100%)}
      .aipeValueHead .lead{max-width:930px}
      .aipeValueDecision{margin-top:28px;border:1px solid #dfe2e7;border-radius:17px;background:#fff;overflow:hidden;box-shadow:0 12px 32px rgba(21,28,45,.03)}
      .aipeValueDecisionTop{display:flex;justify-content:space-between;gap:16px;padding:12px 14px;border-bottom:1px solid var(--line);background:#fbfcfd}.aipeValueDecisionTop span,.aipeValueDecisionTop b{font-family:'IBM Plex Mono',monospace;font-size:8.4px;letter-spacing:.08em}.aipeValueDecisionTop span{color:var(--violet)}.aipeValueDecisionTop b{color:#858d99;font-weight:500;text-align:right}
      .aipeValueDecisionBody{padding:16px}.aipeValueProblem,.aipeValueConverge{max-width:430px;margin:0 auto;border:1px solid #dedff0;border-radius:12px;background:linear-gradient(145deg,#fff,#faf8ff);padding:12px 14px;text-align:center}.aipeValueProblem span,.aipeValueConverge span{display:block;font-family:'IBM Plex Mono',monospace;font-size:8px;color:var(--violet);letter-spacing:.08em}.aipeValueProblem b,.aipeValueConverge b{display:block;font-size:15px;margin-top:4px}.aipeValueProblem small,.aipeValueConverge small{display:block;font-size:9.5px;color:#7b8490;margin-top:4px}
      .aipeValueBranches{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:9px;margin:25px 0}.aipeValueBranches:before,.aipeValueBranches:after{content:'';position:absolute;left:50%;transform:translateX(-50%);width:1px;height:25px;background:#cfc8f6}.aipeValueBranches:before{top:-25px}.aipeValueBranches:after{bottom:-25px}.aipeValueBranches article{border:1px solid #e0e4e9;border-radius:12px;background:#fbfcfe;padding:12px;min-height:126px}.aipeValueBranches article.aiBranch{background:linear-gradient(150deg,#fff,#faf8ff);border-color:#dcd5f4}.aipeValueBranches article.agentBranch{background:#111318;border-color:#292d35;color:#fff}.aipeValueBranches small{font-family:'IBM Plex Mono',monospace;font-size:7.6px;line-height:1.4;color:#7b8490;letter-spacing:.05em}.aipeValueBranches b{display:block;font-size:12px;line-height:1.3;margin-top:7px;color:#252b34}.aipeValueBranches p{font-size:9.4px;line-height:1.48;color:#78818e;margin:5px 0 0}.agentBranch small{color:#969eaa!important}.agentBranch b{color:#fff!important}.agentBranch p{color:#aab2be!important}
      .aipeValueGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:28px}.aipeValueCard{border:1px solid #e0e3e8;border-radius:16px;background:#fff;padding:19px;min-width:0}.aipeValueCard.darkValueCard{background:#111318;border-color:#292d35;color:#fff}.aipeValueCard.conversationalValueCard{grid-column:1 / -1;background:linear-gradient(145deg,#fff,#faf8ff)}
      .aipeValueTop{display:flex;align-items:center;justify-content:space-between;gap:12px}.aipeValueTop span{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--violet)}.aipeValueTop small{font-family:'IBM Plex Mono',monospace;font-size:8.2px;letter-spacing:.07em;color:#7c8592;text-align:right}.darkValueCard .aipeValueTop span{color:#a58aff}.darkValueCard .aipeValueTop small{color:#969eaa}
      .aipeValueCard h3{font-size:22px;line-height:1.1;letter-spacing:-.03em;margin:14px 0 12px}.aipeValueUse{display:grid;grid-template-columns:120px 1fr;gap:10px;padding:10px 0;border-top:1px solid #e5e7eb}.aipeValueUse b{font-size:10.5px;color:#2c323b}.aipeValueUse p{font-size:10.8px;line-height:1.52;color:#727c89;margin:0}.darkValueCard .aipeValueUse{border-color:#2f333c}.darkValueCard .aipeValueUse b{color:#dfe3e8}.darkValueCard .aipeValueUse p{color:#aab2be}
      .aipeValueRequirement{margin-top:5px;border-left:2px solid var(--violet);padding:8px 10px;background:#faf8ff;border-radius:0 9px 9px 0}.aipeValueRequirement span{display:block;font-family:'IBM Plex Mono',monospace;font-size:8px;color:#6a55b2;letter-spacing:.05em}.aipeValueRequirement p{font-size:10.5px;line-height:1.48;color:#655f75;margin:4px 0 0}.darkValueCard .aipeValueRequirement{background:#1b1727;border-color:#a58aff}.darkValueCard .aipeValueRequirement span{color:#c0afff}.darkValueCard .aipeValueRequirement p{color:#b8b0ca}
      .aipeValueExamples{display:flex;gap:6px;flex-wrap:wrap;margin-top:12px}.aipeValueExamples span{border:1px solid #e0e4e9;border-radius:999px;background:#fbfcfe;padding:6px 8px;font-size:8.8px;color:#69727f}.darkValueCard .aipeValueExamples span{background:#171a20;border-color:#30343d;color:#b4bbc5}
      .aipeNoAiPanel{display:grid;grid-template-columns:.8fr 1.2fr;gap:26px;margin-top:28px;border:1px solid #292d35;border-radius:17px;background:#111318;color:#fff;padding:22px}.aipeNoAiLead>span{font-family:'IBM Plex Mono',monospace;font-size:8.5px;letter-spacing:.08em;color:#a58aff}.aipeNoAiLead h3{font-size:27px;line-height:1.08;letter-spacing:-.035em;margin:10px 0 7px}.aipeNoAiLead p{font-size:12.5px;line-height:1.58;color:#aeb4bf;margin:0}.aipeNoAiReasons{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.aipeNoAiReasons div{display:grid;grid-template-columns:26px 1fr;gap:7px;border:1px solid #30343d;border-radius:10px;background:#171a20;padding:10px}.aipeNoAiReasons span{font-family:'IBM Plex Mono',monospace;font-size:8.5px;color:#a58aff}.aipeNoAiReasons p{font-size:10px;line-height:1.45;color:#b4bbc5;margin:0}.aipeNoAiClosing{grid-column:1 / -1;border-top:1px solid #30343d;padding-top:14px;font-size:13px;font-weight:700;color:#dfe3e8}
      .aipeValueClosing{margin-top:24px;padding-top:17px;border-top:1px solid #dfe2e7;font-size:16px;font-weight:700;letter-spacing:-.018em;color:#20242d}
      @media(max-width:980px){.aipeValueBranches{grid-template-columns:repeat(2,minmax(0,1fr))}.aipeNoAiPanel{grid-template-columns:1fr}}
      @media(max-width:720px){.aipeValueGrid{grid-template-columns:1fr}.aipeValueCard.conversationalValueCard{grid-column:auto}.aipeValueBranches{grid-template-columns:1fr}.aipeValueBranches:before,.aipeValueBranches:after{display:none}.aipeNoAiReasons{grid-template-columns:1fr}}
      @media(max-width:560px){.aipeValueDecisionTop{align-items:flex-start;flex-direction:column}.aipeValueDecisionTop b{text-align:left}.aipeValueUse{grid-template-columns:1fr;gap:4px}.aipeValueTop{align-items:flex-start;flex-direction:column}.aipeValueTop small{text-align:left}.aipeValueClosing{font-size:15px}}
    `;
    document.head.appendChild(style);
  }
})();
