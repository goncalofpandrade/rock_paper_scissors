//user inputs a string -> rock, paper or scissors to lower case
let playerSelection = prompt("Choose one rock, paper or scissors: ", "").toLowerCase();

//computer gets 1 of 3 random choices for the rock, paper and scissors game  
function getComputerChoice() {
    //computer selects 3 random numbers
    let randomComputerSelection = Math.floor(Math.random() * 3);
    //If the random number equal value to 0 return "rock"
    if(randomComputerSelection === 0) {
        let firstRandomChoice = "rock";
        return firstRandomChoice;
    }
    //If the random number equal value to 1 return "paper"
    else if(randomComputerSelection === 1) {
        let secondRandomChoice = "paper";
        return secondRandomChoice;
    }
    //If the random number equal value to 2 return "scissors"
    else if(randomComputerSelection === 2) {
        let thirdRandomChoice = "scissors";
        return thirdRandomChoice;
    }
}

//call getComputerChoice function
getComputerChoice();

//assign a new variable with the getComputerChoice() function
let computerSelection = getComputerChoice();

//here is where the rock, paper and scissors game starts to play 
function playRound(playerSelection, computerSelection) {

}