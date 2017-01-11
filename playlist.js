// fonction pour afficher les titres sous formes de liste ordonnée
function printList( list ) {
  var listHTML = '<ol>';
  for (var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

function print(html) {
  document.write(html);
}

// ajouter des élément dans un tableau = array
var playList = [];
playList.push("I Did It My Way");// ajouter des valeurs à la fin
playList.push("Respect", "Imagine");
playList.unshift("born to Run");// ajouter des valeur au début
playList.unshift("Maybellene");
playList.unshift("Louie Louie");
printList(playList);




// How to create an order list in HTML
var playList = [
  "I Did It My Way",
  "Respect",
  "Imagine",
  "born to Run",
  "Louie Louie",
  "Maybellene"
];

// fonction pour afficher la list
function print(message) {
  document.write(message);
}

// fonction pour créer la liste ordonné
function printList(list) {
  listHTML = "<ol>";
  for (var i = 0; i < list.length; i += 1) {
    listHTML += "<li>" + list[i] + "</li>";
  };
  listHTML += "</ol>";
  print(listHTML)
}
printList(playList);





// tableau 2 dimensions
var playList = [
  ['I Did It My Way', 'Frank Sinatra'],
  ['Respect', 'Aretha Franklin'],
  ['Imagine', 'John Lenon'],
  ['Born to Run', 'Bruce Sprinsteen'],
  ['Louie Louie', 'The Kingsmen'],
  ['Maybellene', 'Chuck Berry']
];

// fonction pour afficher la list
function print(message) {
  document.write(message);
}

// fonction pour créer la liste ordonné
function printSongs( songs ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] +'</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playList);
