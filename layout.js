/* শেয়ার্ড হেডার/ফুটার/মোবাইল মেনু/উপরে-যান বোতাম */
(function(){
  const logo=`<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 44V22" stroke="#138743" stroke-width="3" stroke-linecap="round"/><path d="M24 26C12 26 6 18 8 8c11-1 17 6 16 18Z" fill="#138743"/><path d="M24 22c0-10 6-15 16-14 1 10-5 16-16 14Z" fill="#0a8bb5"/><circle cx="24" cy="10" r="4" fill="#f08a24"/></svg>`;
  const R=document.body.dataset.root||"";
  const cur=location.pathname.split("/").pop()||"index.html";
  const nav=[[R+"index.html","⌂","হোম"],[R+"apply.html","☰","আবেদন"],[R+"index.html#tracking","◷","ট্র্যাকিং"],[R+"contact.html","☎","যোগাযোগ"]]
    .map(([h,i,t])=>`<a href="${h}"${h.split("#")[0].split("/").pop()===cur&&!h.includes("#")?' class="active" aria-current="page"':""}><span aria-hidden="true">${i}</span>${t}</a>`).join("");
  const auth=`<a class="btn outline" href="${R}page.html?p=login">লগইন</a><a class="btn" href="${R}page.html?p=register">নিবন্ধন</a>`;
  const brand=`<a class="brand" href="${R}index.html">${logo}<span>${SITE.name}<small>${SITE.tagline}</small></span></a>`;
  const h=document.getElementById("site-header");
  if(h)h.outerHTML=`<header class="site"><div class="wrap nav">${brand}
    <nav class="main" id="mainNav" aria-label="প্রধান নেভিগেশন">${nav}<div class="auth-m">${auth}</div></nav>
    <div class="auth">${auth}</div>
    <button class="menu-toggle" aria-label="মেনু" aria-expanded="false" aria-controls="mainNav">☰</button></div></header>`;
  const f=document.getElementById("site-footer");
  if(f)f.outerHTML=`<footer class="site"><div class="wrap"><div class="footer-row">${brand}
    <div class="footer-links"><a href="${R}index.html">হোম</a><a href="${R}apply.html">আবেদন</a><a href="${R}index.html#tracking">ট্র্যাকিং</a><a href="${R}page.html?p=admin">অ্যাডমিন</a><a href="${R}page.html?p=privacy">গোপনীয়তা নীতি</a><a href="${R}page.html?p=terms">ব্যবহারের শর্তাবলী</a><a href="${R}contact.html">যোগাযোগ</a></div>
    <div class="social"><a href="${R}contact.html" aria-label="Facebook">f</a><a href="${R}contact.html" aria-label="YouTube">▶</a><a href="${R}contact.html" aria-label="WhatsApp">✆</a></div></div>
    <div class="copyright"><span>© ${new Date().getFullYear()} E-Solution। সর্বস্বত্ব সংরক্ষিত।</span><span>ডিজিটাল সেবা, উন্নত বাংলাদেশ</span></div>
    <div class="copyright" style="border:0;margin:0;padding-top:4px"><span>${SITE.disclaimer}</span></div></div></footer>`;
  const b=document.querySelector(".menu-toggle"),m=document.getElementById("mainNav");
  if(b&&m){
    const set=o=>{m.classList.toggle("open",o);b.setAttribute("aria-expanded",o);b.textContent=o?"✕":"☰"};
    b.onclick=()=>set(!m.classList.contains("open"));
    m.addEventListener("click",e=>{if(e.target.closest("a"))set(false)});
    document.addEventListener("keydown",e=>{if(e.key==="Escape")set(false)});
  }
  const up=document.createElement("button");up.className="totop";up.hidden=true;up.textContent="↑";up.setAttribute("aria-label","উপরে যান");
  up.onclick=()=>scrollTo({top:0,behavior:"smooth"});document.body.appendChild(up);
  addEventListener("scroll",()=>{up.hidden=scrollY<600},{passive:true});
})();
