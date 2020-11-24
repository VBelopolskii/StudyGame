"use strict";

const score = document.getElementById("score");
const record = document.getElementById("record");

const killedFigure = document.getElementById('test');
if(killedFigure){
    killedFigure.addEventListener('click', console.log('test'), false)
}


// killedFigure.forEach(element => {
//     element.addEventListener('click', console.log('test'));
// });

// killedFigure.addEventListener('click', console.log('Success'));

function removeFigure() {
    console.log('test');
    let nextFigure = e.nextElementSibling;
    console.log(nextFigure);
    if (nextFigure != null) {
        resetNextElementAnimationDelay(e);
    }
    e.remove();
}

function resetNextElementAnimationDelay(e) {
    let nextFigure = e.nextElementSibling;
    nextFigure.style.animationDelay = "0s";
}