Summary :
I Loops
II Arrays
III Object



I Loops
boucle qui tourne plusieur fois ou sous certaines conditions
A loop is use when you want to repeat code over and over a certain number of time.
A loop is like a track. each time around the track is like one time through the loop
endless loop = boocle infini

DRY = Dont Repeat Yourself

Structure of a while (= tant que) () Loop

while ( ) {
  // this is the loop
}
Example: loop that runs 10 times

var counter = 1;
while ( counter <= 10 ) {
  console.log(counter);
  counter += 1;
}

// function with an argument (upper)
function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}
// loop while
var counter = 0
while (counter <= 10) { // counter = 0,
  var randNum = getRandomNumber(6); //puis génère un numéro entre 1 et 6
  document.write(randNum + " ") //écrit le numéro sur la page HTML
  counter += 1; // puis counter vaut 1 et garde la valeur jusqu'attendre la valeur maximum
}


1 Generate a random number from 1 to 10 000. this is the number the computer needs to guess
2 enter a while loop inside this loop the computer will 'guess' a random number.
  If the number the computer gesses matches the number generated at the beginning of the program,
  the loop ends, if not, the loop continues until the correct number is guessed.
3 Exit the loop and print the random number
  and the number of time it took the computer to guess it.


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



// while loop pour vérifier que le mot de passe est correct
var secret = prompt("What is the secret password?");
while (secret !== "sesame") {
  secret = prompt("please enter the correct password");
}
document.write("You know the secret password. Welcome.");



Basic Structure of a do...while Loop
do {
  // code for loop goes here
  // it runs AT least one time
} while ( )



Basic Structure of a For Loop
for (var i = 0; i < 10; i += 1) {
   // do something in here
}

You can also increment the counter using the ++ operator like this:
for (var i = 0; i < 10; i++) {
   // do something in here
}







II Arrays

Structure of Arrays :
var scores = [100, 99, 99, 72, 60];
var names = ['Joan', 'Amit', 'Sarah', 'Ricardo', 'Piers'];
var values = [1, -100, true, false, 'JavaScript'];



Add items to the beginning of an array with .unshift()
var items = ['Hat', 'Ball', 'Shoes'];
items.unshift('Socks','Scarf');
// items is now ['Socks', 'Scarf', 'Hat', 'Ball', 'Shoes']
Add items to the end of an array with .push()
var items = ['Hat', 'Ball', 'Shoes'];
items.push('Socks','Scarf');
// items is now ['Hat', 'Ball', 'Shoes', 'Socks', 'Scarf']

Remove the First Item from an array with .shift()
var items = ['Hat', 'Ball', 'Shoes'];
var firstItem = items.shift();
// firstItem now holds 'Hat' (= return the last item)
// and items is now ['Ball', 'Shoes']
Remove the Last Item from an array with .pop()
var items = ['Hat', 'Ball', 'Shoes'];
var lastItem = items.pop(); // pour montrer la deniere valeur
// lastItem now holds 'Shoes' ()= returne the last item)
// and items is now ['Hat', 'Ball']


var arr = [1, 0, 2];
var newArr = arr.slice(0, -1);    // returns [1,0]


// Afficher les éléments d'un tableau
var students = ["Sascha";"Lynn";"Jennifer";"Paul"];

for (var i = 0; i < students.length; i += 1) {
  console.log(students[i]);
}

Important Update :
/*
Since this video was shot, the behavior of most browsers has changed,
so you won't see the same thing as I demonstrate in the video.
In the video, you'll see that my script is able to print out to the browser using document.write( ) while inside a loop.

Most browsers no longer do that: they wait until the loop finishes and then they print to the window.
So, you'll see a blank page until you type quit in the prompt window — then you'll see all the output printed to the screen.
Sorry for the confusion, and we'll update the video soon.
*/


//How to create a list of separate string from array
var daysInWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
//Solution
var daysString = daysInWeek.join(", ");
console.log(daysString);


