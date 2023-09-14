
const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameButton = document.querySelector(".btn");


let currentPlayer;
let gameGrid;

const winningPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


//lets create a function to initianize the game

function  initGame(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    boxes.forEach((box,index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        box.classList = `box box${index+1}`;
    })
    newGameButton.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;

}

initGame();

function swapTurn(){
    if(currentPlayer === "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X"
    }
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}


function checkGameOver(){
    let answer = "";
    winningPosition.forEach((position) => {
        if( (gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "")
            && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])){

            //check winner is x
            if(gameGrid[position[0]] === "X")
                answer = "X";
            else
                answer = "O";

                //disable pinter
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none";
                })   

            //Now we know x or o is winner
            boxes[position[0]].classList.add("win")
            boxes[position[1]].classList.add("win")
            boxes[position[2]].classList.add("win")

        }
    })
    //it mean we have winner
    if(answer !== ""){
        gameInfo.innerText = `Winner is ${answer}`;
        newGameButton.classList.add("active");
        return;
    }

    let fillCount = 0;
    gameGrid.forEach((box) => {
        if(box !== "")
        fillCount++;
    });

    if(fillCount === 9){
        gameInfo.innerText = "Game Tied!"
        newGameButton.classList.add("active");
    }
}


function handleClick(index){
    if(gameGrid[index]===""){
        boxes[index].innerHTML = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        //swap turn
        swapTurn();
        //check koi jeeta toh nahi
        checkGameOver();
    }
}

boxes.forEach((box,index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
})

newGameButton.addEventListener("click", initGame);