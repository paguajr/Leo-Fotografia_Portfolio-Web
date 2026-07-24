document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".fade-in-scroll, .fade-in-left");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // deja de observar una vez mostrada
      }
    });
  }, {
    threshold: 0.15 // se activa cuando el 15% de la imagen es visible
  });

  elementos.forEach(el => observer.observe(el));
});