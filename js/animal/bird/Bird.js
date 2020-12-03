import { Animal } from "../Animal.js";

class Bird extends Animal {
    constructor(name, color) {
        super(name, color)
        this.sound = 'Cypt cyyypt';
        this.food = 'sėklos, grūdai ir sliekai';
        this.minSpeed = 0;
    }

    birdEats() {
        console.log(`${this.name} valgo viską, kas atrodo kaip ${this.food}.`);
    }
    flyingSpeed(speedChange) {
        this.currentSpeed = this.minSpeed += speedChange;
        console.log(`${this.name} skrenda vidutinišku ${this.currentSpeed} km/h greičiu.`);
    }
}

export { Bird }