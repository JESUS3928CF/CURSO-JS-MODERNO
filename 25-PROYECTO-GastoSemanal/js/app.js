//* Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

//* Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}

//* Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos.push(gasto);
        this.calcularRestante();
        ui.imprimirAlerta('Gasto agregado correctamente');
    }

    calcularRestante() {
        const gastado = this.gastos.reduce(
            (total, gasto) => total + Number(gasto.cantidad),
            0
        );
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter((gasto) => gasto.id !== id);
        this.calcularRestante();
        ui.imprimirAlerta('Gasto eliminado correctamente');
    }
}
class UI {
    insertarPresupuesto(cantidad) {
        // Extrayendo los valores
        const { presupuesto, restante } = cantidad;

        // agregar al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Agregar mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el HTML
        document
            .querySelector('.primario')
            .insertBefore(divMensaje, formulario);

        // Quitar el HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    mostrarGastos(gastos) {
        // Eliminar el html actual
        this.limpiarHTML();
        // Iterar sobre los gastos
        gastos.forEach((gasto) => {
            const { cantidad, nombre, id } = gasto;
            // Crear el li
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className =
                'list-group-item d-flex justify-content-between align.item-center';
            nuevoGasto.textContent = `${nombre} - ${cantidad}`;
            nuevoGasto.dataset.id = id;
            // nuevoGasto.setAttribute("data-id",id);

            // console.log(nuevoGasto);

            // Agregar al HTML
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>`;
            // Botón de borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.textContent = 'Borrar x';
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            };
            nuevoGasto.appendChild(btnBorrar);
            // Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
        });
    }

    limpiarHTML() {
        while (gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    comprobarPresupuesto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;

        // Seleccionar el contenedor de restante
        const restanteDiv = document.querySelector('.restante');

        // Comprobar 25%
        if (presupuesto / 4 > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if (presupuesto / 2 > restante) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else if (presupuesto / 4 < restante) {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }


        // Fi el total es 0 o menor

        if (restante <= 0) {
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector("button[type='submit']").disabled = true;
        } else {
            ui.imprimirAlerta('El presupuesto no se ha agotado', '');
            formulario.querySelector("button[type='submit']").disabled = false;
        }
    }
}

//todo: Instancias de clases
const ui = new UI();
let presupuesto;

//* Funciones

function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    // console.log( Number(presupuestoUsuario) );

    if (
        presupuestoUsuario === '' ||
        isNaN(presupuestoUsuario) ||
        presupuestoUsuario === null ||
        presupuestoUsuario <= 0
    ) {
        window.location.reload();
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    // console.log(presupuesto);
    ui.insertarPresupuesto(presupuesto);
}

// Añade gastos
function agregarGasto(e) {
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    // Validar
    if (cantidad === '' || nombre === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('La cantidad no es válida', 'error');
        return;
    }

    const gasto = { nombre, cantidad, id: Date.now() };
    // añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);

    // Imprimir los gastos
    const { gastos, restante } = presupuesto;

    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);
    // Reiniciar formulario
    formulario.reset();
}

function eliminarGasto(id) {
    // Elimina dl objeto
    presupuesto.eliminarGasto(id);

    // Elimina los gastos del HTML
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);
}
