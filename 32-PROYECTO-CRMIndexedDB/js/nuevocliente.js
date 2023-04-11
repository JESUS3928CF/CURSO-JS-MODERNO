import { conectarDB,DB } from "./indexDB.js";
import UI,{ui} from "./classes/UI.js";


( () => {
    let editando = false;

    const formulario = document.querySelector('#formulario');
    window.formularioModulo = formulario;

    // Instancias de clases
    // const ui = new UI();

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        // Verificar el id de la url
        const parametrosURL = new URLSearchParams(window.location.search);

        editando = parametrosURL.get('editando');
        console.log(editando, "Desde cliente");

        formulario.addEventListener('submit', validarCliente);
    })

    function validarCliente(e) {
        if(editando != "true"){
            e.preventDefault();

            // console.log("Validando");

            // Leer todos los inputs
            const nombre = document.querySelector('#nombre').value;
            const email = document.querySelector('#email').value;
            const telefono = document.querySelector('#telefono').value;
            const empresa = document.querySelector('#empresa').value;

            if (
                nombre === '' ||
                email === '' ||
                telefono === '' ||
                empresa === ''
            ) {
                // console.error("Error ")
                ui.imprimirAlerta(
                    'Todos los campos son obligatorios',
                    'error',
                    'agregarCliente'
                );

                return;
            }

            // Crear un objecto con la información
            const cliente = {
                id: Date.now(),
                nombre,
                email,
                telefono,
                empresa,
            };

            // console.log(cliente);

            crearNuevoCliente(cliente);
        }
    }

    function crearNuevoCliente(cliente) {
        console.log(DB);
        const transaction = DB.transaction("crm", "readwrite");

        const objectStore = transaction.objectStore("crm");

        objectStore.add(cliente);

        transaction.onerror = () => { 
            // console.error("Hubo un error");
            ui.imprimirAlerta("Hubo un error", "error", "agregarCliente");
            console.log("Desde clientes");
        };

        transaction.oncomplete = () => { 
            // console.log("Cliente Agregado")
            window.location.href = "index.html";
            ui.imprimirAlerta("Cliente Agregado", "success", "agregarCliente");
        };
    }
})();

export const formulario = formularioModulo;

