let currentRound = 1;
let pogingenLeft = 10;
let totalGuesses = 0;
let secretNummer;
let roundwin = 0

function startNewRound() {
   
    pogingenLeft = 10;
    totalGuesses = 0
    secretNummer = Math.floor(Math.random() * 1000) + 1;
    console.log(`Secret nummer voor ronde ${currentRound}: ${secretNummer}`);

   
    document.getElementById("output").innerText = `Ronde ${currentRound}`;
    document.getElementById("output-hint").innerText = `Je hebt nog ${pogingenLeft} pogingen over.`;
    document.getElementById("winning").innerText = ''
}

function showGuessContainer() { // wanneer button begin in ingedrukt laat de game zien
    let guessContainer = document.getElementById("guess-container");
    guessContainer.style.display = "block";
    startNewRound();
}

function checkGuess(event) {
    event.preventDefault();

    const inputGuess = document.getElementById("input-guess");
    const userGuess = inputGuess.value.trim();

    if (userGuess === "q") {
       location.reload()
    }

    const guessNumber = parseInt(userGuess);

    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 1000) {
        document.getElementById("output").innerHTML = "Kies een geldig nummer alstublieft";
        return;
    }

    pogingenLeft--;
    totalGuesses++;

    if (guessNumber === secretNummer) {
        document.getElementById("winning").innerText = `Gefeliciteerd! Je hebt het geraden in ${totalGuesses} pogingen.`;
        document.getElementById("output").innerText = ''; //niks display
        document.getElementById("output-hint").innerText = ''; //niks display
        inputGuess.placeholder = 'Typ een getal om te raden';
        roundwin ++;
        console.log(roundwin)
    
        setTimeout(function() {
            currentRound++;
            if (currentRound <= 20) {
                startNewRound();
            } else {
                document.getElementById("output-hint").innerText = "Het spel is afgelopen.";
            }
        }, 2000); //sleep voor2 sec
    }
     else {
        let message = '';
        let messageHint = '';

        if (pogingenLeft === 0) {
            message = "Helaas, geen pogingen meer over. Het juiste antwoord was " + secretNummer + ".";
            inputGuess.placeholder = 'Typ een getal om te raden';
            currentRound++;
            if (currentRound <= 20) {
                startNewRound();
            } else {
                document.getElementById("output-hint").innerText = "Het spel is afgelopen.";
            }
        } else {
            const difference = Math.abs(secretNummer - guessNumber);
            if (difference <= 10) {
                message = 'Heel Warm! ';
            } else if (difference <= 20) {
                message = 'Warm! ';
            } else if (difference <= 50) {
                message = 'Koud';
            } else {
                message = "Heel Koud";
            }

            if (guessNumber < secretNummer) {
                messageHint = 'Probeer hoger.';
            } else {
                messageHint = 'Probeer lager.';
            }

            document.getElementById("output").innerText = message;
            document.getElementById("output-hint").innerText = messageHint + `  Je hebt nog ${pogingenLeft} pogingen over.`;
        }
    }

    inputGuess.value = '';
}