class Weapon {
    #type;
    #typeWeapon;
    #x;
    #y;

    constructor(randomPosition, typeWeapon) {
        const position = randomPosition.getWeaponPosition();
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