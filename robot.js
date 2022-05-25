const dirs = [
    'north',
    'northeast',
    'east',
    'southeast',
    'south',
    'southwest',
    'west',
    'northwest',
];

const indices = {
    north: 0,
    northeast: 1,
    east: 2,
    southeast: 3,
    south: 4,
    southwest: 5,
    west: 6,
    northwest: 7,
};

class Robot {
    validateLocation(x, y) {
        if (x >= 0 && x <= 5 && y >= 0 && y <= 5) {
            return true;
        }
        return false;
    }

    reportLocation() {
        console.log(`- location at (${this.x},${this.y}) facing ${this.facing}.`)
        return {
            x: this.x,
            y: this.y,
            z: this.facing,
        };
    }

    constructor(x, y, facing) {
        this.x = x;
        this.y = y;
        this.facing = facing;
        this.reportLocation();
    }

    left() {
        const newIndex = (indices[this.facing] + 6) % 8;
        this.facing = dirs[newIndex];
        this.reportLocation();
    }

    right() {
        const newIndex = (indices[this.facing] + 2) % 8;
        this.facing = dirs[newIndex];
        this.reportLocation();
    }

    move() {
        let newX = this.x;
        let newY = this.y;

        if (this.facing.includes('north')) newY += 1;
        if (this.facing.includes('south')) newY -= 1;
        if (this.facing.includes('east')) newX += 1;
        if (this.facing.includes('west')) newX -= 1;

        if (this.validateLocation(newX, newY)) {
            this.x = newX;
            this.y = newY;
            this.reportLocation();
        } else {
            throw Error(`invalid move: (${newX},${newY}) is out of bounds`);
        }
    }
}

module.exports = {
    Robot,
};
