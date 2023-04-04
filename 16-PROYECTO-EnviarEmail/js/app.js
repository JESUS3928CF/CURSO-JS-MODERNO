document.addEventListener('DOMContentLoaded', function () {
    const email = {
        email: '',
        asunto: '',
        mensaje: '',
    };

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type=submit]');
    const btnReset = document.querySelector('#formulario button[type=reset]');
    const spinner = document.querySelector('#spinner');
    const cc = document.querySelector('#cc');

    let addCedula = false;
    // console.log(cc);

    // Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    cc.addEventListener('blur', validarCc);
    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', (e) => {
        e.preventDefault();

        // Reiniciar el objeto
        resetFormulario();
    });

    function enviarEmail(e) {
        e.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            if(addCedula){
                console.log("Agregar al objeto...");
            }else{
                console.log("No agregar al objeto...");
            }
            console.log(email);
            resetFormulario();
            // crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add(
                'bg-green-500',
                'text-white',
                'p-2',
                'text-center',
                'rounded-lg',
                'mt-10',
                'font-bold',
                'text-sm',
                'uppercase'
            );

            alertaExito.textContent = 'Mensaje enviado correctamente';

            formulario.appendChild(alertaExito);

            
            setTimeout(() => {
                alertaExito.remove();
            }, 3000);
        }, 3000);
    }

    function validar(e) {
        // console.log(e.target.parentElement);
        if (e.target.value.trim() === '') {
            mostrarAlerta(
                `El campo ${e.target.id} es obligatorio`,
                e.target.parentElement
            );
            email[e.target.id] = '';
            comprobarEmail(); //!
            return;
        }

        if (e.target.id == 'email' && !validarGmail(e.target.value)) {
            mostrarAlerta('El email no es válido', e.target.parentElement);
            email[e.target.id] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        // Asignar los valores
        email[e.target.id] = e.target.value.trim().toLowerCase();
        // Comprobar el objeto de email
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {
        // Comprueba si ya existe una alerta
        limpiarAlerta(referencia);

        // Generar alerta en html
        const mensajeError = document.createElement('P');
        mensajeError.classList.add(
            'bg-red-600',
            'text-white',
            'p-2',
            'text-center'
        );
        mensajeError.textContent = mensaje;

        // Inyectar el error al formulario
        referencia.appendChild(mensajeError);
    }

    function limpiarAlerta(referencia) {
        // Comprueba si existe la alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    }

    function validarGmail(email) {
        const expresionRegularGmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const resultado = expresionRegularGmail.test(email);
        return resultado;
        // console.log(resultado);
    }

    function validarCc(e) {
        const regex = /^\d{1,11}$/;
        const resultado = regex.test(e.target.value);
        // console.log(resultado);
        if(!resultado && !e.target.value == '') {
            console.log(e.target.value);
            addCedula = false;
            console.log(resultado);
            console.log("Entrando en la validación del cc");
            mostrarAlerta('La cédula no es válida', e.target.parentElement);
        }else{
            addCedula = true;
            limpiarAlerta(e.target.parentElement);
            email.cedula = e.target.value;
        }
    }

    function comprobarEmail() {
        // console.log(email);
        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }

    function resetFormulario() {
        // Reiniciar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';
        formulario.reset();
        comprobarEmail();
    }
});
