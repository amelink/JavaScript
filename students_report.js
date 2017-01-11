// déclaration de variables
var message = "";
var student;
var demande;
var reponse;

// fonction pour afficher le résultat sur html
function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

/*
do while loop pour afficher les instructions sur la page HTML
for loop pour parcourir les éléments(objets) du tableau
*/
do {
  demande = prompt("Search student records: type a name [Jiliane] (or type 'quit' to end)").toLowerCase();
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    reponse = student.name.toLowerCase();
    if (demande === reponse ) {
      message += '<h2> Student: ' + student.name + '</h2>'; // student.name = students[i].name
      message += '<p> Track: ' + student.track + '</p>';
      message += '<p> Achievements: ' + student.achievements + '</p>';
      message += '<p> Point: ' + student.point + '</p>';
      break
    }
  }
} while ( demande !== 'quit');

// appel de la fonction pour afficher le résultat sur la page html
print(message);



// Correction


// déclaration de variables
var message = '';
var student;
var search;

// fonction pour afficher le résultat sur html
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

// fonction qui affiche les valeurs des étudiants
function getStudentReport (student) {
  var report =  '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  return report;
}
// function scope = variable crée dans la fonction



/*
lorsque ce message s'affiche "Cannot read property 'toLowerCase'  of null"
ce message s'affiche lorsque l'on appuie cancel sur le prompt dialogue
car le vide est ni un string boolean ou number
*/

// while loop prompt la requete  et  si search = null ou si search = quit la loop s'arrete
// for loop qui parcour le tableau et vérifie que la réponse utilisateur est dans le tableau
while (true) {
  search = prompt("Search student records: type a name [Jody] (or type 'quit' to end)");
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    if (student.name === search) {
      message = getStudentReport(student); // affiche les valeur de l'étudiant demandé
      print(message);
    }
  }
}





//Challenge suite

// déclaration de variables
var message = '';
var student;
var search;
var reponse;
var message2 = '';


// fonction pour afficher le résultat sur html
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message; //ça veut dire remplace le contenu de ma div par message
}

// fonction pour afficher les résultat non trouvés sur html
function print2(message) {
  var outputDiv2 = document.getElementById('output2');
  outputDiv2.innerHTML = message; //ça veut dire remplace le contenu de ma div par message
}

// fonction qui affiche les valeurs des étudiants
function getStudentReport (student) {
  var report =  '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  return report;
}
// function scope = variable crée dans la fonction


// while loop prompt la requete  et  si search = null ou si search = quit la loop s'arrete
// for loop qui parcour le tableau et vérifie que la réponse utilisateur est dans le tableau
while (true) {
  search = prompt("Search student records: type a name [Jody] (or type 'quit' to end)").toLowerCase();

  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    if (student.name.toLowerCase() === search) {
      message += getStudentReport(student); // affiche les valeur de l'étudiant demandé
      break
    }
  }
  if (student.name.toLowerCase() !== search) {
    message2 += "<h3> the student you ask for: " + search + " is not in our database </h3>"
  }
  print(message)
  print2(message2)
  setTimeout(promptAndProcess, 100); // dans 100 ms, va lancer l’execution de la fonction promptAndProcess
}

promptAndProcess(); // execute la fonction 1 et une seule fois


//print(message)
//print2(message2)
