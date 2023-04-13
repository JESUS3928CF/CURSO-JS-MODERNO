const busqueda = document.querySelector(".busqueda");

//! Más común 
/// Cuando se realiza cualquier evento como escribir copiar cortar menos el blur


/// Se pasa el evento que esta sucediendo
busqueda.addEventListener('input', (e) => {
    /// Este es el evento que esta sucediendo
    console.log(e);
    /// Nos dice sobre que elemento en especifico estamos trabajando
    console.log(e.target);
    /// Nos dice el tipo de elemento
    console.log(e.type);

    /// Nos dice el valor del input - Elemento
    if (e.target.value == '') {
        console.log('Fallo la validación');
    }
});



// /// Este evento de ejecuta cuando se presiona un tecla
// busqueda.addEventListener("keydown", (e) => {
//     console.log("Techa presionada");
// })

// /// Este evento de ejecuta cuando se presiona un tecla y se suelta
// busqueda.addEventListener("keydown", (e) => {
//     console.log("Techa saltada");
// })

// /// Este evento de ejecuta cuando se entra al input y se sale
// busqueda.addEventListener("blur", (e) => {
//     console.log("Salio del input");
// })

// /// Este evento de ejecuta cuando se copia el texto
// busqueda.addEventListener("copy", (e) => {
//     console.log("Texto copiado");
// })
// /// Este evento de ejecuta cuando se corta el texto
// busqueda.addEventListener("cut", (e) => {
//     console.log("Texto copiado");
// })
// /// Este evento de ejecuta cuando se pega un texto
// busqueda.addEventListener("paste", (e) => {
//     console.log("Texto copiado");
// })



