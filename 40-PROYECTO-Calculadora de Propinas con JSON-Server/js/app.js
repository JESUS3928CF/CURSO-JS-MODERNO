let cliente = {
    mesa: "",
    hora: "",
    pedido: [],
}

const categorias = {
    1:"Comida",
    2:"Bebida",
    3:"Postre"
}

const btnGruardarCliente = document.querySelector('#guardar-cliente');
btnGruardarCliente.addEventListener('click', guardarCliente)

//! FUNCIONES
function guardarCliente(){
    const mesa = document.querySelector("#mesa").value;
    const hora = document.querySelector('#hora').value;


    /// Revisar si hay campos vacíos
    const camposVacios = [mesa, hora].some( campo => campo === "");
    if(camposVacios){
        /// Verificar si ya hay una alerta
        const existeAlerta = document.querySelector(".invalid-feedback");

        if (!existeAlerta) {
             const aleta = document.createElement('div');
             aleta.classList.add('invalid-feedback', 'd-block', 'text-center');
             aleta.textContent = 'Todos los campos son obligatorios';

             document.querySelector('.modal-body form').appendChild(aleta);

             setTimeout(() => {
                aleta.remove();
             },3000);
        }
       return;
    }
    
    /// Asignar datos del formulario a cliente
    cliente = { ...cliente, mesa, hora };
    // console.log(cliente);

    /// Ocultar Modal
    const modalFormulario = document.querySelector("#formulario");
    /// Selecciona el modal actual que le pacemos siempre y cuando este en el HTML
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    /// Método para ocultar un modal
    modalBootstrap.hide();


    /// Mostrar las secciones
    mostrarSecciones();


    /// - Obtener platillos de la API de JSON-SERVER
    obtenerPlatillos();
}

function obtenerPlatillos() {
    const url =
        'https://my-json-server.typicode.com/JESUS3928CF/Api_recetas/platillos';

    fetch(url)
        .then((respuesta) => respuesta.json())
            .then( resultado => {mostrarPlatillos(resultado)})
                .catch( e => console.log(e));
}

function mostrarPlatillos(platillos) {
    // console.log(platillos); 
    const contenido = document.querySelector(".contenido");

    platillos.forEach( platillo => {
        const row = document.createElement("div");
        row.classList.add("row", "py-3", "border-top")

        const nombre = document.createElement("div");
        nombre.classList.add("col-md-4");
        nombre.textContent = platillo.nombre;

        const precio = document.createElement("div");
        precio.classList.add('col-md-3', 'fw-bold');
        precio.textContent = `$${platillo.precio}`;

        const categoria = document.createElement("div");
        categoria.classList.add("col-md-3");
        categoria.textContent = categorias[platillo.categoria];

        const inputCantidad = document.createElement("input");
        inputCantidad.type = "number";
        inputCantidad.classList.add("form-control");
        inputCantidad.min = 0;
        inputCantidad.id = `producto-${platillo.id}`;

        //* Función que detecta la cantidad y el platillo que se esta agregando
        inputCantidad.onchange = () => {
            const cantidad = parseInt(inputCantidad.value);
            // console.log(cantidad);
            agregarPlatillo({...platillo, cantidad});
        };

        const agregar = document.createElement("div");
        agregar.classList.add("col-md-2");
        agregar.appendChild(inputCantidad);

        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(agregar);

        contenido.appendChild(row);
    } );
}

function agregarPlatillo(producto){
    /// Extraer el pedido actual
    let { pedido } = cliente

    /// Revisar que la cantidad sea mayor a 0
    if(producto.cantidad > 0){
        if( pedido.some( articulo => articulo.id === producto.id)){
            /// El articulo ya existe, Actualizar la cantidad
            const pedidoActualizado = pedido.map( articulo => {
                if (articulo.id === producto.id ) {
                    articulo.cantidad = producto.cantidad
                }

                return articulo;
            });
            /// Se asigna el nuevo array a cliente.pedido
            cliente.pedido = [...pedidoActualizado];
        }else{
            /// El articulo no existe, lo agregamos al  array de pedido 
            cliente.pedido = [...pedido, producto];
        }
    }else{
        /// Eliminar elementos cuando la cantidad es 0
        const resultado = pedido.filter( articulo => articulo.id !==  producto.id);
        cliente.pedido = [...resultado];
    }

    if(cliente.pedido.length){
        /// Mostrar el Resumen
        actualizarResumen();
    } else {
        mensajePedidoVacio();
    }

    /// El Producto se eliminó por lo tanto regresamos la cantidad a 0 en el formulario
}

