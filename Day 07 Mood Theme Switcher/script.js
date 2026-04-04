const moodSelect = document.querySelector("#mood");

const themes = {
    happy: "linear-gradient(135deg, #ffbb00ff, #ff6600ff)",
    calm: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    angry: "linear-gradient(135deg, #ff4e50, #f9d423)",
    focus: "linear-gradient(135deg, #434343, #000000)",
    sad: "linear-gradient(135deg, #5f72be, #9b23ea)"
};


let savedMood = localStorage.getItem("currentMood");
if (savedMood) {
    document.body.style.background = themes[savedMood];
    moodSelect.value = savedMood;
}

moodSelect.addEventListener("change", function () {
    let selectedMood = this.value;

    if (themes[selectedMood]) {
        document.body.style.background = themes[selectedMood];
        localStorage.setItem("currentMood", selectedMood);
    }
});
