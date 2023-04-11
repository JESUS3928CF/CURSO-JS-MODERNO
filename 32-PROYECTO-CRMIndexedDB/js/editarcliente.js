import { conectarDB, DB } from './indexDB.js';
import { ui } from './classes/UI.js';

(() => {
    // Instancia de objectos

    let idCliente;
    let editando;

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    const formulario = document.querySelector('#formulario');
    console.log(formulario);
    window.formularioEditar = formulario;

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();
        // Verificar el id de la url
        const parametrosURL = new URLSearchParams(window.location.search);

        idCliente = parametrosURL.get('id');
        editando = parametrosURL.get('editando');
        console.log(editando, 'ya la tengo');

        // Actualiza el registro
        formulario.addEventListener('submit', actualizarCliente);

        // console.log(idCliente);
        if (idCliente) {
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 100);
        }

        function actualizarCliente(e) {
            e.preventDefault();

            if (editando === 'true') {
                if (
                    nombreInput.value === '' ||
                    telefonoInput.value === '' ||
                    emailInput.value === '' ||
                    empresaInput.value === ''
                ) {
                    console.error('Error al actualizar');
                    ui.imprimirAlerta(
                        'Todos los campos son obligatorios para editar',
                        'error',
                        'agregarCliente'
                    );

                    return;
                }

                // Actualizar el cliente
                const clienteActualizado = {
                    nombre: nombreInput.value,
                    email: emailInput.value,
                    telefono: telefonoInput.value,
                    empresa: empresaInput.value,
                    id: Number(idCliente),
                };
                // console.log(clienteActualizado);
                const transaction = DB.transaction(['crm'], 'readwrite');
                const objectStore = transaction.objectStore('crm');

                objectStore.put(clienteActualizado);

                transaction.oncomplete = () => {
                    // console.log("editado correctamente");
                    ui.imprimirAlerta(
                        'Cliente actualizado correctamente',
                        'success',
                        'editarCliente'
                    );

                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 3000);
                };

                transaction.onerror = (e) => {
                    console.log('Error al actualizar el cliente');
                };
            }

            

            }

            function obtenerCliente(id) {
                const transaction = DB.transaction(['crm'], 'readonly');
                const objectStore = transaction.objectStore('crm');

                const cliente = objectStore.openCursor();
                cliente.onsuccess = (event) => {
                    const cursor = event.target.result;

                    if (cursor) {
                        // console.log(cursor.value);
                        if (cursor.value.id === Number(id)) {
                            llenarFormulario(cursor.value);
                            // console.log(cursor.value);
                        }

                        cursor.continue();
                    }
                };
                // console.log(objectStore);
            }

            function llenarFormulario(datosCliente) {
                const { nombre, email, telefono, empresa } = datosCliente;

                nombreInput.value = nombre;
                emailInput.value = email;
                telefonoInput.value = telefono;
                empresaInput.value = empresa;
            }
    });
})();

export const formulario = formularioEditar;
