const controlPanelModule = (function () {

    function startPauseRename() {
        appModule.startBtn.textContent === "Start" ? appModule.startBtn.textContent = "Pause" : appModule.startBtn.textContent = "Start";
    }

    function clickStartBtn() {
        if (appModule.startBtn.textContent === "Start") {
            appModule.startMoving();
        } else {
            appModule.stopMoving();
        }
        startPauseRename();
    }

    return {
        clickStart: clickStartBtn,
        changeBtnText: startPauseRename,
    }
})();


