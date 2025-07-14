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
const formbtn = document.querySelector("#form-btn");

let userValidation = false;
let emailValidation = false;
let phoneValidation = false;
let passwordValidation = false;
let confirmPasswordValidation = false;
let countryValidation = false;

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
  let informacion = e.target.parentElement.children[2];
  validation(e, userRegex, username, informacion, userValidation);
});

emailInput.addEventListener("input", (e) => {
  let informacion = e.target.parentElement.children[2];
  validation(e, emailRegex, email, informacion, emailValidation);
});

phoneNumber.addEventListener("input", (e) => {
  let informacion = e.target.parentElement.children[2];
 phoneValidation = validation(e, phonenumberRegex, phoneNumber, informacion, phoneValidation);
});

passwordInput.addEventListener("input", (e) => {
  let informacion = e.target.parentElement.children[2];
  passwordValidation = validation(e, passwordRegex, password, informacion, passwordValidation);
});

confirmPasswordInput.addEventListener("input", (e) => {
  let informacion = e.target.parentElement.children[2];
  const idConfirmPasswordInput = e.target.id;
  confirmPasswordValidation = validation(
    e,
    confirmPasswordInput,
    idConfirmPasswordInput,
    informacion
  );
});

countries.addEventListener("change", function () {
  codeNumber = this.value;
  phoneCode.innerHTML = `+${codeNumber}`;
  countryValidation = codeNumber !== "" ? true : false;
});

// se reutiliza la validacion para los otros inputs
function validation(e, regex, selector, informacion) {
  let inputValue = e.target.value;
  const passwordValue = password.value;
  let validate =
    regex === "confirm-password"
      ? passwordValue === inputValue
      : regex.test(inputValue);

  if (validate) {
    selector.classList.add("correct");
    selector.classList.remove("incorrect");
    // info message
    informacion.classList.add("user-validate");
  } else {
    selector.classList.add("incorrect");
    // info message
    informacion.classList.remove("user-validate");
  }
}
