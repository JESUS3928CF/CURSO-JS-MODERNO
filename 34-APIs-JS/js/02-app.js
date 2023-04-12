document.addEventListener("DOMContentLoaded",() => {

    //- Crear el IntersectionObserver
    const observer = new IntersectionObserver( (entries) => {
        if(entries[0].isIntersecting){
            console.log("Ya esta visible");
        }
    });

    //- Observar el elemento
    //- observe se encarga de rastreara el elemento seleccionado
    observer.observe(document.querySelector(".premium"));
});