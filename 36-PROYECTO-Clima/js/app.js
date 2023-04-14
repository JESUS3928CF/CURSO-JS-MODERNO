(() => {
    const container = document.querySelector('.container');
    const resultado = document.querySelector('#resultado');
    const formulario = document.querySelector('#formulario');

    window.addEventListener('load', () => {
        formulario.addEventListener('submit', buscarClima);
    });

    //! Funciones
    function buscarClima(e) {
        e.preventDefault();

        /// Validar
        //* Seleccionar los valores de inputs a validar
        const pais = document.querySelector('#pais').value;
        const ciudad = document.querySelector('#ciudad').value;

        //* Validar
        const regex = /^[a-zA-Z'áéíóúÁÉÍÓÚñÑ\s]+$/;

        if (pais === '' || ciudad === '') {
            mostrarError('Todos los datos son obligatorios');
            return;
        } else if (!regex.test(ciudad)) {
            mostrarError('Solo se permiten letras');
            return;
        }

        // console.log('Consultando API');
        /// consultar API
        consultarAPI(ciudad, pais);
    }

    //- Imprime un mensaje en la pantalla
    function mostrarError(message) {
        /// Técnica para detectar un elemento HTML
        let alerta = document.querySelector('.alerta');

        /// Si no encuentra el elemento se ejecuta el if y si ya existe no lo crea de nuevo
        if (!alerta) {
            /// Crear una alerta
            alerta = document.createElement('div');
            alerta.classList.add(
                'alerta',
                'bg-red-100',
                'border-red-400',
                'text-red-700',
                'px-4',
                'py-4',
                'py-3',
                'rounded',
                'max-w-md',
                'mx-auto',
                'mt-6',
                'text-center'
            );
            alerta.innerHTML = ` <strong class="font-bold">Error!</strong>
            <span class="block">${message}</span>
        `;

            container.appendChild(alerta);

            setTimeout(() => {
                alerta.remove();
            }, 5000);
        }
    }

    //- consultar a la API Con KEY
    function consultarAPI(ciudad, pais) {
        const appId = 'b7afe4f530c0da5885807321b30dc43c'; /// Copio la llave del la Página de la API

        /// Personalizo la llamada con los datos que me exige la API del clima en especifico
        //- Una llamada a una API puede ser muy diferente a la de otra API
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        Spinner() //* Muestra un spinner de carga
        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((info) => {
                if (info.cod === '404') {
                    mostrarError('Ciudad no encontrada');
                    return;
                }

                extraerInfoMostrarClimaHTML(info);
            })
            .catch((error) => console.log(error));
    }

    function extraerInfoMostrarClimaHTML(info) {
        /// Extraer la información que queremos consumir del objeto pedido
        const { main: { temp, temp_max, temp_min }, name} = info;
        //* Se extrae la temperatura actual, min , max en grados kelvin y el nombre de la ciudad

        const centigrados = kelvinACentigrados(temp); //* Se transforman de grados kelvin a centígrados
        const max = kelvinACentigrados(temp_max);
        const min = kelvinACentigrados(temp_min);

        /// Se imprime la información
        imprimirHTML(centigrados,max,min, name);
    }

    //* Helper function
    const kelvinACentigrados = (grados) => parseInt(grados - 273.15);

    function imprimirHTML(centigrados, max, min, nombre) {
        //* Primero se limpia el HTML anterior
        limpiarHTML();

        const ciudad = document.createElement('p');
        ciudad.textContent = `Clima en: ${nombre}`
        ciudad.classList.add('font-bold', 'text-2xl');

        const actual = document.createElement('p');
        actual.innerHTML = `${centigrados} &#8451; `;
        actual.classList.add('font-bold', 'text-6xl');

        const temperatura_max = document.createElement('p');
        temperatura_max.innerHTML = `Max: ${max} &#8451; `;
        temperatura_max.classList.add('text-xl');

        const temperatura_min = document.createElement('p');
        temperatura_min.innerHTML = `Min: ${min} &#8451; `;
        temperatura_min.classList.add('text-xl');

        const resultadoDiv = document.createElement('div');
        resultadoDiv.classList.add('text-center', 'text-white');
        resultadoDiv.appendChild(ciudad);
        resultadoDiv.appendChild(actual);
        resultadoDiv.appendChild(temperatura_max);
        resultadoDiv.appendChild(temperatura_min);

        resultado.appendChild(resultadoDiv);
    }

    function limpiarHTML() {
        while (resultado.firstChild) {
            resultado.removeChild(resultado.firstChild);
        }
    }

    function Spinner(){

        limpiarHTML(); //* limpiamos lo que esta en el div en el que alojaremos es spinner

        /// creamos el spinner
        const divSpinner = document.createElement('div');
        divSpinner.classList.add('sk-fading-circle');

        divSpinner.innerHTML = ` 
                    <div class="sk-circle1 sk-circle"></div>
                    <div class="sk-circle2 sk-circle"></div>
                    <div class="sk-circle3 sk-circle"></div>
                    <div class="sk-circle4 sk-circle"></div>
                    <div class="sk-circle5 sk-circle"></div>
                    <div class="sk-circle6 sk-circle"></div>
                    <div class="sk-circle7 sk-circle"></div>
                    <div class="sk-circle8 sk-circle"></div>
                    <div class="sk-circle9 sk-circle"></div>
                    <div class="sk-circle10 sk-circle"></div>
                    <div class="sk-circle11 sk-circle"></div>
                    <div class="sk-circle12 sk-circle"></div> `
        /// Lo agregamos al html
        resultado.appendChild(divSpinner);
    }
})();
