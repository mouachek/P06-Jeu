class MapDisplayer {
    #canvas;
    #context;
    #width;
    #height;
    #cellSize;
    #obstacleImage = null;
    #player1Image = null;
    #player2Image = null;
    #weapon1Image = null;
    #weapon2Image = null;
    #weapon3Image = null;

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

    drawObstacle(newObstacle) {
        if (this.#obstacleImage === null) {
            const image = new Image();
            image.src = './assets/obstacle.png';
            image.addEventListener('load', () => {
                this.#obstacleImage = image;
                this.#context.drawImage(this.#obstacleImage, this.#cellSize * newObstacle.x, this.#cellSize * newObstacle.y);
            }, false);
            return;
        }
        this.#context.drawImage(this.#obstacleImage, this.#cellSize * newObstacle.x, this.#cellSize * newObstacle.y);
    }

    drawPlayer(newPlayer) {
        if (newPlayer.typePlayer === PLAYER_TYPE.PLAYER1) {
            if (this.#player1Image === null) {
                const image = new Image();
                image.src = './assets/joueur1.png';
                image.addEventListener('load', () => {
                    this.#player1Image = image;
                    this.#context.drawImage(this.#player1Image, this.#cellSize * newPlayer.x, this.#cellSize * newPlayer.y);
                }, false);
                return;
            }
            this.#context.drawImage(this.#player1Image, this.#cellSize * newPlayer.x, this.#cellSize * newPlayer.y);
        } else if (newPlayer.typePlayer === PLAYER_TYPE.PLAYER2) {
            if (this.#player2Image === null) {
                const image = new Image();
                image.src = './assets/joueur2.png';
                image.addEventListener('load', () => {
                    this.#player2Image = image;
                    this.#context.drawImage(this.#player2Image, this.#cellSize * newPlayer.x, this.#cellSize * newPlayer.y);
                }, false);
                return;
            }
            this.#context.drawImage(this.#player2Image, this.#cellSize * newPlayer.x, this.#cellSize * newPlayer.y);
        }
    }

    drawWeapon(newWeapon) {
        if (newWeapon.typeWeapon === WEAPON_TYPE.WEAPON1) {
            if (this.#weapon1Image === null) {
                const image = new Image();
                image.src = './assets/weapon1.png';
                image.addEventListener('load', () => {
                    this.#weapon1Image = image;
                    this.#context.drawImage(this.#weapon1Image, this.#cellSize * newWeapon.x, this.#cellSize * newWeapon.y);
                }, false);
                return;
            }
            this.#context.drawImage(this.#weapon1Image, this.#cellSize * newWeapon.x, this.#cellSize * newWeapon.y);
        }
        if (newWeapon.typeWeapon === WEAPON_TYPE.WEAPON2) {
            if (this.#weapon2Image === null) {
                const image = new Image();
                image.src = './assets/weapon2.png';
                image.addEventListener('load', () => {
                    this.#weapon2Image = image;
                    this.#context.drawImage(this.#weapon2Image, this.#cellSize * newWeapon.x, this.#cellSize * newWeapon.y);
                }, false);
                return;
            }
            this.#context.drawImage(this.#weapon2Image, this.#cellSize * newWeapon.x, this.#cellSize * newWeapon.y);
        }
        if (newWeapon.typeWeapon === WEAPON_TYPE.WEAPON3) {
            if (this.#weapon3Image === null) {
                const image = new Image();
                image.src = './assets/weapon3.png';
                image.addEventListener('load', () => {
                    this.#weapon3Image = image;
                    this.#context.drawImage(this.#weapon3Image, this.#cellSize * newWeapon.x, this.#cellSize * newWeapon.y);
                }, false);
                return;
            }
            this.#context.drawImage(this.#weapon3Image, this.#cellSize * newWeapon.x, this.#cellSize * newWeapon.y);
        }
    }
}