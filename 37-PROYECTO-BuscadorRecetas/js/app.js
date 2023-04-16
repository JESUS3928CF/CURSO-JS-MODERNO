import API from './classes/API.js';
import { selectCategories } from './funciones-elementos.js';

(() => {
    const apiRecetas = new API();

    function iniciarApp() {
        if (selectCategories) {
            apiRecetas.obtenerCategorias();
        }
    }

    document.addEventListener('DOMContentLoaded', iniciarApp);
})();
