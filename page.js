(function(){
  const P={
   contact:["যোগাযোগ","নিজের যাচাইকৃত ফোন, ইমেইল ও WhatsApp তথ্য js/data.js ফাইলে বসান।"],
   privacy:["গোপনীয়তা নীতি","কোন তথ্য সংগ্রহ হবে, কেন, কতদিন রাখা হবে এবং কীভাবে মুছবেন — বাস্তব সেবা চালুর আগে এখানে স্পষ্ট করে লিখুন।"],
   terms:["ব্যবহারের শর্তাবলী","E-Solution একটি বেসরকারি তথ্য ও আবেদন-সহায়তা পোর্টাল। সরকারি সিদ্ধান্ত, অনুমোদন বা নথি ইস্যুর নিশ্চয়তা দেওয়া হয় না।"],
   faq:["সাধারণ প্রশ্নোত্তর","FAQ"],
   login:["লগইন","লগইন চালু করতে নিরাপদ ব্যাকএন্ড (সার্ভার ও ডেটাবেস) প্রয়োজন। এই ফ্রন্টএন্ড ডেমোতে এটি এখনো যুক্ত নেই।"],
   register:["নিবন্ধন","নিবন্ধন চালু করতে নিরাপদ ব্যাকএন্ড প্রয়োজন। এই ফ্রন্টএন্ড ডেমোতে এটি এখনো যুক্ত নেই।"],
   admin:["অ্যাডমিন","অ্যাডমিন প্যানেলের জন্য অথেনটিকেশন ও ডেটাবেস দরকার। ব্যাকএন্ড ছাড়া এটি নিরাপদভাবে চালু করা যায় না।"]
  };
  const k=new URLSearchParams(location.search).get("p"),d=P[k]||["পাতা পাওয়া যায়নি","লিংকটি ঠিক নয়।"];
  document.title=d[0]+" | E-Solution";
  const c=document.getElementById("content");
  const h=document.createElement("h1");h.textContent=d[0];
  const p=document.createElement("p");p.textContent=d[1];
  const a=document.createElement("div");a.className="actions";a.innerHTML='<a class="btn outline" href="index.html">← হোমপেজে ফিরুন</a>';
  c.append(h,p);
  if(k==="contact"){const l=document.createElement("p");l.textContent=`হটলাইন: ${SITE.hotline} (${SITE.hotlineHours})`+(SITE.email?` | ইমেইল: ${SITE.email}`:"");c.append(l)}
  if(k==="faq"){
    p.textContent="";
    [["E-Solution কি সরকারি ওয়েবসাইট?","না। এটি বেসরকারি তথ্য ও আবেদন-সহায়তা পোর্টাল।"],
     ["আবেদন করলে অনুমোদনের নিশ্চয়তা আছে?","না। অনুমোদন সংশ্লিষ্ট সরকারি কর্তৃপক্ষের সিদ্ধান্ত।"],
     ["ট্র্যাকিং আইডি কোথায় পাব?","আবেদন জমা দেওয়ার পর পর্দায় আইডি দেখানো হয়।"]].forEach(([q,an])=>{
      const d=document.createElement("details"),sm=document.createElement("summary"),pp=document.createElement("p");
      sm.textContent=q;pp.textContent=an;d.append(sm,pp);c.append(d)});
  }
  c.append(a);
})();