function actualizarResumen(){

    // console.log("Desde actualizar resumen");¨
    const contenido = document.querySelector("#resumen .contenido");

    limpiarHTML(contenido);


    const resumen = document.createElement("div");
    resumen.classList.add("col-md-6", "card", "py-2","px-3", "shadow");

    /// Información de la mesa
    const mesa = document.createElement("p");
    mesa.textContent = "Mesa: ";
    mesa.classList.add("fw-bold");

    const mesaSpan = document.createElement("span");
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add("fw-normal");

    /// Información de la hora
    const hora = document.createElement('p');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('span');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    hora.appendChild(horaSpan);

    mesa.appendChild(mesaSpan);

    /// Titulo de la sección
    const heading = document.createElement("h3");
    heading.classList.add("my-4", "text-center");
    heading.textContent = "Platillos Consumidos";

    /// Iterar sobre el array de pedidos
    const grupo = document.createElement("ul");
    grupo.classList.add("list-group");

    const {pedido} = cliente
    pedido.forEach( articulo => {
        const { nombre, cantidad, precio, id } = articulo;

        const subTotal = cantidad * precio;

        const lista = document.createElement('li');
        // platillo.textContent = articulo.nombre;
        lista.classList.add('list-group-item');

        const elementoNombre = document.createElement('h4');
        elementoNombre.classList.add('my-4');
        elementoNombre.textContent = nombre;

        const elementoCantidad = document.createElement('p');
        elementoCantidad.classList.add('fw-bold');
        elementoCantidad.textContent = 'Cantidad: ';

        const cantidadValor = document.createElement('span');
        cantidadValor.classList.add('fw-normal');
        cantidadValor.textContent = cantidad;

        /// Precio del articulo
        const elementoPrecio = document.createElement('p');
        elementoPrecio.classList.add('fw-bold');
        elementoPrecio.textContent = `Precio: `;

        const precioValor = document.createElement('span');
        precioValor.classList.add('fw-normal');
        precioValor.textContent = `$ ${precio}`;

        /// Precio total del articulo
        const elementoPrecioTotal = document.createElement('p');
        elementoPrecioTotal.classList.add('fw-bold');
        elementoPrecioTotal.textContent = `Sub total: `;

        const precioValorTotal = document.createElement('span');
        precioValorTotal.classList.add('fw-normal');
        precioValorTotal.textContent = `$ ${subTotal}`;


        /// Botón de eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn",'btn-danger');
        btnEliminar.textContent = "Eliminar Del Pedido";
        btnEliminar.onclick = () => {
            eliminarPlatillo(id);
        };

        /// AGREGAR VALORES A SUS CONTENEDORES
        elementoCantidad.appendChild(cantidadValor);
        elementoPrecio.appendChild(precioValor);
        elementoPrecioTotal.appendChild(precioValorTotal);

        /// Agregar elementos a la lista
        lista.appendChild(elementoNombre);
        lista.appendChild(elementoCantidad);
        lista.appendChild(elementoPrecio);
        lista.appendChild(elementoPrecioTotal);
        lista.appendChild(btnEliminar);

        /// Agregar lista al grupo principal
        grupo.appendChild(lista);
    });

    /// Agregar contenido
    resumen.appendChild(heading);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(grupo);

    contenido.appendChild(resumen);

    /// Mostrar formulario de propinas
    formularioPropinas();
}

function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll(".d-none");
    seccionesOcultas.forEach( elementoOculto => elementoOculto.classList.remove("d-none"));
}

function limpiarHTML(elemento){
    // console.log(elemento);
    while(elemento.firstChild){
        elemento.removeChild(elemento.firstChild);
    }
}

function eliminarPlatillo(id){
    const {pedido} = cliente;

    const inputCantidad = document.querySelector(`#producto-${id}`);

    inputCantidad.value = "";


    // console.log("eliminarPlatillos");
    // console.log(pedido, id);

    const resultado = pedido.filter( articulo => articulo.id !== id);

    cliente.pedido = resultado;

    // console.log(cliente);

    if(cliente.pedido.length){
        actualizarResumen();
        return;
    }
        mensajePedidoVacio();


}

function mensajePedidoVacio(){
    const contenido = document.querySelector("#resumen .contenido");
    limpiarHTML(contenido);

    const texto = document.createElement("p");
    texto.classList.add("text-center");
    texto.textContent = 'Añade los elementos del pedido';

    contenido.appendChild(texto);
}

