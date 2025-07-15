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
const confirmPasswordInput = document.querySelector("#confirmPassword");
const formBtn = document.querySelector("#form-btn");
let form = document.querySelector("#form");

let userValidation = false;
let emailValidation = false;
let phoneValidation = false;
let passwordValidation = false;
let confirmPasswordValidation = false;
let countriesValidation = false;

// operador de propagacion
let arrayCountries = [...countries];

// iteracion
arrayCountries.forEach((country) => {
  // split
  let onlyCountries = country.innerText.split("(")[0];
  country.innerHTML = onlyCountries;
});

// validaciones

usernameInput.addEventListener("input", (e) => {
  let informacion = e.target.parentElement.children[2];
  userValidation = validation(e, userRegex, usernameInput, informacion);
  submitValidation()
});

emailInput.addEventListener("input", (e) => {
  let informacion = e.target.parentElement.children[2];
  emailValidation = validation(e, emailRegex, emailInput, informacion);
  submitValidation()
});

phoneNumber.addEventListener("input", (e) => {
  let informacion = e.target.parentElement.children[2];
  phoneValidation = validation(e, phonenumberRegex, phoneNumber, informacion);
  submitValidation()
});

passwordInput.addEventListener("input", (e) => {
  let informacion = e.target.parentElement.children[2];
  passwordValidation = validation(e, passwordRegex, passwordInput, informacion);
  submitValidation()
});

confirmPasswordInput.addEventListener("input", (e) => {
  let informacion = e.target.parentElement.children[2];
  confirmPasswordValidation = validation(
    e,
    "confirmPassword",
    confirmPasswordInput,
    informacion
  );
  submitValidation()
});

countries.addEventListener("change", function (e) {
  let codeNumber = this.value;
  phoneCode.innerHTML = `+${codeNumber}`;
  phoneNumber.value = ""; // Borra el input del teléfono
  this.classList.add("correct");
  phoneCode.classList.add("correct");
  countriesValidation = codeNumber !== "" ? true : false;
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que se recargue la página al enviar el formulario
  const user = {
    username: usernameInput.value,
    email: emailInput.value,
    phone: `${phoneCode.innerHTML} ${phoneNumber.value}`,
  };
  console.log("Formulario enviado. Datos:", user);
  alert("¡Te registraste correctamente!");
});

// se reutiliza la validacion para los otros inputs
function validation(e, regex, selector, informacion) {
  let inputValue = e.target.value;
  const passwordValue = password.value;

  let validate =
    regex === "confirmPassword"
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
  return validate;
}

// Funcion para habilitar el boton de envio del formulario

function submitValidation() {
  let condition =
    userValidation &&
    emailValidation &&
    phoneValidation &&
    passwordValidation &&
    confirmPasswordValidation &&
    countriesValidation;

  if (condition) {
    formBtn.removeAttribute("disabled");
  } else {
    formBtn.disabled = true;
  }
}