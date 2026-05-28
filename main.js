// ==========================================
// 1. CONTROL DEL MENÚ MÓVIL Y SUBMENÚS
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Control del menú principal (Tres rayas)
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    if (navLinks.style.display === 'block') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'block';
    }
  });
}

// Control para abrir los submenús al hacer clic en el celular
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const link = dropdown.querySelector('a');
  if (link) {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        // Si el enlace tiene un submenú desplegable debajo
        if (dropdown.querySelector('.dropdown-content')) {
          e.preventDefault();
          e.stopPropagation();
          const content = dropdown.querySelector('.dropdown-content');
          content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
      }
    });
  }
});

// TRUCO: Cerrar el menú automáticamente al pinchar en cualquier enlace final
const menuLinks = document.querySelectorAll('#navLinks a');
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Si es un enlace final (no el título del submenú), cerramos la cortina
    if (window.innerWidth <= 768 && !link.nextElementSibling) {
      navLinks.style.display = 'none';
      // Ocultamos también los submenús para que inicien cerrados la próxima vez
      document.querySelectorAll('.dropdown-content').forEach(dc => dc.style.display = 'none');
    }
  });
});


// ==========================================
// 2. SISTEMA DE CONTROL DE COOKIES (BÚSQUEDA FLEXIBLE)
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  // Buscamos el contenedor por ID o por su clase común para evitar fallos de nombre
  const cookieBanner = document.getElementById("cookie-banner") || document.querySelector(".cookie-banner") || document.querySelector("[style*='fixed'][style*='bottom']");
  
  // Buscamos el botón de aceptar (ya sea por su ID o buscando la palabra "Aceptar")
  let acceptButton = document.getElementById("accept-cookies");
  if (!acceptButton) {
    // Si no lo encuentra por ID, busca cualquier botón dentro del banner que diga "Aceptar"
    const botones = document.querySelectorAll("button, .btn, a");
    botones.forEach(btn => {
      if (btn.textContent.trim().toLowerCase().includes("aceptar")) {
        acceptButton = btn;
      }
    });
  }

  // Comprobar si el usuario ya aceptó las cookies anteriormente
  if (!localStorage.getItem("cookiesAceptadas")) {
    if (cookieBanner) {
      cookieBanner.style.setProperty("display", "block", "important"); // Muestra el cartel seguro
    }
  } else {
    if (cookieBanner) {
      cookieBanner.style.setProperty("display", "none", "important"); // Lo mantiene oculto
    }
  }

  // Acción al hacer clic en el botón "Aceptar"
  if (acceptButton) {
    acceptButton.addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.setItem("cookiesAceptadas", "true"); // Guarda la decisión en el navegador
      if (cookieBanner) {
        cookieBanner.style.setProperty("display", "none", "important"); // Esconde el cartel inmediatamente
      }
    });
  }
});