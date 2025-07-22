let humanScore = 0;
let computerScore = 0;
let scoreboard = document.querySelector("#scoreboard");
let score = document.querySelector("#score");
let playerscore = document.querySelector("#playerscore");
let computerscore = document.querySelector("#computerscore");
let oppbuttons = document.querySelectorAll(".oppbuttons");

function highlightComputerChoice(computerChoice) {
    oppbuttons.forEach(btn => {
        btn.style.background = "black";
        btn.style.color = "white";
        if (btn.textContent.toLowerCase() === computerChoice) {
            btn.style.background = "white";
            btn.style.color = "black"
            setTimeout(() => {
                btn.style.background = "black";
                btn.style.color = "white";
            }, 1000);
        }
    })
}


let playRound = function(humanChoice, computerChoice) {
    highlightComputerChoice(computerChoice);
    
    if (humanChoice === computerChoice) {
        scoreboard.textContent = "You TIE!";
        return;
    }

    switch (humanChoice) {
        case "rock":
            computerChoice === "paper" ?
            (scoreboard.textContent = "You lose! Paper beats Rock.", computerScore++) :
            (scoreboard.textContent = "You win! Rock beats Scissors", humanScore++) ;
            break;
        case "paper":
            computerChoice === "rock" ?
            (scoreboard.textContent = "You win! Paper beats Rock.", humanScore++) :
            (scoreboard.textContent = "You lose! Scissors beats Paper", computerScore++) ;
            break;
        case "scissors":
            computerChoice === "rock" ?
            (scoreboard.textContent = "You lose! Rock beats Scissors.", computerScore++) :
            (scoreboard.textContent = "You win! Scissors beats Paper", humanScore++);
    }

    
    displayScore(computerScore, humanScore);
}

let buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener("click", e => {
        let playerChoice = e.target.id;
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    });

    btn.addEventListener("mouseover", e => {
        e.target.style.background = "white";
        e.target.style.color = "black";
    })

    btn.addEventListener("mouseout", e => {
        e.target.style.background = "black";
        e.target.style.color = "white";
    })
})


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

function resetScore() {
    humanScore = 0;
    computerScore = 0;
    score.textContent="";
    scoreboard.textContent="";
    playerscore.textContent = 0;
    computerscore.textContent = 0;
}

function displayScore() {
    score.textContent = `Your Score: ${humanScore} - Computer Score: ${computerScore}`;
    playerscore.textContent = humanScore;
    computerscore.textContent = computerScore;
    if (humanScore == 5) {
        alert("Player wins");
        resetScore();
    } else if (computerScore == 5) {
        alert("Computer wins");
        resetScore();
    } 
}