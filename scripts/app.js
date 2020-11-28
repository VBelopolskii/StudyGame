"use strict";

const score = document.getElementById("score");
const record = document.getElementById("record");




// killedFigure.forEach(element => {
//     element.addEventListener('click', console.log('test'));
// });

// killedFigure.addEventListener('click', console.log('Success'));

function removeFigure() {
    console.log(this);
    let nextFigure = this.nextElementSibling;
    if (nextFigure != null) {
        resetNextElementAnimationDelay(nextFigure);
    }
    this.remove();
}

function clickFigureEventListener() {
    const killedFigure = document.getElementsByClassName('js-figure')
    // const killedFigure = document.getElementById('test');

    if (killedFigure) {
        killedFigure.addEventListener('click', removeFigure)
    }
}

function resetElementAnimationDelay(e) {
    e.style.animationDelay = "0s";
}

clickFigureEventListener()