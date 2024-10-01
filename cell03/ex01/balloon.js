let circle = document.querySelector('.circle');
let size = 200;
let colors = ['red', 'blue', 'green', 'yellow']; // Couleurs du cercle
let currentColorIndex = 0;

circle.addEventListener('click', () => {
    if (size < 420) {
        size += 10;
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    } else {
        size = 200;
        currentColorIndex = 0;
    }
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';
    circle.style.backgroundColor = colors[currentColorIndex];
});

circle.addEventListener('mouseleave', () => {
    if (size > 200) {
        size -= 5;
        currentColorIndex = (currentColorIndex - 1 + colors.length) % colors.length;
    }
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';
    circle.style.backgroundColor = colors[currentColorIndex];
});