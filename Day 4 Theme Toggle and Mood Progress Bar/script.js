let isDark = false;
let progress = 0;

const themeBtn = document.querySelector("#themeToggle");
const progressBar = document.querySelector("#progressBar");
const progressTxt = document.querySelector("#progressTxt");
const moodButtons = document.querySelectorAll(".mood-btn");

// Theme Toggle
themeBtn.addEventListener("click", function () {
    isDark = !isDark;

    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    themeBtn.textContent = isDark ? "🌙" : "🌞";
});

// Mood Button Logic
moodButtons.forEach(button => {
    button.addEventListener("click", () => {

        let value = Number(button.dataset.value);

        if (value < 0) {
            progress = Math.max(0, progress + value);
        } else {
            progress = Math.min(100, progress + value);
        }

        progressBar.style.width = progress + "%";
        progressTxt.textContent = "Progress: " + progress + "%";
    });
});
