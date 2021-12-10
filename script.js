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
    
    console.log(board);
    console.log(blanks.length);
    console.log(iterationNumber);
    console.log(blanks);
}

boardButton.addEventListener('click', newBoard);
console.log(boardButton);