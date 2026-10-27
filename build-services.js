// ব্যবহার: node build-services.js  → js/data.js থেকে services/*.html আবার তৈরি করে
const fs=require("fs");global.window={};eval(fs.readFileSync("js/data.js","utf8"));const SERVICES=window.SERVICES;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
for(const s of SERVICES){
const html=`<!doctype html>
<html lang="bn">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(s.name)} | E-Solution</title>
<meta name="description" content="${esc(s.short)}">
<link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/style.css">
</head>
<body data-root="../">
<div id="site-header"></div>
<main class="page">
<p class="crumbs"><a href="../index.html">হোম</a> › <a href="../index.html#services">সেবাসমূহ</a> › ${esc(s.name)}</p>
<div class="icon" aria-hidden="true">${s.icon}</div>
<h1 style="color:${s.accent}">${esc(s.name)}</h1>
<p>${esc(s.short)}</p>
${s.emergency?`<p class="warnbox"><strong>🚨 ${esc(s.emergency)}</strong></p>\n`:""}<h2>শুরু করার আগে</h2>
<ul><li>সেবার যোগ্যতা ও প্রয়োজনীয় কাগজপত্র যাচাই করুন।</li><li>সরকারি ফি এবং E-Solution-এর সহায়তা-ফি আলাদা করে বুঝে নিন।</li><li>সংবেদনশীল নথি কেবল যাচাইকৃত ও নিরাপদ মাধ্যমে দিন।</li></ul>
<h2>সাধারণত যা লাগে</h2>
<ul>${s.docs.map(d=>`<li>${esc(d)}</li>`).join("")}</ul>
<h2>আবেদনের ধাপ</h2>
<ol class="how"><li>নিচের “আবেদন করুন” বোতামে ক্লিক করুন।</li><li>নাম ও মোবাইল নম্বর দিয়ে সহায়তার অনুরোধ জানান।</li><li>ট্র্যাকিং আইডি সংরক্ষণ করুন।</li></ol>
${s.links.length?`<h2>সরকারি ওয়েবসাইট</h2>\n<ul>${s.links.map(([l,u])=>`<li><a href="${esc(u)}" target="_blank" rel="noopener noreferrer" style="color:#0a6fb5">${esc(l)} ↗</a></li>`).join("")}</ul>\n`:""}<p class="warnbox">E-Solution সরকারি কর্তৃপক্ষ নয়। এখানকার তথ্য সহায়ক নির্দেশনা; আবেদন অনুমোদন বা সরকারি নথি ইস্যুর নিশ্চয়তা নয়।</p>
<div class="actions"><a class="btn" style="background:${s.accent}" href="../apply.html?service=${s.id}">আবেদন করুন</a><a class="btn outline" href="../index.html#services">← সব সেবা</a></div>
</main>
<div id="site-footer"></div>
<script src="../js/data.js"></script>
<script src="../js/layout.js"></script>
</body>
</html>
`;
fs.writeFileSync(`services/${s.id}.html`,html);}
console.log("built",SERVICES.length);
