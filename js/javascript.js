// create a string of rock, paper, scissors //

const x = 'Rock';
const y = 'Paper';
const z = 'Scissors';

// create a function that randomly returns one of the three strings //

let randomNumber = Math.floor(Math.random() * 3) + 1;

// create a function that returns a computer choices //

function getComputerChoice() {
    if (randomNumber === 1) {
        return x;
    } else if (randomNumber === 2) {
        return y;
    } else if (randomNumber === 3) {
        return z;
    }
}

// create a function that returns a human choice //

let userInput = prompt('Enter Rock, Paper or Scissors');

// cerate a function that returns a human choice //

function getHumanChoice() {
    if (userInput === 'Rock') {
        return x;
    } else if (userInput === 'Paper') {
        return y;
    } else if (userInput === 'Scissors') {
        return z;
    }
}
console.log(getHumanChoice());
console.log(getComputerChoice());