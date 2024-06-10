let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-con");
let msg = document.querySelector("#msg");

let turnO = true;//Player-X, Player-O
let count = 0;

const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

let p1 = null;
let p2 = null;

const details = () => {
    p1 = prompt("Enter Player 1 Name: O = ");
    p2 = prompt("Enter Player 2 Name: X = ");
};

details();

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
    details(); 
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) { //player O
            box.innerText = "O";
            turnO = false;
        } else { //player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        count++;
        let isWinner = checkWinner();

        if(count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game has no Winners has game is Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showWinner = (winner) => {
    if(winner === "O") {
        msg.innerText = `Congratulations, Winner is ${p1} and chose ${winner}`;
    }
    if(winner === "X") {
        msg.innerText = `Congratulations, Winner is ${p2} and chose ${winner}`;
    }
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winningPatterns) {
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if(pos1val != "" && pos2val != "" && pos3val != "") {
                if(pos1val === pos2val && pos2val === pos3val) {
                    showWinner(pos1val);
                    return true;
                }
            }
        
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);