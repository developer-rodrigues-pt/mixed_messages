/* 
 Wild Life Facts - a random message generator
*/

const perc = Math.ceil(Math.random() * 100);
const animals = [
    'dogs', 'cats', 'crocodiles', 'lions', 'giraffes', 'zebras', 'leopards',
    'bears', 'bees', 'flies', 'mosquitoes', 'rhinos', 'snakes'
];
const traits = [
    'punctual', 'serious', 'smart', 'friendly', 'their cousins', 'their ancestors',
    'their neighbors'
];

const index_animal_1 = Math.floor(Math.random() * animals.length);
const animal_1 = animals[index_animal_1];
const index_animal_2 = Math.floor(Math.random() * animals.length - 1);
const animal_2 = animals.filter(animal => animal !== animal_1)[index_animal_2];
const trait = traits[Math.floor(Math.random() * traits.length)];

const message = `${perc}% of the ${animal_1} believe that the ${animal_2} are ${trait}`;
console.log(message);