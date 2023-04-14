//- Forma imperativa de eliminar elementos de un array

const numeros = ['a', 'e', 'i', '0', 'u'];

/// Eliminar el último elemento
numeros.pop();

/// Eliminar el primer elemento
numeros.shift();

/// Eliminar una posición en especificó
numeros.splice(2, 1); //* Primero recibe la posición y luego la cantidad de elementos
console.log(numeros);
