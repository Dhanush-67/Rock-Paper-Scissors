
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        return "You lose! Paper beats Rock";
    }

    else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        return "You win! Rock beats Scissors";
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return "You win! Paper beats Rock";
    }

    else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        return "You lose! Scissors beats Paper";
    }

    else if(humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        return "You lose! Rock beats Scissors";
    }

    else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return "You win! Scissors beats Paper";
    }

    else if(humanChoice === computerChoice){
        return "It's a tie!";
    }

    else{
        return "Invalid choice, please try again.";
    }

}

function playGame(){
    let round = 0;
    while(round < 5){
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        round++;
    }
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function getComputerChoice(){
    num = getRandomInt(3);
    if(num === 1){
        return "rock";
    } else if(num === 2){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    str = prompt("Enter your choice: Rock, Paper, Scissors, SHOOT!");
    return str;
}

playGame()
console.log(`computer had ${computerScore} point`);
console.log(`you had ${humanScore} point`);


if (computerScore > humanScore) {
  console.log("Sorry, Computer wins!");

} else if (computerScore === humanScore) {
  console.log("No winner Play an extra round!");
} else {
  console.log("Congrat, You win the game!");
}