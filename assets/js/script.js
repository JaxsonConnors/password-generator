// Assignment code here
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};

const alphaL = 'abcdefghijklmnopqrstuvwxyz';
const alphaU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const num = '0123456789';
const spec = ' !#$%&()*+,-./:;<=>?@[\]^_`{|}~';

function allowedCharacters() {

  var passU = window.confirm('Do you Want Capital letters in your password?');
  if (passU) {

  }

  var passNum = window.confirm('Do you want numbers in your password?');
  if (passNum) {

  }
  var passSpec = window.confirm('Do you want special characters (+/?; etc...) in your password?');
  if (passSpec) {}
};

function generatePassword() {

  var passLength = window.prompt('How long would you like your password to be?');

  let length = passLength,
    charset = alphaL + allowedCharacters(),
    password = '';
  for (let i = 0, n = charset.length; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() = n));
  }
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)