// localStorage.setItem("Nombre","Jesus11");

// const usuario = {
//     id: 1,
//     nombre: "Loco",
//     password: "1234",
//     muertes: "2030"
// };

// localStorage.setItem("Usuario",JSON.stringify(usuario));
// localStorage.setItem("Usuario",JSON.stringify(usuario));


const nombre = localStorage.getItem("Usuario");
console.log(nombre);

const productoJSON =  JSON.parse(localStorage.getItem("Producto"));
console.log(productoJSON);

const meses = JSON.parse(localStorage.getItem("Meses"));
console.log(meses);