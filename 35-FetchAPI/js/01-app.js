const btnCargarTxt = document.querySelector('#cargarTxt');

btnCargarTxt.addEventListener("click", obtenerDatos);

function obtenerDatos() {
    /// Con fetch se pueden recibir o enviar datos a traves de una solicitud web
    //! Quiero que hagas un fetch y consultes esta url
    fetch('data/datos.txt') //* Utiliza Promises para obtener la respuesta
        .then((respuesta) => { //! Entonces la respuesta la quiero como texto
            console.log(respuesta);
            console.log(respuesta.status); //* Obtiene el estado de la solicitud web
            console.log(respuesta.statusText); //* Obtiene el estado en testo de la solicitud web
            console.log(respuesta.url); //* Obtiene la URL de el sitio Web
            console.log(respuesta.type); //* Muestra el tipo de consulta

            return respuesta.text(); /// La respuesta la quiero como txt
        })
        //! Entones imprime los datos
        .then((datos) => console.log(datos)) /// En este segundo then viene el contenido de la respuesta
        .catch( error => console.log(error)) //! En caso de que se produzca un reject muéstrelo
}

