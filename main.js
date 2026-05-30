// Datos de proyectos (originales, intactos)
const proyectosData = [
  { titulo: "Promover la producción agroecológica y el desarrollo socioeconómico a través de la actividad agropecuaria de los/las pequeños/as campesinos/as en la provincia de Montecristi, R.D.", fecha: "2025", monto: 71830, localizacion: "Provincia de Montecristi, República Dominicana", resumen: "Este proyecto tiene como objetivo fortalecer la soberanía alimentaria y la producción agroecológica de alimentos en comunidades campesinas de Montecristi. Se impulsará la producción de hortalizas, la crianza de ganado ovicaprino y la capacitación en técnicas sostenibles, contribuyendo así al desarrollo socioeconómico de las familias productoras.", entidades: '<div class="entidad-item"><img src="https://i.postimg.cc/xTbkqdVs/Logo.png" alt="CEPOCS" width="40" height="auto" loading="lazy"><span class="entidad-nombre">CEPOCS</span></div><div class="entidad-item"><img src="https://i.postimg.cc/JG4ymtv2/Manos-unidas.png" alt="Manos Unidas" width="60" height="auto" loading="lazy"><span class="entidad-nombre">Manos Unidas</span></div>' },
  { titulo: "El cacao agroecológico: instrumento de empoderamiento de la mujer y de las comunidades de la Cordillera Septentrional, RD", fecha: "2024", monto: 444617, localizacion: "Los Hidalgos, Guananico, Altamira", resumen: "Intervención en el marco de la cooperación feminista, alineada con el ODS 5. Se incluyó fortalecimiento del liderazgo feminista, puesta en funcionamiento de una Unidad de Procesamiento de Cacao gestionada por mujeres, mejora de capacidades para la comercialización y producción agrícola agroecológica.", entidades: '<div class="entidad-item"><img src="https://i.postimg.cc/xTbkqdVs/Logo.png" alt="CEPOCS" width="40" height="auto" loading="lazy"><span class="entidad-nombre">CEPOCS</span></div><div class="entidad-item aecid"><img src="https://i.postimg.cc/YS5rRHtw/AECID-HORIZONTAL-CMYK-COLOR.png" alt="AECID" width="60" height="auto" loading="lazy"><span class="entidad-nombre">AECID</span></div><div class="entidad-item prodiversa"><img src="https://i.postimg.cc/jd8tk8vJ/LOGO-PRODIVERSA-FINAL.png" alt="Prodiversa" width="60" height="auto" loading="lazy"><span class="entidad-nombre">Prodiversa</span></div>' },
  { titulo: "Producción agroecológica y participación de la mujer en comunidades marginadas. Provincia Valverde.", fecha: "2023", monto: 35542, localizacion: "Distrito Municipal de Paradero (La Cayota, El Aguacate, La Lomota)", resumen: "Proyecto socioproductivo que incrementó los ingresos de las productoras en un 25%, reduciendo la pobreza. Se fortaleció a Alcaldías Municipales y Ministerios de Agricultura y Medio Ambiente.", entidades: '<div class="entidad-item"><img src="https://i.postimg.cc/xTbkqdVs/Logo.png" alt="CEPOCS" width="40" height="auto" loading="lazy"><span class="entidad-nombre">CEPOCS</span></div><div class="entidad-item"><img src="https://i.postimg.cc/JG4ymtv2/Manos-unidas.png" alt="Manos Unidas" width="60" height="auto" loading="lazy"><span class="entidad-nombre">Manos Unidas</span></div><div class="entidad-item"><img src="https://i.postimg.cc/Pr11Ww45/Dm-PAradero.jpg" alt="Ayuntamiento Paradero" width="40" height="auto" loading="lazy"><span class="entidad-nombre">Ayuntamiento Paradero</span></div>' },
  { titulo: "Empoderamiento de las mujeres a través de la mejora de la transformación y comercialización del café en Paradero, RD", fecha: "2022", monto: 249687, localizacion: "Distrito Municipal de Paradero", resumen: "Se acompañó a las mujeres de La Cayota en su proceso de empoderamiento individual y colectivo, a través de la creación de un centro de transformación y comercialización del café.", entidades: '<div class="entidad-item"><img src="https://i.postimg.cc/xTbkqdVs/Logo.png" alt="CEPOCS" width="40" height="auto" loading="lazy"><span class="entidad-nombre">CEPOCS</span></div><div class="entidad-item aecid"><img src="https://i.postimg.cc/YS5rRHtw/AECID-HORIZONTAL-CMYK-COLOR.png" alt="AECID" width="60" height="auto" loading="lazy"><span class="entidad-nombre">AECID</span></div><div class="entidad-item prodiversa"><img src="https://i.postimg.cc/jd8tk8vJ/LOGO-PRODIVERSA-FINAL.png" alt="Prodiversa" width="60" height="auto" loading="lazy"><span class="entidad-nombre">Prodiversa</span></div><div class="entidad-item"><img src="https://i.postimg.cc/Pr11Ww45/Dm-PAradero.jpg" alt="Ayuntamiento Paradero" width="40" height="auto" loading="lazy"><span class="entidad-nombre">Ayuntamiento Paradero</span></div>' },
  { titulo: "Intercambio entre Alcaldías Municipales España/República Dominicana", fecha: "2022", monto: 9500, localizacion: "Madrid; Andalucía; Castilla la Mancha (España)", resumen: "Alcaldes, director de Mancomunidad y representantes de la sociedad civil dominicana visitaron España para reunirse con representantes políticos y sociales.", entidades: '<div class="entidad-item"><img src="https://i.postimg.cc/xTbkqdVs/Logo.png" alt="CEPOCS" width="40" height="auto" loading="lazy"><span class="entidad-nombre">CEPOCS</span></div><div class="entidad-item prodiversa"><img src="https://i.postimg.cc/jd8tk8vJ/LOGO-PRODIVERSA-FINAL.png" alt="Prodiversa" width="60" height="auto" loading="lazy"><span class="entidad-nombre">Prodiversa</span></div><div class="entidad-item"><img src="https://i.postimg.cc/wTDDXmVM/Gobierno-de-Rep-Dominicana-(cropped).png" alt="Mancomunidad" width="50" height="auto" loading="lazy"><span class="entidad-nombre">Mancomunidad</span></div>' },
  { titulo: "Aumentar la productividad y los ingresos agrícolas con enfoque agroecológico", fecha: "2020", monto: 217315, localizacion: "Esperanza, Altamira, Navarrete", resumen: "Se contribuyó al desarrollo económico mediante el aumento de la productividad de familias agrícolas. Se incluyó capacitación técnica y fábrica de zumos y mermeladas gestionada por mujeres rurales.", entidades: '<div class="entidad-item"><img src="https://i.postimg.cc/xTbkqdVs/Logo.png" alt="CEPOCS" width="40" height="auto" loading="lazy"><span class="entidad-nombre">CEPOCS</span></div><div class="entidad-item aecid"><img src="https://i.postimg.cc/YS5rRHtw/AECID-HORIZONTAL-CMYK-COLOR.png" alt="AECID" width="60" height="auto" loading="lazy"><span class="entidad-nombre">AECID</span></div><div class="entidad-item prodiversa"><img src="https://i.postimg.cc/jd8tk8vJ/LOGO-PRODIVERSA-FINAL.png" alt="Prodiversa" width="60" height="auto" loading="lazy"><span class="entidad-nombre">Prodiversa</span></div><div class="entidad-item"><img src="https://i.postimg.cc/Pr11Ww45/Dm-PAradero.jpg" alt="Ayuntamiento Paradero" width="40" height="auto" loading="lazy"><span class="entidad-nombre">Ayuntamiento Paradero</span></div>' },
  { titulo: "Gestión de Residuos Sólidos en 9 municipios y 12 Distritos", fecha: "2021", monto: 56000, localizacion: "Navarrete, Villa González, Guananíco, Esperanza, Los Hidalgos, Villa Isabela, Luperón, Imbert, Altamira", resumen: "Se contribuyó al derecho a vivir en un ambiente sano, planificando e implementando la mejora de la Política de Gestión de Residuos Sólidos.", entidades: '<div class="entidad-item"><img src="https://i.postimg.cc/xTbkqdVs/Logo.png" alt="CEPOCS" width="40" height="auto" loading="lazy"><span class="entidad-nombre">CEPOCS</span></div><div class="entidad-item"><img src="https://i.postimg.cc/wTDDXmVM/Gobierno-de-Rep-Dominicana-(cropped).png" alt="Mancomunidad" width="50" height="auto" loading="lazy"><span class="entidad-nombre">Mancomunidad</span></div>' },
  { titulo: "Aumento de la productividad del cacao y mejora de las plantaciones", fecha: "2020", monto: 110000, localizacion: "Navarrete", resumen: "Se contribuyó al desarrollo organizational de los productores. Gran resultado: constitución de la marca, fábrica y empresa 'Chocolala'.", entidades: '<div class="entidad-item"><img src="https://i.postimg.cc/xTbkqdVs/Logo.png" alt="CEPOCS" width="40" height="auto" loading="lazy"><span class="entidad-nombre">CEPOCS</span></div><div class="entidad-item bid"><img src="https://i.postimg.cc/D8yWFmRK/Logo-BID-Espanol.png" alt="BID" width="70" height="auto" loading="lazy"><span class="entidad-nombre">BID</span></div><div class="entidad-item"><img src="https://i.postimg.cc/4ymc14wd/logo-cnc-web-2line-scaled-(1).png" alt="CNC" width="50" height="auto" loading="lazy"><span class="entidad-nombre">CNC</span></div>' }
];

