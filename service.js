(function(){
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const s=SERVICES.find(x=>x.id===new URLSearchParams(location.search).get("id"));
  const box=document.getElementById("content");
  if(!s){document.title="সেবা পাওয়া যায়নি | E-Solution";box.innerHTML='<h1>সেবাটি পাওয়া যায়নি</h1><p>লিংকটি ভুল হতে পারে।</p><div class="actions"><a class="btn" href="index.html#services">সব সেবা দেখুন</a></div>';return}
  document.title=`${s.name} | E-Solution`;
  box.innerHTML=`<div class="icon" aria-hidden="true">${s.icon}</div><h1 style="color:${s.accent}">${esc(s.name)}</h1><p>${esc(s.short)}</p>
  ${s.emergency?`<p class="warnbox"><strong>🚨 ${esc(s.emergency)}</strong></p>`:""}
  <h2>শুরু করার আগে</h2><ul><li>সেবার যোগ্যতা ও প্রয়োজনীয় কাগজপত্র যাচাই করুন।</li><li>সরকারি ফি এবং E-Solution-এর সহায়তা-ফি আলাদা করে বুঝে নিন।</li><li>সংবেদনশীল নথি কেবল যাচাইকৃত ও নিরাপদ মাধ্যমে দিন।</li></ul>
  <h2>সাধারণত যা লাগে</h2><ul>${s.docs.map(d=>`<li>${esc(d)}</li>`).join("")}</ul>
  ${s.links.length?`<h2>সরকারি ওয়েবসাইট</h2><ul>${s.links.map(([l,u])=>`<li><a href="${esc(u)}" target="_blank" rel="noopener noreferrer" style="color:#0a6fb5">${esc(l)} ↗</a></li>`).join("")}</ul>`:""}
  <p class="warnbox">${esc(SITE.disclaimer)} এখানকার তথ্য সহায়ক নির্দেশনা; আবেদন অনুমোদনের নিশ্চয়তা নয়।</p>
  <div class="actions"><a class="btn" style="background:${s.accent}" href="apply.html?service=${s.id}">এই সেবার আবেদন করুন</a><a class="btn outline" href="index.html#services">← সব সেবা</a></div>`;
})();
