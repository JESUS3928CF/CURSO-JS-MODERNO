const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");
// let contador = 0;

btnFlotante.addEventListener("click", () => {
    // alert("Diste click en el botón")

    /// Comprobar si existe una clase en un elemento 
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


const divElement = document.querySelector('div');
const pElement = document.querySelector('p');

/// Observar o comprobar los hijos de un elemento
if (divElement.contains(pElement)) {
    console.log('El div contiene el elemento p');
} else {
    console.log('El div no contiene el elemento p');
}