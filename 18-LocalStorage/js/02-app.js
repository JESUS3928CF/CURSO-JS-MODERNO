// localStorage.setItem("Nombre","Jesus11");

// const usuario = {
//     id: 1,
//     nombre: "Loco",
//     password: "1234",
//     muertes: "2030"
// };

// localStorage.setItem("Usuario",JSON.stringify(usuario));
// localStorage.setItem("Usuario",JSON.stringify(usuario));

/// De esta forma se obtienen los valores  del local storage
const nombre = localStorage.getItem("Usuario");
console.log(nombre);

/// De esta forma convierto un string a Objeto o Array 
const productoJSON =  JSON.parse(localStorage.getItem("Producto"));
console.log(productoJSON);

const meses = JSON.parse(localStorage.getItem("Meses"));
console.log(meses);