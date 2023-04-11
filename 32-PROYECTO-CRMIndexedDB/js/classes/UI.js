import { formulario as formularioCliente} from "../nuevocliente.js";
import { formulario as formularioEditar} from "../editarcliente.js";

//? Clase para la interacción com los usuarios
export default class UI {
    imprimirAlerta(mensaje, tipo, lugar){
        // console.log("Imprimiendo mensaje");

        // Verificar que no exista la alerta
        const alert = document.querySelector('.alerta');

        if (!alert){
                //? Crear alerta
            const divMensaje = document.createElement("div");

            divMensaje.classList.add("px-4", "py-3","rounded", "max-w-lg", "mx-auto", "mt-6", "text-center", "border", "alerta");

            if (tipo === 'error') {
                divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
            } else {
                divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
            }

            divMensaje.textContent = mensaje;
            
            if (lugar === 'editarCliente') {
                formularioEditar.appendChild(divMensaje);
                console.log('editar...');

                setTimeout(() => {
                    divMensaje.remove();
                }, 3000);
            }

            if(lugar === "agregarCliente"){
                formularioCliente.appendChild(divMensaje);

                setTimeout(()=>{
                    divMensaje.remove();
                },3000);
            }

            
        }
        
    }
}

export const ui = new UI();

