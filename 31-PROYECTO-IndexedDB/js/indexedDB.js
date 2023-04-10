import { ui } from "./app.js";
export let DB;

export function crearDB() {
    // Crear La base de datos en versión 1.0
    const crearDB = window.indexedDB.open('citas', 1);

    // Si hay un error
    crearDB.onerror = function (event) {
        console.log('Error al crear la base de datos');
    };

    // Si se crea la base de datos
    crearDB.onsuccess = function (event) {
        console.log('Base de datos creada');

        DB = crearDB.result;

        // Mostrar citas al cargar (Pero indexedDb ya esta listo)
        ui.imprimirCitas();
    };

    // Definir el schema
    crearDB.onupgradeneeded = function (e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('citas', {
            keyPath: 'id',
            autoIncrement: true,
        });

        // Definir todas las columnas
        objectStore.createIndex('mascota', 'mascota', { unique: false });
        objectStore.createIndex('propietario', 'propietario', {
            unique: false,
        });
        objectStore.createIndex('telefono', 'telefono', { unique: false });
        objectStore.createIndex('fecha', 'fecha', { unique: false });
        objectStore.createIndex('hora', 'hora', { unique: false });
        objectStore.createIndex('sintomas', 'sintomas', { unique: false });
        objectStore.createIndex('id', 'id', { unique: true });

        console.log('DB Creada y lista');
    };
}
