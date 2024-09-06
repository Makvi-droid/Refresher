function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3) + 1;
    return compChoice;
}

console.log(getComputerChoice());

