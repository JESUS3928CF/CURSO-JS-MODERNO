const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregado ${pais}`);
    callback();
}

function mostrarPaíses() {
    console.log(paises);
}

function iniciarCallbackHell(){
    setTimeout(() =>{
        nuevoPais("Alemania", mostrarPaíses);

        setTimeout(() =>{
            nuevoPais("Brasil", mostrarPaíses);

            setTimeout(() =>{
                nuevoPais("Colombia", mostrarPaíses);
            },3000);
        },3000);
    },3000);
}

iniciarCallbackHell();