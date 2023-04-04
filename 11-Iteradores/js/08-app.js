// const pendientes = ['tarea', 'Comer', 'Proyecto', 'Estudiar javaScript'];

// for(let pendiente in pendientes){
//     console.log( pendiente);
// }

const automovil = {
    modelo : "Camaro",
    year: "1987",
    motor: "6.5"
}

for (const propiedad in automovil) {
    console.log(automovil[propiedad]);
}

for(let[llave,valor] of Object.entries(automovil)){
    console.log(valor);
    console.log(llave);
}