const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");
const signInForm = document.querySelector(".sign-in");
const signUpForm = document.querySelector(".sign-up");


btnSignIn.addEventListener("click", () => {
    container.classList.remove("toggle");
});
btnSignUp.addEventListener("click", () => {
    container.classList.add("toggle");
});


function isFormFilled(form) {
    const inputs = form.querySelectorAll("input");
    for (let input of inputs) {
        if (input.value.trim() === "") {
            return false;
        }
    }
    return true;
}


signInForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    if (isFormFilled(signInForm)) {
        window.location.href = "inicio2.html"; 
    } else {
        alert("Por favor, complete todos los campos."); 
    }
});


signUpForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    if (isFormFilled(signUpForm)) {
        window.location.href = "inicio2.html"; 
    } else {
        alert("Por favor, complete todos los campos."); 
    }
});