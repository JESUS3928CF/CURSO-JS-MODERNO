const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;

    if (descuento) {
        resolve("Descuento aplicado");
    } else {
        reject("No se aplica descuento");
    }
});

aplicarDescuento.then( resultado => descuento(resultado)).catch(error => console.error(error, "es todo"));

function descuento(mensaje){
    console.log(mensaje);
}

// console.log(aplicarDescuento);

// Hay 3 valores posibles...
// fullFilled - El promise se cumplió
// rejected - El promise no se cumplió
// pending - El promise no se ha cumplido y tampoco fue rechazado

const descargarArchivo = new Promise( (resolve, reject) => {
    const archivo = true;

    if (archivo) {
        resolve("Archivo descargado");
    }else {
        reject("No se descargó el archivo");
    }
});

descargarArchivo.then(resultado => console.log(resultado, jugar)).catch(error => console.error(error));


let jugar = false;

setTimeout(() => {
    jugar = true;
},);

console.log(jugar);