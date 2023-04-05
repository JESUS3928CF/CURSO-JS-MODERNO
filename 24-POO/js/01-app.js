// Class declaration 
class Cliente {
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformación() {
        return `Nombre ${this.nombre}, Saldo ${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvenido al  cajero`;
    }
}

const juan = new Cliente("juan",200);
console.log(juan.mostrarInformación());

console.log(juan);

// Class expression 
const Cliente2 = class {
    constructor(nombre = 'Sin nombre', saldo = 'Sin saldo') {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformación() {
        return `Nombre ${this.nombre}, Saldo ${this.saldo}`;
    }
};

const juan2 = new Cliente2();
console.log(juan2);
console.log(juan2.mostrarInformación());
console.log(Cliente.bienvenida());