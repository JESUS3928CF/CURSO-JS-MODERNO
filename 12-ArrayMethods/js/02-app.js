const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 300 },
    { nombre: 'Celular', precio: 700 },
];

meses.forEach(  (mes,i) => {
    if(mes == "Abril"){
        console.log(`${mes} fue encontrado en la posición ${i}`);
    }
    // console.log( mes === "Abril" ? `Abril fue encontrado en la posición ${i}`: `No` );
});

const mes = meses.findIndex( mes => mes == "Abril");
console.log( mes );

console.log( mes > 0 ? "Si esta": "No esta")


console.log( meses);

const existe = carrito.findIndex( producto => producto.precio == 500);
console.log( existe );

console.log( existe >= 0 ? "Si esta": "No esta");