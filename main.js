const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Control del menú principal (Tres rayas)
menuToggle.addEventListener('click', () => {
  if (navLinks.style.display === 'block') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'block';
  }
});

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