function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widget = document.querySelector(".widget");
// console.log(widget);

const button = document.querySelector(".change-color");

button.addEventListener("click", onClick);

const colorValue = document.querySelector(".color");
// console.log(colorValue);

function onClick(evt) {
  document.body.style.backgroundColor = getRandomHexColor();

  colorValue.textContent = document.body.style.backgroundColor;

  // console.log(colorValue);
}
