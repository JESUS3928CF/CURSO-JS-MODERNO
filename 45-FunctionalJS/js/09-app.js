
const suma = (a,b,c) => a + b + c;
console.log(suma(1, 2, 3));

///  Partials y Currying
const parcial = a => (b,c) => suma(a,b,c);
const primerNumero = parcial(5);
const resultado = primerNumero(5,5);

console.log(resultado);


/// Division en tres parciales pequeños
const parcial2 = a => b => c => suma(a,b,c);
const primerNumero2 = parcial2(5);
const segundoNumero = primerNumero2(1);
const resultado2 = segundoNumero(1);
console.log(resultado2);

//* mucho trabajo otra forma

const resultadoParcial = parcial2(3)(3)(3);
console.log(resultadoParcial);
