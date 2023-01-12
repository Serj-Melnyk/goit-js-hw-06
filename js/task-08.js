const form = document.querySelector(".login-form");


form.addEventListener("submit", onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  //   console.log("email", email.value);
  //   console.log("password", password.value);
  const obj = {
    email: email.value,
    password: password.value,
  };
  // console.log("password", password.value);};

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert(`все поля должны быть заполнены`);
  } else console.log(obj);

  form.reset();
}
