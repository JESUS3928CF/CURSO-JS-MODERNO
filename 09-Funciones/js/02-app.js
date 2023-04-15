/// declaración de función
//! JS escanea primero todas las funciones
sumar(2, 2);
function sumar(num1, num2) {
    console.log(num1 + num2);
}


/// Expresión de función
//! No se mueve al principio de la compilación
sumar2();
const sumar2 = function () {
    console.log(3 + 3);
};

