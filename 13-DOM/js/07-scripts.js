const encabezado = document.querySelector("h1");

/// Modificar propiedades directamente desde JS
//* Las mismas propiedad que hay en CSS se encuentran en js ---
//* con la diferencia de que no llevan el - y tienen que ser en MAYÚSCULAS
encabezado.style.backgroundColor = "red";
encabezado.style.fontFamily = "Helvetica";
encabezado.style.fontSize = "30px";
encabezado.style.textTransform = "uppercase";

//! Recomendado Implementar css desde clases
/// Agregar y eliminar Clases de estilos a los elementos seleccionados
const card = document.querySelector('.card');
card.classList.add('nueva-clase', "segunda-clase");
card.classList.remove("segunda-clase");
console.log(card);