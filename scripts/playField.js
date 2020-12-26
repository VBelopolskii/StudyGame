const playFieldModule = (function () {
    function createPlayField() {
        let mainBlock = document.getElementById('main');
        let playField = document.createElement('div');
        mainBlock.appendChild(playField);
        playField.classList.add('ui-playField');
        return playField;
    }
    return {create: createPlayField};
})();