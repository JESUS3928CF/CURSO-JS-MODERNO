/// self es otra forma de referirse a la ventana global

self.onload = () => {
    console.log("Ventana lista");
}

window.nombre = "Monitor";

const producto = {
    precio : 20,
    disponibles : true,
    mostrarInfo: () =>{
        return `El producto: ${self.nombre}`
    }
}
console.log(producto.mostrarInfo());