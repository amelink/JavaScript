JavaScript is a powerful programming language that adds dynamic interactivity to millions of sites on the web.
Before we start programming lets see what JavaScript can do.

effect image ordinary things very immersive experience games
google map google doc
web servers (node js)
automate photoshop
desktop
complexe user and web applications

A quick overview of what Ill teach in this course including JavaScript syntax, programming concepts,
vocabulary and techniques, as well as a very important lesson about what JavaScript is NOT.
programming langages vocab grammar = each languag has his own syntax with concept

alert("hello from treehouse"); /*statement = sentence*/
document.write("<h1> Wlecome to Javascript Basics</h1>");
alert("Thanks for visiting.");
document.write();
document current page write pr écrire



Link a JavaScript file to a web page using the <script> tag and the src property:
<script src="scripts.js"></script> pr introduire le css dans html <style> code css </style>
le lien se met dans le header, mais peut aussi se mettre dans le body
pour exécuté le html avant le js

Insert JavaScript directly into a web page inside <script> tags:
<script>
alert("Hello there.");
</script>

Never link to a file and include JavaScript inside the same <script> tag.
Dont do this:
<script src="file.js"> jamais faire le lien et écrire du js, les 2 sont possible séparément
   alert("Hello there.");
</script>


js is Running or executing

Chrome Console Keyboard Shortcuts
Windows: Ctrl + Shift + J
Mac: Cmd + Option + J

Firefox Console Keyboard Shortcuts
Windows: Ctrl + Shift + K
Mac: Cmd + Option + K

Internet Explorer Console Keyboard Shortcuts
F12 key

Safari Console Keyboard Shortcuts
Cmd + Option + C

var score = 0 assigning a value to a variable

Petit memo technique : !==
Le ! est devant car on peut dire "non(!) egale (==)"
// Le point d'exclamation signifie not(non en francais)


// ‘345’ == 345 c’est VRAI, en revanche ‘345' === 345 c’est FAUX
parce que les types des variables sont différents
le 3eme égal vérifie que les types sont égaux
souvent utilser === ou !== (sauf pour null où tu utilise != ou ==)


I String


Ne jamais utilisé les keys words en variable
break case catch class const continue debugger
default delete do else export extends finally
for function if import in instanceof new return super switch
this throw try typeof var void while withyield

These are always reserved:
enum
The following are only reserved when they are found in strict mode code:
implements
interface
let
package
private
protected
public
static
The following are only reserved when they are found in module code:
await
Future reserved keywords in older standards
The following are reserved as future keywords by older ECMAScript specifications (ECMAScript 1 till 3).
abstract
boolean
byte
char
double
final
float
gotoSS
int
long
native
short
synchronized
throws
transient
volatile
Additionally, the literals null, true, and false cannot be used as identifiers in ECMAScript.

lettre Maj après la première lettre autorisé
_ - autorisé
monnaie $ autoriser
la première lettre peut etre une monnaie $ pas un chiffre ni signe
utilisé les mots pr facilité la compréhension du programme


var visitorName (empty box) = prompt("what is your name");
alert(visitorName) (mettre sur le nome visiteur sur une autre boite )


Concatenation:
var message = "Hello " + visistor;
document.writer(message)


JavaScript mozzila developper
methods : something you can do with the object


String Properties and Methods

.length returns the number of characters inside a string

var str = '9 letters';
alert( str.length );
// opens an alert dialog with the number 9
.toUpperCase() returns a copy of a string with all uppercase letters

var str = 'upper';
alert( str.toUpperCase() );
// opens an alert dialog with the string 'UPPER'
.toLowerCase() returns a copy of a string with all lowercase letters

var str = 'LOWER';
alert( str.toLowerCase() );
// opens an alert dialog with the string 'lower'



The Story Making Game
1. Create a variable and Capture input
2. Create a separate Variable for each piece of input
3. Add an alert to tell the visitor that they're finished
4. Combine the input with other string to create a message
5. Print the story to the browser window

Create a story-telling program:

1. Use the prompt() command several times to collect different types of words -- nouns, verbs, adjectives.
2. Store the result of each prompt() command in a different variable.
3. Combine the variables with other strings to create one or more non-sensical statements.
4. Print the resulting story to the browser using the document.write() command.




II Numbers


Integers
floating point number décimal
Scientific notation (9e-6 = 9*10^-6 = 0,000009)


