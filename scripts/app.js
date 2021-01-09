const appModule = (function () {
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

    function prepandNewFigure(figure) {
        playField.prepend(figure);
    }

    return {
        startMoving: start,
        stopMoving: stop,
        figure: figure,
        startBtn: startBtn,
        playField: playField,
        prepandFigure: prepandNewFigure
    }
})();

appModule.startBtn.addEventListener('click', appModule.prepandFigure(appModule.figure));
appModule.startBtn.addEventListener('click', figureModule.setForm(appModule.figure));
appModule.startBtn.addEventListener('click', figureModule.setColor(appModule.figure));
appModule.startBtn.addEventListener('click', controlPanelModule.clickStart);
appModule.figure.addEventListener('click', appModule.stopMoving);
appModule.figure.addEventListener('click', figureModule.remove);
appModule.figure.addEventListener('click', figureModule.create);
appModule.figure.addEventListener('click', appModule.prepandFigure(appModule.figure));
appModule.figure.addEventListener('click', figureModule.setColor);
appModule.figure.addEventListener('click', figureModule.setForm);
appModule.figure.addEventListener('click', appModule.startMoving);
