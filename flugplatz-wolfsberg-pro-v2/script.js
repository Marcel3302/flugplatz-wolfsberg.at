const $ = (s)=>document.querySelector(s);
const $$ = (s)=>document.querySelectorAll(s);

$(".menubtn").addEventListener("click",()=>$(".navlinks").classList.toggle("open"));
$$(".navlinks a").forEach(a=>a.addEventListener("click",()=>$(".navlinks").classList.remove("open")));

const dict = {
de:{
status:"LOKW · Pilot Information",navAirport:"Flugplatz",navSchool:"Flugschule",navPilots:"Piloten",navFleet:"Flotte",navNews:"Aktuelles",contact:"Kontakt",
heroKicker:"KÄRNTNER LUFTFAHRER VERBAND · WOLFSBERG",heroTitle:"Fliegen beginnt<br>in Wolfsberg.",heroCopy:"Pilotenausbildung, Flugsport und echte Gemeinschaft – mitten im Lavanttal.",becomePilot:"Pilot werden",pilotBriefing:"Pilot Briefing",frequency:"Frequenz",runway:"Piste",surface:"Oberfläche",
lavanttal:"FLIEGEN IM LAVANTTAL",airportTitle:"Ein Flugplatz.<br>Viele Gründe abzuheben.",airportCopy:"Der KLV Wolfsberg verbindet Flugschule, Flugsport und Vereinsleben an einem besonderen Ort. Für Flugschüler, Mitglieder, Visiting Pilots und Gäste wird Luftfahrt hier unmittelbar erlebbar.",visitUs:"Besuch planen →",
feat1:"Flugschule",feat1c:"EASA-konforme Segel- und Motorflugausbildung.",feat2:"Für Piloten",feat2c:"Die wichtigsten Platz- und Anfluginformationen auf einen Blick.",feat3:"Verein & Erlebnis",feat3c:"Flugsport, Gemeinschaft und Restaurant direkt am Platz.",
schoolKicker:"KLV FLUGSCHULE",schoolTitle:"Dein Weg<br>ins Cockpit.",schoolCopy:"Die Flugschule bietet Ausbildung im Segel- und Motorflug. Theorie und Praxis werden flexibel organisiert, begleitet von erfahrenen Fluglehrern und einem aktiven Vereinsumfeld.",s1:"Segelflug",s1c:"Vom Doppelsitzer bis zum Alleinflug und darüber hinaus.",s2:"Motorflug / TMG",s2c:"Strukturierte Ausbildung auf Touring Motor Glider.",s3:"Weiterbildung",s3c:"Streckenflug, Höhenflug, Kunstflug und weitere Berechtigungen.",requestTraining:"Ausbildung anfragen",dto:"AUSBILDUNGSBETRIEB",
briefTitle:"Wichtige Daten.<br>Sofort sichtbar.",briefCopy:"Diese Übersicht dient der schnellen Orientierung. Für die Flugvorbereitung sind stets die aktuellen offiziellen Luftfahrtinformationen maßgeblich.",radio:"WOLFSBERG FLUGPLATZ",length:"Länge",elevation:"Seehöhe",radioContact:"Funkkontakt",radioText:"Funkverbindung spätestens fünf Minuten vor Erreichen des Flugplatzes aufnehmen und hörbereit bleiben.",traffic:"Verkehr",trafficText:"Auf Segelflugverkehr achten und die veröffentlichte Platzrunde einhalten.",noise:"Lärmschutz",noiseText:"Wohngebiete in der Umgebung nach Möglichkeit nicht überfliegen.",opsHours:"BETRIEBSINFORMATION",season:"Saison April – Oktober",fri:"Freitag",weekend:"Samstag – Sonntag",weekday:"Montag – Donnerstag",onRequest:"nach Anfrage",
weatherKicker:"WETTER AM PLATZ",weatherTitle:"Schneller Wetterüberblick.",weatherDisclaimer:"Demo-Wetterdaten dienen nur der Website-Vorschau und nicht der Flugvorbereitung.",temp:"Temperatur",wind:"Wind",gust:"Böen",updated:"Aktualisiert",
fleetKicker:"VEREINSFLOTTE",fleetTitle:"Vom Schulflug<br>bis zur Reise.",fleetCopy:"Ein Auszug aus der auf der bestehenden Website veröffentlichten Vereinsflotte.",newsKicker:"NEWS & EVENTS",newsTitle:"Was am Flugplatz<br>gerade passiert.",allNews:"Alle Neuigkeiten →",
restaurantTitle:"Genuss mit<br>Flugplatzblick.",restaurantCopy:"Regionale Küche, familiäre Atmosphäre und eine Terrasse direkt am Fluggeschehen.",kitchen:"KÜCHE",reserve:"Reservierung anfragen",
contactKicker:"KONTAKT",contactTitle:"Bereit zum<br>Abheben?",contactCopy:"Fragen zur Flugschule, Mitgliedschaft, Hangarierung oder zum Flugplatz? Kontaktieren Sie den KLV Wolfsberg.",name:"Name",topic:"Thema",message:"Nachricht",optSchool:"Pilotenausbildung",optMember:"Mitgliedschaft",optOther:"Sonstiges",send:"Anfrage senden",formDemo:"Demo: Vor Livegang wird das Formular an die gewünschte E-Mail-/Backend-Lösung angebunden.",footerAirport:"Flugplatz",footerVisit:"Besuchen",legal:"Rechtliches"
},
en:{
status:"LOKW · Pilot Information",navAirport:"Airfield",navSchool:"Flight School",navPilots:"Pilots",navFleet:"Fleet",navNews:"News",contact:"Contact",
heroKicker:"CARINTHIAN AVIATION ASSOCIATION · WOLFSBERG",heroTitle:"Flying starts<br>in Wolfsberg.",heroCopy:"Pilot training, air sports and a genuine community in the heart of the Lavant Valley.",becomePilot:"Become a pilot",pilotBriefing:"Pilot Briefing",frequency:"Frequency",runway:"Runway",surface:"Surface",
lavanttal:"FLYING IN THE LAVANT VALLEY",airportTitle:"One airfield.<br>Many reasons to fly.",airportCopy:"KLV Wolfsberg combines flight training, air sports and club life in a unique setting for students, members, visiting pilots and guests.",visitUs:"Plan your visit →",
feat1:"Flight school",feat1c:"EASA-compliant glider and powered-flight training.",feat2:"For pilots",feat2c:"Key airfield and arrival information at a glance.",feat3:"Club & experience",feat3c:"Air sports, community and a restaurant right at the field.",
schoolKicker:"KLV FLIGHT SCHOOL",schoolTitle:"Your path<br>to the cockpit.",schoolCopy:"The flight school offers glider and powered-flight training. Theory and practical training are organised flexibly with experienced instructors and an active club environment.",s1:"Gliding",s1c:"From dual instruction to first solo and beyond.",s2:"Powered flight / TMG",s2c:"Structured training on a Touring Motor Glider.",s3:"Advanced training",s3c:"Cross-country, high-altitude, aerobatics and further privileges.",requestTraining:"Ask about training",dto:"TRAINING ORGANISATION",
briefTitle:"Essential data.<br>Immediately visible.",briefCopy:"This overview is for quick orientation only. Always use current official aeronautical information for flight planning.",radio:"WOLFSBERG AIRFIELD",length:"Length",elevation:"Elevation",radioContact:"Radio contact",radioText:"Establish radio contact no later than five minutes before reaching the airfield and maintain listening watch.",traffic:"Traffic",trafficText:"Watch for glider traffic and follow the published circuit.",noise:"Noise abatement",noiseText:"Avoid overflying nearby residential areas whenever possible.",opsHours:"OPERATING INFORMATION",season:"Season April – October",fri:"Friday",weekend:"Saturday – Sunday",weekday:"Monday – Thursday",onRequest:"on request",
weatherKicker:"AIRFIELD WEATHER",weatherTitle:"Quick weather overview.",weatherDisclaimer:"Demo weather is for website preview only and must not be used for flight preparation.",temp:"Temperature",wind:"Wind",gust:"Gusts",updated:"Updated",
fleetKicker:"CLUB FLEET",fleetTitle:"From training<br>to touring.",fleetCopy:"A selection of aircraft currently published on the existing website.",newsKicker:"NEWS & EVENTS",newsTitle:"What's happening<br>at the airfield.",allNews:"All news →",
restaurantTitle:"Food with an<br>airfield view.",restaurantCopy:"Regional cuisine, a welcoming atmosphere and a terrace right beside the flying activity.",kitchen:"KITCHEN",reserve:"Request a reservation",
contactKicker:"CONTACT",contactTitle:"Ready to<br>take off?",contactCopy:"Questions about training, membership, hangar space or the airfield? Contact KLV Wolfsberg.",name:"Name",topic:"Topic",message:"Message",optSchool:"Pilot training",optMember:"Membership",optOther:"Other",send:"Send enquiry",formDemo:"Demo: Before launch, this form will be connected to the chosen email/backend solution.",footerAirport:"Airfield",footerVisit:"Visit",legal:"Legal"
}};
let lang="de";
$("#langBtn").addEventListener("click",()=>{
 lang=lang==="de"?"en":"de";
 $("#langBtn").textContent=lang==="de"?"EN":"DE";
 document.documentElement.lang=lang;
 $$("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(dict[lang][k]) el.innerHTML=dict[lang][k];});
 renderNews();
});

const news = {
de:[
{date:"DEMO · EVENT",title:"Schnupperflugtag",text:"Ein Beispiel für einen Veranstaltungseintrag, der später direkt über das CMS gepflegt werden kann."},
{date:"DEMO · FLUGSCHULE",title:"Pilotenausbildung 2026",text:"Informationsbeitrag für Interessenten mit direkter Verlinkung zur Ausbildungsanfrage."},
{date:"DEMO · VEREIN",title:"Sommerfest am Flugplatz",text:"Neuigkeiten, Vereinsveranstaltungen und Besucherinformationen prominent auf der Startseite."}
],
en:[
{date:"DEMO · EVENT",title:"Trial Flight Day",text:"Example event entry that can later be managed directly through the CMS."},
{date:"DEMO · FLIGHT SCHOOL",title:"Pilot Training 2026",text:"Information for prospective students with a direct link to the training enquiry."},
{date:"DEMO · CLUB",title:"Summer Airfield Event",text:"News, club events and visitor information displayed prominently on the homepage."}
]};
function renderNews(){
 $("#newsGrid").innerHTML=news[lang].map(n=>`<article class="news-card"><time>${n.date}</time><h3>${n.title}</h3><p>${n.text}</p><a href="#contact">${lang==="de"?"Mehr erfahren":"Learn more"} →</a></article>`).join("");
}
renderNews();

$("#contactForm").addEventListener("submit",(e)=>{
 e.preventDefault();
 const t=document.createElement("div"); t.className="toast";
 t.textContent=lang==="de"?"Demo-Anfrage erfasst – im Livebetrieb wird sie per E-Mail versendet.":"Demo enquiry captured – in production it will be sent by email.";
 document.body.appendChild(t); setTimeout(()=>t.remove(),3800);
});

/* Live demo weather: Open-Meteo coordinates around LOKW. Not aviation weather. */
(async()=>{
 try{
  const url="https://api.open-meteo.com/v1/forecast?latitude=46.8183&longitude=14.825&current=temperature_2m,wind_speed_10m,wind_gusts_10m&wind_speed_unit=kn";
  const r=await fetch(url); const j=await r.json(); const c=j.current;
  $("#temp").textContent=Math.round(c.temperature_2m)+" °C";
  $("#wind").textContent=Math.round(c.wind_speed_10m)+" kt";
  $("#gust").textContent=Math.round(c.wind_gusts_10m)+" kt";
  $("#updated").textContent=new Date(c.time).toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"});
 }catch(e){
  $("#temp").textContent="Demo"; $("#wind").textContent="—"; $("#gust").textContent="—"; $("#updated").textContent="offline";
 }
})();