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
