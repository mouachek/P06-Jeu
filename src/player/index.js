export class Player {
    constructor(initial_pos_x, initial_pos_y) {
        this.vie = 100;
        this.degat = 10;

        this.pos_x = initial_pos_x;
        this.pos_y = initial_pos_y;
    }

    deplacer(direction) {
        if (direction === 'left') {
            this.pos_x - 1;
        }
    }
}