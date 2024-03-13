const secretNumber = Math.floor(Math.random() * 1000) + 1;
console.log(secretNumber)
let pogingen = 0;

function showGuessContainer() {
    let guessContainer = document.getElementById("guess-container");

    guessContainer.style.display = "block";
}

function checkGuess(event) {
    event.preventDefault();

    const inputGuess = document.getElementById("input-guess");
    const userGuess = inputGuess.value.trim().toLowerCase();

    if (userGuess === "q") {
        location.reload();
    } else if (isNaN(userGuess) || userGuess < 1 || userGuess > 1000) {
        document.getElementById("output").innerHTML = "Kies een geldig nummer alstublieft";
        return;
    }

    pogingen++;

    if (parseInt(userGuess) === secretNumber) {
        document.getElementById("output").innerText = `Gefeliciteerd! Je hebt het geraden in ${pogingen} pogingen.`;
        document.getElementById("output-hint").innerText = ''; 

        inputGuess.value = '';
        inputGuess.placeholder = 'typ een getal om te raden';
        
    } else {
        const difference = Math.abs(secretNumber - parseInt(userGuess));
        console.log(pogingen)
        let message = '';
        let messageHint = '';
        if( pogingen === 10) {
            message = "Helaas te veel pogingen";
        }else if  (difference < 10) {
            message = 'Heel Warm! ';
        } else if (difference < 20) {
            message = 'Warm! ';
        } else if (difference <= 50) {
            message = 'Koud';
        } else if (difference > 50) {
            message = "Heel Koud";
        }
        
        if (parseInt(userGuess) < secretNumber) {
            messageHint = 'Probeer hoger.';
        } else {
            messageHint = 'Probeer lager.';
        }

        document.getElementById("output").innerText = message;
        document.getElementById("output-hint").innerText = messageHint;

        inputGuess.value = '';
        inputGuess.placeholder = 'typ een getal om te raden of q om te stoppen';
    }
}