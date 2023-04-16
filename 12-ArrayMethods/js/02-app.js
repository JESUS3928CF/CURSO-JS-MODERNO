const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 300 },
    { nombre: 'Celular', precio: 700 },
];

/// Forma manual un un forEach 
meses.forEach(  (mes,i) => { //* Primer parámetro es el valor y el segundo es el indexe del elemento actual
    if(mes == "Abril"){
        console.log(`${mes} fue encontrado en la posición ${i}`);
    }
    // console.log( mes === "Abril" ? `Abril fue encontrado en la posición ${i}`: `No` );
});

//! Method findIndex()
/// Encuentra el indexe de un elemento y retorna su posición
const mes = meses.findIndex( mes => mes == "Abril"); //- Si retorna -1 significa que no lo encontró 
console.log( mes );

console.log( mes > 0 ? "Si esta": "No esta")

/// Encontrar un indice de un arreglo de objetos
const existe = carrito.findIndex( producto => producto.precio == 500); //- Extrae la posición del primero que encuentre
console.log( existe );

console.log( existe >= 0 ? "Si esta": "No esta");

