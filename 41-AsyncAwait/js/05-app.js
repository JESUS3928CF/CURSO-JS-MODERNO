const url = "http://picsum.photos/list";

document.addEventListener("DOMContentLoaded", obtenerDatos);

// function obtenerDatos(){
//     /// Esto es lo que hemos venido haciendo
//     fetch(url)
//         .then( respuesta => respuesta.json()) 
//             .then( respuesta => console.log(respuesta))
//                 .catch( e => console.log(e));
// }

async function obtenerDatos(){
    //* Es try es necesario para poder ver una respuesta en caso de error
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        /// es necesario utilizar dos llamadas a await porque ambas dependen de la finalización de una acción asíncrona y aseguran que la ejecución del código se detenga hasta que se complete dicha acción

        console.log(resultado);
    } catch (error) {
        console.log(error);
    }

    
}