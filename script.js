let time = 0;
let interval = null;

function updateDisplay() {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    document.getElementById("display").innerText =
        String(hours).padStart(2, '0') + ":" +
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0');
}

function start() {
    if (interval === null) {
        interval = setInterval(() => {
            time++;
            updateDisplay();
        }, 1000);
    }
}

function pause() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    clearInterval(interval);
    interval = null;
    time = 0;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    let li = document.createElement("li");
    li.innerText = document.getElementById("display").innerText;
    document.getElementById("laps").appendChild(li);
}