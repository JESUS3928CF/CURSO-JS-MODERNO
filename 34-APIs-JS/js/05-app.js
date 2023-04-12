document.addEventListener("visibilitychange", () => {
    /// document.visibilityState detecta cuando la pagina ya no esta visible o cunado si lo esta 
    console.log(document.visibilityState);
});


document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible'){
        console.log('Ejecutar la función para reproducir el video');
    } else {
        console.log('Ejecutar la función para pausar el video');
    }
});

