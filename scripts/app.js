const score = document.getElementById("score");
const record = document.getElementById("record");

function clickMessage() {
    console.log("hello")
}

function remove(el) {
    let figure = el;
    figure.nextElementSibling.style.animationDelay = "unset";
    figure.remove();

}