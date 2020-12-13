class Map {
    #mapDisplayer;
    #positionManager;
    #nbCells;
    #nbObstacles;
    #listCells;
    #curListIndex = 0;
    #width;
    #height;
    #currentPlayer;
    #players;

    constructor(width, height, nbObstacles) {
        this.#mapDisplayer = new MapDisplayer(width, height, this);
        this.#listCells = [];
        this.#positionManager = new PositionManager(this.#listCells, width, height);
        this.#nbCells = width * height;
        this.#nbObstacles = nbObstacles;
        this.#width = width;
        this.#height = height;
    }

    // setNextTurn() {
    //     if (this.currentPlayer == PLAYER_TYPE.PLAYER1){
    //         this.currentPlayer = PLAYER_TYPE.PLAYER2;
    //         this.currentEnemy = PLAYER_TYPE.PLAYER1;
    //     }
    //     else if (this.currentPlayer == PLAYER_TYPE.PLAYER2) {
    //         this.currentPlayer = PLAYER_TYPE.PLAYER1;
    //         this.currentEnemy = PLAYER_TYPE.PLAYER2;
    //     }
    // }

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
            const newObstacle = new Obstacle(this.#positionManager)
            this.#listCells[(newObstacle.y * this.#width) + newObstacle.x] = newObstacle;
            this.#mapDisplayer.drawObstacle(newObstacle);
        }
    }

    initPlayer (typePlayer) {
        const newPlayer = new Player(this.#positionManager, typePlayer)
        this.#listCells[(newPlayer.y * this.#width) + newPlayer.x] = newPlayer;
        this.#mapDisplayer.drawPlayer(newPlayer);
        return newPlayer;
    }

    initWeapon (typeWeapon) {
        const newWeapon = new Weapon(this.#positionManager, typeWeapon)
        this.#listCells[(newWeapon.y * this.#width) + newWeapon.x] = newWeapon;
        this.#mapDisplayer.drawWeapon(newWeapon);
    }

    initMoves (player) {
        for(let i = 1; i <= 3; i++) {
            if (player.y - i < 0){
                break;
            }
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
            if (player.y + i >= this.#height){
                break;
            }
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
            if (player.x - i < 0){
                break;
            }
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
            if (player.x + i >= this.#width){
                break;
            }
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

    // switchWeapon() {
    //     for (let x = 0; x < this.#listCells.length; x++) {
    //         for (let y = 0; y < this.#listCells.length; y++) {
    //             if (this.#listCells.length[x][y] === this.#currentPlayer.move(x, y) && this.#listCells.length.weapon != null) {
    //                 let weaponBuffer = this.#listCells.length[x][y].weapon;
    //                 this.#listCells.length[x][y].weapon = this.#currentPlayer.weapon;
    //                 this.#currentPlayer.weapon = weaponBuffer;
    //             }
    //         }
    //     }
    // }

    moveCurrentPlayer (x, y) {
        const oldX = this.#currentPlayer.x;
        const oldY = this.#currentPlayer.y;

        if (!this.#currentPlayer.canMoveTo(x, y)){
            return false;
        }
        this.#currentPlayer.move(x, y);
        this.#listCells[(y * this.#width) + x] = this.#currentPlayer;
        this.#listCells[(oldY * this.#width) + oldX] = {
            cellId: this.#listCells[(oldY * this.#width) + oldX].cellId,
            type: CELL_TYPES.EMPTYCELL,
            x: oldX,
            y: oldY,
        };
        for(let i = 0; i < this.#listCells.length; i++){
            if (this.#listCells[i].type === CELL_TYPES.MOVE){
                this.#listCells[i] = {
                    cellId: this.#listCells[i].cellId,
                    type: CELL_TYPES.EMPTYCELL,
                    x: this.#listCells[i].x,
                    y: this.#listCells[i].y,
                };
            }
        }
        this.#currentPlayer = this.#currentPlayer.typePlayer === PLAYER_TYPE.PLAYER1 ? this.#players[1] : this.#players[0];
        console.log(this.#players);
        this.initMoves(this.#currentPlayer);
        this.#mapDisplayer.drawMap(this.#listCells);
    }

    createMap() {
        this.initBoard()
        this.initObstacles();
        this.#players = [this.initPlayer(PLAYER_TYPE.PLAYER1), this.initPlayer(PLAYER_TYPE.PLAYER2)];
        this.#currentPlayer = this.#players[0];
        this.initWeapon(WEAPON_TYPE.WEAPON1);
        this.initWeapon(WEAPON_TYPE.WEAPON2);
        this.initWeapon(WEAPON_TYPE.WEAPON3);
        this.initMoves(this.#currentPlayer);
        console.log(this.#listCells);
    }
}
