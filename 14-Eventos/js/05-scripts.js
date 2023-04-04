window.addEventListener("scroll", () => {
    const premiun = document.querySelector(".premium");
    const ubicacion = premiun.getBoundingClientRect();
    // console.log(ubicacion);
    if(ubicacion.top < 784){
        console.log("El elemento ya esta visible");
    }else{
        console.log("El elemento aún no esta visible");
    }
})