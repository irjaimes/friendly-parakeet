// GLOBAL VARIABLES

//Variables to call HTML form input 
var characterRangeAmount = document.getElementById("characterRangeAmount")
var characterNumberAmount = document.getElementById("characterNumberAmount")
var withUpperCase = document.getElementById("withUpperCase")
var withLowerCase = document.getElementById("withLowerCase")
var withNumbers = document.getElementById("withNumber")
var withSymbols = document.getElementById("withSymbols")
var generateBtn= document.getElementById("generate")
var passwordReturned = document.getElementById("passwordReturned")

//Char Codes Variables
var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
//concatanated char codes for symbols since they're not listed in order
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

 
//eventListerners. Sync these two inputs. Everytime input changes, call syncCharacterAmount()
characterRangeAmount.addEventListener("input", syncCharacterAmount)
characterNumberAmount.addEventListener("input", syncCharacterAmount)

generateBtn.addEventListener("submit", e => {
  //prevent page from reload on submit, instead displays password
  e.preventDefault()
  var characterAmount = characterNumberAmount.value //value of number of character selected
  var withUpperCase = withUpperCase.checked //value of box when checked
  var withLowerCase = withLowerCase.checked //value of box when checked
  var withNumbers = withNumbers.checked //value of box when checked
  var withSymbols = withSymbols.checked //value of box when checked
  //passes this variables = characterAmount, withUpperCase, withLowerCase, withNumbers, withSymbols to generate a password in generatePassword()
  var password = generatePassword(characterAmount, withUpperCase, withLowerCase, withNumbers, withSymbols)
  passwordReturned.innerText = password
})


//GENERATE PASSWORD FUNCTION
function generatePassword(characterAmount, withUpperCase, withLowerCase, withNumbers, withSymbols) {
  //default to lower case characters
  let charCodes = ""
  if(withUpperCase) {
  charCodes = charCodes.concat(UPPERCASE_CHAR_CODES) }
  if(withLowerCase) {
  charCodes = charCodes.concat(LOWERCASE_CHAR_CODES) }
  if(withNumbers) {
  charCodes = charCodes.concat(NUMBER_CHAR_CODES) }
  if(withSymbols){
  charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  }else {
    alert("At least one criteria must be selected") //debug for this
  }
  
  //variable to store all characters in array
  var passwordCharacters = []
  for (let i = 0; i < characterAmount; i++){
    //get random string from one index from each charCode when selected. Set as interger with mathfloor, multiply random number times characterAmount selected. 
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)] 
    passwordCharacters.push(String.fromCharCode(characterCode)) //pass character code to convert to string
  }//return password as a string and join them so they display as one password with x amount of characters
  return passwordCharacters.join("")
}

//function to generate character code array
function arrayFromLowToHigh(low, high){
  //loop to iterate through all variables between min and high
  var array= []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}

//function to link range slider and range number 
function syncCharacterAmount(e) { //called an event listener
  var value = e.target.value
  characterRangeAmount.value = value
  characterNumberAmount.value = value
}



/*
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/* function to generate a random numeric value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
} */



