const meses = ['enero', 'marso', 'abril', 'mayo', 'junio', 'ok'];

//- Agrega un elemento al final del arreglo 
meses.push('abril');
meses.push('mayo');

//- Agrega un elemento en la primera posición
meses.unshift("variable");

console.log(meses);



const carrito = [];

const producto = {
    nombre: 'monitor',
    precio: 400,
};

const producto2 = {
    nombre: 'celular',
    precio: 800,
};

carrito.unshift(producto2);

carrito.push(producto);
console.table(carrito);
