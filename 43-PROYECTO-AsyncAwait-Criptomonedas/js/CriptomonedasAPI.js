import { criptomonedasSelect, resultado } from './app.js';

class CriptomonedasAPI {
    // #moneda;
    // #criptomoneda;

    // constructor(moneda, criptomoneda) {
    //     this.#moneda = moneda;
    //     this.#criptomoneda = criptomoneda;
    //     this.falso = false;
    // }

    // setMoneda(moneda) {
    //     this.#moneda = moneda;
    // }

    // getMoneda() {
    //     return this.#moneda;
    // }

    async consultarCriptomonedas() {
        const url =
            'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD';

        // fetch(url)
        //     .then((respuesta) => respuesta.json())
        //     .then((resultado) => this.#obtenerCriptomonedas(resultado.Data))
        //     .then((criptomonedas) => this.#selectCriptomonedas(criptomonedas));
        
            try {
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();
                const criptomonedas = await this.#obtenerCriptomonedas(resultado.Data);
                this.#selectCriptomonedas(criptomonedas);

            } catch (error) {
                console.log(error);
            }
    }

    //- Crear un Promise
    #obtenerCriptomonedas(criptomonedas) {
        const promiseObtenerCriptomonedas = (criptomonedas) =>
            new Promise((resolve) => {
                resolve(criptomonedas);
            });

        const arrayDeCriptomonedas = promiseObtenerCriptomonedas(criptomonedas);

        return arrayDeCriptomonedas;
    }

    #selectCriptomonedas(criptomoneda) {
        criptomoneda.forEach((cripto) => {
            const { FullName, Name } = cripto.CoinInfo;

            const option = document.createElement('option');
            option.textContent = FullName;
            option.value = Name;

            criptomonedasSelect.appendChild(option);
        });
    }

    consultarAPI(objBusqueda) {
        const { moneda, criptomoneda } = objBusqueda;

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

        // fetch(url)
        //     .then((response) => response.json())
        //     .then((respuesta) =>
        //         this.#mostrarCotizacionHTML(respuesta, moneda, criptomoneda)
        //     );
        const consultandoAPI = async (objBusqueda,url) => {
            const { moneda, criptomoneda } = objBusqueda;
           try {
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();
                this.#mostrarCotizacionHTML(resultado, moneda, criptomoneda);
           } catch (error) {
                console.log(error);
           }
        }

        consultandoAPI(objBusqueda,url);
    }

    #mostrarCotizacionHTML(infoCrypto, moneda, criptomoneda) {

        this.limpiarHTML(resultado);

        // console.log(infoCrypto.DISPLAY[`${criptomoneda}`][`${moneda}`]);
        const datosCripto = infoCrypto.DISPLAY[`${criptomoneda}`][`${moneda}`];
        const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } =
            datosCripto;

        const precio = document.createElement('p');
        precio.classList.add('precio');
        precio.innerHTML = `El precio es: <span>${PRICE}<span>`;

        const precioAlto = document.createElement('p');
        precioAlto.innerHTML = `El precio más alto del dia: <span>${HIGHDAY}<span>`

        const precioBajo = document.createElement('p');
        precioBajo.innerHTML = `El precio más bajo del dia: <span>${LOWDAY}<span>`;

        const ultimasHoras = document.createElement('p');
        ultimasHoras.innerHTML = `Variación de las últimas 24 horas: <span>${CHANGEPCT24HOUR}%<span>`;

        const ultimaActualizacion = document.createElement('p');
        ultimaActualizacion.innerHTML = `Última Actualización: <span>${LASTUPDATE}<span>`;

        resultado.appendChild(precio);
        resultado.appendChild(precioAlto);
        resultado.appendChild(precioBajo);
        resultado.appendChild(ultimasHoras);
        resultado.appendChild(ultimaActualizacion);

    }

    limpiarHTML(div){
        while(div.firstChild){
            resultado.removeChild(div.firstChild);
        }
    }
}

const api = new CriptomonedasAPI();

export default api;
