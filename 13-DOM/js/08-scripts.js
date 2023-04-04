const navegacion = document.querySelector(".navegacion"); 
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

// console.log(navegacion.children); // los espacios en blanco son elementos 


// console.log(navegacion.children);
// console.log(navegacion.children[3]);
// console.log(navegacion.children[3].nodeName);
// console.log(navegacion.children[3].nodeType);

// const card = document.querySelector(".card");
// console.log(card.children);

// card.children[1].children[1].textContent = "Nuevo heading desde traversing de dom";

// card.children[0].src = 'img/hacer3.jpg';

// Traversing del hijo al padre
// console.log(card.parentElement.parentElement.parentElement);
// console.log(card.nextElementSibling.nextElementSibling);

// const ultimoCard = document.querySelector(".card:nth-child(4)");
// console.log(ultimoCard.previousElementSibling);