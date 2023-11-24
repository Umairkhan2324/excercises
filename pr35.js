"use strict";
const animals = ['cats', 'dogs', 'birds', 'goat'];
console.log("list of animals:");
for (const animal of animals) {
    console.log(animal);
}
console.log(`\n Statement about each element`);
for (const animal of animals) {
    if (animal == 'dogs') {
        console.log(`A ${animal} is a very loyal animal`);
    }
    else if (animal == ' cats') {
        console.log(`A ${animal} is very cute anmial`);
    }
    else if (animal == 'birds') {
        console.log(`${animal}, are very soulful and melodious animals`);
    }
    else if (animal == 'goat') {
        console.log(`A ${animal},is a very important livestock animal `);
    }
}
console.log(`\n what these animals have common:`);
console.log("All of these animals would make a great pet!");
