import { Fish } from "./Fish.js";

class Salmon extends Fish {
    constructor(name, color) {
        super(name, color)
        this.music = 'rokas';
    }
    likesMusic() {
        console.log(`${this.music} yra labai tranki muzika ir ${this.name} tikrai niekada jo neklauso.`);
    }
}

export { Salmon }