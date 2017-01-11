/*
1 Generate a random number from 1 to 10 000. this is the number the computer needs to guess
2 enter a while loop inside this loop the computer will 'guess' a random number.
  If the number the computer gesses matches the number generated at the beginning of the program,
  the loop ends, if not, the loop continues until the correct number is guessed.
3 Exit the loop and print the random number
  and the number of time it took the computer to guess it.
*/

var upper = 10000;
var randomNumber = getRandomNumber(upper)
var guess;
var attempts = 0;
// 1 function which generate a random number
function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}
// 2 while loop
while (guess !== randomNumber) {
  guess = getRandomNumber(upper);
  attempts += 1;
}
// 3 result 
document.write("<p>The random number was: " + randomNumber + "</p>");
document.write("<p>It took the computeur " + attempts + " attempts to get it right.</p>")
