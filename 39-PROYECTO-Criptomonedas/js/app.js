import api from './CriptomonedasAPI.js';

//! Selectores y Variables globales
export const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
export const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    cryptoMoneda: '',
};

//! Iniciar App
document.addEventListener('DOMContentLoaded', () => {
    api.consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario);

    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});

//! Funciones

function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value;
    // console.log(objBusqueda);
}

function submitFormulario(e) {
    e.preventDefault();

    //- Validar
    const { moneda, criptomoneda } = objBusqueda;

    if (moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    //- Consultar la API con los resultados

    sniperDeCarga(resultado);
    api.consultarAPI(objBusqueda);
}

/// Funciones de UI

function mostrarAlerta(mensaje) {
    const existeError = document.querySelector('.error');

    if (!existeError) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
        divMensaje.textContent = mensaje;

        formulario.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

function sniperDeCarga(resultado) {
    console.log("spinner");
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;

    resultado.appendChild(spinner);
}
