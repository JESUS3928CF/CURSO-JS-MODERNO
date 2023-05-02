const numero1 = 20;
const numero2 = "20";

console.log(numero1 + numero2); /// Coercion implícita

console.log(Number(numero2)); /// Coercion explicita

console.log(numero1.toString());

const pedido = [1,2,3,4];

console.log(pedido.toString());
console.log(JSON.stringify(pedido));