// ========================================================================================================
// variable (types : string, number, boolean)

let episodeTitle = "Batman";
let episodeDuration = 45;
let hasBeenWatched = false;

const hoursPerDays = 24; // const pour une constante : non modifiable

// let et const ont un scope de bloc : elles existent dans le bloc {} où elles sont définies et dans les 
// sous-blocs de celui-ci.
// /!\ var peut être considéré comme une ancienne version de let et a un scope de fonction

// ========================================================================================================
// object

let myBook = {
    title: "L'Histoire de Tao",
    author: "Will Alexander",
    numberOfPages: 250,
    isAvailable: true
};

let bookTitle = myBook.title;  // "L'Histoire de Tao"
let bookPages = myBook.numberOfPages  // 250

// ========================================================================================================
// class and methods

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    
    showBalance() {
        console.log("Solde: " + this.balance + " EUR");
    }
    
    deposit(amount) {
        console.log("Dépôt de " + amount + " EUR");
        this.balance += amount;
        this.showBalance();
    }
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Retrait refusé !");
        } else {
            console.log("Retrait de " + amount + " EUR");
            this.balance -= amount;
            this.showBalance();
        }
    }
}

const newAccount = new BankAccount("Will Alexander", 500);

newAccount.showBalance(); // imprime "Solde: 500 EUR" à la console
newAccount.withdraw(200); // il va rester 300 et si j'essaye de retirer 501 il me dit que je ne peux pas

// /!\ le constructor est la première fonction lancée au chargement de l'objet, ici elle attend 3 paramètres

// ou methodes "statiques" : qui ne nécessite pas d'instance de la classe en question, ces classes n'ont donc
// pas besoind de constructor

class BePolite {
    static sayHello() {
        console.log("Hello!");
    }
    static sayHelloTo(name) {
        console.log("Hello " + name + "!");
    }
    static add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
}

BePolite.sayHello(); // imprime "Hello!""
BePolite.sayHelloTo("Will"); // imprime "Hello Will!""
const sum = BePolite.add(2, 3); // sum = 5

// En effet ici, pas de const test = new BePolite...

// ========================================================================================================
// array (fait partit du groupe des collections)

let firstGuest = 'toto';
let secondGuest= 'tata';
let guests = [];

guests = [firstGuest, secondGuest, 'tutu'];

// /!\ tableau d'objet possible aussi mais il travail avec la référence de l'objet pas avec ses valeurs
// donc si je modifie l'objet APRES l'avoir stocké dans un tableau, le tableau est LUI AUSSI modifié. 
// Ce qui n'est pas le cas pour un tableau de string par exemple.
// On dit alors que les types string, number et boolean sont passés par VALEURS alors que le type objet
// est passé par REFERENCES

let artistProfile = {
    name: "Tao Perkington",
    age: 27,
    available: true
};

let allProfiles = [artistProfile]; // nouveau tableau contenant l'objet ci-dessus

artistProfile.available = false; // modification de l'objet

console.log(allProfiles) // affiche { nom: "Tao Perkington", âge: 27, disponible: false }

// alors que
let numberOfGuests = 20;

let totalNumberOfGuests = numberOfGuests; // 20

// methods
myTab.push("glou"); // ajouter glou à la fin
myTab.unshift("glou"); // ajouter glou au début
myTab.pop(); // supprimer le dernier élément

console.log(myTab.lentgh) // sa longueur

// ========================================================================================================
// conditions

let userLoggedIn = true;

if (userLoggedIn) {
    console.log("Utilisateur connecté!");
} else {
    console.log("Alerte, intrus!");
}

// ou

const numberOfSeats = 30;
let numberOfGuests = 25;

if (numberOfGuests == numberOfSeats) {
    // tous les sièges sont occupés
} else if (numberOfGuests < numberOfSeats) {
    // autoriser plus d'invités
} else {
    // ne pas autoriser de nouveaux invités
}

// /!\ Egalité :
// simple 5 == "5" compare les valeurs => true.
// stricte 5 === "5" compare valeurs ET types => false car number à gauche et string à droite.
// De même pour != ou !==.
// Pour le reste : && et, || ou, ! non, </> inf/sup, <= / >= inf/sup ou égale à

