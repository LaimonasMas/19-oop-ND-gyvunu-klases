import { Pet } from "./Pet.js";

class Rabbit extends Pet {
    constructor(name, color) {
        super(name, color)
        this.sound = 'CypMyk CypMyk';
        this.likePlaying = 'liuoksėti';
    }
}

export { Rabbit }