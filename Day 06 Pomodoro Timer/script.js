let DEFAULT_TIME = 25 * 60;
let time = Number(localStorage.getItem("pm_time")) || DEFAULT_TIME;

let interval = null;
let isRunning = false;

const timerEl = document.getElementById("timer");

function render() {
    let m = Math.floor(time / 60);
    let s = time % 60;
    timerEl.innerText = `${m < 10 ? "0"+m : m}:${s < 10 ? "0"+s : s}`;
}

render();
// Start
document.getElementById("start").addEventListener("click", () => {
    if (isRunning) return;

    isRunning = true;

    interval = setInterval(() => {
        if (time > 0) {
            time--;
            localStorage.setItem("pm_time", time);
            render();
        } else {
            clearInterval(interval);
            isRunning = false;
            alert("Time Completed!");
        }
    }, 1000);
});

// Pause
document.getElementById("pause").addEventListener("click", () => {
    clearInterval(interval);
    isRunning = false;
});

// Reset
document.getElementById("reset").addEventListener("click", () => {
    clearInterval(interval);
    isRunning = false;
    time = DEFAULT_TIME;
    localStorage.setItem("pm_time", time);
    render();
});
