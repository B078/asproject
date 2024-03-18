//const en var voor program
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
// krijg element bij html
let input_age = document.getElementById('age');
let input_name = document.getElementById("name")
let kleur_bandje = document.getElementById("kleur_bandje")
let stempel = document.getElementById("stempel");
let checking = document.getElementById("checking_kleur_bandje")
let display_name_input = document.getElementById('name-input')
let timer;
let inputValue

// leeftijd input 
input_age.addEventListener("input", function() {
    clearTimeout(timer);
        setTimeout(function() {
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
                        location.reload()
                    },6000);
                }
            },3000); 
        } else {
            ageAlertDiv_age.style.display = 'none';
            toegang_geweigerdDIV_age.style.display = 'none'; 
            successAlertDiv_age.style.display = 'block';
            jonger_18 = false;
            setTimeout(function() {
                document.getElementById('age-input').classList.add('hidden');
                successAlertDiv_age.style.display = 'none';
                display_name_input.style.display = 'block';
            },6000);
        }
    }, 2000);
});
// leftijd input einde

// naam input
input_name.addEventListener("blur", function(event) {
    clearTimeout(timer); 
    
    checking.style.display = 'block'; 
    kleur_bandje.style.display = 'none'; 
    
    setTimeout(function() {
        let inputNameValue = input_name.value.trim().toLowerCase();

        if (vip.includes(inputNameValue)) {
            if (inputValue < 21) {
                console.log('jonger dan 21');
                console.log("naam in vip")
                setTimeout(function () {
                    if (input_name.value.trim().toLowerCase() === inputNameValue) {
                        checking.style.display = 'none';
                        kleur_bandje.style.display = 'block';
                        kleur_bandje.innerHTML = `U krijgt van mij een <span style="color: red;">${bandje_rood}</span> bandje`;
                    }
                }, 1000);

            } else {
                console.log('21 of ouder');
                console.log('naam in vip')
                setTimeout(function () {
                    if (input_name.value.trim().toLowerCase() === inputNameValue) {
                        checking.style.display = 'none';
                        kleur_bandje.style.display = 'block';
                        kleur_bandje.innerHTML = `U krijgt van mij een <span style="color: blue;">${bandje_blauw}</span> bandje`;
                        HeeftBlauwBandje = true;
                    }
                }, 1000);
            }
        } 
        else if(inputValue < 21){ 
            console.log('under 21')
            VraagDrankje()
        } else {
            console.log('over 21 ')
            checking.style.display = 'none'
            stempel.style.display = 'block'
            stempel.innerHTML = 'je krijgt een stempel'
            stempeltje = true
            setTimeout(function(){
                maakdrankjeForm();
            }, 2000);

            
        }
    }, 5000);
});

//naam input end

function maakdrankjeForm() {
    let containerFormDrinks = document.getElementById("containerFormDrinks")
    stempel.style.display = 'none';
    kleur_bandje.style.display = 'none';
    display_name_input.style.display = 'none'
    containerFormDrinks.style.display = 'block'

    let form_drinks = document.createElement('form');
    form_drinks.id = 'drinksForm'

    let TitleDrinks = document.createElement('h3');
    TitleDrinks.textContent = "Kies je drank (Max 1): ";

    form_drinks.appendChild(TitleDrinks)



    drinks.forEach(drink => {
       let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'drinks';
        checkbox.value = drink.name;

       let label = document.createElement('label')
        label.textContent = drink.name;

       let br = document.createElement('br')

        form_drinks.appendChild(checkbox);
        form_drinks.appendChild(label);
        form_drinks.appendChild(br);

    });

        let submitbutton = document.createElement('button')
        submitbutton.textContent = "Verzenden"
        submitbutton.type = 'submit'

       
        form_drinks.appendChild(submitbutton);
        containerFormDrinks.appendChild(form_drinks)


}







 // vraag welk drnakje iemand wil
function VraagDrankje() {
    display_name_input.style.display = 'none'
    checking.style.display = 'none';
    kleur_bandje.style.display = 'none'
    stempel.style.display = 'none'
    console.log('drankje')
}