/// Función que retorna algo
function sumar(a,b){
    return a + b;
}

/// Cuando la función retorna algo hay que tener otra variable a la cual se le asigne el valor retornado
const resultado = sumar(12,3);
console.log(resultado);


/// Ejemplo más avanzado

let total = 0;
function agregarCarrito(precio){
    return total += precio;
}
function calcularImpuesto(total){
    return total * 1.15;
}
agregarCarrito(300);
agregarCarrito(700);

const totalApagar = calcularImpuesto(total);
console.log(totalApagar);
console.log(total);