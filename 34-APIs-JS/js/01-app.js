const notificarBtn = window.document.querySelector("#notificar");

notificarBtn.addEventListener("click", () => {
    Notification
    .requestPermission()
    .then( resultado => {
        console.log("El resultado es: ", resultado);
    } )
});

const verNotificacionBtn = window.document.querySelector("#verNotificacion");

verNotificacionBtn.addEventListener("click", () => {
    if (Notification.permission) {
        const notification = new Notification('Esta es la notificación', {
            icon: './img/ccj.png',
            body: 'Código con Juan, aprende con proyectos',
        });

        notification.onclick = () => {
            window.open('https://www.codigoconjuan.com');
        };
    }
});