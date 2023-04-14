const precio = "Jesús";
const cantidad = "hola";

const producto = {
    precio:100,
    cantidad: 12,
    /// Agregando una función a un objeto
    mostrarDetalle: function(){
        /// This accede a las propiedades locales al objeto
        console.log(`El precio del objeto es ${this.precio} y la cantidad es: ${producto.cantidad}`);
    } 
}
//* Utilizando la función
producto.mostrarDetalle();

