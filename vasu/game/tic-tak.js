function mainfunc() {
    //setting the DOM to all the all 9 boxes
    var B1, B2, B3, B4, B5, B6, B7, B8, B9
    B1 = document.getElementById("B1").value;
    B2 = document.getElementById("B2").value;
    B3 = document.getElementById("B3").value;
    B4 = document.getElementById("B4").value;
    B5 = document.getElementById("B5").value;
    B6 = document.getElementById("B6").value;
    B7 = document.getElementById("B7").value;
    B8 = document.getElementById("B8").value;
    B9 = document.getElementById("B9").value;


    //so there are 8 chances to win for both the players so check for each chance
    //checking the possibilies of player 1 to win 
    //case 1
    // if any one player is won then no more moves hence disable the rest after anyone wins
    if ((B1 == 'X') && (B2 == 'X') && (B3 == "X")) {
        document.getElementById('print').innerHTML = "🎉 Player 1 you won"
        window.alert('player X won')
    
        document.getElementById('B4').disabled = true;
        document.getElementById('B5').disabled = true;
        document.getElementById('B6').disabled = true;
        document.getElementById('B7').disabled = true;
        document.getElementById('B8').disabled = true;
        document.getElementById('B9').disabled = true;
    }
    //case 2
    else if ((B4 == 'X') && (B5 == 'X') && (B6 == "X")) {
        document.getElementById('print').innerHTML = " 🎉 Player 1 you won"

        document.getElementById('B1').disabled = true;
        document.getElementById('B2').disabled = true;
        document.getElementById('B3').disabled = true;
        document.getElementById('B7').disabled = true;
        document.getElementById('B8').disabled = true;
        document.getElementById('B9').disabled = true;
        window.alert('player X won')
    }
    //case 3
    else if ((B7 == 'X') && (B8 == 'X') && (B9 == "X")) {
        document.getElementById('print').innerHTML = " 🎉 Player 1 you won"

        document.getElementById('B1').disabled = true;
        document.getElementById('B2').disabled = true;
        document.getElementById('B3').disabled = true;
        document.getElementById('B4').disabled = true;
        document.getElementById('B5').disabled = true;
        document.getElementById('B6').disabled = true;
        window.alert('player X won')
    }
    //case 4
    else if ((B1 == 'X') && (B4 == 'X') && (B7 == "X")) {
        document.getElementById('print').innerHTML = "Player 1 you won"

        document.getElementById('B2').disabled = true;
        document.getElementById('B3').disabled = true;
        document.getElementById('B5').disabled = true;
        document.getElementById('B6').disabled = true;
        document.getElementById('B8').disabled = true;
        document.getElementById('B9').disabled = true;
        window.alert('player X won')
    }
    //case 5
    else if ((B2 == 'X') && (B5 == 'X') && (B8 == "X")) {
        document.getElementById('print').innerHTML = " 🎉 Player 1 you won"

        document.getElementById('B1').disabled = true;
        document.getElementById('B2').disabled = true;
        document.getElementById('B3').disabled = true;
        document.getElementById('B4').disabled = true;
        document.getElementById('B6').disabled = true;
        document.getElementById('B7').disabled = true;
        window.alert('player X won')
    }
    //case 6
    else if ((B3 == 'X') && (B6 == 'X') && (B9 == "X")) {
        document.getElementById('print').innerHTML = "🎉 Player 1 you won"

        document.getElementById('B1').disabled = true;
        document.getElementById('B2').disabled = true;
        document.getElementById('B4').disabled = true;
        document.getElementById('B5').disabled = true;
        document.getElementById('B7').disabled = true;
        document.getElementById('B8').disabled = true;
        window.alert('player X won')
    }
    //case 7
    else if ((B1 == 'X') && (B5 == 'X') && (B9 == "X")) {
        document.getElementById('print').innerHTML = " 🎉 Player 1 you won"

        document.getElementById('B2').disabled = true;
        document.getElementById('B3').disabled = true;
        document.getElementById('B4').disabled = true;
        document.getElementById('B6').disabled = true;
        document.getElementById('B7').disabled = true;
        document.getElementById('B8').disabled = true;
        window.alert('player X won')
    }
    //last case
    else if ((B3 == 'X') && (B5 == 'X') && (B7 == "X")) {
        document.getElementById('print').innerHTML = "🎉 Player 1 you won"

        document.getElementById('B1').disabled = true;
        document.getElementById('B2').disabled = true;
        document.getElementById('B4').disabled = true;
        document.getElementById('B6').disabled = true;
        document.getElementById('B8').disabled = true;
        document.getElementById('B9').disabled = true;
        window.alert('player X won')
    }
    // possibilities for player 2 to win the game
    //same 8 possibilites
    else if ((B1 == 'O') && (B2 == 'O') && (B3 == "O")) {
        document.getElementById('print').innerHTML = " 🎉 Player 2 you won"

        document.getElementById('B4').disabled = true;
        document.getElementById('B5').disabled = true;
        document.getElementById('B6').disabled = true;
        document.getElementById('B7').disabled = true;
        document.getElementById('B8').disabled = true;
        document.getElementById('B9').disabled = true;
        window.alert('🎉 player 2 won')
    }
    //case 2
    else if ((B4 == 'O') && (B5 == 'O') && (B6 == "O")) {
        document.getElementById('print').innerHTML = " 🎉 Player 2 you won"
        document.getElementById('B1').disabled = true;
        document.getElementById('B2').disabled = true;
        document.getElementById('B3').disabled = true;
        document.getElementById('B7').disabled = true;
        document.getElementById('B8').disabled = true;
        document.getElementById('B9').disabled = true;
        window.alert('🎉 player X won')
    }
    //case 3
    else if ((B7 == 'O') && (B8 == 'O') && (B9 == "O")) {
        document.getElementById('print').innerHTML = "Player 2 you won"
        document.getElementById('B1').disabled = true;
        document.getElementById('B2').disabled = true;
        document.getElementById('B3').disabled = true;
        document.getElementById('B4').disabled = true;
        document.getElementById('B5').disabled = true;
        document.getElementById('B6').disabled = true;
       
        window.alert('🎉 player X won')
    }
    //case4
    else if ((B1 == 'O') && (B4 == 'O') && (B7 == "O")) {
        document.getElementById('print').innerHTML = "🎉 Player 2 you won"

       
        document.getElementById('B2').disabled = true;
        document.getElementById('B3').disabled = true;
        document.getElementById('B5').disabled = true;
        document.getElementById('B6').disabled = true;
        document.getElementById('B8').disabled = true;
        document.getElementById('B9').disabled = true;
        window.alert('🎉 player X won')
    }
    //case 5
    else if ((B2 == 'O') && (B5 == 'O') && (B8 == "O")) {
        document.getElementById('print').innerHTML = "🎉 Player 2 you won"

        document.getElementById('B1').disabled = true;
        document.getElementById('B2').disabled = true;
        document.getElementById('B3').disabled = true;
        document.getElementById('B4').disabled = true;
        document.getElementById('B6').disabled = true;
        document.getElementById('B7').disabled = true;
        window.alert('🎉 player X won')
    }
    //case 6
    else if ((B3 == 'O') && (B6 == 'O') && (B9 == "O")) {
        document.getElementById('print').innerHTML = "🎉 Player 2 you won"

        
        document.getElementById('B1').disabled = true;
        document.getElementById('B2').disabled = true;
        document.getElementById('B4').disabled = true;
        document.getElementById('B5').disabled = true;
        document.getElementById('B7').disabled = true;
        document.getElementById('B8').disabled = true;
        window.alert('🎉 player X won')
    }
    //case 7
    else if ((B1 == 'O') && (B5 == 'O') && (B9 == "O")) {
        document.getElementById('print').innerHTML = "🎉Player 2 you won"

        document.getElementById('B2').disabled = true;
        document.getElementById('B3').disabled = true;
        document.getElementById('B4').disabled = true;
        document.getElementById('B6').disabled = true;
        document.getElementById('B7').disabled = true;
        document.getElementById('B8').disabled = true;
        window.alert('🎉 player X won')
        
    }
    //last case
    else if ((B3 == 'O') && (B5 == 'O') && (B7 == "O")) {
        document.getElementById('print').innerHTML = "🎉 Player 2 you won"

        document.getElementById('B1').disabled = true;
        document.getElementById('B2').disabled = true;
        document.getElementById('B4').disabled = true;
        document.getElementById('B6').disabled = true;
        document.getElementById('B8').disabled = true;
        document.getElementById('B9').disabled = true;
        window.alert('🎉 player  won')
    }
    //if match tie no one wins
    else if ((B1 == 'X' || B1 == 'O') && (B2 == 'X' || B2 == 'O') && (B3 == "X" || B3 == 'O') && (B4 == 'X' || B4 == "O")
        && (B5 == 'X' || B5 == "O") && (B6 == 'X' || B6 == "O") && (B7 == 'X' || B7 == "O") && (B8 == 'X' || B8 == "O")
        && (B9 == 'X' || B9 == "O")) {
        document.getElementById('print').innerHTML = " 😥 Sorry Match is tied Better Luck next time"
        window.alert('😥 match tie')
    }

    else {
        // here players turn is represented
        if (flag == 1) {
            document.getElementById('print').innerHTML = "player 1 turn 😃"
        }
        else {
            document.getElementById('print').innerHTML = "player 2 turn 😃"
        }
    }
}

