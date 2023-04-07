// Assignment code here


var specialCharArr = ['@', '!', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '<', '>'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function getPrompt(){
  charLength = parseInt(prompt("How many characters do you want in your passord? 8-128 char"));
  if(Number.isNaN(charLength) && charLength < 8 && charLength > 128){
    alert("Number must be 8 to 128 digits. Please enter new number");
    return null;
  }
  var hasLower=confirm("Would you like lowercase letters in your password?") 
  
  var hasUpper= confirm("Would you like uppercase letters in your password?")
  
  var hasSpecial= confirm("Would you like special characters in your password?")
  
  var hasNumber= confirm("Would you like numbers in your password?")
  
  if(
    !hasLower &&
    !hasUpper &&
    !hasSpecial &&
    !hasNumber
  ){
    alert("Must select at least one character type.");
    return null
  }
  var userOptions = {
    length: charLength, 
    hasLower: hasLower,
    hasUpper: hasUpper,
    hasSpecial: hasSpecial,
    hasNumber: hasNumber
  }
return userOptions
}

function random(array){
  var i = Math.floor (Math.random() * array.length)
  var e = array[i]
  return e

}

function generatePassword(){
  var options = getPrompt()
  var results = [] 
  var possibleChar = []
  var guaranteedChar = []

  if (options.hasLower){
    possibleChar = possibleChar.concat(lowerCaseArr)
    guaranteedChar.push(random(lowerCaseArr))
  }

  if (options.hasUpper){
    possibleChar = possibleChar.concat(upperCaseArr)
    guaranteedChar.push(random(upperCaseArr))
  }
  if (options.hasSpecial){
    possibleChar = possibleChar.concat(specialCharArr)
    guaranteedChar.push(random(specialCharArr))
  }
  if (options.hasNumber){
    possibleChar = possibleChar.concat(numberArr)
    guaranteedChar.push(random(numberArr))
  }
  for(var i = 0; i< options.length; i++) {
    var char=random(possibleChar)
    results.push(char)
  }
  for(var i = 0; i< guaranteedChar.length; i++){
    results[i]= guaranteedChar[i]
  }
  return results.join("")
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  // var correctPrompts = getPrompt();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}


