//! variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// localStorage.clear();

//! Even Listener
listaEventos();

function listaEventos(){
    //cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('click', agregarTweet);

    //cuando el documento este listo
    document.addEventListener("DOMContentLoaded", () => {
        tweets = JSON.parse(localStorage.getItem("tweets")) || [];
        console.log(tweets);

        crearHTML();
    });
}

//!Funciones
function agregarTweet(e){
    e.preventDefault();

    if(e.target.classList.contains("button")){
        // TextArea donde el usuario escribe
        const tweet = document.querySelector('#tweet').value;

        // validación...
        if (tweet === '') {
            console.log('No puede ir vacío');
            mostrarError('Un tweet no puede ir vacío');
            return; // evita que se ejecuten más linea de codigo
        }

        const tweetObj = {
            id: Date.now(),
            tweet,
        };

        // añadir al arreglo de tweets
        tweets = [...tweets, tweetObj];

        // Una ves agregado creamos el html
        crearHTML();

        // reiniciar el formulario
        formulario.reset();
        // console.log(tweets);
    }
    
}

// Mostrar Mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement("p");
    mensajeError.textContent = error;
    mensajeError.classList.add("error");

    //Insertarlo en el contenido
    const contenido = document.querySelector(".six");
    contenido.appendChild(mensajeError);

    // elimina a alerta después de 3 segundos 
    setTimeout(() => {
        mensajeError.remove();
    }, 2000);
}

// MUESTRA UN LISTADO DE LOS TWEETS
function crearHTML(){
    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach( tweet => {
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add("borrar-tweet");
            btnEliminar.innerText = "X";

            // añadir la función de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            };

            // Crear el HTML

            const li = document.createElement("li");
            // asignar texto
            li.innerHTML = tweet.tweet;
            // asignar bottom
            li.appendChild(btnEliminar);
            // insertarlo el el html
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
};

// AGREGAR LOS TWEETS ACTUALES AL LOCAL STORAGE
function sincronizarStorage() {
    localStorage.setItem("tweets", JSON.stringify(tweets));
}

//BORRAR TWEET
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id);
    
    crearHTML();
}
// lIMPIAR EL HTML
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}
