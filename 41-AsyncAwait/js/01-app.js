console.log(1 + 1);

//! No es necesario que todo valla en un try catch solo UTILÍZALO en partes criticas de tu app como conectar un DB
/// Lo que soluciona try es lograr que el codigo se siga ejecutando correctamente
try {
    //* Cunado el codigo falla deja de ejecutarse
    hola();
} catch (error) {
    console.log(error);
} finally {
    console.log(2 + 2);
}

console.log("Ocurrió un error y no me detuve");


