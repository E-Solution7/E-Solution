/* হোমপেজ: কার্ড, ধাপ, আপডেট, হেল্প, ট্র্যাকিং */
(function(){
  const $=id=>document.getElementById(id);
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

  $("serviceGrid").innerHTML=SERVICES.map(s=>`
    <article class="service-card" style="--accent:${s.accent};--tint:${s.tint}">
      <div class="service-icon" aria-hidden="true">${s.icon}</div><h3>${esc(s.name)}</h3><p>${esc(s.short)}</p>
      <div class="card-actions"><a class="btn" href="services/${s.id}.html">সেবা দেখুন →</a><a class="btn alt" href="apply.html?service=${s.id}">আবেদন করুন</a></div></article>`).join("");

  $("steps").innerHTML=STEPS.map(([i,t,d])=>`<li class="step"><div class="step-icon" aria-hidden="true">${i}</div><b>${t}</b><span>${d}</span></li>`).join("");
  $("updates").innerHTML=UPDATES.map(([t,d])=>`<li><span>${esc(t)}</span><time>${d}</time></li>`).join("");

  $("hotline").textContent=SITE.hotline;
  $("hotlineHours").textContent=SITE.hotlineHours;
  $("whatsappBtn").href=SITE.whatsapp?`https://wa.me/${SITE.whatsapp}`:"contact.html";

  // ট্র্যাকিং — ডেমো: apply.html থেকে এই ব্রাউজারে সেভ হওয়া আবেদন খোঁজে
  const NAMES=["আবেদন গৃহীত","তথ্য যাচাই","প্রক্রিয়াকরণ","সম্পন্ন"];
  const DEMO={"ES-2026-1001":{service:"land",status:1,date:"১০/০১/২০২৬"}};
  const msg=$("trackMsg"),out=$("trackOut");
  $("trackForm").addEventListener("submit",e=>{
    e.preventDefault();out.innerHTML="";
    const id=$("trackId").value.trim().toUpperCase();
    const show=(c,t)=>{msg.hidden=false;msg.className="toast "+c;msg.textContent=t};
    if(!/^ES-\d{4}-\d{4}$/.test(id))return show("err","আইডির ফরম্যাট ঠিক নয়। উদাহরণ: ES-2026-1001");
    let saved={};try{saved=JSON.parse(localStorage.getItem("es_requests")||"{}")}catch(_){}
    const r=saved[id]||DEMO[id];
    if(!r)return show("err","এই আইডি পাওয়া যায়নি। আইডিটি আবার দেখে নিন।");
    const s=SERVICES.find(x=>x.id===r.service);
    show("ok",`${id} — ${s?s.name:""} (ডেমো ফলাফল, জমার তারিখ: ${r.date})`);
    out.innerHTML=`<ol class="timeline">${NAMES.map((n,i)=>`<li class="${i<r.status?"done":i===r.status?"now":""}">${n}</li>`).join("")}</ol>`;
  });
})();
