(function(){
  const c=document.getElementById("content");
  const add=(tag,text,cls)=>{const e=document.createElement(tag);e.textContent=text;if(cls)e.className=cls;c.appendChild(e);return e};
  add("h1","যোগাযোগ");
  add("p","সেবা বেছে নিতে বা ফরম বুঝতে সহায়তা লাগলে নিচের মাধ্যমে যোগাযোগ করুন।");
  add("p",`📞 হটলাইন: ${SITE.hotline} (${SITE.hotlineHours})`);
  if(SITE.email){const p=add("p","✉️ ইমেইল: ");const a=document.createElement("a");a.href="mailto:"+SITE.email;a.textContent=SITE.email;p.appendChild(a)}
  const act=document.createElement("div");act.className="actions";
  if(SITE.whatsapp){const w=document.createElement("a");w.className="btn";w.href="https://wa.me/"+SITE.whatsapp;w.target="_blank";w.rel="noopener noreferrer";w.textContent="💬 WhatsApp-এ কথা বলুন";act.appendChild(w)}
  else add("p","এখনো যোগাযোগের তথ্য বসানো হয়নি। js/data.js ফাইলে hotline, whatsapp ও email আপডেট করুন।","warnbox");
  const b=document.createElement("a");b.className="btn outline";b.href="index.html";b.textContent="← হোমপেজে ফিরুন";act.appendChild(b);c.appendChild(act);
})();
