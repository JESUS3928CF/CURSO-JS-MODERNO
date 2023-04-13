( () => {
    const btnCargarJSON = document.querySelector('#cargarJSON');

    btnCargarJSON.addEventListener('click', obtenerJSON);

    //! Se hace la solicitud y se extrae un objeto
    function obtenerJSON() {
        const url = 'data/empleado.json';
        fetch(url) /// Haciendo la solicitud
            .then((resultado) => resultado.json()) /// Retorna el resultado en un JSON
            .then((dato) => imprimirHTML(dato)) /// Se manda el objeto a una función
            .catch((error) => console.log(error));
    }

    //! Se muestra en el HTML el resultado de la solicitud
    function imprimirHTML({ empresa, id, nombre, trabajo }) {
        const html = `
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Empresa: ${empresa}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Id: ${id}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Nombre: ${nombre}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Trabajo: ${trabajo}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
        document.querySelector('#contenido').innerHTML = html;
    }
} )();
