const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


//! Method .reduce()
/// Toma una gram cantidad de datos los une y entrega un resultado
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0); //- Se le pasan 2 valores El que acumula y el valor actual
//* El 0 es el valor de donde inicia 
console.log(resultado);


/// Con un forEach
let totalPagar = 0;
for( let [key,value] of Object.entries(carrito) ){
    totalPagar += value.precio;
}

let total = 0;
let totalPagar2 = carrito.map( producto => total += producto.precio); 
console.log(totalPagar);
console.log(total);
console.log(totalPagar2);

