var timer = 60;
var hitRn = 0;
var score = 0;

function getHit() {
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitRn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 154; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".container").innerHTML = clutter;
}

function runTimer() {
    var timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        } else {
            clearInterval(timerInt); // it will stop the setInterval()
            document.querySelector(".container").innerHTML = `<h1>GAME OVER<h1>`;
        }
    }, 1000);
};

document.querySelector(".container").addEventListener("click", function (details) {
    var number = Number(details.target.textContent);
    if (number === hitRn) {
        increaseScore();
        makeBubble();
        getHit();
    } else {
        makeBubble();
        getHit();
    }
});

makeBubble();
runTimer();
getHit();