const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector("#ingredients");

// A function that adds items to a list based on the items in an array
const createListItems = (array, list) => {
  array.forEach(element => {
    const item = document.createElement("li");
    item.textContent = element;
    item.classList.add("item");
    list.append(item);
  });
};

// Add items from the ingredients array to the #ingredients list
createListItems(ingredients, listOfIngredients);