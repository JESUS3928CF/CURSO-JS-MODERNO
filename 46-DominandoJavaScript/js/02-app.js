/// Hoisting, existen dos contextos de ejecución en js
//* En la primera etapa se registran todas las funciones
//* En la segunda se ejecutan las funciones

obtenerCliente("Jesus");

function obtenerCliente(nombre){
    console.log(`El nombre del client es ${nombre}`);
}

obtenerCliente2("Cochero");

const obtenerCliente2 = function(nombre) {
    console.log(`El nombre del cliente 2 es ${nombre}`);
};
