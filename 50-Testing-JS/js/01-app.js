/// Los frameworks de testing tienen estas funciones ya implementadas y estas validaciones y asi es como funcionan 

//* Probar 2 valores 


//- Funciones
function suma(a,b){
    return a + b;
}

function restar(a,b){
    return a - b;
}

let resultado = suma(2,2);
let esperado = 3;

if (resultado !== esperado) {
    console.error(`El ${resultado} es diferente a lo esperado; la prueba no pasó`);
}else{
    console.log("La prueba paso correctamente");
}

resultado = restar(10,5);
esperado = 5;


if (resultado !== esperado) {
    console.error(
        `El ${resultado} es diferente a lo esperado; la prueba no pasó`
    );
} else {
    console.log('La prueba poso correctamente');
}