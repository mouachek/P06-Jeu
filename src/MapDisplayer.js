class MapDisplayer {
    #canvas;
    #context;
    #width;
    #height;
    #cellSize;
    #obstacleImage = null;
    #player1Image = null;
    #player2Image = null;
    #pistoletImage = null;
    #marteauImage = null;

    constructor(width, height) {
        this.#canvas = document.getElementById('plateau');
        this.#context = this.#canvas.getContext('2d');
        this.#cellSize = 60;
        this.#width = width * this.#cellSize;
        this.#height = height * this.#cellSize;
        this.#canvas.width = this.#width;
        this.#canvas.height = this.#height;
    }

    drawBackground() {
        this.#context.fillStyle = "white"; // Le canvas a un fond blanc
        this.#context.fillRect(0, 0, this.#width, this.#height); // On utilise la totalité du canvas pour créer nos cases
    }

    drawBorder(x, y) {
        this.#context.strokeStyle = 'grey';
        this.#context.strokeRect(this.#cellSize * x, this.#cellSize * y, this.#cellSize, this.#cellSize);
    }

    drawObstacle(x, y) {
        if (this.#obstacleImage === null) {
            const image = new Image();
            image.src = './assets/obstacle.png';
            image.addEventListener('load', () => {
                this.#obstacleImage = image;
                this.#context.drawImage(this.#obstacleImage, this.#cellSize * x, this.#cellSize * y);
            }, false);
            return;
        }
        this.#context.drawImage(this.#obstacleImage, this.#cellSize * x, this.#cellSize * y);
    }
    drawPistolet(x, y) {
        if (this.#pistoletImage === null) {
            const image = new Image();
            image.src = './assets/pistolet.png';
            image.addEventListener('load', () => {
                this.#pistoletImage = image;
                this.#context.drawImage(this.#pistoletImage, this.#cellSize * x, this.#cellSize * y);
            }, false);
            return;
        }
        this.#context.drawImage(this.#pistoletImage, this.#cellSize * x, this.#cellSize * y);
    }
    drawMarteau(x, y) {
        if (this.#marteauImage === null) {
            const image = new Image();
            image.src = './assets/marteau.png';
            image.addEventListener('load', () => {
                this.#marteauImage = image;
                this.#context.drawImage(this.#marteauImage, this.#cellSize * x, this.#cellSize * y);
            }, false);
            return;
        }
        this.#context.drawImage(this.#marteauImage, this.#cellSize * x, this.#cellSize * y);
    }

    drawPlayer1(x, y) {
        if (this.#player1Image === null) {
            const image = new Image();
            image.src = './assets/joueur1.png';
            image.addEventListener('load', () => {
                this.#player1Image = image;
                this.#context.drawImage(this.#player1Image, this.#cellSize * x, this.#cellSize * y);
            }, false);
            return;
        }
        this.#context.drawImage(this.#obstacleImage, this.#cellSize * x, this.#cellSize * y);
    }
    drawPlayer2(x, y) {
        if (this.#player2Image === null) {
            const image = new Image();
            image.src = './assets/joueur2.png';
            image.addEventListener('load', () => {
                this.#player2Image = image;
                this.#context.drawImage(this.#player2Image, this.#cellSize * x, this.#cellSize * y);
            }, false);
            return;
        }
        this.#context.drawImage(this.#player2Image, this.#cellSize * x, this.#cellSize * y);
    }
}