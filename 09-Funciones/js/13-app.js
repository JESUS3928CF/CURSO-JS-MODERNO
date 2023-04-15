const reproductor = {
    canción:"",
    reproducir: id  => `Reproduciendo La música Número ${id}`,
    pausar: id => `La canción Número ${id} ha sido pausada`,
    eliminar: id => `Eliminando la música ${id}`,

    set nuevaCanción(canción){
        this.canción = canción;
        console.log(`Añadiendo canción ${canción}`);
    },
    get obtenerCanción(){
        console.log(`${this.canción}`) 
    }
}

reproductor.nuevaCanción = "Enter Sandman";
reproductor.obtenerCanción;

reproductor.crearPlayList = nombre => `creando la play list ${nombre}`;

console.log(reproductor.reproducir(1));

