const navegación = document.querySelector(".navegacion");
const card = document.querySelector('.card'); 

/// Trae todos los elementos incluso los espacios en blanco se convierten en elementos 
console.log(navegación.childNodes); //* Retorna un  NodeList (array) con todos los elementos de navegación 


//! Recomendado
/// Genera un HTML COLLECTION (array) con todos los elementos reales del elemento seleccionado
console.log(navegación.children); //! Muy utilizado
console.log(navegación.children[3]); //* lista el tercer elemento

console.log(navegación.children[3].nodeName); //* lista el tipo de etiqueta
console.log(navegación.children[3].nodeType); //* tipo de elemento daca node puede tener diferentes funciones

console.log(navegación.firstElementChild); /// Accede al primer elemento
console.log(navegación.lastElementChild); /// Accede al ultimo elemento



console.log(card.children);

/// Navegar del padre al hijo
card.children[1].children[1].textContent = "Nuevo heading desde traversing de dom"; //* accede a su tataranieto 
card.children[0].src = 'img/hacer3.jpg';

/// Traversing del hijo al padre
console.log(card.parentElement.parentElement.parentElement);

/// Trae todos los elementos del padre 
console.log(card.parentNode); //* no recomendado
console.log(card.parentElement); //! Recomendado


/// Traversing de hermanos
console.log(card.nextElementSibling.nextElementSibling); //* Selecciona el siguiente elemento hermano


const ultimoCard = document.querySelector(".card:nth-child(4)"); //* Selecciona el cuarto hijo
console.log(ultimoCard.previousElementSibling); //* Selecciona el elemento hermano anterior 