const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con el id ${id}...`);
    },
    pausar: function(){
        console.log(`Pausado`);
    },
    crearPlayList: function(nombre){
        console.log(`La play list ${nombre} ha sido creada exitosamente`);
    },
    reproducirPlayList: function(nombre="nn"){
        console.log(`reproduciendo la playlist ${nombre}`);
    }
}

reproductor.borrar = function(id){
    console.log(`borrando canción la canción Número ${id}...`);
}

reproductor.reproducir(1);
reproductor.pausar();
reproductor.borrar(12);
reproductor.crearPlayList("mica");
reproductor.reproducirPlayList();