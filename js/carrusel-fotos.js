document.addEventListener("DOMContentLoaded", () => {
  const flechas = document.querySelectorAll(".carrusel-flecha");

  flechas.forEach((flecha) => {
    flecha.addEventListener("click", () => {
      const targetId = flecha.getAttribute("data-target");
      const carrusel = document.getElementById(targetId);
      if (!carrusel) return;

      // Desplaza aproximadamente el ancho de una foto y media
      const primeraFoto = carrusel.querySelector(".carrusel-foto");
      const distancia = primeraFoto ? primeraFoto.offsetWidth * 1.5 : 400;

      const direccion = flecha.classList.contains("carrusel-flecha-izq") ? -1 : 1;
      carrusel.scrollBy({ left: distancia * direccion, behavior: "smooth" });
    });
  });

  // Acordeón de secciones de evento (solo tiene efecto visual en mobile via CSS)
  const toggles = document.querySelectorAll(".evento-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const panelId = toggle.getAttribute("data-panel");
      const panel = document.getElementById(panelId);
      if (!panel) return;

      const abierto = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", abierto ? "false" : "true");
      panel.classList.toggle("expandido", !abierto);
    });
  });
});
