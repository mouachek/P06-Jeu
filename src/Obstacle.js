class Obstacle {
    #type;
    #x;
    #y;

    constructor(positionManager) {
        const position = positionManager.getObstaclePosition();
        this.#type = CELL_TYPES.OBSTACLE;
        this.#x = position.x;
        this.#y = position.y;
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
