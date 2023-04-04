const carrito = [
    { nombre: 'monitor', precio: 200 },
    { nombre: 'monitor1', precio: 300 },
    { nombre: 'monitor2', precio: 400 },
    { nombre: 'monitor3', precio: 500 },
    { nombre: 'monitor4', precio: 600 },
    { nombre: 'monitor5', precio: 700 }
];

for(i = 0; i < carrito.length; i++){
    console.log(`Nombre: ${carrito[i].nombre} Precio: ${carrito[i].precio}`);
}

carrito.forEach(function(producto){
    console.log(`Nombre: ${producto.nombre} Precio: ${producto.precio}`);
});