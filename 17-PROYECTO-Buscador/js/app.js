//! VARIABLES
const marca = document.querySelector("#marca");
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puestas = document.querySelector('#puestas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la búsqueda
const datosBusqueda = {
    marca:"",
    modelo:"",
    year:"",
    minimo:"",
    maximo:"",
    puertas:"",
    transmision:"",
    color:"",
}

//! EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // Muestra los automobiles al cargar

    // Llena las opciones de años
    llenarSelect();
});

//* Even listener para los select de la búsqueda
marca.addEventListener('change', e => {
    datosBusqueda["marca"] = e.target.value;
    filtrarAuto();
});

year.addEventListener('change', (e) => {
    datosBusqueda['year'] = parseInt(e.target.value);
    filtrarAuto();
});

minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = parseInt(e.target.value);

    filtrarAuto();
});

maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = parseFloat(e.target.value);

    filtrarAuto();
});

// marca.addEventListener('change', (e) => {
//     datosBusqueda.marca = e.target.value;
// });

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);

    filtrarAuto();
});

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();

    console.log(datosBusqueda);
});

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
});

//! FUNCIONES
//* Muestra los párrafos de los autos en el html
function mostrarAutos(autos) {
    limpiarHTML(); // Elimina el html previo

    autos.forEach((auto) => {
        const { marca, modelo, year, precio, puertas, color, transmision } =
            auto;
        autos;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        ${marca} - ${modelo} - ${year} - Precio: ${precio} - ${puertas} Puertas - ${color} - Transmisión ${transmision}
        `;

        // insertar en el html
        resultado.appendChild(autoHTML);
    });
}

//* Genera los años del select
function llenarSelect() {
    for (let i = max; i > min; i--) {
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);// Agrega las opciones de año al select
    }
}

//* Función que filtra en base a la búsqueda 
function filtrarAuto(){
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo).filter( filtrarPuertas )
    .filter( filtrarTransmision ).filter( filtrarColor);

    // console.log(resultado);
    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function filtrarMarca(auto){
    const{marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto){
    const{year} = datosBusqueda;
    if(year){
        return auto.year === year;
    }
    return auto;
}

function filtrarMinimo(auto){
    const { minimo } = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    const { maximo } = datosBusqueda;
    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto){
    const { puertas } = datosBusqueda;
    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
        return auto.color === color;
    }
    return auto;
}

function limpiarHTML(){

    while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild);
    }
}

function noResultado(auto){
    limpiarHTML();
    const noResultado = document.createElement("div");
    noResultado.classList.add("alerta", "error");
    noResultado.textContent = "No hay resultados, Intenta con otras términos de búsqueda"

    resultado.appendChild(noResultado);
}