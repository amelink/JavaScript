A quoi sert le JavaScript ?

Permettre à des sites web de répondre aux actions des utilisateurs
Écrire des applications et des jeux (ex. blackjack)
Accéder à des informations sur internet (ex. trouver les mots "Tendance" sur Twitter par thème)
Organiser et présenter des données (ex. automatiser des feuilles de calcul, visualiser des données)

Quelle est la longueur de votre nom ?
"Amélie".length résultat 6
maths de base  on peut taper une opération et le résultat saffiche
Il y a certaines choses que vous ne pouvez pas faire dans la console.
Les ordinateurs ne peuvent parler que certains langages, comme celui que vous avez utilisé aujourd'hui : le JavaScript !

Si vous utilisez des mots qui n'existent pas dans le langage JavaScript, lordinateur va être perdu et renverra une erreur.



Maintenant, vous voyez deux lignes commençant par //.
Le signe // sert à commenter.
Un commentaire est une ligne de texte que JavaScript n'essaiera pas d'analyser en tant que code.
Il sert simplement à vous guider dans la lecture du code.
// Ceci est un commentaire que l'ordinateur va ignorer.
// C'est seulement pour vos yeux !


confirm('Bonjour !') le JavaScript est intéractif et répond true

confirm("Je me sens trop bien !");
confirm("Je suis prêt à partir.");
confirm("Etes vous sur de vouloir quitter");
Ces boîtes peuvent être utilisées sur les sites internet
pour confirmer des choses auprès de lutilisateur.
Vous en avez probablement vu apparaître
lorsque vous essayiez de supprimer des choses importantes ou
quitter un site internet en laissant des changements non sauvegardés.



Qu'est ce que la programmation ?
Programmer, c'est comme écrire une liste d'instructions à l'ordinateur
pour qu'il fasse des choses cool avec vos commandes.

Les programmes ne peuvent pas faire le café, mais ils peuvent faire des maths,
conserver des informations sur votre compte, ou envoyer un message à un ami.

Pour faire n'importe laquelle de ces actions,
les programmes ont besoin de données en entrée. Vous pouvez demander cette entrée grâce à la commande prompt.

Exemples :

prompt("Quel est votre nom ?");
prompt("Qu'est ce qu' Ubuntu ?");

2 boites de dialogue se sont ouvert avec les 2 question (de lespace que répondre) et Js a afficher la 2ème réponse
"je ne sais pas"


Les chaînes de caractères de type de données I (e.g. "Les chiens aboient !")
Les nombres type de données II (e.g. 4, 10)
Les booléens type de données III (e.g. false, 5 > 4)



Types de données I & II : nombres et chaînes de caractères
Les données existent sous différentes formes, différents types. Vous en avez déjà utilisé deux !

a. Les nombres sont des quantités, comme vous en avez lhabitude. Vous pouvez faire des maths avec eux.

b. Les chaînes de caractères peuvent être des lettres a-z, des espaces et même des nombres.
Les exemples suivants sont des chaînes de caractères : "Ryan", "4", et "Quel est ton nom ?".
Les chaînes de caractères sont beaucoup utilisées en tant quétiquettes, noms, et contenus dans votre programmes.

Pour travailler sur un nombre dans votre code, écrivez simplement un nombre sans guillemets : 42, 190.12334.

Pour travailler sur une chaîne de caractères, entourez-la de guillemets : "Quel est votre nom ?"




Type de données III : les booléens
Bon travail ! Maintenant, passons aux booléens. Un booléen est soit true (vrai), soit false (faux).

Par exemple, comparer deux nombres retourne une réponse true ou false :

23 > 10 est true
5 < 4 est false

"je code comme un champion".length > 10
JS di que cest vrai "true"



Utiliser console.log
Vous avez peut-être remarqué que l'interpréteur n'affiche pas tout ce qu'il fait.
Donc si nous voulons savoir ce qu'il pense, nous avons parfois besoin de lui demander de nous parler.

console.log() prendra tout ce qui est entre ses parenthèses et va lafficher dans la console sous votre code.

console.log(2 * 5) js affiche 10
console.log("salut") js affiche salut




Liste des opérateurs de comparaison:

> Plus grand que
< Plus petit que
<= Plus petit ou égal à
>= Plus grand ou égal à
=== égal à (est ce que cest egal pr lordinateur)
!== Différent de
= assignation



descision, descision
Maintenant voyons comment nous pouvons utiliser les comparaisons pour poser des questions fermées.

Imaginons que nous voulions écrire un programme qui demande si notre nom compte plus de 7 lettres.
Si la réponse est oui, nous pouvons répondre par "Vous avez un long nom !". Nous pouvons le faire grâce à une déclaration if.

if( "monNom".length > 7) {
        console.log("Vous avez un long nom !");
}
Une déclaration if est construite grâce au mot-clé if,
une condition comme nous l'avons vu plus tôt, et une paire d'accolades { }.
Si la réponse à la condition est vraie, le code à lintérieur des accolades sera exécuté.

if ( "alexandre".length > 8) {
    console.log("le nom est long" );
}

js a afficher le nom est long





Les ordinateurs sont malins
Bien ! Nous avons utilisé une déclaration if pour faire quelque chose si la réponse à la condition était vraie,
ou true comme on dit en JavaScript.

En plus de faire quelque chose quand la condition est true,
nous pouvons faire quelque chose dautre si la condition est fausse, ou false.
Si votre nom compte moins de 7 lettres, nous pouvons vous répondre "Vous avez un nom court !".
Nous pouvons le faire en utilisant une déclaration if/else :

if( "monNom".length >= 7 ) {
    console.log("Vous avez un long nom !");
}
else {
    console.log("Vous avez un nom court !");
}
Comme avant, si (if) la condition est vraie (true), alors seul le code à lintérieur des premières accolades sera exécuté.
Sinon (else), la condition est fausse (false),
donc seul le code à l'intérieur de la seconde paire d'accolades (après le mot-clé else) sera exécuté.

Dans lexemple ci-dessus, la condition "monNom".length >= 7 vaut false puisque "monNom" a seulement 6 lettres.
Puisque la condition est false,
seul le code à lintérieur des accolades après le mot-clé else sera exécuté, et affichera "Vous avez un nom court !"

ex:
if ( "si le premier est plus court".length <= 15)
{
    console.log("Prenons le premier chemin !");
}
else
{
    console.log("Prenons plutôt le second chemin !");
}

js a afficher le second message après else prenons plutot le second chemin




Les ordinateurs ne sont pas bien malins
Bien joué ! Bon, les ordinateurs ont une compréhension très littérale.
La syntaxe doit être exactement à la bonne place pour que lordinateur comprenne le code.

Comme vous commencez en programmation, nous allons vous apprendre beaucoup de règles de syntaxe.
C'est en quelque sorte la grammaire des langages de programmation.
La grammaire d'abord, ensuite on passe à la poésie de la programmation !



// L'ordinateur ne se soucie pas des espaces entre les mots ou entre les crochets
// L'ordre des mots, en revanche, est important,
// ainsi que la correcte utilisation des caractères (){}[]"";

// Pour un peu plus d'aide, un programme appelé un 'linter' vérifie votre code
// et affiche un 'x' rouge à côté de la première ligne qui contient des erreurs





1. Confirm et prompt
Nous pouvons faire apparaître une boîte (un "pop-up") !
confirm("Je vais bien");
prompt("Allez-vous bien ?");

2. Les types de données
a. Les nombres (ex. 4.3, 134)
b. Les chaînes de caractères (ex. "Les chiens aboient", "Expert JavaScript")
c. Les booléens (ex. false, 5 > 4)

3. Les conditions
Si (if) une première condition est remplie, exécuter le premier bloc de code.
Si elle nest pas remplie, exécuter le code du bloc else. Regardez le code sur la droite pour un autre exemple.




Maths
On a déjà vu les maths de base.
Les symboles mathématiques que nous avons appris à l'école fonctionnent ici.
Même l'ordre dans lequel l'ordinateur les comprend est le même que celui que nous avons appris à l'école !

Code:
( ): contrôle lordre des opérations
* et /: multiplication et division
- et +: soustraction et addition

Exemples:
100/10 vaut 10
"Jane".length + 5 vaut 9
5*(3+1) vaut 20

if ("Jon".length * 2 / (2+1) === 2) {
    console.log("La réponse est logique !");
} else {
    console.log("Error Error Error");
}





Les maths et le modulo
Voyons un symbole intéressant appelé le modulo. Quand % est placé entre deux nombre,
l'ordinateur va diviser le premier nombre par le second et retourner le reste de cette division.

Donc si nous faisons 23 % 10, nous divisons 23 par 10, ce qui fait 2 et un reste de 3. Donc 23 % 10 vaut 3.

Plus d'exemples :
17 % 5 vaut 2 car 3X5 = 15, 17-15=2, donc il reste 2
13 % 7 vaut 6 car 1X7 = 7, 13-7=6, donc il reste 6

console.log(14 % 3) JS affiche 2 car 14-(3X4)=2
console.log(99 % 8) JS affiche 3 car 99-(8X12)=3
console.log(11 % 3) JS affiche 2 car 11-(3X3)=2



Modulo et if / else
Alors pourquoi apprendre le modulo ? Ils servent principalement à tester la division.

Imaginez 30 % 10. Qu'est-ce qui sera retourné ? Il n'y a aucun reste, donc 0.
Et 9 % 3, alors ? 0 aussi.

Nous pouvons utiliser les modulos dans des comparaisons, comme ceci :
10 % 2 === 0 vaut true
7 % 3 === 0 vaut false puisqu'il reste 1.





Sous-chaînes
Nous avons appris quelques moyens de manipuler les nombres. Et qu'en est-il de la manipulation de chaînes de caractères ?

Parfois, vous ne voudrez pas affichez la chaîne entière, mais seulement une partie de celle-ci.
Par exemple, vous pouvez configurer votre boîte de réception Gmail
pour nafficher que les 50 premiers caractères de chaque message, afin de les prévisualiser.
Cette prévisualisation est en fait une sous-chaîne ("substring" en anglais) de la chaîne de base (le message entier).

Code:
"un mot".substring(x, y), où x est l'endroit où vous commencez à couper et y l'endroit
où vous terminez de découper la chaîne originale.

La partie du code contenant les nombres est un peu bizarre. Pour sélectionner le "bo" de "bonjour", vous devrez écrire ceci :

"bonjour".substring(0,2);
Chaque caractère dans une chaîne est numéroté en partant de 0, comme ceci :

0 1 2 3 4 5 6 7
 | | | | | | | | |
 b o n j o u r
La lettre b est en position 0, la lettre o en position 1, etc...

Donc si vous commencez à la position 0, et coupez jusquà la position 2, il ne vous reste que le bo

Plus dexemples:

Les trois premières lettres de "Batman" "Batman".substring(0,3);
Les lettres 4 à 6 de "portable" "portable".substring(3,6);



après la doc dit "This method extracts the characters in a string between "start" and "end", not including "end" itself."
ça veut dire que si ta fin c'est 6, ça s'arrête au caractère précédent,
donc en l'occurrence le 5ème, même comme on commence à compter à 0, ça fait le 6ème
dans (3,6), c'est 3 inclus, 6 exclus, en gros

// Utilisez console.log( ) pour afficher les sous-chaînes
// Voici un exemple avec les lettres de 1 à 4 de "JavaScript" :
// console.log("JavaScript".substring(0,4));




Les variables
Nous avons appris à faire pas mal de choses, maintenant :
créer des chaînes de caractères, trouver leur longueur, trouver le caractère à la n-ième position,
faire des mathématiques de base. Pas mal pour une première journée de travail !

Pour faire du développement plus complexe,
nous allons avoir besoin d'un moyen de 'sauvegarder les données de notre code.
Nous pouvons le faire en définissant une variable avec un nom spécifique,
et dans lequel les lettres minuscules ou majuscules importent.
Une fois que vous avez créé (ou déclaré) une variable ayant un nom particulier,
vous pouvez appeler cette valeur en écrivant le nom de la variable.

Code:
var nomVariable = donnee;

Exemple:
a. var monNom = "Leng";
b. var monAge = 30;
c. var isOdd = true;

// Pour créer une variable,nous utilisons un seul signe égal
// Mais pour vérifier que deux valeurs sont égales, nous en utilisons 3




Plus d'entraînement sur les variables
Nous avons vu comment créer une variable.
Mais comment l'utiliser ? Il est utile de penser que chaque fois que vous entrez le nom de la variable,
vous demandez à l'ordinateur de remplacer le nom de la variable par la valeur de cette variable.

Par exemple
var monNom = "Steve Jobs";
monNom.substring(0,5)


Regardez la seconde ligne de code ci-dessus. Vous avez demandé à l'ordinateur de remplacer monNom par Steve Jobs, donc

monNom.substring(0,5) devient "Steve Jobs".substring(0,5) qui vaut "Steve".

Un autre exemple

var monAge = 120;
Que vaut monAge % 12 ? Regardez lindice pour vérifier votre réponse.

Donc la variable enregistre la valeur de la variable, que ce soit un nombre ou une chaîne de caractères.
Comme vous allez vite le voir, cela permet d'écrire des programmes beaucoup plus facilement !






Changement de valeur des variables
Jusqu'ici, nous avons vu
a. Comment créer une variable
b. Comment utiliser une variable

Voyons maintenant comment changer la valeur d'une variable.
La valeur d'une variable est facilement modifiable.
Faites simplement comme si vous étiez en train de créer une nouvelle variable en utilisant le même nom que la variable existante !

Exemple:
var monAge = "Trente";
Imaginons que mon anniversaire soit passé et que je veuille changer mon age.
monAge = "Trente et un";

Maintenant, la valeur de monAge est "Trente et un" !





// Sur la ligne 2, déclarez une variable monNom et donnez-lui votre nom pour valeur.
var monNom = "Amélie"; Js affiche Amélie
// Sur la ligne 4, utilisez console.log pour afficher la variable monNom.
console.log(monNom);
// Sur la ligne 7, changez la valeur de votre nom pour qu'elle ait seulement les 2
//premières lettres de votre nom.
monNom = monNom.substring(0,2); JS affiche Am
// Sur la ligne 9, utilisez console.log pour afficher la variable monNom.
console.log(monNom);




Conclusion : Partie 1

Faisons une rapide révision !
Types de données

chaînes de caractères (ex. "les chiens aboient !")
nombres (ex 4, 10)
booléens (ex. false, 5 > 4)
Variables
Nous enregistrons les valeurs des données dans des variables.
Nous pouvons retrouver les valeurs de ces variables en écrivant leur nom.

Manipuler des nombres et des chaînes de caractères

Comparaisons (ex. >, <=)
Modulo (%)
Longueurs des chaînes de caractères (ex. "Emilie".length;)
Sous-chaînes (ex. "Salut".substring(0, 1);)
console.log( )
Affiche dans la console tout ce qu'on lui envoie entre parenthèses.




Conclusion : Partie 2
Félicitations: vous êtes arrivé jusqu'ici ! Vous avez appris beaucoup de choses !
Encore un exercice de plus, et après on vous fait un câlin !

La dernière chose un peu compliquée que vous aviez apprise était les déclarations if / else.

Les déclarations if / else sont des déclarations conditionnelles.

Selon que les conditions sont respectées ou non, lordinateur fait des choses différentes.






// Vérifiez que l'utilisateur est prêt à jouer !
confirm("Je suis prêt à jouer !");
var age = prompt("Quel est votre âge");
if (age<13) {
    console.log("Vous êtes autorisés à jouer mais nous nous dégageons de toute responsabilité");
} else {
    console.log("C'est parti");
}

console.log("Vous êtes à un concert de Justin Bieber, et vous entendez la chanson 'Lace my shoes off, start racing!'");
console.log("Soudain, Justin Bieber s'arrête et dit : 'Qui veut faire la course avec moi ?' ");

var reponseUtilisateur = "Voulez-vous faire la course avec Justin Bieber sur scène ?"

var course = prompt(reponseUtilisateur);

if (course === "oui") {
    console.log("Vous et Bieber commencez à courir. C'est serré ! Vous gagnez d'un cheveu !");
} else {
    console.log("Oh non ! Bieber bouge sa tête et chante 'J'ai fixé le rythme, donc je peux courir sans me presser.'");
}

var retour = prompt("notez moi sur 10");

if (retour > 8) {
    console.log("Merci! On devrait faire la course au prochain concert !");
} else {
    console.log("Je vais continuer à m'entraîner à coder et à faire la course");
}







Introduction aux fonctions
La programmation, c'est comme cuire des gâteaux.
Sérieusement ! Imaginez que vous essayiez d'apprendre à votre amie Jacqueline comment faire cuire différents gâteaux.

Chaque gâteau prend différents ingrédients (ce sont les entrées).
Mais les instructions 'cuire' sont toujours les mêmes. Par exemple :
Pré-chauffer le four à 300 degrés
Mélanger tous les ingrédients dans un bol
Mettre au four pendant 30 minutes
Et la sortie sera un gâteau différent à chaque fois.

C'est ennuyeux de devoir répéter à chaque fois à Jacqueline les mêmes instructions 'cuire'.
Et si nous pouvions simplement dire 'cuire' pour que Jacqueline sache comment exécuter ces trois étapes ?
C'est exactement ce que fait une fonction !


Instructions :
La ligne 3 déclare la fonction et lui donne un nom.

Concentrez vous sur les lignes 4 et 5.
Le code à l'intérieur des accolades { } est le code que vous voudrez réutiliser (par exemple les instructions 'cuire').
La ligne 4 déclare une variable appelé val.

La ligne 5 affiche la valeur de cette variable.

Dans les lignes 8 à 11, nous expliquons ce que veut dire appeler une fonction.

A la ligne 12, remplacez le 6 par n'importe quel nombre et cliquez sur Vérifier vos réponses.
Faites-le plusieurs fois pour découvrir la beauté des fonctions !

Cf instructions ci-dessus
// Voilà ce à quoi ressemble une fonction :

var diviseParTrois = function(nombre) {
    var val = nombre / 3;
    console.log(val);
};

// A la ligne 12, nous appelons la fonction par son nom.
// Ici, elle est appelée 'divisepartrois'.
// Nous donnons à l'ordinateur que le nombre en entrée (6, par exemple)
// L'ordinateur exécute ensuite le code à l'intérieur de la fonction
diviseParTrois(13);







La syntaxe des fonctions
Une fonction prend une entrée, fait quelque chose avec, et produit une sortie.

Voici un exemple de fonction :

var disBonjour = function(nom) {
    console.log('Bonjour ' + nom);
};
Premièrement nous déclarons une fonction en utilisant var,
puis nous lui donnons un nom : disBonjour.

Le nom devrait toujours commencer par une lettre minuscule et
la convention est d'utiliser le lowerCamelCase où chaque mot (excepté le premier) commence par une lettre majuscule.

Nous utilisons ensuite le mot-clé function pour dire à l'ordinateur que nous créons une fonction.
Le code entre parenthèses est appelé un paramètre.
C'est un mot qui sert d'espace réservé, auquel nous donnons une certaine valeur quand nous appelons la fonction.
Cliquez sur "Bloqué ? Voir l'indice !" pour en savoir plus.

Ensuite nous avons écrit notre bloc de code réutilisable entre accolades { }.
Chaque ligne de code de ce bloc doit se terminer par ;.
Vous pouvez exécuter ce code en "appelant" la fonction, comme ceci :

disBonjour("Emilie");
Appeler cette fonction affichera Bonjour Emilie.

Instructions
A la ligne 11, appelez la fonction saluer avec le nom que vous voulez saluer grâce à la fonction.
Cliquez sur "Vérifier vos réponses" et regardez la fonction faire son travail ! Vous gagnez tellement de temps.
?

Hint
Quand nous voulons assembler deux chaînes de caractères, nous entrons un signe plus.
console.log("Salut" + "toi"); affichera Saluttoi. Ce n'est pas ce que nous voulons !
Si vous voulez un espace entre les mots, vous devez également ajouter l'espace !
console.log("Salut" + " " + "toi"); affichera Salut toi

Cet assemblage de chaînes de caractères est appelé concaténation.







Comment une fonction fonctionne-t-elle ?
Décomposons la façon dont l'ordinateur se comporte quand il voit le code d'une fonction.

var nomFonction = function() {
    // code code code
    // code code code
    // (plus de lignes de code)
};
Le mot-clé var déclare une variable appelée nomFonction.
Le mot-clé function dit à l'ordinateur que nomFonction est une fonction et pas autre chose.
Les paramètres rentrent entre les parenthèses. L'ordinateur les recherchera ensuite dans le bloc de code.
Le bloc de code est le code réutilisable qui est entre les accolades { }.

Chaque ligne de code à l'intérieur de { } doit se terminer par un point-virgule.
La fonction entière se termine par un point virgule.
Pour utiliser une fonction, nous appelons la fonction simplement en écrivant son nom,
et en mettant une valeur de paramètre entre les parenthèses qui le suivent.

L'ordinateur va exécuter le code réutilisable avec la valeur du paramètre remplacée dans le code.

function demandeNourriture(nourriture) {
    console.log("Je veux manger " + nourriture);
}

demandeNourriture("des pates")





Débuggons ! = debbugging (trouver ce qui ne tourne pas rond)
Pourquoi est-ce que le code est organisé ainsi aux lignes 2 à 5 ?

L'ordinateur peut comprendre le code sans espaces.
Mais ils permettent de comprendre et d'éditer le code beaucoup plus facilement.
Du coup, cela fait partie des bonnes pratiques à suivre.

Dois-je mettre un point-virgule à la fin de chaque ligne de code dans le bloc réutilisable ? Et à la fin de la fonction ?

