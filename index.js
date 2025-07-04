const userRegex = /^(?=.*[a-z])(?=.*[0-9]).{6,16}$/; //min 6, max 16, contain 1 letra y 1 num
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,16}$/; //min 6, max 10, contain 1 letra minuscula, 1 num y mayuscula
const emailRegex = /^\S+@\S+\.\S{2,4}$/; //contain @, . y la extesion final min 2 y max 4
const phonenumberRegex = /^[0-9]{7,10}$/;

// selectors
let countries = document.querySelector("#countries");
const usernameInput = document.querySelector("#username"); //primer paso
const emailInput = document.querySelector("#email");
const phoneCode = document.querySelector("#phone-code");
const phoneNumber = document.querySelector("#phone-number");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

// operador de propagacion
let arrayCountries = [...countries];

// iteracion
arrayCountries.forEach((country) => {
  // split
  let onlyCountry = country.innerText.split("(")[0];
  country.innerHTML = onlyCountry;
});

// validaciones
usernameInput.addEventListener("input", (e) => {
  //agg el evento
  let username = e.target.value; //agg los valores
  // console.log(e.target.value);
  let userValidation = userRegex.test(username); //validar con el Regex
  // console.log(userValidation);

  if (userValidation) {
    usernameInput.classList.add("correct");
    usernameInput.classList.remove("incorrect");
  } else {
    usernameInput.classList.add("incorrect");
  }
});

emailInput.addEventListener("input", (e) => {
  let email = e.target.value;
  // console.log(e.target.value);
  let emailValidation = emailRegex.test(email);
  // console.log(emailValidation);

  if (emailValidation) {
    emailInput.classList.add("correct");
    emailInput.classList.remove("incorrect");
  } else {
    emailInput.classList.add("incorrect");
  }
});

phoneNumber.addEventListener("input", (e) => {
  let phone = e.target.value;
  // console.log(e.target.value);
  let phoneValidation = phonenumberRegex.test(phone);
  // console.log(phoneValidation);

  if (phoneValidation) {
    phoneNumber.classList.add("correct");
    phoneNumber.classList.remove("incorrect");
  } else {
    phoneNumber.classList.add("incorrect");
  }
});

passwordInput.addEventListener("input", (e) => {
  let password = e.target.value;
  // console.log(e.target.value);
  let passwordValidation = passwordRegex.test(password);
  // console.log(passwordValidation);
  if (passwordValidation) {
    passwordInput.classList.add("correct");
    passwordInput.classList.remove("incorrect");
  } else {
    passwordInput.classList.add("incorrect");
  }
});

confirmPasswordInput.addEventListener("input", (e) => {
  let confirmPassword = e.target.value;
  console.log(e.target.value);
  let password = passwordInput.value;

  if (confirmPassword === password) {
    confirmPasswordInput.classList.add("correct");
    confirmPasswordInput.classList.remove("incorrect");
  } else {
    confirmPasswordInput.classList.add("incorrect");
  }
});
