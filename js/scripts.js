/* scripts.js */
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");
  if (formulario) {
    formulario.addEventListener("submit", function(e) {
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      // if (nombre.length < 2 || !email.includes("@") || mensaje.length < 2) {
      //   alert("Por favor, completa correctamente todos los campos.");
      //   e.preventDefault();
      // }

      if (nombre.length < 2) {
        alert("El nombre debe tener al menos 2 caracteres.");
        e.preventDefault();
      } else if (!email.includes("@")) {
        alert("Por favor, introduce un email válido.");
        e.preventDefault();
      } else if (mensaje.length < 2) {
        alert("El mensaje debe tener al menos 2 caracteres.");
        e.preventDefault();
      }
    });
  }

  // Documentación de interacciones
  document.querySelectorAll("nav a").forEach(el => {
    el.addEventListener("mouseenter", () => {
      const tip = document.createElement("div");
      tip.textContent = `Navega a ${el.textContent}`;
      tip.style.position = "absolute";
      tip.style.background = "black";
      tip.style.color = "white";
      tip.style.padding = "5px";
      tip.style.fontSize = "0.8rem";
      tip.style.zIndex = 9999;
      tip.style.top = `${el.getBoundingClientRect().top + 25}px`;
      tip.style.left = `${el.getBoundingClientRect().left}px`;
      tip.classList.add("tooltip-temp");
      document.body.appendChild(tip);
      setTimeout(() => tip.remove(), 2000);
    });
  });
});