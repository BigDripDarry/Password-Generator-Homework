// Assignment code here
function generatePassword() {
  //Prompts users these questions
  const pwLength = parseInt (prompt("Length of Password (8-128)"));

  const lowerCase = prompt ("Lowercase (Yes or No?)").toLowerCase();
  const upperCase = prompt ("Uppercase (Yes or No?)").toLowerCase();
  const nums = prompt ("Numbers (Yes or No?)").toLowerCase();
  const specialChars = prompt ("Special Characters (Yes or No?)").toLowerCase();

  // Defines char sets
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numChars = '0123456789';
  const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  // Appends the char to const related to it
  let allowedChars = ''

    if (lowerCase === 'yes') {
      allowedChars += lowerCaseChars;
    }

    if (upperCase === 'yes') {
      allowedChars += upperCaseChars;
    }

    if (nums === 'yes') {
      allowedChars += numChars;
    }

    if (specialChars === 'yes') {
      allowedChars +=specialCharacters;
    }

    //Checks to see if user input valid characters
    if (allowedChars === '') {
      alert('Please select a valid character to use in your password!');
    }

    return password;
};

// Generates the random password
let password = '';

for (let i = 0; i < pwLength; i++) {
  const randomIndex = Math.floor(Math.random() * allowedChars.length);
  password += allowedChars[randomIndex];

  return password;
} 

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