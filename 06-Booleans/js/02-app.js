const autentificado = true;

/// Las estructuras de control si no se les especifica una condición 
/// siempre buscaran un true o un false en lo que se le pase
if(autentificado){
    console.log("Si puedes ver Netflix");
}else{
    console.log("No, no puedes ver Netflix");
}

console.log( autentificado ? "SI" : "NO") 