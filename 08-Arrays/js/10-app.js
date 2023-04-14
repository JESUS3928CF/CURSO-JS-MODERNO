const carrito = [
    { nombre: 'monitor', precio: 200 },
    { nombre: 'monitor1', precio: 300 },
    { nombre: 'monitor2', precio: 400 },
    { nombre: 'monitor3', precio: 500 },
    { nombre: 'monitor4', precio: 600 },
    { nombre: 'monitor5', precio: 700 },
];

//! Retorna un arreglo nuevo
const arreglo1 = carrito.map(function (producto) {
    return `Nombre: ${producto.nombre} - Precio: ${producto.precio}`;
});

//! no retorna nada
const arreglo = carrito.forEach(function (producto) {
    return (`Nombre: ${producto.nombre} Precio: ${producto.precio}`);
});


console.log(arreglo);
console.log(arreglo1);


