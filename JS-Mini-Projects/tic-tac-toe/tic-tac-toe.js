const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#resetBtn");
let gameResultPopup = document.querySelector(".game-result-container");
let gameResultText = document.querySelector("#game-result-heading");
const newGame = document.querySelector("#newGame");


let playerOne = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];



const resetGame = function(){
  playerOne = true;
  enabledBoxes();
  gameResultPopup.classList.add("hidden");
} 

resetBtn.addEventListener("click", function(){
  resetGame();
})

newGame.addEventListener("click", function(){
  resetGame();
})


boxes.forEach(function(box){
  box.addEventListener("click", function(){
    console.log("box clicked");
    if (playerOne) {
      box.innerHTML = "X";
      playerOne = false;
    } else{
      box.innerHTML = "O";
      playerOne = true;
    }
    box.disabled = true;

    checkWinner();
  })
})

const disabledBoxes = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
}

const enabledBoxes = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
}


const showWinner = (winner) => {
  gameResultText.innerHTML = `You Won ${winner}`;
  gameResultPopup.classList.remove("hidden");
  disabledBoxes();
}




function checkWinner(){
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;


    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
        console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
    
  }
};
