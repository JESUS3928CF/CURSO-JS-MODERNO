// variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = JSON.parse(localStorage.getItem("articulosCarrito")) || [];

cargarEventListers();
function cargarEventListers(){
    // sincronizarStorage();
    // Cuando agregar un corso presionando "Agregar al carrito"
    listaCursos.addEventListener("click", agregarCurso);

    // Elimina Cursos del carrito
    carrito.addEventListener("click", eliminarCurso);

    // vaciar el carrito
    vaciarCarrito.addEventListener("click", (e) =>{
        e.preventDefault();
        articulosCarrito = [];

        sincronizarStorage();  //!
        limpiarHTML();
    });

    sincronizarStorage();
    carritoHTML();
}

// funciones 
function agregarCurso(e){
    if(e.target.classList.contains('agregar-carrito')){
        e.preventDefault();
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
        
    }
}

 // Elimina Un corso del carrito
function eliminarCurso(e) {
    if(e.target.classList.contains("borrar-curso")){
        const cursoId = e.target.getAttribute('data-id');

        // Elimina del arreglo por el data id
        articulosCarrito = articulosCarrito.filter(
            (curso) => curso.id !== cursoId
        );
        carritoHTML(); // Iterar sobre el carrito y mostrar su html
    }

}

// lee la información del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso){
    // console.log(curso);
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    };

   

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    if(existe){
        // Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad += 1;
                return curso; // retorna el objeto actualizado
            }else{
                return curso; // retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...cursos];
    }else{
        // Agregamos el objeto al carrito y  Agregar elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


    
    // console.log(articulosCarrito);

    carritoHTML();
}

//Muestra el carrito de compras en el HTML
function carritoHTML(){

    // limpiar el html 
    limpiarHTML();

    //Enviar los datos a la base de datos
    sincronizarStorage();

    // recorre el carrito y agrega el html
    articulosCarrito.forEach( (curso) =>{
        const row = document.createElement('tr');

        const {titulo,imagen,precio,cantidad,id} = curso;
        row.innerHTML = `
            <td>
                <img src="${imagen}" width=100px>
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td><a href="#" class="borrar-curso" data-id="${id}">X<a></a> </td>`;

            // Agregar html del carrito en el tbody 
            // alert(row, "hello");
            // console.log(curso);
            
            contenedorCarrito.appendChild(row);
            // console.log(contenedorCarrito);
    });
}

// Elimina los cursos del tbody
function limpiarHTML(){
    // forma lenta 
    // contenedorCarrito.innerHTML = "";

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

// sincronizar la base de datos

function sincronizarStorage(){
    localStorage.setItem('articulosCarrito', JSON.stringify(articulosCarrito));

    articulosCarrito = JSON.parse(localStorage.getItem('articulosCarrito'));
}


document.addEventListener('DOMContentLoaded', () => {
    let contador = JSON.parse(localStorage.getItem('contador') || [0]);
    contador++;
    console.log(contador);
    console.log(contador);
    localStorage.setItem('contador', JSON.stringify(contador));
})