// Ordenar proyectos
proyectosData.sort((a,b) => {
  if (a.fecha !== b.fecha) return b.fecha - a.fecha;
  return b.monto - a.monto;
});

// Videos
const videosData = [
  { url: "https://www.youtube.com/watch?v=4Ph5ZhSizh8", titulo: "FEMUCOS muestra preocupación por aumento en muertes de mujeres", fecha: "2026" },
  { url: "https://www.youtube.com/shorts/kCRBCTF6XY4", titulo: "Café Paradero", fecha: "2025" },
  { url: "https://youtube.com/shorts/UKU0S8u2ruE?si=26pZkpt7w_g2Qp_Q", titulo: "Más independiente", fecha: "2026" },
  { url: "https://www.youtube.com/embed/K8IXvDBhaPI", titulo: "Mujeres de la costa de Montecristi beneficiadas con el proyecto CEPOCS y Manos Unidas", fecha: "2026" },
  { url: "https://www.youtube.com/embed/lKwXbkYBCCc", titulo: "Cierre proyecto ejecutado por CEPOCS, beneficiaria FEMUCOS, financiado por fondos Canadá", fecha: "2026" },
  { url: "https://www.youtube.com/embed/zExraq8ixHY", titulo: "Proyecto CEPOCS - 15 de diciembre de 2025", fecha: "2025" },
  { url: "https://www.youtube.com/embed/rc-8jl9uvOI", titulo: "Proyecto fondo Canadá, ejecutado por CEPOCS, beneficiaria FEMUCOS. Cordillera Septentrional", fecha: "2026" },
  { url: "https://www.youtube.com/embed/C9UHnD88mFw", titulo: "Oficina provincial Valverde de Medio Ambiente, dio inicio a la amplia jornada", fecha: "2024" },
  { url: "https://www.youtube.com/embed/CZwkFqQhOZU", titulo: "CEPOCS, FEMUCOS y AMNA abren oficinas en Navarrete", fecha: "2026" }
];
videosData.sort((a,b) => b.fecha - a.fecha);

