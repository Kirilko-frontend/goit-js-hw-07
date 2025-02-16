const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const email = formData.get("email").trim();
  const password = formData.get("password").trim();

  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  const formObject = {
    email: email,
    password: password,
  };

  console.log(formObject);

  form.reset();
});
