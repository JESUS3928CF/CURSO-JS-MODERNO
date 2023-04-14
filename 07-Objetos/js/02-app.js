const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//! Formas de acceder a un objeto
console.log(producto.disponible); /// Con punto
console.log(producto["nombre"]); /// Con el nombre de la llave
console.log(producto.precio);


/// Agregando nuevas propiedades al Objeto
producto.imagen = "imagen.png";

/// Eliminando una propiedad del objeto
delete producto.imagen;

//! Se crean 2 nuevas variables a partir de el objeto
let {nombre,precio} = producto; //* Desestructurando un objeto
console.log(nombre, precio);

console.log(producto);
