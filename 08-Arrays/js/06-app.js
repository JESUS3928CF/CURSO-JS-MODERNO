const meses = ['enero', 'marso', 'abril', 'mayo', 'junio', 'ok'];

meses.push('abril');

meses.push('mayo');

console.log(meses);

const carrito = [1];

const producto = {
    nombre: 'monitor',
    precio: 400,
};

const producto2 = {
    nombre: 'celular',
    precio: 800,
};

/// Crear un nuevo arreglo con el spread operator
const miNuevoArray = [...carrito, ...meses, producto]; //* Toma una copia de 2 arrays u un objeto y los une
console.log(miNuevoArray);

const numeros = ['a', 'b', 'c', 'd', 'e'];

numeros.push('i');

numeros.unshift('A');

numeros[numeros.length] = 'o';
console.log(numeros);
