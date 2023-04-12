const primerEnlace = document.querySelector('a');

/// Elimina el elemento seleccionado
console.log(primerEnlace.remove());

const navegación = document.querySelector('.navegacion');
/// Elimina un hijo desde el padre
console.log(navegación.removeChild(navegación.children[2]));//* Requiere el elemento hijo