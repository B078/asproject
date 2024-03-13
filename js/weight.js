
product = [
{
    title: 'Eieren',
    weight: "500",
},
{
    title: 'Melk',
    weight: "250",
},
{
    title: "Kaas",
    weight: "100",
},
]



let wrapper = document.querySelector(".wrapper");

let Name1 = document.createElement("p");
Name1.textContent = "Weight Pallet";
Name1.id = "Names"
wrapper.appendChild(Name1);

let Name2 = document.createElement("span");
Name2.textContent = "Total Weight";
Name1.appendChild(Name2);


for (let i = 0; i < 3; i++) {
    let Palletline = document.createElement("p");
    wrapper.appendChild(Palletline);

    let Title = document.createElement("p");
    Title.id = "Title";
    Title.textContent = product[i].title;
    Palletline.appendChild(Title);

    let input = document.createElement("input");
    input.id = "input-" + product[i].title.toLowerCase();
    input.type = "number";
    input.min = "0";
    input.placeholder = "Hoeveel pallets?"
    Palletline.appendChild(input);

    let weightSpan = document.createElement("span");
    weightSpan.textContent = product[i].weight + "kg";
    Palletline.appendChild(weightSpan);

    let Output = document.createElement("span");
    Output.id = "output-" + product[i].title.toLowerCase();
    Palletline.appendChild(Output);

    input.addEventListener("input", function () {
        let inputValue = parseInt(input.value) || 0;
        let totalWeight = inputValue * parseInt(product[i].weight) + "kg";
        Output.textContent = totalWeight;
    });
}
