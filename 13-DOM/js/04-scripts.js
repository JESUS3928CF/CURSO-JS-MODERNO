//! Característica: Es el más utilizado

/// Selecciona un elemento como ( clases, id, name, tipo de elemento)
const card = document.querySelector('.card'); //* Selecciona un clase
console.log(card);

const formulario = document.querySelector('#formulario'); //* Selecciona un id
console.log(formulario);

/// Podemos tener selectores específicos como en CSS
const info = document.querySelector(".premium .info"); //* selecciona el un hijo de el div .premium

const segundoCard = document.querySelector("section.hospedaje .card:nth-child(2)"); //* Selecciona un div
console.log(segundoCard);

/// Seleccionar elementos HTML por su etiqueta  
const navegación = document.querySelector("nav");

