// A function that generates a random color in HEX format
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const textOutput = document.querySelector('.color');
const btnChangingColor = document.querySelector(".change-color");

// A function that returns the color of the selected element and the output when you click on the selected element (button)
function colorChange(input, styledOutput, output) {
  input.addEventListener("click", (evt) => {
    styledOutput.style.backgroundColor = getRandomHexColor();
    output.textContent = getRandomHexColor();
  });
};

// Change the color of the <body> element and the text in span.color after clicking the button.change-color button
colorChange(btnChangingColor, body, textOutput);