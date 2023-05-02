/// Scope por bloques

const login = true;

function clienteLogueado(){
    const cliente = "Juan";
    console.log(cliente);

    if(login){
        const cliente = "Admin";
        console.log(cliente);
    }
}

clienteLogueado();



