// Calculate the grid size based on the screen size
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const cellSize = 30; // Adjust this value to change the size of each cell
const numCols = Math.floor(screenWidth / cellSize);
const numRows = Math.floor(screenHeight / cellSize);

const numMines = Math.floor((numCols * numRows) / 10); // Adjust this value to change the number of mines

// Initialize the grid
const grid = [];
for (let i = 0; i < numRows; i++) {
    grid.push(Array(numCols).fill(0));
}

// Place mines randomly on the grid
for (let i = 0; i < numMines; i++) {
    let row, col;
    do {
        row = Math.floor(Math.random() * numRows);
        col = Math.floor(Math.random() * numCols);
    } while (grid[row][col] === 'X'); // Ensure we don't place a mine on top of another mine

    grid[row][col] = 'X';
    // Increment adjacent cells' count
    for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
            const newRow = row + dr;
            const newCol = col + dc;
            if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols && grid[newRow][newCol] !== 'X') {
                grid[newRow][newCol]++;
            }
        }
    }
}

// Render the grid in the browser
const gridContainer = document.getElementById('grid');
grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.setAttribute('data-row', rowIndex);
        cellElement.setAttribute('data-col', colIndex);
        gridContainer.appendChild(cellElement);
    });
});

// Handle cell click
gridContainer.addEventListener('click', (event) => {
    const clickedCell = event.target;
    if (!clickedCell.classList.contains('cell')) return; // Ignore clicks on grid container itself

    const row = parseInt(clickedCell.getAttribute('data-row'));
    const col = parseInt(clickedCell.getAttribute('data-col'));

    if (grid[row][col] === 'X') {
        clickedCell.textContent = 'X';
        clickedCell.style.backgroundColor = 'red';
        revealAllMines();
        alert('Game Over! You stepped on a mine.');
    } else if (grid[row][col] === 0) {
        revealEmptyCells(row, col);
    } else {
        clickedCell.textContent = grid[row][col]; // Display the number of nearby mines
        clickedCell.style.backgroundColor = 'lightgray';
    }
});

// Function to reveal neighboring cells recursively
function revealEmptyCells(row, col) {
    if (row < 0 || row >= numRows || col < 0 || col >= numCols) return;
    const cellElement = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
    if (!cellElement || cellElement.textContent !== '') return;

    cellElement.textContent = grid[row][col] === 0 ? '' : grid[row][col];
    cellElement.style.backgroundColor = 'lightgray';

    if (grid[row][col] === 0) {
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                revealEmptyCells(row + dr, col + dc);
            }
        }
    }
}

// Function to reveal all mines when the game ends
function revealAllMines() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        const row = parseInt
    })
}