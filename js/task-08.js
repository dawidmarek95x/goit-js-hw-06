const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", submitFunc);

function submitFunc(evt) {
  evt.preventDefault();

  const {email, password} = evt.currentTarget.elements;

  ((email.value || password.value) === "") 
  ? alert("Please fill in all the fields.") 
  : console.log({
    [email.name]: email.value,
    [password.name]: password.value,
  });

  evt.currentTarget.reset();
};