const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    if(e.target.classList.contains("titulo")){
        console.log("Click En la titulo");
    }
    if (e.target.classList.contains('precio')) {
        console.log('Click En la precio');
    }
    if (e.target.classList.contains('card')) {
        console.log('Click En la card');
    }
});