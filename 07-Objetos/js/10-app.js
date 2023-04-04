const producto = {
    precio: 100
}
const medidas = {
    peso : "1kg",
    medidas: "1m"
}

const union = Object.assign(producto,medidas);

const union2 = {...producto, ...medidas}

console.log(union);
console.log(union2);