// =======================================================
// 📰 MOTOR DE LECTURA PARA DECAP CMS (Formatos JSON)
// =======================================================

document.addEventListener("DOMContentLoaded", () => {
  const gridNoticias = document.getElementById("grid-noticias");
  const vistaListado = document.getElementById("vista-listado");
  const vistaDetalle = document.getElementById("vista-nav-detalle");

  // Elementos de la pantalla de detalle
  const detalleTitulo = document.getElementById("detalle-titulo");
  const detalleFecha = document.getElementById("detalle-fecha");
  const detalleAutor = document.getElementById("detalle-autor");
  const detalleImagen = document.getElementById("detalle-imagen");
  const detalleCuerpo = document.getElementById("detalle-cuerpo");

  if (!gridNoticias) return;

  // Ruta hacia la carpeta interna donde Decap CMS guardará las noticias
  const URL_API_GITHUB = "https://api.github.com/repos/jngil83-droid/Cepocs/contents/content/noticias";

  // Llamar a la API de GitHub para listar los archivos de noticias
  fetch(URL_API_GITHUB)
    .then(response => {
      if (!response.ok) throw new Error("Aún no se han creado noticias.");
      return response.json();
    })
    .then(archivos => {
      gridNoticias.innerHTML = ""; // Limpiar el "Cargando..."

      // Filtrar únicamente los archivos que terminen en .json
      const archivosValidos = archivos.filter(file => file.name.endsWith('.json'));

      if (archivosValidos.length === 0) {
        gridNoticias.innerHTML = "<p style='text-align:center; grid-column:1/-1; color:#666;'>No hay noticias publicadas todavía.</p>";
        return;
      }

      // Descargar el contenido de cada archivo JSON encontrado
      archivosValidos.forEach(archivo => {
        fetch(archivo.download_url)
          .then(res => res.json())
          .then(noticia => {
            crearTarjeta(noticia);
          })
          .catch(err => console.error("Error al leer la noticia individual:", err));
      });
    })
    .catch(error => {
      console.error(error);
      gridNoticias.innerHTML = "<p style='text-align:center; grid-column:1/-1; color:#666;'>No hay noticias publicadas todavía.</p>";
    });

  // Función para construir la tarjeta visual de la noticia
  function crearTarjeta(noticia) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "noticia-card";
    
    // Estilos base para que luzcan profesionales en cuadrícula
    tarjeta.style.cssText = "border: 1px solid #eee; border-radius: 8px; overflow: hidden; background: #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.05); display: flex; flex-direction: column; cursor: pointer; transition: transform 0.2s;";

    // Si no hay imagen, pone una por defecto
    const imgUrl = noticia.imagen || 'https://via.placeholder.com/600x400?text=CEPOCS';

    tarjeta.innerHTML = `
      <img src="${imgUrl}" alt="${noticia.titulo}" style="width:100%; height:200px; object-fit:cover;">
      <div style="padding: 15px; flex-grow: 1; display: flex; flex-direction: column; font-family: 'Inter', sans-serif;">
        <span style="font-size: 0.8rem; color: #888; margin-bottom: 5px;">${noticia.fecha ? formatearFecha(noticia.fecha) : ''}</span>
        <h3 style="margin: 0 0 10px 0; color: #2e7d32; font-family: 'Work Sans', sans-serif; font-size: 1.2rem; line-height: 1.4;">${noticia.titulo}</h3>
        <p style="margin: 0 0 15px 0; color: #555; font-size: 0.95rem; line-height: 1.5;">${noticia.resumen || ''}</p>
        <span style="margin-top: auto; color: #2e7d32; font-weight: 600; font-size: 0.9rem;">Leer más →</span>
      </div>
    `;

    // Evento al pulsar en la tarjeta para abrir la vista completa
    tarjeta.addEventListener("click", () => {
      detalleTitulo.textContent = noticia.titulo;
      detalleFecha.textContent = noticia.fecha ? formatearFecha(noticia.fecha) : '';
      detalleAutor.textContent = noticia.autor || "Equipo CEPOCS";
      detalleImagen.src = imgUrl;
      detalleImagen.alt = noticia.titulo;
      
      // Convierte los saltos de línea del texto en párrafos HTML reales
      detalleCuerpo.innerHTML = (noticia.cuerpo || "").split("\n").map(p => `<p style='margin-bottom:15px; text-align:justify;'>${p}</p>`).join("");

      // Alternar las vistas
      vistaListado.classList.add("hidden");
      vistaDetalle.classList.remove("hidden");
      window.scrollTo(0, 0); // Sube el scroll automáticamente
    });

    gridNoticias.appendChild(tarjeta);
  }

  function formatearFecha(fechaStr) {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fechaStr).toLocaleDateString('es-ES', opciones);
  }
});

// Función global para el botón "Volver"
window.volverAlListado = function() {
  document.getElementById('vista-nav-detalle').classList.add('hidden');
  document.getElementById('vista-listado').classList.remove('hidden');
}