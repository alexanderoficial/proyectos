document.addEventListener("DOMContentLoaded", function() {
  const projectThumbnails = document.querySelectorAll(".project-thumbnail");
  const projectViewer = document.querySelector(".project-viewer");

  projectThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function() {
      // Lógica para cargar y mostrar el proyecto completo
      // Esto podría implicar cargar contenido adicional o redirigir a la página completa del proyecto.
      // Aquí, puedes usar AJAX para cargar el contenido del proyecto.
      projectViewer.innerHTML = `Proyecto ${thumbnail.id} seleccionado.`;
    });
  });
});
