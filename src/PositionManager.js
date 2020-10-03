class PositionManager {
    #listCells;
    #width;
    #height;

    constructor(listCells, width, height) {
        this.#listCells = listCells;
        this.#width = width;
        this.#height = height;
    }

    checkCellType(x, y, typeCell) {
        return this.#listCells[(y * this.#width) + x].type === typeCell
    }

    checkBoundaries(position) {
        return position >= 0 && position < this.#width * this.#height;
    }

    checkDirection(x, y, direction, cell, distance = 1) {
        if (direction === DIRECTION_TYPES.UP
        && this.checkBoundaries(((y - distance) * this.#width) + x)) {
            return this.#listCells[((y - distance) * this.#width) + x].type === cell
        }
        if (direction === DIRECTION_TYPES.DOWN && this.checkBoundaries(((y + distance) * this.#width) + x)) {
            return this.#listCells[((y + distance) * this.#width) + x].type === cell
        }
        if (direction === DIRECTION_TYPES.RIGHT && this.checkBoundaries((y * this.#width) + x + distance)){
            return this.#listCells[(y * this.#width) + x + distance].type === cell
        }
        if (direction === DIRECTION_TYPES.LEFT && this.checkBoundaries(y * this.#width) + x - distance)
        {
            return this.#listCells[(y * this.#width) + x - distance].type === cell
        }
        if (direction === DIRECTION_TYPES.CURRENT)
        {
            return this.#listCells[(y * this.#width) + x].type === cell
        }

        return false;
    }

    getObstaclePosition () {
        const x = Math.floor(Math.random() * (this.#width));
        const y = Math.floor(Math.random() * (this.#height));
        if (this.checkDirection(x, y, DIRECTION_TYPES.CURRENT, CELL_TYPES.EMPTYCELL))
        {
            return {x,y};
        }
        return this.getObstaclePosition();
    }

    getPlayerPosition () {
        const x = Math.floor(Math.random() * (this.#width));
        const y = Math.floor(Math.random() * (this.#height));
        console.log(x, y);
        if (this.checkDirection(x, y, DIRECTION_TYPES.CURRENT, CELL_TYPES.EMPTYCELL)
            && !this.checkDirection(x, y, DIRECTION_TYPES.LEFT, CELL_TYPES.PLAYER)
            && !this.checkDirection(x, y, DIRECTION_TYPES.RIGHT, CELL_TYPES.PLAYER)
            && !this.checkDirection(x, y, DIRECTION_TYPES.UP, CELL_TYPES.PLAYER)
            && !this.checkDirection(x, y, DIRECTION_TYPES.DOWN, CELL_TYPES.PLAYER)
        )
        {
            return {x,y};
        }
        return this.getPlayerPosition();
    }

    getCell(x, y){
        return this.#listCells[(y * this.#width) + x]
    }

    getWeaponPosition () {
        const x = Math.floor(Math.random() * (this.#width));
        const y = Math.floor(Math.random() * (this.#height));
        if (this.checkDirection(x, y, DIRECTION_TYPES.CURRENT, CELL_TYPES.EMPTYCELL))
        {
            return {x,y};
        }
        return this.getWeaponPosition();
    }
}
