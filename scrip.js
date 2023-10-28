document.addEventListener('DOMContentLoaded', function() {
    var zapato = document.getElementById('zapato');
    var sombra = document.getElementById('sombra');
    
    zapato.addEventListener('click', function() {
        zapato.classList.add('zoomed');
        sombra.classList.add('zoomed');
    });

    zapato.addEventListener('touchstart', function() {
        zapato.classList.add('zoomed');
        sombra.classList.add('zoomed');
    });

    zapato.addEventListener('mouseleave', function() {
        zapato.classList.remove('zoomed');
        sombra.classList.remove('zoomed');
    });

    zapato.addEventListener('touchend', function() {
        zapato.classList.remove('zoomed');
        sombra.classList.remove('zoomed');
    });
});
