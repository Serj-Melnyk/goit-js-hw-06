const input = document.querySelector(`input`);

// console.log(input);
input.addEventListener(`blur`, onInput);
function onInput(evt) {
  const { value } = evt.currentTarget;
  console.log(value);

  if (value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
  } else if (value.length !== Number(input.dataset.length)) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else if (value === "") {
    input.classList = "";
    // input.classList.add("invalid");
    // input.classList.remove("valid");
  }

  console.log(input.classList);
}
