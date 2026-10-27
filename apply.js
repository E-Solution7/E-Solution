(function(){
  const $=id=>document.getElementById(id);
  const sel=$("service");
  sel.innerHTML=SERVICES.map(s=>`<option value="${s.id}">${s.name}</option>`).join("");
  const p=new URLSearchParams(location.search).get("service");
  if(SERVICES.some(s=>s.id===p))sel.value=p;
  const en=s=>s.replace(/[০-৯]/g,d=>"০১২৩৪৫৬৭৮৯".indexOf(d));
  const err=(id,t)=>{$(id+"Err").textContent=t;$(id).setAttribute("aria-invalid",t?"true":"false")};
  $("applyForm").addEventListener("submit",e=>{
    e.preventDefault();
    const name=$("name").value.trim(),phone=en($("phone").value).replace(/[\s-]/g,""),note=en($("note").value).replace(/[\s-]/g,"");
    err("name",name.length<2?"পূর্ণ নাম লিখুন।":"");
    err("phone",/^(?:\+?88)?01[3-9]\d{8}$/.test(phone)?"":"সঠিক মোবাইল নম্বর দিন (01XXXXXXXXX)।");
    err("note",/\d{10,}/.test(note)?"দীর্ঘ পরিচয়/পাসপোর্ট নম্বর লিখবেন না।":"");
    const bad=document.querySelector('[aria-invalid="true"]');if(bad){bad.focus();return}
    const id=`ES-${new Date().getFullYear()}-${Math.floor(1000+Math.random()*9000)}`;
    let saved={};try{saved=JSON.parse(localStorage.getItem("es_requests")||"{}")}catch(_){}
    saved[id]={service:sel.value,status:0,date:new Date().toLocaleDateString("bn-BD")}; // নাম/ফোন সংরক্ষণ হয় না
    try{localStorage.setItem("es_requests",JSON.stringify(saved))}catch(_){}
    const m=$("msg");m.hidden=false;m.className="toast ok";
    m.innerHTML='ডেমো আবেদন তৈরি হয়েছে। ট্র্যাকিং আইডি: <strong></strong> (শুধু এই ব্রাউজারে আছে; নাম/ফোন কোথাও জমা হয়নি)। <a href="index.html#tracking" style="text-decoration:underline">ট্র্যাকিং দেখুন</a>';
    m.querySelector("strong").textContent=id;$("applyForm").reset();
  });
})();
