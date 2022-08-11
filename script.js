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
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
        return 'you tied ' + computerSelection + ' ' + playerSelection; 
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'you win! ' + computerSelection + ' ' + playerSelection;;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'you win! ' + computerSelection + ' ' + playerSelection;;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'you win! ' + computerSelection + ' ' + playerSelection;
    } else {
        return 'you lose ' + computerSelection + ' ' + playerSelection;;
    }
}
        

        
console.log(playGame(playerSelection, computerSelection));  