switch (firstUser.accountLevel) {
    case 'normal':
        console.log('You have a normal account!');
        break; 
    case 'premium':
        console.log('You have a premium account!');
        break;
    case 'mega-premium':
        console.log('You have a mega premium account!');
        break;
    default:
        console.log('Unknown account type!');
}

// /!\ si pas de break le programme va lire l'instruction suivante : jusqu'à tomber sur un break.


// ========================================================================================================
// loop

const numberOfPassengers = 10;

for (let i = 0; i < numberOfPassengers; i++) {
    console.log("Passager embarqué !");
}

console.log("Tous les passagers sont embarqués !");

// ou : for in, je les fais tous par contre

const passengers = [
    "Will Alexander",
    "Sarah Kate'",
    "Audrey Simon",
    "Tao Perkington"
]

for (let i in passengers) {
    console.log("Embarquement du passager " + passengers[i]);
}

// ou : for of, si l'indice n'a pas d'importance car je veux tout récuperer dans l'ordre de toute façon

const passengers = [
    {
        name: "Will Alexander",
        ticketNumber: 209542
    },
    {
        name: "Sarah Kate",
        ticketNumber: 169336
    },
    {
        name: "Audrey Simon",
        ticketNumber: 779042
    },
    {
        name: "Tao Perkington",
        ticketNumber: 703911
    }
]

for (let passenger of passengers) {
    console.log('Embarquement du passager ' + passenger.name + ' avec le ticket numéro ' + passenger.ticketNumber);
}

// /!\ for of, contrairement à for in, ou for simple, passenger n'est pas un indice. Si je l'affiche
// au deuxième passage de boucle j'obtiens passengers[2] pas 2. Donc for of simplifie l'écriture mais est inadapté
// si l'indice est nécessaire pour une autre opération (ex : si je dois parcourir deux tableaux). Si je veux
// ajouter des sièges tous les 10 passagers ici, je dois rajouter un compteur car rien ne m'indique le nombre de
// tours de boucle. Avec for in c'est faisable. La limite par contre c'est que i parcours tous les éléments de 
// la variable donc inadapté si ce n'est pas ce que je veux car je vais perdre du temps sur des cases inintéressantes.
// REMARQUE : du coup for in et for of ne peuvent servir que pour des tableaux et offrent moins de souplesse mais
// permettent une meilleure lisibilité.

// ou : while

let seatsLeft = 10;
let passengersStillToBoard = 8;

let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
    passengersBoarded++; // un passager embarque
    passengersStillToBoard--; // donc il y a un passager de moins à embarquer
    seatsLeft--; // et un siège de moins
}

console.log(passengersBoarded); // imprime 8, car il y a 8 passagers pour 10 sièges

// ========================================================================================================
// errors

try {
    // code susceptible à l'erreur ici
} catch (error) {
    // réaction aux erreurs ici
}

// ========================================================================================================
// functions

function name (parameters){ 
	code;
	return returnValue;
}

name(arguments);

// ou, forme plus récente :
const name = (parameters) => {
	code;
	return returnValue;
}

let result = name(arguments);
console.log(result);

// /!\ tableau et objets travaillent avec des références, pas des valeurs => si je passe un objet à une 
// fonction pour le modifier je ne travaille pas sur une copie à retourner en sortie mais bien sur l'objet
// envoyé lui même.

// ========================================================================================================
// Exemple de récursivité

const binarySearch = (array, thingToFind, start, end) => {
    
    if (start > end) {
        return false;
    }
    
    let mid = Math.floor((start + end) / 2);
    
    if (array[mid] === thingToFind) {
        return true;
    }
    
    if (thingToFind < array[mid]) {
        return binarySearch(array, thingToFind, start, mid - 1);
    } else {
        return binarySearch(array, thingToFind, mid + 1, end);
    }
}

// ========================================================================================================
// commentraires : s'ils sont sur plusieurs lignes, peuvent être encadrés par /* com */

// ========================================================================================================
// Accèder aux éléments (elt) du DOM

const myAnchor = document.getElementById('my-anchor'); // Récupérer les elt de la balise avec l'id cible
const contents = document.getElementsByClassName('content'); // Pareil avec une classe cible (tous)
const articles = document.getElementsByTagName('article'); // Récupérer les elt avec la balise cible

