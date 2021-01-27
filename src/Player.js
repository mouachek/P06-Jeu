class Player{
    #type;
    #typePlayer;
    #x;
    #y;
    #positionManager;
    #weapon;
    #oldWeapon;
    #lifePoint;
    #defense;

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
        this.#defense = false;

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
        return this.#positionManager.checkCellType(x, y, CELL_TYPES.WEAPON) // on verifie le type de la case
    }

    isTouched(damage) {
        if (this.#defense === true){
            this.#lifePoint = this.#lifePoint - (damage/2);
            this.#defense = false;
        }
        // si la defense est activé je divise par 2
        else {
            this.#lifePoint = this.lifePoint - damage;
        }
        if (this.#lifePoint < 0) {
            this.#lifePoint = 0;
        }
        // je desactive la vie negative
    }

    defend() {
        this.#defense = true;
        return this.#defense;
    }

    fight(victim) {
        victim.isTouched(this.#weapon.damage);
        return true;
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
    get lifePoint() {
        return this.#lifePoint;
    }
}
