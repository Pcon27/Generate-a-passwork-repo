// Variables
var password
var randomChar
var userInput
var totalChar
var finalChar
var passwordLength
var userNumbers
var userLowercase
var userUppercase
var userSpecial
var lower=("abcdefghijklmnopqrstuvwxyz")
var upper=("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var numbers=("1234567890")
var special=(" !$%&'()*+,-./:;<=>?@[\]^_`{|}~#")


// function started by a button click
function userLength() { 
  userInput = prompt("how many characters would you like in your password? (must be between 8-128");
  console.log(userInput);

//method to check if integer between 8-128 was inputted
if (Number(userInput) - parseInt(userInput) !==0) {
    alert("please enter a number between 8-128")
    return
}

else if (Number(userInput) >= 129 || Number(userInput)<= 7 ) {
    alert("please enter a whole number between 8-128")
    return
}

// method to check if integer between 8-128 was inputted user asked if they want upper case 
else {
  passwordLength = (Number(userInput));
  userUppercase=confirm("would you like to have UpperCase letters?") 
};

// method to ask user if they want numbers
if (userUppercase) {
  totalChar = lower.concat(upper);
  userNumbers=confirm("would you like to have numbers?");
  // console.log(totalChar);
}

else {
  totalChar = lower;
  userNumbers=confirm("would you like to have numbers?");
  // console.log(totalChar)
};

//method to ask user if they want special characters and update character string accordingly
if (userNumbers) {
  totalChar = totalChar.concat(numbers);
  userSpecial=confirm("would you like to have special characters");
  // console.log(totalChar);
}

else {
  totalChar = totalChar;
  userSpecial=confirm("would you like to have special characters");
  // console.log(totalChar)
};

if (userSpecial) {
  totalChar = totalChar.concat(special);
  console.log(totalChar);
}

else {
  totalChar = totalChar;
  console.log(totalChar);
}

// command to generate the number of total caracters to choose from on the user's preferences

finalChar = totalChar.length;
console.log(finalChar);

// command to create random password using for loop that ends when it reaches intnded length

password= "";

for( i=1; i<= passwordLength; i++) {
    password += totalChar.charAt(Math.floor(Math.random()*finalChar));
    console.log(randomChar);
}

//alert for the password to display

console.log("your password is" + password);

alert("your password is: " +password);

}