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


const juegos = document.querySelectorAll(".cajas-juegos");
juegos.forEach(juego => {
    juego.addEventListener("click", function() {
        const gameId = juego.id;
        redirectToSteamGame(gameId);
    });
});

function redirectToSteamGame(gameId) {
    const gameLinks = {
        "SF6": "https://store.steampowered.com/app/1364780/Street_Fighter_6/",
        "MK11": "https://store.steampowered.com/app/976310/Mortal_Kombat11/",
        "IN2": "https://store.steampowered.com/app/627270/Injustice_2/?l=spanish",
        "DBZF": "https://store.steampowered.com/app/678950/DRAGON_BALL_FighterZ/",
        "KOFXV": "https://store.steampowered.com/app/1498570/THE_KING_OF_FIGHTERS_XV/",

        "STV": "https://store.steampowered.com/app/310950/Street_Fighter_V/",
        "KOFXVIII": "https://store.steampowered.com/app/222940/THE_KING_OF_FIGHTERS_XIII_STEAM_EDITION/",
        "GGXR2": "https://store.steampowered.com/app/520440/GUILTY_GEAR_Xrd_REV_2/",
        "MVC2": "https://store.steampowered.com/app/357190/ULTIMATE_MARVEL_VS_CAPCOM_3/",
        "MKX": "https://store.steampowered.com/app/307780/Mortal_Kombat_X/"
    };
    const gameLink = gameLinks[gameId];
    
    if (gameLink) {
        window.open(gameLink, "_blank");
    } else {
        console.error("No se encontró el enlace para el juego con ID:", gameId);
    }
}