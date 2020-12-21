
//Variables to call HTML form input 
var pwdlength = document.getElementById("characterLength")
var withUpperCase = document.getElementById("withUpperCase")
var withLowerCase = document.getElementById("withLowerCase")
var withNumbers = document.getElementById("withNumbers")
var withSymbols = document.getElementById("withSymbols")
var passwordReturned = document.getElementById("passwordReturned")
var generateBtn = document.getElementById("generate")

//DOM Elements
var passwordEl = document.getElementById("passwordReturned");
var lengthEl = document.getElementById("characterLength");
var uppercaseEl = document.getElementById("withUpperCase");
var lowercaseEl = document.getElementById("withLowerCase");
var numberEl = document.getElementById("withNumbers");
var symbolEl = document.getElementById("withSymbols");
var generateEl = document.getElementById("generate");

//OBJECT with all generator functions
var random = {
  lower: randomLowerCase,
  upper: randomUpperCase,
  number: randomNumber,
  symbol: randomSymbol
};

//Event Listerner 
generateEl.addEventListener("click", () => { //function to get values from input
  const length = +lengthEl.value;
  const includeLower = lowercaseEl.checked;
  const includeUpper = uppercaseEl.checked;
  const includeNumber = numberEl.checked;
  const includeSymbol = symbolEl.checked;

  passwordReturned.innerText = generatedPassword(length, includeLower, includeUpper, includeNumber, includeSymbol);
});

//generatePassword() 
function generatedPassword(length, lower, upper, number, symbol) {
  //pwd variable
  let generatedPassword = ""; 
  var criteriaType = length + lower + upper + number + symbol;
  //criteria array with filter method to exclude false values = nonselected criteria
  var criteriaArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
  //console.log("criteriaArr: ", criteriaArr);
  
  if(criteriaArr === 0) {
    return ""; //Add propmt here
  }
  
  //loop the through the pwd length and call generator function for each selected criteria
  for (var i = 0; i < length; i+= criteriaType) {
    criteriaArr.forEach(type => {
      var funcName = Object.keys(type)[0];
      //console.log('funcName: ', funcName);
      generatedPassword += random[funcName]();
    })
    //add  final pw to the pw var and return as pwdResult text
    var pwdResult = generatedPassword.slice(0, length);
    return pwdResult;
  } 
}

//GENERATOR FUNCTIONS
//Random LowerCase generator function
function randomLowerCase() {
  //Multiply by 26 letters in alphabet. Add starting index in charset code for lower case letters
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//Random UpperCase generator function
function randomUpperCase() {
  //Multiply by 26 letters in alphabet. Add starting index in charset code for Upper case letters
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//Random Number generator function
function randomNumber() {
  //Multiply by 10 since there's 10 numbers 0-9. Add starting index in charset code for Numbers
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//Random Symbol generator function
function randomSymbol() {
  //create symbol array and use length of array to multiply math random
  var symbols = "!@#$%^&*_-=+{}[]'?<>.,";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
