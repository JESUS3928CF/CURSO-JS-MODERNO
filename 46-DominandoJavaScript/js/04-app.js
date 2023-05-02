/// Implicit Binding
//* Ase referencia a donde va a encontrar los valores del objeto

const edad = 10;

const usuario = {
    nombre: "Jesús",
    edad: 20,
    información(){
        console.log(`Mi nombre es ${this.nombre} y mi edad ${edad}`);
    },
    mascota : {
        nombre: "Hook",
        edad: 1,
        información(){
            console.log(`Mi nombre es ${this.nombre} y mi edad ${this.edad}`);
        }
    }
}

usuario.información();
usuario.mascota.información();