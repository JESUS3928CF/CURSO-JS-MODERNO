const meses = ['enero','marso','abril','mayo','junio','ok',];

//- Remplazando el primer elemento
meses[0] = "nuevo"
//-Si no existe la posición agrega el elemento
meses[6] = "Agregado"

console.log(meses);

meses[meses.length+12] = "Jesús";
console.log(meses);