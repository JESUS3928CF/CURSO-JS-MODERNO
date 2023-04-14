const MisProductos = {
    camisa: {
        precio: 100,
        cantidad: 10,
    },
    información:{
        tela:"algodón",
        país: "Colombia",
        algoMás: {
            min: 10,
            max: 15
        }
    }
};

/// Destructuring de Objetos Anidados
const {camisa, información:{país: país}, camisa:{precio}, información:{ algoMás : {min}}} = MisProductos;
//* Creo estas variables Camisas, país, precio, min
console.log(país);
console.log(camisa);
console.log(precio);
console.log(min);