function formularioPropinas(){
    const contenido = document.querySelector('#resumen .contenido');

    const formulario = document.createElement('div');
    formulario.classList.add('col-md-6', 'formulario');

    const divFormulario = document.createElement('div');
    divFormulario.classList.add('card', 'py-2', 'px-3', 'shadow');

    const heading = document.createElement('h3');
    heading.classList.add('my-4', 'text-center');
    heading.textContent = 'propina';

    /// Radio button 10%
    const radio10 = document.createElement('input');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value = '10';
    radio10.classList.add('form-check-input');
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement('label');
    radio10Label.textContent = '10%';
    radio10Label.classList.add('form-check-label');

    const radio10Div = document.createElement('div');
    radio10Div.classList.add('form-check');

    radio10Div.appendChild(radio10);
    radio10Div.appendChild(radio10Label);

    /// Radio button 25%
    const radio25 = document.createElement('input');
    radio25.type = 'radio';
    radio25.name = 'propina';
    radio25.value = '25';
    radio25.classList.add('form-check-input');
    radio25.onclick = calcularPropina;

    const radio25Label = document.createElement('label');
    radio25Label.textContent = '25%';
    radio25Label.classList.add('form-check-label');

    const radio25Div = document.createElement('div');
    radio25Div.classList.add('form-check');

    radio25Div.appendChild(radio25);
    radio25Div.appendChild(radio25Label);


    /// Radio button 50%
    const radio50 = document.createElement('input');
    radio50.type = 'radio';
    radio50.name = 'propina';
    radio50.value = '50';
    radio50.classList.add('form-check-input');
    radio50.onclick = calcularPropina;


    const radio50Label = document.createElement('label');
    radio50Label.textContent = '50%';
    radio50Label.classList.add('form-check-label');

    const radio50Div = document.createElement('div');
    radio50Div.classList.add('form-check');

    radio50Div.appendChild(radio50);
    radio50Div.appendChild(radio50Label);

    /// Agregar al div principal
    divFormulario.appendChild(heading);
    divFormulario.appendChild(radio10Div);
    divFormulario.appendChild(radio25Div);
    divFormulario.appendChild(radio50Div);


    /// Agregarlo al formulario
    formulario.appendChild(divFormulario);

    contenido.appendChild(formulario);
}

function calcularPropina(){
    // console.log("Desde calcular propina");
    const {pedido} = cliente;
    let subTotal = 0;

    /// Calcular el subtotal a pagar
    pedido.forEach( articulo => {
        subTotal += articulo.cantidad * articulo.precio;
    });

    /// Seleccionar el radio con la opción seleccionada 
    const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value;

    /// Calcular La propina
    const propina = ((subTotal * parseInt(propinaSeleccionada)) / 100);
    // console.log(propina);

    /// Calcular el total a pagar
    const total = subTotal + propina;

    mostrarTotalHTML(subTotal, total, propina);
}

function mostrarTotalHTML(subTotal, total, propina) {

    const formulario = document.querySelector('.formulario > div');
    

    const divResultados = document.createElement('div');
    divResultados.classList.add('total-pagar', "my-5");

    // formulario.appendChild(divResultados);
    // limpiarHTML(divResultados);


    ///Sub total
    const subTotalParrafo = document.createElement('p');
    subTotalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    subTotalParrafo.textContent = 'Subtotal Consumo: ';

    const subTotalSpan = document.createElement('span');
    subTotalSpan.classList.add('fw-normal');
    subTotalSpan.textContent = `$${subTotal}`;

    subTotalParrafo.appendChild(subTotalSpan);

    ///Propina
    const propinaParrafo = document.createElement('p');
    propinaParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    propinaParrafo.textContent = 'Propina: ';

    const propinaSpan = document.createElement('span');
    propinaSpan.classList.add('fw-normal');
    propinaSpan.textContent = `$${propina}`;

    propinaParrafo.appendChild(propinaSpan);

    ///total
    const totalParrafo = document.createElement('p');
    totalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    totalParrafo.textContent = 'Total a pagar: ';

    const totalSpan = document.createElement('span');
    totalSpan.classList.add('fw-normal');
    totalSpan.textContent = `$${total}`;

    totalParrafo.appendChild(totalSpan);

    /// Eliminar el ultimo resultado
    const totalPagarDiv = document.querySelector(".total-pagar");

    if(totalPagarDiv){
        totalPagarDiv.remove();
    }

    /// Resultados
    divResultados.appendChild(subTotalParrafo);
    divResultados.appendChild(propinaParrafo);
    divResultados.appendChild(totalParrafo);

    formulario.appendChild(divResultados);

}