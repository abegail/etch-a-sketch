// startButton = document.querySelector('.start');
// startButton.addEventListener('click', addSquares);

container = document.querySelector('.container');

window.onload = function() {
    addSquares();
}

function addSquares() {
 //   let numberOfSquares = parseInt(prompt('How many squares do you want?'));
    numberOfSquares = 256;
    for (i = 0; i < numberOfSquares; i++) {
        var square = document.createElement('div');
        square.className = 'square';
        container.appendChild(square);
    }
    const squares = document.querySelectorAll('.square');
    squares.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.classList.add('mouseOver');
        });
    })
}