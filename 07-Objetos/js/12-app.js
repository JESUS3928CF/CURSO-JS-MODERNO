// object literal 
const producto = {
    nombre: "teclado",
    precio: 300,
    disponible: true
}

// object constructor
function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("mouse",100);
console.log(producto);
console.log(producto2);

const producto3 = new Producto("tablet",1200);
console.log(producto3);



