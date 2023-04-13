
/// Agregar Elementos al local Storage
localStorage.setItem("nombre", "Juan");

/// Agregar Elementos al Session Storage
sessionStorage.setItem("nombre", "Jesús");

const producto = {
    nombre: "Monitor",
    precio: 300
}

/// Agregar Objetos o Arrays al local Storage
const productoString = JSON.stringify(producto); //* Primero se transforman a string
console.log(productoString);
//* Luego se agrega al local storage
localStorage.setItem("Producto",productoString);

/// Agregar un array al local storage 
const meses = ["Enero","Febrero","Marzo"];

localStorage.setItem("Meses",JSON.stringify(meses));