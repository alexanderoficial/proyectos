document.addEventListener("DOMContentLoaded", function() {
  const points = document.querySelectorAll(".point");
  let currentIndex = 0;

  function showPoint(index) {
    points.forEach(point => point.classList.remove("active"));
    points[index].classList.add("active");
  }

  function changePoint() {
    currentIndex = (currentIndex + 1) % points.length;
    showPoint(currentIndex);
  }

  showPoint(currentIndex);
  setInterval(changePoint, 3000); // Cambia cada 3 segundos
});
