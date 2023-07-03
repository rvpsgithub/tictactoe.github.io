const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

squares.forEach(square => {
    square.addEventListener('click', handleClick);
});

function handleClick(event) {
    const square = event.target;
    square.textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

let winner = null;

function checkForWin() {
    winningCombos.forEach(combo => {
        const [a, b, c] = combo;
        if (squares[a].textContent && 
            squares[a].textContent === squares[b].textContent &&
            squares[b].textContent === squares[c].textContent) {
            winner = currentPlayer;
        }
    });
    return winner;
}

function handleGameOver() {
    const winnerMessage = document.querySelector('#winner-message');
    winnerMessage.textContent = `Congratulations! ${winner} is the winner!`;
}

function handleClick(event) {
    const square = event.target;
    if (square.textContent !== '') return;
    square.textContent = currentPlayer;
    winner = checkForWin();
    if (winner) return handleGameOver();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
const restartButton = document.querySelector('#restart-button');
restartButton.addEventListener('click', restartGame);

function restartGame() {
    squares.forEach(square => square.textContent = '');
    winner = null;
    currentPlayer = 'X';
    document.querySelector('#winner-message').textContent = '';
}