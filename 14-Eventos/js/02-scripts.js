const nav = document.querySelector(".navegacion");
nav.addEventListener('mouseenter', () => {
    console.log("Entando el la navegación");
    nav.style.backgroundColor = "transparent"
});

nav.addEventListener('mouseup', () => {
    console.log('Saliendo de la navegación');
    nav.style.backgroundColor = "white";
});