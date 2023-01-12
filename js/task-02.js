const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((ingredient) => {
  // console.log(ingredient);
  const products = document.querySelector("#ingredients");
  // console.log(products);

  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = `${ingredient}`;
  products.append(li);
  console.dir(li);
});
