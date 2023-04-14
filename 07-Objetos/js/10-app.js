const producto = {
    precio: 100
}
const medidas = {
    peso : "1kg",
    medidas: "1m"
}

/// Objet.assign() une los objetos que se le pasan
const union = Object.assign(producto,medidas);

/// Spread Operator O Rest Operator Copia los objetos que se les pasan
const union2 = {...producto, ...medidas} //! Más utilizada

console.log(union);
console.log(union2);