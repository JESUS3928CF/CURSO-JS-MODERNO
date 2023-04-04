const diaHoy = new Date();

let valor;

valor = diaHoy;

valor = diaHoy.getFullYear();
valor = diaHoy.getMonth() + 1;
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();
valor = diaHoy.getSeconds();
valor = diaHoy.getMilliseconds();

valor = diaHoy.getYear();
valor = diaHoy.setFullYear(2020);

console.log(valor);
console.log(Date.now());