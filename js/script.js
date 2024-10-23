var buttonRock = document.getElementById('button-rock');
var buttonPaper = document.getElementById('button-paper');
var buttonScissors = document.getElementById('button-scissors');

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function printMessage(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    var playerMove = argButtonName;
    var randomNumber = Math.floor(Math.random() * 3 + 1);
    var computerMove = getMoveName(randomNumber);

    displayResult(playerMove, computerMove);
}

function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        return 'kamień'; // Domyślnie 'kamień' w razie błędu
    }
}

function displayResult(playerMove, computerMove) {
    if (
        (playerMove == 'papier' && computerMove == 'kamień') ||
        (playerMove == 'kamień' && computerMove == 'nożyce') ||
        (playerMove == 'nożyce' && computerMove == 'papier')
    ) {
        printMessage('Wygrywasz!');
    } else if (playerMove == computerMove) {
        printMessage('Remis');
    } else {
        printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
}

buttonRock.addEventListener('click', function () {
    buttonClicked('kamień');
});

buttonPaper.addEventListener('click', function () {
    buttonClicked('papier');
});

buttonScissors.addEventListener('click', function () {
    buttonClicked('nożyce');
});