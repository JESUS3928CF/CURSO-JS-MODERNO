const salida = document.querySelector("#salida");

const microfonoBtn = document.querySelector("#microfono");

microfonoBtn.addEventListener("click", ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    /// Inicia el reconocimiento de la voz por micro
    recognition.start();

    /// Esta función se ejecuta cuando recognition empieza a ejecutarse
    recognition.onstart = function () {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    };

    /// Este evento se ejecuta cuando se deja de grabar
    recognition.onspeechend = function () {
        salida.textContent = 'Se dejo de grabar';
        recognition.stop();
    };

    /// Esta función se ejecuta cuando se tiene un resultado de lo grabado por el micro
    recognition.onresult = function (evento) {
        // / result es un objeto que tiene valores como lo que se grabo y -
        // / los seguro que esta que eso fue lo que se grabo
        console.log(evento.results);
        const resultado = evento.results[0][0];

        /// Estos son keys del objeto e.result uno es lo que grabo y el otro lo la seguridad de que es eso
        const { confidence, transcript } = resultado;

        const speech = document.createElement("p");
        speech.innerHTML = `Grabado:${transcript}` 

        const seguridad = document.createElement("p");
        seguridad.innerHTML = `Seguridad:${parseInt(confidence * 100)}%`

        salida.appendChild(speech);
        salida.appendChild(seguridad);
    };
}