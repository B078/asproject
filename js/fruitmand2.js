import { fruitmand } from "./fruitmand.js";

console.log(fruitmand)

const beschikbareKleuren = [...new Set(fruitmand.map(fruit => fruit.color))];

function vraagkleur() {
    let gekozenkleur = prompt("Kies een kleur uit de beschikbare kleuren: " + beschikbareKleuren.join(", "));
    if(!beschikbareKleuren.includes(gekozenkleur)) {
        console.log(`De kleur ${gekozenkleur} zit niet in de fruitmand.`);
        return vraagkleur()
    } else {
        return gekozenkleur
    }
}


function aantalRondeNietRondeVruchten(kleur) {
    const vruchtenVanKleur = fruitmand.filter(fruit => fruit.color === kleur);
    const aantalRonde = vruchtenVanKleur.filter(fruit => fruit.round).length;
    const aantalNietRonde = vruchtenVanKleur.length - aantalRonde;
    return [aantalRonde, aantalNietRonde];
}

function main() {
    const gekozenKleur = vraagkleur();
    const [aantalRonde, aantalNietRonde] = aantalRondeNietRondeVruchten(gekozenKleur);
    const verschil = aantalRonde - aantalNietRonde;

    if (verschil > 0) {
        console.log(`Er zijn ${verschil} meer ronde vruchten dan niet-ronde vruchten in de kleur ${gekozenKleur}`);
    } else if (verschil < 0) {
        console.log(`Er zijn ${Math.abs(verschil)} minder ronde vruchten dan niet-ronde vruchten in de kleur ${gekozenKleur}`);
    } else {
        console.log(`Er zijn evenveel ronde (${aantalRonde}) als niet-ronde (${aantalNietRonde}) vruchten in de kleur ${gekozenKleur}`);
    }
}


main();