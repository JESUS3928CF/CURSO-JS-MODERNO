/// Constructor Pattern
//. Básicamente en este patron de diseño se utiliza una clase base que sirve como plano para que las demás clases hereden sobre ellas
//. En otros lenguajes de programación se les conoce como CLASES ABSTRACTAS en js no hay aun soporte para estas clases
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}


class Cliente extends Persona{
    constructor(nombre,email,empresa){
        super(nombre,email);
        this.empresa = empresa;
    }
}

const cliente = new Cliente("Jesús", "correo", "art zone");
console.log(cliente);