function Producto (nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}
const producto = new Producto("Monitor",4000);

console.log( Object.keys(producto));
console.log(Object.values(producto))
console.log(Object.entries(producto));
