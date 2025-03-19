document.addEventListener("DOMContentLoaded", function() {
  const includes = document.querySelectorAll("[data-include]");
  
  // Función para cargar todos los includes
  const loadAllIncludes = async () => {
    for (const element of includes) {
      const file = element.getAttribute("data-include");
      try {
        const response = await fetch(file);
        if (response.ok) {
          element.innerHTML = await response.text();
          console.log(`Contenido de ${file} cargado correctamente`);
        } else {
          console.error(`No se pudo cargar ${file}: ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error al cargar ${file}:`, error);
      }
    }
    
    // Una vez que todos los includes están cargados, inicializa el menú móvil
    initMobileMenu();
  };
  
  // Cargar todos los includes
  loadAllIncludes();
});

// Función para inicializar el menú móvil
function initMobileMenu() {
  const burger = document.querySelector('.Header__burger');
  const nav = document.querySelector('.Header__navigation');
  const menuItems = document.querySelectorAll('.Menu__link');
  
  if (!burger || !nav) {
    console.error('Elementos del menú no encontrados');
    return;
  }
  
  // Función para alternar el menú
  function toggleMenu() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    
    // Bloquear/desbloquear scroll cuando el menú está abierto
    if (nav.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  
  // Evento para el botón hamburguesa
  burger.addEventListener('click', toggleMenu);
  
  // Cerrar menú al hacer clic en un elemento del menú
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      if (nav.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
  
  // Cerrar menú al hacer clic fuera del menú
  document.addEventListener('click', function(event) {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnBurger = burger.contains(event.target);
    
    if (nav.classList.contains('active') && !isClickInsideNav && !isClickOnBurger) {
      toggleMenu();
    }
  });
  
  // Ajustar en cambio de orientación o redimensión
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768 && nav.classList.contains('active')) {
      burger.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}