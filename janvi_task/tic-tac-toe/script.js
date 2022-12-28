
let turn = 'X';
let gameOver = false;
function changeTurn() {
    return turn === "X" ? "O" : "X";;
}


//remove values from each box when game is won by any one player
function reset(){
    let boxValue = document.querySelectorAll('.boxValue');
    Array.from(boxValue).forEach(element => {
       element.innerText='';
    })
}

function resetBtn(){
    reset();
    turn = 'X';
    gameOver=false;
    document.getElementById('info').classList.remove("won");
    document.getElementById('info').innerHTML='turn for '+ turn ;
}
function checkWin(){
    boxValue=document.getElementsByClassName('boxValue');
    let win =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    win.forEach((e)=>{
        if((boxValue[e[0]].innerText=== boxValue[e[1]].innerText) &&  (boxValue[e[1]].innerText=== boxValue[e[2]].innerText) && boxValue[e[1]].innerText!==''){
        document.getElementById('info').innerHTML= boxValue[e[0]].innerText+ "won";
        document.getElementById('info').classList.add("won");
        gameOver=true;
        reset();
        }
    })
}

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxValue = element.querySelector('.boxValue');
    element.addEventListener('click', () => {
        if (boxValue.innerText === "") {
            boxValue.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!gameOver){
                document.getElementById('info').innerHTML='turn for ' + turn;
            } 
        }
    })

});

