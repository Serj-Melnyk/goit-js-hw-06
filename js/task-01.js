const categories = document.querySelector("#categories");
// console.log(categories);

const showNumbersCategory = () => {
  console.log(`Number of categories:`, categories.children.length);
};
showNumbersCategory();

const titleEl = document.querySelectorAll(".item");
// console.log(titleEl);
titleEl.forEach((category) => {
  console.log(`Category:`, category.firstElementChild.textContent);
  console.log(`Elements:`, category.querySelectorAll("li").length);
});
