// Como declarar un set 

const carrito = new Set();

// Set methods
// Agregar un valor a mi set
carrito.add("Camisa");
carrito.add("Disco #1");
carrito.add('Disco #2');
carrito.add('Disco #3');


// Eliminar un elemento del set 
carrito.delete("Disco #3");

// Method set para ver la cantidad de elementos
console.log( carrito.size);

// Comprobar si existe un elemento en el set
console.log( carrito.has("Caca"));

// Eliminar todos los elementos del set
carrito.clear();

// console.log(carrito);


// carrito.forEach( Elemento => console.log(Elemento));

// Del siguiente arreglo eliminar los duplicados

const numeros = [1,1,1,1,1,2,2,2,3,3,4,3,2,1,2,3,34,4,5,65,4,4,3,2,2];

const noDuplicados  = new Set(numeros);

console.log(noDuplicados);