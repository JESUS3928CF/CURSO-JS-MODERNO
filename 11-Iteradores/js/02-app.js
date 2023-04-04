// for (let i = 1; i <= 10; i++) {
//     if (i === 5){
//         console.log("CINCO");
//         // break;
//         continue;
//     }
//     console.log(i);
// }

const carrito = [
    { nombre: 'monitor', precio: 200 },
    { nombre: 'monitor1', precio: 300 },
    { nombre: 'monitor2', precio: 400, descuento: true},
    { nombre: 'monitor3', precio: 500 },
    { nombre: 'monitor4', precio: 600 },
    { nombre: 'monitor5', precio: 700 },
];

for (let i = 0; i < carrito.length; i++) {
    if( carrito[i].descuento){
        console.log(`El producto ${carrito[i].nombre} cuenta con descuento`);
        continue;
    };
    console.log(`${carrito[i].nombre}`);
}
