/// Composition una alternativa a las clases
//* es escribir muchas funciones e ir utilizando según se necesiten

const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre ${info.nombre}`);
    }
})

const guardarEmail = info => ({
    agregarEmail(email){
        console.log(`Guardando email en ${info.nombre}`);

        info.email = email
    }
});

const obtenerEmail = info => ({
    mostrarEmail(){
        console.log(`Correo ${info.email}`);
    }
})

/// Un método sola para cliente
const obtenerEmpresa = info => ({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
})
/// Un método sola para empleado
const obtenerPuesto = info => ({
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto}`);
    }
})

function Cliente(nombre,email,empresa){
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}
function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto,
    };

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    );
}

const cliente = Cliente("Juan", null, "Art zone");
cliente.mostrarNombre();
cliente.agregarEmail("Cliente@cliente.com");
cliente.mostrarEmail();
cliente.mostrarEmpresa();

console.log("================================================================");

const empleado = Empleado('Pedro', null, 'Programador');
empleado.mostrarNombre();
empleado.agregarEmail("empleado@empleado.con");
empleado.mostrarEmail();
empleado.mostrarPuesto();