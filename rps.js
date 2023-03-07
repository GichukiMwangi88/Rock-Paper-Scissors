//Computer Choice
function getComputerChoice() {
    let selection = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = selection[Math.floor(Math.random() * selection.length)];
    return computerSelection.toLowerCase();
}

//Player Selection
/*let playerSelection = (prompt('Choose: Rock, Paper or Scissors')).toLowerCase();*/

let computerScore = 0;
let playerScore = 0;
let draws = 0;

//Variable to store the number of games played
let rounds = 0;

//One round of game
function playRound(computerSelection, playerSelection) {

    if (playerSelection === computerSelection) {
        draws++;
        rounds++;
        return "It's a tie!";

    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
            rounds++;
            return 'Computer wins!';
        } else {
            playerScore++;
            rounds++;
            return 'You win!';
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            rounds++;
            return 'Computer wins!';
        } else {
            playerScore++;
            rounds++;
            return 'You win!';
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore++;
            rounds++;
            return 'Computer wins!';
        } else {
            playerScore++;
            rounds++;
            return 'You win!';
        }
    }

};

//Global variables for computer and player picks
var computerPick;
var playerPick;

//Use DOM to select the buttons, player and computer choices

const selections = document.querySelectorAll('.buttons');
const userChoice = document.getElementById("pChoice");
const compChoice = document.getElementById("cChoice");
const winner = document.getElementById("winner");

//Event listener when player makes selection
//The player selection should be saved 
//Call the playRound function to play game
//Print the player and computer choice on the page

selections.forEach(selection => {
    selection.addEventListener('click', function (e) {
        playerPick = e.target.id;
        playRound(getComputerChoice(), playerPick);
        printSelections();
        updateScore();
        checkWinner();
        endGame();

    });
});

//Function to display computer and player selections on the page

function printSelections() {
    userChoice.textContent = playerPick;
    compChoice.textContent = getComputerChoice();
}

//Function to display and update the game scores on the page

function updateScore() {
    document.getElementById("pScore").textContent = playerScore;
    document.getElementById("cScore").textContent = computerScore;
    document.getElementById("draws").textContent = draws;
    document.getElementById("rounds").textContent = rounds;
}

//Function to announce winner after either the playerScore or computerScore
// equals 5.

function checkWinner() {
    if (playerScore === 5) {
        return winner.textContent = "Congratulations! You won!";
    } else if (computerScore === 5) {
        return winner.textContent = "Awwww. You lose!";
    }
};

//Function to end game and reset both scores back to zero

function endGame() {
    if (computerScore === 5 || playerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        draws = 0;
        rounds = 0;
    }

};




















/*const winner = document.getElementById("winner");

function checkWinner() {
    if (playerScore > computerScore) {
        return winner.textContent = "Congratulations. You win!";
    } else if (computerScore > playerScore) {
        return winner.textContent = "Computer wins! Try again!";
    } else {
        return winner.textContent = "It's a tie!";
    }


}


//Function to update the score
//Use DOM to select the elements to update

function updateScore() {
    document.getElementById("pScore").textContent = playerScore;
    document.getElementById("cScore").textContent = computerScore;
    document.getElementById("draws").textContent = draws;
    document.getElementById("draws").textContent = rounds;
}

//Function to reset scores to zero after 5 rounds

function gameEnd() {
    if (rounds === 5) {
        if (checkWinner()) {
            playerScore = computerScore = 0;
            updateScore();
        }

    }
};






/*console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(computerSelection, playerSelection));
*/

//Game function that plays 5 round game, keeps score and reports winner*/



/*console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(computerSelection, playerSelection));*/

