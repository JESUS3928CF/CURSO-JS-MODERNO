// "use strict";
const producto = {
    precio: 100,
    nombre: "camisa",
    informacion:{
        medidas:{
            peso:10,
            tamaño:"1m"
        }
    }
}

const producto1 = {
    prec: 100,
    nombre1: 'camisa',
    // informacion1: {
    //     medidas1: {
    //         peso1: 10,
    //         tamaño: '1m',
    //     }
    // }
};


// Object.freeze(producto);
Object.seal(producto);

// producto.cantidad = 13;

producto.precio = 200;
// delete producto.precio;

// function Producto (nombre,precio,cantidad){
//     this.nombre = nombre;
//     this.precio = precio;
//     this.cantidad = cantidad;
//     this.MostrarDetalle = function(){return(`Nombre ${nombre}, precio ${precio}, cantidad ${cantidad}`);}
// }



// const producto1 = new Producto("Buzo",500,13);
const productos = Object.assign(producto);

const productos1 = {...producto,...producto1};
console.log(productos1);

// producto1.MostrarDetalle();
console.log(producto1.nombre1);
const {nombre} = producto;
console.log(nombre);

console.log(producto)

console.log(producto["nombre"]);