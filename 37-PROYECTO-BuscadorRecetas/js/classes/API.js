import UI from './UI.js';
const ui = new UI();

class API {
    obtenerCategorias() {
        // console.log("consultando listado de Categorias");

        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((listaCategorias) =>
                ui.mostrarCategorias(listaCategorias.categories)
            )
            .catch((e) => console.log(e));
    }

    seleccionarCategoria(category) {
        // console.log(`consultando la categoria de ${category}`);
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

        fetch(url)
            .then((respuesta) => respuesta.json())
                .then((resultado) => ui.mostrarRecetas(resultado.meals));
    }

    seleccionarReceta(idReceta){
        // console.log(idReceta);
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${idReceta}`;

        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((resultado) => ui.mostrarRecetaModal(resultado.meals[0]))
            .catch((e) => console.log(e, 'la página no existe'));
    }
}

export default API;
export const api = new API();
