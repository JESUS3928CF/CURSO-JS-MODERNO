/// Explicit Binding...

function persona(el1,el2){
    console.log(`Mi nombre es ${this.nombre} y Escucho ${el1} y ${el2}`);
}

const información = {
    nombre: "Jesus"
}

const musicaFavorita = ["Heavy metal", "Rock"];

/// Call existe en todas las funciones de js y toma los elementos por separado no itera un arreglo
persona.call(información, musicaFavorita[0], musicaFavorita[1]);

/// apply existe en todas las funciones de js y puede itera un arreglo
persona.apply(información, musicaFavorita);

/// Es similar a call pero esta crea una nueva función
const nuevaFunción =  persona.bind(información, musicaFavorita[0], musicaFavorita[1]);
nuevaFunción();