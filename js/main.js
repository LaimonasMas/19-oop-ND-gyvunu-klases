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

const gyvunelis = new Animal('Tobis', 'Ruda');
gyvunelis.introduce();
console.log(gyvunelis);
gyvunelis.voice();

const naminis = new Pet;


