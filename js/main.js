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
//     Fish (params: fin; methods: swim)
//         Goldfish
//         Nemofish
//         Salmon

import { Animal } from "./animal/Animal.js";
import { Pet } from "./animal/pet/Pet.js";
import { Cat } from "./animal/pet/Cat.js";
import { Dog } from "./animal/pet/Dog.js";
import { Rabbit } from "./animal/pet/Rabbit.js";

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





