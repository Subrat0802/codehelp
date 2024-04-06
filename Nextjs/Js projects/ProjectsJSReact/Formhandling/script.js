const form = document.getElementById("form");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const userConPassword = document.getElementById("conPassword");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Error", userName.value);
    validateInputs();
});

function validateInputs() {
    const name = userName.value.trim();
    const email = userEmail.value.trim();
    const password = userPassword.value.trim();
    const conPassword = userConPassword.value.trim();

    if (name === "") {
        setError(userName, "User Name is required");
    } else {
        setSuccess(userName);
    }
    if (password === "") {
        setError(userPassword, "User password is required");
    } else {
        setSuccess(userPassword);
    }
}

function setError(element, message) {
    const inputController = element.parentElement;
    const errorDisplay = inputController.querySelector('.error');
    errorDisplay.innerText = message;

    inputController.classList.add('error');
    inputController.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = "";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
