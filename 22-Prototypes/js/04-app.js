function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
    let tipo;

    if(this.saldo > 10000){
        tipo = "Gold";
    }else if(this.saldo > 5000){
        tipo = "Platinum";
    }else {
        tipo = "Normal";
    }

    return tipo;
}

Cliente.prototype.detalle = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo: ${this.tipoCliente()}`;
}

Cliente.prototype.retirarSaldo = function (totalRetirar) {
    this.saldo -= totalRetirar;
}

// Instanciarlo
const pedro = new Cliente('pedro', 15020);
console.log(pedro);

console.log(pedro.tipoCliente());
pedro.retirarSaldo(5500);
console.log(pedro.detalle());


function Persona(nombre,saldo, telefono){
    Cliente.call(this,nombre,saldo)
    this.telefono = telefono;
}

Persona.prototype = Object.create( Cliente.prototype);
Persona.prototype.constructor = Cliente;

// Instanciarlo 
const jesus = new Persona("Jesús",20000, 323435213);


jesus.retirarSaldo(1230);
console.log(jesus.saldo);
console.log(jesus.detalle());


Persona.prototype.mostrarTelefono = function (){
    return `El telefono de esta persona es ${this.telefono}`
}

console.log(jesus.mostrarTelefono());