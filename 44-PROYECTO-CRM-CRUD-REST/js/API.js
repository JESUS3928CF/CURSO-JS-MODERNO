const url = 'http://localhost:4000/clientes';

/// Cuando se crea un nuevo registró
export const nuevoCliente = async cliente => {
    try {
        /// Por defecto el fetch manda una petición de tipo get
        //! Petición de tipo post para crear un nuevo registro
        await fetch(url, { /// abrimos un objeto de configuración 
            method: "POST", /// definimos el method que utilizara este fetch
            body:   JSON.stringify( cliente ), /// aca definimos el contenido que enviaremos
            headers: { /// los header son información de que tipo de datos estamos enviando
                'Content-Type': 'application/json' //* el header varia de acuerdo a lo que Estes enviando al servidor
            }
        });
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
    }
}


/// Obtiene todos los clientes
export const obtenerClientes = async()=> {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();

        return clientes;
    } catch (error) {
        console.log(error);
    }
};

/// Eliminar un cliente...

export const eliminarCliente = async id =>{
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log(error);
    }
};

/// Obtiene un cliente por su ID
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();

        return (cliente);
    } catch (error) {
        console.log(error);
    }
}


//- Actualiza un registro
export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method : 'PUT',
            body: JSON.stringify(cliente),
            headers:{
                "Content-Type": "application/json"
            }
        });
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
    }
}