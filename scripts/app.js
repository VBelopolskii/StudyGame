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
        nextFigure.style.animation = 'move 5s linear';
        nextFigure.addEventListener('click', removeFigure)
    }
    this.remove();
}


let killedFigure = document.getElementsByClassName('js-figure')[0];
    // const killedFigure = document.getElementById('test');


killedFigure.addEventListener('click', removeFigure)



// clickFigureEventListener()