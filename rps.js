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




















