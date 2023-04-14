//! Se tiene que activar el modo estricto
"use strict"; /// Este modo no permite malas practicas en le documento

const producto = {
    precio: 100,
    nombre: "camisa",
    disponible: true,
}

/// No permite que se modifique el objeto
Object.freeze(producto); //* Congela el objeto

/// Este método me permite saber si un objeto esta congelado o no
console.log(Object.isFrozen(producto));

producto.disponible = false;
delete producto.disponible;



// const producto1 = new Producto("Buzo",500,13);
// const productos = Object.assign(producto);

// const productos1 = {...producto,...producto1};
// console.log(productos1);

// // producto1.MostrarDetalle();
// console.log(producto1.nombre1);
// const {nombre} = producto;
// console.log(nombre);

// console.log(producto)

// console.log(producto["nombre"]);