// // Assignment code here
var generateBtn = document.querySelector("#generate");
// possible chars for password
const nums = "0123456789";
const special = "!@#%^&*()~?";
const upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowCase = "abcdefghijklmnopqrstuvwxyz";
let passLength = "";
let pswd = "";

function generatePassword() {
  // debugger
  // ask for number of characters
  passLength = window.prompt("How many characters would you like your password? (Choose between 8 and 128)"
  );
  var lengthPass = parseInt(passLength);
  if (Number.isNaN(passLength)) {
    alert("Invalid entry. Must be a number");
    return null;
  }
  if (lengthPass < 8 || lengthPass > 128) {
    alert("Password needs to be larger than 8 but less than 128");
    return null;
  }
  // ask for inclusion of numbers
  var includeNums =
    window.confirm("Include numbers in your password?. (Select OK for Yes or Cancel for No)");
  //ask fro inclusion of special chars
  var includeSpecial =
    window.confirm("Include special characters?", "Yes or No");

  // ask for inclusion of Upper case letters
  var includeUpCase =
    window.confirm("Include Upper Case Letters?", "Yes or No");

  //ask for inclusion of lower case letters
  var includeLowCase =
    window.confirm("Inlcude lowercase letter?", "Yes or No");
  //user must select at least one of the options
  if (includeNums == false && includeSpecial == false && includeUpCase == false && includeLowCase == false) {
    alert("You must select atleast one option");
    return null;
  }

  var userInput = {
    includeNums: includeNums,
    includeSpecial: includeSpecial,
    includeLowCase: includeLowCase,
    includeUpCase: includeUpCase,
    lengthPass: lengthPass,
  };
  return combineUserInput(userInput);
}
// function to combine input from user
function combineUserInput(lengthOfPass) {
  // if (includeNums) {
  //   lengthOfPass = ranPassword.concat(nums)
  // };
  // if (includeSpecial) {
  //   lengthOfPass = ranPassword.concat(special)
  // };
  // if (includeUpCase) {
  //   lengthOfPass = ranPassword.concat(upCase)
  // };
  // if (includeLowCase) {
  //   lengthOfPass = ranPassword.concat(lowCase)
  // };

  if (lengthOfPass.includeNums == true) {
    pswd += nums;
  }
  if (lengthOfPass.includeSpecial == true) {
    pswd += special;
  }
  if ((lengthOfPass.includeUpCase = true)) {
    pswd += upCase;
  }
  if (lengthOfPass.includeLowCase == true) {
    pswd += lowCase;
  }
// calcute input and use radnom
  var ranPassword = "";
  for (var x = 0; x<lengthOfPass.lengthPass; x++) {
    ranPassword = ranPassword + pswd.charAt(Math.floor(Math.random() * pswd.length));
  }
  return ranPassword;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);
var passwordText = document.querySelector("#password");
