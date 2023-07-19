const form = document.querySelector("form");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirmPassword");

form.addEventListener("submit", (e) => {
  if (password.value !== passwordConfirm.value) {
    e.preventDefault();
    e.stopPropagation();
    passwordConfirm.setCustomValidity("Password does not match!");
  } else {
    passwordConfirm.setCustomValidity("");
  }
});