// How to add value in an Array
var currentStudents = ["Brad", "Luca", "johann"];
var newStudents = ["Liz", "Tracy", "Theodor"];
// Solution
var allStudents = currentStudents.concat(newStudents);
// Pour inverser l'odre de la liste
var allStudents = newStudents.concat(currentStudents)
console.log(allStudents);

Concat ne transforme pas le tableaux, les tableau sont toujours les mêmes


//How to know the position of a value is the array
var fruit = ["Apple", "Orange", "Grapefruit"];
// Solution
var position = fruit.indexOf("Apple");
console.log(position);
// ! Si la valeur n'existe pas, cette méthode affichera -1
The indexOf( ) method can search an array to see if there is a matching item in the array.
For example, students.indexOf("Kari") looks to see if the string "Kari" is an item in the students array.
What value does the JavaScript interpreter return if it CANT find a matching item in the array? -1




2 demensional Arrays :
un tableau peut contenir des bouléen, string. numéro
et aussi les tablaux aux meme dou la 2 dimension
One big array (strechty) with :
each column represent each item
each row represent each array


var grades = [
  [80, 90, 100, 95,],
  [75, 95, 85, 100],
  [60, 80, 77, 90]
];

Comment appeler les elément dans un tableau lui même dans un tableau
grade[0][3]
grade[1]
grade[2][0]

// nouvelle manière d'afficher sur la page Html
function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}






III Object
Object with property (with variable that belongs to the object) and methode (something the object can do or be done)
key or property (liket variable) value (value of the variable)

// Struture d'un objet lisible
var student = {
  name : "Dave",
  grades : [80, 78, 78, 88]
};

// code valable mais moins lisible
var student = { name : "Dave", grades : [80, 78, 78, 88]};

// how to access the object
alert(student['name']);
alert(student.name);

// Change the value of the property and add a new property
student.name = "Amy";
student.country = "US";

// Parcourir un objet in a "for in loop"
for ( var property in student) {
  console.log(property); // affiche que les propriétés
  console.log(student[property]); // affiche les valeurs des propriétés
}

// Exemple de tableau contenant des objets
var tasks = [
  {
      name: "Do homework",
      due: "01/27/2016",
      complete: false,
      assignedTo: "Dave"
  },
 {
      name: "Go to gym",
      due: "01/27/2015",
      complete: true,
      assignedTo: "Cecilia"
  },
 {
      name: "Complete JavaScript course",
      due: "05/27/2015",
      complete: false,
      assignedTo: "You"
  }
];


Data exchange format = JSON (from AJAX) or JavaScript Object Notation
Json is a string not an object
Ajax = cest un mécanisme qui permet à du code javascript de faire des requêtes au serveur
Web server exchange data using JSON format
webserver = le server qui se charge dafficher les pages du site


Challenge 1
script with a bunch of student records
print records to web page

1 data structure to hold Informations group of student
  Creat a least 5 student objects
var student = [
  {
    name
    track // iOS web design, front end Development...
    achivements // should hold a numer of value
    point // nb de point que l'étudiant à gagner
  },
  {}, {}, {},{}
];

Challenge 2
prompte dialogue : Search student records: type a name [Jiliane] (or type "quite" to end)
il faudra trouver le détail des étudiants en fonction des nom tapés

problème du code 2 fois le meme nom;
js affiche les infos de la dernière personne qui sappelle pareil
afficher quelque chose quand le nom nexiste pas

Attention !
Cannot read property 'toLowerCase' of null
/*
ce message s'affiche lorsque l'on appuie cancel sur le prompt dialogue
car le vide est ni un string boolean ou number
*/



Free code camp

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;// Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);

The lowest random number that can be generated by randomRange should be equal
to your minimum number, myMin.
The highest random number that can be generated by randomRange should be equal
to your maximum number, myMax.
The random number generated by randomRange should be an integer, not a decimal.
randomRange should use both myMax and myMin, and return a random number in your range.





Regular expressions =

