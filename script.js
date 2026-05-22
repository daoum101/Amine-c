function hideLoader(){
  const l=document.getElementById('loader');
  if(l){l.classList.add('hide'); setTimeout(()=>l.style.display='none',800);}
}
document.addEventListener('DOMContentLoaded',()=>setTimeout(hideLoader,900));
window.addEventListener('load',()=>setTimeout(hideLoader,400));
setTimeout(hideLoader,1600);

const reveals=document.querySelectorAll('.reveal');
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});
},{threshold:.12});
reveals.forEach(el=>io.observe(el));

const glow=document.querySelector('.cursor-glow');
document.addEventListener('pointermove',e=>{
  if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';}
  document.documentElement.style.setProperty('--mx',e.clientX+'px');
  document.documentElement.style.setProperty('--my',e.clientY+'px');
  if(Math.random()>.83){
    const s=document.createElement('div');
    s.className='spark';s.style.left=e.clientX+'px';s.style.top=e.clientY+'px';
    document.body.appendChild(s);setTimeout(()=>s.remove(),800);
  }
});

const translations={
  fr:{
    navHome:"ACCUEIL",navServices:"SERVICES",navWork:"RÉALISATIONS",navAbout:"À PROPOS",navReviews:"AVIS",navContact:"CONTACT",
    ctaFree:"DEVIS GRATUIT",slogan:"VOTRE SOURIRE, ON EN FAIT NOTRE PRIORITÉ.",heroTitle:"CARROSSERIE <em>PEINTURE</em>",
    heroSub:"Réparation • rénovation • remise à neuf avec une finition propre, brillante et garantie.",
    badge1:"EXPERTISE",badge1s:"À votre service",badge2:"QUALITÉ",badge2s:"Haute qualité",badge3:"CONFIANCE",badge3s:"Satisfaction garantie",
    quoteWhatsapp:"DEVIS GRATUIT SUR WHATSAPP",quoteSmall:"Envoyez vos photos, recevez votre devis rapidement !",
    sendPhotos:"ENVOYEZ VOS PHOTOS",estimate:"Estimation rapide sur WhatsApp",
    repair:"RÉPARATION",repairText:"Tous types de chocs et dommages",paint:"PEINTURE",paintText:"Finitions impeccables et teintes sur mesure",
    renovation:"RÉNOVATION",renovationText:"Restauration complète intérieure et extérieure",polish:"POLISSAGE",polishText:"Lustrage et traitement de carrosserie",
    freeQuote:"DEVIS GRATUIT",freeQuoteText:"Estimation rapide et sans engagement",servicesLabel:"NOS SERVICES",
    servicesTitle:"Des prestations complètes pour redonner <em>à votre véhicule tout son éclat.</em>",
    repairLong:"Rayures, bosses, pare-chocs, ailes et éléments abîmés : nous remettons votre véhicule proprement en état.",
    paintLong:"Peinture complète ou partielle, teinte sur mesure et finition brillante haut de gamme.",
    renoLong:"Rénovation intérieure et extérieure pour redonner de la valeur et du style à votre véhicule.",
    polishLong:"Correction, polish, brillance et protection pour une finition propre et profonde.",
    workLabel:"À NOS RÉALISATIONS",workTitle:"Travail propre, <em>résultat garanti.</em>",
    workSub:"Découvrez quelques réalisations effectuées dans notre garage avec de vraies photos.",
    quality:"QUALITÉ PREMIUM",qualitySub:"Des finitions impeccables et durables",materials:"MATÉRIAUX HAUT DE GAMME",materialsSub:"Peintures et pièces conformes",
    delay:"RESPECT DES DÉLAIS",delaySub:"Travail rapide et efficace",satisfaction:"SATISFACTION GARANTIE",satisfactionSub:"Votre satisfaction est notre priorité",
    aboutLabel:"À PROPOS DE NOUS",aboutTitle:"Un carrossier passionné par la <em>finition parfaite.</em>",
    aboutText:"Nous mettons notre savoir-faire au service de votre véhicule pour vous rendre une voiture propre, brillante et prête à reprendre la route avec fierté.",
    why1:"Travail soigné et précis",why2:"Finitions premium",why3:"Devis rapide et transparent",why4:"Proche de Bruxelles",why5:"Service professionnel",why6:"Passion automobile",
    photoQuote:"DEVIS PHOTO",uploadTitle:"Envoyez vos photos, <em>recevez votre devis gratuit.</em>",uploadText:"Prenez quelques photos des dégâts, expliquez le problème et envoyez votre demande directement sur WhatsApp.",
    addPhotos:"Ajouter des photos des dégâts",sendWhatsapp:"ENVOYER SUR WHATSAPP",reviewsLabel:"AVIS CLIENTS",reviewsTitle:"La satisfaction de nos clients est <em>notre plus belle récompense.</em>",
    contactLabel:"NOUS CONTACTER",contactTitle:"Votre devis gratuit <em>commence ici.</em>"
  },
  nl:{
    navHome:"START",navServices:"DIENSTEN",navWork:"REALISATIES",navAbout:"OVER ONS",navReviews:"REVIEWS",navContact:"CONTACT",
    ctaFree:"GRATIS OFFERTE",slogan:"UW GLIMLACH IS ONZE PRIORITEIT.",heroTitle:"CARROSSERIE <em>LAKWERK</em>",
    heroSub:"Herstelling • renovatie • afwerking met een proper, glanzend en gegarandeerd resultaat.",
    badge1:"EXPERTISE",badge1s:"Tot uw dienst",badge2:"KWALITEIT",badge2s:"Hoge kwaliteit",badge3:"VERTROUWEN",badge3s:"Tevredenheid gegarandeerd",
    quoteWhatsapp:"GRATIS OFFERTE VIA WHATSAPP",quoteSmall:"Stuur uw foto’s en ontvang snel uw offerte!",
    sendPhotos:"STUUR UW FOTO’S",estimate:"Snelle schatting via WhatsApp",
    repair:"HERSTELLING",repairText:"Alle soorten schade en deuken",paint:"LAKWERK",paintText:"Nette afwerking en kleur op maat",
    renovation:"RENOVATIE",renovationText:"Volledige renovatie binnen en buiten",polish:"POLIJSTEN",polishText:"Glans en carrosseriebehandeling",
    freeQuote:"GRATIS OFFERTE",freeQuoteText:"Snel en vrijblijvend",servicesLabel:"ONZE DIENSTEN",
    servicesTitle:"Complete diensten om <em>uw voertuig opnieuw te laten stralen.</em>",
    repairLong:"Krassen, deuken, bumpers, vleugels en beschadigde onderdelen: wij herstellen uw voertuig netjes.",
    paintLong:"Volledig of gedeeltelijk lakwerk, kleur op maat en premium glanzende afwerking.",
    renoLong:"Interieur- en exterieurrenovatie om uw voertuig opnieuw waarde en stijl te geven.",
    polishLong:"Correctie, polish, glans en bescherming voor een diepe en nette afwerking.",
    workLabel:"ONZE REALISATIES",workTitle:"Proper werk, <em>gegarandeerd resultaat.</em>",
    workSub:"Bekijk enkele realisaties uit onze garage met echte foto’s.",
    quality:"PREMIUM KWALITEIT",qualitySub:"Duurzame en nette afwerking",materials:"HOOGWAARDIGE MATERIALEN",materialsSub:"Conforme lakken en onderdelen",
    delay:"RESPECT VOOR TERMIJNEN",delaySub:"Snel en efficiënt werk",satisfaction:"TEVREDENHEID GARANTIE",satisfactionSub:"Uw tevredenheid is onze prioriteit",
    aboutLabel:"OVER ONS",aboutTitle:"Een carrossier met passie voor <em>perfecte afwerking.</em>",
    aboutText:"Wij zetten onze knowhow in om uw wagen proper, glanzend en met trots opnieuw op de baan te krijgen.",
    why1:"Net en precies werk",why2:"Premium afwerking",why3:"Snelle en duidelijke offerte",why4:"Dicht bij Brussel",why5:"Professionele service",why6:"Passie voor auto’s",
    photoQuote:"FOTO OFFERTE",uploadTitle:"Stuur uw foto’s en <em>ontvang uw gratis offerte.</em>",uploadText:"Neem foto’s van de schade, beschrijf het probleem en stuur alles rechtstreeks via WhatsApp.",
    addPhotos:"Foto’s van de schade toevoegen",sendWhatsapp:"VERSTUREN VIA WHATSAPP",reviewsLabel:"KLANTREVIEWS",reviewsTitle:"Klanttevredenheid is <em>onze mooiste beloning.</em>",
    contactLabel:"CONTACTEER ONS",contactTitle:"Uw gratis offerte <em>begint hier.</em>"
  },
  en:{
    navHome:"HOME",navServices:"SERVICES",navWork:"PROJECTS",navAbout:"ABOUT",navReviews:"REVIEWS",navContact:"CONTACT",
    ctaFree:"FREE QUOTE",slogan:"YOUR SMILE IS OUR PRIORITY.",heroTitle:"BODYWORK <em>PAINT</em>",
    heroSub:"Repair • renovation • restoration with a clean, glossy and guaranteed finish.",
    badge1:"EXPERTISE",badge1s:"At your service",badge2:"QUALITY",badge2s:"High quality",badge3:"TRUST",badge3s:"Satisfaction guaranteed",
    quoteWhatsapp:"FREE QUOTE ON WHATSAPP",quoteSmall:"Send your photos and receive your quote quickly!",
    sendPhotos:"SEND YOUR PHOTOS",estimate:"Quick estimate on WhatsApp",
    repair:"REPAIR",repairText:"All types of damage and dents",paint:"PAINT",paintText:"Impeccable finish and custom colors",
    renovation:"RENOVATION",renovationText:"Complete interior and exterior restoration",polish:"POLISHING",polishText:"Gloss and bodywork treatment",
    freeQuote:"FREE QUOTE",freeQuoteText:"Quick and without obligation",servicesLabel:"OUR SERVICES",
    servicesTitle:"Complete services to bring back <em>your vehicle’s shine.</em>",
    repairLong:"Scratches, dents, bumpers, wings and damaged parts: we restore your vehicle cleanly.",
    paintLong:"Full or partial paint, custom color matching and premium glossy finish.",
    renoLong:"Interior and exterior renovation to restore value and style to your vehicle.",
    polishLong:"Correction, polish, shine and protection for a deep clean finish.",
    workLabel:"OUR PROJECTS",workTitle:"Clean work, <em>guaranteed result.</em>",
    workSub:"Discover real projects completed in our garage with authentic photos.",
    quality:"PREMIUM QUALITY",qualitySub:"Impeccable and durable finishes",materials:"HIGH-END MATERIALS",materialsSub:"Compliant paint and parts",
    delay:"ON-TIME DELIVERY",delaySub:"Fast and efficient work",satisfaction:"SATISFACTION GUARANTEED",satisfactionSub:"Your satisfaction is our priority",
    aboutLabel:"ABOUT US",aboutTitle:"A bodywork specialist passionate about <em>perfect finishing.</em>",
    aboutText:"We use our know-how to return your car clean, glossy and ready to drive with pride.",
    why1:"Careful and precise work",why2:"Premium finishes",why3:"Fast transparent quote",why4:"Near Brussels",why5:"Professional service",why6:"Automotive passion",
    photoQuote:"PHOTO QUOTE",uploadTitle:"Send your photos and <em>receive your free quote.</em>",uploadText:"Take photos of the damage, explain the problem and send your request directly on WhatsApp.",
    addPhotos:"Add damage photos",sendWhatsapp:"SEND ON WHATSAPP",reviewsLabel:"CUSTOMER REVIEWS",reviewsTitle:"Customer satisfaction is <em>our greatest reward.</em>",
    contactLabel:"CONTACT US",contactTitle:"Your free quote <em>starts here.</em>"
  }
};

