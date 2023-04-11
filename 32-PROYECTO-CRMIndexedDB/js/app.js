// import { crearDB, DB } from './indexDB.js';
import { crearDB } from './indexDB.js';

(() => {
    let DB;

    const listadoClientes = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', () => {
        crearDB();

        if (window.indexedDB.open('crm', 1)) {
            obtenerClientes();
        }

        listadoClientes.addEventListener("click", eliminarRegistro);
    });

    function eliminarRegistro(e) {
        if(e.target.classList.contains("eliminar")){
            // console.log("Diste click en eliminar");
            const idEliminar = Number(e.target.dataset.cliente);
            // console.log(idEliminar);
            const confirmar = confirm("Deseas eliminar este cliente?");

            if(confirmar){
                const transaction = DB.transaction(['crm'], 'readwrite');
                const objectStore = transaction.objectStore('crm');

                objectStore.delete(idEliminar);

                transaction.oncomplete = () => {
                    console.log("Eliminado...");
                    
                    // window.location.reload();
                    e.target.parentElement.parentElement.remove();
                }
                transaction.onerror = () => {
                    console.log('Error al eliminar');
                };
            };
        };
    }

    function obtenerClientes() {
        let editando = true;
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function () {
            console.log('Error al abrir la base de datos');
        };

        abrirConexion.onsuccess = function () {
            DB = abrirConexion.result;

            const objectStore = DB.transaction('crm').objectStore('crm');

            objectStore.openCursor().onsuccess = (e) => {
                const cursor = e.target.result;
                if (cursor) {
                    const { nombre, empresa, email, telefono, id } =
                        cursor.value;

                    

                    listadoClientes.innerHTML += ` <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                <p class="text-gray-700">${telefono}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                <p class="text-gray-600">${empresa}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                <a href="editar-cliente.html?editando=${editando}&id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                            </td>
                    </tr>`;

                    cursor.continue();
                } else {
                    console.log('No hay más registros');
                }
            };
        };
    }
})();
