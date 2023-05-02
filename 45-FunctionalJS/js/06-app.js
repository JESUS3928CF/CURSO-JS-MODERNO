/// Funciones puras o pure Functions
//* Retornan un dato pero no mirifican una variable

const duplicar = numero => numero * 2; //* Otra característica es que la cantidad de parámetros que se le pasen es lo que debe de retornar

const numero1 = 20;
const resultado =  duplicar(numero1);
console.log(resultado, numero1);