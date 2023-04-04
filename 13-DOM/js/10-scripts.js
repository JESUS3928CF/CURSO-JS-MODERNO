// const enlace = document.createElement('a');

// enlace.textContent = 'Nuevo Enlace';

// enlace.href = '#';
// enlace.target = '_blank';
// enlace.className = "monoCuco";
// enlace.classList.add('asa');
// enlace.onclick = miFuncion;

// console.log(enlace);


// const navegacion = document.querySelector('.navegacion');
// // navegacion.appendChild(enlace);
// navegacion.insertBefore(enlace,navegacion.children[1]);

// // console.log(navegacion.children[0]);

// function miFuncion() {
//     alert('Diste click');
// }



// const traving = document.querySelector('.card');
// console.log(traving);

// // contenido 
// const categoria = document.createElement('p');
// categoria.classList.add("categoria,concierto");
// categoria.textContent = "Concierto de rock"
// const titulo = document.createElement('p');
// titulo.classList.add("titulo");
// titulo.textContent = "Pachanga en los Angeles"
// const precio = document.createElement('p');
// precio.classList.add("precio");
// precio.textContent = "$3000 por persona y 7000 por gordo"

// // la información contenedora
// const divChild = document.createElement('div');
// divChild.classList.add('info');
// divChild.appendChild(categoria);
// divChild.appendChild(titulo);
// divChild.appendChild(precio);

// // la img
// const imagen = document.createElement('img');
// imagen.src = "img/hacer1.jpg";

// // creando la tarjeta padre
// const myCard = document.createElement('div');
// myCard.classList.add('card');
// myCard
// myCard.appendChild(divChild);
// myCard.insertBefore(imagen, myCard.firstChild);

// console.log(myCard);

// const contenedor = document.querySelector(".contenedor-cards");
// console.log(contenedor);
// // contenedor.insertBefore(myCard, contenedor.firstChild);
// contenedor.appendChild(myCard);

const btnAgregar = document.querySelector('.navegacion').children[0];
btnAgregar.onclick = agregar;

function agregar(){
    alert("Hola");
    // crear un card
    const parrafo1 = document.createElement('p');
    parrafo1.textContent = 'Concierto';
    parrafo1.classList.add('categoria', 'concierto');

    const parrafo2 = document.createElement('p');
    parrafo2.textContent = 'Concierto de rock';
    parrafo2.classList.add('titulo');

    const parrafo3 = document.createElement('p');
    parrafo3.textContent = '$300 por persona';
    parrafo3.classList.add('precio');

    // crear div info
    const info = document.createElement('div');
    info.classList.add('info');
    info.appendChild(parrafo1);
    info.appendChild(parrafo2);
    info.appendChild(parrafo3);

    //crear la imagen
    const imagen = document.createElement('img');
    imagen.src = 'img/hacer2.jpg';

    // crear el card
    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(imagen);
    card.appendChild(info);

    // insertar en el html
    const contenedor = document.querySelector('.contenedor-cards');
    contenedor.appendChild(card);

    
}


