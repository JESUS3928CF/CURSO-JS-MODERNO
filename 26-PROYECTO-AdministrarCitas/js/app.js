// Campos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

// UI
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

let editando;

class Citas {
    constructor() {
        this.citas = [];
    }

    agregarCita(cita) {
        this.citas = [...this.citas, cita];
    }

    eliminarCita(id) {
        this.citas = this.citas.filter((cita) => cita.id !== id);
    }

    editarCita(citaActualizada) {
        this.citas = this.citas.map((cita) => cita.id === citaActualizada.id ? citaActualizada : cita);
    }
}

class UI {
    imprimirAlerta(mensaje, tipo) {
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('alert', 'text-center', 'd-block', 'col-12');

        // Agregar clase en base al tipo de error
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje
        divMensaje.textContent = mensaje;

        // Agregar al DOM
        document
            .querySelector('#contenido')
            .insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        // Quitar la alerta

        setTimeout(() => {
            divMensaje.remove();
        }, 5000);
    }

    imprimirCitas({ citas }) {
        this.limpiarHTML();

        citas.forEach((cita) => {
            const {
                mascota,
                propietario,
                telefono,
                fecha,
                hora,
                sintomas,
                id,
            } = cita;

            // Crear elemento HTML
            const divCita = document.createElement('div');
            divCita.classList.add('card', 'p-3');
            divCita.dataset.id = id;

            // Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card.title', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
            <span class="font-weight-border">Propietario: </span> ${propietario}
             `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
            <span class="font-weight-border">Teléfono: </span> ${telefono}
             `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
            <span class="font-weight-border">Fecha: </span> ${fecha}
             `;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
            <span class="font-weight-border">Síntomas: </span> ${sintomas}
             `;

            // Botón para eliminar esta cita
            const btnEliminarCita = document.createElement('button');
            btnEliminarCita.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminarCita.innerHTML =
                'Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>';
            btnEliminarCita.onclick = () => eliminarCita(id);

            // Botón para editar esta cita
            const btnEditarCita = document.createElement('button');
            btnEditarCita.classList.add('btn', 'btn-info', 'mr-2');
            btnEditarCita.innerHTML =
                'Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>';
            btnEditarCita.onclick = () => editarCita(cita);

            // Agregar los párrafos a divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminarCita);
            divCita.appendChild(btnEditarCita);
            // Agregar las citas al HTML
            contenedorCitas.appendChild(divCita);
        });
    }

    limpiarHTML() {
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

const ui = new UI();
const administrarCitas = new Citas();

// Registrar eventos
eventListeners();
function eventListeners() {
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

    formulario.addEventListener('submit', nuevaCita);
}

// Objeto con la información de la cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
};

// agregar datos al objeto de las citas
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;

    // console.log(citaObj);
}

// Valida y agrega una nueva cita

function nuevaCita(e) {
    e.preventDefault();

    // Extraer la información del objeto de citas
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;
    if (
        mascota === '' ||
        propietario === '' ||
        telefono === '' ||
        fecha === '' ||
        hora === '' ||
        sintomas === ''
    ) {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');

        return;
    }

    if (editando) {
        ui.imprimirAlerta('Editado correctamente');

        // Pasar el objeto de las citas a edición
        administrarCitas.editarCita({...citaObj});

        // Regresar el texto tel botón a su estado original
        formulario.querySelector('button[type=submit]').textContent = 'Crear cita';

        // quitar modo edición
        editando = false;
    } else {
        // generar un id único
        citaObj.id = Date.now();

        // Creando una nueva cita
        administrarCitas.agregarCita({ ...citaObj });

        // MENSAJE DE agregado correctamente
        ui.imprimirAlerta('Cita agregada correctamente', 'success');
    }

    // Reiniciar objeto para la validación
    reiniciarObjecto();

    formulario.reset();

    // Mostrar el HTML de las citas

    ui.imprimirCitas(administrarCitas);
}

function reiniciarObjecto() {
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
    citaObj.id = '';
}

// Eliminar una cita
function eliminarCita(id) {
    // Eliminar una cita
    administrarCitas.eliminarCita(id);

    // Muestre un mensaje
    ui.imprimirAlerta('Cita eliminada', 'success');

    // Refrescar las citas
    ui.imprimirCitas(administrarCitas);
}

// Editar una cita
function editarCita(cita) {
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

    // Llenar los Inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    // Llenar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // Cambiar el texto del botón
    formulario.querySelector('button[type=submit]').textContent =
        'Guardar Cambios';

    editando = true;
}
