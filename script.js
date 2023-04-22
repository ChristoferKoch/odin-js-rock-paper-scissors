// Initialize score as global variables
let computerScore = 0;
let playerScore = 0;

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

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const win = "You win! " + playerSelection + " beats " + computerSelection + "!";
    const lose = "You lose! " + computerSelection + " beats " + playerSelection + "!";
    const displayResult = document.querySelector(".results");
    let result;

    // Basic comparisons to determine the winner
    if (playerSelection === computerSelection) {
        computerScore += .5;
        playerScore += .5;
        result = "Draw!";
    } else {
        if (playerSelection === "Rock") {
            if (computerSelection === "Paper") {
                computerScore += 1;
                result = lose;
            } else {
                playerScore += 1;
                result = win;
            }
        } else if (playerSelection === "Paper") {
            if (computerSelection === "Scissors") {
                computerScore += 1;
                result = lose;
            } else {
                playerScore += 1;
                result = win;
            }
        } else {
            if (computerSelection === "Rock") {
                computerScore += 1;
                result = lose;
            } else {
                playerScore += 1;
                result = win;
            }
        }
    }

    // Print results
    displayResult.innerText = `${result} Player: ${playerScore} Computer: ${computerScore}`;
}

function game() {
    // Create basic UI structure
    const body = document.querySelector('body');
    const buttonContainer = document.createElement('div');
    const rockBtn = document.createElement('button');
    const paperBtn = document.createElement('button');
    const scissorsBtn = document.createElement('button');
    const resultContainer = document.createElement('div');

    rockBtn.classList.add('playerChoice');
    rockBtn.textContent = 'Rock';
    buttonContainer.appendChild(rockBtn);
    paperBtn.classList.add('playerChoice');
    paperBtn.textContent = 'Paper';
    buttonContainer.appendChild(paperBtn);
    scissorsBtn.classList.add('playerChoice');
    scissorsBtn.textContent = 'Scissors';
    buttonContainer.appendChild(scissorsBtn);

    body.appendChild(buttonContainer);

    resultContainer.classList.add('results');

    body.appendChild(resultContainer);

    // Initialize choices and get result
    let rounds = 0;
    const choices = document.querySelectorAll('.playerChoice');

    choices.forEach((choice) => {
        choice.addEventListener('click', (e) => {
            console.log(rounds);
            rounds++;
            const displayResult = document.querySelector('.results');
            if (rounds < 6) {
                playRound(e.target.innerText);
                if (rounds === 5) {
                    // Declare winner
                    if (playerScore > computerScore) {
                        displayResult.innerText = `Player: ${playerScore} Computer: ${computerScore}\nYou beat the computer! Congradulations!`;
                    } else if (playerScore < computerScore) {
                        displayResult.innerText = `Player: ${playerScore} Computer: ${computerScore}\nOh no! The computer won.`;
                    } else {
                        displayResult.innerText = `Player: ${playerScore} Computer: ${computerScore}\nIt's a draw. Boo.`;
                    }

                }
            } else {
                displayResult.innerText = `Player: ${playerScore} Computer: ${computerScore}\nGood game. Refresh to play again.`;
            }
        });
    });
}

game();