let producto = "                Monitor de 20 pulgadas                ";

console.log(producto);
console.log(producto.length);

// eliminar del inicio 
console.log(producto.trimStart());
console.log(producto.trimEnd());
console.log(producto);

console.log(producto.length);
producto = producto.trimStart().trimEnd();
console.log(producto.length);
// producto = producto.trimEnd();
console.log(producto.length);
console.log(producto.trim());
