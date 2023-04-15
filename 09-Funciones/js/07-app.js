/// Es llamar necesario una sola función para que se llamen muchas otras funciones
iniciar();

function iniciar() {
    console.log('Iniciando app...');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda función...');
    usuarioAutenticado();
}


function usuarioAutenticado(){
    console.log('Autenticando usuario espere');
    console.log('Usuario autenticado...');
}


