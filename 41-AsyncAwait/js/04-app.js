function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log("Descargando Clientes...");

        setTimeout(()=>{
            resolve("Los Clientes han sido descargados");
        },5000);
    });
}


function descargarNuevosPedidos() {
    return new Promise((resolve) => {
        console.log('Descargando Pedidos...');

        setTimeout(() => {
            resolve('Los Pedidos han sido descargados');
        },3000);
    });
}

const app = async ()=> {
    try {

        //- Promise.all ejecuta los promises que les pases al mismo tiempo, se gana performance en la app
        const respuesta = await Promise.all([ descargarNuevosClientes(), descargarNuevosPedidos()]);

        console.log(respuesta[0]);
        console.log(respuesta[1]);

        /// Se crear un array con todos los resolve
        console.log(respuesta);


        // const clientes = await descargarNuevosClientes();
        // console.log(clientes);

        // /// Esto funcione pero no es ideal, por que espera a que el promise de clientes se resuelva
        // /// Esta mal porque no es necesario los clientes en este caso
        // const pedidos = await descargarNuevosPedidos(); 
        // console.log(pedidos);
    } catch (error) {
        console.log(error);
    }
};

app();