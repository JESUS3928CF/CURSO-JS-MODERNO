/// Se ejecuta cuando se da scroll en la pagina 
window.addEventListener('scroll', () => {
    /// Detecta la cantidad de pixeles a la que les e dado scroll de arriba hacia abajo
    const scrollPX = window.scrollY;
    console.log(scrollPX);

    /// Detecta la cantidad de pixeles a la que les e dado scroll de derecha a izquierda
    const scrollPXX = window.scrollX;
    console.log(scrollPXX);
});





window.addEventListener("scroll", () => {
    const premium = document.querySelector(".premium");

    /// Este método tiene cucha información sobre el elemento como sus coordenadas 
    const ubicacion = premium.getBoundingClientRect();
    // console.log(ubicacion);

    /// Detecta la distancia a la que se encuentra el elemento
    if(ubicacion.top < 784){
        console.log("El elemento ya esta visible");
    }else{
        console.log("El elemento aún no esta visible");
    }
})