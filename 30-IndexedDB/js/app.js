let DB;

document.addEventListener( "DOMContentLoaded",() => {
    crmDB();

    setTimeout( () => {
        crearCliente();
    }, 500);
});

function crmDB() {
    // Crear la base de datos
    let crmDB = window.indexedDB.open("crm", 1);

    // Si hay un error
    crmDB.oneError = function (){
        console.log("Error al crear la base de datos");
    }

    // Si se creo bien
    crmDB.onsuccess = function (){
        console.log("Base de datos creada");

        DB = crmDB.result;
    }

    // Configuración de la base de datos
    crmDB.onupgradeneeded = function (e){
        // console.log("Este método solo se ejecuta una vez...");
        console.log(e.target.result);

        const db = e.target.result;

        const objectStore = db.createObjectStore("crm",{
            keyPath: "crm",
            autoIncrement: true
        });

        // Definir las columnas
        objectStore.createIndex("nombre","nombre", { unique: false});
        objectStore.createIndex("email","email", { unique: true});
        objectStore.createIndex("telefono","telefono", { unique: false});

        console.log("Columnas Creadas");
    }
}

function crearCliente() {
    let transaction = DB.transaction(["crm"], "readwrite");

    transaction.oncomplete = function() {
        console.log("Transaction completada");
    }

    transaction.onerror = function() {
        console.log("Error en la transacción");
    }

    const objectStore = transaction.objectStore("crm");

    const nuevoCliente = {
        telefono: 122121212,
        nombre: "Juan",
        email: "kenaa@example.com"
    }

    const peticion = objectStore.add(nuevoCliente);

    //todo Put para actualizar
    //* const peticion = objectStore.put(nuevoCliente);
    //todo delete para eliminar
    //* const peticion = objectStore.delete(nuevoCliente);



    console.log(peticion);
}