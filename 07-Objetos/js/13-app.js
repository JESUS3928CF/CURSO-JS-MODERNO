function Producto (nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}
const producto = new Producto("Monitor",4000);

/// Este método me retorna las llaves del objeto
console.log( Object.keys(producto));

/// Este método me retorna los valores del objeto
console.log(Object.values(producto))

/// Este método me retorna las llaves y los valores del objeto
console.log(Object.entries(producto));
