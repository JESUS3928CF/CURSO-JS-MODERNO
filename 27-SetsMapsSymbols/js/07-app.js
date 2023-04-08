// // El * hale la función un generador
// function *crearGenerador () {
//     yield 1;
//     yield "juan";
//     yield 3+3;
//     yield true;
// }

// const iterador = crearGenerador();

// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next().done);
// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador);


// Generador para carrito de compras
function* generadorCarrito( carrito ){
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ["Producto 1", "Producto 2", "Producto 3"];

const iterador = generadorCarrito(carrito);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());