let producto = "       a         Monitor de 20 pulgadas       a     ";

console.log(producto);
console.log(producto.length);

/// eliminar del espacio en blanco del inicio 
console.log(producto.trimStart().length);

/// eliminar del espacio en blanco del final 
console.log(producto.trimEnd());
console.log(producto);

/// Eliminar del inicio y del final los espacios en blanco
producto = producto.trimStart().trimEnd();
console.log(producto.trim());


