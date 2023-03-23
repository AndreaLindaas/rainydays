const form = document.querySelector(".form");
const fullName = document.querySelector("#fname");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm(event) {
	event.preventDefault();
	let isFormValid = true;

	if (fullName.value.trim().length > 0) {
		fullNameError.style.display = "none";
	} else {
		fullNameError.style.display = "block";
		isFormValid = false;
	}

	if (email.value.trim().length > 0) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
		isFormValid = false;
	}
	if (message.value.trim().length > 9) {
		messageError.style.display = "none";
	} else {
		messageError.style.display = "block";
		isFormValid = false;
	}

	if (isFormValid) {
		window.location.href = "thankyou_contactform.html";
	}
}

form.addEventListener("submit", validateForm);
