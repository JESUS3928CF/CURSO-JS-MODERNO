/// Singleton
//. Básicamente es instanciar solo un objeto por clase

let instancia = null;

class Persona {
    //* El uso de la variable instancia en el constructor es lo que permite que solo haya una instancia de la clase Persona. Si ya existe una instancia, el constructor simplemente devuelve esa instancia en lugar de crear una nueva.
    constructor(nombre, email) {
        if (!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}


//. Ambos objetos son iguales

const persona = new Persona('Jesús', 'Cochero@correo.com');
console.log(persona);

const persona2 = new Persona('Jesús2', 'Cochero@correo.com2');
console.log(persona2);
