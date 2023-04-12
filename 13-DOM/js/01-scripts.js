let elemento;

/// Se todo el documento HTML
elemento = document;
/// all selecciona todos los elementos de el HTML y los almacena en un Array
elemento = document.all;
/// Selecciona todo lo que este dentro de la etiqueta HEAD
elemento = document.head;
/// Selecciona todo lo que este dentro de la etiqueta BODY que es todo lo que se puede ver en la página
elemento = document.body;
/// Selecciona el dominio donde esta la página actual
elemento = document.domain
/// Accede a todos los formularios de la página y loa almacena en un array (HTML COLLECTION )
elemento = document.forms;

/// Accede los atributos del primer formulario
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].action;
elemento = document.forms[0].classList; //* Almacena las clases en un HTML COLLECTION (Array)

/// Selecciona todos los enlaces de la página en un HTML COLLECTION
elemento = document.links;
elemento = document.links[4]; //* Selecciona el link #5 
elemento = document.links[4].className; //* Selecciona las classes del link #5 Y devuelve un STRING

/// /// Selecciona todas las imágenes de la página en un HTML COLLECTION
elemento = document.images;
elemento = document.scripts; //* Selecciona los scripts

elemento = document.onclick = () => { console.log("Hola");};



console.log(elemento);