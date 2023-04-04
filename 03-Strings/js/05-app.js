let producto = 'Monitor de 20 pulgadas';

console.log(producto);
console.log(producto.replace('pulgadas', "''"));
// producto = producto.replace("pulgadas", "''");
// producto = producto.replace('Monitor', "Monitor curvo");
console.log(producto);


// .slide para cortar 
console.log(producto.slice(0,10))
console.log(producto.slice(8));
console.log(producto.slice(2,1));


// alternativa a slide 
console.log(producto.substring(0,13));
console.log(producto.substring(2, 1));

console.log(producto.substring(0,1));
console.log(producto.charAt(0));
