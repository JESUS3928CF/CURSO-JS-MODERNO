const puntaje = 410;

function revisarPuntaje() {
    if(puntaje > 400){
        console.log("Excelente");
        return
    }
    if (puntaje > 300) {
        console.log('Buen puntaje');
        return;
    }
}

revisarPuntaje();