// Fotos
const fotosBase = [
  { src: "https://i.postimg.cc/zDHRSgjS/IMG-20230418-151548891.jpg", alt: "Actividad CEPOCS" },
  { src: "https://i.postimg.cc/yYPmwNKv/Captura-de-pantalla-2026-05-22-235256.png", alt: "Captura de pantalla proyecto CEPOCS" },
  { src: "https://i.postimg.cc/Xvsm8HHg/IMG-20260520-WA0001.jpg", alt: "Imagen CEPOCS 2026" },
  { src: "https://i.postimg.cc/xj6FHB6j/IMG-20230419-103850818.webp", alt: "Mujeres rurales procesando café" },
  { src: "https://i.postimg.cc/JhX95KGb/IMG-20241128-WA0063.jpg", alt: "Actividad comunitaria" },
  { src: "https://i.postimg.cc/Mp3Qmbhd/IMG-20221027-131155256.webp", alt: "Producción agrícola" },
  { src: "https://i.postimg.cc/C5vhpJCb/IMG-20230416-115152619.jpg", alt: "Taller comunitario" },
  { src: "https://i.postimg.cc/cHS4Rv46/IMG-20250117-WA0001.jpg", alt: "Reunión con mujeres rurales" },
  { src: "https://i.postimg.cc/GmTc6F4P/IMG-20230418-161547348.webp", alt: "Capacitación agroecológica" },
  { src: "https://i.postimg.cc/d0MqFhCW/IMG-20230418-113445457.webp", alt: "Trabajo en el campo" },
  { src: "https://i.postimg.cc/ZKMbf7KM/IMG-20230416-121658195.jpg", alt: "Mujeres con herramientas" },
  { src: "https://i.postimg.cc/6q992F6P/Whats-App-Image-2026-05-15-at-17-12-35.jpg", alt: "Proyecto de café" },
  { src: "https://i.postimg.cc/cCssgP1D/Whats-App-Image-2026-05-15-at-17-13-48.jpg", alt: "Equipo de trabajo" },
  { src: "https://i.postimg.cc/L6QH5yc3/Whats-App-Image-2026-05-15-at-17-15-40.jpg", alt: "Procesamiento de cacao" },
  { src: "https://i.postimg.cc/ZKsTnfGM/Whats-App-Image-2026-05-15-at-17-15-42.jpg", alt: "Mujeres productoras" },
  { src: "https://i.postimg.cc/HsvpnZGm/Whats-App-Image-2026-05-15-at-17-15-43.jpg", alt: "Capacitación en campo" },
  { src: "https://i.postimg.cc/mk8TQVtw/Whats-App-Image-2026-05-15-at-17-15-44.jpg", alt: "Equipo de CEPOCS" },
  { src: "https://i.postimg.cc/jjpxcbtv/IMG-20220527-WA0014.jpg", alt: "Actividad de formación" },
  { src: "https://i.postimg.cc/5tY980dF/IMG-20230418-115613812.webp", alt: "Huerto agroecológico" },
  { src: "https://i.postimg.cc/jSkdWf9J/IMG-20230418-120706993.webp", alt: "Aplicación de bioinsumos" },
  { src: "https://i.postimg.cc/jjwqy50z/IMG-20230418-132913262.webp", alt: "Mujeres rurales" },
  { src: "https://i.postimg.cc/Pqpf1xsS/IMG-20230418-164600436.webp", alt: "Proyecto comunitario" },
  { src: "https://i.postimg.cc/6p157ZSK/IMG-20230418-172722096.webp", alt: "Cierre de actividad" },
  { src: "https://i.postimg.cc/N0SYD5s4/IMG-20230418-171802665.jpg", alt: "Evento comunitario" },
  { src: "https://i.postimg.cc/15bt7SvP/Whats-App-Image-2026-05-18-at-20-32-27.jpg", alt: "Actividad reciente CEPOCS" },
  { src: "https://i.postimg.cc/tC8TvbBp/Whats-App-Image-2026-05-18-at-20-32-25.jpg", alt: "Taller participativo" },
  { src: "https://i.postimg.cc/Gh62gRXb/Whats-App-Image-2026-05-18-at-20-32-25s.jpg", alt: "Actividad CEPOCS" }
];

