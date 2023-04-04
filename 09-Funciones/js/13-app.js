const reproductor = {
    cancion:"",
    reproducir: id  => `Reproduciendo La música Número ${id}`,
    pausar: id => `La canción Número ${id} ha sido pausada`,
    eliminar: id => `Eliminando la música ${id}`,

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo canción ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`) 
    }
}

reproductor.nuevaCancion = "Enter Sandman";
reproductor.obtenerCancion;

reproductor.crearPlayList = nombre => `creando la play list ${nombre}`;

console.log(reproductor.reproducir(1));