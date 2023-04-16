const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

/// Crea arrays y los une

//- De string a an array
let vocales = "AEIOU";
vocales = [...vocales];
console.log(vocales);

//- Agregando un nuevo elemento a un array
const meses2 = [...meses, "Agosto"]
console.log(meses2);

const producto = {producto: "Disco duro", precio: 300}

//- uniendo 2 arrays
const carrito2 = [...carrito,producto ]
console.log(carrito2);