function setLang(lang){
  const t=translations[lang]||translations.fr;
  document.documentElement.lang=lang==="nl"?"nl-BE":lang==="en"?"en":"fr-BE";
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;if(t[key]) el.textContent=t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const key=el.dataset.i18nHtml;if(t[key]) el.innerHTML=t[key];
  });
  document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  localStorage.setItem('amine-lang',lang);
}
document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
setLang(localStorage.getItem('amine-lang')||'fr');

function sendDamageForm(e){
  e.preventDefault();
  const name=document.getElementById('damageName').value;
  const car=document.getElementById('damageCar').value;
  const msg=document.getElementById('damageMessage').value;
  const text=`Bonjour Amine Cars Carrosserie, je souhaite recevoir un devis gratuit.%0A%0ANom: ${encodeURIComponent(name)}%0AVéhicule: ${encodeURIComponent(car)}%0AProblème: ${encodeURIComponent(msg)}%0A%0AJe vais envoyer les photos des dégâts.`;
  window.open(`https://wa.me/32487918730?text=${text}`,'_blank');
}

if(window.gsap){
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.topbar',{y:-90,opacity:0,duration:1,ease:'power4.out'});
  gsap.from('.hero-content > *',{y:60,opacity:0,duration:.9,stagger:.08,delay:.4,ease:'power4.out'});
  gsap.to('.hero-bg img',{scale:1.12,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
  gsap.utils.toArray('.service-row,.realisations-card,.quality-row article,.review-card').forEach((el,i)=>{
    gsap.from(el,{y:70,opacity:0,duration:.75,delay:(i%4)*.05,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%'}});
  });
}

const canvas=document.getElementById('particles'),ctx=canvas?.getContext('2d');let ps=[];
function resize(){if(!canvas)return;canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;canvas.style.width=innerWidth+'px';canvas.style.height=innerHeight+'px';ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0)}
function init(){ps=Array.from({length:80},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.6+.5,vy:-Math.random()*.3-.05,a:Math.random()*.45+.1}))}
function draw(){if(!ctx)return;ctx.clearRect(0,0,innerWidth,innerHeight);ps.forEach(p=>{p.y+=p.vy;if(p.y<-10){p.y=innerHeight+10;p.x=Math.random()*innerWidth}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(229,9,20,${p.a})`;ctx.fill()});requestAnimationFrame(draw)}
if(canvas&&ctx){resize();init();draw();addEventListener('resize',()=>{resize();init()})}


// === MOBILE HAMBURGER MENU ===
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.querySelector('.mobile-close');

function openMobileMenu(){
  if(!mobileMenu) return;
  mobileMenu.classList.add('open');
  document.body.classList.add('menu-open');
}
function closeMobileMenu(){
  if(!mobileMenu) return;
  mobileMenu.classList.remove('open');
  document.body.classList.remove('menu-open');
}
hamburger?.addEventListener('click', openMobileMenu);
mobileClose?.addEventListener('click', closeMobileMenu);
mobileMenu?.addEventListener('click', (e)=>{ if(e.target === mobileMenu) closeMobileMenu(); });
document.querySelectorAll('.mobile-menu-panel a[href^="#"]').forEach(link=>{
  link.addEventListener('click', closeMobileMenu);
});
document.querySelectorAll('.mobile-lang button').forEach(btn=>{
  btn.addEventListener('click', ()=>{ if(typeof setLang === 'function') setLang(btn.dataset.lang); });
});


// === REAL PHOTO LIGHTBOX ===
const photoLightbox = document.getElementById('photoLightbox');
const lightboxImg = photoLightbox?.querySelector('img');
const lightboxText = photoLightbox?.querySelector('p');

document.querySelectorAll('.premium-real-slide').forEach(slide=>{
  slide.addEventListener('click', ()=>{
    const img = slide.querySelector('img');
    const title = slide.querySelector('strong')?.textContent || 'Réalisation Amine Cars';
    if(photoLightbox && lightboxImg){
      lightboxImg.src = img.src;
      lightboxText.textContent = title;
      photoLightbox.classList.add('open');
      document.body.classList.add('menu-open');
    }
  });
});

document.querySelector('.lightbox-close')?.addEventListener('click', ()=>{
  photoLightbox?.classList.remove('open');
  document.body.classList.remove('menu-open');
});

photoLightbox?.addEventListener('click', (e)=>{
  if(e.target === photoLightbox){
    photoLightbox.classList.remove('open');
    document.body.classList.remove('menu-open');
  }
});


// === SHOWROOM LIGHTBOX ===
document.querySelectorAll('.showroom-slide').forEach(slide=>{
  slide.addEventListener('click', ()=>{
    const img = slide.querySelector('img');
    const title = slide.dataset.title || 'Amine Cars';
    const lightbox = document.getElementById('photoLightbox');
    if(lightbox){
      const lImg = lightbox.querySelector('img');
      const text = lightbox.querySelector('p');
      lImg.src = img.src;
      text.textContent = title;
      lightbox.classList.add('open');
      document.body.classList.add('menu-open');
    }
  });
});


/* PATCH V12 — horizontal showroom drag + keyboard */
(function(){
  const rail = document.querySelector('.show-grid');
  if(!rail) return;
  let down=false, startX=0, startScroll=0;
  rail.addEventListener('pointerdown', function(e){
    down=true; startX=e.clientX; startScroll=rail.scrollLeft;
    rail.setPointerCapture && rail.setPointerCapture(e.pointerId);
  });
  rail.addEventListener('pointermove', function(e){
    if(!down) return;
    rail.scrollLeft = startScroll - (e.clientX - startX);
  });
  ['pointerup','pointercancel','pointerleave'].forEach(function(evt){
    rail.addEventListener(evt, function(){ down=false; });
  });
  rail.querySelectorAll('.show-item').forEach(function(item){
    item.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); item.click(); }
      if(e.key === 'ArrowRight') rail.scrollBy({left:320, behavior:'smooth'});
      if(e.key === 'ArrowLeft') rail.scrollBy({left:-320, behavior:'smooth'});
    });
  });
})();
