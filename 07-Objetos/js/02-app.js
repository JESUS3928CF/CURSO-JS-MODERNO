const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

console.log(producto.disponible);
console.log(producto["nombre"]);
console.log(producto.precio);


producto.imagen = "imagen.png";
delete producto.imagen;

let {nombre,precio} = producto;
console.log(nombre, precio);

console.log(producto);
