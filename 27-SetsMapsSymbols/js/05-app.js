// Creando un Symbols
const sym = Symbol("1");
const sym2 = Symbol("1");

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

// Agregar Nombre y apellido como llaves del objeto

persona[nombre] = "Juan";
persona[apellido] = "Perez";
persona.tipoCliente  = "Premium";
persona.saldo = 500

console.log(persona[nombre]);
console.log(persona);

// Las propiedades de la que utilizan un symbol no son iterables 
for(let i in persona){
    console.log(persona[i]);
}


// Definir una descripción del el symbol 
const nombreCliente = Symbol("Nombre del cliente");

const cliente = {};

cliente[nombreCliente] = "Jesus";
console.log(cliente); 
console.log(cliente[nombreCliente]);
console.log(nombreCliente);