// Récupérer précisément l'elt ayant la balise a à l'intérieur de la balise p de classe article au sein
// de l'id cible :
const elt = document.querySelector("#myId p.article > a"); 

// SI
<div id="parent">
    <div id="previous">Précédent</div>
    <div id="main">
        <p>Paragraphe 1</p>
        <p>Paragraphe 2</p>
    </div>
    <div id="next">Suivant</div>
</div>

const elt = document.getElementById('main');

elt.children // Récupère les enfants de la balise d'id main : ici p
elt.parentElement // Récupère les parents : ici la div parent
elt.nextElementSibling / elt.previousElementSibling // la balise qui la précède/succède

// ========================================================================================================
// Modifier les éléments du DOM

let elt = document.getElementById('main');
elt.innerHTML = "<ul><li>Elément 1</li><li>Elément 2</li></ul>"; // le contenu de l'elt d'id main devient celui là

elt.classList.add("nouvelleClasse");      // Ajoute la classe nouvelleClasse à l'elt
elt.classList.remove("nouvelleClasse");   // Supprime la classe nouvelleClasse que l'on venait d'ajouter
elt.classList.contains("nouvelleClasse"); // Retourne false car on vient de la supprimer
elt.classList.replace("oldClass", "newClass"); // Remplace oldClass par newClass si oldClass est présente sur l'elt

elt.style.color = "#fff";           // Change la couleur du texte de l'élément à blanche
elt.style.backgroundColor = "#000"; // Change la couleur de fond de l'élément en noir
elt.style.fontWeight = "bold";      // Met le texte de l'élément en gras

elt.setAttribute("type", "password");    // Change le type de l'input en un type password
elt.setAttribute("name", "my-password"); // Change le nom de l'input en my-password
elt.getAttribute("name");                // Retourne my-password

const newElt = document.createElement("div"); // Crée un elt div à placer ensuite dans le doc
let elt = document.getElementById("main");

elt.appendChild(newElt); // Ajoute la div créée à l'elt d'id main

//  ajouter / supprimer / remplacer un enfant

const newElt = document.createElement("div");
let elt = document.getElementById("main");
elt.appendChild(newElt);

elt.removeChild(newElt);    // Supprime l'élément newElt de l'élément elt
elt.replaceChild(document.createElement("article"), newElt); // Remplace l'élément newElt par un nouvel élément de type article

// ========================================================================================================
// Evènements : réaction à une action de l'utilisateur comme le clic. Il possède un nom
// et une fonction appellée Callback qui défini la réaction.

// addEventListener(<event>, <callback>) est la fonction indiquant le nom de l''évènement à écouter (suivre)
// et la fonction callback à effectuer s'il se produit. Exemple :

const elt = document.getElementById('mon-lien');    // On récupère l'élément sur lequel on veut détecter le clic
elt.addEventListener('click', function() {          // On écoute l'événement click
    elt.innerHTML = "C'est cliqué !";               // On change le contenu de notre élément pour afficher "C'est cliqué !"
});

// Ici, au clic on est redirigé sur le lien, pour l'éviter
const elt = document.getElementById('mon-lien');    // On récupère l'élément sur lequel on veut détecter le clic
elt.addEventListener('click', function(event) {     // On écoute l'événement click, notre callback prend un paramètre que nous avons appelé event ici
    event.preventDefault();                         // On utilise la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris
});

// Si l'élément est contenu dans un autre et qu'on écoute le même évènement (ex : le clic),
// déclencher l'évènement chez le parent ne déclenche rien chez l'enfant. A l'inverse, par-contre,
// déclencher l'évènement chez l'enfant le déclenche chez le parent : c'est la propagation.
// La propagation s'évite à l'aide de la méthode stopPropagation().

// ========================================================================================================
// Requêtes avec AJAX (Asynchronous JavaScript And XML) 
//(GET : recevoir, POST : créer ou modifier, PUT : modifier, DELETE : supprimer

// Création et envoi d'un requête HTTP de type GET à l'URL indiqué
var request = new XMLHttpRequest(); // Création d'un objet AJAX de type XMLHttpRequest
request.open("GET", "http://url-service-web.com/api/users"); // Ouvrir une connexion de type GET (méthode) à l'URL
request.send(); // Envoyer la requête au service WEB

