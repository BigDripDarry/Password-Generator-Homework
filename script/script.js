// Assignment code here
function generatePassword() {
  //Prompts users these questions
  const pwLength = parseInt (prompt("Length of Password (8-128)"));

  const lowerCase = prompt ("Lowercase (Yes or No?)")
  const upperCase = prompt ("Uppercase (Yes or No?)");
  const nums = prompt ("Numbers (Yes or No?)")
  const specialChars = prompt ("Special Characters (Yes or No?)");

};

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);