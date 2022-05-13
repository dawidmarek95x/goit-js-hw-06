let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const outputValue = document.querySelector("#value");

// Click listener for a button that decreases the value
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  outputValue.textContent = counterValue;
});

// Click listener for a button that increases the value
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  outputValue.textContent = counterValue;
});