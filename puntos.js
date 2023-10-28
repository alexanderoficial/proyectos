document.addEventListener("DOMContentLoaded", function() {
  const puntos = document.querySelectorAll("#puntos li");
  let currentIndex = 0;

  function showPoint(index) {
    puntos.forEach(punto => punto.style.opacity = 0.3); // Establece la opacidad en 0.3 para todos
    puntos[index].style.opacity = 1; // Establece la opacidad en 1 para el punto actual
  }

  function changePoint() {
    currentIndex = (currentIndex + 1) % puntos.length;
    showPoint(currentIndex);
  }

  showPoint(currentIndex);
  setInterval(changePoint, 3000); // Cambia cada 3 segundos
});
