const carrito = [
    { nombre: 'pc', precio: 200 },
    { nombre: 'pc1', precio: 300 },
    { nombre: 'pc2', precio: 400 },
    { nombre: 'pc3', precio: 500 },
    { nombre: 'pc4', precio: 600 },
];

const productos = carrito.map( producto => producto.nombre + " " + producto.precio);
console.log(productos);

productos.forEach( producto => console.log(producto));
productos.forEach((producto) => console.log(producto));
productos.forEach((producto) => console.log(producto));