Oui. A la fin de chaque ligne de code (à l'intérieur des accolades { }) et après la fonction (après les accolades { }),
mettez des point-virgules. Le point-virgule fait office de point dans une phrase.
Il permet à l'ordinateur de savoir qu'il y a des points d'arrêts dans le code.


var calculer = function (nombre) {
    var val = nombre * 10;
    console.log(val);
};

// Fonction mal écrite :

var saluer = function(nom) {
    console.log(nom)
};

saluer("Robert") = appeler un fonction

var coutOrange = function (prix) {
		console.log(prix * 5);
};
coutOrange("5")





Le mot-clé return
Bon travail ! Mais quand nous appelons une fonction, nous ne voulons pas toujours simplement afficher des choses.
Parfois, nous voulons simplement retourner (return, en anglais) une valeur.
Nous pouvons ensuite utiliser cette valeur (c'est à dire la valeur de sortie de la fonction) dans le reste du code.
Apprenons-en plus sur le mot-clé return, puis nous verrons
comment utiliser les fonctions avec une déclaration if / else dans l'exercice suivant !

Le mot-clé return donne simplement au développeur la valeur qui sort de la fonction.
Donc la fonction tourne, et lorsque le mot-clé return est utilisé,
la fonction va immédiatement sarrêter de tourner et retourner la valeur



// Un paramètre est un nombre, et nous voulons faire des maths avec ce nombre
var foisDeux = function(nombre) {
    return nombre * 2;
};

// Appelez foisDeux ici !
var nouveauNombre = foisDeux(8);
console.log(nouveauNombre);



var quart = function (nombre) {
    return nombre / 4;
}


if (quart(12) % 3 === 0 ) {
  console.log("La déclaration est vraie");
} else {
  console.log("La déclaration est fausse");
}




Les fonctions à deux paramètres
Jusqu'ici, les fonctions que nous avons vu ne prenaient qu'un seul paramètre.
Mais nous aurons souvent besoin d'écrire des fonctions avec plus d'un paramètre.
Par exemple, nous pouvons avoir la fonction suivante :

var aireBoite = function(longueur, largeur) {
    return longueur * largeur;
};
avec plus d'un paramètre, nous pouvons créer des fonctions plus utiles.

Pour appeler une fonction avec plus d'un paramètre,
entrez juste une valeur pour chaque paramètre entre parenthèses.
Par exemple, aireBoite(9, 3) retournerait l'aire d'une boîte de longueur 9 et de largeur 3.

var perimetreBoite = function(longueur, largeur) {
    return longueur + longueur + largeur + largeur;
}

perimetreBoite(3, 4);





Variables globales versus locales
Parlons maintenant d'un concept important : la portée. Le portée peut être locale ou globale.

Les variables définies à l'extérieur d'une fonction sont accessibles partout une fois qu'elles ont été déclarées. Elles sont appelées des variables globales, et leur portée est globale.

Par exemple :

var varGlobale = "salut";

var foo = function() {
    console.log(varGlobale);  // affiche "salut"
}
On peut accéder à la variable varGlobale de partout, y compris dans la fonction foo.

Les variables définies à l'intérieur d'une fonction sont des variables locales.
On ne peut y accéder à lextérieur de cette fonction

Par exemple :

var bar = function() {
    var varLocale = "salut, salut !";
}

console.log(varLocale);  // erreur
La variable varLocale n'existe qu'à l'intérieur de la fonction bar.
Essayer d'afficher varLocale à lextérieur de la fonction renvoie une erreur.

Regardez le code dans l'éditeur. Jusqu'ici,
vous utilisiez le mot-clé var sans vraiment comprendre pourquoi.
Le mot-clé var crée une nouvelle variable dans la zone courante, avec la portée courante.
Cela signifie que si var est utilisée en dehors d'une fonction, cette variable aura une portée globale.
Si var est utilisée à l'intérieur dune fonction, cette variable aura une portée locale.

Sur la ligne 4, nous n'avons pas utilisé le mot-clé var,
donc quand nous affichons mon_nombre dans la console à l'extérieur de la fonction,
cest 14 qui sera affiché.



var mon_nombre = 7; // ceci est une variable globale

var foisDeux = function(nombre) {
    mon_nombre = nombre * 2;
    console.log("A l'intérieur de la fonction, mon_nombre vaut : ");
    console.log(mon_nombre);
};

foisDeux(7);

console.log("A l'extérieur de la fonction, mon_nombre vaut : ");
console.log(mon_nombre);


Changez la ligne 4 pour utiliser le mot-clé var.
Remarquez que la valeur de mon_nombre dans la fonction est maintenant à 14 et à lextérieur de la fonction est 7.

Utiliser mon_nombre sans le mot-clé var réfère à la variable globale qui a déjà été déclarée en dehors de la fonction,
sur la ligne 1. Cependant, si vous utilisez le mot-clé var à l'intérieur de la fonction,
vous déclarerez une nouvelle variable locale qui n'existe qu'à l'intérieur de la fonction.


var mon_nombre = 7; // ceci est une variable globale

var foisDeux = function(nombre) {
    var mon_nombre = nombre * 2;
    console.log("A l'intérieur de la fonction, mon_nombre vaut : ");
    console.log(mon_nombre);
};

foisDeux(7);

console.log("A l'extérieur de la fonction, mon_nombre vaut : ");
console.log(mon_nombre);



var nomChaine = function(nom) {
    return "Bonjour, je suis" + " " + nom;

};

var result = nomChaine("Amelie");
console.log(result);






Fonctions & if / else
Une application particulièrement pratique du code réutilisable est celle des déclarations if/else.
Elles peuvent être très bavardes, et fatigantes à écrire plusieurs fois.

Nous allons écrire une fonction qui vérifie combien d'heures de sommeil vous avez par nuit.
Dans la fonction, il va y avoir une déclaration if/else.
Nous voulons que la fonction vérifie différents nombres d'heures pour voir si une personne cumule assez dheures de sommeil.



instructions

Écrivez une fonction appelée verifSommeil qui prend le paramètre nombreHeures.
Dans la fonctions, écrivez une déclaration if qui définit que si le nombre dheures de sommeil est plus grand ou égal à 8,
le return vaudra "Vous dormez beaucoup ! Même peut-être trop !";.
Sinon (else), si le nombre d'heures de sommeil est inférieur à 8, le return vaudra "Faites donc une p'tite sieste !;
Ensuite appelez la fonction avec différentes heures de sommeil.

Appelez la fonction avec 10 heures de sommeil, comme ceci : verifSommeil(10);
Appelez la fonction avec 5 heures de sommeil.
Appelez la fonction avec 8 heures de sommeil.


var verifSommeil = function(nombreHeures) {
    if (nombreHeures >= 8) {
    return "Vous dormez beaucoup ! Même peut-être trop !";
}   else {
    return "Faites donc une p'tite sieste !";
    }
}

verifSommeil(10)
verifSommeil(5)
verifSommeil(8)


Le jeu
Pierre, feuille, ciseaux est un jeu classique à deux joueurs.
Chaque joueur choisit soit pierre, soit feuille, soit ciseaux. Les issues possibles sont:

La pierre détruit les ciseaux.
Les ciseaux coupent la feuille.
La feuille couvre la pierre.
Notre code va diviser le jeu en 3 phases :
a. L'utilisateur fait un choix
b. L'ordinateur fait un choix
c. Une fonction de comparaison détermine le gagnant.



Choix ordi, partie 1
Terrible ! Maintenant, nous avons besoin que l'ordinateur fasse un choix.
Le jeu ne sera drôle que si l'ordinateur choisit au hasard.
Heureusement, JavaScript a quelque chose qui peut nous aider pour ça.

Si nous déclarons une variable et lui donnons pour valeur Math.random(),
cette variable aura pour valeur un nombre entre 0 et 1.



Choix ordi, partie 2
Nous avons choixOrdi mais il vaut maintenant une valeur aléatoire entre 0 et 1.
Nous devons trouver un moyen de traduire ce nombre aléatoire en un choix aléatoire entre pierre,
feuille, ou ciseaux. Comment faire ?!

Si choixOrdi est entre 0 et 0.33, redéfinir choixOrdi comme étant égal à "pierre".
Si choixOrdi est entre 0.34 et 0.66, redéfinir choixOrdi comme étant égal à "feuille".
Si choixOrdi est entre 0.67 et 1, redéfinir choixOrdi comme étant égal à "ciseaux".
Mais il y a trois possibilités ! Les if / else ne permettent de prendre en compte que deux possibilités.
Que faire ? Nous devons utiliser if / else if / else.
Regardez l'indice pour la totalité de la syntaxe. Vous allez rire tellement c'est simple.

Instructions
Sous votre code existant, écrivez la déclaration if / else if / else.
Sous les blocs respectifs, changez la valeur de choixOrdi en fonction des règles énoncées plus haut.
Rappelez-vous, vous NE devez PAS utiliser var pour changer la valeur dune variable qui existe déjà.


mon code
var choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?")
var choixOrdi = Math.random();
console.log(choixOrdi)

if (choixOrdi <= 0.33) {
    console.log("pierre");
} else if (choixOrdi >= 0,67) {
    console.log("ciseaux");
} else {
    console.log("feuille");
}


pc code
var choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");
var choixOrdi = Math.random();
if (choixOrdi < 0.34) {
	choixOrdi = "pierre";
} else if(choixOrdi <= 0.67) {
	choixOrdi = "feuille";
} else {
	choixOrdi = "ciseaux";
} console.log("Ordinateur : " + choixOrdi);




Les deux choix sont les mêmes !
Et là, on va samuser ! Nous devons créer une fonction.
Elle prendra deux paramètres (les deux choix) puis retournera le choix gagnant.

En programmant un jeu comme celui-ci, vous devez d'abord définir toutes les issues possibles.
L'une d'elles est que l'utilisateur et lordinateur aient fait le même choix.


var comparer = function(choix1, choix2) {
    if (choix1 === choix2) {
        return "Egalité !";
    }
}


Instructions
Nous avons gardé le code de la section précédente, mais c'est un commentaire. Laissez-le là pour l'instant.
Sous le commentaire, déclarez une fonction appelée comparer.
Elle prend deux paramètres, choix1 et choix2.
Dans la fonction, écrire une déclaration if. if choix1 === choix2, alors return "Egalité !"



Si choix1 est pierre...
Vous vous en sortez bien ! Maintenant, nous devons considérer les autres scénarios.
Divisons un peu le problème. Et si choix1 était "pierre" ? Si choix1 vaut "pierre",

a. si choix2 === "ciseaux", alors "pierre" gagne.
b. si choix2 === "feuille", alors "feuille" gagne.

Comment structurer ceci ? C'est un peu différent de ce que nous avons vu jusqu'ici.
Nous allons dabord avoir une déclaration if. Puis le code dans la déclaration if sera... une autre déclaration if !

Instructions
Codons le cadre de notre code précédent :

Dans la fonction comparer(), sous le code existant, écrivez un cas else if où la condition est choix1 === "pierre".
Dans ce cas else if, écrivez une déclaration if / else.
Si (if) choix2 === "ciseaux", retournez (return) "pierre gagne". Sinon (else), retourner "feuille gagne".

var comparer = function(choix1, choix2) {
    if (choix1 === choix2) {
        return "Egalité !";
    } else if (choix1 === "pierre") {
        if (choix2 === "ciseaux") {
        return "pierre gagne !";
        } else {
        return "feuille gagne !";
        }
    }
}



var comparer = function(choix1, choix2) {
    if (choix1 === choix2) {
        return "Egalité !";
    } else if (choix1 === "pierre") {
        if (choix2 === "ciseaux") {
            return "pierre gagne !";
        } else {
            return "feuille gagne !";
        }
    } else if (choix1 === "feuille") {
        if (choix2 === "pierre") {
            return "feuille gagne";
        } else {
            return "ciseaux gagnent";
        }
    }
}


var comparer = function(choix1, choix2) {
    if (choix1 === choix2) {
        return "Egalité !";
    } else if (choix1 === "pierre") {
        if (choix2 === "ciseaux") {
            return "pierre gagne !";
        } else {
            return "feuille gagne !";
        }
    } else if (choix1 === "feuille") {
        if (choix2 === "pierre") {
            return "feuille gagne";
        } else {
            return "ciseaux gagnent";
        }
    } else if (choix1 === "ciseaux") {
        if (choix2 === "pierre") {
            return "pierre gagne";
        } else {
            return "ciseaux gagne";
        }
    }
}





Jeu pierre, feuille, ciseaux complet :

var choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");
var choixOrdi = Math.random();
if (choixOrdi < 0.34) {
	choixOrdi = "pierre";
} else if(choixOrdi <= 0.67) {
	choixOrdi = "feuille";
} else {
	choixOrdi = "ciseaux";
} console.log("Ordinateur : " + choixOrdi);

var comparer = function(choix1, choix2) {
    if (choix1 === choix2) {
        return "Egalité !";
    } else if (choix1 === "pierre") {
        if (choix2 === "ciseaux") {
            return "pierre gagne !";
        } else {
            return "feuille gagne !";
        }
    } else if (choix1 === "feuille") {
        if (choix2 === "pierre") {
            return "feuille gagne";
        } else {
            return "ciseaux gagnent";
        }
    } else if (choix1 === "ciseaux") {
        if (choix2 === "pierre") {
            return "pierre gagne";
        } else {
            return "ciseaux gagne";
        }
    }
}

comparer(choixUtilisateur, choixOrdi)




Proposition dexercices

Prochaines étapes
Félicitations pour la création de votre super jeu ! Mais maintenant, passons à la meilleure partie.
Vous avez les compétences pour créer un jeu de votre propre invention ! Quelques idées ici :

Et si l'utilisateur faisait un choix incorrect, comme 'chien ?
Comment pouvons-nous améliorer la fonction pour améliorer ceci ?

Et si les joueurs pouvaient aussi choisir une corde, dans ce jeu ? (et pourquoi pas lézard et spock ?!)

Dans cette version, si deux joueurs font le même choix, le jeu retourne une inégalité ?
Et si le jeu ne se terminait pas là, mais demandait plutôt un autre choix à chacun des deux joueurs ?




Pourquoi utiliser les boucles for ?
Nous apprenons à programmer pour ne pas faire un travail ennuyeux et répétitif.
C'est l'ordinateur qui devrait faire ça.

Le premier exercice est un exemple de la raison exacte pour laquelle vous voulez apprendre les boucles for.



Ma première boucle for
Plutôt que décrire cinq fois des console.log à la main,
nous pouvons utiliser une boucle for pour le faire.
Le but de cet exercice est simplement de vous montrer à quoi une boucle for ressemble,
et de vous démontrer combien elle est utile. Les exercices suivants vont :

a. vous guider dans la découverte de la syntaxe, pas à pas.
b. vous expliquer comment l'ordinateur pense pendant qu'il exécute une boucle for.

Nous nous concentrons dabord sur lutilisation des boucles for simplement
pour compter des nombres pour ne pas compliquer les choses.
Mais dici à la section 3, nous allons vous montrer comment faire des choses plus sexy !


for (var compteur = 1; compteur  < 6; compteur++) {
	console.log(compteur);
}

compteur++ = "compteur = compteur +1"

La boucle for dans le code affichera les nombres 1 à 5
en utilisant beaucoup moins de code que vous ne l'aviez fait dans l'exercice précédent.
Changez le 6 en 11 et cliquez sur Vérifier vos réponses.
Vous verrez lordinateur afficher les nombres de 1 à 10 !



for (var i = 1; i < 11; i = i + 1) {
    /* votre code ici */;
}

Chaque boucle for utilise une variable comme compteur.
Ici, notre variable est appelée i (mais elle peut avoir nimporte quel nom).
La variable a plusieurs rôles.
Cette première partie de boucle for dit à lordinateur de commencer avec une valeur de 1 pour i.
Elle le fait en déclarant la variable appelée i et en lui donnant 1 pour valeur.

Quand la boucle for exécute le code dans son bloc ( la partie entre les { } )
elle commence en partant avec i = 1

Cette boucle for commence à 1 et se termine à 10.
Changez la boucle for pour quelle commence à 5 !

pc
for (var i = 1; i < 11; i = i + 1) {
	console.log(i);
}

Solution
for (var i = 5; i < 11; i = i + 1) {
	console.log(i);
}


Terminer la boucle for
Nous savons comment contrôler le début de la boucle 'for'. Comment contrôler quand elle va se terminer ?
La seconde partie de la boucle 'for' détermine cela.

Syntax

    for (var i = 1; i < 11; i = i + 1) {
        code code code;
    }

Ici, cette boucle 'for' va jusqu'à ce que 'i = 10' (i.e. tant que 'i < 11').
Donc quand 'i = 2', ou 'i = 9', la boucle 'for' tournera.
Mais une fois que 'i' atteindra 11, la boucle s'arrêtera.


PC
for (var i = 1; i < 11; i = i + 1) {
	console.log(i);
}

Nous savons que cette boucle for compte de 1 à 10.
Changez cette boucle for pour qu'elle commence à 4.
Changez cette boucle for pour qu'elle compte jusqu'à 23 inclus (c'est à dire que nous NE voulons PAS afficher 24 !)
Exécutez la boucle for et regardez-la compter de 4 à 23 !

Solution
for (var i = 4; i < 24; i = i + 1) {
	console.log(i);
}




Contrôler les boucles for
Nous pouvons maintenant contrôler là où la boucle for commence et se termine.
Et comment contrôler ce qui se passe entre les deux ?

Les exemples que nous avons regardé utilisaient i = i + 1.
Cela signifie que nous avons incrémenté (augmenté) notre variable i de 1 à chaque tour.

Règles à apprendre

a. Une manière plus efficace d'écrire le code d'incrémentation de 1 est décrire i++.
b. Nous décrémentons 1 en écrivant i--. (i-- = (i= i-1)
c. Nous pouvons incrémenter de nimporte quelle valeur en écrivant i += x
où x est le nombre par lequel nous voulons augmenter i.
Par exemple, i += 3 vous permet de compter de 3 en 3. i += 3 = (i=i+3)
d. Nous pouvons décrémenter de n'importe quelle valeur en écrivant i -= x
(cliquez sur l'exemple pour en savoir plus).
e. Soyez très attentifs à votre syntaxe : si vous écrivez une boucle qui ne se termine pas correctement,
vous obtiendrez une boucle infinie. Elle provoquerait un crash de votre navigateur !

boucle infinie :
for (var i = 4; i < 24; i = i - 1) {
	console.log(i);
}





for (var i = 2 ; i < 13; i++) {
	console.log(i);
}

Comment ça marche ?
Nous avons étudié les trois parties de la syntaxe d'une boucle 'for'.
Mais comment ça marche exactement ?
Imaginons étape par étape ce que va effectuer l'ordinateur pour bien réaliser une boucle 'for'.

Il commence avec 'i = 2'
Il se demande ensuite : Est-ce que 'i' est toujours inférieur à 13 ?
Comme ' i = 2 ', c'est vrai et nous continuons.
Nous n'incrémentons pas maintenant.
A la place, si la condition est vérifiée, nous exécutons le code à l'intérieur de la boucle.
Ici, le code affiche la valeur de 'i'. C'est toujours 2, donc 2 s'affichera.
Une fois que le code est terminé, la boucle 'for' va s'incrémenter ou se décrémenter.
Ici, nous ajoutons 1.
Maintenant ' i = 3'. Nous vérifions que c'est toujours inférieur à 13. Si c'est vrai, nous exécutons le code.
Le code tourne, et puis nous incrémentons.
On répète ces étapes tant que la condition ' i < 13' nest pas vraie.

Syntax

    for (var i = 1; i < 11; i = i + 1) {
        code code code;
    }

lordinateur va dabord prendre compte i = 1
puis vérifier que 1 < 11
puis il va dabord exécuter le code
puis il va incrémenter (ou décrémenter) de 1
puis il repart de la même manière avec la valeur obtenue






Découvrez les tableaux

Les variables peuvent contenir des nombres ou des chaînes de caractères.
Mais jusquici, nous avons seulement pu stocker UN nombre ou UNE chaîne de caractères.
Heureusement que nous avons les tableaux. Les tableaux :

a. stockent des listes de données
b. peuvent stocker différents types de données en même temps
c. sont ordonnés, donc la position de chaque donnée est fixe dans le tableau.

Exemple:

var noms = ["Mao","Gandhi","Mandela"];

var tailles = [4, 6, 3, 2, 1, 9];

var mixed = [34, "bonbon", "bleu", 11];

Syntaxe:
var tableauNom = [donnée, donnée, donnée];

A chaque fois que vous voyez une donnée entourée par '[ ]', c'est un tableau.


Déclarez votre propre tableau appelé 'junk'. Mettez 4 zones de données à l'intérieur (2 chaines de caractères, puis 2 nombres).

1 Déclarez-la en tant que var.
2 Mettez '[ ]' autour de votre donnée.
3 Séparer chaque partie de données par une virgule.
4 Terminez avec un point-virgule.
5 Utilisez 'console.log' pour afficher 'junk'.

var junk = ["pizza", "burger", 30, 29];
console.log(junk);


Les positions dans les tableaux
Cest bien que nous puissions mettre une liste de données dans un tableau.
Mais maintenant, nous avons besoin dapprendre à accéder à ces données.

La position des données dans le tableau est fixe.
Nous avons donc juste besoin de connaître le nom du tableau
(ici, c'est bricABrac), puis la position de la donnée que nous voulons, et c'est tout.

Petite complication: on commence à compter les indices (position) à partir de 0 et non 1.

Premier élément dans le tableau: bricABrac[0]
Troisième élément dans le tableau : bricABrac[2]
Les tableaux ont des indices de base 0, donc nous commençons à compter les positions à partir de 0.


Instructions
Affichez le 4e élément du tableau.

Commencez par comprendre comment désigner le quatrième élément du tableau
Ensuite utilisez console.log() pour lafficher !

var bricABrac = ["Eddie Murphy", 49, "trompette", 31];
console.log(bricABrac[3]);

Boucles et tableaux I
Excellent travail ! Vous connaissez maintenant les tableaux, et savez accéder à un élément du tableau. Mais s'il y avait 100 éléments dans le tableau ?

Un moyen utile d'accéder systématiquement à tous les éléments d'un tableau est d'utiliser une boucle for !

Comment ça marche ?

La ligne 3 déclare le tableau. Il a 4 éléments.
Nous commençons la boucle for sur la ligne 5.
On voit que i commence à la valeur 0.
La boucle for tourne tant que i < 4 (puisque villes.length vaut 4. Le tableau villes a 4 éléments;
regardez lindice pour en savoir plus)

Warning : lorsque la variable est un est un tableau alors .length vaut le nombre délement dans le tableau.

Nous incrémentons i de 1 à chaque fois que la boucle fait un tour.
Nous affichons villes[0], qui est "Melbourne".
Nous repartons ensuite dans la boucle. Sauf que maintenant, i = 1.
Nous affichons villes[1], qui est "Amman".
Cela continue jusquà ce que i ait pour valeur villes.length.


Instructions :
Changez les éléments dans le tableau villes. Vous pouvez y mettre autant déléments que vous le voulez.
Exécutez la boucle for et affichez-les tous !


var villes = ["Melbourne", "Amman", "Helsinki", "NYC", "Paris", "San Francisco", "Miami", "tokyo"];

for (var i = 0; i < villes.length; i++) {
    console.log("J'aimerais visiter " + villes[i]);
}

js affiche :

J'aimerais visiter Melbourne
J'aimerais visiter Amman
J'aimerais visiter Helsinki
J'aimerais visiter NYC
J'aimerais visiter Paris
J'aimerais visiter San Francisco
J'aimerais visiter Miami
J'aimerais visiter tokyo


Créez un tableau appelé noms contenant 5 noms.
Écrivez une boucle for qui affiche "Je connais quelqu'un appelé " suivi de noms[i].
Assurez-vous qu'il y ait un espace entre "appelé" et le nom !
Exécutez votre code et les 5 phrases devraient s'afficher.
Cliquez sur l'indice pour voir un exemple d'écriture d''une boucle for.

var noms = ["Mathieu", "Caroline", "David", "Alex", "Thien"];

for (var i = 0; i < noms.length; i++) {
    console.log("Je connais quelqu'un appelé " + noms[i]);
}


a. les conditions if et else
b. les fonctions
c. les boucles for
d. les booléens, tableaux, variables, etc.



Ce que vous allez construire
Dans ce projet, vous allez écrire un petit programme qui va permettre de vérifier
la présence de votre nom dans un bloc de texte.

Le programme va parcourir le texte en détail à la recherche de la première lettre de votre nom
puis ajoutera le nombre de caractères contenu dans votre prénom dans un tableau.
En étudiant le tableau obtenu, vous allez être capable de voir si votre nom est mentionné dans le texte.


/*jshint multistr:true */

texte = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var monNom = "Eric";
var trouve = [];

// Recherche de "E" dans le texte
for(var i = 0; i < texte.length; i++) {
	if (texte[i] == "E") {
		// Si nous le trouvons, ajoutons les caractères
                // au tableau jusqu'à la longueur de mon nom
		for(var j = i; j < (monNom.length + i); j++) {
			trouve.push(texte[j]);
		}
	}
}

if (trouve.length === 0) {
	console.log("Votre nom n'a pas été trouvé !");
} else {
	console.log(trouve);
}



Déclarez vos variables
Nous allons commencer par déclarer les 3 variables que nous allons utiliser : "texte, "monNom" et "trouve

La variable texte peut être potentiellement longue,
il sera possible d'utiliser un antislash ('\') à la fin d'une ligne
afin de faire continuer la chaîne de caractères sur la ligne suivante comme ceci :

var texte = "Bonjour, comment allez \
vous ? Mon nom est Emily.";

L'utilisation de cette méthode est pratique car elle vous permet d'éviter les très grandes lignes !

Vous pouvez ignorez la ligne  `/*jshint` pour le moment.
Son but principal est dindiquer à la console de ne pas tenir compte de notre utilisation des antislashs
pour traiter les longues lignes de texte.



Trouver la première lettre
Bon travail ! Maintenant, passons à l'instruction if.

Nous souhaitons placer le if à l'intérieur de notre boucle for afin que
le programme vérifie le if à chaque itération de la boucle.
Pour faire simple, la boucle for dit : " Salut le programme, vérifie chaque lettre située dans 'texte'.
"L'instruction if dit au programme de placer l'information dans le tableau si elle est importante !

Vous pouvez utiliser une chaîne de caractères comme un tableau de caractères :

var monTableau = ['bonjour', 'humanité'];
monTableau[0];    // contient 'bonjour'
Et cela marche aussi sur les chaînes de caractères :

var monNom = 'Eric';
monNom[0];    // contient 'E'



Instructions
Ajoutez votre if dans le corps de votre boucle for.
Cela permettra de tester si la lettre actuelle est identique à la première lettre de votre nom.
(sensible à la casse !)

Il n'y a pas besoin de placer quelque chose entre les {} de votre 'if'' pour le moment.

Hint
Souvenez vous, un if ressemble à ça :

if (conditon quelconque ) {
    // Faire quelque chose
}
Vous pouvez vérifier ce que contient la neme lettre de texte de cette façon :
// Partons du principe que votre nom commence par  'E'
if (texte[i] === 'E') {
    // Faire quelque chose
}





Enregistrer la chaîne trouvée
On y est presque ! Dernière boucle : ajoutez une autre boucle for,
mais cette fois à l'intérieur du corps de la structure if (entre les {} du 'if'').

Cette boucle va vérifier que chaque caractère de votre nom est recopié dans le tableau final.
La structure if dit : "Si nous trouvons la première lettre de votre nom, commencer la seconde boucle for !"
Cette seconde boucle dit : "Je vais ajouter des caractères au tableau jusqu'à avoir atteint le nombre de caractères de monNom." Les caractères seront recopiés dans trouve si la première lettre de monNom est trouvée dans texte.

Concernant la seconde boucle for il faut se souvenir que :

Dans un premier temps, il faut que l'itérateur de la seconde boucle commence
là ou est celui de la première boucle, afin qu'elle puisse reprendre la ou cette dernière sest arrêtée.
Si la première boucle commence par
for(var i = 0; // reste de la boucle
La seconde boucle sera de la forme
for(var j = i; // reste de la seconde boucle
Dans un second temps, réfléchissez bien à la condition d’arrêt de votre boucle.
Regardez l'indice si vous êtes bloqué !

Pour conclure dans le corps de la boucle, il faut que le programme utilise la méthode .push() du tableau trouve. De la même façon que les chaines de caractères ont des méthodes .length, les tableaux possèdent une méthode .push() permettant d'ajouter à la fin du tableau ce qui est situé entre parenthèses

nouveauTableau = [];
nouveauTableau.push('bonjour');
nouveauTableau[0];   // contient 'bonjour'

/*jshint multistr:true */
var texte = "Amelie, Amelie, Amelie, Amelie, Amelie"
var monNom = "Amelie"
var trouve = []

for (var i = 0; i < texte.length; i++) {
    if (texte[i] === "A") {
        for (j = i; j < i+monNom.length; j++) {


        }
    }
}




Et s'il ne trouve rien...
Parfait ! Vous avez maintenant le moteur de votre programme de recherche. Ce sera :

Boucler avec le tableau;
Comparer chaque lettre avec la première lettre de votre nom, et s'il voit cette lettre :
Il va mettre cette lettre et toutes les suivantes dans le tableau,
il arrêtera quand le nombre de lettres mises sera égal au nombre de lettres dans votre nom.


Instructions
Sous votre code existant (et en dehors de toutes vos boucles !),
ajoutez une condition 'if'/'else'. Si vous n'avez rien trouvé,
il s'affichera "Votre nom n'a pas été trouvé !" dans la console.

Autrement, enregistrez le tableau 'trouve' dans la console.

?
Hint
Sentez vous libre de revenir au premier exercice si vous avez besoin d'aide.
Votre 'console.log()'' devrait ressembler à ça :

if(/trouve.length is 0/) {
console.log(Votre nom na pas été trouvé !);
} else {
console.log(trouve);
}




Exercice presque complet à solutionner soit même
var texte = "blabla, Alice, Alex, blabla; Aurélie, Amelia, Amelie; blabla, Amelie";
var monNom = "Amelie";
var trouve = [];

for (var i = 0; i < texte.length; i++) {
    if (texte[i] === "A") {
        for (j = i; j < i+monNom.length; j++) {
            trouve.push(texte[j]);
        }
    }
}

if (trouve.length === 0) {
    console.log("Votre nom n'a pas été trouvé !");
} else {
    console.log(trouve);
}


var texte = "blabla, Amelie, Alice Amat";
var monNom = "Amelie";
var trouve = [];

for (var i = 0; i < texte.length; i++) {
    if (texte[i] === "A") {
    	var k = 0;

        for (j = i; j < i+monNom.length; j++) {
            if (texte[j] === monNom[k]) {
            	trouve.push(texte[j]);
            }
        k++;
        }
    }
}

if (trouve.length === 0) {
    console.log("Votre nom n'a pas été trouvé !");
} else {
    console.log(trouve);
}



Tant quon y est
Excellent travail sur les boules for ! Petit rappel, la syntaxe des boucles for est la suivante :

for (var i = debut; i < fin; i++) {
  // faire quelque chose
}
la variable d'itération i commence à la valeur "debut", et la boucle s'arrête quand elle atteint "fin".

Mais comment faire si vous ne savez pas à lavance quand vous allez vouloir arrêter de boucler ?
Par exemple, si vous vouliez continuer à choisir des cartes d'un paquet jusqu'à ce que vous atteignez un as.
Vous ne savez pas combien de cartes vous aurez besoin de choisir, donc une boucle for ne fonctionnera pas.

Dans des situations comme celle-ci, où vous ne savez pas quand vous arrêter de boucler,
vous pouvez utiliser une boucle while.

Instructions
Regardez la boucle while dans l'éditeur. Pouvez-vous deviner ce qu'elle fait ?
Cliquez sur "Vérifier vos réponses" quand vous pensez savoir ! (la réponse est dans l'indice)

Ne vous inquiétez pas si vous ne comprenez pas le Math.floor pour l'instant.
Nous allons bientôt lexpliquer !


Hint
Get live, fast support from Codecademy Advisors when you get stuck.
Learn more.
Le code dans l'éditeur lance une pièce jusqu'à ce quelle tombe sur face. Voici comment cela fonctionne :

Sur la ligne 1, nous créons une variable appelée cotePiece,
qui est un nombre au hasard qui vaut soit 0 (face), soit 1 (pile).
Ensuite, lignes 3 à 5, nous relançons la pièce tant que la pièce tombe sur face.
Si cotePiece vaut 0 (face), alors la condition dans la boucle while vaudra true,
et nous relancerons la pièce.
Si cotePiece vaut 1 (pile), alors la condition sera false et la boucle rompue.
Nous sortons donc de la boucle while et affichons Pile ! Cest fini.


var cotePiece = Math.floor(Math.random() * 2);

while(cotePiece === 0){
	console.log("Face ! Relancez...");
	var cotePiece = Math.floor(Math.random() * 2);
}
console.log("Pile ! C'est fini.");



La syntaxe des boucles while
La boucle while est idéale quand vous voulez utiliser une boucle sans savoir
combien de fois vous voulez l'exécuter.

Dans l'exemple que vous venez de voir, lordinateur lançait aléatoirement une pièce :
tant que (while) la pièce montrait le côté face (quand piece vaut 1),
il la relançait, et s'arrêtait une fois qu'elle montrait le côté pile (quand piece valait 0).
Puisque le lancer était aléatoire, nous ne savions pas à lavance de combien de tours nous aurions besoin.

La syntaxe ressemble à ceci :

while(condition) {
// Faire quelque chose !
}

Tant que la condition vaut true, la boucle continue de tourner. Dès qu'elle vaut false, elle s'arrête.
(Note utile: quand vous utilisez un nombre dans une condition,
  comme nous lavons fait plus tôt, JavaScript comprend true quand il lit 1 et false quand il lit 0)

Puisque vous maîtrisez déjà les boucles for, cette syntaxe devrait être extrêmement simple pour vous.




Les boucles infinies...
Bon travail !

Nous avons parlé des boucles infinies dans lexercice précédent.
Si vous donnez à une boucle while une condition true et que vous ne lui donnez pas moyen de passer à false,
la boucle continuera de tourner sans sarrêter et votre programme crashera. Pas bon du tout !

Pour faire en sorte que ça narrive pas,
vous devez toujours vous assurer que la condition entre les parenthèses de votre while puisse changer.

Dans léditeur sur la droite, vous verrez le même code que
dans lexercice précédent, mais nous avons retiré la variable qui change la condition de la boucle.


Ne lancez pas le code tel quil est -vous devriez alors réactualiser
la fenêtre pour arrêter la boucle infinie !
Changez plutôt la valeur de compris à quelque chose dautre que true
(par exemple false) sur la ligne 6 pour sortir de la boucle.

compris = true;

while(compris){
	console.log("J'apprends les boucles while !");
	// changez la valeur de 'compris' ici !
	compris = false;
}



La concision est la base de la programmation
Vous avez peut-être remarqué que quand nous donnons à une variable la valeur booléenne true,
nous vérifions cette variable directement - nous ne nous embêtons pas avec ===. Par exemple,

var bool = true;
while(bool){
    //Faire quelque chose
}
est équivalent à

var bool = true;
while(bool === true){
    //Faire quelque chose
}
mais le premier est plus rapide à écrire.
Habituez-vous à écrire exactement ce que vous avez besoin d'écrire, et pas plus !

S'il vous arrive d'utiliser des nombres, comme nous l'avons fait plus tôt, vous pourriez même écrire :

var monNombre = 1;
while(monNombre) {
    // Faire quelque chose !
}

... qu'on devient forgeron
OK, c'est le moment de créer votre propre boucle while tout seul !

Nous avons défini une fonction, boucle, dans laquelle vous pouvez écrire votre boucle while.

Pensez à définir la condition que vous vérifiez en dehors de la boucle -
si vous le faites dans la boucle, elle se redéfinira sans cesse et la boucle ne sarrêtera pas de tourner !

Instructions
Écrivez une boucle while qui affiche trois fois "Je tourne !" dans la console.
Vous pouvez le faire de la façon que vous voulez, mais PAS avec trois appels à console.log.

Hint
Get live, fast support from Codecademy Advisors when you get stuck.
Learn more.
Nous savons que nous devons boucler trois fois, donc nous pourrions utiliser une boucle for,
mais pour cette fois, nous allons utiliser un while.

Si nous créons une variable appelée compte et qu'on lui donne 0 pour valeur à l'extérieur de la boucle (ligne 2),
puis que nous faisons compte++ à chaque fois que nous appelons console.log() à lintérieur de la boucle,
nous allons pouvoir savoir combien de boucles nous avons fait.
Ensuite, poser la condition de sortie de boucle while comme était count < 3 devrait suffire !


var count = 0;

var boucle = function(count = 0) {
	while(count < 3){
		count++;
		console.log("Je tourne !");
	}
}

boucle();




Dans la fonction boucleSolo, écrivez une boucle while qui prend une condition initiale à true.
Votre boucle devrait afficher "Bouclé une fois !" dans la console, puis changer la condition initiale à false.

SOYEZ SÛR de changer votre boucle à false dans le corps de la boucle. Sans quoi votre boucle tournera sans fin !

Hint
Rappelez vous, les boucles while ressemblent à ça :

while(condition) {
    // Faire quelque chose !
}
Donc votre boucle devrait ressembler à quelque chose comme ça :

var maCondition = true;

while(maCondition) {
    console.log("Bouclé une fois !");
    maCondition = false;
}

var boucleSolo1 = true;

var boucleSolo = function(boucleSolo1 = true) {
    while(boucleSolo1) {
        console.log("Bouclé une fois !");
		    boucleSolo1 = false
    }
};

boucleSolo();

déclaration: boucleSolo = function(param = true), appel: boucleSolo()
déclaration: boucleSolo = function(param), appel: boucleSolo(true)







C'est la mi-temps !
Bon travail jusqu'ici ! Vous avez appris :

Ce que sont les boucles while
La syntaxe des boucles while
Comment éviter les boucles infinies
Ensuite, nous allons voir les boucles do/while, quand utiliser les boucles while et quand utiliser les for,
puis mélanger le tout dans une révision pour boucler la boucle.



La boucle `do` / `while`
Parfois vous voudrez être sûr que votre boucle tournera au moins une fois,
quoi qu'il arrive. Dans ce cas, vous pouvez créer une boucle while modifiée appelée boucle do/while.

Cette boucle dit en fait :
"Hey ! Fais ça une fois, et après, vérifie la condition pour savoir si on devrait continuer à boucler".
Après ça, elle agit simplement comme une boucle while normale :
la boucle continuera de tourner tant que la condition est évaluée à "true" - vrai.

conditionBoucle = false;

do {
	console.log("Je vais arrêter de boucler parce que ma condition est " + String(conditionBoucle) + "!");
} while (conditionBoucle);





var goAlHelico = function(){
do { console.log("je n'ai rien compris");

} while(2 === 3); // Ecrivez votre boucle do/while ici !
};

goAlHelico();


Révision

var amelie = 6;
while (amelie === 6 ) {
    console.log("Tu as gagné");
    amelie = 7;
}

do {
    console.log("I dit it !");
} while (3%3 > 4);

for (var unite = 1; unite < 86; unite += 5) {
    console.log(unite);
}




Ce que vous allez créer
Maintenant que vous savez utiliser les boucles while,
nous allons les combiner avec dautres instructions de contrôle de flux (comme if/else)
pour créer un mini jeu de combat de dragon.

Dans ce jeu, vous affronterez un dragon. Il vous faudra 4 coups pour abattre le dragon,
et si vous en ratez un, le dragon vous vaincra !


var combattre = true;
// Un peu de maths magiques pour calculer les chances
// de toucher le dragon. Nous allons y venir vite !
var vousTouchez = Math.floor(Math.random() * 2);
var dommagesPourCeTour = Math.floor(Math.random() * 5 + 1);
var dommagesTotaux = 0;

while (combattre) {
  if (vousTouchez) {
    console.log("Vous avez touché le dragon et fait " + dommagesPourCeTour + " dommages !");
    dommagesTotaux += dommagesPourCeTour;

    if (dommagesTotaux >= 4) {
      console.log("Vous l'avez fait ! Vous avez vaincu le dragon !");
      combattre = false;
    } else {
      vousTouchez = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("Le dragon vous crache du feu ! Vous avez une tête de toast !");
    combattre = false;
  }
}



Déclarez vos variables
Bien ! Commençons par déclarer les variables que nous allons utiliser. Vous allez avoir besoin :

d'une variable pour vérifier que vous continuez à combattre
d'une variable pour vérifier que vous touchez le dragon
d'une variable pour savoir combien de dégâts vous avez fait au dragon à ce tour
d'une variable pour savoir les dégâts totaux causés au dragon
Instructions
Déclarez et définissez les variables suivantes :

combattre à true.
vousTouchez à Math.floor(Math.random()* 2). Cela donne à vousTouchez une valeur aléatoire qui est soit 0
(que le JavaScript analyse comme false), soit 1 (que le JS analyse comme true)
dommagesPourCeTour à Math.floor(Math.random()*5 + 1).
Cela donne à dommagesPourCeTour une valeur aléatoire entre 1 et 5 (jusqu'à 5 inclus)
dommagesTotaux à 0.
Cliquez sur l'indice pour plus de détails sur le fonctionnement de Math.floor(Math.random()*5 + 1)

var combattre = true;
var vousTouchez = Math.floor(Math.random() * 2);
var dommagesPourCeTour = Math.floor(Math.random() *5 + 1);
var dommagesTotaux = 0;





La boucle `while`
Terrible ! Maintenant ajoutons notre boucle while.
Nous voulons boucler dans le jeu tant que nous essayons de tuer le dragon - c'est à dire tant que combattre vaut true.

En contrôlant des variables comme combattre qui valent true, vous n'avez pas besoin décrire quelque chose comme :

while(combattre === true)
Vous pouvez simplement écrire :

while(combattre)
Cela peut également vous aider d'avoir des noms de variables qui font un peu plus ressembler votre code à du Français (ou idéalement, si vous pouvez, à de l'Anglais). while(combattre) {/*Faire ceci*/} est facile à comprendre, puisque cela ressemble à une phrase classique, si on remplace 'while' par 'tant que'.

Instructions
Créez une boucle while qui ne boucle que quand combattre vaut true. Pour cet exercice, redéfinissez combattre à false dans la boucle. (nous voulons être sûrs de pouvoir sortir de la boucle - les boucles infinies, on va éviter !)

?
Hint
Votre code devrait ressembler à quelque chose comme :

var combattre = true;
while(combattre) {
    combattre = false;
}




La seconde déclaration 'if'
Bon travail ! On y est presque.

Dans la première branche de votre déclaration if (juste après le console.log(),
où nous félicitons le joueur pour avoir touché le dragon),
définissons une variable dommagesTotaux égale à dommagesTotaux + dommagesPourCeTour.
Il y a un raccourci pour le faire : l'opérateur += ! Quand vous écrivez :

dommagesTotaux += dommagesPourCeTour;
vous dites à JavaScript d'ajouter dommagesTotaux et dommagesPourCeTour, et dassigner cette nouvelle valeur à dommagesTotaux.

while(combattre) {
    if(vousTouchez === 1) {
        (var dommagesTotaux = dommagesTotaux + dommagesPourCeTour) = dommagesTotaux += dommagesPourCeTour
        console.log("Vous avez touché le dragon");
    } else {
        console.log("Le dragon vous a vaincu");
    }
    combattre = false;
}






La seconde déclaration 'if'
Bon travail ! On y est presque.

Dans la première branche de votre déclaration if (juste après le console.log(),
où nous félicitons le joueur pour avoir touché le dragon),
définissons une variable dommagesTotaux égale à dommagesTotaux + dommagesPourCeTour.
Il y a un raccourci pour le faire : lopérateur += ! Quand vous écrivez :

dommagesTotaux += dommagesPourCeTour;
vous dites à JavaScript d'ajouter dommagesTotaux et dommagesPourCeTour, et d'assigner cette nouvelle valeur à dommagesTotaux.

Instructions
Allez-y, donnez à dommagesTotaux la valeur de dommagesTotaux plus dommagePourCeTour.

Ensuite, à l'intérieur de votre déclaration if,
créez une seconde déclaration if qui contrôle si dommagesTotaux est plus grand ou égal à 4.
Si c'est le cas, vous devrez afficher dans la console un message pour dire que le joueur a tué le dragon,

et fixer la valeur de combattre à false (puisque le dragon est mort, le combat est fini).

Si dommagesTotaux n'est pas supérieur ou égal à 4,
vousTouchez devrait recevoir une nouvelle valeur aléatoire entre 1 et 0
(C'est aussi simple que quand vous aviez défini vousTouchez).

?
Hint
Votre code devrait ressembler à quelque chose comme ceci :

while (combattre) {
  if (vousTouchez) {
      console.log("Vous avez touché !");
      dommagesTotaux += dommagesPourCeTour;
          if (dommagesTotaux >= 4) {
              console.log("Vous gagnez !");
              combattre = false;
          } else {
              vousTouchez = Math.floor(Math.random() * 2);
          }
  } else {
      console.log("Vous perdez !");
      combattre = false;
  }
}


Fin exercice jeu dragon :

var combattre = true;
var vousTouchez = Math.floor(Math.random() * 2);
var dommagesPourCeTour = Math.floor(Math.random() *5 + 1);
var dommagesTotaux = 0;

while(combattre) {
    if(vousTouchez === 1) {
        console.log("Vous avez touché le dragon et fait " + dommagesPourCeTour + " dommages");
        dommagesTotaux += dommagesPourCeTour;
        if (dommagesTotaux >= 4) {
            console.log("Le joueur a tué le dragon");
            combattre = false
        }
    } else {
        console.log("Le dragon vous a vaincu");
    }
    combattre = false;
}




if / else
Vous avez déjà rencontré les if et les else, et maintenant ils contrôlent ce que font vos programmes.
Petit rappel sur la syntaxe :

if (/* Une condition */) {
    // Faire quelque chose
} else if (/* Une autre condition */) {
    // Faire quelque chose d'autre
} else {    // sinon
    // Faire une troisième chose
}
Instructions
Écrivez une déclaration if / else à l'intérieur de la fonction estPair.
Elle doit retourner (avec return) true si le nombre qu'elle reçoit est divisible par 2.
Sinon (else), elle doit retourner false.

Faites attention à bien utiliser return - pas besoin de console.log() ici !



var estPair = function(nombre) {
    if(nombre % 2 === 0) {
        return true;
    } else {
        return false;
    }
};





if / else if / else
Bien. Entraînons-nous également avec else if et rencontrons une nouvelle fonction sympa :isNaN.

Si vous appelez isNaN sur quelque chose,
la fonction vérifiera que cette chose nest pas un nombre (NaN = Not A Number). Donc :

isNaN('fraise'); // => true
isNaN(NaN); // => true
isNaN(undefined); // => true
isNaN(42);  // => false
Attention, si vous appelez isNaN sur une chaîne qui ressemble à un nombre,
comme '42', JavaScript essaiera de convertir automatiquement la chaîne '42'
en nombre 42 et retournera false (puisque 42 est un nombre).

Remarquez que vous ne pouvez pas simplement faire

isNaN(licornes);

sauf si vous avez déjà défini une variable licornes. En revanche, vous pouvez faire :

isNan("licones"); => true


isNaN veut dire "is not a number", donc la fonction renvoie true si le paramètre nest pas un nombre,
et false si le paramètre est un nombre
maintenant ce que la phrase dit cest que si tu lui donnes en paramètre une chaine de caractères,
avec un nombre dedans cest comme si tu lui passait un nombre directement
en gros isNaN("42") et isNaN(42) renvoie false tous les deux


Instructions
Ajoutez une branche else if à votre déclaration if / else existante.
Si le nombre envoyé à la fonction nest pas un nombre, au lieu de retourner true ou false,
la fonction doit retourner une chaîne de caractères qui informe
l'utilisateur que son entrée n'était pas un nombre (La chaîne peut contenir la phrase que vous voulez).

?
Hint
Assurez-vous de bien retourner (return) la chaîne. Ne laffichez pas avec console.log() !

Voici les grandes lignes de ce à quoi la syntaxe dune déclaration if / else if/ else devrait ressembler :

if (condition1) {
    return "quelque chose"
}
else if (condition2) {
    return "quelque chose d'autre"
}
else {
    return "un autre quelque chose d'autre"
}


var estPair = function(nombre) {
    if(isNaN(nombre)) {
        return "Il ne s'agit pas d'un nombre";
    } else if(nombre % 2 === 0) {
        return true;
    } else {
        return false;
    }
};







Aperçu : la déclaration switch
Comme vous pouvez l'imaginer, si vous voulez gérer beaucoup de choix dans un programme,
il peut être ennuyeux d'écrire else if dix fois. Cest pourquoi JavaScript propose les déclarations switch !

switch vous permet de prédéfinir plusieurs options (des cas, case en anglais),
puis de vérifier une expression pour voir si elle correspond à lun des cas.
S'il y a une correspondance, le programme effectuera l'action correspondante au cas rencontré.
S'il n'y a aucune correspondance, elle exécutera laction par défaut, default.



var dejeuner = prompt("Que veux-tu pour déjeuner ?","Entrez votre choix de déjeuner ici");

switch(dejeuner){
  case 'sandwich':
    console.log("D'accord ! C'est parti pour un sandwich.");
    break;
  case 'soupe':
    console.log("OK ! Ma préférée, aux tomates.");
    break;
  case 'salade':
    console.log("Pas mal. Pourquoi pas une salade césar ?");
    break;
  case 'tarte':
    console.log("Une tarte ce n'est pas un repas !");
    break;
  default:
    console.log("Heu... Je ne suis pas sûr de ce qu'est " + dejeuner + ". Pourquoi pas un sandwich, peut-être ?");
}





Commencer avec les switch
La déclaration switch ressemble à celle-ci :

switch (/*Une expression*/) {
  case 'option1':
    // Faire quelque chose
    break;
  case 'option2':
    // Faire quelque chose d'autre
    break;
  case 'option3':
    // Faire une troisième chose
    break;
  default:
    // Faire encore quelque chose d'autre
    break;
}
JavaScript essaiera de trouver une expression égale à celle entre les parenthèses du switch() pour chaque cas.
Elle exécutera le code sous chaque cas si elle en trouve un correspondant,
et celui sous default si aucune correspondance n'est trouvée.

Instructions
Notre déclaration switch a besoin d'un case pour 'jaune'.
Ajoutez-le et faites-lui afficher une phrase de votre choix dans la console
(elle doit être différente de la chaîne par défaut -default).

N'oubliez pas de finir votre 'case'' avec un break -
sinon, il continuera et exécutera aussi le code de default ! Or nous ne voulons pas le faire.


var couleur = prompt("Quelle est votre couleur primaire favorite ?","Écrivez votre couleur favorite ici");

switch(couleur) {
    case 'rouge':
        console.log("Le rouge est une belle couleur !");
        break;
    case 'bleu':
        console.log("C'est aussi ma couleur favorite !");
        break;
    case "jaune" :
        console.log("Comme le soleil");
        break;
    default:
    console.log("Je ne pense pas que ce soit une couleur primaire !");
}

Entraînement avec les switch
Maintenant que vous savez ajouter un case à un switch existant, entraînons-nous à ajouter un bloc default.

Instructions
Ajoutez le bloc default en bas de la déclaration switch,
puis exécutez le code plusieurs fois avec différentes données en entrée. switch : hyper pratique !

Hint
Votre code devrait ajouter un bloc default après le break de la ligne 12. Il peut faire ce que vous voulez ! Par exemple :

  default:
    console.log("Je ne connais pas ce bonbon !");

    var bonbon = prompt("Quel est votre bonbon préféré ?", "Entrez le nom de votre bonbon préféré ici.");

    switch(bonbon) {
        case 'réglisse':
            console.log("Berk !");
            break;
        case 'chewing-gum':
            console.log("Ça, j'aime bien !");
            break;
        case 'radis':
            console.log("... on avait dit 'bonbon' !");
            break;
        default:
            console.log("je ne connais pas ce bonbon");
    }





Plus d'entraînement avec les switch
Vous savez ce qu'on dit : c'est en forgeant qu'on devient forgeron !

Instructions
Nous vous avons donné le squelette dune déclaration switch. Complétez le case existant,
puis ajoutez au moins un nouveau case, et le comportement par default avec les console.log() que vous voulez.



var reponse = prompt("Quel heure est-il ?");

switch(reponse) {
    case '10h':
        console.log("Il est temps de prendre le petit déjeuné");
        break;
    case "13h" :
        console.log("C'est l'heure d'un bon petit repas");
        break;
    default :
        console.log("il est l'heure d'aller au lit");
    }




switch(condition) {
    case 'abc':
            // Chose à faire
    break;
    case 'def':
            // autre chose à faire
    break;
    case 'ghi':
            // Encore autre chose à faire
    break;
    default:
            // chose à faire par défaut
    break;





    À vous de jouer !
    Bon travail ! Maintenant, il est temps d'assembler l'instruction switch par vous-même.

    Instructions
    Créez votre propre déclaration switch dans l'éditeur. Elle peut faire ce que vous voulez !
    Assurez-vous d'inclure au moins trois case et un default.

    var nombre = 5

    switch(nombre) {
        case 4 :
            console.log("vous avez perdu!");
            break;
        case 5 :
            console.log("vous avez gagné !");
            break;
        case 20 :
            console.log("vous avez égalité");
            break;
        default :
            console.log("Recommencer");
            break;
    }

Mi-temps !
Bien joué ! Nous nous sommes concentrés sur les switch et nous avons appris beaucoup de choses. Jusquici, vous avez :

Révisé les if/else if/else
Révisé les for et while
Découvert les déclarations switch et appris à les utiliser plutôt que de multiples if/else
Compris la syntaxe des switch
Écrit votre propre switch !


Aperçu
Jusqu'ici, nous avons vu comment contrôler nos programmes en ayant une seule condition : si une variable est égale à une certaine valeur, par exemple. Mais si nous voulions contrôler plus d'une variable ?

Pour ce faire, nous allons avoir besoin d'opérateurs logiques. JavaScript en compte trois : et (&&), ou (||), et non (!).

En les utilisant, nous pouvons contrôler plusieurs variables à la fois ! Regardez le code dans l'éditeur.


var jaimeJavaScript = true;
var jaimeApprendre = true;

if(jaimeJavaScript && jaimeApprendre) {
  // si jaimeJavaScript ET jaimeApprendre:
  console.log("Super ! Continuons à nous instruire !");
} else if(!(jaimeJavaScript || jaimeApprendre)) {
  // si NON jaimeJavaScript OU jaimeApprendre:
  console.log("Voyons si on peut vous changer les idées.");
} else {
  console.log("Vous aimez l'un, mais pas l'autre ? On va s'arranger.");
}



Et
L'opérateur logique et s'écrit ainsi en JavaScript : &&.
Il renvoie true lorsque les deux expressions sont true; si elles ne le sont pas, il renvoie false.

true && true;    // => true
true && false;   // => false
false && true;   // => false
false && false;  // => false


Instructions
Créez deux variables, faim et nourritureIci, et donnez leur pour valeur true.
Dans la fonction manger, créez une déclaration if qui retourne (return) true
seulement si faim et nourritureIci sont toutes les deux true, et false sinon.
La fonction manger devra prendre deux paramètres - et faim et nourritureIci -
qui doivent tous les deux être des variables globales.


var faim = true;
var nourritureIci = true;


var manger = function() {
    if (faim === true && nourritureIci === true) {
        return true;
    } else {
        return false;
    }

};




Ou
L'opérateur logique ou s'écrit comme ceci en JavaScript :
|| il renvoie true quand au moins l'une des expressions est true. Si elles aucune ne l'est, il renvoie false.

true || true;     // => true
true || false;    // => true
false || true;    // => true
false || false;   // => false
L'opérateur ou s'écrit avec deux barres verticales ||.
Cette barre verticale est réalisée avec la combinaison de touches AltGr + 6 (|).

Instructions
Créez deux variables, 'fatigue' et 'ennui', et fixez l'une sur true et l'autre sur false.
Dans la fonction 'sieste', créez une instruction if qui redevient true si 'fatigue' ou 'ennui'
(ou les deux !) sont true, et false si ce nest pas le cas.


var fatigue = true
var ennui = false


var sieste = function() {
    if (fatigue === true || ennui === true) {
        return true
    } else {
        return false
    }
};



Non
L'opérateur logique non s'écrit ! en JavaScript. Il rend lexpression true false, et vice-versa.

not true = false !true; // => false
not false = true !false; // => true

Instructions
Déclarez une variable appelée 'programmation' et donnez lui pour valeur false.
Ensuite, écrivez une instruction if/else dans 'heureux' pour que 'heureux' retourne true si 'programmation' est false,
et false si ce nest pas le cas.


var programmation = false


var heureux = function() {
    if (programmation === !true) {
        return true;
    } else {
        return false;
    }

};




Révisions
Bien joué !

Dans cette leçon, vous avez :

révisé la syntaxe des contrôles de flux
appris lexistence des déclarations switch
appris à utiliser les opérateurs logiques et (&&), ou (||) et non (!)





Ce que vous allez créer
Nous vous avions dit que ce nétait que le début de notre empire des jeux vidéos !
Maintenant que vous en savez plus sur le JavaScript,
vous allez être capable de créer un jeu "Choisissez votre aventure" beaucoup plus riche.

Instructions
Jouez quelques parties du jeu de l'éditeur. Pas mal, hein ?
Avancez jusqu'à la section suivante quand vous serez prêt à commencer à créer votre propre version.



var troll = prompt("Vous vous baladez dans la forêt, tranquillement et sans embêter personne, quand tout à coup un troll sauvage apparaît ! Voulez-vous le COMBATTRE, le PAYER, ou COURIR ?").toUpperCase();

switch(troll) {
  case 'COMBATTRE':
    var fort = prompt("Quel courage ! Etes-vous fort (OUI ou NON) ?").toUpperCase();
    var malin = prompt("Etes-vous MALIN ?").toUpperCase();
    if(fort === 'OUI' || malin === 'OUI') {
      console.log("Vous n'avez besoin que d'une des deux caractéristiques ! Vous avez battu le troll; bravo !");
    } else {
      console.log("Vous n'êtes ni fort ni malin ? Eh bien, si vous étiez malin, vous n'auriez probablement pas essayé de combattre un troll. Vous perdez !");
    }
    break;
  case 'PAYER':
    var argent = prompt("D'accord, nous allons payer le troll. Avez-vous de l'argent ? (OUI ou NON) ?").toUpperCase();
    var trollMonnaie = prompt("Est-ce que votre argent est en monnaie de Troll ?").toUpperCase();
    if(trollMonnaie === 'OUI' && argent === 'OUI') {
      console.log("Bien ! Vous payez le troll et continuez votre chemin.");
    } else {
      console.log("Bing ! Le troll ne prend que de l'argent de troll. Vous êtes écrabouillé !");
    }
    break;
  case 'COURIR':
    var rapide = prompt("Fuyons ! Etes-vous rapide (OUI ou NON) ?").toUpperCase();
    var avance = prompt("Etes-vous parti avant lui ?").toUpperCase();
    if(rapide === 'OUI' || avance === 'OUI') {
      console.log("Vous vous échappez de justesse ! Vous vivrez pour retourner vous promener dans la forêt.");
    } else {
      console.log("Vous êtes lent et n'êtes pas parti en avance ? Vous n'aviez aucune chance ! Le troll vous dévore.");
    }
    break;
  default:
    console.log("Je n'ai pas compris votre choix. Cliquez sur Relancer et réessayez mais cette fois choisissez COMBATTRE, PAYER ou COURIR !");
}



.toUpperCase() et .toLowerCase()
Vous avez peut-être remarqué l'utilisation de la fonction
.toUpperCase() dans le premier exercice Nous l'utilisons comme ça :

var reponse = prompt("Question pour l'utilisateur").toUpperCase();

Cela convertissait la réponse de l'utilisateur en lettres CAPITALES avant de l'enregistrer dans la variable reponse.
Cela élimine les problèmes qui pourraient surgir si votre programme teste 'OUI',
mais que votre utilisateur entre 'oui' ou 'Oui'.
L'entrée est transformée en capitales avant d'être testée, donc nous avons simplement besoin de tester des capitales !

Vous pouvez utiliser .toLowerCase(), qui convertit un texte en lettres minuscules.

Instructions

Appelez soit .toUpperCase(), soit .toLowerCase() sur votre prompt
pour vous assurer que l'entrée de l'utilisateur que vous aller récupérer sera mise en majuscules ou en minuscules
comme dont vous lattendez.

var utilisateur = prompt("quel est votre nom?").toUpperCase();

Bon travail ! Maintenant, allons au coeur du problème : linstruction switch.

Instructions
Après votre prompt, ajoutez une instruction switch qui testera différentes possibilités
pour l'entrée de l'utilisateur grâce à case.
Créez-en autant que vous voulez ! (mais au moins trois).
N'oubliez pas d'inclure un bloc default à la fin qui renverra une réponse
si le choix de lutilisateur ne correspond à aucun des cas (case).

var utilisateur = prompt("Que fais-tu aujourd'hui?").toUpperCase();
switch(utilisateur) {
    case "JOGGING":
        console.log("Quel courage !");
        break;
    case "MANGER":
        console.log("Attention à la gourmandise !");
        break;
    case "DANSER":
        console.log("Ah, je ne sais pas danser");
        break;
    case "JAVASCRIPT":
        console.log("Oh que ce n'est pas facile !");
        break;
    case "TRAVAILLER":
        console.log("C'est bien pour travaller les méninge");
        break;
    case "SPORT":
        console.log("Le sport c'est la vie");
        break;
    default:
        console.log("Moi, non je ne sais pas trop");
}

Opérateurs logiques
Bien ! Corsons un peu les choses grâce à des opérateurs logiques.

Instructions
Ajoutez des déclarations if/else à vos case qui vérifient si une condition et une autre sont vraies,
ainsi quune condition ou une autre est vérifiée. Utilisez &&(et) et || (ou), au moins une fois chacun.



var utilisateur = prompt("Que fais-tu aujourd'hui?").toUpperCase();
switch(utilisateur) {
    case "JOGGING":
        if ("JOGGING" && "DANSER") {
            console.log("Quel courage !");
        } else {
            console.log("Génial!");
        }
        break;
    case "MANGER":
        if ("MANGER" || "JAVASCRIPT") {
            console.log("Attention à la gourmandise !");
        } else {
            console.log("Attention au brainstorming !");
        }
        break;
    case "DANSER":
        console.log("Ah, je ne sais pas danser");
        break;
    case "JAVASCRIPT":
        console.log("Oh que ce n'est pas facile !");
        break;
    case "TRAVAILLER":
        console.log("C'est bien pour travaller les méninge");
        break;
    case "SPORT":
        console.log("Le sport c'est la vie");
        break;
    default:
        console.log("Moi, non je ne sais pas trop");
}






Instructions
Créez un tableau appelé liste dans l'éditeur.
Il peut contenir toutes les données que vous voulez ! Assurez-vous qu'il a au moins trois éléments.

var liste = ["Bonbon", "Chocolat", "Cheesecake"]



Propriétés d'un tableau
Bon travail ! Est-ce que vous vous souvenez que les tableaux partagent certaines propriétés avec les chaînes de caractères ?
Ils peuvent tous les deux utiliser .length. Quand vous appelez .length sur un tableau,
cela retournera le nombre de tableau qu'il contient.

Instructions
Sous votre code existant, entrez le nombre déléments de langages dans la console.

var langages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
console.log(langages[2]); affiche le 3ème élément du tableau = JavaScript
console.log(langages.length); pour connaitre la longueur du tableau = 5



Parcourir un tableau
En combinant toutes ces idées avec une boucle for,
vous pouvez parcourir le tableau langages et en afficher chacun des éléments !

Instructions
Allez-y, utilisez une boucle for pour afficher chaque élément du tableau langages dans la console.


var langages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for (var i = 0; i < langages.length; i++) {
    console.log(langages[i]);
}





Tableaux hétérogènes
Maintenant que nous avons appris les bases des tableaux, il est temps d'aller un peu plus loin.

Premièrement, il n'est pas nécessaire que vous mettiez le même type de données dans un tableau !
Par exemple, vous navez pas besoin de

var pronoms = ["Je", "Tu", "Il"];
var nombres = [1, 2, 3];

Vous pouvez avoir un tableau hétérogène, ce qui signifie quil contiendra différents types de données, comme ceci :

var mixe = [42, true, "slip"];

Instructions
Créez un tableau hétérogène appelé monTableau avec au moins trois éléments.
Le premier élément doit être un nombre, le second un booléen (true, ou false), et le troisième une chaîne de caractères.
N'hésitez pas à ajouter d'autres éléments si vous le voulez, de nimporte quels types !

var monTableau = [42, true, "Bonjour"];


Tableaux de tableaux
Très bien ! La prochaine chose à savoir est que vous ne pouvez pas seulement avoir des types différents dans un tableau,
mais aussi mettre des autres tableaux dans des tableaux.
Vous pouvez créer un tableau à deux dimensions en imbriquant les tableaux entre eux, comme ci-dessous :

var deuxDimensions = [[1, 1], [1, 1]];
Ce tableau est bi-dimensionnel car il contient deux lignes qui contiennent chacune deux objets.
Si on ajoutait une nouvelle ligne entre les deux déjà existantes,
on pourrait avoir un objet 2D - comme un carré - à afficher sur la console, comme ci-dessous :

[1, 1]
[1, 1]
Instructions
Créez un tableau à deux dimensions appelé nouveauTableau dans l'éditeur.
Il doit avoir trois rangs et trois colonnes, contenant n'importe quelles données.

var nouveauTableau = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
[] = ligne ou rang de tableau
1, 2, 3 = colonnes de tableau


Tableaux en escalier
Bon travail ! Cest un beau tableau multidimensionnel que vous avez là.
(Le vôtre n'est imbriqué qu'une fois, donc cest un tableau à deux dimensions,
mais si vraiment vous le vouliez, vous pourriez mettre des tableaux dans des tableaux dans des tableaux
pour avoir encore plus de dimensions).

Parfois, vous voudrez des tableaux qui ne sont pas aussi beaux et équilibrés
que vos tableaux à deux-dimensions en 3 x 3 : vous pourriez avoir trois éléments au premier rang,
un élément au deuxième, et deux aux troisième rang.
JavaScript permet de créer ceux-ci, on les appelle tableaux en escaliers (jagged arrays en anglais).

Instructions
Créez un tableau en escalier appelé escalier.
Vous pouvez mettre ce que vous voulez dedans.
La seule contrainte est qu'il ait au moins deux rangs
(c'est à dire les deux premiers éléments doivent être des tableaux), et ces rangs ne peuvent pas faire la même taille.

var escalier = [[42], [1, 8, 7]];


Mi-temps !
Bien joué ! Jusquici, vous avez :

Révisé les tableaux, comment accéder à un tableau par index, aux propriétés des index, et à parcourir les tableaux
Découvert les tableaux hétérogènes
Découvert les tableaux multidimensionnels
Découvert le tableaux en escalier






Des noms et des verbes ensemble
Revenons à l'analogie des langages informatiques et des langages oraux classiques.
En Français, il existe des noms (que vous pouvez voir comme des "choses")
et des verbes (que vous pouvez voir comme des "actions").
Jusqu'ici, nos noms (données : comme des nombres, des chaînes de caractères ou des variables)
et verbes (fonctions) étaient séparés.

Plus maintenant !

En utilisant les objets, nous pouvons mettre des informations et les fonctions qui utilisent ces informations au même endroit.

Vous pouvez également penser aux objets comme des combinaisons de paires clef-valeur
(comme les tableaux), sauf que leurs clefs nont pas de nombres comme 0, 1, ou 2;
elles peuvent être des chaînes de caractères et des variables.

Nous avons mis un exemple d'utilisation des objets dans l'éditeur.
Cliquez sur Vérifier vos réponses pour voir les objets en action !

var entreeRepertoire = {};

entreeRepertoire.nom = 'Oxnard Montalvo';
entreeRepertoire.numero = '01 23 45 67 89';
entreeRepertoire.telephoner = function() {
  console.log('Appel ' + this.nom + ' au numéro ' + this.numero + '...');
};

entreeRepertoire.telephoner();


Syntaxe des objets
Vous avez vu ça ? L'objet 'entreeRepertoire' 'manipule des données (un nom et un numéro de téléphone),
insi que des procédures (une fonction qui affiche qui on appelle).

Dans cet exemple, nous avons donné à la clef nom la valeur 'Oxnard Montalvo'
et à la clef numero la valeur '01 23 45 67 89'.
Un objet est un peu comme un tableau, de ce point de vue,
sauf que ses clefs peuvent être des variables et des chaînes de caractères, et pas seulement des nombres.

Les objets sont simplement des collections dinformations (clefs et valeurs) entre accolades, comme ceci :

var monObjet = {
clef: valeur,
clef: valeur,
clef: valeur,
};

Instructions
En utilisant la syntaxe du dessus pour vous guider, créez un objets, moi dans léditeur.
Il doit avoir une clef nom avec votre nom (sous forme de chaîne de caractères) pour valeur,
et la clef age contenant votre âge (sous forme de nombre).

var moi = {
    nom: "Amelie",
    age: 29,
};



Créer un nouvel objet
Bon travail ! Vous venez de créer votre premier objet.

Il y a deux façons de créer un objet : en utilisant la notation littérale objet (ce que vous venez de faire)
et en utilisant le constructeur dobjets.

La notation littérale permet de créer un objet simplement en utilisant les accolades, comme ceci :

var monObj = {
    type: 'classe',
    disposition: 'beau'
};

var objetVide = {};
Quand vous utilisez le constructeur, la syntaxe ressemble à ceci :

var monObjet = new Object();

Elle ordonne à JavaScript : "Je veux que tu me crée une nouvelle (new) chose,
et je veux que cette chose soit un objet (Object)".

Vous pouvez ajouter des clefs à votre objet après lavoir créé de deux façons :

monObj["nom"] = "Charlie";
monObj.nom = "Charlie";

Les deux sont correctes, et la seconde est un raccourci de la première. Vous voyez comme cela ressemble aux tableaux ?

Instructions
Re-créez votre objet moi dans l'éditeur, mais cette fois en utilisant le constructeur d'objets.
Une fois que ce sera fait, utilisez soit la notation avec [], soit la notation avec .
pour lui donner une propriété nom avec une chaîne de caractères pour valeur (votre nom)
et une propriété age qui sera un nombre (votre âge).


var moi = new Object ();

moi.nom = "Amelie";
moi.age = 29;



C'est en forgeant que l'on devient forgeron
Bon travail ! Faisons encore quelques objets, juste pour s'entraîner.

Instructions
Créez trois objets appelés objet1, objet2 et objet3 dans l'éditeur.
Utilisez soit la notation littérale, soit la notation objet, et donnez à vos objets les propriétés que vous voulez !

Hint
Syntaxe littérale :

var monObj = {
    clef1: valeur,
    clef2: valeur
}

var monObj = {};
myObj.clef1 = valeur;
myObj['clef2'] = valeur;


Object constructor:

var monObj = new Object();
myObj.clef1= valeur;
myObj['clef2'] = valeur;

Réponse :

var objet1 = {
    fourchette: 3,
    couteau: 2,
    cuilliere: 5
}

var objet2 = {};
objet2.fourchette = 2;
objet2.couteau = 3;
objet2.cuilliere = 5;

var objet3 = new Object();
objet3["fourchette"] = 5;
objet3["couteau"] = 3;
objet3["cuilliere"] = 2;




Révisions
Super ! On vous en a demandé beaucoup, mais maintenant vous savez :

Ce que sont les objets
La syntaxe des objets
Comment créer vos propres objets




Tableaux hétérogènes
Échauffons-nous un peu avec des tableaux ! Créons un tableau qui soit vraiment un pot-pourri de types de données.

Instructions
Créez un tableau, monTableau. Son premier élément doit être un nombre, son deuxième un booléen,
son troisième une chaîne de caractères, et son quatrième doit être... un objet !
Vous pouvez ajouter autant d'éléments, d'autant de types que vous voulez après ces quatre premiers éléments.

?
Hint
Les Booléens peuvent être true ou false (vrais ou faux). Pour ajouter un booléen à un tableau, on peut faire :

var bool1 = true;

monTableau = [bool1];
Pour ajouter un objet à un tableau, on peut faire :

var monObj = {
    type: 'joli',
    disposition: 'canon'
};

monTableau = [monObj];


var monTableau = [
    42,
    true,
    'Hello',
    {
        fourchette: 3,
        couteau: 2,
        cuilliere: 5
    }
];


Les tableaux multidimensionnels
Bien ! Maintenant, créons un tableau 2D. Non seulement ça, mais un tableau 2D en escalier.
Rappelez-vous, cela signifie un tableau de tableaux, et avec des tableaux qui ne sont pas de la même longueur ! Par exemple :

var aListe = [ [1, 4, 2], [7] ];
Instructions
Créez un tableau appelé nouveauTableau.
Il doit être en 2D (c'est à dire qu'il doit contenir deux éléments qui sont eux-mêmes des tableaux),
et en escalier (ces deux tableaux doivent avoir des tailles différentes, comme dans l'exemple ci-dessus).

Le clou final ? Faites en sorte qu'un de vos tableaux internes contienne un objet !

Hint
Pour ajouter un objet dans le tableau, nous pourrions faire :

var monObj = {
    type: 'cool',
    disposition: 'canon'
};

monTableau = [monObj];

var nouveauTableau = [
    ["Bonjour", 42, 88, false, {
        bonjour: 42,
        hello: "Comment ça va?"}
    ],
    [42,87]
]

var myObject = {
    nom: "Lee",
    prenom: "laura",
    age: "29"
};

var nouveauTableau = [
    ["Bonjour", 42, 88, false],
    [42, 87],
    [myObject]
];

console.log(nouveauTableau)

Cas particulier
var nouveauTableau = [
    ["Bonjour", 42, 88, false],
    [42, 87, [myObject]],
    [myObject]
];

il n'affiche pas l'objet il reconnait quil y a un objet mais ne l'afffiche' pas.







Éditer un objet existant
Bon travail ! Maintenant, travaillons un peu avec les objets. Nous allons commencer par en modifier un déjà existant.

Instructions
Ajoutez une clef appelée interets à monObjet.
Donnez à cette clef une valeur qui est un tableau (le tableau peut contenir ce que vous voulez).


var monObjet = {
  nom: 'Eduardo',
  type: 'Excellent',
  interets: ["Hello", true, 42]

};


Créez vos propres objets
Vous y êtes presque ! Dernière étape : créez votre propre objet dans les forges du mont JavaScript.

Instructions
Créez votre propre objet appelé monPropreObjet. Donnez-lui les propriétés que vous voulez !
(Mettez-en quand même au moins une). Vous pouvez utiliser la notation littérale ou le constructeur dobjets.


var monPropreObjet = {
    type: "bouteille",
    prix: 42,
    reference: true
};

var monPropreObjet = new Object();

monPropreObjet.type = "fourchette";
monPropreObjet['prix'] = 42;

console.log(monPropreObjet);








Ce que vous allez créer
Dans ce projet, nous allons combiner nos connaissances des objets et des tableaux pour créer une simple liste de contacts.
Ensuite, en utilisant des fonctions,
nous serons capables dafficher les éléments de notre liste de contacts dans la console,
ainsi que de rechercher un élément en particulier.

var amis = {};
amis.bill = {
  prenom: "Bill",
  nom: "Gates",
  numero: "(206) 555-5555",
  adresse: ['One Microsoft Way','Redmond','WA','98052']
};
amis.steve = {
  prenom: "Steve",
  nom: "Jobs",
  numero: "(408) 555-5555",
  adresse: ['1 Infinite Loop','Cupertino','CA','95014']
};

var lister = function(objet) {
  for(var propriete in objet) {
    console.log(propriete );
  }
};

var recherche = function(pNom) {
  for(var propriete in amis) {
    if(amis[propriete].prenom === pNom) {
      console.log(amis[propriete]);
      return amis[propriete];
    }
  }
};

lister(amis);
recherche("Steve");



Création de votre objet contact
Premièrement, nous devons commencer avec un objet pour retenir nos amis.

Instructions
Créez un objet appelé amis. N'hésitez pas à utiliser soit la notation objet littéral,
soit le constructeur d'objet. Regardez l'indice si vous avez besoin d'un rappel sur la syntaxe.
var amis = {};



Ajouter vos amis
Bien ! Maintenant, ajoutons des amis à notre objets amis.

Chaque ami aura besoin d'un nom, d'un numéro de téléphone, etc...
Nous allons utiliser un nouvel objet pour chaque ami pour nous souvenir de leurs informations !
Eh oui, nous allons avoir des objets dans dautres objets !

Instructions
Ajoutez quelques objets vides à votre objet amis.
Assurez-vous que vous avez ajouté un ami appelé 'bill' et un autre appelé 'steve'.
Utilisez les noms de vos amis comme clefs pour les objets vides.

N'hésitez pas à regardez l'indice si vous avez besoin daide.

Hint
Vous pouvez ajouter directement des objets à amis comme ceci :

var amis = {
    bill: {},
    steve: {}
};
Ou avec des crochets ([]) ou la notation avec point (.) comme ceci :

amis[bill] = {};
amis.steve = {};
Ou avec le constructeur Object, comme ceci :

var amis = new Object();

amis.bill = new Object();
amis.steve = new Object();
Remarquez que "bill" et "steve" ne sont pas en lettres capitales !


Réponse
var amis = {
    bill: {},
    steve: {}
};

Ajouter des propriétés
Ensuite, ajoutons des propriétés à nos amis. Nous allons avoir besoin quils aient un prenom, un nom, et un numero.

Instructions
Donnez à chacun de vos amis un prenom, un nom et un numero.
La valeur de chacune de ces variables devrait être une chaîne de caractères
(regardez l'indice si vous avez besoin d'aide).
Assurez-vous que le prénom de bill est "Bill" et que celui de steve est "Steve" (encore une fois,
attention aux lettres majuscules).

Hint
Voici un exemple :

var amis = {
    bill: {
        prenom: "Bill",
        nom: "Gates",
        numero: "(206) 555-5555"
    }
};

var amis = {
    bill: {
        prenom: "Bill",
        nom: "Gates",
        numero: "(206) 555-5555"
    },
    steve:{
        prenom: "Steve",
        nom: "Job",
        numero: "(408) 333-888"

    }
};

Dans un tableau
Ajoutons une autre propriété à chacun de nos amis et donnons lui nimporte quelle chaîne de caractères pour valeur.
Donnez à chacun de vos amis une propriété adresse et ajoutez cette adresse sous forme de tableau, comme ceci :

var amis = {
    bill: {
        prenom: "Bill",
        nom: "Gates",
        numero: "(206) 555-5555",
        adresse: ['One Microsoft Way','Redmond','WA','98052']
    }
};

Instructions
Ajoutez une propriété adresse à chacun de vos amis et donnez lui nimporte quelle chaîne de caractères pour valeur.

var amis = {
    bill: {
        prenom: "Bill",
        nom: "Gates",
        numero: "(206) 555-5555",
        adresse: ['One Microsoft Way','Redmond','WA','98052']
    },
    steve:{
        prenom: "Steve",
        nom: "Job",
        numero: "(408) 333-888",
        adresse: ['Apple','Machintoch','CA','94121']
    }
};





Listez les tous !
Très bon travail ! Maintenant, ajoutons quelques fonctions pour nous aider à parcourir nos contacts.

La première fonction que nous allons créer s'appellera lister et affichera toutes les entrées que nous avons dans l'objet amis.
Pour ce faire, nous allons voir une nouvelle syntaxe : la boucle for/in.

Elle ressemble à ceci :

 for (var clef in objet) {
  // Accédez à la valeur de la clef
  // grâce à objet[clef]
}
La partie "clef" peut être remplacée par le nom que vous voulez, c'est un paramètre fictif.
C'est un peu comme quand vous créez un nom de paramètre dans une fonction qui prend des arguments.

Instructions
Créez une fonction lister qui ne prend quun paramètre.
Dans le corps de la fonction, écrivez une boucle for/in.
Dans la utilisez console.log pour afficher la clef.
(Par exemple, si vous avez simplement bill et steve comme entrées, lister devrait simplement afficher "bill" et "steve".)


Hint
Voici comment créer une fonction :

var lister = function(amis) {
  // Faire quelque chose ici
}
Voici comment parcourir les clefs dun objet :

for (var clef in objet) {
  // Utilisez objet[clef] pour accéder
  // à la valeur correspondante
}
Voici comment utiliser console.log :

console.log("Affiche un texte");
var maChaine = "Super !";
console.log(maChaine);

var amis = {
    bill: {
        prenom: "Bill",
        nom: "Gates",
        numero: "(206) 555-5555",
        adresse: ['One Microsoft Way','Redmond','WA','98052']
    },
    steve:{
        prenom: "Steve",
        nom: "Job",
        numero: "(408) 333-888",
        adresse: ['Apple','Machintoch','CA','94121']
    }
};

var lister = function(objet) {
    for (var clef in objet) {
        console.log(clef);
    }
};

lister(amis)




Rechercher un ami
La seconde fonction à ajouter sera appelée recherche et prendra un prénom en argument.
Elle essaiera de trouver une correspondance entre le prénom recherché et lun des prénoms de notre liste de contacts amis.
Si elle en trouve une, elle affichera les informations de contact de notre ami (prenom, nom, numero, adresse) dans la console.

Instructions
Définissez une fonction recherche qui prend un unique argument, pNom.
Si largument envoyé à la fonction correspond à lun des prénoms présents dans amis,
elle doit afficher les informations de contact de cet ami dans la console et les retourner avec un return.

?
Hint
Voici les grandes lignes de la fonction :

Dabord, créez une fonction appelée recherche. Voici comment créer cette fonction :

var recherche = function(amis) {
    // faire quelque chose ici
};

Dans la fonction, bouclez sur les clefs de l'objet amis. Voici comment boucler sur les clefs d'un objet :

for (var clef in objet) {
  // Use objet[clef] pour accéder
  // à la valeur correspondante
}
Dans la boucle for utilisez une déclaration if/else pour contrôler
si l'argument envoyé à la fonction est égal (===) à l'un des prénoms dans amis.
Voici comment utiliser une déclaration if/else :

if(condition) { //si
    // Faire une chose ici
}
else {  // sinon
    // faire autre chose
}
Si (if) il y a une correspondance, utilisezconsole.log pour afficher cet ami à lécran,
et retournez-le (return). Voici comment utiliser console.log :

console.log("Affichage d'une chaîne");
var maChaine = "super!";
console.log(maChaine);
Votre code devrait ressembler à quelque chose comme :

var recherche = function(nom) {
    for(var clef in amis) {
        if(amis[clef].prenom === nom) {
            console.log(amis[clef]);
            return amis[clef];
        }
    }
};


Réponse
var amis = {
    bill: {
        prenom: "Bill",
        nom: "Gates",
        numero: "(206) 555-5555",
        adresse: ['One Microsoft Way','Redmond','WA','98052']
    },
    steve:{
        prenom: "Steve",
        nom: "Job",
        numero: "(408) 333-888",
        adresse: ['Apple','Machintoch','CA','94121']
    }
};

var lister = function(objet) {
    for (var clef in objet) {
        console.log(clef);
    }
};

lister(amis);

var recherche = function(pNom) {
    for(var clef in amis) {
        if (amis[clef].prenom === pNom) {
            console.log(amis[clef]);
            return amis[clef];
        } else {
            console.log("Nous n'avons pas trouvé de correspondance");
        }
    }
};

recherche("Steve");



Victoire !
Très bon travail ! Vous avez créé votre propre liste de contacts, que vous pouvez parcourir.
Essayez d'appeler vos deux fonctions, d'ajouter des amis, de changer les champs que vous avez inclus
pour chaque ami et de customiser un peu plus votre nouvel objet.

Nous avons fait un affichage basique dans la console, mais nous aurions pu le faire de façon encore plus sympa.
Comment pourriez-vous formater une sortie comme celle-ci ?

First Name: Steve
Last Name: Jobs
Number: (408) 555-5555
Address: 1 Infinite Loop
         Cupertino, CA 95014


var amis = {
    bill: {
        prenom: "Bill",
        nom: "Gates",
        numero: "(206) 555-5555",
        adresse: ['One Microsoft Way','Redmond','WA','98052']
    },
    steve: {
        prenom: "Steve",
        nom: "Job",
        numero: "(408) 333-888",
        adresse: ['Apple','Machintoch','CA','94121']
    },
    matthew: {
        prenom: "Matthew",
        nom: "Peuplier",
        numero: "(415) 777-888",
        adresse: ['Jackson street','San Francisco','CA','94121']
    }
};

var lister = function(objet) {
    for (var clef in objet) {
        console.log(clef);
    }
};

lister(amis);

var recherche = function(pNom) {
    for(var clef in amis) {
        if (amis[clef].prenom === pNom) {
            console.log(amis[clef]);
            return amis[clef];
        } else {
            console.log("Nous n'avons pas trouvé de correspondance");
        }
    }
};

recherche("Matthew");


We've come a long, long...
Le JavaScript s'écrit avec différents type de données. Actuellement nous connaissons ces types :

strings (e.g. "Le chien aboie")
numbers (e.g. 4, 10)
booleans (e.g. false, 5 > 4)
Nous savons également utiliser les comparateurs (eg. >, <=, !==, etc.).
Une chose importante à noter et que dès que lon utilise un de ces symboles, un bouléen est retourné !

Il y a une expression longue et affreuse dans l'éditeur. Globalement,
elle renvoie un Booléen (c'est à dire que l'ensemble de l'expression est soit true, soit false).

Selon vous à quoi est égal l'expression dans l'éditeur ?

Déclarez ensuite une variable appelée reponse. Donnez-lui la valeur booléenne que renvoie lexpression.

(((3 * 90) === 270) || !(false && (!false)) || "bex".toUpperCase() === "BEX");

var reponse = true;



Through the hard times...
Nous connaissons deux manières de stocker des types de données.
Nous pouvons utiliser des variables ou des tableaux.
Nous utilisons des variables pour enregistrer des données (comme des chaînes de caractères ou des nombres)
auxquelles nous voudrons accéder plus tard.

Un tableau est exactement comme une variable dans le sens où il stocke des données.
La différence est que le tableau peut stocker plusieurs valeurs alors qu'une variable ne peut en stocker qu'une.

Pour accéder aux valeurs dun tableau, nous utilisons la notations avec crochets,
sans oublier que la numérotation commence à 0 (donc la première valeur dun tableau est à la position 0).

Instructions
Observez le tableau multiplesDeHuit, et trouvez lintrus.

Remplacez X à la ligne 6 pour que la variable reponse ait pour valeur le booléen true.


// Voici un tableau de multiples de 8. Est-il correct ?
var multiplesDeHuit = [8,16,24,32,40,58];

// On test pour avoir si le nombre dans le tableau est un multiple de huit.
// Si c'est un multiple, cela retourne false
var reponse = multiplesDeHuit[58] % 8 !== 0;


And the good!
Nous allons maintenant jouer à FizzBuzz. Les règles sont simples.
Nous voulons compter de 1 à 20. Mais si le nombre est divisible par 3,
nous allons afficher "Fizz", et si le nombre est divisible par 5, nous allons afficher "Buzz".

Et si le nombre est divisible par 3 ET par 5 ? Exact ! Nous allons afficher "FizzBuzz" !

Il y a plusieurs moyens de le faire, mais nous voudrions une condition imbriquée dans cet exercice.

Instructions
Affichez les nombres de 1 à 20.
Les règles :
Pour les nombres divisibles par 3, affichez "Fizz".
Pour les nombres divisibles par 5, affichez "Buzz".
Pour les nombres divisibles par 3 et 5, affichez "FizzBuzz".
Sinon, affichez simplement le nombre.

Réponse
for (var i = 1; i < 21; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}






I have to celebrate you baby
Cet exercice a beaucoup de films et de critiques à écrire.
Vous pourriez vous demander, "est-ce que c'est un cours de code ou d'écriture ?!"

Mais il y a une raison pour laquelle il faut soccuper de tant de cas.
Nous voulons vous montrer que si nous utilisions des déclarations if-else, ce serait inefficace.
Quelle alternative à if / else pouvons-nous utiliser ?

Instructions
Imaginez que vous avez une collection de films et que vous souhaitez écrire un code avoir un retour pour chacun.
Voici une liste de films ainsi que leur retour :

"Toy Story 2" - "Bon film, j'adore les cowboys !"
"Nemo" - "Bonne animation, les tortues sont cool."
"Le Roi Lion" - "Super musiques."
Ecrivez une fonction nommée retour qui prend en paramètre
le nom dun film et qui retourne (return) le commentaire associé.
Si le film nest pas connu, vous devez retourner Je ne sais pas !.

Utilisez une structure apprise précédemment pour réaliser cet exercice, Nutilisez pas if/else !.

Hint
Try using a switch statement. Here is  an example:

switch(movie) {
    case "Toy Story 2":
        // return review here

    case "Finding Nemo":
        // return review here

    default:
        // code to be executed if a movie name is not found
}

Because we are defining a function, we can make use of the return keyword!

Make sure that what you return matches the case of the review text


Réponse :
var retour = function (film) {
    switch(film) {
        case "Toy Story 2":
            return "Bon film, j'adore les cowboys !";
        case "Nemo":
            return "Bonne animation, les tortues sont cool.";
        case "Le Roi Lion":
            return "Super musiques.";
        default:
            return "Je ne sais pas !";
    }
};

retour("Toy Story 2");
retour("Nemo");
retour("Le Roi Lion");
retour("Le Roi");




Introduction
Nous avons évoqué quatre types de données : les nombres, les chaînes de caractères, les booléens et les tableaux.

Dans cette leçon, nous allons nous concentrer sur un cinquième type de données : les objets.
Ce type est un peu plus complexe.
Les objets nous permettent de représenter en code des choses du monde réel
et des entités telles qu''une personne ou un compte en banque).
Nous le faisons en stockant toutes les informations importantes en un endroit unique : un objet.

Comment créer un objet ? Comme pour déclarer une variable ou une fonction, nous utilisons var,
suivi du nom de l'objet et d'un signe égal. Chaque objet doit ensuite :

1. commencer par {
2. concentrer ses informations après ce caractère
3. se terminer par };

Instructions
Créez un objet appelé bob, qui ne prend aucune information au milieu des crochets.

Réponse
var bob = {}



Les propriétés
Chaque information que nous incluons dans un objet est appelée une propriété.
Dites-vous qu''une propriété est comme un label de catégorie qui appartient à un objet.
Lorsque nous créons un objet, chaque propriété a un nom, suivi de :, puis de sa valeur.
Par exemple, si nous voulons que l'objet de Bob montre qu'il a 34 ans, nous entrerions age:34.

age est une propriété, est 34 est la valeur de cette propriété. Si nous avons plus d''une propriété,
nous les séparons par des virgules. La dernière propriété ne se termine pas par une virgule.

Instructions
Observez la console et l''objet que nous avons créé dedans.
Pouvez-vous créer un objet appelé moi qui donne votre âge et le pays dans lequel vous vivez ?

var Spencer = {
  age: 22,
  pays: "France"
};

var moi = {
    age: 25,
    Pays: "France"
};




Accéder aux propriétés
Maintenant que nous savons comment créer des objets avec des propriétés, apprenons à les utiliser !

Remarquez notre exemple des objets bob et susan.
Dans ce cas, bob et susan on tous les deux deux propriétés, nom et age.

Après avoir créé nos objets, nous avons ajouté du code pour accéder à ces propriétés.
Remarquez que nous enregistrons le nom de bob, "Bob Smith" dans la variable globale nom1.
Nous le faisons sur la ligne 10.

Instructions
Terminez l''exercice en remplissant le code aux lignes 13 et 14 pour accéder à nom et age pour susan,
et enregistrez-les dans les variables globales données.


Hint
Quand nous entrons var nom1 = bob.nom, nous faisons beaucoup de choses :

Déclaration une nouvelle variable appelée nom1.
Assignation d''une valeur à cette variable.
Cette valeur est la valeur de bob.nom (c'est à dire la valeur associée à la propriété nom de l'objet bob).
Essayez de suivre les trois mêmes étapes pour les variables nom2 et age2.


var bob = {
  nom: "Bob Smith",
  age: 30
};
var susan = {
  nom: "Susan Jordan",
  age: 25
};
// Ici, nous enregistrons les informations sur Bob
var nom1 = bob.nom;
var age1 = bob.age;
// Terminez le code en enregistrant les informations sur Susan
var nom2 = susan["nom"];
var age2 = susan["age"];

Accéder aux propriétés, Partie 2
Dans l''exercice précédent, nous accédions aux propriétés en utilisant ce qui est appelé la notation avec point.
Joli nom, hein ? Donc pour accéder à une propriété, nous utilisons nomObjet.nomPropriete (par exemple bob.nom).

En plus de la notation avec point,
nous pouvons aussi accéder aux propriétés en utilisant la notation entre crochets.
Dans ce cas nous utilisons nomObjet["nomPropriete"] pour accéder à la propriété désirée.
Remarquez que nous avons besoin de " " autour du nom de la propriété.

Observez notre prochain exemple, avec l''objet appelé chien.
Remarquez la façon dont nous avons enregistré
l''espèce du chien dans une variable en utilisant la notation entre crochets
pour accéder à la propriété espece de chien.

Instructions
Utilisez la notation entre crochets pour sauvegarder également le poids et l'age du chien dans des variables.

// Observez l'exemple suivant : un chien
var chien = {
  espece: "levrier",
  poids: 60,
  age: 4
};

var espece = chien["espece"];
// ajoutez le code pour enregistrer le poids et l'age en utilisant la notation entre crochets
var poids = chien["poids"];
var age = chien.age;






Une autre façon de créer
La méthode que nous avons utilisée pour créer les objets utilise la notation littérale,
c'est à dire, la création d'objets grâce à { } et la définition de ses propriétés à l'intérieur des crochets.

Une autre façon de créer des objets sans utiliser les crochets { } est d'utiliser le mot-clé new ("nouveau").
On appelle cela créer un objet en utilisant un constructeur.

Le mot-clé new crée un objet vide quand il est suivi par Object(). La syntaxe générale est alors :

var nomObjet = new Object();
Nous devons ensuite remplir cet objet de propriétés et de labels. Comment faire ?
Observez la création de l''objet bob pour voir ce qui a été fait.
Nous avons créé la propriété nom pour lobjet bob en écrivant bob.nom et en lui donnant une valeur.
Comparez ceci à la façon dont nous avons défini les propriétés pour lobjet susan1, sur les lignes 6 et 7.

Instructions
Observez lobjet susan1 avec attention ; remarquez l’utilisation de la notation littérale.

Utilisez la notation avec constructeur pour créer susan2,
qui doit avoir les mêmes propriétés et valeurs que susan1.

Réponse
// Encore notre objet bob, mais créé grâce à un constructeur, cette fois
var bob = new Object();
bob.nom = "Bob Smith";
bob.age = 30;
// Voici susan1, en notation littérale
var susan1 = {
  nom: "Susan Jordan",
  age: 24
};
// Créez un nouvel objet susan2, en utilisant un constructeur
var susan2 = new Object();
susan2.nom = "Susan Jordan";
susan2["age"] = 24;




Maintenant que nous avons appris à créer des objets de deux façons différentes et à utiliser leurs propriétés, entraînons-nous sur le tout.

Instructions
Utilisez la notation littérale pour finir l''objet snoopy.
Rappelez-vous que la notation littérale est celle où nous remplissons les crochets { }
avec les propriétés et leurs valeurs en colonne. Les propriétés sont séparées par des virgules.

snoopy devrait avoir deux propriétés, une espece, qui vaut "beagle" et un age, qui vaut 10.

Ensuite, créez pote, un golden retriever de 5 ans, en utilisant la notation avec constructeur.
Cette notation implique d''utiliser le mot-clé new pour créer un objet vide,
puis de le remplir en utilisant la notation avec point.

Réponse :
// Aidez nous à créer Snoopy en utilisant la notation littérale
// Rappelez vous : Snoopy est un "beagle" et qu'il a dix ans.
var snoopy = {
    espece: "beagle",
    age: 10
};
// Aidez nous à créer pote en utilisant les constructeurs.
// pote est un "golden retriever" de cinq ans.
var pote = new Object()
pote.espece = "golden retriever";
pote["age"] = 5;


C'est en forgeant...
Bon travail !
Faisons un exemple de plus pour que la création d'objets avec les propriétés désirées n''ait plus de secret pour nous.

Instructions
Créez un objet appelé BMW, qui prendra 3 propriétés : un cout, qui vaut "trop cher",
une vitesse de 220 et un pays : "Allemagne".

var BMW = {
    cout: "trop cher",
    vitesse: 220,
    pays: "Allemagne"
};



Révisions sur les fonctions
Dans cette leçon, nous allons nous concentrer sur les méthodes.
Les méthodes sont une partie importante de la programmation orientée objet (POO).
La POO est une partie importante de la programmation, que nous allons approfondir en détail plus tard.

Les méthodes sont similaires aux fonctions.
Pour nous préparer à travailler sur les méthodes, faisons une rapide révision sur les fonctions.
Les fonctions sont définies en utilisant le mot-clé function suivi de :

Des parenthèses, ( ) avec éventuellement des paramètres en leur milieu.
Des crochets { }qui contiennent le code de la fonction.
Un point-virgule ;
Et quand nous appelons la fonction, nous pouvons lui mettre une entrée (des arguments) pour les paramètres.

Par exemple, la fonction carre de la ligne 2 prends x pour paramètre et retourne ce paramètre au carré.

Instructions
Définissez la fonction multiplie. Elle doit prendre deux paramètres, x et y, et retourner leur produit.

Appelez ensuite votre fonction, en lui passant nimporte quels arguments.

Réponse :

// Prends un nombre x en entrée et retourne son carré
var carre = function (x) {
  return x * x;
};

// Ecrivez la fonction multiplie ci-dessous
// Elle doit prendre deux paramètres et en retourner le produit
var multiplie = function (x, y) {
    return x * y;
};

multiplie(3,8);




Qu'est ce qu'une méthode ?
Dans la section précédente, nous parlions des propriétés.
Nous pouvons voir les propriétés comme des variables associées à un objet.
De même, une méthode est comme une fonction associée à un objet.

Regardons bob, notre objet de la leçon précédente.
Au lieu davoir simplement les propriétés nom et age (lignes 3 et 4),
bob a également une méthode appelée setAge (ligne 6). "Set" en Anglais signifie fixer.
Comme vous pouvez le deviner,
cette méthode permet de donner à la propriété age de bob la valeur que vous lui passerez en argument.

Remarquez que nous avons défini setAge à peu près de la même façon que nous définissons une propriété.
La grosse différence est que nous entrons une fonction après le signe égal,
plutôt qu'une chaîne de caractères ou un nombre.

Nous appelons une méthode de la même façon qu'une fonction, mais en utilisant nomObjet.nomMethode().
Observez la ligne 10, à laquelle nous utilisons la méthode pour changer l'âge de bob à 40.
Nous l'avons fait en appelant bob.setAge(40).

Instructions
Essayez ! Utilisez la méthode setAge pour donner à lâge de bob la valeur 20.

// Revoici Bob, avcec ses propriétés habituelles
var bob = new Object();
bob.nom = "Bob Smith";
bob.age = 30;
// Cette fois, nous lui avons ajouté une méthode, setAge
bob.setAge = function (nouvelAge){
  bob.age = nouvelAge;
};
// Ici, nous fixons l'âge de bob à 40
bob.setAge(40);
// Bob se sent vieux. Réutilisons notre méthode pour fixer l'âge de bob à 20
bob.setAge(20);





Pourquoi les méthodes sont-elles importantes ?
Les méthodes sont pratiques pour beaucoup de choses dans la programmation orientée objet.

Elles peuvent permettre de changer la valeur des propriétés dun objet.
La méthode setAge, ligne 4, permet de mettre à jour bob.age.
Elles peuvent être utilisées pour faire des calculs à partir des propriétés dun objet.
Les fonctions peuvent seulement utiliser des paramètres en entrée,
alors que les méthodes peuvent faire des calculs avec des propriétés des objets.
Par exemple, nous pouvons calculer lannée de naissance de bob à partir de son age
grâce à la méthode getAnneeNaissance (ligne 8).

Instructions:
Cliquez sur Sauvegarder & Envoyer pour découvrir en quelle année est né bob
et passer à lexercice suivant, où nous apprendrons comment créer nos méthodes.

var bob = new Object();
bob.age = 30;
// Cette fois nous avons ajouté une méthode setAge
bob.setAge = function (nouvelAge) {
  bob.age = nouvelAge;
};

bob.getAnneeNaissance = function () {
  return 2013 - bob.age;
};
console.log(bob.getAnneeNaissance());


Le mot-clé "this"
Notre méthode setAge fonctionne bien pour bob, puisquelle met à jour bob.age,
mais comment faire si nous voulons l'utiliser pour d'autres personnes ?

Il se trouve que nous pouvons créer une méthode pour plusieurs objets en utilisant le mot-clé this.
Le mot-clé this est un paramètre fictif,
qui se réfère à nimporte quel objet appelant cette méthode quand la méthode est effectivement utilisée.

Observons la méthode setAge (ligne 2) pour voir comment ça marche.
En utilisant le mot-clé this, setAge va changer la propriété age de n'importe quel objet qui l'appelle.
Précédemment, nous avions un objet spécifique, bob, à la place du mot-clé this.
Mais cela limitait l'utilisation de la méthode uniquement à l'objet bob.

Ensuite, lorsque nous écrivons bob.setAge = setAge (ligne 9),
cela signifie quà chaque fois que nous tapons bob.setAge( ), this.age de setAge se déférera à bob.age.

Instructions
Pour vous montrer que cette façon d'écrire setAge fonctionne de la même façon que celle de l'exercice 2,
utilisez la méthode setAge de bob pour changer son âge à 50.

Réponse
// Ici, nous déinfissons notre méthode en utilisant "this", avant même de définir bob
var setAge = function (nouvelAge) {
  this.age = nouvelAge;
};
// Maintenant, nous créons bob
var bob = new Object();
bob.age = 30;
// Et ici, nous utilisons la méthode que nous avons déjà créée
bob.setAge = setAge;

// changez l'âge de bob ici pour qu'il ait 50 ans
bob.setAge(50);






*This* marche pour tout le monde
Bien ! Maintenant nous pouvons profiter du fait que la fonction setAge n'est pas simplement limitée à l'objet bob -
nous pouvons réutiliser la même fonction pour différents objets !
Cela nous permet d'écrire une méthode customisée à chaque fois. Et tout ça grâce à l'argument fictif this.

Dans l'éditeur, nous avons le même code que la dernière fois,
où l'on a défini setAge en utilisant this. Nous avons ensuite défini bob.setAge = setAge.
Mais cette fois, nous allons également utiliser setAge pour susan.

Instructions
Créez susan sur les lignes 11 à 13, qui devrait avoir initialement un age de 25
et créez également une méthode susan.setAge égale à setAge.

Utilisez ensuite susan.setAge(35) pour fixer l'a
âge de susan à 35.

Hint
Vous pouvez utiliser notre définition de bob sur les lignes 6 à 8 pour vous aider à compléter susan.
Appelez ensuite susan.setAge(unNouvelAge) pour fixer l'age de susan à 35.

Réponse:
// Ici, nous définissons notre méthode en utilisant "this", avec même de créer bob
var setAge = function (nouvelAge) {
  this.age = nouvelAge;
};
// maintenant, nous créons bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;

// Créez susan ici, et donnez lui un age de 25 ans.
var susan = {
    age: 25
};
susan.setAge = setAge;
// Ici, nous modifions l'age de susan et le fixons à 35 en utilisant la méthode
susan.setAge(35);




Créez votre propre méthode
Regardons lexemple suivant et entraînons-nous à écrire des méthodes.

Nous avons défini un objet rectangle à partir de la ligne 1.
Il a deux propriétés, longueur et largeur, qui représentent sa longueur et sa largeur.

Nous avons écrit une méthode setLargeur qui va mettre à jour la largeur du rectangle avec la valeur qui lui est envoyée.
Elle est très similaire à la méthode setAge que nous avions vus avec les personnes.

Remarquez que nous avons utilisé le mot-clé this. this est un paramètre fictif mais dans ce scénario,
this peut seulement se référer à rectangle puisque
nous avions défini setLargeur comme faisant explicitement parti de rectangle en le définissant comme rectangle.setLargeur.

Instructions
Terminez la méthode setLongueur. Elle devrait prendre un paramètre nouvelleLongueur.
Elle changera la propriété longueur en lui donnant la valeur du paramètre donné.

Utilisez ensuite deux méthodes setLargeur et setLongueur pour changer la largeur du rectangle à 6 et sa longueur à 8.

Réponse :
var rectangle = new Object();
rectangle.largeur = 3;
rectangle.longueur = 4;
// Voici notre méthode pour fixer la largeur
rectangle.setLargeur = function (nouvelleLargeur) {
    this.largeur = nouvelleLargeur;
};

// Aidez-nous en terminant cette méthode
rectangle.setLongueur = function (nouvellelongueur) {
    this.longueur = nouvellelongueur;
};
// Ici, changez la longueur à 8 et la largeur à 6 grâce à nos nouvelles méthodes
rectangle.setLargeur(6);
rectangle.setLongueur(8);






Dautres types de méthodes
Attaquons-nous maintenant à une autre méthode qui calcule des informations sur un objet.

Nous avons ici un objet carre qui a une propriété longueurCote pour représenter la longueur dun côté du carré.
Cette fois, nous lui avons ajouté une méthode, calcPerimetre, qui calcule son périmètre.
Remarquez que nous avons utilisé le mot-clé return (de la même façon que nous lutilisions dans les fonctions !).

Instructions
Ajoutons une autre méthode appelée calcAire, qui retourne laire de carre en utilisant longueurCote.
Utilisez la méthode calcPerimetre pour vous aider.

Réponse :
var carre = new Object();
carre.longueurCote = 6;
carre.calcPerimetre = function() {
    return this.longueurCote * 4;
};
// Aidez-nous à définir une méthode pour calculer l'aire ici
carre.calcAire = function() {
    return this.longueurCote * this.longueurCote;
};

var p = carre.calcPerimetre();
var a = carre.calcAire();


Le constructeur dobjets
Nous avons utilisé le terme de constructeur dans la section 1,
quand nous parlions de créer un objet en utilisant le mot-clé new. Un constructeur permet de créer un objet.

Quand nous écrivons bob = new Object( ), nous utilisons un constructeur intégré appelé Object.
Ce constructeur est déjà défini par le langage JavaScript et crée un objet sans propriétés ni méthodes.

Cela signifie que nous devons ajouter les propriétés une par une, comme nous lavons fait.
Pour réviser, nous avons créé bob en utilisant le constructeur et défini la propriété nom pour vous.

Instructions
Terminez bob en lui ajoutant une propriété age et en la fixant à 20.

// ici, nous créons bob en utilisant les constructeurs d'objets
var bob = new Object();
bob.nom = "Bob Smith";
bob.age = 20;
// ajoutez l'age de bob ici, et donnez lui une valeur de 20





Les constructeurs customisés
Mais cette façon d'ajouter des propriétés une par une pour chaque objet est longue et pénible !
Plutôt que de toujours utiliser le constructeur Object, nous pouvons créer nos propres constructeurs.

De cette façon, nous pouvons définir les valeurs des propriétés d'un objet dès sa création.
Au lieu d'utiliser le constructeur Object qui est vide et n'a pas de propriétés,
nous pouvons créer nos propres constructeurs, qui ont des propriétés.

Pour voir comment faire, observez notre constructeur Personne sur les lignes 1 à 4.
Ce constructeur permet de créer des objets Personne.
Remarquez quil utilise le mot-clé this pour définir les valeurs des propriétés nom et age et
leur donner les valeurs envoyées en paramètres.

Maintenant, nous pouvons utiliser ce constructeur pour créer nos amis bob et susan,
en une seule ligne pour chacun ! Regardez les lignes 7 et 8 : une fois que nous avons ce constructeur,
il est beaucoup plus facile de créer des personnes
puisque nous pouvons inclure les nom et age comme arguments dans le constructeur.

Instructions
Entraînez-vous à utiliser un constructeur en créant une nouvelle Personne appelée george,
dont le nom complet est "George Washington" et lage est 275 ans.

Réponse :
function Personne(nom, age) {
  this.nom = nom;
  this.age = age;
}

// Recréons bob et susan, en utilisant notre constructeur
var bob = new Personne("Bob Smith", 30);
var susan = new Personne("Susan Jordan", 25);
var george = new Personne("George Washington", 275);
// Aidez-nous à créer george, dont le nom est "George Washington" et qui a 275 ans.

console.log(bob)
console.log(susan)...



Cest à vous !
Observons un autre exemple et entraînons-nous à écrire des constructeurs.
Ici, nous avons écrit un constructeur de Chat pour vous, avec des propriétés age et couleur.

Quest ce qui rend ce constructeur de Chat si cool ?
Il nous permet, même si nous avions des milliers de chats et que nous voulions créer un objet pour chaque chat,
dutiliser ce constructeur avec les propriétés prédéfinies.

Cette méthode est largement meilleure que celle de lutilisation du constructeur Object,
qui crée simplement un objet vide et nous oblige à définir chaque propriété et valeur pour chaque chat que nous voudrions créer.

Instructions
Terminez le constructeur de Chien que nous avons commencé sur la ligne 7.
Vous pouvez inclure tous les paramètres et toutes les propriétés que
vous le voulez (age, nom, race, tout ce que vous voulez !). Utilisez le constructeur de Chat pour vous aider.

function Chat(age, couleur) {
    this.age = age;
    this.couleur = couleur;
}

// Créez un constructeur de Chien ici
function Chien(nom, age, race, couleur, numero) {
    this.nom = nom;
    this.age = age;
    this.race = race;
    this.couleur = couleur;
    this.numero = numero;
};






Plus d'options
Dans le constructeur, nous n'avons pas besoin de définir toutes les propriétés en utilisant des paramètres.
Observons notre exemple de Personne sur la ligne 1,
et comment nous avons définit l'espece égale à "Homo Sapiens" (ligne 4).
Cela signifie que lorsque nous créons n'importe quelle Personne, son espece sera "Homo Sapiens".
Écrit comme ceci, les valeurs associées à nom et age ne sont pas encore assignées, mais espece aura toujours la même valeur.

Dans ce cas, sally et holden seront tous les deux de l'espece "Homo Sapiens",
ce qui est logique, puisque c'est vrai pour tout le monde.

Instructions
Créez un nouvel objet appelé sally en utilisant le constructeur Personne. Son nom est "Sally Bowles" et elle a 39 ans.
Créez un autre objet appelé holden. Son nom est "Holden Caulfield", et elle a 16 ans.

Éditez la phrase affichée pour quelle affiche également les ages de sally et holden, respectivement.

Réponse:
function Personne(nom, age) {
  this.nom = nom;
  this.age = age;
  this.espece = "Homo Sapiens";
}

var sally = new Personne("Sally Bowles", 39);
var holden = new Personne("Holden Caulfield", 16);
console.log("sally est un " + sally.espece + " et elle a " + sally.age);
console.log("holden's est un " + holden.espece + " et elle a " + holden.age);





Les constructeurs avec méthodes
En plus de mettre en place des propriétés, les constructeurs peuvent également définir des méthodes.
Ainsi, dès que lobjet est créé, il a également ses propres méthodes.

Ici, nous avons un constructeur Rectangle, qui définit les propriétés longueur et largeur égales aux arguments,
comme nous lavions fait pour notre Personne avec nom et age.

Remarquez que nous avons ajouté une méthode calcAire.
Elle calcule laire du rectangle à partir de sa longueur et de sa largeur.

La ligne 11 crée un nouvel objet rex, qui utilise le constructeur.
Vous pouvez voir comment rex appelle la méthode calcAire à la ligne 12 et enregistre le résultat dans une variable, aire.

Instructions
Définissez une nouvelle méthode sur la ligne 8, calcPerimetre,
qui calcule et retourne le périmètre dun rectangle en terme de longueur et largeur.

Réponse
function Rectangle(longueur, largeur) {
  this.longueur = longueur;
  this.largeur = largeur;
  this.calcAire = function() {
      return this.longueur * this.largeur;
  }
  // Ecrivez votre fonction perimetre ci dessous !
  this.calcPerimetre = function() {
      return this.longueur * 2 + this.largeur * 2;
  }
}

var rex = new Rectangle(7,3);
var aire = rex.calcAire();
var perimetre = rex.calcPerimetre();






Révisions sur les constructeurs
Les constructeurs permettent de créer des objets grâce au mot-clé new.
Le constructeur le plus basique est le constructeur Object, qui crée un objet sans méthode ni propriété.

Pour les objets plus compliqués,
nous pouvons créer nos propres constructeurs et y mettre toutes les propriétés et méthodes que nous le désirons.

Observez notre exemple à droite pour voir les objets en action.
Notre constructeur de Lapin définit une propriété adjectif et une méthode decrisToi.

Rappelez-vous que ces constructeurs customisés sont importants
puisqu'ils nous permettent de créer facilement des objets similaires.

Instructions
Créez un objet lapin1 avec l'adjectif "doux", un nouvel objet lapin2 avec l'objectif "heureux",
et un nouvel objet lapin3 avec l'adjectif "gentil".

Utilisez la méthode decrisToi pour afficher une phrase sur chacun des objets que vous venez de créer !

Hint
Pour créer un objet en utilisant le constructeur de lapins, nous utilisons cette syntaxe :

var nomObjet = new nomConstructeur(valeur pour chaque propriété);
Et pour appeler la méthode, nous utilisons cette syntaxe :

nomObjet.nomMethode( );

Réponse :
function Lapin(adjectif) {
    this.adjectif = adjectif;
    this.decrisToi = function() {
        console.log("Je suis un " + this.adjectif + " lapin");
    };
}

// Maintenant, nous pouvons créer facilement tous nos lapins
var lapin1 = new Lapin("doux");
var lapin2 = new Lapin("heureux");
var lapin3 = new Lapin("gentil");

lapin1.decrisToi();
lapin2.decrisToi();
lapin3.decrisToi();





Des tableaux d'objets
Rappelez-vous qu'un objet est simplement un autre type de données, comme un nombre, une chaine de caracteres,
un bouléen, mais juste un peu plus complexe.
Comme nous pouvons creer des tableaux de nombre, bouléens, etc. nous pouvons également faire des tableaux dobjets !

On peut voir à droite une fonction Personne que nous connaissons bien.

Maintenant à vous de la remplir.

Instructions
Ajoutez une Personne de plus dans le tableau famille : "timmy", qui a 6 ans.

Réponse :
// Notre constructeur de Personnes
function Personne (nom, age) {
    this.nom = nom;
    this.age = age;
}

// Nous remplissons notre famille de quelques personnes
var famille = new Array();
famille[0] = new Personne("alice", 40);
famille[1] = new Personne("bob", 42);
famille[2] = new Personne("michelle", 8);
// Ajoutez un quatrième membre appelé timmy qui a 6 ans
famille[3] = new Personne("timmy", 6);








Boucler la boucle
Les tableaux remplis dobjets fonctionnent exactement comme les tableaux remplis de nombres et de chaînes de caractères.

De la même façons que nous pouvions parcourir un tableau de nombres pour les afficher ou calculer leur somme,
nous pouvons parcourir un tableau dobjets et accéder à leurs propriétés ou méthodes.

Instructions
Écrivez un constructeur de personnes appelé Personne qui prend deux propriétés (nom et age)
Créez un tableau vide appelé famille.
Il va y avoir quatre objets dans notre tableau. En utilisant votre constructeur Personne,
créez les quatre objets et mettez-les dans le tableau. Lordre des objets est :
"alice", qui a 40 ans.
"bob", qui a 42 ans.
"michelle", qui en a 8.
"timmy", qui en a 6.
4.. Créez une boucle for qui parcourt le tableau famille et affiche la propriété nom de chaque membre de la famille,
dans lordre de leur création.

Réponse :
// Notre constructeur de Personne
function Personne(nom, age) {
    this.nom = nom;
    this.age = age;
};

// Maintenant, nous pouvons créer un tableau de personnes
var famille = [];

// Parcourez votre nouveau tableau

famille[0] = new Personne("alice", 40);
famille[1] = new Personne("bob", 42);
famille[2] = new Personne("michelle", 8);
famille[3] = new Personne("timmy", 6);

for( var i = 0; i < famille.length; i++) {
    console.log(famille[i].nom);
};





Passer des objets à des fonctions
En plus de pouvoir faire des tableaux dobjets, on peut également passer des objets en paramètre de fonctions.

A droite, nous avons créer une fonction differenceAge (ligne 9) qui prend en paramètre deux Personnes
et qui retourne la différence dâge entre ces deux personnes.

Nous ne pouvons pas mettre en paramètre une chaine de caractères car ce type de données ne contient pas de propriété !
Il faut donc passer lobjet entier.

Instructions
Nous avons créé deux personnes exemples : alice et billy.
Complétez la ligne 17 en appelant differenceAge et en enregistrant le résultat dans notre variable globale diff.

Réponse :
// Notre constructeur
function Personne (nom, age) {
    this.nom = nom;
    this.age = age;
}

// On créer une fonction qui calcul la différence d'âge
// entre deux personnes
var differenceAge = function(personne1, personne2) {
    return personne1.age - personne2.age;
}

var alice = new Personne("Alice", 30);
var billy = new Personne("Billy", 25);

// On récupère le resultat du calcul ici
var diff = differenceAge(alice,billy);





A vous de jouer !
Cette fois, essayez de créer votre propre fonction qui prend des objets en paramètres !

Ici, nous vous avons redonné le constructeur Personne, ainsi que la fonction differenceAge comme exemple.

Maintenant, créons une nouvelle fonction, plusVieilAge.
Elle doit prendre deux personnes en paramètres, et retourner l'age de la Personne la plus vieille des deux.
Par exemple, avec alice, qui a 30 ans, et bob, qui a 25 ans, plusVieilAge(alice, bob) doit retourner 30,
puisque c'est l'age d'alice, qui est plus âgée que bob. Si les deux personnes ont le même age, vous pouvez retourner cet âge.

Instructions
Définissez une fonction appelée plusVieilAge.
Nous voulons qu'elle retourne l'age de la personne la plus âgée.

Hint
Dans le if, nous voulons comparer personne1.age à personne2.age pour voir si la personne1 est plus âgée.
Si c'est le cas, nous devons retourner personne1.age. Sinon, nous retournons personne2.age.
Rappelez-vous que nous pouvons utiliser les déclarations if pour voir si une valeur est plus grande que l'autre avec :
if(var1 > var2)

Réponse :
// Notre constructeur
function Personne (nom, age) {
    this.nom = nom;
    this.age = age;
}

// On créer une fonction qui calcul la différence d'âge
// entre deux personnes
var differenceAge = function(personne1, personne2) {
    return personne1.age - personne2.age;
}

// A vous de jouer
// Créez ici la fonction plusVieilAge

var alice = new Personne("Alice", 30);
var billy = new Personne("Billy", 25);

var plusVieilAge = function(personne1, personne2) {
    if(personne1.age > personne2.age) {
        return personne1.age;
    } else if(personne1 === personne2) {
        return personne1.age;
    } else {
        return personne2.age;
    }
};

console.log("La personne la plus vieille a " + plusVieilAge(alice, billy) + " ans");





A quoi servent les objets ?
Les objets nous fournissent un moyen de représenter les objets du monde réel ou des choses virtuelles.
Nous pouvons le faire en enregistrant des informations dans les propriétés de lobjet. Il y a deux façons de créer des objets :

La notation littérale, où nous utilisons

var Nom = { };
La notation avec constructeur, où nous utilisons le mot-clé new.

Nous vous avons donné un exemple de notation littérale pour vous rafraîchir la mémoire.

Instructions
Créez un nouvel objet, spencer2, qui a les mêmes propriétés
mais en utilisant la notation constructeur et le constructeur Object.

Réponse :
var spencer = {
  age: 22,
  pays: "France"
};

// Créez spencer2 ici grâce à la notation avec constructeur
var spencer2 = new Object()
spencer2.age = 22;
spencer2.pays = "France";



Les propriétés
Les propriétés sont comme des variables qui appartiendraient à un objet,
et sont utilisées pour enregistrer des bouts dinformations. On peut accéder aux propriétés de deux façons :

La notation à point, avec nomObjet.nomPropriete

La notation à crochets, avec nomObjet["nomPropriete"] (noubliez pas les guillemets !)

Dans léditeurs, nous avons réécrit notre objet snoopy, avec ses propriétés age et especes.

Instructions
Donnez à la variable globale espece lespece de snoopy et à la variable age son age.

Utilisez la notation avec point pour l'une, et la notation avec crochets pour l'autre !

Réponse :
var snoopy = new Object();
snoopy.espece = "beagle";
snoopy.age = 10;

// enregistrez l'age et l'espece de Snoopy's dans des variables
// utilisez la notation avec point pour l'espece de snoopy
var espece = snoopy.espece;

// utilisez la notation avec crochets pour son age
var age = snoopy["age"];




Constructeurs customisés
En plus du constructeur Object basique, nous pouvons définir nos propres constructeurs customisés.
Ils peuvent être utiles pour plusieurs raisons :

1 Nous pouvons assigner des propriétés à nos objets grâce aux paramètres que nous passons quand lobjet est créé.
2 Nous pouvons automatiquement doter nos objets de méthodes.
3 Tout cela nous permet de gagner du temps et des lignes de code quand nous créons les objets.

Instructions
Remarquez que sans le constructeur, il nous faut 3 lignes de code pour pour créer harry_potter,
un objet qui représente le premier livre de la saga Harry Potter.

A la ligne 7, nous présentons un constructeur pour un objet Livre,
à qui nous passons des paramètres pour les propriétés pages et auteur.

Utilisez ce constructeur pour créer le_hobbit, un livre de "J.R.R. Tolkien", de 320 pages.
Remarquez quen utilisant le constructeur, vous pouvez le faire en une ligne au lieu de trois !

Réponse :
// 3 lignes suffisent pour créer harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.auteur = "J.K. Rowling";

// Un constructeur customisé pour le Livre
function Livre(pages, auteur) {
    this.pages = pages;
    this.auteur = auteur;
}

// Utilisez notre nouveau constructeur pour créer le_hobbit sur une seule ligne
var le_hobbit = new Livre(320, "J.R.R. Tolkien");






Les méthodes
Les méthodes sont comme des fonctions associées à un objet particulier.

Elles sont particulièrement utiles lorsque vous voulez :

1 Mettre à jour les propriétés dun objet
2 Calculer quelque chose à partir des propriétés dun objet.
Ici, nous avons écrit un objet Cercle, avec une propriété rayon représentant le rayon du cercle.
Nous avons implémenté une fonction aire qui calcule laire de ce cercle.
Remarquez que nous avons utilisé Math.PI pour accéder à la valeur de π.

Instructions
Définissez une méthode perimetre qui calcule le périmètre dun cercle.

Réponse :
function Cercle (rayon) {
    this.rayon = rayon;
    this.aire = function () {
        return Math.PI * this.rayon * this.rayon ;

    };
    // definissez une méthode de calcul du périmètre ici :
    this.perimetre = function () {
        return 2 * Math.PI * this.rayon;
    }
};





Numériser des gens
Voici Bob. Bob est notre ami. Mais comment contacter Bob ?

Regardez le code dans léditeur.
Les informations de Bob sont enregistrées dans un (tableau associatif(=accolades)) = Objet appelé bob.
bob a une propriété appelée prenom qui a une valeur égale à "Bob".
De même, il a des propriétés nom, telephone, et email, qui ont toutes des valeurs.

Pour accéder aux valeurs de chaque propriété, nous devons écrire tableau.propriété.
Regardez la ligne 8 qui nous permet dafficher bob.prenom dans la console.

Instructions
En sinspirant du format utilisé à la ligne 8,
remplissez les lignes 9 et 10 pour afficher le nom de famille et lemail de bob sur la console.

Réponse :
var bob = {
    prenom : "Bob",
    nom : "Jones",
    telephone : "01 23 45 67 89",
    email: "bob.jones@exemple.com"
};

console.log(bob.prenom);
console.log(bob.nom);
console.log(bob.email);




Numériser encore plus de gens
De la même façon quavec des chaînes de caractères ou des nombres,
nous pouvons mettre plusieurs objets dans un tableau.
ous voulons nous entraîner à extraire des informations de différents objets qui sont stockées dans le même tableau.

Cela va nous permettre de stocker tous nos objets contacts dans une unique liste.
Si les objets sont des contacts, la liste peut-être vue comme la reliure qui lie tous les contacts dans un carnet.

Instructions
Créez un objet appelé marie. Il a les mêmes propriétés que bob. Son nom est Marie Johnson,
son téléphone est "02 34 56 78 91" et son email est "marie.johnson@exemple.com".
Créez un tableau appelé contacts. Remplissez-le avec bob en premier (à l'index 0) et marie (à l'index 1).
Écrivez une commande console.log qui affiche le numéro de téléphone de Marie.

Réponse :
var bob = {
    prenom : "Bob",
    nom : "Jones",
    telephone : "01 23 45 67 89",
    email: "bob.jones@exemple.com"
};

var marie = {
    prenom: "Marie",
    nom: "Johnson",
    telephone: "02 34 56 78 91",
    email: "marie.johnson@exemple.com"
};

var contact = [bob, marie];

console.log(marie.telephone);





Afficher des informations sur nos contacts
Nous pouvons actuellement afficher les informations de nimporte lequel de nos contacts grâce à console.log.
Mais si nous voulons par exemple afficher lemail de tous nos contacts, cette méthode est un peu fastidieuse.
Si seulement nous connaissions un bout de code qui nous permettrait de faire ça !

Mais dites, ça ne vous rappelle pas les fonctions ?

Nous pouvons créer une fonction qui affiche systématiquement une propriété spécifique dun objet.

Instructions
Définissez une fonction appelée affichePersonne qui prend un paramètre appelé personne.
Dans le corps de cette fonction, affichez le paramètre prenom de personne en latteignant grâce à .prenom,
comme vous laviez fait jusque là. Affichez ensuite un espace, puis nom de la même façon.
Appelez la fonction affichePersonne() pour afficher le premier élément du tableau contacts.
Le premier élément est à la position 0.
Sur la ligne suivant, appelez de nouveau affichePersonne() pour afficher le second élément tu tableau contacts.
Ne vous inquiétez pas du fait que votre sortie saffiche deux fois - nous vérifions simplement votre code !

?
Hint
Voici comment on déclare une fonction :

var maFonction = function(param1) {
    // Fais quelque chose
}
Voici comment afficher le prénom et les nom dune personne, séparées par un espace :

console.log(personne.prenom + " " + personne.nom);
Voici comment afficher le deuxième élément dun tableau :

var monTableau = [0, 1, 2];

console.log(monTableau[1]);
// affiche 1
Puisque les éléments dun tableau sont numérotés en commençant par 0, le deuxième élément est en position 1.

Réponse :
var bob = {
    prenom : "Bob",
    nom : "Jones",
    telephone : "01 23 45 67 89",
    email: "bob.jones@exemple.com"
};

var marie = {
    prenom : "Marie",
    nom : "Johnson",
    telephone : "02 34 56 78 91",
    email: "marie.johnson@exemple.com"
};

var affichePersonne = function(personne) {
    console.log(personne.prenom +" " +personne.nom);
};

var contact = [bob, marie];

affichePersonne(contact[0]);
affichePersonne(contact[1]);







Créer un carnet dadresses
Lister tous les contacts
Les programmes de carnet d'adresses ont généralement un écran qui permet d'afficher la liste des contacts.
Mettons en place cette fonctionnalité.

Nous pourrions écrire des lignes de code séparées pour afficher tous nos contacts de la même façon
que nous l'avons fait dans l'exercice précédent, mais cela serait fastidieux.
Nous allons plutôt utiliser une boucle for pour le faire automatiquement.

Instructions
Nous allons créer une fonction qui liste tous les membres répertoriés dans le carnet dadresses.

Créez une fonction appelée liste qui ne prend aucun paramètre.
Au début de la fonction, définissez une variable pour enregistrer le nombre déléments de votre tableau contacts.
Appelez-le longueurContacts.
Tous les éléments du tableau sont numérotés en commençant à 0.
Pour parcourir le tableau en entier et traiter tous ses éléments,
créez une boucle for qui va de 0 au nombre déléments du tableau contacts, moins 1.
A l'intérieur de la boucle, ajoutez le code pour appeler affichePersonne,
en lui passant l'élément du tableau qui est actuellement traité.
Tout en bas du fichier, appelez la fonction liste.
La fonction devrait alors parcourir tout le tableau contacts et afficher chacune des informations quil contient.

var bob = {
    prenom : "Bob",
    nom : "Jones",
    telephone : "01 23 45 67 89",
    email: "bob.jones@exemple.com"
};

var marie = {
    prenom : "Marie",
    nom : "Johnson",
    telephone : "02 34 56 78 91",
    email: "marie.johnson@exemple.com"
};

var contacts = [bob, marie];

function affichePersonne(personne) {
  console.log(personne.prenom + " " + personne.nom);
}

var liste = function() {
    var longueurContacts = contacts.length
    for (var i = 0; i < longueurContacts; i++){
        affichePersonne(contacts[i])
    }
}

liste(contacts)









Trouver la bonne personne
Imaginons que nous cherchions une personne en particulier dans notre carnet dadresses grâce à un nom spécifique.

Nous pouvons le faire grâce à une technique de recherche dans les tableaux appelée "recherche linéaire".
Avec elle, nous utilisons une boucle pour vérifier tous les éléments du tableau un par un,
jusqu'à ce que nous trouvions celui que l'on cherche.

Nous pouvons utiliser la recherche linéaire pour afficher toutes les personnes ayant ce nom.

Instructions
Nous allons créer une fonction qui recherche
les personnes ayant un nom spécifique et les affiche grâce à la fonction affichePersonne.

Créez une fonction appelée recherche qui prend un paramètre appelé nom. Laissez la fonction liste tranquille.
Comme dans l'exercice précédent, définissez une variable contenant le nombre d'éléments du tableau.
(comme chaque fonction a son propre contexte, et sa propre portée,
  vous pouvez appeler cette variable longueurContacts aussi, si vous voulez !)
Créez une boucle for qui parcourt tous les éléments du tableau. Pour cette étape,
le code de recherche est le même que celui de liste.
C'est ici qu'on sy met vraiment : dans le corps de la boucle.
Plutôt que dafficher chaque élément du tableau,
ajoutez une déclaration if qui vérifie que la propriété nom de l'objet est égale à l'argument nom.
Faites en sorte que la fonction affichePersonne ne soit appelée sur la personne
seulement si la propriété nom et largument nom sont les mêmes.
En bas du fichier, appelez la fonction recherche en lui passant "Jones" comme nom à rechercher.

Hint
Pour obtenir la valeur actuelle du paramètre nom,
vous pouvez utiliser la syntaxe avec le point sur un élément du tableau comme vous le feriez avec une variable classique :
tableau[nombre].nom;.

var bob = {
    prenom: "Bob",
    nom: "Jones",
    telephone: "01 23 45 67 89",
    email: "bob.jones@exemple.com"
};

var mary = {
    prenom: "Mary",
    nom: "Johnson",
    telephone: "02 34 56 78 91",
    email: "mary.johnson@exemple.com"
};

var contacts = [bob, mary];

function affichePersonne(personne) {
    console.log(personne.prenom + " " + personne.nom);
}

function liste() {
	var longueurContacts = contacts.length;
	for (var i = 0; i < longueurContacts; i++) {
		affichePersonne(contacts[i]);
	}
}

/*Créez une fonction de recherche
puis envoyez lui "Jones"*/

var recherche = function(nom) {
    var longueurContact1 = contacts.length;
    for (var i = 0; i < longueurContact1; i++) {
        if (contacts[i].nom === nom) {
            affichePersonne(contacts[i])
        }
    }
}

recherche("Johnson")





Nous avons un nouvel ami !
Nous avons notre carnet de contacts dans le tableau contacts,
mais qu'arrive-t-il si nous nous faisons un nouvel ami et que nous voulons l'ajouter dedans ?

Les objets, comme les autres types de données,
peuvent être mis dans des tableaux grâce à une instruction tableau[position] = objet.
Pour ajouter quelque chose à la fin d'un tableau,
vous avez simplement besoin de le mettre à la position qui suit le dernier élément.

Comme les éléments d'un tableau sont numérotés en commençant à zero,
l'index du dernier élément sera le nombre d'éléments du tableau moins 1.
La taille du tableau sera donc la position à laquelle nous voulons insérer le nouvel élément.

La longueur d'un tableau, tout comme la longueur d'une chaîne de caractères, peut être trouvée en appelant tableau.length.

Nous pouvons faire l'insertion de façon succincte en ajoutant le nouvel objet directement dans le tableau
sans même lui donner un nom.
Cela peut paraître un peu étonnant, mais nous pourrons récupérer l'objet en se référant à sa position dans le tableau,
donc nous n'avons pas besoin d'un nom. Faites comme ceci :

contacts[contacts.length] = {
prenom : prenom,
nom : nom,
telephone : telephone,
email : email
};

(en imaginant que vous avez défini la fonction ajout avec les paramètres prenom, nom, telephone, et email).

Cela créera automatiquement un nouvel objet et lajoutera dans le tableau. Plutôt cool !

Instructions
Nous allons écrire une fonction qui nous permettra d'ajouter notre nouvel ami à notre carnet d'adresses.

Créer une fonction appelée ajout, avec les paramètres prenom, nom, email et telephone.
Dans cette nouvelle fonction, vous voulez créer un nouvel objet contact comme bob et marie. Mais plutôt que de remplir les propriétés de cet objet grâce à des chaînes de caractères, remplissons-les grâce aux paramètres envoyés par la fonction.
Ajoutez ce nouvel objet à votre tableau contacts.
Appelez ajout avec nimporte quels arguments prenom, nom, telephone et email que vous voulez.
Assurez-vous que vous appelez la fonction de liste, pour vérifier que votre nouvelle entrée est ajoutée. Supprimez toute autre fonction qui affiche quelque chose sur la console, comme la fonction recherche.
Lancez le code !

?
Hint
Plus précisément, un objet peut être ajouté à la fin dun tableau avec tableau[tableau.length] = objet.

Réponse :
var bob = {
    prenom: "Bob",
    nom: "Jones",
    telephone: "01 23 45 67 89",
    email: "bob.jones@exemple.com"
};

var mary = {
    prenom: "Mary",
    nom: "Johnson",
    telephone: "02 34 56 78 91",
    email: "mary.johnson@exemple.com"
};

var contacts = [bob, mary];

function affichePersonne(personne) {
    console.log(personne.prenom + " " + personne.nom);
}

function liste() {
	var longueurContacts = contacts.length;
	for (var i = 0; i < longueurContacts; i++) {
		affichePersonne(contacts[i]);
	}
}

/*Créez une fonction de recherche
puis envoyez lui "Jones"*/

var recherche = function(nom) {
    var longueurContact1 = contacts.length;
    for (var i = 0; i < longueurContact1; i++) {
        if (contacts[i].nom === nom) {
            affichePersonne(contacts[i])
        }
    }
}

var ajout = function(prenom, nom, email, telephone) {
    var objet = {
        prenom: prenom,
        nom: nom,
        telephone: telephone,
        email: email
    };
    contacts[contacts.length] = objet;
}

ajout("Mathieu", "Peuplier", "(415) 886 5588", "bob@yahoo.fr")
liste(contacts)







Construire des objets
Revoyons les bases des objets que nous avions vu dans notre précédente leçon sur les objets.
Rappelons que nous pouvons créer des objets en utilisant soit la notation littérale, soit les constructeurs dobjets.

La notation littérale crée un seul objet. Elle utilise des accolades { }
et les propriétés par défaut de lobjet sont définies dans les accolades en utilisant la notation propriete:valeur.
La notation avec constructeur implique la définition d'un constructeur d'objets.
Et comme pour la définition dune fonction, nous utilisons le mot-clé function.
Vous pouvez voir ce constructeur comme un "patron" pour dessiner de multiples objets.
Pour créer un nouvel objet depuis un constructeur, nous utilisons le mot-clé new.

Instructions
Terminez l'objet jules en lui ajoutant des propriétés.
Son job devrait être développeur et devrait avoir une propriété fiance (pour fiancé) dont la valeur est réglée en false.

Créez un nouvel objet margaux en utilisant le constructeur Personne.
Elle devrait avoir un travail d'"etudiant" et sa propriété fiance devrait être true.

Réponse :
var jules= {
    job: "developpeur",
    fiance: false,
};// ajoutez des propriétés à cet objet!



function Personne(job, fiance) {
    this.job = job;
    this.fiance = fiance;
}

var margaux = new Personne("etudiant", true);

// Créez un objet "margaux" en utilisant le constructeur de Personne !




Appliquer des méthodes à des objets I
Rappelez-vous que nous pouvons ajouter des méthodes
(cest à dire des fonctions associées à des objets) à des constructeurs :

function unObjet() {

  this.uneMethode = function() {
  };

}
Imaginons que nous disions var unObjet = new unObjet();.
Lors de lappel de unObjet.uneMethode(), le code entre accolades { } ci-dessus tournera.

Instructions
Ajoutez une méthode parle au constructeur Personne.
Quand parle est appelée, elle devrait afficher "Salut !" à la console.

Réponse :

function Personne(job, fiance) {
    this.job = job;
    this.fiance = fiance;
    // ajoutez une méthode "parle" à Personne !
    this.parle = function() {
        console.log("Salut !");
    }

}

var utilisateur = new Personne("Etudiant Codecademy",false);
utilisateur.parle();






Appliquer des méthodes à des objets II
Dans lexercice précédent, nous ajoutions des méthodes aux objets via la notation constructeur.
Nous pouvons également ajouter des méthodes avec la notation littérale :

var unObjet = {

unePropriete: valeur,
uneMethode: function(des, parametres) { }

};
Quand nous appellerons unObjet.uneMethode(des, valeurs);, le code entre les { } sera exécuté.

Remarquez quici nous avons une méthode qui prend des paramètres.
Les méthodes peuvent prendre des paramètres comme des fonctions normales,
quelles soient définies avec la notation constructeur ou la notation littérale.

Instructions
Jetez un coup d'oeil à l'objet jules partiellement défini.
Complétez la méthode parle pour faire en sorte
que les deux dernières lignes de léditeur affichent "Salut, je me sens très bien"
et "Salut, je ne me sens pas trop mal" dans la console.

Réponse :
var jules = {
    job: "developpeur",
    fiance: false,
    parle: function(message) {
        switch(message) {
            case "super":
                console.log("Salut, je me sens très bien");
                break;
            case "pas mal":
                console.log("Salut, je me sens pas trop mal");
                break;
            default:
                console.log("rien")
        }
    }
}

jules.parle("super");
jules.parle("pas mal");

var jules = {
    job: "developpeur",
    fiance: false,
    parle: function(message) {
        if (message === "super") {
            console.log("Salut, je me sens très bien");
        } else if (message === "pas mal") {
            console.log("Salut, je me sens pas trop mal");
        }
    }
}

jules.parle("super");
jules.parle("pas mal");





Appliquer des méthodes à des objets III
Rappelez-vous lors de la définition dune méthode pour un objet,
il est facile de différencier les autres propriétés de cet objet : utilisez simplement this.nomPropriete.

Lorsque cette méthode est appelée, this.nomPropriete se référera à la valeur la plus récente de nomPropriete.

Instructions
Regardez lobjet jules. Complétez la méthode disTravail pour
quelle affiche dans la console "Salut, je travaille comme [job]", où [job] est la valeur de la propriété job.

Ensuite, ligne, changez le job de jules en "super développeur".
Bien que les appels de cette méthode aux lignes 11 et 17 soit exactement les mêmes,
leurs sorties devraient être différentes puisque le job de jules a changé !

Hint
Vous devriez utiliser this.job dans votre méthode.
Ce ne sera pas un paramètre, mais il sera utilisé comme une partie de la déclaration console.log.

Réponse :
var jules = {
    job: "développeur",
    fiance: false,
    disJob: function() {
        // completez cette methode
        console.log( "Salut, je travaille comme " + this.job);
    }
};

// premier job de jules
jules.disJob();

// changez le job de jules pour mettre "super développeur" ici
jules.job = "super développeur"

// second job de jules
jules.disJob();







Qui est à vos crochets ?
Et pour finir, voyons comment récupérer les valeurs des propriétés.
Dans cette section, nous avons utilisé la notation avec points pour obtenir la valeur d'une propriété d'un objet :

unObjet.nomPropriete;
Cependant, rappelez-vous que nous pouvons également utiliser la notation avec crochets :

unObjet["nomPropriete"];
Un avantage de la notation avec crochets est qu'elle ne permet pas uniquement d'utiliser des chaînes de caractères
au sein des crochets. Nous pouvons aussi utiliser des variables dont les valeurs sont les noms des propriétés :

var unObj = {nomPropriete: uneValeur};
var maPropriete = "nomPropriete";
unObj[maPropriete];
La dernière ligne est exactement équivalente à unObj["nomPropriete"];

Instructions
Utilisez la possibilité d'utiliser des variables avec la notation entre crochets.

A la ligne 7, donnez à unePropriete la valeur du nom de la première propriété de jules (c'est à dire la propriété job).

Affichez ensuite le job de jules en utilisant la notation entre crochets et unePropriete.


Hint
Quelles sont les propriétés de jules ?
Donnez à unePropriete la valeur égale au nom (pas la valeur !)
de la première propriété (dans lordre défini dans le code) de jules.

unePropriete devrait être de type String (chaîne de caractères).
Souvenez-vous que les String sont fondamentalement "du texte entouré de guillemets".
Nous voulons que notre texte ici soit le nom de la première propriété dejules.

Vous devrez ensuite utiliser console.log pour lafficher.

Réponse :
var jules = {
    job: "développeur",
    fiance: false
};

// donnez pour valeur le premier nom de propriété de "jules"
var unePropriete = "job";

// affichez la valeur de la première propriété de "jules"
// une utilisant la variable "unePropriete"
console.log(jules[unePropriete]);






Papiers SVP
Bien ! Mettons les mains dans le cambouis et
commençons à explorer des choses vraiment intéressantes sur les objets en JavaScript.
Mais avant que nous puissions faire cela,
comment pouvons-nous dire si quelque chose est un objet (contrairement à, par exemple, un nombre ou une chaîne de caractères)?
Cela serait génial si nous pouvions dire de quel type quelque chose est en JavaScript. Heureusement,
il existe déjà un opérateur pratique pour faire cela!

Disons que nous avons une variable chose et que nous ne savons pas de quel type chose est.
Nous pouvons appeler typeof chose pour résoudre cela.
Généralement, les types les plus utilisés sont "number" (nombre), "string" (chaîne de caractères),
"function" (fonction) et évidemment "object" (objet).

A titre d'exemple, l'exemple suivant va afficher "object":

Instructions
Dans les lignes 3-6, nous avons un objet, un nombre et une chaîne de caractères (dans cet ordre).
Complétez les lignes 7-9 pour quelles affichent les types appropriés de ces variables.

Réponse :
// Complétez ces définitions pour qu'elles aient
// les types appropriés
var unObj = {job : "Je suis un objet !"};
var unNombre = 42;
var uneChaine = "Je suis une chaine !";

console.log(typeof unObj); // doit afficher "object"
console.log(typeof unNombre); // doit afficher "number"
console.log(typeof uneChaine); // doit afficher "string"





Connais-toi toi-même
Dans lexercice précédent, nous avons utilisé typeof pour comprendre de quel type est une variable en JavaScript.
Maintenant que nous savons comment séparer des objets de tout le reste, concentrons-nous sur eux !

Vous lignoriez peut-être mais en JavaScript, chaque objet vient avec des bagages
(restez connecté pour en savoir plus !).
Une partie de ces bagages inclut une méthode intitulée hasOwnProperty ("possède propriété").
Cela nous permet de savoir si un objet a une propriété particulière.

Nous montrons comment utiliser hasOwnProperty dans les deux dernières lignes.
Elle renvoit true ou false en fonction de si un objet a une certaine propriété.

Instructions
Vous devriez finir monObj en lui donnant une propriété nom.
Assurez-vous que monObj nait pas de propriété surnom pour que la dernière ligne affiche false.

Réponse :
var monObj = {
    // finissez monObj
    nom: "object",
};

console.log( monObj.hasOwnProperty('nom') ); // devrait afficher true
console.log( monObj.hasOwnProperty('surnom') ); // devrait afficher false





Habillé pour impressionner.
Entraînons-nous un petit peu sur cette propriété hasOwnProperty.
Cest un outil inestimable quand on travaille sur les objets !

Essayez d'exécuter le code tel quel dans l'éditeur.
Vous devriez obtenir une erreur puisque shorts n'est pas une propriété de l'objet valise.

Écrivons du code pour contrôler ceci, pour pouvoir éviter des erreurs désagréables plus tard.

Instructions
Supprimez la déclaration console.log.

Écrivez une déclaration if qui contrôle si valise a la propriété shorts.

Si votre déclaration if vaut true, affichez la valeur de la propriété shorts.

Si votre déclaration if vaut false, définissez la propriété shorts
comme vous le voulez en utilisant la notation avec point. Affichez ensuite la valeur de cette propriété shorts.


Hint
Rappelez-vous que obj.hasOwnProperty('nomPropriete')renvoie true ou false
en fonction de lexistence de la propriété nomPropriété dans obj.

Vous devriez probablement utiliser une déclaration if-else :

if( expression ) {
} else {
}
Lorsque vous définissez la propriété shorts, utilisez librement la notation avec point ou avec crochets :

valise.shorts = "rouge";
or
valise["shorts"] = "rouge";

Réponse :

var valise = {
    shorts: "Hawaïenne"
};

if (valise.hasOwnProperty("shorts") === true) {
    console.log(valise.shorts);
} else {
    console.log("rien");
}





Devenir IN-time.
Apprenons à travailler avec toutes les propriétés appartenant à un objet. Dabord, définissons un objet :

var chien = {
espece: "bulldog",
age: 3,
couleur: "marron"
};
Pour afficher tous les éléments, nous pouvons utiliser une boucle for/in, comme ceci :

for(var propriete in chien) {
  console.log(propriete);
}
Dans la boucle, nous utilisons un console.log pour afficher chacune des clefs.
Rappelez-vous que la "propriete" peut être le conteneur que vous voule

Instructions
Utilisez une boucle for-in pour afficher toutes les propriétés de nyc.

Réponse :
var nyc = {
    nom: "New York City",
    maire: "Bill de Blasio",
    population: 8000000,
    quartiers: 5
};

for (var propriete in nyc) {
    console.log(propriete);
}






Listez TOUTES les Propriétés !
Nous venons de voir comment afficher toutes les propriétés dun objet grâce à une boucle for-in.
Mais comment afficher toutes les valeurs associées aux propriétés ?
Surprise ! La boucle for-in va encore nous aider. Allons-y doucement. Notre objet Chien peut nous aider.

var chien = {
espece: "bulldog",
age: 3,
couleur: "marron"
};
Dabord, rappelez-vous que
chien.espece = chien["espece"] = "bulldog";

Et si nous disons :

var x = "espece";

alors

chien[x] = "bulldog";

Nous pouvons voir quen assignant le nom de la propriété à une variable,
nous pouvons ensuite utiliser le nom de la variable avec la notation entre crochets pour obtenir la valeur de la propriété.
Donc pour avoir toutes les valeurs de lobjet chien,
nous utilisons la boucle for-in et la notation entre crochets que nous venons de voir.
Regardez lindice pour voir le code pour afficher les valeurs des propriétés pour chien.

Instructions
Écrivez une autre boucle for-in, mais cette fois affichant la valeur de chaque propriété de nyc.

Hint
Cet exercice est un peu compliqué. Voici le code pour afficher les valeurs des propriétés de lobjet chien :

for(var x in chien) {
console.log(chien[x]);
}

Réponse :
var nyc = {
    nom: "New York City",
    maire: "Bill de Blasio",
    population: 8000000,
    quartiers: 5
};

// Écrivez une boucle for pour afficher les valeurs des propriétés de nyc
for (var x in nyc) {
    console.log(nyc[x]);
};

La classe est en session
Bien ! Il est temps dapprendre les bases de la Programmation orientée objet !
Souvent abréviée en POO, il s'agit d'un paradigme très important qui est très largement utilisé dans l'industrie aujourd'hui.

Commençons par introduire les classes.
Nous avons appris dans le cours précédent que les constructeurs servent à créer des objets.
Mais ils peuvent en fait faire encore plus que ça.

Quand vous écrivez un constructeur, vous définissez en fait une nouvelle classe.
Une classe peut-être vue comme un type ou une catégorie dobjets
-un peu comme les nombres et les chaînes de caractères sont des types en JavaScript.

Regardez notre exemple Personne de notre introduction aux objets.
Dans ce cas, bob et susan sont deux objets séparés, mais les deux appartiennent à la classe Personne.

Instructions
Créez votre propre classe, Cercle, en lui construisant un constructeur.
Le constructeur de Cercle doit avoir une propriété, rayon, et prendre un argument pour initialiser le rayon.

Réponse :
function Personne(nom,age) {
  this.nom = nom;
  this.age = age;
}

// Recréons bob, en utilisant notre constructeur
var bob = new Personne("Bob Smith", 30);
var susan = new Personne("Susan Jordan", 35);

// créez votre propre classe ici
function Cercle(rayon) {
    this.rayon = rayon;
};




Comment les classes nous aident-elles ?
Les classes sont très importantes en programmation orientée objet.
Cest parce que les classes nous donnent des informations utiles à propos des objets,
et vous voir les objets comme des instances particulières dune classe.

Par exemple, regardez encore votre classe Personne dans la console.
Nous savons que n'importe quelle Personne aura un nom et un age, parce qu'elles sont dans le constructeur.
Cela nous permet de créer une fonction comme afficheNomPersonne, qui prend une Personne en argument et affiche son nom.
Nous savons que la fonction fonctionnera sur nimporte quelle Personne parce que nom est une propriété valide pour cette classe.

Instructions
Créez une Personne appelée moi avec votre nom et votre age, et affichez votre nom en utilisant afficheNomPersonne.

Réponse :
function Personne(nom, age) {
  this.nom = nom;
  this.age = age;
}
// une fonction qui affiche le nom de n'importe quelle personne
var afficheNomPersonne = function (p) {
  console.log(p.nom);
};

var bob = new Personne("Bob Smith", 30);
afficheNomPersonne(bob);

// Créez une personne moi avec vos nom et age
// utilisez ensuite afficheNomPersonne pour afficher votre nom
var moi = new Personne("Amelie Lee", 29);
afficheNomPersonne(moi);





Instruire Snoopy
Donc nous savons qu'une classe aura certaines propriétés et méthodes,
mais qu'est ce qui garde la trace de ce que peut ou ne peut pas faire une classe donnée ?
De ce qu'a ou n'a pas une classe ? C'est le travail du prototype.

JavaScript définit automatiquement le prototype d'une classe avec un constructeur.
Par exemple, notre constructeur de 'chien' s'assure que le prototype 'chien' ait une propriété 'reproduction'.
Souvenez-vous, le prototype 'chien' garde la trace de ce que 'chien' prossède, ne possède pas, peut faire ou ne peut pas faire.

Nous savons que nous pouvons ajouter des méthodes aux objets,
et à la 7ème ligne nous ajoutons la méthode 'aboyer' à 'copain'.
 Lancez et vous verrez un 'Woof' affiché quand 'pote' aboie.
 Remarquez cependant ce qu'il se passe lorsque nous essayons de faire aboyer 'snoopy' à la 17ème ligne.
 Même si snoopy appartient à la classe 'chien',
 il ne sait pas aboyer parce qu'il n'y a que 'copain' qui a 'aboyer' ajouté comme méthode.

Instructions
Pour corriger ceci, ajoutez à la ligne 15 une méthode aboyer pour l'objet snoopy.
Vous pouvez la faire comme la méthode aboyer de pote, ou taper le bruit d'aboiement que vous voulez à la place de "Woof".

Réponse:
function Chien(race) {
  this.race = race;
};

// Ici, nous créons pote et lui apprenons à aboyer
var pote = new Chien("golden Retriever");
pote.aboyer = function() {
  console.log("Woof");
};
pote.aboyer();

// Ici, nous créons snoopy
var snoopy = new Chien("Beagle");
// Nous avons besoin que vous appreniez à snoopy à aboyer ici

snoopy.aboyer = function() {
    console.log("Wouaf !");
};
// Cela provoque une erreur, parce que snoopy ne sait pas aboyer !
snoopy.aboyer();








Prototypes, à la rescousse
Ici nous avons un code similaire au dernier, mais avec une grande différence.
Au lieu d'utiliser 'pote.aboyer' pour ajouter la méthode aboyer uniquement à l'objet 'pote', on utilise 'Chien.prototype.aboyer'.

Exécutez, et cette fois, 'pote' et 'snoopy' peuvent bien aboyer !
'Snoopy' peut aussi aboyer même si nous n'avons pas ajouté une méthode aboyer à cet objet.
Comment cela se fait-il ? Parce que nous avons changé le prototype de la classe 'Chien'.
Cela apprend à tous les 'Chien's la nouvelle méthode.

En général, si on veut ajouter une méthode à la classe pour que tous les membres de la classe puissent l'utiliser,
on utilise la syntaxe suivante pour étendre le prototype :

nomClasse.prototype.nouvelleMethode =

fonction() {
conditions;
};
Instructions
Cliquez sur Sauvegarder & Envoyer pour avancer jusqu'à l'exercice suivant,
où vous vous entraînerez à manipuler des prototypes.

function Chien(race) {
  this.race = race;
};

// Ici, nous créons pote et lui apprenons à aboyer
var pote = new Chien("golden Retriever");
Chien.prototype.aboyer = function() {
  console.log("Woof");
};
pote.aboyer();

// Ici, nous créons snoopy
var snoopy = new Chien("Beagle");
/// Cette fois ça marche !
snoopy.aboyer();







Entrainement sur les prototypes
Ici, nous avons créé une nouvelle classe, Chat, et son constructeur.
Nous avons également deux chat à faire miauler, mais pour l'instant, les Chats n'ont pas de méthode miauler.

Instructions
Ajoutez une méthode miauler au prototype de Chat pour permettre à tous les chats de miauler.
Cette méthode doit afficher "Meow !" dans la console. Ensuite, appelez cette méthode sur chaque chat.

Hint
Regardez comment nous avons modifié le prototype de Chien dans lexercice précédent.
Votre méthode doit suivre le modèle de Chat.prototype.miauler = function () {};
en insérant du code pertinent entre les accolades.

Utilisez console.log pour afficher.

Appelez votre méthode miauler en utilisant le modèle objet.methode().

Réponse :
function Chat(nom, race) {
    this.nom = nom;
    this.race = race;
}

// Créons des chats !
var cheshire = new Chat("Chat Cheshire", "British Shorthair");
var gary = new Chat("Gary", "Domestic Shorthair");

// Ajoutez une méthode "miauler" à la classe Chat qui permettra
// à tous les chats d'afficher "Meow !" dans la console
Chat.prototype.miauler = function() {
    console.log("meow !");
};

// Ajoutez du code ici pour faire miauler vos chats !
cheshire.miauler();
gary.miauler();





Tout est dans les gènes
Dans la programmation orientée objet, l'héritage permet à une classe de voir et d'utiliser
les méthodes et les propriétés dune autre classe.
Vous pouvez vous le représenter comme un enfant capable d'utiliser l'argent de ses parents parce quil hérite de leur argent.

Nous allons en apprendre plus sur lhéritage en continuant cette leçon,
mais pour linstant rafraîchissons-nous la mémoire sur le fonctionnement des classes et des objets.

Instructions
Créez une classe appelée Animal avec deux propriétés, nom et nombrePattes.
Le constructeur dAnimal devrait avoir deux paramètres dont les valeurs sont assignées à nom et nombrePattes.

Ensuite, changez le prototype dAnimal et ajoutez une méthode disNom qui affiche dans la console Bonjour,
mon nom est [nom], où [nom] est la valeur de nom.

Nhésitez pas à aller voir les indices pour voir des exemples de création de classes et
d'ajout de méthodes à un prototype d'objets.

Enfin, nous avons fourni les deux dernières lignes pour tester votre constructeur et votre méthode disNom.
Ne les modifiez pas !

Réponse:
// Créez une classe Animal ici
function Animal(nom, nombrePattes) {
    this.nom = nom;
    this.nombrePattes = nombrePattes;
}

// Créez la méthode disNom pour Animal
Animal.prototype.disNom = function() {
    console.log("Bonjour, mon nom est " + this.nom);
}

// code fourni pour tester les constructeurs et méthodes précédentes
var pingouin = new Animal("Captain Cook", 2);
pingouin.disNom();







La marche des Pingouins
Imaginons que nous avons affaire à beaucoup de Pingouins.
Il serait terriblement pratique de créer une classe Pingouin
pour pouvoir éventuellement lui ajouter plus tard des méthodes uniques aux pingouins
et éviter de le confondre avec la classe Animal.

Instructions
Créez un tout nouveau constructeur de classe Pingouin à partir de la ligne 11.
Un pingouin est un animal donc il devrait aussi avoir les propriétés nom et nombrePattes,
ainsi que la méthode disNom qui affiche la même chaîne de caractère que la méthode disNom de Animal.

Nous nen avons pas encore terminé avec les animaux,
donc nous avons inclus le constructeur Animal et sa méthode disNom.
Testez votre code de Pingouin sur les deux dernières lignes.

Réponse:
function Animal(nom, nombrePattes) {
    this.nom = nom;
    this.nombrePattes = nombrePattes;
}
Animal.prototype.disNom = function() {
    console.log("Bonjour, mon nom est " + this.nom);
};


// Créez un constructeur de Pingouin ici
function Pingouin(nom, nombrePattes) {
    this.nom = nom;
    this.nombrePattes = nombrePattes;
};

// créez une méthode disNom pour les pingouins ici
Pingouin.prototype.disNom = function() {
    console.log("Bonjour, mon nom est " + this.nom);
};

// notre code de test
var leCapitaine = new Pingouin("Captain Cook", 2);
leCapitaine.disNom();




Ne répétez pas les pingouins
Créer une toute nouvelle classe Pingouin, cétait sympa,
mais nous avons fini par recopier beaucoup de code que nous avions déjà écrit pour la classe Animal.
Cela va contre le principe de programmation "Ne vous répétez pas"
("Don't repeat yourself" en Anglais, souvent désigné par l'acronyme "DRY").

L'héritage peut nous aider ici ! Un Pingouin est un Animal,
donc il devrait avoir toutes les mêmes propriétés et méthodes qu'un Animal.
Dès que la relation X est un Y existe, il y a de bonnes chances que nous devions utiliser l'héritage.

Souvenez-vous, l'héritage nous permet de voir et d'utiliser les propriétés et les méthodes d'une autre classe.
Pour dire que Pingouin hérite d' Animal, nous devons définir le prototype de Pingouin comme un Animal.

Instructions
Créez une nouvelle classe Pingouin.
Le constructeur de Pingouin peut être plus particulier que le générique constructeur dAnimal
puisque tous les pingouin ont deux pattes.
Votre constructeur devrait donc prendre seulement un unique paramètre nom,
et dans le constructeur vous devriez donner pour valeur 2 à nombrePattes.

Définissez le prototype de la classe Pingouin
comme une nouvelle instance dAnimal en ajoutant la ligne suivante après avoir écrit le constructeur :

Pingouin.prototype = new Animal();

Cela signifie que Pingouin hérite des propriétés et méthodes dAnimal.

Réponse:
// la fonction originale Animal et la méthode disNom
function Animal(nom, nombrePattes) {
    this.nom = nom;
    this.nombrePattes = nombrePattes;
}
Animal.prototype.disNom = function() {
    console.log("Bonjour, mon nom est " + this.nom);
};

// Créez un constructeur de Pingouin ici
function Pingouin(nom) {
    this.nom = nom;
    this.nombrePattes = 2;
}

// Définissez ce prototype comme une nouvelle instance de Animal
Pingouin.prototype = new Animal();




La magie noire (et blanche) des pingouins
Maintenant, un peu de magie noire pour voir le pouvoir de l'héritage !

Nous n'avons jamais défini de méthode disNom pour Pingouin, mais qu'arrive-t-il si nous essayons de l'appeler ?

Instructions
Créez un objet Pingouin avec pour nom de variable pingouin, et le nom que vous voulez.
Appelez ensuite pingouin.disNom( );.
Enfin, soyez ébahi.

Réponse :
// la fonction originale Animal et la méthode disNom
function Animal(nom, nombrePattes) {
    this.nom = nom;
    this.nombrePattes = nombrePattes;
}
Animal.prototype.disNom = function() {
    console.log("Bonjour, mon nom est " + this.nom);
};

// Créez un constructeur de Pingouin ici
function Pingouin(nom) {
    this.nom = nom;
    this.nombrePattes = 2;
}

// Définissez ce prototype comme une nouvelle instance de Animal
Pingouin.prototype = new Animal();

var pingouin = new Pingouin ("Blabla");

pingouin.disNom();







Le haut de la chaîne Alimentaire-je-veux-dire-Prototype.
Un pingouin est un animal et un manchot empereur est un pingouin.
Est-ce quun manchots empereurs est un animal aussi ? Bien sûr!

La "chaîne de prototype" en JavaScript sait aussi bien.
Si JavaScript rencontre quelque chose quil ne peut pas trouver dans les méthodes ou propriétés de la classe actuelle,
il recherche dans la * chaîne de prototype * pour voir si elle est définie dans une classe mère.
Cela permet d'aller vers le haut jusqu'à ce quon atteint le puissant Object.prototype (voir plus loin).
Par défaut, toutes les classes héritent directement de Objet,
si nous ne changeons pas le prototype de la classe, comme nous lavons faire avec les classes Penguinet Empereur.

Instructions
Voyons comment marche la chaîne de prototypes! Nous avons défini des classes et modèle d'héritage:
Empereur hérite de Pingouin qui hérite d' Animal. Nous avons également créé une instance de la classe Empereur.

En ne modifiant que les lignes 22 à 24, compléter les console.log détats pour afficher les réponses appropriées.

Rappelez-vous comment la chaîne de prototype fonctionne:
si une propriété nest pas définie pour une classe,
la chaîne de prototype de cette classe sera traversée vers le haut
jusqu'à ce que l'on trouve (ou pas) dans une classe parent la propriété.

Réponse :
// classes originales
function Animal(nom, nombrePattes) {
    this.nom = nom;
    this.nombrePattes = nombrePattes;
    this.estVivant = true;
}
function Pingouin(nom) {
    this.nom = nom;
    this.nombrePattes = 2;
}
function Empereur(nom) {
    this.nom = nom;
    this.dit = "coin coin coin";
}

// installation de la chaine de prototypes
Pingouin.prototype = new Animal();
Empereur.prototype = new Pingouin();

var monEmpereur = new Empereur("Jules");

console.log( monEmpereur.dit ); // devrait afficher "coin coin coin"
console.log( monEmpereur.nombrePattes ); // devrait afficher 2
console.log( monEmpereur.estVivant ); // devrait afficher true





Ouvert au publique
En JavaScript, toutes les propriétés d'un objet sont automatiquement public.
Public signifie qu'ils peuvent être accessibles en dehors de la classe.
Pensez à ces propriétés comme des informations d'une classe qui sont prête à être partager.

Regardez la classe Personne. Elle dispose de 3 propriétés publiques: prenom, nom et age.
Aux lignes 8 et 9, nous accédons au prenom et nom de John et les affecter à monPrenomet monNom.

Notez que nous sommes libres d'accéder aux propriétés prenom et nom.
C'est ce que nous entendons lorsque nous disons qu'elles sont publiques.

Instructions
Déclarez une variable appelée 'monAge' et utilisez-là pour classer la propriété de l'âge de l'objet 'john'.


function Personne(prenom,nom,age) {
   this.prenom = prenom;
   this.nom = nom;
   this.age = age;
}

var john = new Personne('John','Smith',30);
var monPrenom = john.prenom;
var monNom = john.nom;

//Declaration de la variable "monAge" affecter à la variable "age" de l'objet john
var monAge = john.age;





Variable privées
Bien ! Mais que se passe-t-il si un objet veut conserver des informations cachées?

Tout comme les fonctions qui peuvent avoir des variables locales
qui ne sont accessibles que depuis l'intérieur de la fonction, les objets peuvent avoir des variables privées.
Les variables privées sont des informations que vous ne voulez pas partager publiquement
et qui ne sont accessibles directement que depuis l'intérieur de la classe.

La classe Personne a été modifiée pour avoir une variable privée appelée compteEnBanque.
Remarquez qu'elle ressemble à une variable normale,
mais elle est définie à l'intérieur du constructeur de Personne sans utiliser this mais en utilisant var.
Cela fait de compteEnBanque une variable privée.

Instructions
Créez un objet john en utilisant le constructeur Personne. Il peut avoir n'importe quels nom et age.

Ensuite, essayez d'afficher son compteEnBanque. Que se passe-t-il ?


Réponse : impossible dafficher le compte en banque
function Personne(prenom, nom, age) {
   this.prenom = prenom;
   this.nom = nom;
   this.age = age;
   var compteEnBanque  = 7500;
}

// Créez votre Personne
var john = new Personne("John", "Paul", 13);

// Essayez d'afficher son compteEnBanque
console.log(john.compteEnBanque);






Accéder aux variables privées
Bien que nous ne puissions pas accéder directement aux variables privées depuis l'extérieur de la classe,
il y a un moyen d'y accéder. Nous pouvons définir une méthode publique qui retourne la valeur de la variable privée.

Instructions
Ici, nous avons inclus un code similaire à celui de la dernière fois, mais en ajoutant une méthode getCompte.
Modifiez getCompte pour quelle retourne compteEnBanque.

Ensuite sur la ligne 17, créez une nouvelle variable appelée monCompte et
donnez-lui pour valeur la valeur que contient le compte en banque de John.
Vous pouvez le faire en appelant votre nouvelle méthode getCompte sur john. Ensuite, affichez monCompte.

La ligne 14 devrait toujours afficher undefined !

Hint
Sur la ligne 9, retournez la variable compteEnBanque.

Ensuite sur la ligne 17, appelez la méthode john.getCompte();
et enregistrez le résultat dans une nouvelle variable appelée monCompte.
Utilisez console.log sur monCompte.

Réponse :
function Personne(prenom,nom,age) {
   this.prenom = prenom;
   this.nom = nom;
   this.age = age;
   var compteEnBanque = 7500;

   this.getCompte = function() {
      // votre code doit retourner le compteEnBanque
        return compteEnBanque;
   };
}

var john = new Personne('John','Smith',30);
console.log(john.compteEnBanque);

// Créez une nouvelle variable monCompte qui appelle getCompte()
john.getCompte();

var monCompte = john.getCompte();
console.log(monCompte);






Méthodes privées
Qu'est ce qui a permis à ce code de fonctionner ?
On ne peut accéder aux variables privées d'un objet qu'avec des méthodes qui font partie de cet objet.
Donc nous utilisons simplement une méthode publique de l'objet pour accéder à une variable privée !

Les méthodes peuvent également être privées à une classe et donc inaccessibles depuis l'extérieur de la classe.
Changer this.returnCompte de l'exercice précédent en var returnCompte rend la méthode privée.
Si vous exécutiez le programme pour essayer d'accéder à la méthode, vous obtiendriez une erreur undefined cette fois.

La façon d'accéder à une méthode privée est similaire à celle pour accéder à une variable privée
Vous devez créer une méthode publique dans la classe qui retourne la méthode privée.

Instructions
Créez une méthode appelée demandeCaissier à l'intérieur de la classe Personne qui retourne la méthode returnCompte.
Cela signifie qu'elle retourne la méthode elle-même,
et PAS le résultat de l'appel de cette méthode. Vous ne devez PAS mettre de parenthèses après returnCompte.

Puisque demandeCaissier retourne une méthode, nous avons besoin de l'appeler pour l'utiliser.
C'est ce que fait var monCompte = maMethodeCompte();.

Réponse:
function Personne(prenom,nom,age) {
   this.prenom = prenom;
   this.nom = nom;
   this.age = age;
   var compteEnBanque = 7500;

   var returnCompte = function() {
      return compteEnBanque ;
   };

   // créez la nouvelle fonction ci-dessous
   this.demandeCaissier = function() {
        return returnCompte;
    }
}

var john = new Personne('John','Smith',30);
console.log(john.returnCompte);
var maMethodeCompte = john.demandeCaissier();
var monCompte = maMethodeCompte();
console.log(monCompte);







Envoyer des arguments
La fonction demandeCaissier a été modifiée au sein de la classe Personne pour vous donner
directement la balance de votre compte en banque.
Cependant, elle a maintenant besoin du mot de passe du compte pour retourner compteEnBanque.

Instructions
Créez une variable monCompte qui appelle la fonction demandeCaissier avec un argument en mot de passe, 1234.

Réponse :
function Personne(prenom,nom,age) {
   this.prenom = prenom;
   this.nom = nom;
   this.age = age;
   var compteEnBanque = 7500;

   this.demandeCaissier = function(mdp) {
     if (mdp == 1234) {
         return compteEnBanque;
     }
     else {
        return "Mot de passe faux.";
     }
   };
}

var john = new Personne('John','Smith',30);
/* La variable monCompte doit accéder à demandeCaisser()
  avec un mot de passe en argument */

  var monCompte = john.demandeCaissier(1234);








La boucle for-in
Les objets ne sont pas si compliqués, quand on y pense !

Rappelez-vous que vous pouvez découvrir le type dune variable en utilisant typeof maVariable.
Les types qui nous intéressent pour le moment sont les "object", les "string" et les "numbers".

Rappelez-vous de la boucle for-in :

for(var x in obj) {
executeSomething();
}
Elle parcourira toutes les propriétés de obj un par un, et assignera à x les noms de propriétés à chaque tour.

Combinons nos connaissances de ces concepts.

Instructions
Examinez lobjet langues. Trois propriétés sont des chaînes de caractères, et une est un nombre.

Utilisez une boucle for-in pour afficher trois façons de dire bonjour.
Dans la boucle, vous devrez contrôler si la valeur de la propriété est une chaîne de caractère pour ne pas afficher de nombre.

Réponse :
var langues = {
    anglais: "Hello!",
    francais: "Bonjour!",
    pasUneLangue: 4,
    espagnol: "Hola!"
};

// Affichez bonjour dans les 3 différentes langues
for (var x in langues) {
    if (typeof langues[x] === "string") {
        console.log(langues[x]);
    }
};





Bonjour ? Oui, c'est Chien.
Nous devrions maintenant savoir combien l'utilisation de prototype est cool :
nous pouvons définir une méthode pour une classe, et n'importe quelle instance de cette classe
(c'est à dire un objet créé en utilisant le constructeur de cette classe) peut utiliser cette méthode.

Rappelez-vous que les classes et prototypes sont importants en POO !

Instructions
Ajoutez la méthode disBonjour à la classe Chien en étendant son prototype.

disBonjour devrait afficher dans la console : "Bonjour, je suis un [espece]", où [espece] est lespèce du chien.

Hint
Rappelez vous de comment on avait ajouté une méthode à la classe Chien :

Chien.prototype.aboyer = function() {
    console.log("Ouaf");
};
Pour accéder à l'espèce d'un chien depuis la méthode, utilisez this.espece.

Réponse :
function Chien(espece) {
    this.espece = espece;
    Chien.prototype.disBonjour = function() {
        console.log("Bonjour, je suis un " + espece); ou this.espece
    }
};

// ajoutez la méthode disBonjour à la classe Chien
// pour que tous les chiens puissent dire bonjour


var votreChien = new Chien("golden retriever");
votreChien.disBonjour();

var monChien = new Chien("dachshund");
monChien.disBonjour();






Tellement meta que tu peux pas comprendre
Vous vous souvenez que nous disions que tout objet JavaScript vient avec un équipement tout prêt ?
Une partie de cet équipement était la méthode hasOwnProperty disponible pour tous les objets. Maintenant,
voyons d'où elle vient...

Si nous prenions un simple objet (c'est à dire créé du constructeur de classe),
rappelez-vous qu'il hérite automatiquement de Object.prototype. Pourrait-ce être la source de hasOwnProperty ?
Comment le savoir ?

Instructions
Voyons d'abord de quel type est Object.prototype. Faites-le sur la ligne 2 et sauvegardez-le dans typePrototype.

Si tout se passe bien, vous devriez réaliser que Object.prototype est lui-même un objet !
Et puisque tous les objets partagent la méthode hasOwnProperty,
il est simple de vérifier que hasOwnProperty vient de Object.prototype.
Faites-le sur la ligne 6, le résultat pourrait vous surprendre.

?
Hint
Pour voir de quel type Object.prototype est, nous utilisons typeof Object.prototype.

La propriété que nous voulons vérifier est ici "hasOwnProperty", donc la ligne 6 devrait ressembler à :

Object.prototype.hasOwnProperty("hasOwnProperty");

Réponse :
// Mais qu'est ce que ce "Object.prototype", au fait ?
var typePrototype = typeof Object.prototype
console.log(typePrototype);

// Maintenant, examinons-le
var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
console.log(hasOwn);





Privé
Rappelez-vous que :

Les propriétés publiques sont accessibles depuis l'extérieur de la classe
Les propriétés privées ne sont accessibles que depuis l'intérieur de la classe.
En utilisant la notation constructeur, une propriété déclarée this.propriete = "uneValeur;" sera publique,
tandis qu'une propriété déclarée avec var propriete = "valeurCachee"; sera privée.

Dans cet exercice, cliquez sur executer et vous verrez que toutes vos notes sont accessibles !
Vous ne voulez que laisser aux gens le droit de connaître votre GPA.

Instructions
Modifiez monBulletinEtudiant pour qu'aucune note ne puisse être affichée dans la console dans la boucle for-in.

Cependant, getGPA doit continuer à fonctionner correctement sur la dernière ligne.

Réponse :
function bulletinEtudiant() {
    var note1 = 4;
    var note2 = 2;
    var note3 = 1;
    this.getGPA = function() {
        return (note1 + note2 + note3) / 3;
    };
}

var monBulletinEtudiant = new bulletinEtudiant();

for(var x in monBulletinEtudiant) {
    if(typeof monBulletinEtudiant[x] !== "function") {
        console.log("Mouahaha! " + monBulletinEtudiant[x]);
    }
}

console.log("Votre GPA total vaut " + monBulletinEtudiant.getGPA());








On ferme !
Vous travaillez pour un grand magasin et la caisse enregistreuse vient de tomber en panne.
Le patron est mécontent puisqu'il ne peut pas faire d'argent.

Pour sauver la mise, vous laissez échapper à votre patron que vous connaissez le JavaScript et
pouvez créer une caisse virtuelle rapide, en attendant que les pontes vous envoient du soutien.

Votre patron nen revient pas et vous demande de vous y mettre sur le champ.

Instructions
Créez un objet appelé caisse avec une propriété total initialisée à 0.

Changez ensuite cette propriété total à 2.99, en utilisant un point.

Reponse :
var caisse = {
    total: 0
}
//Créez un objet appelé "caisse"
//et créez une propriété "total"
//Utiliser un point change la propriété "total"
caisse.total = 2.99







Les ajouter à la main ?
Super ! Votre patron voit que votre caisse peut enregistrer un total. Mais ce n'est pas encore suffisant.

Votre patron veut un moyen d'ajouter le coût de chaque élément à la main.
Nous avons écrit une méthode ajout pour vous. Il y a deux choses que vous devriez remarquer :

Nous utilisons les notations littérales pour inclure la méthode ajout.
Nous avons utilisé l'opérateur +=. C'est un raccourci équivalent à
  this.total = this.total + coûtElement;
De manière générale, a += b signifie "ajoute b à a et met le résultat de l'addition dans a".
Cette syntaxe est également utilisable pour les autres fonctions arithmétiques de base :
-=, *=, et /= font ce que vous pouvez attendre delles.

Instructions
Utilisez la fonction ajout pour sommer le prix des quatre articles suivants.
Oeufs 0.98
Lait 1.23
Magazine 4.99
Chocolat 0.45
Si nous appelons la méthode une seule fois, elle najoutera que le premier élément. Pour ajouter le prix des quatre éléments,
combien de fois devons-nous appeler la méthode ?

Réponse :
var caisse = {
    total:0,
    ajouter: function(coutElement){
        this.total += coutElement;
    }
};
// Appelez votre méthode ajouter sur vos quatre éléments
caisse.ajouter(0.98);
caisse.ajouter(1.23);
caisse.ajouter(4.99);
caisse.ajouter(0.45);
// Affichez le total de la note
console.log('Votre total est de '+ caisse.total);






Mémoire immédiate
Mais cette méthode ne fonctionnera que si vous arrivez à vous souvenir de tous les prix du magasin.
Nous avons besoin de quelque chose qui ressemblerait à un code barre,
où connaître uniquement le nom de lélément ajouterait automatiquement son prix au total.

Nous allons donc créer une méthode appelée scan. Cette méthode prendra un paramètre element et
ajoutera le prix de cet element au total. element est une chaîne de caractères.

Nous allons également utiliser une déclaration switch. Jusqu'ici,
nous n'avons probablement utilisé que des déclarations if-else. Le 'switch' fonctionne de la même manière.

Par exemple, si l'élément est "oeufs" (ligne 8), nous pouvons appeler la méthode ajouter,
lui envoyer 0.98 comme prixElement. Cela devrait ajouter 0.98 à caisse.total.
Si l'élément est plutôt "lait", ou "chocolat" ou "magazine", le prixElement correspondant sera ajouté.
Remarquez qu'il n'y a besoin daucune condition par défaut (default) pour ce switch.

Instructions
Créez la méthode ajouter, qui ne prend quun paramètre, coutElement. Elle ajoutera coutElement au total.
Nous avons partiellement écrit la méthode scan pour vous et commencé une déclaration switch. Ajoutez les deux éléments suivants à la déclaration switch :
"magazine", 4.99
"chocolat", 0.45
Pour finir, utilisez la méthode scan pour acheter 2 oeufs et 3 magazines.

Réponse :
var caisse = {
    total:0,
// Ecrivez la méthode ajouter ci-dessous :
    ajouter: function(coutElement) {
        this.total += coutElement;
    },

    scan: function(element) {
        switch (element) {
        case "oeufs":
            this.ajouter(0.98);
            break;

        case "lait":
            this.ajouter(1.23);
            break;
        // Ajoutez deux autres éléments ci-dessous
        case "magazine":
            this.ajouter(4.99);
            break;
        case "chocolat":
            this.ajouter(0.45);
            break;
        }
        return true;
    }
};

// Scannez 2 oeufs et 3 magazines
caisse.scan("oeufs");
caisse.scan("oeufs");
caisse.scan("magazine");
caisse.scan("magazine");
caisse.scan("magazine");
// Affichez le total
console.log('Votre total est de '+caisse.total);






Et je dois le scanner plus dune fois ?
Serait-ce un sourire sur le visage du patron ?
Du moins, il y en avait un jusqu'à ce qu'il réalise que votre système requiert que chaque article soit scanné individuellement.
Il trouve cela plutôt inefficace et vous êtes probablement d'accord.
Soyons réaliste — c'était plutôt ennuyeux d'avoir à appeler la méthode scan cinq fois dans l'exercice précédent !

Que pouvons-nous y faire ? Quelle est la limite de la méthode scan ? Eh bien, elle n'a qu'un seul paramètre, element,
et vous ne pouvez pour l'instant rien préciser sur la quantité.

Instructions
Modifiez la méthode scan pour qu'elle puisse ajouter la bonne somme à total lorsque que l'utilisateur lui envoie la quantité de chaque élément.
Puisque vous n'informez pour l'instant pas scan sur la quantité commandée, il serait pratique pour vous d'ajouter un autre paramètre.

Scannez 4 de chacun des éléments grâce à votre méthode scan améliorée. Avec la précédente,
nous aurions dû appeler la méthode scan 16 fois ! Maintenant, il vous suffit de le faire 4 fois.

Réponse :
var caisse = {
    total:0,
    ajouter: function(coutElement){
        this.total += coutElement;
    },
    scan: function(element, quantite) {
        switch (element) {
        case "oeufs": this.ajouter(0.98 * quantite); break;
        case "lait": this.ajouter(1.23 * quantite); break;
        case "magazine": this.ajouter(4.99 * quantite); break;
        case "chocolat": this.ajouter(0.45 * quantite); break;
        }
    }
};

// scannez chaque élément 4 fois
caisse.scan("oeufs", 4);
caisse.scan("lait", 4);
caisse.scan("magazine", 4);
caisse.scan("chocolat", 4);


// Affichez le total de la note
console.log('Votre total est de '+ caisse.total);







Bip Biiip
Le patron regarde son bippeur et voit que la caisse 8 a besoin daide.
Ils ont scanné un élément trop de fois et doivent annuler la dernière transaction.

Il se tourne vers vous et dit : "Ok, le ninja du JavaScript ! On fait quoi, maintenant ?!"

Instructions
Nous avons besoin de garder en mémoire le prix de la dernière transaction. Modifiez la méthode ajouter pour le faire.
Le prix doit être gardé dans une propriété appelée prixDerniereTransaction.

Ajoutez une méthode appelée annuleDerniereTransaction qui soustrait le prix de la dernière transaction du total.

Ensuite, utilisez cette nouvelle méthode pour supprimer le dernier objet scanné. Enfin, scannez seulement 3 éléments du même type à la place.

Réponse :
var caisse = {
    total:0,
    //N'oubliez pas d'ajouter votre propriété
    prixDerniereTransaction: 0,
    ajouter: function(prixElement) {
        this.total += prixElement;
        this.prixDerniereTransaction = prixElement;
    },
    scan: function(element, quantite) {
        switch (element) {
        case "oeufs": this.ajouter(0.98 * quantite); break;
        case "lait": this.ajouter(1.23 * quantite); break;
        case "magazine": this.ajouter(4.99 * quantite); break;
        case "chocolat": this.ajouter(0.45 * quantite); break;
        }
        return true;
    },
    //Ajoutez la méthode annuleDerniereTransaction ici
    annuleDerniereTransaction: function() {
        this.total -= this.prixDerniereTransaction;
    }

};

caisse.scan('oeufs',1);
caisse.scan('lait',1);
caisse.scan('magazine',1);
caisse.scan('chocolat',4);

//Annulez la dernière transaction et ajoutez 3 à la place
caisse.annuleDerniereTransaction();
caisse.scan("chocolat",3);

// Affichez le total de la note
console.log('Votre total est de '+ caisse.total);






Travailler mieux pour gagner plus
Super ! Le magasin recommence à faire de l'argent.
Le patron est tellement content qu'il vient de vous donner une réduction du personnel dune valeur de 20%.

Cependant, le système actuel ne sait pas comment appliquer différents niveaux de réductions pour le personnel.
Maintenant le reste du personnel est mécontent et demande à ce que vous l'amélioriez.

Voyons comment le personnel peut toucher sa réduction bien méritée.

Instructions
Créez un constructeur d'objet appelé MembreDuPersonnel qui prend deux paramètres :
nom et pourcentageReduc. Sauvegardez ensuite les propriétés (publiques) nom et pourcentageReduc en leur donnant ces paramètres pour valeur.

Pour vous aider, nous avons déjà créé deux employés utilisant ce constructeur.
Les réductions de Sally et Bob ont déjà été mises en place : Sally a une réduction de 5% et Bob une de 10%.

Créez une nouvelle instance de lobjet appelé moi avec votre monstrueuse réduction de 20%.

Réponse :
// Créez un constructeur pour la classe MembreDuPersonnel
function MembreDuPersonnel(nom, pourcentageReduc) {
    this.nom = nom,
    this.pourcentageReduc = pourcentageReduc
}

var sally = new MembreDuPersonnel("Sally",5);
var bob = new MembreDuPersonnel("Bob",10);

// Créez un MembreDuPersonnel appelé moi
var moi = new MembreDuPersonnel("lili",20);








C'est bien mérité !
Wow ! Après cette longue journée de travail acharné, appliquons maintenant notre réduction bien méritée.
Comme nous avons désormais des objets pour représenter le personnel, mettons à jour notre caisse pour qu'elle applique les réductions.

Instructions
Sur la ligne 10, créez une objet appelé moi, du type MembreDuPersonnel pour vous, avec une réduction de 20%.

Créez une nouvelle méthode appelée appliqueReduction dans l'objet caisse qui prend le paramètre employe. Quand cette méthode est appelée,
caisse doit appliquer une réduction sur le total égale au pourcentageReduc du membre de l'équipe.

Sous le commentaire, appliquez votre réduction du personnel en appelant votre nouvelle méthode appliqueReduction en lui passant lobjet moi.


Réponse :
function MembreDuPersonnel(nom,pourcentageReduc){
this.nom = nom;
this.pourcentageReduc = pourcentageReduc;
}

var sally = new MembreDuPersonnel("Sally",5);
var bob = new MembreDuPersonnel("Bob",10);

// Créez encore un objet 'moi' avec une reduction de 20%
var moi = new MembreDuPersonnel("Hai",20);

var caisse = {
    total:0,
    prixDerniereTransaction: 0,

    ajouter: function(prixElement){
        this.total += (prixElement || 0);
        this.prixDerniereTransaction
        = prixElement;
    },

    scan: function(element,quantite){
        switch (element){
            case "oeufs": this.ajouter(0.98 * quantite); break;
            case "lait": this.ajouter(1.23 * quantite); break;
            case "magazine": this.ajouter(4.99 * quantite); break;
            case "chocolat": this.ajouter(0.45 * quantite); break;
        }
        return true;
    },

    annuleDerniereTransaction : function(){
        this.total -= this.prixDerniereTransaction;
        this.prixDerniereTransaction = 0;
    },
// Créez une nouvelle methode appliqueReduction ici
    appliqueReduction:function(employe){
        this.total -= this.total * (employe.pourcentageReduc/100);
    }
};

caisse.scan('oeufs',1);
caisse.scan('lait',1);
caisse.scan('magazine',3);
// Appliquez votre réduction de personnelle en passant l'objet 'moi'
// à appliqueReduction
caisse.appliqueReduction(moi);

// Affichez le total de la note
console.log('Votre total est de '+ caisse.total);
