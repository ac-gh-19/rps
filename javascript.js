function getComputerChoice() {
    let compChoice = Math.floor((Math.random() * 3) + 1);
    switch(compChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3: 
            return "scissors";
    }
}

function getPlayerChoice() {
    let userChoice = prompt("Rock/Paper/Scissors");
    return userChoice.toLowerCase();
}

function displayScore() {
    console.log(`Your Score: ${humanScore} - Computer Score: ${computerScore}`);
}

function playGame() {

    let playRound = function (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("You TIE!");
            return;
        }
    
        switch (humanChoice) {
            case "rock":
                computerChoice === "paper" ?
                (console.log("You lose! Paper beats Rock."), computerScore++) :
                (console.log("You win! Rock beats Scissors"), humanScore++) ;
                break;
            case "paper":
                computerChoice === "rock" ?
                (console.log("You win! Paper beats Rock."), humanScore++) :
                (console.log("You lose! Scissors beats Paper"), computerScore++) ;
                break;
            case "scissors":
                computerChoice === "rock" ?
                (console.log("You lose! Rock beats Scissors."), computerScore++) :
                (console.log("You win! Scissors beats Paper"), humanScore++);
                break;
        }
    }

    for (let i = 0; i < 5; ++i) {
        let humanSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        displayScore();
    }

    humanScore < computerScore ? 
        console.log("Computer WINS!") :
        humanScore > computerScore ? 
        console.log("Human WINS!") :
        console.log("TIEEE!");

}

let humanScore = 0;
let computerScore = 0;
playGame();