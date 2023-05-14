/// nameSpace - es para la organización del codigo
//. Este consiste en crear un objeto global y agregar todas las funciones dentro para que el codigo no colisione
const restauranteApp = {};

//* agregando platillos al objeto global
restauranteApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25,
    },
    {
        platillo: 'Hamburguesa',
        precio: 20,
    },
    {
        platillo: 'Hot dog',
        precio: 20,
    }
];

//* agregando Funciones al objeto global
restauranteApp.funciones = {
    mostrarMenu: platillos => {
        console.log(`Bienvenido a nuestro menú`);

        platillos.forEach( (platillo, index) => {
            console.log(`${index} : ${platillo.platillo} $${platillo.precio}`);
        })
    },
    ordenar: id => {
        console.log(`Tu Platillo: ${restauranteApp.platillos[id].platillo} se esta preparando`);
    }
}

const {platillos} = restauranteApp;

restauranteApp.funciones.mostrarMenu(platillos);

restauranteApp.funciones.ordenar(0);