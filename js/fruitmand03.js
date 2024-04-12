

import {fruitmand} from "./fruitmand.js"


console.log(fruitmand)


let langstenaam = fruitmand[0]

for (let i = 1; i < fruitmand.length; i++) {
    if (fruitmand[i].name.length > langstenaam.name.length) {
        langstenaam = fruitmand[i];
    }
}


console.log(`Het fruit met de langste naam is ${langstenaam.name} [${langstenaam.name.length}], met een kleur van ${langstenaam.color} en een gewicht van ${langstenaam.weight} gram.`);