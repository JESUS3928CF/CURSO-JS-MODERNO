const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
/// Seleccionamos el div que contendrá los botones a generar 
const paginacionDiv = document.querySelector('#paginacion');

/// Primero de define cuantos registros se mostraran por pagina
const registrosPorPagina  = 40;
let totalPaginas;
let iterador;
/// 4 -- siempre cuando se hace la primera consulta vamos a estar en la pagina 1
let paginaActual = 1;

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
};

//! Funciones DE UI
function validarFormulario(e) {
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if (terminoBusqueda === '') {
        mostrarAlerta('Agrega un término de búsqueda');
        return;
    }

    buscarImagenes(terminoBusqueda);
}

function mostrarAlerta(mensaje) {
    /// Se verifica si ya existe la alerta
    if (resultado.firstChild) {
        // console.log('Ya existe no enviar alerta');
    } else { /// Se crea la alerta
        const alert = document.createElement('p');
        alert.classList.add(
            'error',
            'bg-red-100',
            'border-red-400',
            'text-red-700',
            'px-4',
            'py-3',
            'rounded',
            'max-w-lg',
            'mx-auto',
            'mt-6',
            'text-center'
        );

        alert.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

        resultado.appendChild(alert);

        /// Se elimina la alerta
        setTimeout(() => {
            resultado.removeChild(resultado.firstChild);
        }, 3000);
    }

    
}

function mostrarImagenes( imagenes ) {
    /// Eliminar resultados previos
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    /// Iterar sobre las imágenes y construir el html
    imagenes.forEach((imagen) => {
        const { previewURL, likes, views, largeImageURL } = imagen;

        //- Utilizando el grit de telwin para generar el CARD
        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${previewURL}">
                

                    <div class="p-4">
                        <p class="font-bold"> ${likes} <span class="font-light"> Me Gustas </span> </p>
                        <p class="font-bold"> ${views} <span class="font-light"> Veces Vista </span> </p>

                        <a class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1" 
                        href="${largeImageURL}" target="_blank" rel="noopener noreferrer"> Ver Imagen </a>
                    </div>
                </div>
            </div>
        `; /// LINEA 71 En el div contenedor se especifica el tamaño que tomara de la pantalla dependiendo su tamaño osea lo hace responsive
        /// y agrega espacio entre los card para que se separen

        /// LINEA 72 agrega otro div para darle mas efecto al card

        /// LINEA 73 Agrega una ims con una clase para las imágenes

        /// LINEA 74 agrega información al card
        /// LINEA 81 Le da seguridad al _blank con ese REL
    });

    //-Limpiar el paginador previo 
    while(paginacionDiv.firstChild){
        paginacionDiv.removeChild(paginacionDiv.firstChild);
    }

    /// Llamar después de la creación de los registros en html a esas alturas ya tener el total de paginas
    imprimirPaginador();
}

//! Funciones de lógica del proyecto

/// Luego calcular las paginas a crear si tenemos 500 entonces total de paginas 500/40 = 12.5 paginas se redondea hacia arriba
function calcularPaginas(total){
    return parseInt(Math.ceil( total / registrosPorPagina));
}

/// Generador que va a registrar la cantidad de elementos de acuerdo a las paginas
function* crearPaginador(total){
    for (let i = 1; i <= total; i++) {
        /// Para registrar el valor actual
        yield i;
    }
}

function imprimirPaginador(){
    /// Asignamos el resultado del paginador a una variable
    iterador = crearPaginador(totalPaginas);

    // console.log(iterador.next().done);
    while(true){
        const {value, done} = iterador.next();

        /// Se se llega al final ya no ejecutar nada
        if(done) return;

        /// Caso contrario, genera un botón por cada elemento en el generador 
        const boton = document.createElement("a");
        boton.href = "#" //* No nos llevara a ningún lado solo de una pagina a otra
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add("siguiente", "bg-yellow-400", "px-4", "py-1", "mr-2", "font-bold", "mb-4", "rounded");

        /// 4 cargar los resultados de la pagina seleccionada
        boton.onclick = () => {
            paginaActual = value;

            buscarImagenes();
        }

        paginacionDiv.appendChild(boton);
    }
}

//! Funciones de la API

/// 4 -- se quita el termino a la función por que de otra forma va a consultar la API ya sin termino
function buscarImagenes() {
    /// 4 -- Esta variable ya no se recibe como argumento sino que se crea de una forma más local
    const termino = document.querySelector("#termino").value;

    const key = '35554428-7a76aa8de7b11d931ba628065';

    /// 4 - se agrega la paginacion  de pagina de la API si este no tiene es más difícil hacer esto
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;

    fetch(url)
        .then( respuesta => respuesta.json())
            .then( resultado => {
                /// Se obtiene el total de registros
                totalPaginas = calcularPaginas(resultado.totalHits);
                mostrarImagenes(resultado.hits)})
                .catch( err => console.log(err));


}


