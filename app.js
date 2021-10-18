
let squareID = {
    row1col1: [0, 0],
    row1col2: [0, 1],
    row1col3: [0, 2],
    row2col1: [1, 0],
    row2col2: [1, 1],
    row2col3: [1, 2],
    row3col1: [2, 0],
    row3col2: [2, 1],
    row3col3: [2, 2]
}


class Game {
    constructor() {
        this.players = ['x', 'o'];
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
        this.playersTurn = 'player1';
    }
    playerInput() {
        let playerA = document.getElementById('playerOneInput').value;
        let playerB = document.getElementById('playerTwoInput').value;
        let playersArray = [playerA, playerB];
        let newPlayersArray = []


        for (let i = 0; i < playersArray.length; i++) {
            let savedElement = playersArray[i];
            let randomNumber = Math.floor(Math.random() * playersArray.length);

            playersArray[i] = playersArray[randomNumber];
            playersArray[randomNumber] = savedElement;
            newPlayersArray.push(savedElement);
            console.log(savedElement);
        }
        console.log(newPlayersArray);
        document.getElementById('playerX').innerHTML = 'X: ' + playersArray[0];
        document.getElementById('playerO').innerHTML = 'O: ' + playersArray[1];
        document.getElementById('playerOneInput').value = ''
        document.getElementById('playerTwoInput').innerHTML = ''

    }
    submission(idName, className) {

        this.board[squareID[idName][0]][squareID[idName][1]] = className;
        console.log(this.board)
    }
    playerClick(event) {
        let currentTarget = event.target;
        if (currentTarget.className) {
            alert('Taken, try again!');
        }
        else {
            if (this.playersTurn == 'player2') {
                currentTarget.className = 'o';
                console.log('O click');
                console.log(this.playersTurn);
                console.log(currentTarget.className)
                this.playersTurn = 'player1';
            }
            else {
                currentTarget.className = 'x';
                console.log('X click');
                console.log(this.playersTurn);
                console.log(currentTarget.className)
                this.playersTurn = 'player2';
            }
            this.board[squareID[currentTarget.id][0]][squareID[currentTarget.id][1]] = currentTarget.className;

            console.log(this.board)

        }

    }
    checkRows() {
        if (this.board[0][0] == 'o' && this.board[0][1] == 'o' && this.board[0][2] == 'o') {
            document.getElementById('resultsOfGame').innerHTML = "O Wins!";
            document.getElementById('gameBoard').className = 'noClick';
        }
        else if (this.board[0][0] == 'x' && this.board[0][1] == 'x' && this.board[0][2] == 'x') {
            document.getElementById('resultsOfGame').innerHTML = "X Wins!";
            document.getElementById('gameBoard').className = 'noClick';
        }
        if (this.board[1][0] == 'o' && this.board[1][1] == 'o' && this.board[1][2] == 'o') {
            document.getElementById('resultsOfGame').innerHTML = "O Wins!";
            document.getElementById('gameBoard').className = 'noClick';

        }
        else if (this.board[1][0] == 'x' && this.board[1][1] == 'x' && this.board[1][2] == 'x') {
            document.getElementById('resultsOfGame').innerHTML = "X Wins!";
            document.getElementById('gameBoard').className = 'noClick';
        }
        if (this.board[2][0] == 'o' && this.board[2][1] == 'o' && this.board[2][2] == 'o') {
            document.getElementById('resultsOfGame').innerHTML = "O Wins!";
            document.getElementById('gameBoard').className = 'noClick';
        }
        else if (this.board[2][0] == 'x' && this.board[2][1] == 'x' && this.board[2][2] == 'x') {
            document.getElementById('resultsOfGame').innerHTML = "X Wins!";
            document.getElementById('gameBoard').className = 'noClick';
        }

    }

