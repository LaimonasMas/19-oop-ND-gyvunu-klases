import { Fish } from "./Fish.js";

class Nemofish extends Fish {
    constructor(name, color) {
        super(name, color);
        this.music = 'rokas';
    }
    likesMusic() {
        console.log(`${this.name} mėgstamiausias muzikos žanras yra ${this.music}.`);
    }
}

export { Nemofish }