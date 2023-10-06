// Assignment code here
function generatePassword() {
  const pwLength = prompt ("Length of Password (8-128)");
  console.log(pwLength);

  const upperCase = prompt ("Uppercase (Yes or No?)");
  console.log(upperCase);

  const nums = prompt ("Numbers (Yes or No?)")
  console.log(nums)

  const specialChars = prompt ("Special Characters (Yes or No?)");
  console.log(specialChars);
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