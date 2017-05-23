// vocabulary digit = chiffre, vector = array

ES6 string addition ECMAScript 6

It is easy to join two strings together like this string1 + string2.
Another way to get the desired result would be with string1.concat(string2)
ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.
+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!
If one of the arguments is a number your code must coerce it into being a string.

// Solution
function joinStrings(string1, string2) {
    return `${string1} ${string2}`
}

tous foncitonne ensemble
backquot = `` sert à préciser quil ya un mélange de type de variable (boolean, string, number)
${} sert a concatainer tous les type de variables





Exclamation marks series #1: Remove a exclamation mark from the end of string

Remove a exclamation mark from the end of string.
For a beginner kata, you can assume that the input data is always a string, no need to verify it.
//solution
function remove(s){
  if (s.charAt(s.length - 1) === '!') {
    var result = s.substr(0, s.length - 1);
    return result;
  }
  return s;
}

//autre solution
function remove(s){
  var result =  s.replace(/(.*)\!$/,'$1');
// * pour les répétitions consécutive ou prend en comptes tous les caractères $ veut dire la fin d'une chaine
  return result
}



Exclamation marks series #2: Remove all exclamation marks from the end of sentence

Remove all exclamation marks from the end of sentence.
function remove(s){
  var result =  s.replace(/(.*?)\!*$/,'$1');
// ? permet au code prioriser les autres "*" plutot que de laisser le premier tout manger
  return result
}



Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string.
For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
function remove(s){
  var result =  s.replace(/\!/g,'');
// g va effectuer tous les remplacements nécessaires
  result += '!';
  console.log(result);
  return result;
}



Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

Remove n exclamation marks in the sentence from left to right. n is positive integer.
// solution
function removefirst (str) {
  var result = str.replace(/\!/,'');
  return result
  console.log(result)
}

function remove(s,n){
var result = s;
  for ( var i = 0 ; i < n ; i++) {
    result = removefirst(result)
  }
  console.log({s, result});
  return result;
}

// autre solution
function remove(s,n){
var result = s;
  for ( var i = 0 ; i < n ; i++) {
    result = result.replace(/\!/,'') // \ permet de specifier qu'il ne s'agit pas de (! = différent) mais juste "!"
  }
  console.log({s, result});
  return result;
}



Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
//solution
function replace(s){
    var result = s.replace(/[aeiou]/gi,'!') // les crochets indiquent que seul un des caractères doit matcher
// entre crochet, on peut  spécifier des « ranges » par ex: [0-9] match avec les chiffres de 0 à 9 [a-Z] match l’alphabet, je crois
// i permet de reconnaitre les majuscules et les minuscules
    console.log({s,result})
    return result
}

// autre solution
function replaceVoyelle(str) {
  var result1 =
      str.replace(/a/gi,'!') // i permet de reconnaitre les majuscules et minuscule
      .replace(/e/gi,'!')
      .replace(/i/gi,'!')
      .replace(/o/gi,'!')
      .replace(/u/gi,'!');
  console.log(result1)
  return result1
}

function replace(s){
var result = replaceVoyelle(s);
   console.log(result)
  return result;
}

// autre solution
function replaceVoyelle(str) {
  var result1 = str.replace(/a|e|i|o|u/gi,'!'); // | baton droit permette de dire "ou"
  console.log(result1)
  return result1
}

function replace(s){
var result = replaceVoyelle(s);
   console.log(result)
  return result;
}



Fake Binary

Given a string of numbers, you should replace any number below 5 with '0' and any number 5 and above with '1'.
Return the resulting string.
// Solution
function fakeBin(x) {
     var result = x.replace(/[01234]/g,'0'),
     .replace(/[56789]/g,'1');
     return result;
}





Keep Hydrated!

Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time and you need to return the number of litres Nathan will drink, rounded to the smallest value.
//Solution
function litres(time) {
  return Math.floor(time/2);
}



Holiday VIII - Duty Free

The purpoe of this kata is to work out just how many bottles of duty free whiskey
you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle.
If your holiday cost £500,
the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down.

function dutyFree(normPrice, discount, hol){
  var calcul = hol / (discount / 100);
  var result = calcul / normPrice;
  return Math.floor(result);
}



Jennys secret message

Jenny has written a function that returns a greeting for a user.
However, she's in love with Johnny, and would like to greet him slightly different.
She added a special case to her function, but she made a mistake.
Can you help her?

//solution
function greet(name){
    var greeting = "Hello, " + name + "!";
    if(name === "Johnny") {
        return "Hello, my love!"
    };
    return greeting;
}



Volume of a Cuboid

Bob needs a fast way to calculate the volume of a cuboid with three values:
length, width and the height of the cuboid. Write a function to help Bob with this calculation.

// Solution
var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {
      var volume = length * width * height;
      return volume
  };

  return Kata;

})();



How many lightsabers do you own?

Inspired by the development team at Vooza,
write the function howManyLightsabersDoYouOwn that accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

function howManyLightsabersDoYouOwn(name) {
    result = 0;
    if (name === 'Zach') {
        result = 18;
        return result;
    }
    result = 0;
    return result;
}

