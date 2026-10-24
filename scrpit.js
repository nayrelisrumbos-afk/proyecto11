// Buscamos el aviso y el botón en el HTML
var aviso = document.getElementById("aviso-cookies");
var boton = document.getElementById("boton-aceptar");

//  Revisamos si el usuario ya había aceptado las cookies antes
if (localStorage.getItem("cookies-aceptadas") == "si") {
    // Si ya aceptó, le ponemos la clase "oculto" para que no se vea
    aviso.classList.add("oculto");
}

//  Cuando el usuario hace clic en el botón "Aceptar"
boton.onclick = function() {
    // Ocultamos el aviso
    aviso.classList.add("oculto");
    
    // Guardamos en el navegador que ya aceptó (para que no vuelva a salir)
    localStorage.setItem("cookies-aceptadas", "si");
};