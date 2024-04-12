

    let container = document.querySelector('.container');
    let displayPairs = document.getElementById('displaypairs');
    let inputField = document.getElementById('nameInput');
    let displayField = document.getElementById('displayField');
    let privatedisplay = document.getElementById('Privatedisplay');
    let PrivatedLootje = document.getElementById('PrivatedLootje')
    let CloseBtn = document.getElementById('close')
    let Namen = [];

    let piet1 = document.getElementById('piet1');
    let piet2 = document.getElementById('piet2');
    let sint = document.getElementById('sint');

    function displayNames(event) {
        let input = inputField.value.trim();
        
        if (input !== '') {
            let Diplucate = false;

            displayField.querySelectorAll('li').forEach(names => {
                if(names.textContent.trim() === input) {
                    Diplucate = true;
                }
            });

            if(!Diplucate) {
            let listNames = document.createElement('li');

            listNames.textContent = input;
            displayField.appendChild(listNames);
            Namen.push(input)
            CountNames();
            inputField.value = ''; 
        } else {
            alert('This name is already in the list! if you still want your name in. also use your surname') ;
            inputField.value = '';
        }
    }
}
    inputField.addEventListener('blur', displayNames);
    
    function CountNames() {
        let NumberNames = displayField.children.length

        if (NumberNames === 3) {
            console.log('lengte is gelijk aan 3');
            extendNames(NumberNames);
        } else if(NumberNames > 3 ){
        extendNames(NumberNames)
        }
    }
    

    function extendNames(displayNumber) {
        const user_anwser = prompt(`U heeft de ${displayNumber} spelers bereikt. wil u er meer toevoegen (ja / nee)`);

        if(user_anwser === 'ja') {
            return
        } else {
            inputField.disabled = true;
            console.log(Namen)
            PrivateDisplay()
            // createDisplay()
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    // Function to generate pairs of names
    function generatePairs(names) {
        // Shuffle the names array
        const shuffledNames = shuffleArray([...names]);
    
        // Create pairs
        const pairs = [];
        for (let i = 0; i < shuffledNames.length; i++) {
            const pair = [shuffledNames[i], shuffledNames[(i + 1) % shuffledNames.length]];
            pairs.push(pair);
        }
    
        return pairs;
    }

function removeHiddenPriv() {
    privatedisplay.classList.remove('hidden')
}



function PrivateDisplay() {
    removeHiddenPriv()
    displayField.textContent = '';
    Namen.forEach(name => {
        let buttonName = document.createElement('button');
        buttonName.id = 'button_' + name;
        buttonName.classList.add('buttonName');
        buttonName.textContent = name;
        privatedisplay.appendChild(buttonName);
        buttonName.addEventListener('click', function(e) {
            SearchIndex(name);
        });
    })
}

function SearchIndex(name) {
    const pairs = generatePairs(Namen);
    pairs.forEach(pair => {
        const firstElement = pair[0];
        if (firstElement === name) {
            let lootje = document.createElement( 'p' );
            const formattedSublist = pair.join(' hebt ');
            const text = formattedSublist + ' getrokken';
            lootje.textContent = text.replace(firstElement, 'U')
            privatedisplay.style.display = 'none'
            PrivatedLootje.classList.remove('hidden')
            PrivatedLootje.appendChild(lootje)
        }
    });
}




