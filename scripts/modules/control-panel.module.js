const controlPanelModule = (function () {
    let startControlButton;
    let timeoutId;
    let timeout = 100;

    function initializeListeners() {
        startControlButton.addEventListener('click', start);
    }

    function create(btn) {
        startControlButton = btn;
        initializeListeners();
    }

    function startPauseRename() {
        startControlButton.textContent === "Start" ? startControlButton.textContent = "Pause" : startControlButton.textContent = "Start";
    }

    function start() {
        timeoutId = setInterval(figureModule.move, timeout);
    }

    function clickStartBtn() {
        if (startControlButton.textContent === "Start") {
            appModule.startMoving();
        } else {
            appModule.stopMoving();
        }
        startPauseRename();
    }

    return {
        clickStart: clickStartBtn,
        changeBtnText: startPauseRename,
        start: start,
        create: create,
    }
})();