// autre Solution
function howManyLightsabersDoYouOwn(name) {
    if (name == null) {
        return result = 0
    } else if (name === 'Zach') {
        result = 18;
        return result
    }
    result = 0;
    console.log({name,result})
    return result;
}



Basic Mathematical Operations

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
// solution
function basicOp(operation, value1, value2) {
    var result = "";
    if (operation === '+') {
        result = value1 + value2
    } else if (operation === '-') {
        result = value1 - value2
    } else if (operation === '/') {
        result = value1 / value2
    } else if (operation === '*') {
        result = value1 * value2
    }
    return result
}
// autre solution
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}



Convert a string to an array

Write a function to split a string and convert it into an array of words.
e.g.
string_to_array("Robin Singh") => ["Robin", "Singh"]
string_to_array("I love arrays they are my favorite") => ["I", "love", "arrays", "they", "are", "my", "favorite"]

// Solution
function stringToArray(string){
    var array = string.split(" "); // split(" ") sépare les eléments d'un string (le séparateur est espace ) et met dans une tableau
    return array
}



Fix the function
//exo
function addFive(num) {
  var total = num + 5
  return num
}

//Solution
function addFive(num) {
  var total = num + 5
  return total
}



For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre

If the winner is George Saint Pierre he will obviously say: - "I am not impressed by your performance."
If the winner is Conor McGregor he will most undoubtedly say: - "I'd like to take this chance to apologize.. To absolutely NOBODY!"
// Solution
var quote = function(fighter) {
    var winner = fighter.toLowerCase();
    if (winner === 'george saint pierre'){
        return "I am not impressed by your performance."
    } return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
};



Simple multiplication

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
// Solution
function simpleMultiplication(n){
    if (n%2 === 0) {
        return n * 8;
    } return n * 9;
}
simpleMultiplication(4)



BASIC: Making Six Toast.
//Solution
function sixToast(num) {
    if (num !== 6) {
        return Math.abs(num - 6)
    }
    return 0
}





When provided with a number between 0-9, return it in words.
Input :: 1 Output :: "One".
// Solution
function switchItUp(number){
    if (number === 0) {
        return "Zero";
    } else if (number === 1) {
        return "One";
    } else if (number === 2){
        return "Two";
    } else if (number === 3){
        return "Three";
    } else if (number === 4){
        return "Four";
    } else if (number === 5){
        return "Five";
    } else if (number === 6){
        return "Six";
    } else if (number === 7){
        return "Seven";
    } else if (number === 8){
        return "Eight";
    } else if (number === 9){
        return "Nine";
    }
}

// autre solution
function switchItUp(n) {
      var result = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n];
      // ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n] (= tableau[n])
      // var tableau = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"] tableau[n]
      console.log({n,result});
      return result ;
}





Calculate average

Write function avg which calaculates average of numbers in given list.
//solution
function find_average(array) {
  // your code here
  var sum = 0;
  for (i=0 ; i<array.length ; i++) {
    sum += array[i];
  }
  var average = sum / array.length;
  return average;
}





I love you, a little , a lot, passionately ... not at all

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
// solution brouillon
function howMuchILoveYou(nbPetals) {
    // your code
    var flower = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"
    ]
    var calculation = nbPetals % 6;
    if (calculation !== 0){
        var result = flower[calculation - 1];
    } else {
        var result = flower[calculation + 5];
    }
    return result;


// meilleure solution
function howMuchILoveYou(nbPetals) {
    // your code
    var flower = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"
    ]
    var calculation = nbPetals % 6;
    var result = flower[calculation];
    return result;
}

// autre solution
function howMuchILoveYou(nbPetals) {
    var flower = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
    ]
    return flower[(nbPetals - 1)%6]





Duck Duck Goose

The objective of 'Duck, duck, goose' is to walk in a circle, tapping on each players head until one is finally chosen.
Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based),
return the name of the chosen Player.
Example:
duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name

// Solution
function duckDuckGoose(players, goose) {
   return players[(goose-1)%players.length].name;
}




They say that only the name is long enough to attract attention.

Task

Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false.
Note: The result should be a boolean value, instead of a string.
The opposite means: All letters of the two strings are the same, but the case is opposite.
you can assume that the string only contains letters or it's a empty string'

function inverserLettre(letter) { // inverserLettre('a') -> 'A'
   if (letter === letter.toLowerCase()) {
      return letter.toUpperCase();
   } else {
      return letter.toLowerCase();
   }
}

function inverserString(str1) { // inverserString('abc') -> 'ABC'

   var str1Inverted = "";
   for (var i=0 ; i<str1.length ; i+=1) {
       var lettreActuelle = str1.charAt(i); // récupère la lettre à la position i
       var lettreActuelleInversée = inverserLettre(lettreActuelle);
      str1Inverted += lettreActuelleInversée;
   }
   return str1Inverted;
}


function isOpposite(s1,s2){
 if (s1 === s2) {
   return false;
   }
 return inverserString(s1) === s2;
}






Count of positives / sum of negatives

Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
If the input array is empty or null, return an empty array:

