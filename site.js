/* =====================================================================
   SHRI PARSHWA POLYMERS - shared script (used by every page)
   Yahin se saare pages ke products, photos aur form kaam karte hain.
   ===================================================================== */

/* ---------- 1. WEB3FORMS SETUP (enquiry seedha email par aayegi) ----------
   1. https://web3forms.com par jayein, apni email (parshwa87@gmail.com) daalein.
   2. Email par aayi hui "Access Key" copy karein.
   3. Neeche "YOUR_ACCESS_KEY_HERE" ki jagah wo key paste karein (quotes ke andar).
   Ye ek hi jagah badalni hai, saare pages ke forms par lagu hogi. */
const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";

const PHONE_LINK = "tel:+918510813358";
const PHONE_TEXT = "+91 85108 13358";
const WA_URL = "https://wa.me/918510813358";

/* ---------- 1b. HOME PAGE HERO (upar wali animated machine) ----------
   Abhi home page par animated machine ka drawing dikhta hai.
   Apni photo ya video lagane ke liye path likhein, jaise:
     const HERO_MEDIA = "images/hero.jpg";    (photo)
     const HERO_MEDIA = "images/hero.mp4";    (video, apne aap chalta hai, bina awaaz)
   Khali ("") rakhne par purani animation dikhegi. */
const HERO_MEDIA = "images/hero.jpg";

/* ---------- 2. PRODUCT DATA (specs aur photos yahin badlein) ----------
   PHOTO LAGANE KE LIYE: har product mein image:"" ke andar photo ka path likhein.
   Photos ko "images" naam ke folder mein rakhein. Example:
     image:"images/cup-glass-sealer.jpg"
   Agar image:"" khali hai to tray ka drawing dikhega.
   EXTRA PHOTOS: gallery:[] mein aur photos daalein, jaise
     gallery:["images/cup-2.jpg","images/cup-3.jpg"]
   Tab photo ke neeche thumbnails aayenge, aur photo par click karne se badi dikhegi.
   Photo yahan ek baar lagane se home, products aur machine ke page, teeno par dikhegi. */
const PRODUCTS = [
  {
    id:"cup", slug:"cup-and-glass-sealer", name:"Cup and Glass Sealer", type:"cup", image:"images/cup-glass-sealer.jpg", gallery:[], tag:"Cups and glasses",
    desc:"Seals plastic cups and glasses with film. Good for tea, lassi, juice, shakes, curd and desserts.",
    seals:"Cups and glasses", best:"Tea stalls, juice bars, dessert shops",
    specs:{ "Container size":"95 mm diameter", "Output":"300 to 400 cups per hour", "Power":"350 W, single phase", "Body":"Stainless steel" },
    output:"300 to 400"
  },
  {
    id:"round", slug:"round-container-sealer", name:"Round Container Sealer", type:"round", image:"images/round-container-sealer.jpg", gallery:[], tag:"Round containers",
    desc:"Seals round bowls and containers for soups, biryani, curries, ice cream and sweets.",
    seals:"Round bowls and tubs", best:"Soup, biryani, sweets, ice cream",
    specs:{ "Container size":"123 mm diameter", "Output":"200 to 300 pieces per hour", "Power":"600 W, single phase", "Body":"Stainless steel" },
    output:"200 to 300"
  },
  {
    id:"rect", slug:"rectangular-tray-sealer", name:"Rectangular Tray Sealer", type:"rect", image:"images/rectangular-tray-sealer.jpg", gallery:[], tag:"1 compartment",
    desc:"Seals single-compartment rectangular trays for rice, noodles, salads, cut fruit and bakery items.",
    seals:"Single-compartment trays", best:"Salads, noodles, fruit, bakery",
    specs:{ "Tray size":"220 x 150 mm", "Output":"200 to 300 trays per hour", "Power":"750 W, single phase", "Body":"Stainless steel" },
    output:"200 to 300"
  },
  {
    id:"p2", slug:"2-portion-tray-sealer", name:"2 Portion Tray Sealer", type:"p2", image:"images/2-portion-tray-sealer.jpg", gallery:[], tag:"2 compartments",
    desc:"Seals two-compartment trays so dal and rice, or curry and bread, stay apart until it is time to eat.",
    seals:"2-compartment trays", best:"Tiffin and lunch box orders",
    specs:{ "Tray size":"240 x 170 mm", "Output":"200 to 280 trays per hour", "Power":"850 W, single phase", "Body":"Stainless steel" },
    output:"200 to 280"
  },
  {
    id:"p5", slug:"5-portion-meal-tray-sealer", name:"5 Portion Meal Tray Sealer", type:"p5", image:"images/5-portion-meal-tray-sealer.jpg", gallery:[], tag:"5 compartments",
    desc:"Seals 5-compartment thali trays. Made for meal boxes with rice, dal, vegetables, roti and sweet.",
    seals:"5-compartment meal trays", best:"Cloud kitchens, canteens, caterers",
    specs:{ "Tray size":"270 x 200 mm", "Output":"150 to 250 trays per hour", "Power":"1000 W, single phase", "Body":"Stainless steel" },
    output:"150 to 250"
  },
  {
    id:"p8", slug:"8-portion-meal-tray-sealer", name:"8 Portion Meal Tray Sealer", type:"p8", image:"images/8-portion-meal-tray-sealer.jpg", gallery:[], tag:"8 compartments",
    desc:"Seals large 8-compartment trays for full thali meals, hospital diet meals and airline-style catering.",
    seals:"8-compartment meal trays", best:"Hospitals, factories, large catering",
    specs:{ "Tray size":"330 x 230 mm", "Output":"120 to 200 trays per hour", "Power":"1200 W, single phase", "Body":"Stainless steel" },
    output:"120 to 200"
  }
];

