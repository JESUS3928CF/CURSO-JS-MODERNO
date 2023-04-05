// Class declaration
class Cliente {

    // para que sea un atributo privado
    #nombre;

    // constructor(nombre, saldo) {
    //     this.#nombre = nombre;
    //     this.saldo = saldo;
    // }

    // mostrarInformación() {
    //     return `Nombre ${this.#nombre}, Saldo ${this.saldo}`;
    // }

    // static bienvenida() {
    //     return `Bienvenido al  cajero`;
    // }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

const jesus = new Cliente();
// console.log(jesus.mostrarInformación());
jesus.setNombre("jesus");
console.log(jesus.getNombre('jesus'));
