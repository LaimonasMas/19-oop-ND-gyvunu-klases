import { Animal } from "../Animal.js";

class Pet extends Animal {
    constructor(name, color) {
        super(name, color)
        this.legsCount = 4;
        this.likePlaying = true;
        this.minSpeed = 0;
        this.maxSpeed = 5;
    }

    walk(speedChange) {
        this.minSpeed += speedChange;
    }
}

export { Pet }