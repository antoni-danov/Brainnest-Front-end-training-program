import * as game from './game.js';

function main() {
    const elements = {
        types: ['h1', 'input', 'button'],
        class: ['title', 'userInput', 'submitName'],
        text: ['Rock, Paper, Scissors',
            '',
            'Start'
        ]
    };

    const buttons = ['Rock', 'Paper', 'Scissors'];
    const buttonsClasses = ['btn btn-success m-2', 'btn btn-danger m-2', 'btn btn-warning m-2'];
    for (let i = 0; i < elements.types.length; i++) {
        elementFactory(elements.types[i], elements.class[i], elements.text[i]);
    }

    document.querySelector('.submitName').addEventListener('click', () => {
        var currentValue = document.querySelector('.userInput').value;

        if (currentValue != null || currentValue != undefined) {

            elementFactory('h2', 'userName', `Wellcome to the game, ${currentValue}!`);
            elementFactory('h3', 'introMessage', 'Let\'s play! Make your choice!');
            sectionButtonFactory('section', 'mainSection', '');
            elementFactory('div', 'messages', '');
            elementFactory('div', 'results', `Your score: ${game.players.playerName} Equal games: ${game.players.equalGames} Computer score: ${game.players.CPU}`);


            if (document.body.querySelector('h3')) {
                document.querySelector('.userInput').setAttribute('style', 'display: none');
                document.querySelector('.submitName').setAttribute('style', 'display: none');
            }
        }

    }, { once: true });
    document.addEventListener('click', (event) => {
        if (event.target.className === 'btn btn-success m-2' ||
            event.target.className === 'btn btn-danger m-2' ||
            event.target.className === 'btn btn-warning m-2') {

            const value = event.target.textContent;
            var currentSession = game.game(value);

            if (currentSession != null) {
                document.querySelector('.messages').textContent = currentSession;
                document.querySelector('.results').textContent = `Your score: ${game.players.playerName} Equal games: ${game.players.equalGames} Computer score: ${game.players.CPU}`;
            }
            if (game.players.playerName >= 5) {
                document.querySelector('.messages').textContent = game.finalResultsMessages();
                finalDescision();
            } else if (game.players.CPU >= 5) {
                document.querySelector('.messages').textContent = game.finalResultsMessages();
                finalDescision();
            }


        }
    });

    function elementFactory(type, className, text) {

        var element = document.createElement(type);
        element.className = className;
        element.textContent = text;

        document.body.append(element);


        if (type == 'input') {
            document.querySelector('input').placeholder = 'Enter your name';
        }

    }
    function sectionButtonFactory(type, className, text) {

        var section = document.createElement(type);
        section.className = className;
        section.textContent = text;

        for (let a = 0; a <= buttons.length - 1; a++) {

            var button = document.createElement('button');
            button.className = buttonsClasses[a];
            button.textContent = buttons[a];

            section.append(button);
        }

        document.body.append(section);
    }
    function finalDescision() {

        if (confirm(`${game.finalResultsMessages()} Would you like to play again?`)) {
            newGame();
        } else {
            document.querySelector('btn btn-success').disabled = true;
        }
    }
    function newGame() {
        game.players.CPU = 0;
        game.players.playerName = 0;
        game.players.equalGames = 0;

        document.querySelector('.messages').textContent = '';
        document.querySelector('.results').textContent = `Your score: ${game.players.playerName} Equal games: ${game.players.equalGames} Computer score: ${game.players.CPU}`;

    }
}
main();