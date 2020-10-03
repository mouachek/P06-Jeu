export class Map {
    constructor(nbObstacles) {
        this.canvas = document.getElementById('plateau'),
            this.context = this.canvas.getContext('2d'),
            this.largeurMax = this.canvas.width, // Largeur max = largeur du canvas
            this.hauteurMax = this.canvas.height, // Hauteur max = hauteur du canvas
            this.tailleCase = 60, // Taille d'une case du plateau
            this.nombreCasesLargeur = this.largeurMax / this.tailleCase, // Le nombre de cases sur la largeur est égale à la largeur du canvas divisée par taille d'une case
            this.nombreCasesHauteur = this.hauteurMax / this.tailleCase, // Le nombre de cases sur la hauteur est égale à la largeur du canvas divisée par taille d'une case
            this.nombreCases = this.nombreCasesLargeur * this.nombreCasesHauteur, // Le nombre de cases total est égal aux nombres de cases sur la largeur multipliés par le nombre de cases sur la hauteur
            this.nombreobstacles = nbObstacles;
        this.listeCases = []; // Contient un tableau avec la liste des cases
    }
}

    creeMap() {
        this.context.fillStyle = "white"; // Le canvas a un fond blanc
        this.context.fillRect(0, 0, this.largeurMax, this.hauteurMax); // On utilise la totalité du canvas pour créer nos cases

        // On utilise ces variables pour changer les colonnes et lignes des différentes cases crées, on commence à 0 x 0 pour la première case
        let colonne = 0;
        let ligne = 0;

        // Pour chaque case du plateau :
        for (let i = 0; i < this.nombreCases; i++) {
            // On crée un carré de bordure noire de taille 60 x 60
            this.context.strokeStyle = 'grey';
            this.context.strokeRect(this.tailleCase * colonne, this.tailleCase * ligne, this.tailleCase, this.tailleCase);

            // On ajoute un objet à chaque case avec un id et les positions
            this.listeCases[i] = {
                numerocase: i,
                id: "casevide",
                positionX: this.tailleCase * colonne + 1,
                positionY: this.tailleCase * ligne + 1
            };

            // Après avoir créé la case, on passe à la colonne suivante
            colonne++;

            // Si on arrive à 10 cases, on passe à la ligne suivante
            if (colonne === this.nombreCasesLargeur) {
                colonne = 0;
                ligne++;
            }
        }
    }
}