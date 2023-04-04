const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 100 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

let resultado = ""; 
carrito.map( (producto,index) =>{ 
    if(producto.nombre == "Tablet"){
        resultado = carrito[index];
    }} );
console.log( resultado);

const resultado2 = carrito.find( producto => producto.precio == 1000);
console.log( resultado2);

const resultado3 = carrito.filter( producto => producto.precio == 1000);
console.log( resultado3 );


