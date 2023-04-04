"use strict"

const producto = {
    precio : 100
}

Object.seal(producto);

producto.precio = "Jesús";

// producto.nombre = "Algo";

console.log(producto);

