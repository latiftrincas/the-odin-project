//  code for bacteria, toothpaste, teeth game 
const Bacteria = document.getElementById("BacteriaPlayer");
const Toothpaste = document.getElementById("ToothpastePlayer");
const Teeth = document.getElementById("TeethPlayer");
const ScoreBoard = document.getElementById("Score");

let ComputerScore = 0;
let UserScore = 0;

// function generates random choice for computer player
function GetComputerChoice() {
    const Choice = ["bacteria", "toothpaste", "teeth"];
    return Choice[Math.floor(Math.random() * Choice.length)]
}

// function that asks user for play
function GetUserChoice() {
    Bacteria.addEventListener("click", function () {
        Choice = "bacteria"
        Round(Choice)
    });
    Toothpaste.addEventListener("click", function () {
        Choice = "toothpaste"
        Round(Choice)
    });
    Teeth.addEventListener("click", function () {
        Choice = "teeth"
        Round(Choice)
    });
}

function Outcome(ComputerPlay, UserPlay) {
    const plays = [ComputerPlay, UserPlay];
    if (ComputerPlay == UserPlay) {
        return "draw"
    }
    // if statement that determines winner based on what is in the array
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

function Round(Choice) {
    let ComputerPlay = GetComputerChoice();
    console.log("Computer has played " + ComputerPlay)
    let UserPlay = Choice;
    console.log("User has played " + UserPlay)
    // find the winner of game using outcome function
    let winner = Outcome(ComputerPlay, UserPlay);

    // if statement dermines winner by basing it on the returned string of outcome() and compares to choice by computer
    if (winner == "draw") {
        return "draw"
    } else if (winner == ComputerPlay) {
        ComputerScore++;
        ScoreBoard.textContent = UserScore + " : " + ComputerScore;
    } else if (winner == UserPlay) {
        UserScore++;
        ScoreBoard.textContent = UserScore + " : " + ComputerScore;
    }
}

function Game() {
    for (let i = 0; i < 3; i++) {
        winner = GetUserChoice();
        console.log(winner)
        if (winner == "ComputerWins") {
            ComputerScore++;
            outcome = "The computer has won!\nThe score is\nComputer: " + ComputerScore + "\nUser: " + UserScore;
            console.log(outcome)
        } else if (winner == "UserWins") {
            UserScore++;
            outcome = "The User has won!\nThe score is\nComputer: " + ComputerScore + "\nUser: " + UserScore;
            console.log(outcome)
        } else if (winner == "draw") {
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

Bacteria.addEventListener("mouseenter", function () {
    Bacteria.style.border = "2px solid blue";
});
Bacteria.addEventListener("mouseleave", function () {
    Bacteria.style.border = "2px solid black";
});
Toothpaste.addEventListener("mouseenter", function () {
    Toothpaste.style.border = "2px solid blue";
});
Toothpaste.addEventListener("mouseleave", function () {
    Toothpaste.style.border = "2px solid black";
});
Teeth.addEventListener("mouseenter", function () {
    Teeth.style.border = "2px solid blue";
});
Teeth.addEventListener("mouseleave", function () {
    Teeth.style.border = "2px solid black";
});

GetUserChoice()



