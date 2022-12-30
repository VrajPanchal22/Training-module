let tictactoe = new Array(3)
let visited = new Array(9).fill(false)

for (var i = 0; i < tictactoe.length; i++) {
    tictactoe[i] = new Array(3).fill(2);
}


let turn = true;


// ------------------------------Board-------------------------

document.getElementById("board").addEventListener("click", (event) => {

    if (!visited[event.target.id] && "012345678".indexOf(event.target.id) != -1) {
        let row = Math.floor(event.target.id / 3);
        let col = event.target.id % 3;

        if (turn) {
            event.target.innerHTML = "O"
            tictactoe[row][col] = 1
        }
        else {
            event.target.innerHTML = "X"
            tictactoe[row][col] = 0
        }

        // check win or not
        let OorX = tictactoe[row][col];
        let rowWin = rowCheck(0, 0, tictactoe, OorX);
        let colWin = colCheck(0, 0, tictactoe, OorX);

        let crossWin = false
        if (tictactoe[1][1] != 2) {
            crossWin = crossCheck(tictactoe)
        }

        // update turn and visited
        turn = !turn;
        visited[event.target.id] = true;


        if (rowWin || colWin || crossWin) {
            visited.fill(true);

            if (OorX == 1) {
                document.getElementById("win").innerHTML = "Wow! Player-1 won the game"
            }
            else {
                document.getElementById("win").innerHTML = "Wow! Player-2 won the game"
            }
            document.getElementById("reset").style.display = "block"
        }
        
        // if tie
        else if(checkTie(visited)) {
            ele = document.getElementById("win")
            ele.innerHTML = "Tie"
            ele.style.color = "red"
            document.getElementById("reset").style.display = "block"
        }       

    }
})


// ----------------------check win-------------------------

function rowCheck(i, j, tictactoe, OorX) {
    if (i == tictactoe.length) {
        return false
    }

    if (j == tictactoe[i].length) {
        return true
    }

    let win = false;
    if (OorX === tictactoe[i][j]) {
        win = rowCheck(i, j + 1, tictactoe, OorX)
    }

    if (!win) {
        return rowCheck(i + 1, 0, tictactoe, OorX)
    }

    return win
}

function colCheck(i, j, tictactoe, OorX) {
    if (i == tictactoe.length) {
        return true
    }

    if (j == tictactoe[i].length) {
        return false;
    }


    let win = false
    if (OorX == tictactoe[i][j]) {
        win = colCheck(i + 1, j, tictactoe, OorX);
    }

    if (!win) {
        return colCheck(0, j + 1, tictactoe, OorX)
    }

    return win
}

function crossCheck(tictactoe) {
    if (tictactoe[0][0] == tictactoe[1][1] && tictactoe[2][2] == tictactoe[1][1]) {
        return true;
    }
    else if (tictactoe[0][2] == tictactoe[1][1] && tictactoe[2][0] == tictactoe[1][1]) {
        return true
    }

    return false;
}

// -----------------------Tie--------------------------
function checkTie(visited) {    
    for(let i = 0; i < visited.length ; i++) {
        if(!visited[i]) {
            return false
        }
    }

    return true
} 


// -----------------------Reset Game----------------------------

document.getElementById("reset").addEventListener("click", (event) => {
    for (var i = 0; i < tictactoe.length; i++) {
        tictactoe[i] = new Array(3).fill(2);
    }

    turn = true;

    visited.fill(false)

    document.getElementById("win").innerHTML = ""

    rows = Object.values(document.getElementById("board").children);

    rows.forEach(row => {
        Object.values(row.children).forEach(cell => {
            cell.innerHTML = ""
        })
    });

    event.target.style.display = "none"
}) 