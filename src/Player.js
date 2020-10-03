class Player{
    #type;
    #typePlayer;
    #x;
    #y;
    #positionManager;
    #weapon;
    #oldWeapon;
    #lifePoint;

    constructor(positionManager, typePlayer) {
        const position = positionManager.getPlayerPosition();
        this.#type = CELL_TYPES.PLAYER;
        this.#typePlayer = typePlayer;
        this.#x = position.x;
        this.#y = position.y;
        this.#positionManager = positionManager;
        this.#weapon = new Weapon(null, WEAPON_TYPE.WEAPON0, this.#x, this.#y)
        this.#oldWeapon = null;
        this.#lifePoint = 100;
    }

    move(x, y){
        this.#x = x;
        this.#y = y;
    }

    canMoveTo(x, y){
        return this.#positionManager.checkCellType(x, y, CELL_TYPES.MOVE)
            || (this.#positionManager.checkCellType(x, y, CELL_TYPES.WEAPON) && this.#positionManager.getCell(x, y).isPickable)
    }

    canPickUp(x, y){
        return this.#positionManager.checkCellType(x, y, CELL_TYPES.WEAPON)
    }

    changeWeapon(newWeapon){
        this.#oldWeapon = this.#weapon.clone();
        this.#oldWeapon.setPosition(newWeapon.x, newWeapon.y);
        this.#weapon = newWeapon.clone();
    }

    clearOldWeapon() {
        this.#oldWeapon = null;
    }

    get y() {
        return this.#y;
    }

    get weapon() {
        return this.#weapon;
    }

    get oldWeapon() {
        return this.#oldWeapon;
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
