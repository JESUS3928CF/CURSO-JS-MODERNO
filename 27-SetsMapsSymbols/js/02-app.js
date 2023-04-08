// WeakSet

const weakSet = new WeakSet();

const nombre = "Jesus";

const cliente = {
    nombre: 'Jesús',
    saldo: 100
}

const cliente2 = {
    nombre: 'Jesús',
    saldo: 1020,
};

const cliente3 = {
    nombre: 'Jesús',
    saldo: 1020,
};

weakSet.add(cliente);
weakSet.add(cliente2);

weakSet.delete(cliente3);

console.log(weakSet.has(cliente3));
console.log(weakSet);