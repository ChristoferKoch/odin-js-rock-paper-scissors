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

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection));