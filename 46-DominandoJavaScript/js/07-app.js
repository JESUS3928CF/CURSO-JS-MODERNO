console.log("Primero");

setTimeout(()=>{
    console.log("Segundo");
}, 0);

console.log("Tercero");

setTimeout(() => {
    console.log('Cuarto');
}, 0);

const miPromise = new Promise( resolve => {
    resolve('Desconocido')
})

miPromise.then(console.log);



console.log("Ultimo");