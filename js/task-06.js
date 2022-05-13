const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener("blur", ({target}) => {
  if (target.textLength === Number(target.dataset.length)) {
    target.classList.add("valid");
    target.classList.remove("invalid");
  } else {
    target.classList.add("invalid");
    target.classList.remove("valid");
  }
});