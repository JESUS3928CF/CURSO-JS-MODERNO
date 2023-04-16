const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//! Method filter 
//- Filtra todos los elementos en base a una condición Y crea un nuevo Array

/// Array de todos los Productos que cuesten mas de 400
let caros = carrito.filter( producto => producto.precio > 400);
console.log(caros);

/// Array de todos los Productos que cuesten menos de 600
caros = carrito.filter( producto => producto.precio < 600);
console.log(caros);

/// Array de todos los Productos menos Tablet
let nombre = carrito.filter(producto => producto.nombre !== "Tablet");
console.log(nombre.map( producto => producto.nombre ));