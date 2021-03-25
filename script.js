const gridBox = document.querySelector('.container'); 

document.querySelector('button.clear').addEventListener('click', clear);
document.querySelector('button.reset').addEventListener('click', reset);

function init(lineCount){
    gridBox.style.gridTemplate = `repeat(${lineCount}, 1fr) / repeat(${lineCount}, 1fr)`;

    gridBox.innerHTML = "";
    for(let i = 0; i < lineCount * lineCount; i++){
        let box = document.createElement('div');
        box.addEventListener('mouseover', changeColor); 
        gridBox.appendChild(box); 
    }
}


function changeColor(event){
    // event.target.style.backgroundColor = 'black'; 
    let red = Math.floor(Math.random() * 256); 
    let green = Math.floor(Math.random() * 256); 
    let blue = Math.floor(Math.random() * 256); 
    event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function clear(){
    Array.from(gridBox.childNodes).forEach(i => i.style.backgroundColor = '');
}


function reset(){
    let lineCount = 0;
    while(true){
        lineCount = prompt('Enter No. of squares per side: ');
        if(lineCount !== null){
            lineCount = parseInt(lineCount.trim()); 
            if(lineCount < 100 && lineCount > 0 && !isNaN(lineCount)){
                init(lineCount);
                break;
            }
        }
        else { // Cancel is clicked
            break; 
        }
    }
}