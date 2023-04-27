function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('Se descargo el listado de clientes correctamente');
            } else {
                reject('Error de conexión');
            }
        }, 3000);
    });
}

/// function Declaration es de esta forma
async function ejecutar(){

}

/// function express es de esta forma
const ejecutar = async () => {
    try {
        console.log(1 + 1); //* Este codigo se va a ejecutar
        const respuesta = await descargarClientes();

        console.log(2 + 2);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
};

ejecutar();
