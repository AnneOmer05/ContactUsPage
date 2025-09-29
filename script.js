const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  if (nameInput.value.trim() === "") {
    nameError.style.display = "block";
    valid = false;
  } else {
    nameError.style.display = "none";
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailError.style.display = "block";
    valid = false;
  } else {
    emailError.style.display = "none";
  }

  if (subjectInput.value.trim() === "") {
    subjectError.style.display = "block";
    valid = false;
  } else {
    subjectError.style.display = "none";
  }

  if (messageInput.value.trim() === "") {
    messageError.style.display = "block";
    valid = false;
  } else {
    messageError.style.display = "none";
  }

  if (valid) {
    successMessage.style.display = "block";
    form.reset();
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  }
});
