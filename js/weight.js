let product = [
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
];

let wrapper = document.querySelector(".wrapper");

let Name1 = document.createElement("p");
Name1.textContent = "Weight Pallet";
Name1.id = "Names";
wrapper.appendChild(Name1);

let Name2 = document.createElement("span");
Name2.textContent = "Total Weight";
Name1.appendChild(Name2);

let totalWeight = 0; 

for (let index in product) {
    let Palletline = document.createElement("p");
    wrapper.appendChild(Palletline);
    
    let Title = document.createElement("p");
    Title.id = "Title";
    Title.textContent = product[index].title;
    Palletline.appendChild(Title);
    
    let input = document.createElement("input");
    input.id = "input-" + product[index].title.toLowerCase();
    input.type = "number";
    input.min = "0";
    input.placeholder = "Hoeveel pallets?";
    Palletline.appendChild(input);
    
    input.addEventListener("input", function () {
        let inputValue = parseInt(input.value) || 0;
        
        if (inputValue < 0) {
            input.value = 0;
            inputValue = 0;
        }
        
        let productWeight = inputValue * parseInt(product[index].weight);
        totalWeight -= parseInt(Output.textContent) || 0;
        totalWeight += productWeight; 
        Output.textContent = productWeight + "kg";
        total_weight.textContent = "Total Weight: " + totalWeight + "kg"; 

        if (totalWeight >= 20000) {
            alert("je bent te zwaar bolle")
        }
    });
    
    let weightSpan = document.createElement("span");
    weightSpan.textContent = product[index].weight + "kg";
    Palletline.appendChild(weightSpan);
    
    let Output = document.createElement("span");
    Output.id = "output-" + product[index].title.toLowerCase();
    Output.classList.add("line-total");
    Palletline.appendChild(Output);
}
    let total_weight = document.createElement("p");
    wrapper.appendChild(total_weight);
    total_weight.id = "total-weight";
    total_weight.textContent = "Total Weight: 0kg"; 
