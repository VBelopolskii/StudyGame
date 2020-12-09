const figureModule = (function () {

    let figureFormType = ['square', 'circle'];

    function setRandomType() {
        let randomFigureType = figureFormType[Math.floor(Math.random()*figureFormType.length)];
        return randomFigureType;
    }

    function createFigure() {
        let newFigure = document.createElement('div');
        playField.prepend(newFigure);
        newFigure.classList.add('ui-figure', `ui-${setRandomType()}`);
        return newFigure;
    }

    function clickFigure() {
        let newFigure = createFigure();
        this.remove();
        newFigure.addEventListener('click', clickFigure);
    }

    function moveFigure() {
        let elem = document.getElementsByClassName('ui-figure')[0];
        let x = elem.offsetLeft;
        let y = elem.offsetTop;
        elem.style.left = `${x + 1}px`;
    }

    return {
        create: createFigure,
        move: moveFigure,
        click: clickFigure
    };
})();