const board = document.querySelector(".board");
const startBtn = document.querySelector(".btn-strt");
const modal = document.querySelector(".modal");
const startGameModal = document.querySelector(".strt-game");
const gameOverModal = document.querySelector(".game-over");
const restartBtn = document.querySelector(".btn-restart");
const highScoreElem = document.querySelector("#high-score");
const scoreElem = document.querySelector("#score");
const timeElem = document.querySelector("#time");

const blockHeight = 60;
const blockWidth = 60;


let highScore = Number(localStorage.getItem("highScore")) || 0;
let score = 0;
let time = "00:00";

highScoreElem.innerText = highScore;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let intervalId = null;
let timerIntervalId = null;

let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};

const blocks = [];
let snake = [{ x: 1, y: 3 }];
let direction = "down";

// ================= BOARD CREATION =================
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    blocks[`${row}-${col}`] = block;
  }
}

// ================= GAME LOOP =================
function render() {
  let head = null;

  // show food
  blocks[`${food.x}-${food.y}`].classList.add("food");

  // movement logic
  if (direction === "left") head = { x: snake[0].x, y: snake[0].y - 1 };
  else if (direction === "right") head = { x: snake[0].x, y: snake[0].y + 1 };
  else if (direction === "down") head = { x: snake[0].x + 1, y: snake[0].y };
  else if (direction === "up") head = { x: snake[0].x - 1, y: snake[0].y };

  // ================= WALL COLLISION =================
  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    gameOver();
    return;
  }

  // ================= SELF COLLISION (FIX) =================
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      gameOver(); // 🔧 FIX: snake collision
      return;
    }
  }

  // ================= FOOD CONSUME =================
  if (head.x === food.x && head.y === food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");

    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };

    snake.unshift(head); // grow snake
    score += 5;
    scoreElem.innerText = score;

    // 🔧 FIX: high score logic
    if (score > highScore) {
      highScore = score;
      localStorage.setItem("highScore", highScore);
      highScoreElem.innerText = highScore;
    }

    return; // IMPORTANT: don't pop tail when eating
  }

  // ================= NORMAL MOVE =================
  snake.forEach(seg => {
    blocks[`${seg.x}-${seg.y}`].classList.remove("fill");
  });

  snake.unshift(head);
  snake.pop();

  snake.forEach(seg => {
    blocks[`${seg.x}-${seg.y}`].classList.add("fill");
  });
}

// ================= GAME OVER =================
function gameOver() {
  clearInterval(intervalId);       // 🔧 FIX
  clearInterval(timerIntervalId);  // 🔧 FIX

  modal.style.display = "flex";
  startGameModal.style.display = "none";
  gameOverModal.style.display = "flex";
}

// ================= START GAME =================
startBtn.addEventListener("click", () => {
  modal.style.display = "none";

  // 🔧 FIX: prevent multiple intervals
  clearInterval(intervalId);
  clearInterval(timerIntervalId);

  intervalId = setInterval(render, 300);

  timerIntervalId = setInterval(() => {
    let [min, sec] = time.split(":").map(Number);

    sec++;
    if (sec === 60) {
      min++;
      sec = 0;
    }

    time = `${min}:${sec}`;
    timeElem.innerText = time;
  }, 1000);
});

// ================= RESTART GAME =================
restartBtn.addEventListener("click", restartGame);

function restartGame() {
  // 🔧 FIX: clear intervals
  clearInterval(intervalId);
  clearInterval(timerIntervalId);

  // 🔧 FIX: clear board
  snake.forEach(seg => {
    blocks[`${seg.x}-${seg.y}`].classList.remove("fill");
  });
  blocks[`${food.x}-${food.y}`].classList.remove("food");

  // reset values
  snake = [{ x: 1, y: 3 }];
  direction = "down";
  score = 0;
  time = "00:00";

  scoreElem.innerText = score;
  timeElem.innerText = time;
  highScoreElem.innerText = highScore;

  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };

  modal.style.display = "none";

  // 🔧 FIX: restart game loop
  intervalId = setInterval(render, 300);
  timerIntervalId = setInterval(() => {
    let [min, sec] = time.split(":").map(Number);
    sec++;
    if (sec === 60) {
      min++;
      sec = 0;
    }
    time = `${min}:${sec}`;
    timeElem.innerText = time;
  }, 1000);
}

// ================= KEY CONTROLS =================
addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && direction !== "down") direction = "up";
  else if (event.key === "ArrowRight" && direction !== "left") direction = "right";
  else if (event.key === "ArrowLeft" && direction !== "right") direction = "left";
  else if (event.key === "ArrowDown" && direction !== "up") direction = "down";
});
