const figureModule = (function () {

    const movementOffsetX = 1;
    const movementOffsetY = 1;
    let figureFormType = ['square', 'circle'];
    let figureColor = ['blue', 'red', 'green', 'yellow', 'braun', 'grey', 'purple'];

    function getRandomFigureForm() {
        return figureFormType[Math.floor(Math.random() * figureFormType.length)];
    }

    function setRandomFigureForm(figure= appModule.figure) {
        figure.classList.add('ui-game__figure', `ui-game__figure_${getRandomFigureForm()}`);
    }

    function getRandomFigureColor() {
        return figureColor[Math.floor(Math.random() * figureColor.length)];
    }

    function setRandomFigureColor(figure= appModule.figure) {
        appModule.figure.style.backgroundColor = `${getRandomFigureColor()}`;
    }

    /*
    TODO
    необходимо вынести ответственность создания новой фигуры
    и навешивания глобального события из модуля создания фигур
    */
    function createFigure() {
        let newFigure = document.createElement('div');
        newFigure.classList.add('ui-game__figure');
        // appModule.playField.prepend(newFigure);
        // setRandomFigureForm(newFigure);
        // setRandomFigureColor(newFigure);
        return newFigure;
    }

    // function clickFigure() {
    //     let newFigure = createFigure();
    //     this.remove();
    //     newFigure.addEventListener('click', clickFigure);
    // }

    function removeFigure() {
        this.remove();
    }

    function moveFigure() {
    let elem = document.querySelector('.ui-game__figure');
        let x = elem.offsetLeft;
        let y = elem.offsetTop;
        elem.style.left = `${x + movementOffsetX}px`;
        elem.style.top = `${y + movementOffsetY}px`;
    }

    return {
        create: createFigure,
        move: moveFigure,
        setColor: setRandomFigureColor,
        setForm: setRandomFigureForm,
        remove: removeFigure
    };
})();