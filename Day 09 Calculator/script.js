// ===============================
// CALCULATOR – FINAL CLEAN JS
// ===============================

// Select elements
const input = document.getElementById("input");
const buttons = document.querySelectorAll(".btn");
const enterBtn = document.getElementById("enter");

// Auto focus for keyboard
input.focus();

const keyMap = {
  Backspace: "X",
  Escape: "AC",
};

// ===============================
// ADD VALUE
// ===============================
function addToInput(value) {
  input.value += value;
}

// ===============================
// BUTTON HANDLING
// ===============================
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    if (val === "AC") {
      input.value = "";
    } else if (val === "X") {
      input.value = input.value.slice(0, -1);
    } else if (val === "Enter") {
      calculate();
    } else if (val === ".") {
      let last = input.value.split(/[\+\-\*\/]/).pop();
      if (!last.includes(".")) addToInput(".");
    } else {
      addToInput(val);
    }
  });
});

// ===============================
// CALCULATE
// ===============================
function calculate() {
  try {
    input.value = eval(input.value);
  } catch {
    input.value = "Error";
  }
}

// ===============================
// KEYBOARD HANDLING (NO DOUBLE INPUT)
// ===============================
document.addEventListener("keydown", (e) => {
  e.preventDefault(); // STOP browser typing

  highlightButton(e.key);

  if (e.key >= "0" && e.key <= "9") addToInput(e.key);
  else if (["+", "-", "*", "/"].includes(e.key)) addToInput(e.key);
  else if (e.key === ".") {
    let last = input.value.split(/[\+\-\*\/]/).pop();
    if (!last.includes(".")) addToInput(".");
  } else if (e.key === "Enter") calculate();
  else if (e.key === "Backspace") input.value = input.value.slice(0, -1);
  else if (e.key === "Escape") input.value = "";
});

function highlightButton(key) {
  const displayKey = keyMap[key] || key;
  const btn = [...buttons].find((b) => b.innerText === displayKey);

  if (!btn) return;

  btn.classList.add("key-active");

  setTimeout(() => {
    btn.classList.remove("key-active");
  }, 150);
}
