import { api } from './classes/API.js';
import { ui } from './classes/UI.js';
import ls from './classes/LocalStorage.js';

//! Elementos HTML y sus eventos

export const selectCategories = document.querySelector('#categorias');
export const resultado = document.querySelector('#resultado');
export const favoritosDiv = document.querySelector('.favoritos');
if(favoritosDiv) {
    ui.obtenerFavoritos();
}

/// Se instancia la clase modal de bootstrap
export const modal = new bootstrap.Modal('#modal', {}); //*Parámetro 1 = id, 2 = las opciones para crear este modal

/// El evento "change" en JavaScript se activa cuando un elemento del formulario cambia de valor
if (selectCategories) {
    selectCategories.addEventListener('change', seleccionarCategoria); //* Ideal para los select
}

function seleccionarCategoria(e) {
    //* Validar el elemento
    const category = e.target.value;

    if (category === '') {
        ui.limpiarHTML(resultado);
        ui.mostrarHeading([], 'Seleccione una categoria');

        return;
    }

    api.seleccionarCategoria(category);
}
