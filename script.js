let colors = document.getElementsByClassName('color');

function selection(origin) {
    for (index = 0; index < colors.length; index += 1) {
        colors[index].className = "color";
    }
    let selected = origin.target;
    selected.className = "color selected";
}

for (index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', selection);
}