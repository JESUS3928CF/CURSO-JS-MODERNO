/// Mediator - mediador o intermediario
//. Se comunica con diferentes objetos a la ves 

function Vendedor(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo: ${articulo}, iniciamos con un precio de $${precio}`);
    },

    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`);
    },
};

function Subasta(){
    let compradores = {};

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}
//. Crear objetos
//* Lo que hace el mediador es comunicar todos estos objetos al mismo tiempo
const juan = new Comprador("Juan");
const jesus = new Comprador('Jesús');
const vendedor = new Vendedor("Vendedor de Autos");
const subasta = new Subasta();

//* Tienes que registrarlos
subasta.registrar(juan);
subasta.registrar(jesus);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 66', 300);

juan.oferta(350, juan);
jesus.oferta(450, jesus);
juan.oferta(550, juan);
jesus.oferta(700, jesus);

vendedor.vendido(jesus.nombre);
