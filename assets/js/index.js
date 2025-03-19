 // JavaScript para el menú móvil
 document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.Header__burger');
    const nav = document.querySelector('.Header__navigation');
    const menuItems = document.querySelectorAll('.Menu__link');
    
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
  });
      
      
      // Inicializar las imágenes con efecto hover
      const images = document.querySelectorAll('.Article__picture img');
      images.forEach(img => {
        img.addEventListener('mouseenter', () => {
          img.style.transform = 'scale(1.05)';
        });
        img.addEventListener('mouseleave', () => {
          img.style.transform = 'scale(1)';
        });
      });