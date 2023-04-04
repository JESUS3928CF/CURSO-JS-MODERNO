// console.log(window);
localStorage.setItem("nombre", "Juan");
// sessionStorage.setItem("nombre", "Jesús");

const producto = {
    nombre: "Monitor",
    precio: 300
}

const productoString = JSON.stringify(producto);
console.log(productoString);

localStorage.setItem("Producto",productoString);




const meses = ["Enero","Febrero","Marzo"];

localStorage.setItem("Meses",JSON.stringify(meses));