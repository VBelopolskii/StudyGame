const score = document.getElementById("score");
const record = document.getElementById("record");
const gameField = document.getElementById('playField');
let timeoutId;
let figure = createFigure();
startBtn = document.getElementsByClassName('js-btn-start')[0];

// pauseBtn = document.getElementsByClassName('js-btn-pause')[0];

function move() {
    let elem = document.getElementsByClassName('js-figure')[0];
    let x = elem.offsetLeft;
    let y = elem.offsetTop;
    elem.style.left = `${x + 1}px`;
}

function stop() {
    clearInterval(timeoutId)
}

function start() {
    timeoutId = setInterval(move, 10);
}

function createFigure() {
    let newFigure = document.createElement('div');
    newFigure.classList.add('js-figure', 'ui-figure');
    gameField.prepend(newFigure);
    return newFigure;
}

function clickFigure() {
    let newFigure = createFigure();
    this.remove();
    newFigure.addEventListener('click', clickFigure);
}

function changeFigureForm() {
}

function startPauseRename() {
    console.log(startBtn.textContent);
    startBtn.textContent === "Start" ? startBtn.textContent = "Pause" : startBtn.textContent = "Start";
}

function clickStartBtn() {
    if (startBtn.textContent === "Start") {
        start();
        console.log(timeoutId);
    } else {
        stop();
        console.log(timeoutId);
    }
    startPauseRename();
}


figure.addEventListener('click', clickFigure);
startBtn.addEventListener('click', clickStartBtn);

