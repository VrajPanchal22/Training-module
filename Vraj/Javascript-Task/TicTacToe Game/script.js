const resultDiv = document.querySelector('.result');
const resetBtn = document.getElementById('reset-btn');

let gameActive = true;

let currentPlayer = 'X';

gameState = ["","","","","","","","",""];

const winningMsg = () => {    
    return `Player ${currentPlayer} WON!!!`;
}

const drawMsg =()=>{
    return `DRAW!!!`;
}

const currentPlayerTurn = ()=> {
    return `It's ${currentPlayer} Turn`;
}

resultDiv.innerHTML = currentPlayerTurn()



document.querySelectorAll('.btn').forEach((cell)=>{
    cell.addEventListener('click', (event)=> handelbtnclick(event))
})  

function handelbtnclick(event){
    const clickedBtn = event.target
    const clickedbtnIndex = parseInt(clickedBtn.getAttribute('id'))
    // console.log(clickedBtn,clickedbtnIndex)
    if (gameState[clickedbtnIndex] !== "" || !gameActive ){
        return;
    }
    handleBtnPlayed(clickedBtn,clickedbtnIndex);
    handleResult();
}

function handleBtnPlayed(clickedBtn,clickedbtnIndex){
    gameState[clickedbtnIndex]=currentPlayer;
    clickedBtn.innerHTML = currentPlayer
    // console.log(gameState)
}

let winningConditions =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function handleResult(){
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        console.log(winCondition[0])

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        resultDiv.innerHTML = winningMsg();
        gameActive = false;
        return;
    } 

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        resultDiv.innerHTML = drawMsg();
        gameActive = false;
        return;
    }
    handlePlayerChange();
}


function handlePlayerChange(){
    currentPlayer = currentPlayer ==='X' ? 'O' : 'X';
    resultDiv.innerHTML = currentPlayerTurn()
}


function resetGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    resultDiv.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.btn').forEach((cell) => cell.innerHTML = "");
}

