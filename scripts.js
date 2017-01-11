console.logt("Start program.")
alert("hello from treehouse");
document.write("<h1> Welcome to Javascript Basics</h1>");
alert("Thanks for visiting.");

alert("Hey, you're back for more?");
alert("Hello there")
document.write("No, it works!")
console.log("Program complete")
console.log("End program.")

var message = "Hello!";
alert(message);
message = 'Welcome to js basics';
alert(message);

message = 'she\'s a great person'


var visitorName = prompt("what is your name");
var message = "Hello " + visistor;
document.writer(message);

var passphrase = 'Open Sesame';
console.log(passphrase.length);
console.log(passphrase.toLowerCase());
console.log(passphrase.toUpperCase());

object  property
message.length


var stringToShout = prompt("what sould I shout?");
var shout = stringToShout.toUpperCase();
shout+= "!!!";
alert(shout);




var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;

var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write("There are " + secondsPerDay + " seconds in a day");

var yearsAlive = 29;
var secondsAlive = yearsAlive * secondsPerDay * daysPerWeek * weeksPerYear;
document.write('I have been alive for more than ' + secondsAlive + ' seconds');



var HTMLBadges = prompt('how many HTML badges do you have?');
var CSSBadges = prompt('how many CSS badges do you have?')
var totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
alert('Wow! You have ' + totalBadges + ' badges! ');


var str = '49 steps';
var num = parseInt(str);
// num now holds the number 49
parseFloat()

var str = '102.99%';
var num = parseFloat(str);
// num now holds the number 102.99


Math.round(38.45);
Math.floor();
Math.ceil ();
Math.random();
Math.floor(Math.random()*6);

var correctGuess = false
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber) {
  document.write("<p>You guessed the number!</p>");
} else {
  document.write('<p>Sorry. The number was ' + randomNumber + '</p>')
}


/*
The Random Number Guessing Game
Generate a number between 1 and 6
and give a player two attempts to
guess the number
*/

// assume the player didn't guess correctly
var correctGuess = false

// generate random number from 1 and 6
var randomNumber = Math.floor(Math.random() * 6) + 1;

var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

/* test to see if the player is
1. correct
2. guessd too high
3. guessed too low
*/
if (parseInt(guess) === randomNumber) {
  correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
  var guessMore = prompt("try again. The number I am thinking of is more than " + guess);
    if (parseInt(guessMore) === randomNumber) {
      correctGuess = true;
    }
} else if (parseInt(guess) > randomNumber) {
  var guessLess = prompt("Try again. The number I am thinking of is less than " + guess);
    if (parseInt(guessLess) === randomNumber) {
      correctGuess = true;
    }
}
// test if player is correct and output response
if (correctGuess) {
  document.write("<p>You guessed the number!</p>");
} else {
  document.write("<p>Sorry. the number was " + randomNumber + "</p>");
}




// function with an argument (upper)
function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}
// loop while
var counter = 0
while (counter <= 10) {
  var randNum = getRandomNumber(6);
  document.write(randNum + " ")
  counter += 1;
}




var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false; // call Flag

// function with an argument (upper)
function getRandomNumber(upper) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

// Do While loop
do {
  guess = prompt("I am thinking of a number between 1 and 10. What is it?");
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
} while (!correctGuess) // ! signifie le contraire de ce qui est écrit

document.write("<h1> you guessed the number!</h1>");
document.write(" It took you " + guessCount + " tries to guess the number " + randomNumber);




var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false; // call Flag

// function with an argument (upper)
function getRandomNumber(upper) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

//  While loop if true
while(true) {
  guess = prompt("I am thinking of a number between 1 and 10. What is it?");
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
    break;
  }
}
document.write("<h1> you guessed the number!</h1>");
document.write(" It took you " + guessCount + " tries to guess the number " + randomNumber);




var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false; // call Flag

// function with an argument (upper)
function getRandomNumber(upper) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

//  While loop pr que la boucle fonctionne que 10 fois max
while(guessCount < 10) {
  guess = prompt("I am thinking of a number between 1 and 10. What is it?");
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
    break;
  }
}

// Résultat
if(correctGuess) {
document.write("<h1> you guessed the number!</h1>");
document.write(" It took you " + guessCount + " tries to guess the number " + randomNumber);
} else {
  document.write("<h1>Sorry. You did not guess the number.</h1>")
}




var html = "";

for (var i = 1; i <= 10; i += 1) {
  html += "<div>" + i + "</div>";
document.write(html);







// Exercice
var html = '';
var red;
var green;
var blue;
var rgbColor;

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

document.write(html);


// le code Simplifié
var html = '';
var red;
var green;
var blue;
var rgbColor;

for (var i = 0; i < 10; i++) {
  red = Math.floor(Math.random() * 256 );
  green = Math.floor(Math.random() * 256 );
  blue = Math.floor(Math.random() * 256 );
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);



// le code encore plus simplifié
var html = '';
var rgbColor;

function randomRGB() {
  return Math.floor(Math.random() * 256 );
}

function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

function print(message) {
  document.write(message);
}


for (var i = 0; i < 10; i++) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);
