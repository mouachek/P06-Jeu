class Player{
    #typeCell;
    #typePlayer;
    #x;
    #y;

    constructor(randomPosition, typePlayer) {
        const position = randomPosition.getPlayerPosition();
        this.#typeCell = CELL_TYPES.PLAYER;
        this.#typePlayer = typePlayer;
        this.#x = position.x;
        this.#y = position.y;
    }

    get y() {
        return this.#y;
    }

    get x() {
        return this.#x;
    }
    get typePlayer() {
        return this.#typePlayer;
    }
}