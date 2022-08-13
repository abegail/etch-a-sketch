const container = document.querySelector('.container');
const specifySquaresBtn = document.querySelector('.specifySquaresBtn');
let squaresPerSide = 16;

window.onload = function() {
    addSquares();
}

specifySquaresBtn.addEventListener('click', () => {
    squaresPerSide = parseInt(prompt('Enter number of squares per side (100 max):'));
    if (squaresPerSide > 100) {
        alert('Max size exceeded!');
    } else {
        removeSquares();
        addSquares();
    }
})

function addSquares() {
    numberOfSquares = squaresPerSide * squaresPerSide;

    let squareSideLength = 512 / squaresPerSide;
    console.log(squareSideLength);

    for (i = 0; i < numberOfSquares; i++) {
        var square = document.createElement('div');
        square.className = 'square';
        square.style.height = squareSideLength+'px';
        square.style.width = squareSideLength+'px';
        container.appendChild(square);
    }
    const squares = document.querySelectorAll('.square');
    squares.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.classList.add('mouseOver');
        });
    })
}

function removeSquares() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}