const appModule = (function () {
    const startBtn = document.querySelector('.js-btn-start');
    let playField = playFieldModule.create();
    let figure = figureModule.create();
    controlPanelModule.create(startBtn);
    // controlPanelModule.start();


// TODO need to rewrite logic for buttons
// pauseBtn = document.querySelector('.js-btn-pause');

    function stop() {
        clearInterval(timeoutId)
    }

    function prependNewFigure(figure) {
        playField.prepend(figure);
    }

    // return {
    //     "startMoving": start,
    //     "stopMoving": stop,
    //     "figure": figure,
    //     "startBtn": startBtn,
    //     "playField": playField,
    //     "prependFigure": prependNewFigure
    // }
})();

// appModule.startBtn.addEventListener('click', appModule.prependFigure(appModule.figure));
// appModule.startBtn.addEventListener('click', figureModule.setForm(appModule.figure));
// appModule.startBtn.addEventListener('click', figureModule.setColor(appModule.figure));
// appModule.startBtn.addEventListener('click', controlPanelModule.clickStart);
// appModule.figure.addEventListener('click', appModule.stopMoving);
// // appModule.figure.addEventListener('click', figureModule.create);
// appModule.figure.addEventListener('click', appModule.prependFigure(appModule.figure));
// // appModule.figure.addEventListener('click', figureModule.remove);
// //
// // appModule.figure.addEventListener('click', appModule.startMoving);
// // appModule.figure.addEventListener('click', figureModule.setColor(appModule.figure));
// // appModule.figure.addEventListener('click', figureModule.setForm(appModule.figure));
//
// // appModule.figure.addEventListener('click', appModule.startMoving);
