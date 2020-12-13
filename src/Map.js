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

    setNextTurn() {
        this.removeMoveCells();
        this.#currentPlayer = this.#currentPlayer.typePlayer === PLAYER_TYPE.PLAYER1 ? this.#players[1] : this.#players[0];
        this.initMoves(this.#currentPlayer);
        this.#mapDisplayer.drawMap(this.#listCells);
    }

    addCell (x, y, type) {
        this.#listCells[this.#curListIndex] = {
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
            if (this.#listCells[(newMove.y * this.#width) + newMove.x].type === CELL_TYPES.WEAPON)
            {
                this.#listCells[(newMove.y * this.#width) + newMove.x].makePickable();
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
            if (this.#listCells[(newMove.y * this.#width) + newMove.x].type === CELL_TYPES.WEAPON)
            {
                this.#listCells[(newMove.y * this.#width) + newMove.x].makePickable();
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
            if (this.#listCells[(newMove.y * this.#width) + newMove.x].type === CELL_TYPES.WEAPON)
            {
                this.#listCells[(newMove.y * this.#width) + newMove.x].makePickable();
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
            if (this.#listCells[(newMove.y * this.#width) + newMove.x].type === CELL_TYPES.WEAPON)
            {
                this.#listCells[(newMove.y * this.#width) + newMove.x].makePickable();
            }
            if(this.#listCells[(newMove.y * this.#width) + newMove.x].type === CELL_TYPES.OBSTACLE
                || this.#listCells[(newMove.y * this.#width) + newMove.x].type === CELL_TYPES.PLAYER)            {
                break;
            }
        }
    }

    moveCurrentPlayer (x, y) {
        const oldX = this.#currentPlayer.x;
        const oldY = this.#currentPlayer.y;

        // si c'est une case  type move (orange)
        if (!this.#currentPlayer.canMoveTo(x, y)){
            return false;
        }

        // si currentPlayer possede une ancienne arme il va la deposer a la old position du joueur & remettre le
        // old weapon du joueur a null
        if (this.#currentPlayer.oldWeapon) {
            this.#listCells[(oldY * this.#width) + oldX] = this.#currentPlayer.oldWeapon;
            this.#currentPlayer.clearOldWeapon();
        } else {
            // si il n'a pas dancienne arme, il va mettre une case vide
            this.#listCells[(oldY * this.#width) + oldX] = {
                type: CELL_TYPES.EMPTYCELL,
                x: oldX,
                y: oldY,
            };
        }

        // on va verifier si la case ou on a cliquer est du type weapon
        if (this.#currentPlayer.canPickUp(x, y)){
            // on va changer d'arme
            this.#currentPlayer.changeWeapon(this.#listCells[y * this.#width + x])
        }

        this.#currentPlayer.move(x, y);
        this.#listCells[(y * this.#width) + x] = this.#currentPlayer;
        this.setNextTurn();
    }

    removeMoveCells(){
        for(let i = 0; i < this.#listCells.length; i++){
            if (this.#listCells[i].type === CELL_TYPES.MOVE){
                this.#listCells[i] = {
                    type: CELL_TYPES.EMPTYCELL,
                    x: this.#listCells[i].x,
                    y: this.#listCells[i].y,
                };
            }
        }
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
