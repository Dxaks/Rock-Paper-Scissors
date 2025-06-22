// selecting the container and buttons
const container = document.getElementById("container");
const btn = document.querySelectorAll("button");
const scoreContainer = document.getElementById("score_container");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const result = document.getElementById("result");

// declaring the scores and the play round increments outside the onclick event to prevent reset each time the user clicks the button
let playerScore = 0;
let compScore = 0;
let playRound = 0;

// adding a click event to the container
container.addEventListener("click", (even) => {

// exit if the click element is not a button
  if(!even.target.matches("button")) return; 
    
  // checking if the clicked element is a button and also to get the user selection
    function getUserSelection() {
    const userChoice = even.target.textContent;
    even.stopPropagation();
    return userChoice.toLowerCase();
}
  
// function to get a random selection for the computer
    function getCompSelection() {
    let randomNumber = Math.floor(Math.random() *3 ) +1;
    
    if (randomNumber === 1) {
      return "rock";
    } else if (randomNumber === 2) {
      return "paper";
    } else if (randomNumber === 3) {
      return "scissors";
    }
}
   
    const userSlection = getUserSelection();
    const compSelection = getCompSelection();
    
    // the game logic to determine the winner
  function getplayRound() {
  
        if (compSelection === userSlection) {
         result.textContent = `it's a tie. You both choose ${userSlection} for this round.`;
        
      } else if (
        (userSlection === "rock" && compSelection === "scissors") || (userSlection === "paper" && compSelection === "rock") || (userSlection === "scissors" && compSelection === "paper")
        )
      { playerScore++
        player.textContent = `Player Score: ${playerScore}`;
         result.textContent = `You win this round! You chose ${userSlection} and the computer chose ${compSelection}.`;
      }
      else {compScore++;
        computer.textContent = `Computer Score: ${compScore}`;
         result.textContent = `You lose this round! You chose ${userSlection} and the computer chose ${compSelection}.`;
      }
      
    }

    playRound++;
    getplayRound();

    if (playerScore > compScore && playRound === 5) {
        btn.forEach(b => b.disabled = true);
        result.textContent = "You win the game! \n Refresh to play again";
    } else if (compScore > playerScore && playRound === 5) {
        btn.forEach(b => b.disabled = true);
        result.textContent = "Computer wins the game! \n Refresh to play again";      
    } else if (playRound === 5) {
        btn.forEach(b => b.disabled = true);
        result.textContent = "It's a tie! Refresh to play again";      
    } 
})