C#/Java: new int[] {} / new int[0];
C++: std::vector<int>();
JavaScript/CoffeeScript/PHP/Haskell: [];

//Solution
function countPositivesSumNegatives(input) {
    var count = 0;
    var sum = 0;
    var result = [];
    if (input === null || input.length === 0) { // Pour tester que le tableau est vide si sa taille c'est zéro, c'est qu'il est vide
        return [];
    }
    for (var i = 0 ; i < input.length ; i++) {
        if (input[i] < 0) {
            sum += input[i];
        } else if (input[i] > 0) {
        count += 1;
      }
    }
    result.push(count,sum)
    console.log({input,count,sum,result})
    return result;
}





Sum without highest and lowest number

Sum all the numbers of the array (in F# and Haskell you get a list)
except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge,
even if there are more than one with the same value!)
//solution
// fonction pour trouver le nombre le plus grand
function getMax (array) { // getMax([1,3,2]) === 3
    var iMax = 0; // index (et non pas valeur) représentant la valeur maximale trouvée pour l'instant
    for (var i = 0 ; i < array.length ; i++) {
        if (array[i] > array[iMax]) { // array[iMax] = array[0] lors de la premiere iteration
            iMax = i;
        }
    }
    return array[iMax];
}

// fonction pour trouver le nombre le plus petit
function getMin (array) { // getMin([1,3,2]) === 1
    var iMin = 0;
    for (var i = 0 ; i < array.length ; i++) {
        if (array[i] < array[iMin]) { // array[iMax] = array[0] lors de la premiere iteration
            iMin = i;
        }
    }
    return array[iMin];
}

// fonction pour additionner les nombres d'un tableau
function getSum (array) { // getSum([1,3,2]) === 6
    var number = 0;
    for (var i = 0 ; i < array.length ; i++) {
        number += array[i];
    }
    return number;
}

// fonction qui additionne les éléments moins le plus grand et plus petit nombre un seul fois
function sumArray(array) {
// on veut la somme moins le maximum et le minimum
     // Rajouter un ou plusieurs if qui testent les cas limites et retourne un résultat adapté
     if (
         array === null ||
         array.length === 0 ||
         array.length === 1
     ) {
         return 0;   // ok
     }
     var result = getSum(array) - getMin(array) - getMax(array);
     console.log({sum:getSum(array), min:getMin(array), max:getMax(array), array, result});
     return result ;
}





Find Maximum and Minimum Values of a List

Your task is to make two functions, max and min (maximum and minimum in PHP)
that take a(n) array/vector of integers list as input and outputs,
respectively, the largest and lowest number in that array/vector.
// Solution
var min = function(list){
    var iMin = 0;
    for (var i = 0; i < list.length; i += 1) {
        if (list[i] < list[iMin]) {
            iMin = i;
        }
    }
    return list[iMin];
}

var max = function(list){
    var iMax = 0
    for (var i = 0; i < list.length; i++) {
        if (list[i] > list[iMax]) {
            iMax = i;
        }
    }

// Autre Solution
var min = function(list){
    return Math.min(...list);
}

var max = function(list){
    return Math.max(...list);
}





Last

Find the last element of a list.
// Solution
function last(list) {
    var result;
    if (arguments.length > 1) { // vérifie que list correspond à une list d'arguments
        var transformation = Array.from(arguments);
        result = transformation[transformation.length -1];
        console.log("arguments");
    } else if (typeof list === "string") {
        result = list.substr(-1,1);
        console.log("string");
    } else if (list.constructor === Array) {
        result = list[list.length -1];
        console.log("array");
    } else if (typeof list === "number") {
        var string = list.toString();
        result = Number(string.substr(-1,1));
        console.log("Number");
    }
    console.log({list,result,arguments});
    return result;
}

// autre solution
function last(list){
  var last = arguments[arguments.length - 1]; // enlève le dernier argument d'une list d'arguments
  return last[last.length - 1] || last;
}
// last[last.length - 1] retire le dernier élément d'un type d'élément (array,string)





Reversing Words in a String

You need to write a function that reverses the words in a given string. If this is not clear enough, here are some examples:
reverse('Hello World') === 'World Hello'
reverse('Hi There.') === 'There. Hi'
// solution
function reverse(string){
    return string.split(" ").reverse().join(" ")
}
// split() sépare les élément d'un string pour les mettre dans un tableau
// join() remet les élément d'un tableau dans un string





Convert number to reversed array of digits = chiffre

function digitize(n) {
    var tostring = n.toString();
    var toarray = tostring.split("").reverse();
    var destination = [];
    for ( var i = 0 ; i < toarray.length ; i++) {
        destination.push(parseInt(toarray[i]));
    }
    console.log({n,tostring,toarray,destination})
    return destination;
 }





Remove First and Last Character

Its pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
You're given one parameter.
// Solution
function removeChar(str){
    var result = str.substring(1,str.length-1) // .substring(a,b) a et b sont execlus
    console.log({str,result})
    return result
};
// Autre solution
function removeChar(str){
    var result = str.slice(1,-1) // positif de gauche à droite / négatif de droite à gauche
    console.log({str,result})
    return result
};
