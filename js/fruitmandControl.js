function shuffle(array) {
    // Start from the end of the array
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements array[i] and array[j]
    [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


export const fruitmand = [{
    'name' : 'ananas',
    'weight' : 1590,
    'color' : 'yellow',
    'round' : false
},{
    'name' : 'banaan',
    'weight' : 120,
    'color' : 'yellow',
    'round' : false
},{
    'name' : 'mango',
    'weight' : 340,
    'color' : 'green',
    'round' : true
},{
    'name' : 'blauwebes',
    'weight' : 3,
    'color' : 'purple',
    'round' : true
},{
    'name' : 'pruim',
    'weight' : 110,
    'color' : 'purple',
    'round' : true
},{
    'name' : 'appel',
    'weight' : 195,
    'color' : 'green',
    'round' : true
},{
    'name' : 'citroen',
    'weight' : 100,
    'color' : 'yellow',
    'round' : true
},{
    'name' : 'peer',
    'weight' : 185,
    'color' : 'green',
    'round' : false
},{
    'name' : 'drakenfruit',
    'weight' : 500,
    'color' : 'pink',
    'round' : false
},{
    'name' : 'druif',
    'weight' : 5,
    'color' : 'green',
    'round' : true
},{
    'name' : 'braam',
    'weight' : 3,
    'color' : 'black',
    'round' : true
},{
    'name' : 'sinaasappel',
    'weight' : 130,
    'color' : 'orange',
    'round' : true
},{
    'name' : 'kiwi',
    'weight' : 75,
    'color' : 'brown',
    'round' : false
},{
    'name' : 'druif',
    'weight' : 5,
    'color' : 'purple',
    'round' : true
},{
    'name' : 'prachtframboos',
    'weight' : 3,
    'color' : 'pink',
    'round' : true
},{
    'name' : 'manderijn',
    'weight' : 125,
    'color' : 'orange',
    'round' : true
}]

let geshuffeldfruit = shuffle(fruitmand)

export {geshuffeldfruit};