const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
// comprobar si un valor existe en un arreglo

meses.forEach( mes => {
    if(mes == "Enero"){
        console.log(`Si existe ${mes}`);
    }
} );

const resultado = meses.includes("Enero");
console.log(resultado);

const existe = carrito.some( producto => producto.nombre === "Celular");
const existe2 = carrito.map( producto => producto.nombre === "Celular");
console.log(existe);
console.log(existe2);
const existe3 = meses.some( mes => mes === "Enero");
console.log(existe3);














// const automovil = {
//     modelo: 'Camaro',
//     year: '1987',
//     motor: '6.5',
// };


// for( propiedad in automovil){
//     console.log(propiedad);
//     console.log(automovil[propiedad]);
// }

// for ([atributo,valor] of Object.entries(automovil)){
//     console.log(atributo,valor)
// }
