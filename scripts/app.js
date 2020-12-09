// const score = document.getElementById("score");
// const record = document.getElementById("record");
let playField = playFieldModule.create();
let figure = figureModule.create();
let timeoutId;
const startBtn = document.getElementsByClassName('js-btn-start')[0];

// pauseBtn = document.getElementsByClassName('js-btn-pause')[0];

function stop() {
    clearInterval(timeoutId)
}

function start() {
    timeoutId = setInterval(figureModule.move, 10);
}

figure.addEventListener('click', figureModule.click);
startBtn.addEventListener('click', controlPanelModule.clickStart);

