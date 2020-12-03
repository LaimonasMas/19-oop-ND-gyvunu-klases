console.log('vaziuojam');

// Animal (params: name, color; methods: sound, introduce)
//     Pet (params: legsCount, likePlaying, methods: walk)
//         Dog
//         Cat
//         Rabbit
//     Bird (params: wingsCount; methods: fly)
//         Parrot (methods: repeatSound)
//         Sparrow
//         Chicken
//     Fish (params: fins; methods: swim)
//         Goldfish
//         Nemofish
//         Salmon

import { Animal } from "./animal/Animal.js";
import { Pet } from "./animal/pet/Pet.js";
import { Cat } from "./animal/pet/Cat.js";
import { Dog } from "./animal/pet/Dog.js";
import { Rabbit } from "./animal/pet/Rabbit.js";
import { Bird } from "./animal/bird/Bird.js";
import { Chicken } from "./animal/bird/Chicken.js";
import { Parrot } from "./animal/bird/Parrot.js";
import { Sparrow } from "./animal/bird/Sparrow.js";
import { Fish } from "./animal/fish/Fish.js";
import { Goldfish } from "./animal/fish/Goldfish.js";
import { Nemofish } from "./animal/fish/Nemofish.js";
import { Salmon } from "./animal/fish/Salmon.js";

const gyvunelis = new Animal('Tobis', 'Ruda');
gyvunelis.introduce();
console.log(gyvunelis);
gyvunelis.voice();

const pet = new Pet('Nikas', 'Juoda');
console.log(pet);

pet.introduce();
pet.petInterests();
pet.walk(5);

const katyte = new Cat('Murklyte', 'balta')
console.log(katyte);

katyte.introduce();
katyte.petInterests();
katyte.voice();
katyte.walk(3);

const suniukas = new Dog('Amsius', 'Juodai Balta');
console.log(suniukas);

suniukas.introduce();
suniukas.petInterests();
suniukas.voice();
suniukas.walk(6);

const ilgaausis = new Rabbit('Skeltalūpis', 'Sniego baltumo Balta');
console.log(ilgaausis);

ilgaausis.introduce();
ilgaausis.petInterests();
ilgaausis.voice();
ilgaausis.walk(4);

const paukstis = new Bird('Skraidunas', 'Geltona')
console.log(paukstis);

paukstis.introduce();
paukstis.birdEats();
paukstis.voice();
paukstis.flyingSpeed(20);

const visciukas = new Chicken('Cypsius', 'Šviesiai geltona')
console.log(visciukas);

visciukas.introduce();
visciukas.birdEats();
visciukas.voice();
visciukas.flyingSpeed(0.5);

const papugele = new Parrot('Čiauškalė', 'Gelsvai Mėlyna')
console.log(papugele);

papugele.introduce();
papugele.birdEats();
papugele.voice();
papugele.flyingSpeed(25);

const zvirbliukas = new Sparrow('Mažius', 'Melsva')
console.log(zvirbliukas);

zvirbliukas.introduce();
zvirbliukas.birdEats();
zvirbliukas.voice();
zvirbliukas.flyingSpeed(18);

const zuviukas = new Fish('Žvynius', 'Tamsiai pilka')
console.log(zuviukas);

zuviukas.introduce();
zuviukas.swimSpeed(16);

const auksineZuvele = new Goldfish('Auksinuke', 'Gryno aukso')
console.log(auksineZuvele);

auksineZuvele.introduce();
auksineZuvele.swimSpeed(12);

const nemukas = new Nemofish('Nemo', 'Oranžinė')
console.log(nemukas);

nemukas.introduce();
nemukas.swimSpeed(22);
nemukas.likesMusic();

const lasisa = new Salmon('Vikruolė', 'Tamsi')
console.log(lasisa);

lasisa.introduce();
lasisa.swimSpeed(40);
lasisa.likesMusic();














