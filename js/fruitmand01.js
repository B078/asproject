import {
    fruitmand
} from "./fruitmand.js"

console.log(fruitmand)

let container = document.getElementById('container')

fruitmand.forEach(fruit =>{
    if(fruit.round){
        let fruits = document.createElement('div')
        fruits.textContent = fruit.name
        container.appendChild(fruits)
    }


})