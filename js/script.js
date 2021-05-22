//make variables for the different character types: lowercase, uppercase, numeric, special character
var lowCase = 'abcdefghijklmnopqrstuvwxyz';
var upCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '1234567890';
var char = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passLength = '';
var password = '';

// Write password to the #password input
function writePassword() {
  password = '';
  var passwordText = document.querySelector('#password');
  var totalPass = '';
  passLength = '';

  //collects the number of characters the user wants in the password
  var passLength = prompt(
    'How long do you want your password to be? (Select between 8-128 characters)'
  );
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    window.alert('Please enter a whole number between 8 and 128.');
    writePassword();
    return;
  } else {
    passLength = Math.round(passLength);
    window.alert('Your password will be ' + passLength + ' characters long.');
    console.log(passLength);
  }

  //Determines if the user wants lower case letters in their password
  var includeLow = confirm(
    'Would you like to include lower case letters in your password?'
  );
  if (includeLow) {
    window.alert('Your password will include lower case letters.');
    totalPass += lowCase;
    console.log(totalPass);
  } else {
    window.alert('Your password will NOT include lower case letters.');
  }

  //Determines if the user wants upper case letters in their password
  var includeUp = confirm(
    'Would you like to include UPPER CASE letters in your password?'
  );
  if (includeUp) {
    window.alert('Your password will include UPPER CASE letters.');
    totalPass += upCase;
    console.log(totalPass);
  } else {
    window.alert('Your password will NOT include UPPER CASE letters.');
  }

  //Determines if the user wants numbers in the password
  var includeNum = confirm(
    'Would you like to include numbers in your password? (123...)'
  );
  if (includeNum) {
    window.alert('Your password will include numbers');
    totalPass += numbers;
    console.log(totalPass);
  } else {
    window.alert('Your password will NOT include numbers');
  }

  //Determines if the user wants characters in their password
  var includeChar = confirm(
    'Would you like to include special characters in your password? (!?@#$$)'
  );
  if (includeChar) {
    window.alert('Your password will inlcude special characters');
    totalPass += char;
    console.log(totalPass);
  } else {
    window.alert('Your password will NOT inlcude special characters');
  }

  //Makes sure they selcted at least one set of characters
  if (totalPass === '') {
    window.alert(
      'Please select at least two types of characters to include in your password.'
    );
    writePassword();
  }

  //generates the password
  var generatePassword = function () {
    password = '';
    var i;
    for (var i = 0; i < passLength; i++) {
      password += totalPass.charAt(
        Math.floor(Math.random() * totalPass.length)
      );
    }
  };

  generatePassword();
  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
var passText = document.querySelector('#password');
generateBtn.addEventListener('click', writePassword);
