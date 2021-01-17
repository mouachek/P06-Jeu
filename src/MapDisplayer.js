class MapDisplayer {
    #canvas;
    #context;
    #width;
    #height;
    #cellSize;
    #obstacleImage = null;
    #weapon0Image = null;
    #player1Image = null;
    #player2Image = null;
    #weapon1Image = null;
    #weapon2Image = null;
    #weapon3Image = null;
    #moveImage = null;
    #map;

    constructor(width, height, map) {
        this.#map = map;
        this.#canvas = document.getElementById('plateau');
        this.#context = this.#canvas.getContext('2d');
        this.#cellSize = 60;
        this.#width = width * this.#cellSize;
        this.#height = height * this.#cellSize;
        this.#canvas.width = this.#width;
        this.#canvas.height = this.#height;
        this.#canvas.addEventListener('click', this.onClick.bind(this), false);
    }

    drawMap(listCells) {
        this.drawBackground();

        for (let i = 0; i < listCells.length; i++) {
            this.drawBorder(listCells[i].x, listCells[i].y);
            switch (listCells[i].type) {
                case CELL_TYPES.OBSTACLE:
                    this.drawObstacle(listCells[i]);
                    break;
                case CELL_TYPES.PLAYER:
                    this.drawPlayer(listCells[i])
                    break;
                case CELL_TYPES.MOVE:
                    this.drawMove(listCells[i])
                    break;
                case CELL_TYPES.WEAPON:
                    console.log(' GONNA DRAW', listCells[i]);
                    this.drawWeapon(listCells[i])
                    break;
            }
        }
    }

    onClick(e){
        const x = Math.floor(e.layerX / this.#cellSize);
        const y = Math.floor(e.layerY / this.#cellSize);
        this.#map.moveCurrentPlayer(x, y);
    }

    drawBackground() {
        this.#context.clearRect(0, 0, this.#width, this.#height);
        this.#context.fillStyle = "rgba(255, 255, 255, 0.5)"; // Le canvas a un fond blanc
        this.#context.fillRect(0, 0, this.#width, this.#height); // On utilise la totalité du canvas pour créer nos cases
    }

    drawBorder(x, y) {
        this.#context.strokeStyle = "rgba(255, 255, 255, 0.5)";
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
                image.src = './assets/player1.png';
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
                image.src = './assets/player2.png';
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
        if (newWeapon.typeWeapon === WEAPON_TYPE.WEAPON0) {
            if (this.#weapon0Image === null) {
                const image = new Image();
                image.src = './assets/weapon0.png';
                image.addEventListener('load', () => {
                    this.#weapon0Image = image;
                    this.#context.drawImage(this.#weapon0Image, this.#cellSize * newWeapon.x, this.#cellSize * newWeapon.y);
                }, false);
                return;
            }
            this.#context.drawImage(this.#weapon0Image, this.#cellSize * newWeapon.x, this.#cellSize * newWeapon.y);
        }
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

    drawMove(newMove) {
        if (this.#moveImage === null) {
            const image = new Image();
            image.src = './assets/cellMove.png';
            image.addEventListener('load', () => {
                this.#moveImage = image;
                this.#context.drawImage(this.#moveImage, this.#cellSize * newMove.x, this.#cellSize * newMove.y);
            }, false);
            return;
        }
        this.#context.drawImage(this.#moveImage, this.#cellSize * newMove.x, this.#cellSize * newMove.y);
    }

    updatePlayerInfos(player){
        const targetPlayer = player.typePlayer === PLAYER_TYPE.PLAYER1 ? '1' : '2';
        document.getElementById(`player${targetPlayer}LifePoints`).innerHTML = player.lifePoint;
        document.getElementById(`player${targetPlayer}Damage`).innerHTML = player.weapon.damage;
        switch (player.weapon.typeWeapon){
            case WEAPON_TYPE.WEAPON0:
                document.getElementById(`player${targetPlayer}Weapon`).src = './assets/weapon0.png';
                break;
            case WEAPON_TYPE.WEAPON1:
                document.getElementById(`player${targetPlayer}Weapon`).src = './assets/weapon1.png';
                break;
            case WEAPON_TYPE.WEAPON2:
                document.getElementById(`player${targetPlayer}Weapon`).src = './assets/weapon2.png';
                break;
            case WEAPON_TYPE.WEAPON3:
                document.getElementById(`player${targetPlayer}Weapon`).src = './assets/weapon3.png';
                break;
        }
    }
}