    checkColumns() {
        if (this.board[0][0] == 'o' && this.board[1][0] == 'o' && this.board[2][0] == 'o') {
            document.getElementById('resultsOfGame').innerHTML = "O Wins!";
            document.getElementById('gameBoard').className = 'noClick';
        }
        else if (this.board[0][0] == 'x' && this.board[1][0] == 'x' && this.board[2][0] == 'x') {
            document.getElementById('resultsOfGame').innerHTML = "X Wins!";
            document.getElementById('gameBoard').className = 'noClick';
        }
        if (this.board[0][1] == 'o' && this.board[1][1] == 'o' && this.board[2][1] == 'o') {
            document.getElementById('resultsOfGame').innerHTML = "O Wins!";
            document.getElementById('gameBoard').className = 'noClick';
        }
        else if (this.board[0][1] == 'x' && this.board[1][1] == 'x' && this.board[2][1] == 'x') {
            document.getElementById('resultsOfGame').innerHTML = "X Wins!";
            document.getElementById('gameBoard').className = 'noClick';
        }
        if (this.board[0][2] == 'o' && this.board[1][2] == 'o' && this.board[2][2] == 'o') {
            document.getElementById('resultsOfGame').innerHTML = "O Wins!";
            document.getElementById('gameBoard').className = 'noClick';
        }
        else if (this.board[0][2] == 'x' && this.board[1][2] == 'x' && this.board[2][2] == 'x') {
            document.getElementById('resultsOfGame').innerHTML = "X Wins!";
            document.getElementById('gameBoard').className = 'noClick';
        }
    }

    checkDiagnal() {
        if (this.board[0][0] == 'o' && this.board[1][1] == 'o' && this.board[2][2] == 'o') {
            document.getElementById('resultsOfGame').innerHTML = "O Wins!";
            document.getElementById('gameBoard').className = 'noClick';
        }
        else if (this.board[0][0] == 'x' && this.board[1][1] == 'x' && this.board[2][2] == 'x') {
            document.getElementById('resultsOfGame').innerHTML = "X Wins!";
            document.getElementById('gameBoard').className = 'noClick';
        }
        if (this.board[0][2] == 'o' && this.board[1][1] == 'o' && this.board[2][0] == 'o') {
            document.getElementById('resultsOfGame').innerHTML = "O Wins!";
            document.getElementById('gameBoard').className = 'noClick';
        }
        else if (this.board[0][2] == 'x' && this.board[1][1] == 'x' && this.board[2][0] == 'x') {
            document.getElementById('resultsOfGame').innerHTML = "X Wins!";
            document.getElementById('gameBoard').className = 'noClick';
        }
    }
    checkDraw() {
        if (this.board[0][0] == null ||
            this.board[0][1] == null ||
            this.board[0][2] == null ||
            this.board[1][0] == null ||
            this.board[1][1] == null ||
            this.board[1][2] == null ||
            this.board[2][0] == null ||
            this.board[2][1] == null ||
            this.board[2][2] == null) {
            console.log('null check')

        }
        else {
            document.getElementById('resultsOfGame').innerHTML = 'Draw';
        }

    }
    resetGame() {
        this.board[0][0] = null;
        this.board[0][1] = null;
        this.board[0][2] = null;
        this.board[1][0] = null;
        this.board[1][1] = null;
        this.board[1][2] = null;
        this.board[2][0] = null;
        this.board[2][1] = null;
        this.board[2][2] = null;

        document.getElementById('row1col1').className = '';
        document.getElementById('row1col2').className = '';
        document.getElementById('row1col3').className = '';
        document.getElementById('row2col1').className = '';
        document.getElementById('row2col2').className = '';
        document.getElementById('row2col3').className = '';
        document.getElementById('row3col1').className = '';
        document.getElementById('row3col2').className = '';
        document.getElementById('row3col3').className = '';

        document.getElementById('resultsOfGame').innerHTML = '';
        document.getElementById('gameBoard').className = '';
        this.playersTurn = 'player1'

        console.log(this.board)
    }


}

let newGame = new Game()

submitPlayersButton.addEventListener('click', function (event) {
    newGame.playerInput()
})

resetButton.addEventListener('click', function (event) {
    newGame.resetGame()
})

gameBoard.addEventListener('click', function (event) {
    newGame.playerClick(event);
    newGame.checkDraw();
    newGame.checkRows();
    newGame.checkColumns();
    newGame.checkDiagnal();
});



