document.addEventListener('DOMContentLoaded', function () {
  const mostrarBarra = document.getElementById('mostrar-barra');
  const barraOculta = document.getElementById('barra-ocultos');

  mostrarBarra.addEventListener('click', function (event) {
    event.preventDefault(); // Evitar que el enlace redirija

    if (barraOculta.style.display === 'none' || barraOculta.style.display === '') {
      barraOculta.style.display = 'block'; // Mostrar la barra
    } else {
      barraOculta.style.display = 'none'; // Ocultar la barra
    }
  });
});
