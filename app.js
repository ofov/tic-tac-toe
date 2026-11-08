let currentPlayer = "X";
let gameOver = false;

const winLines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],   
  [0, 3, 6], [1, 4, 7], [2, 5, 8],   
  [0, 4, 8], [2, 4, 6]               
];

const boxes=document.querySelectorAll(".Box");

for (let i =0; i <boxes.length;i++) {
  boxes[i].addEventListener("click", handleClick);
}

function checkWinner() {
  for (let i = 0; i < winLines.length; i++) {
    const line = winLines[i];

    const result =document.getElementById(line[0].toString()).textContent +
      document.getElementById(line[1].toString()).textContent +
      document.getElementById(line[2].toString()).textContent;

    if (result === "XXX") {
      return "X";
    }
    if (result === "OOO") {
      return "O";
    }
  }

  return null;
}

function isBoardFull() {
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].textContent === "") {
      return false;
    }
  }
  return true;
}
let moveCount = 0;

function handleClick(event) {
 
  const square = event.target;

  if (square.textContent !== "") {
    return;
  }

moveCount = moveCount + 1;

  if (moveCount % 2 === 1) {
    currentPlayer = "X";
  } else {
    currentPlayer = "O";
  }

  square.textContent = currentPlayer;     

  console.log("moveCount = " + moveCount + "  player: " + currentPlayer);

  const winner = checkWinner();
  if (winner !== null) {
    document.getElementById("turn").textContent = winner + " Wins!";
    gameOver = true;
    return;
  }

  if (isBoardFull() === true) {
    document.getElementById("turn").textContent = "Tie";
    gameOver = true;
    return;
  }

  if (moveCount % 2 === 1) {
    document.getElementById("turn").textContent = "Player 2 turn";
  } else {
    document.getElementById("turn").textContent = "Player 1 turn";
  }
}
document.getElementById("reset").addEventListener("click", function () {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = "";
  }
  document.getElementById("turn").textContent = "Player 1 turn";

  currentPlayer = "X";
  gameOver = false;
  moveCount = 0;});