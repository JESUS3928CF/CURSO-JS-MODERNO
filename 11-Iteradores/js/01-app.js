// for (let i = 0; i < 10; i+= 0.5) {
//     console.log(i);
// }

// for (let i = 0; i <= 20; i+= 1){
//         console.log( i % 2 === 0 ? `El número ${i} es par`: `El número ${i} es impar`);
// }

const carrito = [
    { nombre: 'monitor', precio: 200 },
    { nombre: 'monitor1', precio: 300 },
    // { nombre: 'monitor2', precio: 400 },
    // { nombre: 'monitor3', precio: 500 },
    // { nombre: 'monitor4', precio: 600 },
    { nombre: 'monitor5', precio: 700 },
];

// carrito.forEach((producto)=>{console.log(producto.nombre, producto.precio)});

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
    
}