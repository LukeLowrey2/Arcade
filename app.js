

//Set occupied squares as  squares you cant click
//no change
//maybe alert try again


//This ID is equal to postions in array

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
        this.playersTurn = 'player1'
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

    }
    submission(idName, className) {

        this.board[squareID[idName][0]][squareID[idName][1]] = className;
        // this.board[0][1] = ;
        // this.board[0][2] = ;
        // this.board[1][0] = ;
        // this.board[1][1] = ;
        // this.board[1][2] = ;
        // this.board[2][0] = ;
        // this.board[2][1] = ;
        // this.board[2][2] = ;

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
        //If one of columns is filled with x's or o's display 'X or O Wins'
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
        // //If diaginal is achieved display 'X or O Wins'
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
        //If the board is filled display 'Draw'
        //maybe a loop
        //look at every space in my board's array 
        //if there is an element array that is null then there's no draw
        //but if there is not an empty space the game is a draw
        if (this.board[0][0] == 'x' &&
            this.board[0][0] == 'o' &&
            this.board[0][1] == 'x' &&
            this.board[0][1] == 'o' &&
            this.board[0][2] == 'x' &&
            this.board[0][2] == 'o' &&
            this.board[1][0] == 'x' &&
            this.board[1][0] == 'o' &&
            this.board[1][1] == 'x' &&
            this.board[1][1] == 'o' &&
            this.board[1][2] == 'x' &&
            this.board[1][2] == 'o' &&
            this.board[2][0] == 'x' &&
            this.board[2][0] == 'o' &&
            this.board[2][1] == 'x' &&
            this.board[2][1] == 'o' &&
            this.board[2][2] == 'x' &&
            this.board[2][2] == 'o') {
            alert('draw');
        }


        // for (let i = 0; i < this.board.length; i++) {
        //     for (let j = 0; j < this.board.length; j++) {
        // console.log(this.board[i][j]);
        // if (this.board[i][j] == null) {

        // }
        // else {
        //     console.log(this.board[i][j]);
        //     alert('draw');
        // }
        //     }

        // }
    }
    resetGame() {
        this.board[0][0] = '';
        this.board[0][1] = '';
        this.board[0][2] = '';
        this.board[1][0] = '';
        this.board[1][1] = '';
        this.board[1][2] = '';
        this.board[2][0] = '';
        this.board[2][1] = '';
        this.board[2][2] = '';

        document.getElementById('row1col1').className = '';
        document.getElementById('row1col2').className = '';
        document.getElementById('row1col3').className = '';
        document.getElementById('row2col1').className = '';
        document.getElementById('row2col2').className = '';
        document.getElementById('row2col3').className = '';
        document.getElementById('row3col1').className = '';
        document.getElementById('row3col2').className = '';
        document.getElementById('row3col3').className = '';
        
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
    newGame.checkDraw();
});



