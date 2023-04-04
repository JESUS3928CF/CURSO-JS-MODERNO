// for each element
const pendientes = ["tarea","Comer","Proyecto","Estudiar javaScript"];

pendientes.forEach((pendiente,index)=> console.log(index,pendiente));

const carrito = [
    { nombre: 'monitor', precio: 200 },
    { nombre: 'Televisor', precio: 300 },
    { nombre: 'Tablet', precio: 400 },
    { nombre: 'Audifonos', precio: 500 },
    { nombre: 'Celular', precio: 600 },
    { nombre: 'Teclado', precio: 700 },
];

carrito.map((producto) => console.log(producto.nombre));