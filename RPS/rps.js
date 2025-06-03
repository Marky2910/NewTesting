// Rock Paper Scissors Game

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    }
    return "You lose!";
}

function playGame() {
    const playerChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (!["rock", "paper", "scissors"].includes(playerChoice)) {
        console.log("Invalid choice. Please try again.");
        return;
    }

    const computerChoice = getComputerChoice();
    console.log(`You chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    const result = determineWinner(playerChoice, computerChoice);
    console.log(result);
}

// Start the game
playGame();