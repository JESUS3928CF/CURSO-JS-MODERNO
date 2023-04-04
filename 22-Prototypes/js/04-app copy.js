function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.getNombre = function(nombre){
    return this.nombre = nombre
}

Cliente.prototype.tipoCliente = function(){
    let tipo;

    if(this.saldo > 10000){
        tipo = "Gold";
    }else if(this.saldo >5000){
        tipo = "Platinum";
    }else{
        tipo = "Pelele";
    }

    return tipo;
}

// Instanciar el objeto cliente
const jesus = new Cliente("Jesus",11000);
console.log(jesus);
console.log(jesus.tipoCliente());