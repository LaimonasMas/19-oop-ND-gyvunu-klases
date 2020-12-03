import { Pet } from "./Pet.js";

class Cat extends Pet {
    constructor(name, color) {
        super(name, color)
        this.sound = 'Miaaau miaaau';
        this.likePlaying = 'gaudyti peles';
    }

}

export { Cat }