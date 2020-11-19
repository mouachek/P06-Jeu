class Map {
    #mapDisplayer;
    #randomPosition;
    #nbCells;
    #nbObstacles;
    #listCells;
    #curListIndex = 0;
    #width;
    #height;

    constructor(width, height, nbObstacles) {
        this.#mapDisplayer = new MapDisplayer(width, height);
        this.#listCells = [];
        this.#randomPosition = new RandomPosition(this.#listCells, width, height);
        this.#nbCells = width * height;
        this.#nbObstacles = nbObstacles;
        this.#width = width;
        this.#height = height;
    }

    addCell (x, y, type) {
        this.#listCells[this.#curListIndex] = {
            cellId: this.#curListIndex,
            type,
            x,
            y,
        };
        this.#curListIndex++;
    }

    initBoard () {
        this.#mapDisplayer.drawBackground();
        let x = 0;
        let y = 0;

        for (let i = 0; i < this.#nbCells; i++) {
            this.addCell(x, y, CELL_TYPES.EMPTYCELL);
            this.#mapDisplayer.drawBorder(x, y);
            x++;
            if (x === this.#width) {
                x = 0;
                y++;
            }
        }
    }

    initObstacles () {
        for (let i = 0; i < this.#nbObstacles; i++){
            const newObstacle = new Obstacle(this.#randomPosition)
            this.#listCells[(newObstacle.y * this.#width) + newObstacle.x] = newObstacle;
            this.#mapDisplayer.drawObstacle(newObstacle);
        }
    }

    initPlayer (typePlayer) {
        const newPlayer = new Player(this.#randomPosition, typePlayer)
        this.#listCells[(newPlayer.y * this.#width) + newPlayer.x] = newPlayer;
        this.#mapDisplayer.drawPlayer(newPlayer);
        return newPlayer;
    }

    initWeapon (typeWeapon) {
        const newWeapon = new Weapon(this.#randomPosition, typeWeapon)
        this.#listCells[(newWeapon.y * this.#width) + newWeapon.x] = newWeapon;
        this.#mapDisplayer.drawWeapon(newWeapon);
    }

    checkBoundaries(position) {
        return position >= 0 && position < this.#width * this.#height;
    }

    initMoves (player) {
        for(let i = 1; i <= 3; i++) {
            const newMove = new Move(player.x, player.y - i)
            if (this.#listCells[(newMove.y * this.#width) + newMove.x].type === CELL_TYPES.EMPTYCELL)
            {
                this.#listCells[(newMove.y * this.#width) + newMove.x] = newMove;
                this.#mapDisplayer.drawMove(newMove);
            }
            if(this.#listCells[(newMove.y * this.#width) + newMove.x].type === CELL_TYPES.OBSTACLE
                || this.#listCells[(newMove.y * this.#width) + newMove.x].type === CELL_TYPES.PLAYER)
            {
                break;
            }
        }
        for(let i = 1; i <= 3; i++) {
            const newMove = new Move(player.x, player.y + i)
            if (this.#listCells[(newMove.y * this.#width) + newMove.x].type === CELL_TYPES.EMPTYCELL)
            {
                this.#listCells[(newMove.y * this.#width) + newMove.x] = newMove;
                this.#mapDisplayer.drawMove(newMove);
            }
            if(this.#listCells[(newMove.y * this.#width) + newMove.x].type === CELL_TYPES.OBSTACLE
                || this.#listCells[(newMove.y * this.#width) + newMove.x].type === CELL_TYPES.PLAYER)            {
                break;
            }
        }
        for(let i = 1; i <= 3; i++) {
            const newMove = new Move(player.x - i, player.y)
            if (this.#listCells[(newMove.y * this.#width) + newMove.x].type === CELL_TYPES.EMPTYCELL)
            {
                    this.#listCells[(newMove.y * this.#width) + newMove.x] = newMove;
                    this.#mapDisplayer.drawMove(newMove);
            }
            if(this.#listCells[(newMove.y * this.#width) + newMove.x].type === CELL_TYPES.OBSTACLE
                || this.#listCells[(newMove.y * this.#width) + newMove.x].type === CELL_TYPES.PLAYER)            {
                break;
            }
        }
        for(let i = 1; i <= 3; i++) {
            const newMove = new Move(player.x + i, player.y)
            if (this.#listCells[(newMove.y * this.#width) + newMove.x].type === CELL_TYPES.EMPTYCELL)
            {
                this.#listCells[(newMove.y * this.#width) + newMove.x] = newMove;
                this.#mapDisplayer.drawMove(newMove);
            }
            if(this.#listCells[(newMove.y * this.#width) + newMove.x].type === CELL_TYPES.OBSTACLE
                || this.#listCells[(newMove.y * this.#width) + newMove.x].type === CELL_TYPES.PLAYER)            {
                break;
            }
        }
    }

    createMap() {
        this.initBoard()
        this.initObstacles();
        const player1 = this.initPlayer(PLAYER_TYPE.PLAYER1);
        this.initPlayer(PLAYER_TYPE.PLAYER2);
        this.initWeapon(WEAPON_TYPE.WEAPON1);
        this.initWeapon(WEAPON_TYPE.WEAPON2);
        this.initWeapon(WEAPON_TYPE.WEAPON3);
        this.initMoves(player1);
        console.log(this.#listCells);
    }
}
