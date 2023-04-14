/// Objetos dentro de otro objeto
const MisProductos = {
    camisa:{
        precio: 100,
        cantidad: 10
    },
    buzo:{
        precio: 300,
        cantidad:12
    }
}

/// Acceder a una propiedad de un objeto anidado
console.log("El precio de las camisas es: ",MisProductos.camisa.precio);