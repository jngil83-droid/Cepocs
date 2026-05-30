  // ===== MENÚ DESPLEGABLE MEJORADO (móvil + escritorio) =====
  const menuToggle = document.getElementById('menuToggle');
  const navLinksMenu = document.getElementById('navLinks');
  
  if(menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinksMenu.classList.toggle('show');
    });
  }
  
  // Manejo de dropdowns en móvil (click, no hover)
  document.querySelectorAll('.dropdown > a').forEach(dropdownLink => {
    dropdownLink.addEventListener('click', (e) => {
      if (window.innerWidth <= 760) {
        e.preventDefault();
        const parent = dropdownLink.parentElement;
        // Cerrar otros dropdowns abiertos
        document.querySelectorAll('.dropdown').forEach(d => {
          if (d !== parent) d.classList.remove('active');
        });
        parent.classList.toggle('active');
      }
    });
  });
  
  // Cerrar menú móvil al hacer clic en un enlace (navegación)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      // Si es un enlace normal (no dropdown en móvil)
      if (window.innerWidth <= 760) {
        // Cerrar el menú principal
        navLinksMenu.classList.remove('show');
        // Si es un enlace que no es el padre de un dropdown, también cerramos dropdowns
        const parentDropdown = link.closest('.dropdown');
        if (parentDropdown && link.getAttribute('href') && link.getAttribute('href') !== '#') {
          parentDropdown.classList.remove('active');
        }
      }
    });
  });
  
  // Cerrar menú móvil al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 760 && navLinksMenu.classList.contains('show')) {
      if (!e.target.closest('nav')) {
        navLinksMenu.classList.remove('show');
      }
    }
  });
  
  // Cerrar dropdowns en móvil si se redimensiona a escritorio
  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) {
      document.querySelectorAll('.dropdown.active').forEach(d => {
        d.classList.remove('active');
      });
    }
  });
