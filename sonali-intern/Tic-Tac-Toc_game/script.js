let turn = 'X';
let gameOver = false;
function changeTurn() {
    return turn === "X" ? "O" : "X";;
}

function handleReset(){
    let tileValue = document.querySelectorAll('.tileValue');
    Array.from(tileValue).forEach(element => {
       element.innerText='';
    })
}


function checkWin(){
    tileValue=document.getElementsByClassName('tileValue');
    let winningCombo =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    winningCombo.forEach((e)=>{
        if((tileValue[e[0]].innerText=== tileValue[e[1]].innerText) &&  (tileValue[e[1]].innerText=== tileValue[e[2]].innerText) && tileValue[e[1]].innerText!==''){
        document.getElementById('info').innerHTML= tileValue[e[0]].innerText+ "won";
        document.getElementById('info').classList.add("won");
        gameOver=true;
        handleReset();
        }
    })
}


let tiles = document.getElementsByClassName('tile');
Array.from(tiles).forEach(element => {
    let tileValue = element.querySelector('.tileValue');
    element.addEventListener('click', () => {
        if (tileValue.innerText === "") {
            tileValue.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!gameOver){
                document.getElementById('info').innerHTML='turn for ' + turn;
            } 
        }
    })

});