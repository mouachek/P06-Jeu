class Weapon {
    #type;
    #typeWeapon;
    #isPickable;
    #x;
    #y;

    constructor(positionManager, typeWeapon, x, y) {
        if (positionManager) {
            const position = positionManager.getWeaponPosition();
            this.#x = position.x;
            this.#y = position.y;
        } else {
            this.#x = x;
            this.#y = y;
        }

        this.#type = CELL_TYPES.WEAPON;
        this.#typeWeapon = typeWeapon;

        this.#isPickable = false;
    }

    static clone(weapon) {
        return new Weapon(null, weapon.typeWeapon, weapon.x, weapon.y)
    }

    setPosition(x, y){
        this.#x = x;
        this.#y = y;
    }

    makePickable(){
        this.#isPickable = true;
    }

    get y() {
        return this.#y;
    }

    get x() {
        return this.#x;
    }

    get isPickable() {
        return this.#isPickable;
    }

    get typeWeapon() {
        return this.#typeWeapon;
    }
    get type() {
        return this.#type;
    }
}
