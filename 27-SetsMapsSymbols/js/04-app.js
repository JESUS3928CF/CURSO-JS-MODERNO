const producto = {
    idProducto: 10
}

const weakMap = new WeakMap();

weakMap.set(producto, 'Monitor');
console.log( weakMap.get(producto));
console.log( weakMap.delete(producto));

console.log(weakMap);
console.log(weakMap.has(producto));