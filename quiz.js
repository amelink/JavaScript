var answer = prompt("What programming language is the name of a gem?");
if(answer.toUpperCase() === 'RUBY') {
  document.write("<p>That's right!</p>");
} else {
  document.write("<p>Sorry. That's wrong.</p>");
}

var answer = prompt('What is the best programming language?');
if (answer.toUpperCase() === 'JAVASCRIPT') {
  alert("You are correct");
} else {
  alert("Javascript is the best language!");
}

/*
5 questions
keep track of the number of questions
provide a message to let the user know how many questions are right
Rank the player 5 gold 3/4 silver 1 bronx 0 nothing
*/

// quiz begins, no answers correct
var correct = 0;

// ask questions
var answer1 = prompt("Name a programming language that's also a gem");
if (answer1.toUpperCase() === "RUBY") {
  correct += 1
}
var answer2 = prompt("Name a programming language that's also a snake");
if (answer2.toUpperCase() === "PYTHON") {
  correct += 1
}
var answer3 = prompt("What language do you use to style web pages?");
if (answer3.toUpperCase() === "CSS") {
  correct += 1
}
var answer4 = prompt("What language do you use to build the structure of web pages?");
if (answer4.toUpperCase() === "HTML") {
  correct += 1
}
var answer5 = prompt("What language do you use to add interactivity to a web page?");
if (answer5.toUpperCase() === "JAVASCRIPT") {
  correct += 1
}

// output results
document.write("<p>You got " + correct + " out of 5 question correct.</p>");

// output rank
if (correct === 5) {
  document.write("<p><strong>You earned a gold crown!</p></strong>");
} else if (correct >= 3) {
  document.write("<p><strong>You earned a silver crown!</p></strong>");
} else if (correct >= 1) {
  document.write("<p><strong>You earned a bronx crown!</p></strong>");
} else {
  document.write("<p><strong>You lose!</strong></p>");
}





/*
Create 3 questions
Use 2 dimensionals Array to hold the question and the answer
use a loop to set the question et vérifier les bonne réponses
prompt to ask question
*/

var currentQuestion
var userAnswer
var correctAnswer
var correctQuestions = [];
var wrongQuestions = [];
var questions = [
  ["What language do you use to style web pages?", "css"],
  ["What language do you use to build the structure of web pages?", "html"],
  ["What language do you use to add interactivity to a web page?", "Javascript"]
];

// function to print in html
function print(message) {
  document.write(message);
}

// For loop to show each question
for(var i = 0; i < questions.length; i += 1) {
  currentQuestion = questions[i][0];
  userAnswer      = prompt(currentQuestion).toLowerCase();
  correctAnswer   = questions[i][1];
// Seperate the wrong and correct answer
  if (userAnswer === correctAnswer) {
    correctQuestions.push(currentQuestion);
  } else {
    wrongQuestions.push(currentQuestion)
  }
}

// Create an order list of correct an wrong questions
var output = "";
output += "<h2> You've got these questions correct : </h2>" + "<ol>";
for(i = 0; i < correctQuestions.length; i += 1) {
   currentQuestion = correctQuestions[i];
   output += "<li>" + currentQuestion + "</li>";
}
output += "</ol>"

output += "<h2> You've got these questions wrong : </h2>" + "<ol>"
for(i = 0; i < wrongQuestions.length; i += 1) {
   currentQuestion = wrongQuestions[i];
   output += "<li>" + currentQuestion + "</li>";
}
output += "</ol>"

// Print the correct and wrong questions in HTML page
print(output);




// Solution treehouse

// Tableau contenant d'autres tableaux
var questions = [
  ["How many Stats are in the United States?", 50],
  ["How many continents are there?", 7],
  ["How many legs does an insect have", 6]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

// nouvelle manière d'afficher sur la page Html
function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

// function pour généraliser la boule for pour afficher les éléments d'un tableau sous forme de liste ordonnée
function buildList(arr) {
  var listHTML = "<ol>";
    for (var i = 0; i < arr.length; i += 1) {
      listHTML += "<li>" + arr[i] + "</li>"
    }
    listHTML += "</ol>";
    return listHTML;
}

// boucle for pour poser les questions et vérifier les réponses
for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

// Afficher les résultats sur la page HTML
html = "You got " + correctAnswers + " question(s) right.";
html += "<h2>You've got these questions correct : </h2>";
html += buildList(correct);
html += "<h2>You've got these questions wrong : </h2>";
html += buildList(wrong);
print(html);






// Quiz from work space section (Loops, Arrays and Objects)

// Tableau contenant des objets
var questions = [
  { question: 'How many states are in the United States?', answer: 50 },
  { question: 'How many continents are there?', answer: 7 },
  { question: 'How many legs does an insect have?', answer: 6 }
];

var correctAnswers = 0;
var question;
var answer;
var response;

// function to print in html
function print(message) {
  document.write(message);
}

// boucle for pour poser les questions et vérifier les réponses
for (var i = 0; i < questions.length; i += 1) {
  question = questions[i].question;
  answer = questions[i].answer;
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
  }
}

// Afficher les résultats sur la page HTML
html = "You got " + correctAnswers + " question(s) right."
print(html);
