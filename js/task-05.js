const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const placeholderName = "Anonymous";

nameInput.addEventListener("input", (evt) => {
  evt.target.value !== "" ? nameOutput.textContent = evt.target.value : nameOutput.textContent = "Anonymous";
});