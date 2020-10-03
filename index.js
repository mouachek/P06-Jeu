// On crée les variables pour le canvas
import {Player} from "./src/player";
import { Map } from "./src/map";

const map = new Map(6);

const nombreobstacles = 6, // On veut 6 obstacles sur le plateau
    listearmes = [];



const player1 = new Player(2, 5);

const player1 = 1, //
    player1tab = [];

const player2 = 1, //
    player2tab = [];

// Création de la fonction qui retourne un nombre aléatoire entre 0 et 99
function randomnumber() {
  return Math.floor(Math.random() * (nombreCases - 1));
}

for (let i = 0; i < nombreobstacles; i++) {
  const numerocasealeatoire = randomnumber();
  if (listeCases[numerocasealeatoire].id !== "casevide" && "player1" && "player2") {
    i--;
  } else {
    listeCases[numerocasealeatoire].id = "obstacle";
  }
}

for (let y = 0; y < player1; y++) {
  const numerocasealeatoire = randomnumber();
  if (listeCases[numerocasealeatoire].id !== "casevide" && "obstacle" && "player2") {
    y--;
  } else {
    listeCases[numerocasealeatoire].id = "player1";
  }
}

for (let y = 0; y < player2; y++) {
  const numerocasealeatoire = randomnumber();
  if (listeCases[numerocasealeatoire].id !== "casevide" && "obstacle" && "player1") {
    y--;
  } else {
    listeCases[numerocasealeatoire].id = "player2";
  }
}

// Il y a 99 cases, on vérifie l'id de chacune et si c'est un obstacle, on colore la case en gris
for (let i = 0; i < nombreCases; i++) {
  (function(i) {
    if (listeCases[i].id === "obstacle") {
      console.log(listeCases[i].positionX + "/" + listeCases[i].positionY);
      const canvas = new Image();
      canvas.src = "http://zupimages.net/up/15/31/m3d1.png";
      canvas.addEventListener('load', function() {
        context.drawImage(canvas, listeCases[i].positionX, listeCases[i].positionY);
      }, false);
    }
  })(i);
}

for (let y = 0; y < nombreCases; y++) {
  (function(y) {
    if (listeCases[y].id === "player1") {
      console.log(listeCases[y].positionX + "/" + listeCases[y].positionY);
      const canvas = new Image();
      canvas.src = "./assets/joueur1.png";
      canvas.addEventListener('load', function() {
        context.drawImage(canvas, listeCases[y].positionX, listeCases[y].positionY);
      }, false);
    }
    else if (listeCases[y].id === "player2") {
      console.log(listeCases[y].positionX + "/" + listeCases[y].positionY);
      const canvas = new Image();
      canvas.src = "./assets/joueur2.png";
      canvas.addEventListener('load', function() {
        context.drawImage(canvas, listeCases[y].positionX, listeCases[y].positionY);
      }, false);
    }
  })(y);
}