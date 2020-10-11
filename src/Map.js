class Map {
    #mapDisplayer;
    #randomPosition;
    #nbCells;
    #nbObstacles;
    #listCells;
    #curListIndex = 0;
    #width;

    constructor(width, height, nbObstacles) {
        this.#mapDisplayer = new MapDisplayer(width, height);
        this.#listCells = [];
        this.#randomPosition = new RandomPosition(this.#listCells, width, height);
        this.#nbCells = width * height;
        this.#nbObstacles = nbObstacles;
        this.#width = width;
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
    }

    createMap() {
        this.initBoard()
        this.initObstacles();
        this.initPlayer(PLAYER_TYPE.PLAYER1);
        this.initPlayer(PLAYER_TYPE.PLAYER2);
    }
}
