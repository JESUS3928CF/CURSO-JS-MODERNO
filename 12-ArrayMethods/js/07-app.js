const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];

const resultado = meses.concat(meses2,meses2);
console.table(resultado);

const resultado2 = [...meses,...meses2,...meses2];
console.table(resultado2);

const resultado3 = [meses, meses2, meses2];

console.table(resultado3);