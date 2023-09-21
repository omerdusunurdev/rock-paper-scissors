let computerScore = 0;
let playerScore = 0;



function getComputerChoice() {
    const compChoices = ["Rock", "Paper", "Scissors"];

    let choice = Math.floor(Math.random()* compChoices.length);

    return compChoices[choice];

}

function getplayerSelection() {
    let choice = prompt("Choose");
    return choice;
}


function playRound() {

    const computerSelection = getComputerChoice().toLowerCase();
    const playerSelection = getplayerSelection().toLowerCase();

    if(computerSelection === playerSelection) {
        console.log("It's a tie!");
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
    }
}

    function play() {
        for(let i = 0; i<5; i++){

            playRound();
            console.log("Player Score:" + playerScore);
            console.log("Computer Score:" + computerScore);

        }
    }

play();