le commande prompt transforme tout le response en string les numéros aussi
pour transforme les numéros (string) en numéros il faut :
parseInt('15') transforme en entier / paseFloat('3.14'); transforme en décimal

var HTMLBadges = prompt('how many HTML badges do you have?');
var CSSBadges = prompt('how many CSS badges do you have?')
var totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
alert('Wow! You have ' + totalBadges + ' badges! ');

parseInt()  integer (a whole number)
var str = '49 steps';
var num = parseInt(str);
// num now holds the number 49 reconnais les premier numéro quand c'est devan les lettre mais par après

parseFloat()
var str = '102.99%';
var num = parseFloat(str);
// num now holds the number 102.99 reconnais les premier numéro quand c'est devant les lettre mais par après
il reconnais également le .9  parseFloat(".56 the weather");


JavaScript includes a special "object" called the "Math Object" which lets you perform
advanced mathematical operations like creating random numbers and performing trigonometric functions.

The Math Object
Mozilla Developer Network page on the Math object
Math.round() on the MDN *

Math.floor() entier le plus bas
Math.ceil() entier le plus haut
Math.round() entier logique
Math.random() nombre au hasard en 0 et 1(exclu)

Math.floor(Math.random()*6) + 1(pour retourner un valeur entre 1 et 6); the code runs inside and out
var dieRoll = Math.floor(Math.random() * 6) + 1;
alert("Your rolled a " + dieRoll);

exercice
prompt() dialogue to collect user input
parseInt() function to convert the input to an integer
Math.random() method to create a random number

create a random numbers generator
collect from a user and print a random number
from 1 to the user provider number
2 Value


!== strict not equal to ne reconnais pas les nombre des string
('10' !== 10) vrai
!= not equal to  not operator

== equal to ("3"==3) vrai car transforme le string en numero
=== strict equality operator to ("3"===3)
===
"apple" < "bear" = true car 'a' se trouve avant 'b'






III. Boolean


Every condition is really just a true or false test. At the heart of this is a type of JavaScript value known as a Boolean value.
Learn what Boolean values are and how to create them in JavaScript.

if (true) {
  document.write("The condition is true");
} else {
  document.write("The condition is false");
}

var correctGuess = false
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber) {
  correctGuess = true;
}
if (correctGuess /*(=== true) pas besoin le reconnait par défaut*/ ) {
  document.write("<p>You guessed the number!</p>");
} else {
  document.write("<p>Sorry. the number was " + randomNumber);
}

var isAdmin = false;
var isStudent = false;

if ( isAdmin ) {
    alert('Welcome administrator');
} else if (isStudent) {
    alert('Welcome student');
} else {
    alert("Who are you?");
}

if () { verifie si la condition est vrai

} else if() { puis continue

} else if () { idem

} else { si les conditions ne fonctionnent pas cest le dernier else qui fonctionne

}

//
/**/

In any conditional statement with multiple clauses only 1 code block will ever run.

( 20 < age && age < 30); vérifie les 2 égalités séparement
(score === 0 && ships <= 0 && time === 0) && ou || peuvent sutiliser de manière illimité
(agree === 'yes'|| agree === 'y'); vérifie que lune des conditions est vrai






IV Function

A function lets you store a block of code that you can use over and over again
It it better to put the function on the top of the scripts

The basic structure of a function
function myFunction() {
  // do a bunch of stuff here
}


Calling a function
myFunction();


A function expression
var myFunction =  function () {
  // do stuff here
};


Returning a value from a function
function giveMeFive() {
  return 5;
}
// prints 5 to the console
console.log( giveMeFive() );

You can have more than one return statement in a function.
Yes, but only one ever runs.
Usually youll find multiple return statements within different branches of conditional statements.


function calculateArea( width, length ) {
  return width * length;
}

calculateArea( 5, 4 ); // 20
calculateArea( 30, 4 ); // 120


function max(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}
console.log(max(30,50));


Parametre dans une fonction est : a variable in which the function store information passed to it

Scope = is the context in which a variable can be accessed, such as within a function,
or within the global scope of the entire program

Global scope = when a variable is accessible anywhere inside a program in the body of the program and within function

Function  scope = il vaut mieux créer la variable dans la fonction
car une variable globale pourra etre réutilisé par toutes les fonctions
et changer le résultat de la variable
