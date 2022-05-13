// Category list
const categories = document.querySelector("#categories");

// The categories list items
const items = document.querySelectorAll(".item");

// A function that returns the number of child elements
const numberOfChildren = (element) => element.children.length;

// Calculating the number of categories
console.log(`Number of categories: ${numberOfChildren(categories)}`);

// Find and enter a category name and the number of items in that category
items.forEach(i => {
  console.log(`Category: ${i.firstElementChild.textContent}`);
  console.log(`Elements: ${numberOfChildren(i.lastElementChild)}`);
});