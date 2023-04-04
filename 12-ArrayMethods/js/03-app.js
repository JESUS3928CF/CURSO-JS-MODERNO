const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

let totalPagar = 0;

for( let [key,value] of Object.entries(carrito) ){
    totalPagar += value.precio;
}

let total = 0;
let totalPagar2 = carrito.map( producto => total += producto.precio); 
console.log(totalPagar);
console.log(total);
console.log(totalPagar2);

let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado);