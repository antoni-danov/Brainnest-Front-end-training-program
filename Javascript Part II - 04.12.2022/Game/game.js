const rules = ['rock', 'paper', 'scissors']

export var players = {
    playerName: 0,
    CPU: 0,
    equalGames: 0
};

function computerPlay() {
    const min = 1;
    const max = 30;

    var choice = Math.floor(Math.random() * (max - min + 1) + min);

    if (choice >= 0 && choice <= 9) {
        return rules[0];
    } else if (choice >= 10 && choice <= 19) {
        return rules[1];
    } else {
        return rules[2];
    }
}

function playRound(playerSelection, computerSelection) {
    var playerCheck = playerSelection.toLowerCase();
    var computerCheck = computerSelection.toLowerCase();

    if (playerCheck.length === computerCheck.length) {
        ++players.equalGames;
        return `No winner! Both choosed the ${playerCheck}!`;
    } else if (playerCheck.length >= computerCheck.length) {
        ++players.playerName;
        return `You Win! ${playerCheck} beats ${computerCheck}!`;
    } else if (playerCheck.length <= computerCheck.length) {
        ++players.CPU;
        return `You Lose! ${computerCheck} beats ${playerCheck}!`;
    }
}

export function finalResultsMessages() {

    if (players.playerName > players.CPU) {
        return `You are the winner! Your final score is: ${players.playerName} Computer: ${players.CPU}.`;
    }
    return `You lose this time! Your final score is: ${players.playerName} Computer: ${players.CPU}.`;
}

export function game(playerSelection) {

    const computerSelection = computerPlay();

    return playRound(playerSelection, computerSelection);
}
