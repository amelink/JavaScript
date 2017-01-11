introduction :


JavaScript
js got its name from Java
a programming language for computer
what use forme

Animation
Event hadling
dynamic styling
Everybody use this

webbrowser read js code like human

all js code follow specific contraint
js in put : 22 + 4 / 22 +"Austin"
js out put : 26 / "22 Austin"

js variable :

var myName = "tyler"

var theYear = 2015



variable
must start

la première de js est js minuscule daprès la convention

var myName = "kevin"
myName = "not kevin" js = not kevin
console.log(myName)

var myName = "kevin"
console.log(myName) js kevin
myName = "not kevin"


var x = 15
var y = x




math operation

var x = 22
var y = 4
var Z =  x / y

(22 + 4 + 2 - 2) / 4





function

var myFunction = function(){
code to be excuted
}

ex :
var makeSeven = function {
  return 6 + 1
}

var calculation =



var myfunction = function(num1, num2) {
    return num1 * num2
}

function vs

var kevinThrow = function(item) {
[...] // code here
}


kevinThrow(ball); //ball is your argument


js : math library

in put Math.random() * 10 between 0 and 1

out put 8,394

in put math.floor(4.7) need a number
out put 3


math.max(23, 45, 12, 18, 4)

output : 45


var myName = "John"
myName.length



string concatenation

var firstname = "Amelie"
var lastname = "Lee"
var fullname = firstname + " " + lastname


fullname.toUpperCase()

"hello"tolowcase()
"HELLO"toUpCase()


career transtion sequence
4 week prep course 17 octobre to 13 novembre
 interview deadline 26

 12 dec to march hackReactor immersive


 795$ pré programs 98% placement telegraph Academy

 104k salaire

 angularjs par google / react /

 getCoding.HackReactor.com/bootcamp-prep

 prep@telegraphacademy.com


Exercise 1: Restaurant Tip Calculator

1) Define a function named calculateTip and give it two arguments: total and percent

2) Inside your function, use the return keyword to output a tip according to the percent argument.

Extra Credit: Want to shave off the extra decimal places? Click here to learn about the .toFixed() function and how to use it.

In the example below, your function should output 7.965.
calculateTip(44.25, 18)

solution :
 var calculateTip = function(total, tips) {
 	return total * tips / 100;
 }

 calculateTip(44.25, 18);




Exercise 2: Picking apart a URL

 1) Define a function named removePrefix and give it one argument: url

 2) Inside your function, return the url without "www." included. Hint: Use .slice

 Hint: Don't forget to wrap quotes around your strings!

 In the example below, your function should output google.com.
 removePrefix('www.google.com')


 var fruits = ["Banane", "Orange", "Citron", "Pomme", "Mangue"];
 var agrumes = fruits.slice(1, 3);

 // fruits vaut --> ["Banane", "Orange", "Citron", "Pomme", "Mangue"]
 // agrumes vaut --> ["Orange", "Citron"]


solution :
 var removePrefix = function(url) {
 	return url.slice(3);
 };

 removePrefix("www.google.com");





 Exercise 3: Random Number Generator

 1) Define a function named randomNumberGen with no arguments.

 2) Inside your function, return a random number between 1 and 10. Hint: Use Math.random() and Math.floor(number)

 In the example below, your function should output a whole number between 1 and 10.
 randomNumberGen()


Solution :
 var randomNumberGen = function() {
 	return Math.floor(Math.random() * 10);
 }

 randomNumberGen()

Math.floor: défini lentier le plus petit



Exercise 4 : Super Extra Credit: "Sentence Reverser"

1) Define a function named reverseSentence with one argument: sentence

2) Inside your function, return the reversed copy of the sentence that is passed in as an argument. Hint: Use String.split() Array.reverse() and Array.join()

In the example below, your function should output "!ecnetnes emosewa na si sihT".
reverseSentence('This is an awesome sentence!')
