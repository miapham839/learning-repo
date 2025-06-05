// Retrieve score from localStorage or initialize it
var storedScore = localStorage.getItem('score');
var score;
if (storedScore) {
    score = JSON.parse(storedScore);
}
else {
    score = {
        wins: 0,
        losses: 0,
        ties: 0,
    };
}
if (score === null) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}
function playGame(playerMove) {
    var computerMove = pickComputerMove();
    var result = '';
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        }
        else if (computerMove === 'paper') {
            result = 'You win.';
        }
        else {
            result = 'Tie.';
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        }
        else if (computerMove === 'paper') {
            result = 'Tie.';
        }
        else {
            result = 'You lose.';
        }
    }
    else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        }
        else if (computerMove === 'paper') {
            result = 'You lose.';
        }
        else {
            result = 'You win.';
        }
    }
    // Update the score
    if (result === 'You lose.') {
        score.losses += 1;
    }
    else if (result === 'You win.') {
        score.wins += 1;
    }
    else {
        score.ties += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    alert("You picked ".concat(playerMove, ". Computer picked ").concat(computerMove, ". ").concat(result, "\n") +
        "Wins: ".concat(score.wins, ", Losses: ").concat(score.losses, ", Ties: ").concat(score.ties));
}
function pickComputerMove() {
    var randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return 'rock';
    }
    else if (randomNumber < 2 / 3) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}
function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
}
