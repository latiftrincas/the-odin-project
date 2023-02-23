//  code for bacteria, toothpaste, teeth game 


// function generates random choice for computer player
function GetComputerChoice() {
    const Choice = ["bacteria", "toothpaste", "teeth"];
    return Choice[Math.floor(Math.random() * Choice.length)]
}


// function that asks user for play, case insensitive but spelling sensitive 
function GetUserChoice() {
    const Plays = ["bacteria", "toothpaste", "teeth"];
    Choice = prompt("Please select one: Bacteria, Toothpaste or Teeth")
    Choice = Choice.toLowerCase();
    // loop until user chooses correct play
    while (Plays.includes(Choice) == false) {
        ChooseAgain = prompt("Watch your spelling!\nPlease select one: Bacteria, Toothpaste or Teeth");
        Choice = ChooseAgain.toLowerCase();
    }
    return Choice
}

function Outcome(play1, play2) {
    const plays = [play1, play2];
    if (play1 == play2) {
        return "draw"
    }
    if (plays.includes("bacteria")) {
        if (plays.includes("toothpaste")) {
            return "toothpaste"
        }
        else if (plays.includes("teeth")) {
            return "bacteria"
        }
    } else {
        return "teeth"
    }
}

function Round() {
    let ComputerPlay = GetComputerChoice();
    let UserPlay = GetUserChoice();
    let winner = Outcome(ComputerPlay, UserPlay);

    if (winner == ComputerPlay) {
        return "computer"
    } else {
        return "user"
    }
}

function Game() {
    ComputerScore = 0;
    UserScore = 0;
    for (let i = 0; i < 3; i++) {
        winner = Round();
        if (winner == "computer") {
            ComputerScore++;
            outcome = "The computer has won!\nThe score is\nComputer: " + ComputerScore + "\nUser: " + UserScore;
            console.log(outcome)
        } else if (winner == "user") {
            UserScore++;
            outcome = "The User has won!\nThe score is\nComputer: " + ComputerScore + "\nUser: " + UserScore;
            console.log(outcome)
        } else {
            console.log("Draw")
        }
    }
    if (ComputerScore > UserScore) {
        GameWinner = "You Suck!"
    } else {
        GameWinner = "Well done!"
    }
    return GameWinner
}
console.log(Game())