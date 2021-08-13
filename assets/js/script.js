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
  let ret = { alphaU: false, alphaL: false, spec: false, num: false, charSet: ''}

  var passL = window.confirm('Do you want lowercase letters in your password?');
  if (passL) {
    ret.alphaL = true;
    ret.charSet += alphaL;
  }

  var passU = window.confirm('Do you Want Capital letters in your password?');
  if (passU) {
    ret.alphaU = true;
    ret.charSet += alphaU;
  }

  var passNum = window.confirm('Do you want numbers in your password?');
  if (passNum) {
    ret.num = true;
    ret.charSet += num;
  }

  var passSpec = window.confirm('Do you want special characters (+/?; etc...) in your password?');
  if (passSpec) {
    ret.spec = true;
    ret.charSet += spec;
  }

  return ret;
};

function generatePassword() {
  var passLength = '';

  do {
    passLength = parseInt(window.prompt('How long would you like your password to be?'));
  } while (passLength < 8 || passLength > 128);

  let length = passLength;
  let charSets = allowedCharacters();
  let hasLower = false,
      hasUpper = false,
      hasNum   = false,
      hasSpec  = false;
  let password = '';

  do {
    for (let i = 0, n = charSets.charSet.length; i < length; i++) {
      password += charSets.charSet.charAt(Math.floor(Math.random() * n));
    }

    if (charSets.alphaL) {
      for (let c of password) {
        for (let c1 of alphaL) {
          if (c === c1) {
            hasLower = true;
            break;
          }
        }
      }
    } else hasLower = true;

    if (charSets.alphaU) {
      for (let c of password) {
        for (let c1 of alphaU) {
          if (c === c1) {
            hasUpper = true;
            break;
          }
        }
      }
    } else hasUpper = true;

    if (charSets.num) {
      for (let c of password) {
        for (let c1 of num) {
          if (c === c1) {
            hasNum = true;
            break;
          }
        }
      }
    } else hasNum = true;

    if (charSets.spec) {
      for (let c of password) {
        for (let c1 of spec) {
          if (c === c1) {
            hasSpec = true;
            break;
          }
        }
      }
    } else hasSpec = true;

  } while (!hasLower || !hasUpper || !hasNum || !hasSpec);

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