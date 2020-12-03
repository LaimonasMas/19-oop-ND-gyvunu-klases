import { Pet } from "./Pet.js";

class Dog extends Pet {
    constructor(name, color) {
        super(name, color)
    }
}

export { Dog }