function getComputerChoice() {
    let selection = Math.floor(Math.random() * 3); // Get random number between 0 and 2

    if (selection == 0) {
        selection = "Rock";
    } else if (selection == 1) {
        selection = "Paper";
    } else {
        selection = "Scissors";
    }

    return selection;
}

function playRound(playerSelection, computerSelection) {
    let firstLetter = playerSelection.charAt(0).toUpperCase(); // First letter uppercase
    let rest = playerSelection.slice(1).toLowerCase(); // Rest of string lowercase

    playerSelection = firstLetter + rest; // Make playerSelection the same for comparisons

    let win = "You win! " + playerSelection + " beats " + computerSelection + "!";
    let lose = "You lose! " + computerSelection + " beats " + playerSelection + "!";

    // Basic comparisons to determine the winner
    if (playerSelection === computerSelection) {
        return "Draw!";
    } else {
        if (playerSelection === "Rock") {
            if (computerSelection === "Paper") {
                return lose;
            } else {
                return win;
            }
        } else if (playerSelection === "Paper") {
            if (computerSelection === "Scissors") {
                return lose;
            } else {
                return win;
            }
        } else {
            if (computerSelection === "Rock") {
                return lose;
            } else {
                return win;
            }
        }
    }
}

function game() {
    // Initialize score
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        // Initialize choices and get result
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock, paper, scissors shoot!");
        let result = playRound(playerSelection,computerSelection);

        // Update score
        if (result === "Draw!") {
            computerScore += .5;
            playerScore += .5;
        } else if (result.charAt(4) === "w") {
            playerScore += 1; // The charAt(4) can only be a 'w' if the player won
        } else {
            computerScore += 1;
        }

        // Print results
        console.log(result, "Player: " + playerScore, "Computer: " + computerScore);
    }

    // Declare winner
    if (playerScore > computerScore) {
        console.log("You beat the computer! Congradulations!");
    } else if (playerScore < computerScore) {
        console.log("Oh no! The computer won.");
    } else {
        console.log("It's a draw. Boo.");
    }
}

game();