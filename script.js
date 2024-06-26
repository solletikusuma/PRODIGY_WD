let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStopBtn").innerText = "Start";
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startStopBtn").innerText = "Stop";
    }
    isRunning = !isRunning;
}

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    const display = document.getElementById("display");
    display.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(unit) {
    return unit < 10 ? "0" + unit : unit;
}

function reset() {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("startStopBtn").innerText = "Start";
    document.getElementById("laps").innerHTML = "";
    isRunning = false;
}

function recordLap() {
    if (isRunning) {
        const lapTime = document.createElement("div");
        lapTime.className = "lap";
        lapTime.innerText = document.getElementById("display").innerText;
        document.getElementById("laps").appendChild(lapTime);
    }
}