// Renderizado de Proyectos
function renderProyectos(limit) {
  const container = document.getElementById('proyectosContainer');
  if (!container) return;
  container.innerHTML = '';
  const mostrar = proyectosData.slice(0, limit);
  mostrar.forEach(p => {
    const card = document.createElement('div'); card.className = 'proyecto-card';
    card.innerHTML = `<div class="proyecto-header"><h3>${p.titulo}</h3><div class="proyecto-fecha">${p.fecha} | ${p.monto.toLocaleString('es-ES')} €</div></div><div class="proyecto-info"><p><strong>Localización:</strong> ${p.localizacion}</p><p><strong>Resumen:</strong> ${p.resumen}</p><div class="entidades-participantes"><strong>ENTIDADES PARTICIPANTES:</strong>${p.entidades}</div></div>`;
    container.appendChild(card);
  });
}
let proyectosLimit = 5;
renderProyectos(proyectosLimit);
const toggleProy = document.getElementById('toggleProyectosBtn');
if (toggleProy) {
  toggleProy.textContent = 'Ver más';
  toggleProy.onclick = () => {
    if (proyectosLimit === 5) { proyectosLimit = proyectosData.length; renderProyectos(proyectosLimit); toggleProy.textContent = 'Ver menos'; }
    else { proyectosLimit = 5; renderProyectos(proyectosLimit); toggleProy.textContent = 'Ver más'; }
  };
}

