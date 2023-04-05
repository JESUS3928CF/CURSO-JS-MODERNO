// Class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformación() {
        return `Nombre ${this.nombre}, Saldo ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al  cajero`;
    }
}

// Heredar

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        // Super Para elegir los atributos que queremos heredar
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() {
        return `Bienvenido al  cajero de empresas`;
    }
}

const cliente = new Cliente('Juan', 1000);
const empresa = new Empresa("Colch", 2000000, "121212", "Prendas de ropa");

console.log(empresa);
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());