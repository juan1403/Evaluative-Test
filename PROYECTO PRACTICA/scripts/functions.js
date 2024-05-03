document.addEventListener('input', function(event) {
    if (event.target.classList.contains('filtro')) {
        const filtro = event.target.value.trim().toLowerCase();
        const select = event.target.nextElementSibling;
        const opciones = select.options;

        for (let i = 0; i < opciones.length; i++) {
            const textoOpcion = opciones[i].textContent.toLowerCase();
            if (textoOpcion.includes(filtro)) {
                opciones[i].selected = true;
            } else {
                opciones[i].selected = false;
            }
        }
    }
});