/* ---------- 3. Tray drawings (top view) ---------- */
function bay(x,y,w,h,r){
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r||10}" fill="var(--bg)" stroke="var(--line)" stroke-width="2"/>`;
}
function trayShape(type){
  const ink="var(--ink)";
  const shell=(x,y,w,h,r)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="var(--surface)" stroke="${ink}" stroke-width="3"/>`;
  switch(type){
    case "cup":
      return `<circle cx="100" cy="110" r="66" fill="var(--surface)" stroke="${ink}" stroke-width="3"/>
              <circle cx="100" cy="110" r="52" fill="var(--bg)" stroke="var(--line)" stroke-width="2"/>
              <circle cx="220" cy="110" r="52" fill="var(--surface)" stroke="${ink}" stroke-width="3"/>
              <circle cx="220" cy="110" r="40" fill="var(--bg)" stroke="var(--line)" stroke-width="2"/>`;
    case "round":
      return `<circle cx="160" cy="110" r="84" fill="var(--surface)" stroke="${ink}" stroke-width="3"/>
              <circle cx="160" cy="110" r="68" fill="var(--bg)" stroke="var(--line)" stroke-width="2"/>`;
    case "rect":
      return shell(40,40,240,140,16)+bay(54,54,212,112,10);
    case "p2":
      return shell(40,40,240,140,16)+bay(54,54,100,112,10)+bay(166,54,100,112,10);
    case "p5":
      return shell(30,30,260,160,16)
        +bay(42,42,78,66,8)+bay(121,42,78,66,8)+bay(200,42,78,66,8)
        +bay(42,114,118,64,8)+bay(162,114,116,64,8);
    case "p8":
      return shell(30,30,260,160,16)
        +[0,1,2,3].map(i=>bay(42+i*62,42,58,66,8)).join("")
        +[0,1,2,3].map(i=>bay(42+i*62,114,58,64,8)).join("");
  }
  return "";
}
function trayArt(p){
  return `<svg viewBox="0 0 320 220" role="img" aria-label="${p.name} top view">${trayShape(p.type)}</svg>`;
}

/* ---------- 4. Small builders ---------- */
const enc = encodeURIComponent;
const priceLink = p => `contact.html?product=${enc(p.name)}`;
function artHTML(p, zoom){
  const photo = p.image
    ? `<img src="${p.image}" alt="${p.name} - disposable food tray sealing machine" loading="lazy"${zoom?" data-zoom":""}>`
    : trayArt(p);
  return `<div class="art${p.image?" has-photo":""}"><span class="tag">${p.tag}</span>${photo}</div>`;
}
function mediaHTML(p){
  const thumbs = (p.image && p.gallery && p.gallery.length)
    ? `<div class="thumbs">${[p.image,...p.gallery].map((src,i)=>`<button type="button" class="thumb${i?"":" on"}" data-src="${src}" aria-label="Show photo ${i+1}"><img src="${src}" alt=""></button>`).join("")}</div>`
    : "";
  return `<div class="media">${artHTML(p,true)}${thumbs}</div>`;
}
function specsHTML(p){
  return `<dl class="specs">${Object.entries(p.specs).map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>`;
}
function usesHTML(p){
  return `<div class="uses"><span>Best for</span>${p.best.split(", ").map(u=>`<em>${u}</em>`).join("")}</div>`;
}
function cardHTML(p){
  const mini = Object.entries(p.specs).slice(0,2).map(([k,v])=>`<li><span>${k}</span><b>${v}</b></li>`).join("");
  return `<article class="pcard">
    <a class="pcard-media" href="${p.slug}.html" tabindex="-1" aria-hidden="true">${artHTML(p,false)}</a>
    <div class="pcard-body">
      <h3><a href="${p.slug}.html">${p.name}</a></h3>
      <p>${p.desc}</p>
      <ul class="mini">${mini}</ul>
      <div class="actions">
        <a class="btn" href="${p.slug}.html">View details</a>
        <a class="btn ghost" href="${priceLink(p)}">Get price</a>
      </div>
    </div>
  </article>`;
}

/* ---------- 5. Render into the page (only where the container exists) ---------- */
const $ = id => document.getElementById(id);

if($("chips")){
  $("chips").innerHTML = PRODUCTS.map(p=>
    `<a class="chip" href="${p.slug}.html"><svg viewBox="0 0 320 220" aria-hidden="true">${trayShape(p.type)}</svg>${p.name}</a>`).join("");
}
if($("productList")){
  $("productList").innerHTML = PRODUCTS.map(p=>`
    <article class="product" id="${p.id}">
      ${mediaHTML(p)}
      <div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        ${usesHTML(p)}
        ${specsHTML(p)}
        <div class="actions">
          <a class="btn" href="${p.slug}.html">View details</a>
          <a class="btn ghost" href="${priceLink(p)}">Get price</a>
        </div>
      </div>
    </article>`).join("");
}
if($("productCards")){
  $("productCards").innerHTML = PRODUCTS.map(cardHTML).join("");
}
if($("compareBody")){
  $("compareBody").innerHTML = PRODUCTS.map(p=>
    `<tr><td><a href="${p.slug}.html"><strong>${p.name}</strong></a></td><td>${p.seals}</td><td>${p.best}</td><td>${p.output}</td></tr>`).join("");
}
const currentId = document.body.dataset.product;
if(currentId){
  const p = PRODUCTS.find(x=>x.id===currentId);
  if(p){
    $("detailMedia").innerHTML = mediaHTML(p).replace('<div class="media">','<div class="media" style="margin:0">');
    $("detailInfo").innerHTML = `${usesHTML(p)}${specsHTML(p)}
      <div class="actions">
        <a class="btn" href="${priceLink(p)}">Get price</a>
        <a class="btn wa" href="${WA_URL}?text=${enc("Hello, I want details of "+p.name)}" target="_blank" rel="noopener">WhatsApp us</a>
      </div>`;
  }
  if($("relatedCards")){
    const i = PRODUCTS.findIndex(x=>x.id===currentId);
    const others = [1,2,3].map(n=>PRODUCTS[(i+n)%PRODUCTS.length]);
    $("relatedCards").innerHTML = others.map(cardHTML).join("");
  }
}

/* ---------- 5b. Home hero: replace animation with your own photo or video ---------- */
const heroSvg = document.querySelector(".hero svg.machine");
if(HERO_MEDIA && heroSvg){
  const isVideo = /\.(mp4|webm)$/i.test(HERO_MEDIA);
  const el = document.createElement(isVideo ? "video" : "img");
  el.className = "hero-media";
  el.src = HERO_MEDIA;
  if(isVideo){ el.autoplay = true; el.muted = true; el.loop = true; el.playsInline = true; el.setAttribute("aria-label","Tray sealing machine video"); }
  else { el.alt = "Disposable food tray sealing machine by Shri Parshwa Polymers"; }
  heroSvg.replaceWith(el);
}

/* ---------- 6. Photo gallery (thumbnails + large view) ---------- */
const lightbox = $("lightbox"), lbImg = $("lbImg");
function closeLightbox(){ if(!lightbox) return; lightbox.hidden = true; lbImg.src = ""; }
document.addEventListener("click", e=>{
  const t = e.target.closest(".thumb");
  if(t){
    const media = t.closest(".media");
    media.querySelector(".art img").src = t.dataset.src;
    media.querySelectorAll(".thumb").forEach(x=>x.classList.toggle("on", x===t));
    return;
  }
  const z = e.target.closest("img[data-zoom]");
  if(z && lightbox){ lbImg.src = z.src; lbImg.alt = z.alt; lightbox.hidden = false; }
});
if(lightbox) lightbox.addEventListener("click", closeLightbox);

/* ---------- 7. Header: shadow on scroll + mobile menu ---------- */
const siteHeader = $("siteHeader"), menuBtn = $("menuBtn");
const onScroll = () => siteHeader.classList.toggle("scrolled", window.scrollY > 8);
onScroll(); window.addEventListener("scroll", onScroll, {passive:true});
function setMenu(open){
  siteHeader.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
}
menuBtn.addEventListener("click", ()=>setMenu(!siteHeader.classList.contains("open")));
document.querySelectorAll("#siteNav a").forEach(a=>a.addEventListener("click", ()=>setMenu(false)));
document.addEventListener("keydown", e=>{
  if(e.key !== "Escape") return;
  setMenu(false);
  if(lightbox && !lightbox.hidden) closeLightbox();
});

/* ---------- 8. Phone links: phones open the dialer; laptops copy the number ---------- */
const toast = $("toast");
function showToast(msg){
  toast.textContent = msg; toast.hidden = false;
  clearTimeout(showToast.t); showToast.t = setTimeout(()=>{ toast.hidden = true; }, 3500);
}
const isDesktop = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
document.querySelectorAll('a[href^="tel:"]').forEach(a=>{
  a.addEventListener("click", ()=>{
    if(!isDesktop) return;
    let left = false; const mark = ()=>{ left = true; };
    window.addEventListener("blur", mark, {once:true});
    document.addEventListener("visibilitychange", mark, {once:true});
    setTimeout(()=>{
      if(left) return;
      if(navigator.clipboard) navigator.clipboard.writeText("+918510813358").catch(()=>{});
      showToast("Dialer did not open. Number "+PHONE_TEXT+" copied.");
    }, 1200);
  });
});

/* ---------- 9. Enquiry form (Web3Forms) ---------- */
const form = $("quoteForm");
if(form){
  const select = $("productSelect");
  select.innerHTML = PRODUCTS.map(p=>`<option>${p.name}</option>`).join("") + `<option>Not sure, need advice</option>`;
  const wanted = new URLSearchParams(location.search).get("product");
  if(wanted){ [...select.options].forEach(o=>{ if(o.text===wanted) select.value = wanted; }); }

  const sendBtn = $("sendBtn"), thanks = $("thanks"), errBox = $("err");
  const failHTML = `Your enquiry could not be sent. Please call <a href="${PHONE_LINK}" target="_top"><b>${PHONE_TEXT}</b></a> or message us on <a href="${WA_URL}" target="_blank" rel="noopener"><b>WhatsApp</b></a>.`;

  form.addEventListener("submit", async e=>{
    e.preventDefault();
    errBox.classList.remove("show");

    if(WEB3FORMS_KEY === "YOUR_ACCESS_KEY_HERE"){
      errBox.textContent = "Form setup is not finished. Please add the Web3Forms access key in site.js.";
      errBox.classList.add("show");
      return;
    }
    const f = new FormData(form);
    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: "New enquiry: " + f.get("product"),
      from_name: "Shri Parshwa Polymers Website",
      name: f.get("name"),
      phone: f.get("phone"),
      machine: f.get("product"),
      message: f.get("message") || "-",
      page: location.href,
      botcheck: f.get("botcheck") ? "yes" : ""
    };
    sendBtn.disabled = true;
    const oldText = sendBtn.textContent; sendBtn.textContent = "Sending...";
    try{
      const res = await fetch("https://api.web3forms.com/submit", {
        method:"POST",
        headers:{ "Content-Type":"application/json", "Accept":"application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if(res.ok && data.success){
        $("thanksName").textContent = (f.get("name")||"").toString().trim().split(" ")[0] || "friend";
        $("thanksPhone").textContent = f.get("phone");
        form.reset(); form.hidden = true; thanks.hidden = false;
        thanks.scrollIntoView({behavior:"smooth", block:"center"});
      }else{
        throw new Error(data.message || "Request failed");
      }
    }catch(err){
      console.error("Web3Forms error:", err);
      errBox.innerHTML = failHTML; errBox.classList.add("show");
    }finally{
      sendBtn.disabled = false; sendBtn.textContent = oldText;
    }
  });
  $("againBtn").addEventListener("click", ()=>{
    thanks.hidden = true; form.hidden = false;
    form.scrollIntoView({behavior:"smooth", block:"center"});
  });
}
