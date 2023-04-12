/// Selecciona el texto html del elemento
let encabezado = document.querySelector(`.contenido-hero h1`);

console.log(encabezado.innerText);  //* Si EN EL CSS -visibility: hidden; no lo va a encontrar 
console.log(encabezado.textContent); //* Si lo va a encontrar
console.log(encabezado.innerHTML); //* se trae el HTML completo con todas sus etiquetas

/// Remplazar texto
encabezado = "Nuevo heading";
document.querySelector(`.contenido-hero h1`).textContent = encabezado;

/// Remplazar imajen
const imagen = document.querySelector(".card img");
console.log(imagen);
imagen.src = "img/hacer2.jpg";

const titulillos = document.querySelector(".info .titulo ");
titulillos.textContent = "Jesús cf"