let producto = 'Monitor de 20 pulgadas';

console.log(producto);

/// Remplaza una parte del string por otra especificado 
console.log(producto.replace('pulgadas', "''"));
producto = producto.replace('Monitor', "Monitor curvo");
console.log(producto);


/// .slide para cortar una parte de la cadena de texto
//* Recibe la posición del final y del inicio
console.log(producto.slice(0,10))

//- Elimina los primeros 8 caracteres
console.log(producto.slice(8));
//- no hace nada cunado el de inicio es mayor
console.log(producto.slice(2,1));


/// alternativa a slide 
console.log(producto.substring(0,13));

//-cunado el de inicio es mayor cambia la posición 
console.log(producto.substring(2, 1)); //* de 2, 1 A 1, 2

//- obteniendo un carácter
console.log(producto.substring(0,1));
//- una forma más fácil de hacerlo
console.log(producto.charAt(0));


