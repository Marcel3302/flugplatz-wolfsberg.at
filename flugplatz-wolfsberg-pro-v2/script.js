const $=(s)=>document.querySelector(s);
const $$=(s)=>document.querySelectorAll(s);

const menuBtn=$(".menubtn");
const navLinks=$(".navlinks");
if(menuBtn&&navLinks){
  menuBtn.addEventListener("click",()=>{
    const open=navLinks.classList.toggle("open");
    menuBtn.classList.toggle("open",open);
    menuBtn.setAttribute("aria-expanded",String(open));
  });
  $$(".navlinks a").forEach(a=>a.addEventListener("click",()=>{
    navLinks.classList.remove("open");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded","false");
  }));
}

const showToast=(message)=>{
  const old=$(".toast"); if(old) old.remove();
  const t=document.createElement("div");
  t.className="toast"; t.textContent=message;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),4200);
};

const contactForm=$("#contactForm");
if(contactForm){
  contactForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const fd=new FormData(contactForm);
    const name=(fd.get("name")||"").toString().trim();
    const email=(fd.get("email")||"").toString().trim();
    const topic=(fd.get("topic")||"Allgemeine Anfrage").toString();
    const message=(fd.get("message")||"").toString().trim();
    const subject=encodeURIComponent("Website-Anfrage: "+topic);
    const body=encodeURIComponent(
      "Name: "+name+"\n"+
      "E-Mail: "+email+"\n"+
      "Thema: "+topic+"\n\n"+
      "Nachricht:\n"+message
    );
    window.location.href="mailto:office@flugplatz-wolfsberg.at?subject="+subject+"&body="+body;
    showToast("Ihr E-Mail-Programm wird geöffnet.");
  });
}

const newsletter=$("#newsletterForm");
if(newsletter){
  newsletter.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email=(new FormData(newsletter).get("email")||"").toString().trim();
    const subject=encodeURIComponent("Newsletter-Anmeldung");
    const body=encodeURIComponent("Bitte nehmen Sie folgende E-Mail-Adresse in den Newsletter-Verteiler auf:\n\n"+email);
    window.location.href="mailto:office@flugplatz-wolfsberg.at?subject="+subject+"&body="+body;
    showToast("Ihr E-Mail-Programm wird geöffnet.");
  });
}

/* Official aviation weather reference: nearest METAR station LOWK. */
let weatherBusy=false;
const compass=(deg)=>{
  if(deg===null||deg===undefined||Number.isNaN(Number(deg))) return "VRB";
  const dirs=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
  return dirs[Math.round(Number(deg)/22.5)%16];
};
const cloudText=(clouds)=>{
  if(!Array.isArray(clouds)||!clouds.length) return "keine Wolkenangabe";
  return clouds.map(c=>c.cover+(c.base?(" "+c.base+" ft"):"")).join(" · ");
};
async function loadWeather(){
  if(weatherBusy) return;
  weatherBusy=true;
  const state=$("#weatherState"),dot=$("#weatherStatus"),refresh=$("#weatherRefresh");
  if(state) state.textContent="METAR wird aktualisiert";
  if(dot) dot.className="";
  if(refresh) refresh.disabled=true;
  try{
    const r=await fetch("/api/metar",{cache:"no-store"});
    if(!r.ok) throw new Error("metar");
    const m=await r.json();
    const windDir=m.wdir===0?"000":m.wdir;
    $("#temp").textContent=m.temp!=null?Math.round(m.temp)+" °C":"–";
    $("#dewpoint").textContent=m.dewp!=null?"Taupunkt "+Math.round(m.dewp)+" °C":"Taupunkt –";
    $("#wind").textContent=(windDir==="VRB"?"VRB":String(windDir).padStart(3,"0")+"°")+" / "+Math.round(m.wspd||0)+" kt";
    $("#windDirection").textContent=(windDir==="VRB"?"variabel":compass(m.wdir));
    $("#gust").textContent=m.wgst?Math.round(m.wgst)+" kt":"keine";
    $("#pressure").textContent=m.altim?Math.round(m.altim)+" hPa":"–";
    $("#visibility").textContent=m.visib?m.visib+" SM":"–";
    $("#flightCategory").textContent=m.fltCat||"–";
    $("#weatherCondition").textContent=m.wxString||"keine signifikante Meldung";
    $("#clouds").textContent=cloudText(m.clouds);
    $("#rawMetar").textContent=m.rawOb||"Keine Rohmeldung verfügbar";
    const obs=new Date((m.obsTime||0)*1000);
    $("#updated").textContent=obs.toLocaleTimeString("de-AT",{hour:"2-digit",minute:"2-digit",timeZone:"Europe/Vienna"});
    const age=Math.max(0,Math.round((Date.now()-obs.getTime())/60000));
    $("#metarAge").textContent=age+" min alt";
    if(state) state.textContent="Offizielle METAR-Beobachtung LOWK";
    if(dot) dot.className="ok";
  }catch(e){
    ["temp","wind","gust","pressure","visibility"].forEach(id=>{const el=$("#"+id);if(el)el.textContent="–";});
    if($("#rawMetar")) $("#rawMetar").textContent="METAR derzeit nicht verfügbar.";
    if($("#updated")) $("#updated").textContent="–";
    if($("#metarAge")) $("#metarAge").textContent="–";
    if(state) state.textContent="METAR momentan nicht erreichbar";
    if(dot) dot.className="error";
  }finally{
    weatherBusy=false;
    if(refresh) refresh.disabled=false;
  }
}
const weatherRefresh=$("#weatherRefresh");
if(weatherRefresh) weatherRefresh.addEventListener("click",loadWeather);
loadWeather();
setInterval(loadWeather,300000);

if("IntersectionObserver" in window){
  const revealObserver=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },{threshold:.1,rootMargin:"0px 0px -25px 0px"});
  $$(".reveal").forEach(el=>revealObserver.observe(el));
}else{
  $$(".reveal").forEach(el=>el.classList.add("in-view"));
}

const navShell=$(".navshell");
const sections=[...document.querySelectorAll("main section[id]")];
const navAnchors=[...document.querySelectorAll('.navlinks a[href^="#"]')];
window.addEventListener("scroll",()=>{
  if(navShell) navShell.classList.toggle("scrolled",window.scrollY>12);
  const y=window.scrollY+160;
  let current="";
  sections.forEach(s=>{if(s.offsetTop<=y) current=s.id;});
  navAnchors.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
},{passive:true});
