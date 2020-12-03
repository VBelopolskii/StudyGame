const score = document.getElementById("score");
const record = document.getElementById("record");
const gameField = document.getElementById('playField');
let timeoutId;
let figure = createFigure();
startBtn = document.getElementsByClassName('js-btn-start')[0];
pauseBtn = document.getElementsByClassName('js-btn-pause')[0];

function move() {
    let elem = document.getElementsByClassName('js-figure')[0];
    let x = elem.offsetLeft;
    let y = elem.offsetTop;
    elem.style.left = `${x + 1}px`;
}

function changeFigure() {
}

function startRenameToContinue() {
    startBtn.textContent = 'Continue'
}

function stop() {
    clearTimeout(timeoutId)
}

function createFigure() {
    let newFigure = document.createElement('div');
    newFigure.classList.add('js-figure', 'ui-figure');
    gameField.prepend(newFigure);
    return newFigure;
}

function click(event) {
    let newFigure = createFigure();
    this.remove();
    newFigure.addEventListener('click', click);
}

function start() {
    timeoutId = setInterval(move, 10);
}

figure.addEventListener('click', click)
startBtn.addEventListener('start', click)
pauseBtn.addEventListener('stop', click)
pauseBtn.addEventListener('startRenameToContinue', click)

