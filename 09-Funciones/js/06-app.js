/// Si no te presentan datos por defecto toma el valor por defecto y no default 
const saludar = function(nombre = "Usuario",apellido = ""){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Jesus");


