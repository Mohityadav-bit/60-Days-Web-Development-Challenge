let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let form = document.querySelector("form");

let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");
let resultMessage = document.querySelector("#resultMessage");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    // Hide previous messages
    emailError.style.display = "none";
    passwordError.style.display = "none";
    resultMessage.textContent = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isValid = true;

    if (!emailRegex.test(email.value)) {
        emailError.textContent = "Email is incorrect";
        emailError.style.display = "block";
        isValid = false;
    }

    if (!passwordRegex.test(pass.value)) {
        passwordError.textContent = "Password is incorrect";
        passwordError.style.display = "block";
        isValid = false;
    }

    if (isValid) {
        resultMessage.textContent = "Everything is correct!";
        resultMessage.style.color = "lightgreen";
    }
});
