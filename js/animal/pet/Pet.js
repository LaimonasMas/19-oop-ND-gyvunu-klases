import { Animal } from "../Animal.js";

class Pet extends Animal {
    constructor(name, color) {
        super(name, color)
        this.legsCount = 4;
        this.likePlaying = 'bėgioti';
        this.minSpeed = 0;
        this.maxSpeed = 10;

    }

    introduce() {
        console.log(`Labas, aš esu ${this.name}, mano spalva yra ${this.color}, aš turiu ${this.legsCount} kojas, o balselis mano va toks: ${this.sound}.`);
    }

    walk(speedChange) {
        this.currentSpeed = this.minSpeed += speedChange;
        console.log(`${this.name} bėga vidutinišku ${this.currentSpeed} km/h greičiu.`);
    }

    petInterests() {
        console.log(`${this.name} labai mėgsta ${this.likePlaying}.`);
    }
}

export { Pet }