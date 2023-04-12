/// seleccionar elemento por su clase
const header = document.getElementsByClassName(`header`); //* Selecciona el elemento con la clase header 
console.log(header);

const hero = document.getElementsByClassName(`hero`);
console.log(hero);

/// Si la clase existe más de una ves Los selecciona todos
const contenedores = document.getElementsByClassName(`contenedor`);
console.log(contenedores);

/// Si no existe retorna un HTML COLLECTION (Array) vacío 
const noExiste = document.getElementsByClassName(`NO_EXISTEN`); //* No marca error
console.log(noExiste);

//! Características -- ES MUY OBSOLETA 