document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
  
    // Verificar si el contenedor de la galería existe
    if (!gallery) {
      console.error("No se encontró el contenedor 'gallery'. Asegúrate de que esté en el HTML.");
      return;
    }
  
    // Lista de carteles (títulos, descripciones y nombres de imagen)
    const posters = [
      { title: "Cartel 1", description: "Descripción del Cartel 1", image: "ejemplo.webp" }
      // Agrega más carteles si es necesario
    ];
  
    // Crear las tarjetas dinámicamente
    posters.forEach((poster, index) => {
      const col = document.createElement("div");
      col.className = "col";
  
      col.innerHTML = `
        <div class="card border border-dark">
          <img src="/src/img/carteles/${poster.image}" class="card-img-top" alt="${poster.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${poster.title}</h5>
            <p class="card-text">${poster.description}</p>
            <a href="vote.html?poster=${index}" class="button">Votar</a>

          </div>
        </div>
      `;
      gallery.appendChild(col);
    });
  
    // Manejar el evento de votar
    gallery.addEventListener("click", (event) => {
      if (event.target.classList.contains("vote-btn")) {
        const index = event.target.getAttribute("data-index");
        alert(`Has votado por el cartel: ${index + 1}`);
      }
    });
  });