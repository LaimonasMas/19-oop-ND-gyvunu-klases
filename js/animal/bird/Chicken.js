import { Bird } from "./Bird.js";

class Chicken extends Bird {
    constructor(name, color){
        super(name, color)
    }
    flyingSpeed(speedChange) {
        this.currentSpeed = this.minSpeed += speedChange;
        console.log(`${this.name} gali skristi vidutinišku ${this.currentSpeed} km/h greičiu, bet labai trumpą atstumą.`);
    }
}

export { Chicken }