/// Eliminar un elemento del local storage
const nombre = localStorage.removeItem("nombre");

const meses = ['Enero', 'Febrero', 'Marzo'];

localStorage.setItem('Meses', JSON.stringify(meses));

/// actualizar O Eliminar
const mesesArray = JSON.parse(localStorage.getItem("Meses")); //* Lo extraigo y lo transformo 
mesesArray.push("Mayo"); //* Modifico el dato

localStorage.setItem('Meses', JSON.stringify(mesesArray)); //* Lo agrego al Local Storage Con la misma llave


/// Eliminar todo del local storage
localStorage.clear();