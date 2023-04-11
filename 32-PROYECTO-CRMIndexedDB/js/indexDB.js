export let DB;

// Crea la base de datos
export function crearDB() {
    const crearDB = window.indexedDB.open('crm', 1);

    crearDB.onerror = function () {
        console.log('Error al crear la base de datos');
    };

    crearDB.onsuccess = () => {
        console.log('Success al crear la base de datos');
        DB = crearDB.result;
    };

    crearDB.onupgradeneeded = function (evento) {
        const db = evento.target.result;
        const objectStore = db.createObjectStore('crm', { keyPath: 'id', autoIncrement: true });

        // Crear los diferentes campos

        objectStore.createIndex('nombre', 'nombre', { unique: false});
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });
        objectStore.createIndex('empresa', 'empresa', { unique: false });
        objectStore.createIndex('id', 'id', { unique: true });

        console.log("dn lista y creada");
    };
}

// Conectarse a la base de datos crm

export function conectarDB() {
    const abrirConexion = window.indexedDB.open('crm', 1);

    abrirConexion.onerror = function () {
        console.log('Error al abrir la base de datos');
    };

    abrirConexion.onsuccess = () => {
        // console.log('Success al abrir la base de datos');
        DB = abrirConexion.result;
    };
}
