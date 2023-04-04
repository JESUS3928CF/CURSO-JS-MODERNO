const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");
// let contador = 0;

btnFlotante.addEventListener("click", () => {
    // alert("Diste click en el botón")
    if (footer.classList.contains("activo")) {
        footer.classList.remove("activo");
        btnFlotante.classList.remove("activo");
        btnFlotante.textContent = 'Idioma y Moneda';
    }else{
        footer.classList.add('activo');
        btnFlotante.classList.add("activo");
        btnFlotante.textContent = 'X Cerrar';
    }

    // if(contador % 2 == 0){
    // footer.classList.add('activo');
    // }else{
    //      footer.classList.remove("activo");
    // }
    // ++contador;
    // console.log(contador);
});