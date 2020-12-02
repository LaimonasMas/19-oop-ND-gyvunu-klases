class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.sound = 'Woof woof';
    }

    voice() {
        console.log(`${this.name} sako: ${this.sound}.`);
    }

    introduce() {
        console.log(`Labas, aš esu ${this.name}, mano spalva yra ${this.color}, o balselis mano va toks: ${this.sound}.`);
    }
}

export { Animal }