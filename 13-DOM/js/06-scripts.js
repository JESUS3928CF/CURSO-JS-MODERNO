let encabezado = document.querySelector(`.contenido-hero h1`).textContent;
console.log(encabezado);


// console.log(encabezado.innerText);  // sI EN EL CSS -visibility: hidden; no lo va a encontrar 
// console.log(encabezado.textContent); // Si lo va a encontrar
// console.log(encabezado.innerHTML); // se trae el HTML completo 

// encabezado = "Nuevo heading";
// document.querySelector(`.contenido-hero h1`).textContent = encabezado;
// console.log(encabezado);

const imagen = document.querySelector(".card img");
console.log(imagen);
imagen.src = "img/hacer2.jpg";

const titulillos = document.querySelector(".info .titulo ");
titulillos.textContent = "Jesús cf"