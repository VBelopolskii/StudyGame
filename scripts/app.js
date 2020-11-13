const score = document.getElementById("score");
const record = document.getElementById("record");

function clickMessage() {
    console.log("hello")
}

function remove(el) {
    let figure = el;
    console.log(figure.nextElementSibling)
    if (figure.nextElementSibling != null) {
        figure.nextElementSibling.style.animationDelay = "0s";
        figure.nextElementSibling.style.left = "-50px";
    }
    figure.remove();
}