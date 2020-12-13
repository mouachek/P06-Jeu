class Player{
    #type;
    #typePlayer;
    #x;
    #y;
    #positionManager;

    constructor(positionManager, typePlayer) {
        const position = positionManager.getPlayerPosition();
        this.#type = CELL_TYPES.PLAYER;
        this.#typePlayer = typePlayer;
        this.#x = position.x;
        this.#y = position.y;
        this.#positionManager = positionManager;
    }

    move(x, y){
        this.#x = x;
        this.#y = y;
    }

    canMoveTo(x, y){
        return this.#positionManager.checkCellType(x, y, CELL_TYPES.MOVE)
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
