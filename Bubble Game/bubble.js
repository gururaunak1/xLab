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
    // enent listner bubble pr nhi lga sakte (both sare bubble h) isliye use parent pr lga diys container pr
    // click krte he bubble pr event nhi milega tho vo uske parent container pr jayega vha se details layega
    var number = Number(details.target.textContent);  // target is bubble mila or textContent uthaya appane
    if (number === hitRn) {
        increaseScore();
        makeBubble();
        getHit();
    } else {
        makeBubble();
        getHit();
    }
});

// testing 1

makeBubble();
runTimer();
getHit();


// testing