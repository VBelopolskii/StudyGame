const score = document.getElementById("score");
const record = document.getElementById("record");
const gameField = document.getElementById('playField');
let timeoutId;
let figure = new createFigure();


function move() {
    let x = figure.offsetLeft;
    let y = figure.offsetTop;
    figure.style.left = `${x + 1}px`;
}

function stop() {
    clearTimeout(timeoutId)
}

function click(event) {
    let newFigure = createFigure();
    console.log(this, newFigure);
    this.remove();
    newFigure.addEventListener('click', click);
}

function createFigure() {
    let newFigure = document.createElement('div');
    newFigure.classList.add('js-figure', 'ui-figure');
    gameField.prepend(newFigure);
    return newFigure;
}

figure.addEventListener('click', click)

function start() {
    timeoutId = setInterval(move, 10);
}

