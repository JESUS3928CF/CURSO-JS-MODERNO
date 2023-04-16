const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
/// comprobar si un valor existe en un arreglo de forma manual
meses.forEach( mes => {
    if(mes == "Enero"){
        console.log(`Si existe ${mes}`);
    }
} );

/// Este método comprueba si existe un valor en el array sin objetos
const resultado = meses.includes("Enero");
console.log(resultado);

//! Method SOME
/// Para revisar si un valor existe en un array de objetos se utiliza .some()
const existe = carrito.some( producto => producto.nombre === "Celular");
console.log(existe);
//- Diferencia a el map
const existe2 = carrito.map( producto => producto.nombre === "Celular");
console.log(existe2);

//* Otro ejemplo 
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
