// seleccionar elemento por su clase

const header = document.getElementsByClassName(`header`);
console.log(header);

const hero = document.getElementsByClassName(`hero`);
console.log(hero);

// Si la clase existe más de una ves 
const contenedores = document.getElementsByClassName(`contenedor`);
console.log(contenedores);

// Si no existe
const noExiste = document.getElementsByClassName(`NO_EXISTEN`);
console.log(noExiste);