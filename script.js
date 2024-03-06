//user inputs a string -> rock, paper or scissors to lower case
let playerSelection = prompt("Choose one rock, paper or scissors: ", "").toLowerCase();


function getComputerChoice() {
    //computer selects 3 random numbers
    let randomComputerSelection = Math.floor(Math.random() * 3);
    //If the random number equal value to 0 return "rock"
    if(randomComputerSelection === 0) {
        let firstRandomChoice = "rock";
        return firstRandomChoice;
    }
}