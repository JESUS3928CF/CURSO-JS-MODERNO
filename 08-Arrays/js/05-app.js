const meses = [
    'enero',
    'marso',
    'abril',
    'mayo',
    'junio',
    'julio',
    'august',
    'september',
    'ok',
];

meses.push('abril');

meses.push('mayo');

console.log(meses);

const carrito = [];

const producto = {
    nombre:"monitor",
    precio:400
}

const producto2 = {
    nombre: 'celular',
    precio: 800,
};

carrito.unshift(producto2);

carrito.push(producto);
console.table(carrito);
