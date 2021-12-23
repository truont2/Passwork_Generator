// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// initiate character arrays for usage later
// could instead write text as one string and use .split() to convert to an array
var alphabetLower = ["a","b","b","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 9, 9];
var special = ["~","`","!","@","#","$","%","^","&","*","(",")"," ","\'", "\"","-","+","=","_","\\","]","[","<",">","?","{","}","|", ":",";", ","];

// nested array of all 4 arrays
 var totalArr = [["a","b","b","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"], [0, 1, 2, 3, 4, 5, 6, 7, 9, 9], ["~","`","!","@","#","$","%","^","&","*","(",")"," ","\'", "\"","-","+","=","_","\\","]","[","<",">","?","{","}","|", ":",";", ","]];

// initiate booleans for later when user chooses to include characters or not
// initially set to false until user decides otherwise
var low = false;
var up = false;
var num = false;
var spec = false;

// function generates password
function generatePassword() {
  // initialize empty string for password
  let password ="";
  let length = prompt("Please enter a password length between 8-128.");

  // check if the length typed is a string or a number value
  if(isNaN(length) === false) {
    // conditional to alert the user if the size isn't between 8 or 128
    if(length < 8 || length > 128) {
      alert("Please choose a length BETWEEN 8 and 128.")
      generatePassword();
    } else {
      var newTotalArr = chooseChar();
  
      // generates password by concatenating strings together based on a random number generated byt the length provided by the user
      for(let i = 0; i <= length; i++) {
        let x = Math.floor(Math.random() * newTotalArr.length);
        password = password + newTotalArr[x];
      }
    }
  } else {
    // alert user that the value typed is not acceptable
    alert("Please choose a integer value. Not a string.")
    generatePassword();
  }
  return password;
}

// function determines what characters are used for the password based on user input
function chooseChar() {
  // initialize empty array
  let newTotalArr = [];

  // confirm user input on what characters to include
  low = confirm("Would you like lowercase characters?");
  up = confirm("Would you like uppercase characters?");
  num = confirm("Would you like numbers?");
  spec = confirm("Would you like special characters?");

  // check if at least one character set was included
  if(up == false && low == false && spec == false && num == false) {
    alert("Please select at least one type")
    chooseChar();
  } else {
    // create an array of boolean values to loop through
    let boolArr = [low, up, num, spec];

    // concatenates character array to a new array to use when generating the password
    // based on the index of the boolean array, we determine what characters are included
    for (let k = 0; k <= boolArr.length; k++) {
      if(boolArr[k]) {
        newTotalArr = newTotalArr.concat(totalArr[k]);
        console.log(newTotalArr);
      }
    }
  }
  return newTotalArr;
}
