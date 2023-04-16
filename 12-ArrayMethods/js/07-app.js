const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];


/// Une los arreglo en el seleccionado
const resultado = meses2.concat(meses2,meses2,"Jesus"); //* Se separan por , 
console.log(resultado);


//! Spread operator
/// Toma copias de los arreglo seleccionados y los asigna a un array
const resultado2 = [...meses2,, "Jesús", ..."123"]; //* Los 3 puntos puede separar un string por cada una se sus letras
console.log(resultado2);

const resultado3 = [meses, meses2, meses2];

console.log(resultado3);