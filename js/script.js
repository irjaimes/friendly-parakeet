
//Variables to call HTML form input 
var pwdlength = document.getElementById("characterLength")
var withUpperCase = document.getElementById("withUpperCase")
var withLowerCase = document.getElementById("withLowerCase")
var withNumbers = document.getElementById("withNumbers")
var withSymbols = document.getElementById("withSymbols")
var passwordResult = document.getElementById("passwordReturned")
var generateBtn = document.getElementById("generate")

//DOM Elements variables
var pwdreturnEl = document.getElementById("passwordReturned");
var lengthEl = document.getElementById("characterLength");
var uppercaseEl = document.getElementById("withUpperCase");
var lowercaseEl = document.getElementById("withLowerCase");
var numberEl = document.getElementById("withNumbers");
var symbolEl = document.getElementById("withSymbols");
var generateEl = document.getElementById("generate");

//OBJECT with all generator functions
var randomFunct = {
  lower: randomLowerCase,
  upper: randomUpperCase,
  number: randomNumber,
  symbol: randomSymbol
};

//Event Listerner 
generateEl.addEventListener("click", () => { //function to get values from input
  var length = +lengthEl.value;
  //console.log(typeof length)
  var includeLower = lowercaseEl.checked;
  var includeUpper = uppercaseEl.checked;
  var includeNumber = numberEl.checked;
  var includeSymbol = symbolEl.checked;
  console.log(includeSymbol, includeUpper, includeLower, includeNumber, length)
  pwdreturnEl.innerText = generatedPassword(length, includeLower, includeUpper, includeNumber, includeSymbol);
});

//generatedPassword() 
function generatedPassword(length, lower, upper, number, symbol) {
  //pwd variable
  let generatedPassword = ""; 
  var criteriaCount = length + lower + upper + number + symbol;
  //criteria array with filter method to exclude false values = nonselected criteria
  var criteriaArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
  //console.log("criteriaArr: ", criteriaArr);
  
  if(criteriaCount === 0) {
    return ""; //Add propmt HERE
  }
  
  //loop the through the pwd length and call generator function for each selected criteria
  for (var i = 0; i < length; i+= criteriaCount) {
    criteriaArr.forEach(type => {
      var funcName = Object.keys(type)[0];
      //console.log('funcName: ', funcName);
      generatedPassword += randomFunct[funcName]();
      //console.log('funcName: ' , funcName)
    })
    //add  final pw to the pw var and return as pwdResult text
    var pwdResult = generatedPassword.slice(0, length);
    return pwdResult;
  } 
  console.log(generatedPassword)
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
