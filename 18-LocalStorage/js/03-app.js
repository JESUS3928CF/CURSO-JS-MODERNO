const nombre = localStorage.removeItem("nombre");

const meses = ['Enero', 'Febrero', 'Marzo'];

localStorage.setItem('Meses', JSON.stringify(meses));

// actualizar
const mesesArray = JSON.parse(localStorage.getItem("Meses"));
console.log(mesesArray);
mesesArray.push("Mayo");
console.log(mesesArray);
localStorage.setItem('Meses', JSON.stringify(mesesArray));
// localStorage.s 