/// new Binding

function Auto(modelo, color){
    this.color = color;
    this.modelo = modelo;
}

const auto = new Auto("Cámaro","Negro");
console.log(auto);


/// Window binding

window.color = "Negro";

function hola() {
    console.log(color);
}

hola();