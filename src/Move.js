class Move {
    #type;
    #x;
    #y;

    constructor(x, y) {
        this.#type = CELL_TYPES.MOVE;
        this.#x = x;
        this.#y = y;
    }

    get y() {
        return this.#y;
    }

    get x() {
        return this.#x;
    }
    get type() {
        return this.#type;
    }
}
