/// Closure es para poder sacar variables de una función 
function mostrarCliente() {
    const nombre = "Pablo";

    function muestraNombre(){
        console.log(nombre);
    }
    return muestraNombre;
}

const cliente = mostrarCliente();

cliente(); // Pablo
