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
                setTimeout(resetGame, 1000); // Reset the game after 20 seconds
            } else if (isDraw()) {
                messageElement.textContent = `Draw!`;
                setTimeout(resetGame, 1000); // Reset the game after 20 seconds
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

document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('[data-cell]');
    const messageElement = document.getElementById('message');
    const resetButton = document.getElementById('resetButton');
    const board = document.getElementById('board');

    // Function to reset the game
    function resetGame() {
        cells.forEach(cell => {
            cell.classList.remove('x');
            cell.classList.remove('o');
            cell.textContent = '';
        });
        messageElement.textContent = '';
        // You might want to add additional reset logic here
        // such as resetting game state variables, etc.
    }

    // Attach event listener to the reset button
    resetButton.addEventListener('click', resetGame);

    // Example game logic (simplified)
    cells.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true });
    });

    function handleClick(e) {
        const cell = e.target;
        const currentClass = 'x'; // or 'o' based on current turn
        placeMark(cell, currentClass);
        // Add game logic here
    }

    function placeMark(cell, currentClass) {
        cell.classList.add(currentClass);
    }
});
