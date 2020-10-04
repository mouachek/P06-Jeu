class RandomPosition {
    #listCells;
    #width;
    #height;

    constructor(listCells, width, height) {
        this.#listCells = listCells;
        this.#width = width;
        this.#height = height;
    }

    getObstaclePosition () {
        const x = Math.floor(Math.random() * (this.#width));
        const y = Math.floor(Math.random() * (this.#height));
        if (this.#listCells[(y * this.#width) + x].type == CELL_TYPES.EMPTYCELL)
        {
            return {x,y};
        }
        return this.getObstaclePosition();
    }

    getPlayerPosition () {
        const x = Math.floor(Math.random() * (this.#width));
        const y = Math.floor(Math.random() * (this.#height));
        if (
            this.#listCells[(y * this.#width) + x].type == CELL_TYPES.EMPTYCELL
            &&  this.#listCells[(y * this.#width) + x - 1].type !== CELL_TYPES.PLAYER
            &&  this.#listCells[(y * this.#width) + x + 1].type !== CELL_TYPES.PLAYER
            && this.#listCells[((y - 1) * this.#width) + x].type !== CELL_TYPES.PLAYER
            && this.#listCells[((y + 1) * this.#width) + x].type !== CELL_TYPES.PLAYER
        )
        {
            return {x,y};
        }
        return this.getPlayerPosition();
    }
}