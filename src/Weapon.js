class Weapon {
    #type;
    #typeWeapon;
    #x;
    #y;

    constructor(positionManager, typeWeapon) {
        const position = positionManager.getWeaponPosition();
        this.#type = CELL_TYPES.WEAPON;
        this.#typeWeapon = typeWeapon;
        this.#x = position.x;
        this.#y = position.y;
    }

    get y() {
        return this.#y;
    }

    get x() {
        return this.#x;
    }
    get typeWeapon() {
        return this.#typeWeapon;
    }
    get type() {
        return this.#type;
    }
}
