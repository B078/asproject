const min_leeftijd = 18;
const vip = ["bjorn", "peter", "jeroen"];
const bandje_rood = 'rood';
const bandje_blauw = 'blauw';
let HeeftBlauwBandje = false
let stempeltje = false
let jonger_18 = false;
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
    },
    {
        name: 'anders'
    }
];

    document.getElementById('bestellen-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('age-input').classList.remove('hidden');
    document.querySelector('.main').classList.add('hidden-main');
});

let input_age = document.getElementById('age');
let input_name = document.getElementById("name")
let kleur_bandje = document.getElementById("kleur_bandje")
let checking = document.getElementById("checking_kleur_bandje")
let timer;
let inputValue
input_age.addEventListener("input", function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
        inputValue = parseInt(input_age.value) || 0;

        if (inputValue < 0) {
            inputValue = 0;
            input_age.value = inputValue;
        }

        let toegang_geweigerdDIV_age = document.getElementById('toegang-geweigerd');
        let ageAlertDiv_age = document.getElementById('age-alert');
        let successAlertDiv_age = document.getElementById('alert-succes');
        let Age_Wait = document.getElementById("age-wait");

        let difference = min_leeftijd - inputValue;

        if (inputValue < min_leeftijd) {
            ageAlertDiv_age.style.display = 'block';
            successAlertDiv_age.style.display = 'none';
            jonger_18 = true;
            setTimeout(function() {
                if (jonger_18) {
                    ageAlertDiv_age.style.display = 'none';
                    toegang_geweigerdDIV_age.style.display = 'block';
                    Age_Wait.textContent = `je moet nog ${difference} jaar wachten!!`;
                    setTimeout(function() {
                        var newTab = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank", );
                        newTab.focus(); 
                    },6000);
                }
            },5000); 
        } else {
            ageAlertDiv_age.style.display = 'none';
            toegang_geweigerdDIV_age.style.display = 'none'; 
            successAlertDiv_age.style.display = 'block';
            jonger_18 = false;
            setTimeout(function() {
                let display_name_input = document.getElementById('name-input')
                document.getElementById('age-input').classList.add('hidden');
                successAlertDiv_age.style.display = 'none';
                display_name_input.style.display = 'block';
            },6000);
        }
    }, 2000);
});


input_name.addEventListener("input", checkVip)

function checkVip(event) {
    let inputNameValue = input_name.value.trim().toLowerCase(); 
    
    if (vip.includes(inputNameValue)) {
        if (inputValue < 21) {
            console.log('jonger dan 21');
            checking.style.display = 'block';
            setTimeout(function () {
                checking.style.display = 'none';
                kleur_bandje.style.display = 'block';
                kleur_bandje.innerHTML = `U krijgt van mij een <span style="color: red;">${bandje_rood}</span> bandje`;
            }, 1000);
        } else {
            console.log('21 of ouder');
            checking.style.display = 'block';
            setTimeout(function () {
                checking.style.display = 'none';
                kleur_bandje.style.display = 'block';
                kleur_bandje.innerHTML = `U krijgt van mij een <span style="color: blue;">${bandje_blauw}</span> bandje`;
                HeeftBlauwBandje = true;
            }, 1000);
        }
    } else {
        console.log('niet VIP');
        checking.style.display = 'block';
        setTimeout(function () {
            checking.style.display = 'none';
            console.log('Wat wil je drinken?');
        }, 2000);
    }
}
