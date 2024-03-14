const min_leeftijd = 18
const vip = ["bjorn", "bjorn"]
const drinks = [
    {
        name: 'Cola',
        price: 3.50,
    },
    {
        name: 'Bier',
        price: 2.50,
    },
    {
        name: 'Champagne',
        price: 5.10,
    }
]

console.log(vip)



let container = document.querySelector(".container");


let pricing_field = document.createElement("div");
pricing_field.id = "pricing_field";
pricing_field.textContent = "pricing";
container.appendChild(pricing_field);

let div_list = document.createElement("div");
div_list.id = "div_list";
container.appendChild(div_list);

for (let index in drinks) {
    let unsortedList_drinks = document.createElement("ul");
    unsortedList_drinks.id = "unsortedlist_drinks";
    div_list.appendChild(unsortedList_drinks);

    let itemlist_drinks = document.createElement("li");
    itemlist_drinks.id = "itemList_Drinks";
    unsortedList_drinks.appendChild(itemlist_drinks);

    let display_drinks = document.createElement("span");
    display_drinks.id = "display_drinks";
    display_drinks.textContent = drinks[index].name
    itemlist_drinks.appendChild(display_drinks);

    let display_price = document.createElement("span");
    display_price.id = "display_price";
    display_price.textContent = drinks[index].price.toFixed(2)
    itemlist_drinks.appendChild(display_price);
}