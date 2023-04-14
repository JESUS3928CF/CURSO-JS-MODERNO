"use strict" //* Es necesario el modo strict

const producto = {
    precio : 100
}

/// Sella un objeto y no permite eliminar propiedades Pero si deja modificar las llaves existentes
Object.seal(producto);

producto.precio = "Jesús"; //! Si se puede

console.log(producto);

/// Asi puedo saber si un objeto esta sellado o no
console.log(Object.isSealed(producto));

producto.nombre = "Algo"; //! No se puede


