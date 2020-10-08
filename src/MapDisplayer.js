class MapDisplayer {
    #canvas;
    #context;
    #width;
    #height;
    #cellSize;
    #obstacleImage = null;

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

}