function getComputerChoice() {
    let computerNumber = Math.floor(Math.random()*(3-1+1)+1);
    if (computerNumber === 1) {
        return 'paper';
    } else if (computerNumber === 2) {
        return 'rock';
    } else {
        return 'scissors';
    }
}

// let computerSelection = getComputerChoice();

function getplayerSelection() {
    let input = prompt('What is your choice?');
    let lowerInput = input.toLowerCase();
    return lowerInput;
}

// let playerSelection = getplayerSelection();


function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === computerSelection) {
        console.log('You tied ' + computerSelection + ' is the same as ' + playerSelection);
        return 0;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win! ' + computerSelection + ' is cut up by your ' + playerSelection);
        return 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win! ' + computerSelection + ' is covered by your ' + playerSelection);
        return 1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win! ' + computerSelection + ' is crushed by your ' + playerSelection);
        return 1;
    } else {
        console.log('You lose ' + computerSelection + ' beats ' + playerSelection);
        return 2;
    }
}

function gameScore(result) {
    

    if (result == 1) {
        return playerScore++;
    } else if (result == 2) {
        return computerScore++;
    }
}

// console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = getplayerSelection();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        gameScore(result);
    } 
}

let playerScore = 0;
let computerScore = 0;

game();

console.log(playerScore);
console.log(computerScore);