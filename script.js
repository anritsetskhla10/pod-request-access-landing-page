


const form = document.getElementById("email-form");
const button = document.querySelector('[type="submit"]');

const msg = "Oops! Please check your email";
const error = document.createElement("p");
error.classList.add("error_text");
error.textContent = msg;

const error_container = document.getElementById("error_container");

function checkemail(e) {
    e.preventDefault();
    const email = document.getElementsByClassName('email')[0].value;
    if (!validateEmail(email)) {
        form.classList.add("error");
        error_container.appendChild(error);
    } else {
        form.classList.remove("error");
        error_container.removeChild(error);
    }
    console.log(email);
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

form.addEventListener("submit", checkemail);