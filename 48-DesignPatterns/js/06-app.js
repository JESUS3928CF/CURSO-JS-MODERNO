/// Mixin Pattern Pattern
//. Es agregar funciones o métodos después de la creación de la clase y poder utilizarlos en cuantas clases se desee
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

//. Se pueden añadir cuantos funciones se requieran
const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre} Email: ${this.email}`);
    },
    mostrarNombre() {
        console.log(`Mi nombre es ${this.nombre}`);
    },
};

//. Añadir funcionesPersona a la clase de persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);



const cliente = new Persona('Jesús', 'Cochero@correo.com');
console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre(); //println


const cliente2 = new Cliente('Alan', 'ACochero@correo.com');
console.log(cliente2);
cliente2.mostrarInformacion();
cliente2.mostrarNombre(); //println