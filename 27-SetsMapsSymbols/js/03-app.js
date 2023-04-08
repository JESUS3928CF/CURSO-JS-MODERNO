const cliente = new Map();

cliente.set("nombre", "Karen");
cliente.set("tipo", "Premium");
cliente.set("saldo", 3000);
cliente.set( [0], true);


console.log(cliente.size);

console.log(cliente.has("saldo"));

console.log(cliente);

console.log(cliente.get("tipo"));

cliente.delete("saldo");

console.log(cliente.get("saldo"));

cliente.clear();

console.log(cliente);

const paciente = new Map([["nombre", "Jesús"], ["cuarto", "no definido"]]);

paciente.set("dr", "DR pedro");
paciente.set("cuarto", "04");

console.log(paciente);

paciente.forEach( (value, key) => console.log(value));