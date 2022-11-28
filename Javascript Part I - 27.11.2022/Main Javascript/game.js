function main() {
    const rules = ['rock', 'paper', 'scissors']
    var players = {
        You: 0,
        CPU: 0
    };

    var messages = {
        playMessage: "Let's play! Make your choice (rock, paper or scissors): ",
        inccorectPlayMessage: "The given word is not allowed. Please, make your choice again (rock, paper or scissors): ",
        finalQuestion: "Would you like to play again? (yes or no)",
        inccorectFinalQuestion: "I am not sure to understand. Please choose again (yes or no): "
    };

    function computerPlay() {
        const min = 0;
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
            return `No winner! Both choosed the ${playerCheck}!`;
        } else if (playerCheck.length >= computerCheck.length) {
            ++players.You;
            return `You Win! ${playerCheck} beats ${computerCheck}!`;
        } else if (playerCheck.length <= computerCheck.length) {
            ++players.CPU;
            return `You Lose! ${computerCheck} beats ${playerCheck}!`;
        }
    }

    function game() {

        for (let i = 1; i <= 5; ++i) {

            var playerSelection = prompt(messages.playMessage).toLowerCase();

            while (!rules.includes(playerSelection)) {
                playerSelection = prompt(messages.inccorectPlayMessage).toLowerCase();
            }
            const computerSelection = computerPlay();

            console.log(playRound(playerSelection, computerSelection));

            if (i == 5) {
                var finalQuestion = prompt(messages.finalQuestion).toLowerCase();

                while (finalQuestion !== 'yes' && finalQuestion !== 'no') {
                    finalQuestion = prompt(messages.inccorectFinalQuestion);
                }

                if (finalQuestion === 'yes') {
                    if (players.You > players.CPU) {
                        console.log(`You are the winner from five games! Your final score is: ${players.You}; Computer: ${players.CPU}.`);
                    } else if (players.You === players.CPU) {
                        console.log(`This time you made equal score! Your final score is: ${players.You}; Computer: ${players.CPU}.`);
                    } else {
                        console.log(`You lose this time! Your final score is: ${players.You}; Computer: ${players.CPU}.`);
                    }

                    i = 0;
                    players.You = 0;
                    players.CPU = 0;
                } else {
                    if (players.You > players.CPU) {
                        console.log(`You are the winner from five games! Your final score is: ${players.You}; Computer: ${players.CPU}.`);
                    } else if (players.You === players.CPU) {
                        console.log(`This time you made equal score! Your final score is: ${players.You}; Computer: ${players.CPU}.`);
                    } else {
                        console.log(`You lose this time! Your final score is: ${players.You}; Computer: ${players.CPU}.`);
                    }

                    console.log('See you next time ;)');
                }
            }
        }


    }

    game();
}
main();