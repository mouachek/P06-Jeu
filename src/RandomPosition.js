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
        if (this.#listCells[(y * this.#width) + x].type === CELL_TYPES.EMPTYCELL)
        {
            return {x,y};
        }
        return this.getObstaclePosition();
    }
    getPistoletPosition () {
        const x = Math.floor(Math.random() * (this.#width));
        const y = Math.floor(Math.random() * (this.#height));
        if (
            this.#listCells[(y * this.#width) + x].type === CELL_TYPES.EMPTYCELL
        )
        {
            return {x,y};
        }
        return this.getPistoletPosition();
    }
    getmarteauPosition () {
        const x = Math.floor(Math.random() * (this.#width));
        const y = Math.floor(Math.random() * (this.#height));
        if (
            this.#listCells[(y * this.#width) + x].type === CELL_TYPES.EMPTYCELL
        )
        {
            return {x,y};
        }
        return this.getmarteauPosition();
    }

    getPlayer1Position () {
        const x = Math.floor(Math.random() * (this.#width));
        const y = Math.floor(Math.random() * (this.#height));
        if (this.#listCells[(y * this.#width) + x].type === CELL_TYPES.EMPTYCELL
            &&  this.#listCells[(y * this.#width) + x - 1].type !== CELL_TYPES.PLAYER2
            &&  this.#listCells[(y * this.#width) + x + 1].type !== CELL_TYPES.PLAYER2
            && this.#listCells[((y - 1) * this.#width) + x].type !== CELL_TYPES.PLAYER2
            && this.#listCells[((y + 1) * this.#width) + x].type !== CELL_TYPES.PLAYER2
        )
        {            return {x,y};
        }
        return this.getPlayer1Position();
    }
    getPlayer2Position () {
        const x = Math.floor(Math.random() * (this.#width));
        const y = Math.floor(Math.random() * (this.#height));
        if (
            this.#listCells[(y * this.#width) + x].type === CELL_TYPES.EMPTYCELL
            &&  this.#listCells[(y * this.#width) + x - 1].type !== CELL_TYPES.PLAYER1
            &&  this.#listCells[(y * this.#width) + x + 1].type !== CELL_TYPES.PLAYER1
            && this.#listCells[((y - 1) * this.#width) + x].type !== CELL_TYPES.PLAYER1
            && this.#listCells[((y + 1) * this.#width) + x].type !== CELL_TYPES.PLAYER1
        )
        {
            return {x,y};
        }
        return this.getPlayer2Position();
    }
}