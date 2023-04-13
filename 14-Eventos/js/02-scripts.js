const nav = document.querySelector(".navegacion");

/// Es te evento se ejecuta cuando se presiona click
nav.addEventListener('click', () => {
    console.log("Click en nav");
});

/// Es te evento se ejecuta cuando se entra en el area del elemento
nav.addEventListener('mouseenter', () => {
    console.log('Entando el la navegación');
});

/// Es te evento se ejecuta cuando se sale del el area del elemento
nav.addEventListener('mouseup', () => {
    console.log('Saliendo de la navegación');
});

/// Es te evento se ejecuta cuando se finaliza un click
nav.addEventListener('mousedown', () => {
    console.log('Click finalizado');
});

/// Es te evento se ejecuta cuando se suelta un click
nav.addEventListener('mouseup', () => {
    console.log('Click soltado');
});

/// Es te evento se ejecuta cuando se presiona doble click
nav.addEventListener('dblclick', () => {
    console.log('Doble click');
});