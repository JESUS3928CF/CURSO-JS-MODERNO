const formulario = document.querySelector('#formulario');

//! Este evento sucede en el formulario
/// Cuando se presiona el input que tiene el type submit
formulario.addEventListener('submit', validarFormulario) //* No llamarla por que se ejecutara sin esperar el evento

function validarFormulario(e){
    /// Detiene la acción por defecto del elemento
    e.preventDefault();
    console.log('Consultar una api...');

    /// Mostrando atributos del elemento donde ocurrió el evento
    console.log(e.target.action);
    console.log(e.target.method);
}

