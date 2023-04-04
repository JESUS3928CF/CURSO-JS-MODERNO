const precio = "Jesús";
const cantidad = "hola";

const producto = {
    precio:100,
    cantidad: 12,
    mostrarDetalle: function(){
        console.log(`El precio del objeto es ${this.precio} y la cantidad es: ${producto.cantidad}`);
    } 
}


producto.mostrarDetalle();

