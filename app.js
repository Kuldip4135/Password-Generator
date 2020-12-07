const passwordEl = document.getElementById("password");
const passwordLength = document.getElementById("length");
const upperCaseEl = document.getElementById("upperCase");
const lowerCaseEl = document.getElementById("lowerCase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generatePassword");

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getUpperCase() {
  return upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
}

function getLowerCase() {
  return lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const len = passwordLength.value;
  let password = "";

  if (upperCaseEl.checked) {
    password += getUpperCase();
  }

  if (lowerCaseEl.checked) {
    password += getLowerCase();
  }

  if (numberEl.checked) {
    password += getNumber();
  }

  if (symbolEl.checked) {
    password += getSymbol();
  }

  for (let i = password.length; i < len; i++) {
    const x = generateX();
    password += x;
  }

  passwordEl.innerText = password;
}

//we create this bcoz we have to generate password according to usee's input & to generate again & again on upper we have
//wriiten a for loop that if user wants 15 length password then it will generate password of that length.
function generateX() {
  const xs = [];
  if (upperCaseEl.checked) {
    xs.push(getUpperCase());
  }

  if (lowerCaseEl.checked) {
    xs.push(getLowerCase());
  }

  if (symbolEl.checked) {
    xs.push(getSymbol());
  }

  if (numberEl.checked) {
    xs.push(getNumber());
  }

  if (xs.length === 0) return "";
  return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);
