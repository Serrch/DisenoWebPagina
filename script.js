document.addEventListener("DOMContentLoaded", function() {

    const radioButtons = document.querySelectorAll('input[name="filtro"]');
    const seccionesConceptos = document.querySelectorAll('.conceptos');

    radioButtons.forEach(function(radioButton) {
        
        radioButton.addEventListener("change", function() {
            const filtroSeleccionado = this.id;

            seccionesConceptos.forEach(function(seccion) {

                if (filtroSeleccionado === "todos") {
                    seccion.style.display = "block";
                } else {
                    seccion.style.display = (seccion.id === filtroSeleccionado) ? "block" : "none"; 
                }

            });
        });
    });
});