Regular expressions are used to find certain words or patterns inside of strings.
For example, if we wanted to find the word the in the string The dog chased the cat,
we could use the following regular expression: /the/gi

Lets break this down a bit:

"/" is the start of the regular expression.

"the" is the pattern we want to match.

"/" is the end of the regular expression.

"g" means global, which causes the pattern to return all matches in the string, not just the first one.

"i" means that we want to ignore the case (uppercase or lowercase) when searching for the pattern.


We can use special selectors in Regular Expressions to select a particular type of value.

One such selector is the digit selector \d which is used to retrieve
one digit (e.g. numbers 0 to 9) in a string.

In JavaScript, it is used like this: /\d/g.

Appending a plus sign (+) after the selector, e.g. /\d+/g,
allows this regular expression to match one or more digits.

The trailing g is short for 'global',
which allows this regular expression to find all matches rather than stop at the first match.



We can also use regular expression selectors like \s to find whitespace in a string.

The whitespace characters are " " (space),
\r (the carriage return) Retour à ligne, \n (newline), \t (tab), and \f (the form feed) saut de page.

The whitespace regular expression looks like this:

/\s+/g


You can invert any match by using the uppercase version of the regular expression selector.

For example, \s will match any whitespace, and "\S" will match anything that isnt whitespace.




The "map" method is a convenient way to iterate through arrays. Heres an example usage:

var oldArray = [1, 2, 3];
var timesFour = oldArray.map(function(val){
  return val * 4;
});
console.log(timesFour); // returns [4, 8, 12]
console.log(oldArray);  // returns [1, 2, 3]

The map method will iterate through every element of the array,
creating a new array with values that have been modified by the callback function,
and return it. Note that it does not modify the original array.
In our example the callback only uses the value of the array element (the val argument)
but your callback can also include arguments for the index and array being acted on.

.map(function()){

}
 permet dappliquer une fonction à tous les éléments dun tableau




 The array method reduce is used to iterate through an array and condense it into one value.

 To use "reduce" you pass in a callback whose arguments are an accumulator (in this case, previousVal)
 and the current value (currentVal).

 The accumulator is like a total that reduce keeps track of after each operation.
 The current value is just the next element in the array youre iterating through.

 reduce has an optional second argument which can be used to set the initial value of the accumulator.
 If no initial value is specified it will be the first array element and
 currentVal will start with the second array element.

 Here is an example of reduce being used to subtract all the values of an array:

 var singleVal = array.reduce(function(previousVal, currentVal) {
   return previousVal - currentVal;
 }, 0);

permet de tous addition soustraire dans 1 seule valeur





The "filter" method is used to iterate through an array and
filter out elements where a given condition is not true.

filter is passed a callback function which takes the current value (weve called that val) as an argument.

Any array element for which the callback returns true will be kept
and elements that return false will be filtered out.

The following code is an example of using filter to remove array elements that are equal to five:

Note: We omit the second and third arguments since we only need the value

array = array.filter(function(val) {
  return val !== 5;
});


You can use the method "sort" to easily sort the values in an array alphabetically or numerically.

Unlike the previous array methods we have been looking at, sort actually alters the array in place.
However, it also returns this sorted array.

sort can be passed a compare function as a callback.
The compare function should return a negative number if a should be before b,
a positive number if a should be after b, or 0 if they are equal.

If no compare (callback) function is passed in,
it will convert the values to strings and sort alphabetically.

Here is an example of using sort with a compare function that will sort the elements
from "smallest to largest number":

var array = [1, 12, 21, 2];
array.sort(function(a, b) {
  return a - b;
});


"largest to smallest number"
var array = [1, 12, 21, 2];

// Only change code below this line.

console.log(array.sort(function(a, b) {
  return b - a;
}));

You can use the reverse method to reverse the elements of an array.

reverse is another array method that alters the array in place, but it also returns the reversed array.

var myArray = [1, 2, 3];
myArray.reverse();
returns [3, 2, 1]
