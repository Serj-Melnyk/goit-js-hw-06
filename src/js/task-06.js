const input = document.querySelector(`input`);

// console.log(input);
input.addEventListener(`blur`, onInput);
function onInput(evt) {
  const { value } = evt.currentTarget;
  console.log(value);

  if (value.length !== Number(input.dataset.length)) {
    input.classList.add("invalid");
  } else input.classList.replace("invalid", "valid");

  console.log(input.classList);
}
