/// object literal 
const producto = {
    nombre: "teclado",
    precio: 300,
    disponible: true
}


/// object constructor
function Producto(nombre,precio){ //* Se crea con una función y asignando this
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

/// Es necesario instanciar el objeto para crearlo
const producto2 = new Producto("mouse",100);

console.log(producto);

console.log(producto2);

const producto3 = new Producto("tablet",1200);
console.log(producto3);