// Renderizado de Fotos
function renderFotos(limit) {
  const container = document.getElementById('galeriaGrid');
  if (!container) return;
  container.innerHTML = '';
  const mostrar = fotosBase.slice(0, limit);
  mostrar.forEach(f => {
    const div = document.createElement('div'); div.className = 'foto-card';
    const img = document.createElement('img'); img.src = f.src; img.alt = f.alt; img.loading = 'lazy';
    div.appendChild(img); container.appendChild(div);
  });
}
let fotosLimit = 4;
renderFotos(fotosLimit);
const toggleFotos = document.getElementById('toggleFotosBtn');
if (toggleFotos) {
  toggleFotos.textContent = 'Ver más';
  toggleFotos.onclick = () => {
    if (fotosLimit === 4) { fotosLimit = fotosBase.length; renderFotos(fotosLimit); toggleFotos.textContent = 'Ver menos'; }
    else { fotosLimit = 4; renderFotos(fotosLimit); toggleFotos.textContent = 'Ver más'; }
  };
}

// Renderizado de Videos
function renderVideos(limit) {
  const container = document.getElementById('videosGrid');
  if (!container) return;
  container.innerHTML = '';
  const mostrar = videosData.slice(0, limit);
  mostrar.forEach(v => {
    let embedUrl = v.url;
    if (v.url.includes('watch?v=')) embedUrl = v.url.replace('watch?v=', 'embed/');
    else if (v.url.includes('youtu.be/')) embedUrl = v.url.replace('youtu.be/', 'www.youtube.com/embed/');
    else if (v.url.includes('shorts/')) embedUrl = v.url.replace('shorts/', 'embed/');
    const card = document.createElement('div'); card.className = 'video-card';
    card.innerHTML = `<div class="video-container"><iframe src="${embedUrl}" title="${v.titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div><div class="video-info"><h4>${v.titulo}</h4><div class="video-date">${v.fecha}</div></div>`;
    container.appendChild(card);
  });
}
let videosLimit = 3;
renderVideos(videosLimit);
const toggleVideos = document.getElementById('toggleVideosBtn');
if (toggleVideos) {
  toggleVideos.textContent = 'Ver más';
  toggleVideos.onclick = () => {
    if (videosLimit === 3) { videosLimit = videosData.length; renderVideos(videosLimit); toggleVideos.textContent = 'Ver menos'; }
    else { videosLimit = 3; renderVideos(videosLimit); toggleVideos.textContent = 'Ver más'; }
  };
}

// Lightbox para Galería
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
let currentPhotoIndex = 0;
function openLightbox(index) { currentPhotoIndex = index; lightboxImg.src = fotosBase[currentPhotoIndex].src; lightbox.classList.add('active'); }
function closeLightbox() { lightbox.classList.remove('active'); }
function nextPhoto() { currentPhotoIndex = (currentPhotoIndex + 1) % fotosBase.length; lightboxImg.src = fotosBase[currentPhotoIndex].src; }
function prevPhoto() { currentPhotoIndex = (currentPhotoIndex - 1 + fotosBase.length) % fotosBase.length; lightboxImg.src = fotosBase[currentPhotoIndex].src; }
document.addEventListener('click', (e) => { 
  const fotoCard = e.target.closest('.foto-card');
  if (fotoCard) { 
    const idx = Array.from(document.querySelectorAll('.foto-card')).indexOf(fotoCard); 
    if (idx !== -1) openLightbox(idx); 
  } 
});
const closeLightboxBtn = document.querySelector('.close-lightbox');
if (closeLightboxBtn) closeLightboxBtn.onclick = closeLightbox;
const navNext = document.querySelector('.nav-next');
const navPrev = document.querySelector('.nav-prev');
if (navNext) navNext.onclick = nextPhoto;
if (navPrev) navPrev.onclick = prevPhoto;
if (lightbox) lightbox.onclick = (e) => { if (e.target === lightbox) closeLightbox(); };


// ==========================================
// CONTROL DEL MENÚ MÓVIL (Sincronizado al 100% con CSS)
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const navLinksMenu = document.getElementById('navLinks');

