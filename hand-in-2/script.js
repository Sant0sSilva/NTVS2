const board = document.getElementById("board");
const status = document.getElementById("status");
// currentPlayer set as let to be able to toggle between X and O
let currentPlayer = "O";
const gameBoard = Array(9).fill(null);
const cells = []; // Store cell references

const boardElement = document.getElementById("board");
const statusElement = document.getElementById("status");

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Implement a function that when a cell of index is pressed, fills it with the symbol
// of the player whose turn it is, and check if there's a winner.
// If there is no winner, swap player's turn
function handleClick(index) {
  gameBoard[index] = currentPlayer;

  document.getElementById(`cell-${index}`).innerHTML = `${currentPlayer}`;
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  statusElement.innerHTML = `Player ${currentPlayer}'s turn`;
  checkWinner();
  if (checkWinner() === true) {
  }
}

function checkWinner() {
  for (let i = 0; i < WIN_PATTERNS.length; i++) {
    const pattern = WIN_PATTERNS[i];
    const cellA = gameBoard[pattern[0]];
    const cellB = gameBoard[pattern[1]];
    const cellC = gameBoard[pattern[2]];

    if (cellA == null || cellB == null || cellC == null) {
      continue;
    }
    if (cellA === cellB && cellB === cellC) {
      statusElement.innerHTML = `🥳🥳🥳Player ${cellA} wins!!!!🥳🥳🥳`;
      return true;
    }
  }
  return false;
}

function resetGame() {
  location.reload();
}

function createBoard() {
  for (let index = 0; index < 9; index++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `cell-${index}`;
    cell.addEventListener("click", () => handleClick(index));
    board.appendChild(cell);
    cells.push(cell); // Store reference
  }
}

createBoard();
