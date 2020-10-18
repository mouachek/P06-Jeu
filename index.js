// On crée les variables pour le canvas

const map = new Map(10, 10, 8);
map.createMap();


/*const player1 = new Player(2, 5);

const player1 = 1, //
    player1tab = [];

const player2 = 1, //
    player2tab = [];*/


// Création de la fonction qui retourne un nombre aléatoire entre 0 et 99

/*for (let i = 0; i < nombreobstacles; i++) {
  const numerocasealeatoire = randomnumber();
  if (listeCases[numerocasealeatoire].id !== "casevide") {
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
}*/
/*

for (let y = 0; y < nombreCases; y++) {
  (function(y) {
    if (listeCases[y].id === "player1") {
      console.log(listeCases[y].positionX + "/" + listeCases[y].positionY);
      const canvas = new Image();
      canvas.src = "./assets/player1.png";
      canvas.addEventListener('load', function() {
        context.drawImage(canvas, listeCases[y].positionX, listeCases[y].positionY);
      }, false);
    }
    else if (listeCases[y].id === "player2") {
      console.log(listeCases[y].positionX + "/" + listeCases[y].positionY);
      const canvas = new Image();
      canvas.src = "./assets/player2.png";
      canvas.addEventListener('load', function() {
        context.drawImage(canvas, listeCases[y].positionX, listeCases[y].positionY);
      }, false);
    }
  })(y);
}*/
