import { mostrarAlerta,validar } from "./funciones.js";
import { nuevoCliente } from "./API.js";

(()=>{
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", validarCliente);

    function validarCliente(evento){
        evento.preventDefault();

        const nombre = document.querySelector("#nombre").value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if(validar(cliente)){
            /// Mostrar Mensaje
            mostrarAlerta("Todos los campos son obligatorios");

            return;
        };

        nuevoCliente(cliente); 
    }

    
})();