function restart(){
    location.reload();
}
//function for each button to match the value

flag = 1;
function func_1() {
    if (flag == 1) {
        document.getElementById('B1').value = 'X';
        document.getElementById('B1').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('B1').value = 'O';
        document.getElementById('B1').disabled = true;
        flag = 1;
    }
}
function func_2() {
    if (flag == 1) {
        document.getElementById('B2').value = 'X';
        document.getElementById('B2').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('B2').value = 'O';
        document.getElementById('B2').disabled = true;
        flag = 1;
    }
}
function func_3() {
    if (flag == 1) {
        document.getElementById('B3').value = 'X';
        document.getElementById('B3').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('B3').value = 'O';
        document.getElementById('B3').disabled = true;
        flag = 1;
    }
}
function func_4() {
    if (flag == 1) {
        document.getElementById('B4').value = 'X';
        document.getElementById('B4').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('B4').value = 'O';
        document.getElementById('B4').disabled = true;
        flag = 1;
    }
}
function func_5() {
    if (flag == 1) {
        document.getElementById('B5').value = 'X';
        document.getElementById('B5').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('B5').value = 'O';
        document.getElementById('B5').disabled = true;
        flag = 1;
    }
}

function func_6() {
    if (flag == 1) {
        document.getElementById('B6').value = 'X';
        document.getElementById('B6').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('B6').value = 'O';
        document.getElementById('B6').disabled = true;
        flag = 1;
    }
}

function func_7() {
    if (flag == 1) {
        document.getElementById('B7').value = 'X';
        document.getElementById('B7').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('B7').value = 'O';
        document.getElementById('B7').disabled = true;
        flag = 1;
    }
}
function func_8() {
    if (flag == 1) {
        document.getElementById('B8').value = 'X';
        document.getElementById('B8').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('B8').value = 'O';
        document.getElementById('B8').disabled = true;
        flag = 1;
    }
}
function func_9() {
    if (flag == 1) {
        document.getElementById('B9').value = 'X';
        document.getElementById('B9').disabled = true;
        flag = 0
    }
    else {
        document.getElementById('B9').value = 'O';
        document.getElementById('B9').disabled = true;
        flag = 1;
    }
}