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

let computerSelection = getComputerChoice();

function getplayerSelection() {
    let input = prompt('What is your choice?');
    let lowerInput = input.toLowerCase();
    return lowerInput;
}

let playerSelection = getplayerSelection();


function playGame(playerSelection, computerSelection) {
    

    if (playerSelection === computerSelection) {
        return 'You tied ' + computerSelection + ' is the same as ' + playerSelection; 
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! ' + computerSelection + ' is cut up by your ' + playerSelection;;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! ' + computerSelection + ' is covered by your ' + playerSelection;;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! ' + computerSelection + ' is crushed by your ' + playerSelection;
    } else {
        return 'You lose ' + computerSelection + ' beats ' + playerSelection;;
    }
}
        

        
console.log(playGame(playerSelection, computerSelection));  