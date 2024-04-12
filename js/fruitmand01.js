// opdracht 1
import { geshuffeldfruit } from "./fruitmandControl.js"
import { print } from "./io.js"

console.log(geshuffeldfruit)

function verwijderDub(array) {
    return Array.from(new Set(array));
}
// // opdracht 3
function namenfruit() {
geshuffeldfruit.forEach(fruit =>{
        print(fruit.name)
    })
}

// // opdrcht 2 
function lengtefruit() {
print(geshuffeldfruit.length)
}
//  opdracht 4
function test(event) {
    event.preventDefault();

    let amount = parseInt(document.getElementById('fruitInput').value);

    for(let i = 0;  i < amount; i++){
        let randomindex = Math.floor(Math.random() * geshuffeldfruit.length);
        let randomFruit = geshuffeldfruit[randomindex].name

        print(randomFruit)
    };
}

StartButton.addEventListener( 'click',test);

//  opdracht 5 
function reversenamen() {
    for(let i = geshuffeldfruit.length - 1; i >= 0; i--){
        print(geshuffeldfruit[i].name)
        }
    }
// opdracht 6 
function weightappel() {
    const appelWeight = geshuffeldfruit.find(fruit => fruit.name === 'appel').weight;
    print(appelWeight)
}

// opdracht 7 
function rondfruit() {
    let roundFruits = geshuffeldfruit.filter(fruit => fruit.round);
    console.log(roundFruits);

    let uniqueRoundFruits = verwijderDub(roundFruits.map(fruit => fruit.name));
    
    uniqueRoundFruits.forEach(fruit => {
        console.log(fruit);
        print(fruit);
    });
}

// opdracht 8
function totalweight(geshuffeldfruit){
    let TotalWeight = 0
    geshuffeldfruit.forEach(fruit => {
        TotalWeight += fruit.weight
    });
    print(TotalWeight)
}

function ColorFruit() {
    let fruitmand = new Set(geshuffeldfruit)
    const updatedgeshuffeldfruit = Array.from(fruitmand.filter(fruit => fruit.name !== 'druif'));

    updatedgeshuffeldfruit.forEach(fruit => {
        print(fruit.color)
    })
}

function sorteer() {
    const gesorteerdegeshuffeldfruit = geshuffeldfruit.sort((a, b) => b.weight - a.weight);

    gesorteerdegeshuffeldfruit.forEach(fruit => {
        const weightInKg = fruit.weight / 1000;

        console.log(`${fruit.name}: ${weightInKg} kg`);
    })

}





function fruitcolor() {
    let ColorFruit = geshuffeldfruit.map(fruit => fruit.color);
    let uniekecolor = verwijderDub(ColorFruit)

    uniekecolor.forEach(color =>{
    print(color)
    })
    
}


// test()
// sorteer()
// lengtefruit()
// namenfruit()
// reversenamen()
// weightappel()
// rondfruit()
// ColorFruit()
fruitcolor()




// totalweight(geshuffeldfruit)
// const watermeloen = {
//     'name': 'watermeloen',
//     'weight': 3000,
//     'color': 'green',
//     'round': true
// };

// geshuffeldfruit.push(watermeloen)


// totalweight(geshuffeldfruit)