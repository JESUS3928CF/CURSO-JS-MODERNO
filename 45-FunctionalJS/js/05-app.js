const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

/// Al máximo el array function y p para resumir producto
const obtenerNombres = p => p.nombre;

const resultado = carrito.map(obtenerNombres);
console.log(resultado);


const mayor500 = p => p.precio > 500;;

const resultado2 = carrito.filter(mayor500);
console.log(resultado2);