const controlPanelModule = (function () {

    function startPauseRename() {
        startBtn.textContent === "Start" ? startBtn.textContent = "Pause" : startBtn.textContent = "Start";
    }

    function clickStartBtn() {
        if (startBtn.textContent === "Start") {
            start();
        } else {
            stop();
        }
        startPauseRename();
    }

    return {
        clickStart: clickStartBtn,
        changeBtnText: startPauseRename
    }
})();