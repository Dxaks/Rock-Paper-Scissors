
// create a function that randomly returns one of the three strings (rock, paper, scissors) //

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// create a function that returns a human choice //

function getHumanChoice() {
    let userInput = prompt('Enter Rock, Paper or Scissors');
    return userInput.toLowerCase();
    }
// create a variables that read and save the current score for each player //

    let playerScore = 0;
    let computerScore = 0;

// create a function that plays a single round of rock, paper, scissors //

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if (computerChoice === humanChoice) {
        return `it is a tie, you both chooses ${humanChoice}.`
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        playerScore++;
        return `You win. ${humanChoice} beats ${computerChoice}. 
                Scores ${playerScore} : ${computerScore}`
    }

    else {
        computerScore++;
        return `You lose. ${computerChoice} beats ${humanChoice}.
                Scores ${playerScore} : ${computerScore}`
    }
}

// create a function that plays 5 rounds of rock, paper, scissors //

function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        console.log(playRound());
    }

    if (playerScore > computerScore) {
        console.log(`You win the game! Final score: ${playerScore} : ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lose the game! Final score: ${playerScore} : ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final score: ${playerScore} : ${computerScore}`);
    }
}

playGame();