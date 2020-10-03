class Weapon {
    #type;
    #typeWeapon;
    #isPickable;
    #damage;
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

        switch (this.typeWeapon) {
            case WEAPON_TYPE.WEAPON0:
                this.#damage = 10;
                break;
            case WEAPON_TYPE.WEAPON1:
                this.#damage = 20;
                break;
            case WEAPON_TYPE.WEAPON2:
                this.#damage = 30;
                break;
            case WEAPON_TYPE.WEAPON3:
                this.#damage = 40;
                break;
        }
    }

    clone() {
        return new Weapon(null, this.typeWeapon, this.x, this.y)
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
