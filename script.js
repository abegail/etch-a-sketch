container = document.querySelector('.container');

window.onload = function() {
    addSquares();
}

function addSquares() {
    let squaresPerSide = parseInt(prompt('How many squares do you want?'));
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