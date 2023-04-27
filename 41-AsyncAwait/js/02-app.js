//- Ejemplo de Async Await y que es lo que hace
function descargarClientes(){

    /// Es muy parecido a un promise pero no lo es de echo utiliza un Promise
    return new Promise((resolve, reject)=>{
        const error = true;

        setTimeout(()=>{
            /// En una API aquí estaríamos simulando lo que seria el fetch
            if (!error) {
                resolve('Se descargo el listado de clientes correctamente');
            } else {
                reject('Error de conexión');
            }
        },3000)
        
    });
}


//! Async Await
//- Async Tiene que ser la función padre osea la que manda a llamar el promise
async function ejecutar(){  //* Esta es la función padre
    try{
        console.log(1+1);//* Este codigo se va a ejecutar
        /// No utilizamos .then() para retornar el resultado de la PROMESA
        /// En el caso de Async Await ese valor se asigna a una nueva variable
        //- await va a esperar a que se ejecute el promise para utilizarlo
        const respuesta = await descargarClientes(); //* Lo que hace es detener la ejecución hasta obtener el resultado del promise

        /// Si el promise retorna resolve se ejecutara este codigo
        console.log(2 + 2); //* Esta linea no se puede ejecutar por que la detuvimos hasta tener un resultado
        console.log(respuesta);
    }catch (error) {
        //- Si el promise retorna un reject Eso dirige la ejecución al Catch Y no se sigue ejecutando el try Solo después del await
        console.log(error);
    }
}

ejecutar();