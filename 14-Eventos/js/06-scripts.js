// Event Bubbling
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloDiv = document.querySelector('.titulo');


cardDiv.addEventListener('click', e =>{
    e.stopPropagation();
    console.log('card clicked');
})

infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('info clicked');
});
tituloDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('titulo clicked');
});