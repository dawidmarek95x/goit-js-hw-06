const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

// The function that changes the font size by the selected controller for the selected output
const changingFontSize = (controlInput, output) => {
  controlInput.addEventListener("input", ({target}) => {
    output.style.fontSize = `${target.value}px`;
  });
};

// Change the font size for span#text using input#font-size-control
changingFontSize(fontSizeControl, text);