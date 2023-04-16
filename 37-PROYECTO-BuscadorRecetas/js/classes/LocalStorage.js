class LocalStorage {
    agregarFavorito(receta) {

        
        /// ?? Operador en caso de que la expresión o la evaluación del lado IZQUIERDO marque NULL va aplicar lo del lado DERECHO
        const favoritos = JSON.parse(localStorage.getItem('listaRecetasFavoritas')) ?? [];
        localStorage.setItem('listaRecetasFavoritas', JSON.stringify([...favoritos, receta]) )
    }

    existeStorage( id ){
        const favoritos = JSON.parse(localStorage.getItem('listaRecetasFavoritas')) ?? [];

        return favoritos.some( favorito => favorito.id === id );
    }

    eliminarFavorito( id ){
        const favoritos = JSON.parse(localStorage.getItem('listaRecetasFavoritas')) ?? [];  
        
        const nuevosFavoritos = favoritos.filter( favoritos => favoritos.id !== id);

        localStorage.setItem('listaRecetasFavoritas', JSON.stringify(nuevosFavoritos));

        return nuevosFavoritos;
    }

    
}

const ls = new LocalStorage();
export default ls;




