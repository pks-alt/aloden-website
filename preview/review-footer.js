(() => {
  const footer = document.querySelector('.footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="container contentReviewFooter">
      <div class="contentReviewFooterGrid">
        <div class="contentReviewFooterBrand">
          <span class="alodenLockup"><span class="alodenMark"><i></i><i></i><i></i><i></i></span><span class="alodenWord">aloden</span></span>
          <p>AI product engineering and digital modernization for intelligent products built for real-world use.</p>
        </div>
        <div class="contentReviewFooterCol">
          <h4>Explore</h4>
          <a href="#built">Built by Aloden</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#insights">Insights</a>
          <a href="#company">Company</a>
        </div>
        <div class="contentReviewFooterCol contentReviewFooterCapabilities">
          <h4>Capabilities</h4>
          <a href="#capabilities">AI Product Engineering</a>
          <a href="#capabilities">Voice AI Engineering</a>
          <a href="#capabilities">Intelligent Workflow &amp; Agentic Systems</a>
          <a href="#capabilities">Product Modernization</a>
          <a href="#capabilities">Healthcare AI</a>
        </div>
        <div class="contentReviewFooterCol">
          <h4>Connect</h4>
          <a class="contentReviewFooterPrimary" href="#cta">Start a Project →</a>
          <a href="mailto:hello@aloden.com">hello@aloden.com</a>
          <a href="#" aria-label="Aloden on LinkedIn">LinkedIn →</a>
        </div>
      </div>
      <div class="contentReviewFooterBottom">
        <div class="contentReviewFooterLegal">
          <span>© 2026 Aloden LLC. All rights reserved.</span>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
        <span class="contentReviewFooterTagline">Built around your vision.</span>
      </div>
    </div>`;

  let style = document.querySelector('#content-review-footer-style');
  if (!style) {
    style = document.createElement('style');
    style.id = 'content-review-footer-style';
    document.head.appendChild(style);
  }
  style.textContent = `
    .contentReviewFooterGrid{display:grid;grid-template-columns:1.25fr .7fr 1.15fr .8fr;gap:42px;padding-bottom:28px}
    .contentReviewFooterBrand p{max-width:360px;margin:14px 0 0;color:#727b8b;font-size:12.5px;line-height:1.6}
    .contentReviewFooterCol{display:flex;flex-direction:column;align-items:flex-start;gap:7px}
    .contentReviewFooterCol h4{margin:0 0 7px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#20242d;font-family:'IBM Plex Mono',monospace;font-weight:500}
    .contentReviewFooterCol a{font-size:12.5px;line-height:1.45;color:#5f6877}
    .contentReviewFooterCol a:hover{color:#0b0d12}
    .contentReviewFooterPrimary{color:#7c4dff!important;font-weight:600}
    .contentReviewFooterBottom{border-top:1px solid #e6e8ed;padding:18px 0 2px;display:flex;align-items:center;justify-content:space-between;gap:24px}
    .contentReviewFooterLegal{display:flex;align-items:center;gap:18px;flex-wrap:wrap;color:#8a92a0;font-size:11px}
    .contentReviewFooterLegal a{color:#6f7785}
    .contentReviewFooterTagline{font-size:11.5px;font-weight:600;color:#20242d;white-space:nowrap}
    @media(max-width:980px){.contentReviewFooterGrid{grid-template-columns:1.3fr 1fr;gap:30px 40px}.contentReviewFooterCapabilities{grid-column:auto}}
    @media(max-width:640px){.contentReviewFooterGrid{grid-template-columns:1fr;gap:26px}.contentReviewFooterBottom{align-items:flex-start;flex-direction:column;gap:12px}.contentReviewFooterTagline{white-space:normal}}
  `;
})();