const países = ["Francia", "España", "Alemania"];

function nuevoPaís(país, callback) {
    setTimeout(()=>{
        países.push(país);
        callback();
    },2000);
}

function mostrarPaíses(){
    setTimeout(() =>{
        países.forEach( país => console.log(país));
    },1000);
}

mostrarPaíses();
nuevoPaís("Inglaterra", mostrarPaíses);