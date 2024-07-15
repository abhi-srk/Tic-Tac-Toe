document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('[data-cell]');
    const board = document.getElementById('board');
    const messageElement = document.getElementById('message');
    let currentPlayer = 'X';
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleClick(e) {
        const cell = e.target;
        if (cell.textContent === '') {
            cell.textContent = currentPlayer;
            if (checkWin(currentPlayer)) {
                messageElement.textContent = `${currentPlayer} wins!`;
                board.removeEventListener('click', handleClick);
                setTimeout(resetGame, 20000); // Reset the game after 20 seconds
            } else if (isDraw()) {
                messageElement.textContent = `Draw!`;
                setTimeout(resetGame, 20000); // Reset the game after 20 seconds
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    function checkWin(player) {
        return winningCombinations.some(combination => {
            return combination.every(index => {
                return cells[index].textContent === player;
            });
        });
    }

    function isDraw() {
        return [...cells].every(cell => {
            return cell.textContent === 'X' || cell.textContent === 'O';
        });
    }

    function resetGame() {
        cells.forEach(cell => {
            cell.textContent = '';
        });
        messageElement.textContent = '';
        currentPlayer = 'X';
        board.addEventListener('click', handleClick);
    }

    board.addEventListener('click', handleClick);
});
