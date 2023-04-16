import { selectCategories, resultado, modal, renderizarFavoritos } from '../funciones-elementos.js';
import { api } from './API.js';
import ls from './LocalStorage.js';
import { favoritosDiv } from '../funciones-elementos.js';

class UI {
    mostrarCategorias(categorias = []) {
        //* Por defecto categorías siempre sera un arreglo
        // console.log(categorias);
        categorias.forEach((categoria) => {
            const { strCategory } = categoria;
            const option = document.createElement('option');
            option.value = strCategory;
            option.text = strCategory;
            selectCategories.appendChild(option);
        });
    }

    mostrarRecetas(recetas = []) {
        // console.log(recetas);

        /// Limpiar el HTML
        this.limpiarHTML(resultado);

        /// Heading
        this.mostrarHeading(recetas);

        /// Iterar en los resultados
        recetas.forEach((receta) => {
            const { idMeal, strMeal, strMealThumb } = receta;

            /// Div contenedor del card que contiene las columnas de bootstrap
            const recetaContenedor = document.createElement('div');
            recetaContenedor.classList.add('col-md-4'); //* Crea 3 columnas con 4 filas

            /// Div que contiene la info del card
            const recetaCard = document.createElement('div');
            recetaCard.classList.add('card', 'mb-4');

            /// Info del div Tipo IMG
            const recetaImagen = document.createElement('img');
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt =
                `Imagen de la receta ${strMeal}` ?? receta.titulo;
            recetaImagen.src = strMealThumb ?? receta.img;

            /// Cada card a de tener un body donde estará la descripción o contenido del card
            const recetaCardBody = document.createElement('div');
            recetaCardBody.classList.add('card-body'); //* Le da unos estilos por parte de Bootstrap

            const recetaHeading = document.createElement('h3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = strMeal ?? receta.titulo;

            /// Creando un bottom
            const recetaButton = document.createElement('button');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = 'Ver receta';
            /// Llamando un modal
            // recetaButton.dataset.bsTarget = '#modal';
            // recetaButton.dataset.bsToggle = 'modal'; //* toggle manda a llamas las funciones que están en el js de bootstrap

            recetaButton.onclick = function () {
                api.seleccionarReceta(idMeal ?? receta.id);
            };

            //! Renderizar o Inyectar en el HTML
            /// Primero armo el body
            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            /// Luego el contenido del card
            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);

            /// Después ael contenido del contenedor
            recetaContenedor.appendChild(recetaCard);

            /// Después de toma un elemento real de mi HTML yt agrego el contenedor
            resultado.appendChild(recetaContenedor);

            //- Maqueta
            //-    .card
            //-    img
            //-    .card-body
            // -        h3
            // -        button
        });
    }

    limpiarHTML(selector) {
        while (selector.firstChild) {
            selector.removeChild(selector.firstChild);
        }
    }

    mostrarHeading(recetas = [], mensaje = 'No hay resultados') {
        const heading = document.createElement('h2');
        heading.classList.add('text-center', 'text-black', 'my-5');
        heading.textContent =
            recetas.length && recetas.length > 0 ? 'Resultado' : mensaje;
        resultado.appendChild(heading);
    }

    mostrarRecetaModal(receta) {
        // console.log(receta);
        const { idMeal, strInstructions, strMeal, strMealThumb } = receta;

        /// Inyectando información en el modal
        const modalTitle = document.querySelector('.modal .modal-title');
        modalTitle.textContent = strMeal;
        const modalBody = document.querySelector('.modal .modal-body');
        modalBody.innerHTML = `
            <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}">
            <h3 class="my-3">Instrucciones</h3>
            <p>${strInstructions}</p>
            <h3 class="my-3"> Ingredientes y Medidas </h3>
        `;
        /// Contenido del footer btn de cerrar y el de favoritos
        const btnFavoritos = document.createElement('button');
        btnFavoritos.classList.add('btn', 'btn-danger', 'col');
        btnFavoritos.textContent = ls.existeStorage(idMeal)
            ? 'Eliminar de Favoritos'
            : 'Guardar como Favorito';

        //* local Storage
        btnFavoritos.onclick = function () {
            if (ls.existeStorage(idMeal)) {
                ls.eliminarFavorito(idMeal);
                btnFavoritos.textContent = 'Guardar Como Favorito';
                ui.mostrarToast('Eliminado Correctamente');
                if (renderizarFavoritos === true) {
                    ui.mostrarRecetas(JSON.parse(localStorage.getItem("listaRecetasFavoritas")) ?? []);
                }
                return;
            }

            ls.agregarFavorito({
                id: idMeal,
                titulo: strMeal,
                img: strMealThumb,
            });
            btnFavoritos.textContent = 'Eliminar De favoritos';
            ui.mostrarToast('Agregado Correctamente');
            if (renderizarFavoritos === true) {
                    ui.mostrarRecetas(JSON.parse(localStorage.getItem("listaRecetasFavoritas")) ?? []);
                }
        };

        const btnCerrar = document.createElement('button');
        btnCerrar.classList.add('btn', 'btn-secondary', 'col');
        btnCerrar.textContent = 'Cerrar';
        btnCerrar.onclick = function () {
            modal.hide();
        };

        const listGroup = document.createElement('ul');
        listGroup.classList.add('list-group');

        const modalFooter = document.querySelector('.modal-footer');
        this.limpiarHTML(modalFooter);

        modalFooter.appendChild(btnFavoritos);
        modalFooter.appendChild(btnCerrar);

        // <button type="button" class="btn btn-danger col">Guardar Como Favorito</button>
        // <button type="button" class="btn btn-secondary col" data-bs-dismiss="modal" >Cerrar</button>

        /// Mostrar cantidades e ingredientes
        for (let i = 1; i <= 20; i++) {
            // console.log(receta[`strIngredient${i}`]);
            if (receta[`strIngredient${i}`]) {
                const ingrediente = receta[`strIngredient${i}`];
                const medida = receta[`strMeasure${i}`];

                const ingredienteLi = document.createElement('li');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${ingrediente} - ${medida}`;

                listGroup.appendChild(ingredienteLi);
            }
        }

        modalBody.appendChild(listGroup);

        /// Muestra el modal cuando se ejecute la función
        modal.show();
    }

    /// Codigo de ejemplo re un toast de bootstrap desde js
    mostrarToast(mensaje) {
        const toastDiv = document.querySelector('#toast'); //* Seleccionamos el toast que esta en nuestro HTML
        const toastBody = document.querySelector('.toast-body'); //* Y también el body para agregar contenido a nuestro toast
        /// Creamos la instancia
        const toast = new bootstrap.Toast(toastDiv);
        toastBody.textContent = mensaje;
        /// Mostrando el mensaje
        toast.show();
    }

    mostrarFavoritos(favoritos) {
        if (favoritos.length) {
            ui.mostrarRecetas(favoritos);

            return;
        }

        const noFavoritos = document.createElement('p');
        noFavoritos.textContent = 'No hay favoritos';
        noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5');
        favoritosDiv.appendChild(noFavoritos);
    }

    obtenerFavoritos() {
        const favoritos =
            JSON.parse(localStorage.getItem('listaRecetasFavoritas')) ?? [];

        this.mostrarFavoritos(favoritos);
    }
}

export default UI;

export const ui = new UI();
