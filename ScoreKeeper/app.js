const p1score = document.querySelector("#p1score");
const p2score = document.querySelector("#p2score");
let player1scoreVal = 0;
let player2scoreVal = 0;

const p1button = document.querySelector("#p1point");
const p2button = document.querySelector("#p2point");
const reset = document.querySelector("#resetButton");

p1button.addEventListener("click", (event) => {
    event.preventDefault();
    player1scoreVal++;
    p1score.innerText = player1scoreVal;
    s
})

p2button.addEventListener("click", (event) => {
    event.preventDefault();
    player2scoreVal++;
    p2score.innerText = player2scoreVal;
})

reset.addEventListener("click", (event) => {
    event.preventDefault();
    p1score.innerText = 0;
    p2score.innerText = 0;
})
