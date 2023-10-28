document.addEventListener('DOMContentLoaded', function() {
    var zapato = document.getElementById('zapato');
    
    zapato.addEventListener('click', function() {
        zapato.classList.add('zoomed');
    });

    zapato.addEventListener('touchstart', function() {
        zapato.classList.add('zoomed');
    });

    zapato.addEventListener('mouseleave', function() {
        zapato.classList.remove('zoomed');
    });

    zapato.addEventListener('touchend', function() {
        zapato.classList.remove('zoomed');
    });
});


