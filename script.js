let colors = document.getElementsByClassName('color');

function selection (origin) {
    for (index1 = 0; index1 < colors.length; index1 += 1) {
        colors[index1].className = "color";
    }
    let selected = origin.target;
    selected.className = 'color selected';
}

for (index2 = 0; index2 < colors.length; index2 += 1) {
    colors[index2].addEventListener('click', selection);
}

let blanks = document.getElementsByClassName('pixel');

function paint (origin2) {
    let selectedPalete = document.querySelector('.selected');
    let selectedColor = window.getComputedStyle(selectedPalete, null).getPropertyValue("background-color");
    let selected2 = origin2.target;
    selected2.style.backgroundColor = selectedColor;
}

for (index3 = 0; index3 < blanks.length; index3 += 1) {
    blanks[index3].addEventListener('click', paint);
}

let clearButton = document.getElementById('clear-board');

function clearPixels () {
    for (index4 = 0; index4 < blanks.length; index4 += 1) {
        blanks[index4].style.backgroundColor = 'white';
    }
}

clearButton.addEventListener('click', clearPixels);

let boardButton = document.getElementById('generate-board');

function newBoard () {
    let board = document.querySelector('#pixel-board');
    let iterationNumber = blanks.length;
    let newPixel = document.createElement('div');
    newPixel.className = 'pixel';

    for (index5 = 0; index5 < iterationNumber; index5 += 1) {
        board.removeChild(board.lastElementChild);
    }
    
    let nInput = document.querySelector('#board-size');
    let n = nInput.value;
    let pixelsNumber = n*n;
    board.appendChild(newPixel);

    board.style.width = n*42 + 'px';
    board.style.height = n*42 + 'px';
    
    if (nInput.value == '') {
        window.alert('Board inválido!');
        n = 5;
        pixelsNumber = 25; 
    } else if (parseInt(nInput.value) < 5) {
        n = 5;
        pixelsNumber = 25;    
    } else if (parseInt(nInput.value) > 50) {
        n = 50;
        pixelsNumber = 2500;    
    }

    board.style.width = n*42 + 'px';
    board.style.height = n*42 + 'px';
    
    for (index6 = 1; index6 < pixelsNumber; index6 += 1) {
        let pixelClone = newPixel.cloneNode();
        board.appendChild(pixelClone);
    }

    let blanks2 = document.getElementsByClassName('pixel');

    function paint2 (origin3) {
        let selectedPalete2 = document.querySelector('.selected');
        let selectedColor2 = window.getComputedStyle(selectedPalete2, null).getPropertyValue("background-color");
        let selected2 = origin3.target;
        selected2.style.backgroundColor = selectedColor2;
    }

    for (index7 = 0; index7 < blanks2.length; index7 += 1) {
        blanks2[index7].addEventListener('click', paint2);
    }
}

boardButton.addEventListener('click', newBoard);

console.log(Math.random() * 255);

// função gerar cor retirada do site https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript

function gerar_cor() {

    let r = parseInt(Math.random() * 255);
 
    let g = parseInt(Math.random() * 255);
 
    let b = parseInt(Math.random() * 255);
 
    return `rgb(${r}, ${g}, ${b})`;
}
 

let colorRed = document.querySelector('#color2');
colorRed.style.backgroundColor = gerar_cor();
let colorGreen = document.querySelector('#color3');
colorGreen.style.backgroundColor = gerar_cor();
let colorBlue = document.querySelector('#color4');
colorBlue.style.backgroundColor = gerar_cor();