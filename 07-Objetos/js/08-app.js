"use strict";

const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 1200
}
Object.freeze(producto);

// producto.cantidad = 12;
// producto.precio = 10;

console.log(producto);


// destructuración

// let {precio} = producto;

// precio = precio.toString();
// console.log(typeof(precio));