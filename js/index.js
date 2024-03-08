const controleInput = document.getElementById('controle');
const antwoordInput = document.getElementById('antwoord');

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function getRandomOperation() {
  const operations = ['+', '-', '*', '/'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
}

function randomsom() {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operation = getRandomOperation();
  const question = `${num1} ${operation} ${num2}`
  const result = eval(question);

  return { question, result };
}

function displayRandomSom() {
  const { question, result } = randomsom();
  const somInput = document.getElementById('som');

  somInput.value = question;
  antwoordInput.value = '';
  controleInput.value = result;
}

function checkAnswer() {

  const userAnswer = parseInt(antwoordInput.value, 10);
  const correctAnswer = parseInt(controleInput.value, 10);

  if (!isNaN(userAnswer)) {
    if (userAnswer === correctAnswer) {
      alert('Correct! Well done.');
    } else {
      alert(`helaas, het antwoord was ${correctAnswer}` );
    }
    displayRandomSom();
  } else {
    alert('Please enter a valid number as your answer.');
  }
}

document.getElementById('submit-button').addEventListener('click', function(event) {
  event.preventDefault();
  checkAnswer();
});


displayRandomSom();
