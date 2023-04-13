const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');

cargarJSONArrayBtn.addEventListener('click', consultarJSONArray );

function consultarJSONArray() {
    const url = "data/empleados.json";
    fetch(url).then( resultado => resultado.json())
    .then( arrayEmpleados => imprimirHTML(arrayEmpleados))
    .catch( e => console.log(e));
}

function imprimirHTML(arrayEmpleados){
    let html = "";
    arrayEmpleados.forEach( ({nombre, id, empresa, trabajo}) => {
        html += `
                    <p>${id}</p>
                    <p>${nombre}</p>
                    <p>${empresa}</p>
                    <p>${trabajo}</p>
                `;
    });

    document.querySelector('#contenido').innerHTML = html;
}