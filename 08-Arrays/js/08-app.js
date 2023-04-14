const vocales = [1,2,3,4,5,6,7,8];

/// Destructuring de Arrays - sacar de la estructura y crear la variable
const [,,tercero,,quinto,...resto] = vocales;
//* Su sintaxis - En el caso de los arreglos tú decides el nombre y "," para elegir la posición del elemento

console.log(tercero, quinto, resto);

