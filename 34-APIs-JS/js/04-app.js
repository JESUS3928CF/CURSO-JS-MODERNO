const abrirBtn = document.querySelector('#abrir-pantalla-completa');

const salirBtn = document.querySelector('#salir-pantalla-completa');


abrirBtn.addEventListener('click', abrirPantallaCompleta);

salirBtn.addEventListener('click', salirPantallaCompleta);

function abrirPantallaCompleta() {
    /// Se pueden poner en pantalla completa imágenes o videos también 
    /// requestFullscreen(); para poner la pagina en pantalla completa
    document.documentElement.requestFullscreen();
}

function salirPantallaCompleta() {
    document.exitFullscreen();
}