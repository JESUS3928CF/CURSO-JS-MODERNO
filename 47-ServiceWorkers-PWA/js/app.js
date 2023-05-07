if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./sw.js')
        .then((register) => console.log('Se instalo correctamente', register))
        .catch((error) => console.log('Fallo la instalación...', error));
} else {
    console.log('Service worker no soportado');
}
