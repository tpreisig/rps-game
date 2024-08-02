const choices = ['rock', 'paper', 'scissors'];
let history = [];

document.querySelectorAll('#rock, #paper, #scissors').forEach(btn => {
    btn.addEventListener('click', function() {
        const userChoice = this.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        let result;
        if (userChoice === computerChoice) {
            result = 'It\'s a tie!';
        } else if ((userChoice === 'rock' && computerChoice === 'scissors') || 
                   (userChoice === 'paper' && computerChoice === 'rock') || 
                   (userChoice === 'scissors' && computerChoice === 'paper')) {
            result = 'You win!';
        } else {
            result = 'You lose!';
        }

        document.getElementById('result').textContent = result;
        history.push(`You chose ${userChoice}, computer chose ${computerChoice}: ${result}`);
        displayHistory();
    });
});

function displayHistory() {
    const historyList = document.getElementById('history');
    historyList.innerHTML = '';
    for (let game of history) {
        const listItem = document.createElement('li');
        listItem.textContent = game;
        historyList.appendChild(listItem);
    }
    const lastListItem = document.querySelector('li:last-child');
    lastListItem.style.color = `#${Math.floor(Math.random()*0xffffff).toString(16)}`;
    lastListItem.style.fontWeight = 'bold';


}

document.getElementById('clear-history').addEventListener('click', function() {
    history = [];
    displayHistory();
});