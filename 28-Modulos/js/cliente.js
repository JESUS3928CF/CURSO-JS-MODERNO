export const nombreCliente = "Jesús";

export const apellido = "Cochero";

export function mostrarInformacion (nombre, apellido){
    return `Hola ${nombre} ${apellido}`;  
}

export function tieneSaldo(ahorro){
    return ahorro > 0 ?" Tiene saldo" : "No tiene saldo";
}

export class Cliente {
    #apellido;
    constructor(nombre, apellido, ahorro){
        this.nombre = nombre;
        this.#apellido = apellido;
        this.ahorro = ahorro;
    }

    // Métodos

    mostrarInformacion(){
        return `Hola ${this.nombre} ${this.#apellido} ahorro: ${this.ahorro} desde un método`;
    }
}

export default function nuevaFuncion() {
    return('Desde función de export default');
}