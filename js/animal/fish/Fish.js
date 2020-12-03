import { Animal } from "../Animal.js";

class Fish extends Animal {
    constructor(name, color) {
        super(name, color)
        this.wingsCount = 2;
        this.minSpeed = 0;

    }
    introduce() {
        console.log(`Labas, aš esu ${this.name}, mano spalva yra ${this.color} ir aš turiu ${this.wingsCount} pelekus.`);
    }
    swimSpeed(speedChange) {
        this.currentSpeed = this.minSpeed += speedChange;
        console.log(`${this.name} gali plaukti vidutinišku ${this.currentSpeed} km/h greičiu.`);
    }

}

export { Fish }