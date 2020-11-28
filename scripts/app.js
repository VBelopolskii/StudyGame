const score = document.getElementById("score");
const record = document.getElementById("record");
let timeoutId = 0;
let square1 = document.getElementsByClassName('ui-figure1')[0];


function remove(el) {
    // let figure = el;
    // console.log(figure.nextElementSibling)
    // if (figure.nextElementSibling != null) {
    //     figure.nextElementSibling.style.animationDelay = "0s";
    //     figure.nextElementSibling.style.left = "-50px";
    // }
    // figure.remove();
    console.log('test')
}

function start() {
    timeoutId = setInterval(move, 10);

}

function move() {
    let x = square1.offsetLeft;
    let y = square1.offsetTop;
    square1.style.left = `${x + 1}px`;
    // console.log(square1)
}

function stop() {
    clearTimeout(timeoutId)
}

function click(event) {
    console.log(this, event);
    this.remove();
}
square1.addEventListener('click', click)


start();
console.log(stop)