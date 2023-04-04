const MisProductos = {
    camisa: {
        precio: 100,
        cantidad: 10,
    },
    informacion:{
        tela:"algodón",
        pais: "Colombia",
        algomas: {
            min: 10,
            max: 15
        }
    }
};

const {camisa, informacion:{pais}, camisa:{precio}, informacion:{ algomas : {min}}} = MisProductos;

console.log(pais);
console.log(camisa);
console.log(precio);
console.log(min);
