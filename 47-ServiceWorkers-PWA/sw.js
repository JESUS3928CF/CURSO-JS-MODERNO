/// los archivos que se van a agregar al cache
const nombreCache = "apv-v10"; //! Le cambiamos el nombre para que se instale como otra versión      
const archivos = [
    //* Cualquier archivo puede ser cacheado
    '/',
    './index.html',
    './error.html', //- es necesario cachear la página de error también
    './css/bootstrap.css',
    './css/styles.css',
    './js/app.js',
    './js/apv.js',
];

/// Cuando se instala el service worker solo se ejecuta una sola vez cuando instalado
self.addEventListener("install", e => { //* Consejo, cuando se instala es un buen lugar para cachear ciertos archivos
    console.log("Instalando el Service Worker");

    /// se espera hasta que se descarguen todos los archivos a cachear
    e.waitUntil(
        caches.open(nombreCache).then((cache) => {
            console.log('cacheando');
            cache.addAll(archivos); //- se agregan al cache
            //* Si fuese solo un archivo se le puede poner all pero es un arreglo de archivos
        })
    );
});


/// Evento para cuando se ha activado el service worker
self.addEventListener('activate', e => {
    //* Consejo, cuando se activa es un buen lugar para nuevas versiones de nuestra PWA
    console.log('El Service Worker se ha activado');

    //! necesitamos seleccionar la ultima versión y ademas eliminar las otras
    
    e.waitUntil( //* Hay que poner a esperar hasta que lea todos los archivos dado a que puede ser tardado y el active es inmediato
        caches.keys()
            .then( keys => {
                console.log(keys) //* ver un array de las versiones
                console.log(nombreCache);
                return Promise.all(
                    keys.filter(key => key !== nombreCache)
                        .map( key => caches.delete(key)) /// Borra las demás versiones
                );
            })
    );
});




//. Se necesitan 3 cosas para que una PWA se pueda instalar PRIMERO un manifest valido SEGUNDO tener un dominio https o ser local host y TERCERO hay que tener registrado el evento de fetch


/// Evento fetch para descargar archivos estáticos
self.addEventListener('fetch', e => {
    console.log("Fetch... ", e);

    e.respondWith(
        caches
            .match(e.request)
            .then((respuestaCache) => {
                return respuestaCache;
            })
            .catch(() => caches.match('./error.html')) //. Solo se necesita esto para redirigir a la página de error
        //- En caso de que estemos haciendo un request a algo que no hemos cacheado previamente mandamos al usuario a error html
    );
})


