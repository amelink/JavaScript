// Convert Sring to number
var input1 = prompt("Please type a starting number");
var bottomNumber = parseInt(input1)
var input = prompt("Enter a number");
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</p>"
document.write(message);


// function basics
function getRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}
alert(getRandomNumber());
console.log(getRandomNumber());
var dieRoll = getRandomNumber;

// function with an argument
function getRandomNumber(upper) {
  var randomNumber = Math.floor(Math.random() * upper) + 1;
  return randomNumber;
}
/*
console.log(getRandomNumber(6));
console.log(getRandomNumber(100));
console.log(getRandomNumber(1000));
*/

// function to calculate the area
function getArea(width, length, unit) {
  var area = width * length;
  return area + " " + unit;
}
console.log(getArea(10,20, "sq ft"));

// function with 2 arguments (lower, upper)
function getRandomNumber(lower, upper) {
  var tranche = upper-lower;
  var random = tranche * Math.random();
  var randomNumber = lower + random;
  var finalRandom = Math.floor(randomNumber);
  return finalRandom;
}
console.log(getRandomNumber(1,500));

// function with 2 arguments correction
function getRandomNumber (lower,upper) {
  if ( isNaN(lower)||isNaN(upper) ) {
    throw new Error("Both arguments must be numbers")
  }
  return Math.floor(Math.random() * (upper - lower + 1 )) + lower;
}

console.log(getRandomNumber(1,500));
