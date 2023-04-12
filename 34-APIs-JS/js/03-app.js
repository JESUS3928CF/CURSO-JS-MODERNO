/// Eventos que detectan el estado de la conexión 
window.addEventListener("online", actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    /// navigator me dice si  hay internet o no
    if (navigator.onLine) {
        console.log("Si estas conectado");
    } else {
        console.log("No estas conectado");
    }
}