fetch('/src/components/header/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
  })
  .catch(error => console.error('Error cargando el header:', error));

fetch('/src/components/footer/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  })
  .catch(error => console.error('Error cargando el footer:', error));

  const scrollToTopButton = document.getElementById('scrollToTop');

  // Mostrar u ocultar el botón dependiendo del scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Mostrar si se ha desplazado más de 200px
      scrollToTopButton.classList.add('show');
      scrollToTopButton.classList.remove('hide');
    } else {
      scrollToTopButton.classList.add('hide');
      scrollToTopButton.classList.remove('show');
    }
  });
  
  // Desplazar hacia arriba al hacer clic
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Scroll suave
    });
  });