if (menuToggle && navLinksMenu) {
  // 1. Abrir/cerrar el menú principal al pulsar el botón hamburguesa
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinksMenu.classList.toggle('show');
  });

  // 2. Control inteligente de clics en los enlaces del menú
  navLinksMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      // Detectamos dinámicamente si el CSS tiene el modo móvil activo (botón hamburguesa visible)
      const esModoMovil = window.getComputedStyle(menuToggle).display !== 'none';

      if (esModoMovil) {
        // Caso A: Si es el elemento padre 'MULTIMEDIA' (tiene la clase dropdown)
        if (link.parentElement.classList.contains('dropdown')) {
          e.preventDefault(); 
          e.stopPropagation();
          
          const parent = link.parentElement;
          // Alternamos la apertura del submenú
          parent.classList.toggle('active');
          
          // Cerramos cualquier otro submenú abierto por seguridad
          document.querySelectorAll('.dropdown').forEach(d => {
            if (d !== parent) d.classList.remove('active');
          });
        } 
        // Caso B: Si es un enlace normal (Inicio, Proyectos, Fotos, Videos...)
        else {
          navLinksMenu.classList.remove('show'); // Cerramos el menú lateral completo
          document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active')); // Limpiamos estados
        }
      }
    });
  });

  // 3. Cerrar el menú automáticamente si se hace clic en cualquier parte fuera de él
  document.addEventListener('click', (e) => {
    const esModoMovil = window.getComputedStyle(menuToggle).display !== 'none';
    if (esModoMovil && !navLinksMenu.contains(e.target) && e.target !== menuToggle) {
      navLinksMenu.classList.remove('show');
      document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
    }
  });
}


// Botón Scroll Top
const scrollTopBtn = document.createElement('div'); scrollTopBtn.className = 'scroll-top'; scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'; document.body.appendChild(scrollTopBtn);
window.addEventListener('scroll',()=>{if(window.scrollY>300)scrollTopBtn.classList.add('show');else scrollTopBtn.classList.remove('show');});
scrollTopBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// Cookies y Año actual
document.getElementById('currentYear').innerHTML = new Date().getFullYear();
const cookieBanner = document.getElementById('cookieBanner');
const acceptBtn = document.getElementById('acceptCookies');
function setCookie(n,v,d){let e=new Date();e.setTime(e.getTime()+d*24*60*60*1000);document.cookie=`${n}=${v}; expires=${e.toUTCString()}; path=/; SameSite=Lax`;}
function getCookie(n){let e=document.cookie.match(new RegExp('(^| )'+n+'=([^;]+)'));return e?e[2]:null;}
if(cookieBanner) {
  if(!getCookie('cookiesAccepted')) cookieBanner.classList.remove('hide'); else cookieBanner.classList.add('hide');
  if(acceptBtn) acceptBtn.addEventListener('click',()=>{setCookie('cookiesAccepted','true',30);cookieBanner.classList.add('hide');});
}

// Ventana Modal de Privacidad
const privacyLink = document.getElementById('privacyLink');
const cookiePrivacyLink = document.getElementById('cookiePrivacyLink');
function showPrivacyModal() {
  let m = document.createElement('div');
  m.id = 'privacyModal';
  m.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:2000;display:flex;justify-content:center;align-items:center;';
  m.innerHTML = `<div style="background:white;max-width:500px;padding:1.5rem;border-radius:28px;position:relative;margin:20px;"><button id="closePrivacyModal" style="position:absolute;top:10px;right:15px;background:none;border:none;font-size:1.8rem;cursor:pointer;">&times;</button><h3 style="color:var(--verde);margin-bottom:1rem;">Política de Privacidad</h3><p style="font-size:0.85rem;text-align:justify;">En CEPOCS nos comprometemos a proteger sus datos personales. La información recopilada a través de nuestro formulario de contacto se utiliza únicamente para responder a sus consultas y no será compartida con terceros sin su consentimiento explícito. Puede solicitar la rectificación o eliminación de sus datos escribiendo a cepocscordillera@gmail.com. Este sitio web no utiliza cookies de seguimiento ni fines publicitarios, solo las necesarias para su funcionamiento (como la aceptación de cookies). Al usar este sitio, usted acepta nuestra política de privacidad.</p><p style="margin-top:1rem;font-size:0.75rem;">Última actualización: mayo de 2026.</p></div>`;
  document.body.appendChild(m);
  document.getElementById('closePrivacyModal').addEventListener('click', () => m.remove());
}
if (privacyLink) privacyLink.addEventListener('click', (e) => { e.preventDefault(); showPrivacyModal(); });
if (cookiePrivacyLink) cookiePrivacyLink.addEventListener('click', (e) => { e.preventDefault(); showPrivacyModal(); });
