const diaHoy = new Date().toLocaleDateString();

moment.locale('es');

console.log(moment().format("MMM Do YYYY hh:mm:ss a"));