// Les données récupérées sont généralement au format JSON (JavaScript Object Notation)
// OC : "Il s'agit d'un format textuel (contrairement à un format binaire plus léger mais 
//      impossible à lire à l'œil humain), se rapprochant en termes de syntaxe de celui des 
//      objets dans le langage JavaScript."

/////////////////////////////////// EXEMPLE //////////////////////////

function askWeather(){
    let request = new XMLHttpRequest(); // créer une requête
    request.open("GET","https://www.prevision-meteo.ch/services/json/paris"); // de type GET à l'URL indiqué
    request.send(); // envoie la requête
    
    request.onreadystatechange = function(){ // lors d'un changement d'état de requête
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200){ // si chargement terminé sans erreur
            let response = JSON.parse(this.responseText); // parser la réponse sous forme js (lisible)
            let weather_result = document.getElementById("weather-result"); // récupérer le lieu où afficher la réponse
            weather_result.innerHTML = '<div id="weather-result">' + response.current_condition.condition + '</div>';
            // Y afficher la réponse
        }
    }
}
  
let ask_weather = document.getElementById("ask-weather"); // récupérer le bouton à cliquer
ask_weather.addEventListener("click", askWeather); // lorsqu'on clique dessus lancer askWeather

// ========================================================================================================
// Valider les données saisies
/////////// EXEMPLE ////////////////

let codeBox = document.getElementById("code"); // Récupérer l'elt d'id code
codeBox.addEventListener('input',function(event){ // Ecouter les input de cet élément et les envoyer à la fonction
  let code = event.target.value; // Récupérer ce qui est entré en input par l'utilisateur
  let code_validation = document.getElementById("code-validation");
  let submit = document.getElementById("submit-btn");
  if (/^CODE-/.test(code)){ // Si code commence par CODE-
      code_validation = "Code valide"; // indiquer que c'est valide dans l'attribut code-validation de la div HTML
      submit.removeAttribute("disabled"); // supprimer cet attribut empêchant d'utiliser le bouton d'envoi des datas
  } else {
      code_validation = "Code invalide";
      submit.setAttribute("disabled","true"); // Remettre en place l'attribut 
  }
})

// ========================================================================================================
// Méthode POST (PUT fonctionne de la même façon)

var request = new XMLHttpRequest(); // Créer une requête
request.open("POST", "http://url-service-web.com/api/users"); // de type POST à l'url indiqué
request.setRequestHeader("Content-Type", "application/json"); // Préciser que le contenu envoyé sera du JSON
request.send(JSON.stringify(jsonBody)); // Transformer notre JS en JSON : l'inverse du parse en fait

/////////// EXEMPLE ////////////////

function send(){
    var toSend = {                                       // 2.1) Créer la variable toSend
        value: document.getElementById("value").value    // avec un champ value contenant notre entrée texte
    }

    var request = new XMLHttpRequest();                  // 2.2) créer une requête
    request.open("POST", "https://mockbin.com/request"); // de type POST à l'URL indiqué
    request.setRequestHeader("Content-Type", "application/json"); // dont le contenu envoyé sera du JSON
    request.send(JSON.stringify(toSend));                 // 2.3) envoyer toSend au format json

    request.onreadystatechange = function() {             // 2.4) lors d'un changement d'état de la requête
        var res = document.getElementById("result");      // récupérer l'elt d'id "result" dans res
        if (this.readyState == 4 && this.status == 200) { // si l'envoie de la requête est terminé et réussi
            var response = request.responseText;          // récupérer toute la réponse à la requête (en json)
            var json = JSON.parse(response);              // traduire la réponse en js (donne accès aux champs)
            json = json.postData.text;                    // récupérer le champ text du champ postData de json   
            json = JSON.parse(json);                      // le contenu du champ est en json => traduire en js
            res.textContent = json.value;                 // mettre le champ value de json dans res.textContent
        }
    };
};
    
var form = document.getElementById("button");   // 1) Ecouter le bouton grâce à son id
form.addEventListener("click", function(event){ // 2) Quand on clique dessus
    event.preventDefault();                     // Ne pas faire l'action par défaut
    send();                                     // Lancer la fonction send
});