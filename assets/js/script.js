// Assignment code here
var pswdText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = ["!@#%^&*()~?"];
const upCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const lowCase = ["abcdefghijklmnopqrstuvwxyz"];
let passlength = [" "]
let password = " ";

function generatePassword() {
  var passlength = window.prompt("How long would you like your password? (Pick a number between 8 and 128)")
  
  var lengthOfPass=parseInt(passlength);
  if (Number.isNaN(passlength)) {
    alert("Password lenght must be a number")
  }
  if (lengthOfPass >= 8 && isNaN(lengthOfPass) === true && lengthOfPass <= 128);
  else (lengthOfPass < 8 && lengthOfPass > 128);{
    alert;("Must be between 8-128")
  };
  var includeNums =
    window.confirm("Include numbers in your password?. (Select OK for Yes or Cancel for No)")
  if (includeNums) {
    lengthOfPass = password.concat(nums)
  };

  var includeSpecial =
    window.confirm("Include special characters?", "Yes or No")
  if (includeSpecial) {
    lengthOfPass = password.concat(special)
  };

  var includeUpCase =
    window.confirm("Include Upper Case Letters?", "Yes or No")
  if (includeUpCase) {
    lengthOfPass = password.concat(upCase)
  };

  var includeLowCase =
    window.confirm("Inlcude lowercase letter?", "Yes or No")
  if (includeLowCase) {
    lengthOfPass = password.concat(lowCase)
  };
  var userINput = {
    includeNums=includeNums,
    includeSpecial=includeSpecial,
    includeUpCase=includeUpCase,
    includeLowCase=includeLowCase,
  }
};
generateBtn.addEventListener("click",generatePassword);

// Get references to the #generate element

// Write password to the #password input
// function generatePassword() {
//   var password = window.alert("You will  be given a series of prompts to tailor your random password")
//   // ask user number of chracters for password



//   if







//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;

// }
// generatePassword();

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
