const producto = "Monitor de 20 pulgadas";

/// repeat va a repetir todo el texto las veces que se le indique
const texto = " en promoción".repeat(3);
console.log(texto);
console.log(`${producto} ${texto} !!!`);

/// split, te permite dividir un string y convertirlo a array  
const actividad = "Estoy aprendiendo javascript moderno";
console.log(actividad.split(" "));

let myArray = actividad.split(" ");

console.log(myArray[2]);

const hobbies = "Leer, caminar, escuchar música, escribir, aprender a programar";
console.log(hobbies.split(","));

