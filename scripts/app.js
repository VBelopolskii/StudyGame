let playField = playFieldModule.create();
let figure = figureModule.create();
let timeoutId;
let timeout = 100;
const startBtn = document.querySelector('.js-btn-start');

// TODO need to rewrite logic for buttons
// pauseBtn = document.querySelector('.js-btn-pause');

function stop() {
    clearInterval(timeoutId)
}

function start() {
    timeoutId = setInterval(figureModule.move, timeout);
}

figure.addEventListener('click', figureModule.click);
startBtn.addEventListener('click', controlPanelModule.clickStart);
