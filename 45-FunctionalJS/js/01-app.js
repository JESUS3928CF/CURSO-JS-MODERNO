const suma = function(a,b){
    return a + b;
}

/// First Class Functions una función asignada a una variable como un tipo de dato cualquiera 
const resultado = suma;

console.log(typeof(resultado(10,20)));