function getComputerChoice() {
    let selection = Math.floor(Math.random() * 3);

    if (selection == 0) {
        selection = "Rock";
    } else if (selection == 1) {
        selection = "Paper";
    } else {
        selection = "Scissors";
    }

    return selection;
}