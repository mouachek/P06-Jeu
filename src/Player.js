class Player{
    #type;
    #typePlayer;
    #x;
    #y;

    constructor(randomPosition, typePlayer) {
        const position = randomPosition.getPlayerPosition();
        this.#type = CELL_TYPES.PLAYER;
        this.#typePlayer = typePlayer;
        this.#x = position.x;
        this.#y = position.y;
    }

    move(x, y){
        this.#x = x;
        this.#y = y;
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
    get type() {
        return this.#type;
    }
}
