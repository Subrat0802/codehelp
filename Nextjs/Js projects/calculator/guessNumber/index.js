let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrng = document.querySelector(".wrng");
let guesses = document.getElementById("guesses") 



let answer = Math.floor(Math.random()*100)+1;
console.log(answer)

let numGuesses = 0;

btn.addEventListener("click", () => {
    guessesNumber()
})
function guessesNumber(){
    if(input.value < 1 || input.value > 100 || isNaN(input.value)){
        wrng.innerHTML = "Wrong Text, Guess between 1 to 100"
    }
    else{
        numGuesses++;
        guesses.innerHTML = `No. of guesses: ${numGuesses}`
        if(input.value > answer){
            wrng.innerHTML = "You guessed too high";
            input.value = ""
        }
        else if(input.value < answer) {
            wrng.innerHTML = "You guessed too low";
            input.value = "";
         }
         else{
            wrng.innerHTML = "You won"
           
            setTimeout(() => {
                resetGame();
            }, 2000);
         }
    }
}


function resetGame(){
    numGuesses = 0;
    answer = Math.floor(Math.random()*100)+1;
    input.value = "";
    guesses.innerHTML=`No. of guesses: ${0}`
}

let myDiv = document.getElementById("logo");
document.addEventListener("mousemove", (e) => {
    move(e);
})


const move = (e) => {
    var x = e.pageX;
    var y = e.pageY;

    myDiv.style.left = x-100 + "px";
    myDiv.style.top = y-100 + "px"
}

