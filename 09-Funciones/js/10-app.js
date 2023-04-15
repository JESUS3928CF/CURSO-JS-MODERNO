/// Su sintaxis puede ser la siguiente si no tiene parámetros y una sola linea de codigo
const aprendiendo = () => 'aprendiendo javascript'; //* Dan por implícito el return

/// Su sintaxis puede ser la siguiente si no tiene parámetros y más de una linea de codigo
const aprendiendo2 = () => { //* Son obligatorios las llaves y no dan por implícito el return 
    console.log('aprendiendo javascript');
    console.log("Otra linea de codigo");
};

//! Parámetros y argumentos en un Arrow Function
/// Su sintaxis puede ser la siguiente si no tiene parámetros y una sola linea de codigo
const aprendiendo3 = nombre => `aprendiendo javascript con ${nombre}`;
//* Cuando solo se le pasa un parámetro las () no son necesarias 

console.log(aprendiendo());
