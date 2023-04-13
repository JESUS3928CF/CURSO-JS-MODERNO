( () => {

    const cargarAPIBtn = document.querySelector('#cargarAPI');
    cargarAPIBtn.addEventListener( "click", consultarAPI);

    function consultarAPI() {
        const url = 'https://picsum.photos/list';

        fetch(url).then( resultado => resultado.json())
        .then( datos => imprimirHTML(datos) )
        .catch( e => console.log(e));
    }

    function imprimirHTML(datos) {
        const contenido = document.querySelector('.contenido');
        let html = "";

        datos.forEach( elemento => {
            const {author, post_url} = elemento;

             html += `
                 <p>Author: ${author}</p>
                 <a href="${post_url}" target="_blank"> Ver imajen </a>
            `
        })

        contenido.innerHTML = html;
    }

} )();