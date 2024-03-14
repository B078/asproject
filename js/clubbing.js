const min_leeftijd = 18;
const vip = ["bjorn", "peter"];
let  ouder_18 = false;
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
];

document.getElementById('bestellen-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('age-input').classList.remove('hidden');
    document.querySelector('.main').classList.add('hidden-main'); 
});

let input = document.getElementById('age');
let timer;

input.addEventListener("input", function () {
    clearTimeout(timer);
    timer = setTimeout(function() {
        let inputValue = parseInt(input.value) || 0;
        
        var ageAlertDiv = document.getElementById('age-alert');
        var successAlertDiv = document.getElementById('alert-succes');
        
        if (inputValue < min_leeftijd) {
            ageAlertDiv.style.display = 'block';
            successAlertDiv.style.display = 'none';
        } else {
            ageAlertDiv.style.display = 'none';
            successAlertDiv.style.display = 'block';
            ouder_18 = true
        }

        if(ouder_18){
            
        }
    }, 500); // Wait for 500 milliseconds before validating
});

