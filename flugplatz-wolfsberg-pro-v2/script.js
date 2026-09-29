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

/* Orientierungswetter von Open-Meteo – nicht für Flugvorbereitung. */
(async()=>{
  try{
    const url="https://api.open-meteo.com/v1/forecast?latitude=46.8183&longitude=14.825&current=temperature_2m,wind_speed_10m,wind_gusts_10m&wind_speed_unit=kn";
    const r=await fetch(url,{cache:"no-store"});
    if(!r.ok) throw new Error("weather");
    const j=await r.json(),c=j.current;
    $("#temp").textContent=Math.round(c.temperature_2m)+" °C";
    $("#wind").textContent=Math.round(c.wind_speed_10m)+" kt";
    $("#gust").textContent=Math.round(c.wind_gusts_10m)+" kt";
    $("#updated").textContent=new Date(c.time).toLocaleTimeString("de-AT",{hour:"2-digit",minute:"2-digit"});
  }catch(e){
    $("#temp").textContent="–";
    $("#wind").textContent="–";
    $("#gust").textContent="–";
    $("#updated").textContent="nicht verfügbar";
  }
})();

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
