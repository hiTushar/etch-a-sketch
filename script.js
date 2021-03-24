function init(){
    let gridBox = document.querySelector('.container'); 
    gridBox.innerHTML = "";
    for(let i = 0; i < 64; i++){
        gridBox.innerHTML += `<div id='${i}'></div>`;
    }

    let boxes = document.querySelectorAll('.container div');
    [...boxes].forEach(box => box.addEventListener('mouseover', (event) => {
                                                        event.target.style = "background-color: black"
                                                   }));
    
    
    document.querySelector('button').addEventListener('click', () => {reset()});
}

function reset(){
    let boxes = document.querySelectorAll('.container div');

    [...boxes].forEach(box => {box.style = 'background-color: white;'});
}