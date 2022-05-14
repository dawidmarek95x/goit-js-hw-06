// A function that generates a random color in HEX format
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector('#controls>input[type="number"]');

// The click listener that calls a function to create a collection of items
createBtn.addEventListener("click", () => createBoxes(Number(input.value)));

// The click listener that calls a function to delete a collection of items
destroyBtn.addEventListener("click", destroyBoxes);

// A function that creates a collection of items
function createBoxes(amount) {
  let dimensions = 30;
  let elements = [];

  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${dimensions}px`;
    box.style.height = `${dimensions}px`;

    elements.push(box)
    dimensions += 10;
  }

  boxes.style.marginTop = "10px";
  boxes.append(...elements);
};

// A function that deletes a collection of items
function destroyBoxes() {
  boxes.innerHTML = "";
};