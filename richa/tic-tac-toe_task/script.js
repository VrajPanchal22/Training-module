let b1 = document.getElementById("box1");
let b2 = document.getElementById("box2");
let b3 = document.getElementById("box3");
let b4 = document.getElementById("box4");
let b5 = document.getElementById("box5");
let b6 = document.getElementById("box6");
let b7 = document.getElementById("box7");
let b8 = document.getElementById("box8");
let b9 = document.getElementById("box9");
let result = document.getElementById("result");

let box = document.querySelectorAll(".box");

// function validation(box){
// box.map(element => {
//     if(box.value!='x' || box.value!='X'|| box.value!='o'||box.value!='O'){
//         alert('enter valid value');
//     }
// });
// }

function game() {
  //condition for 'X'
  if (
    (b1.value == "x" || b1.value == "X") &&
    (b2.value == "x" || b2.value == "X") &&
    (b3.value == "x" || b3.value == "X")
  ) {
    result.innerText += "player 'X' has won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (
    (b4.value == "x" || b4.value == "X") &&
    (b5.value == "x" || b5.value == "X") &&
    (b6.value == "x" || b6.value == "X")
  ) {
    result.innerText += "player 'X' has won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (
    (b7.value == "x" || b7.value == "X") &&
    (b8.value == "x" || b8.value == "X") &&
    (b9.value == "x" || b9.value == "X")
  ) {
    result.innerText += "player 'X' has won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (
    (b1.value == "x" || b1.value == "X") &&
    (b4.value == "x" || b4.value == "X") &&
    (b7.value == "x" || b7.value == "X")
  ) {
    result.innerText += "player 'X' has won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (
    (b2.value == "x" || b2.value == "X") &&
    (b5.value == "x" || b5.value == "X") &&
    (b8.value == "x" || b8.value == "X")
  ) {
    result.innerText += "player 'X' has won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (
    (b3.value == "x" || b3.value == "X") &&
    (b6.value == "x" || b6.value == "X") &&
    (b9.value == "x" || b9.value == "X")
  ) {
    result.innerText += "player 'X' has won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (
    (b1.value == "x" || b1.value == "X") &&
    (b5.value == "x" || b5.value == "X") &&
    (b9.value == "x" || b9.value == "X")
  ) {
    result.innerText += "player 'X' has won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (
    (b3.value == "x" || b3.value == "X") &&
    (b5.value == "x" || b5.value == "X") &&
    (b7.value == "x" || b7.value == "X")
  ) {
    result.innerText += "player 'X' has won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  }
  //condition for 'O'
  else if (
    (b1.value == "o" || b1.value == "O") &&
    (b2.value == "o" || b2.value == "O") &&
    (b3.value == "o" || b3.value == "O")
  ) {
    result.innerText += "player 'O' has won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (
    (b4.value == "o" || b4.value == "O") &&
    (b5.value == "o" || b5.value == "O") &&
    (b6.value == "o" || b6.value == "O")
  ) {
    result.innerText += "player 'O' has won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (
    (b7.value == "o" || b7.value == "O") &&
    (b8.value == "o" || b8.value == "O") &&
    (b9.value == "o" || b9.value == "O")
  ) {
    result.innerText += "player 'O' has won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (
    (b1.value == "o" || b1.value == "O") &&
    (b4.value == "o" || b4.value == "O") &&
    (b7.value == "o" || b7.value == "O")
  ) {
    result.innerText += "player 'O' has won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (
    (b2.value == "o" || b2.value == "O") &&
    (b5.value == "o" || b5.value == "O") &&
    (b8.value == "o" || b8.value == "O")
  ) {
    result.innerText += "player 'O' has won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (
    (b3.value == "o" || b3.value == "O") &&
    (b6.value == "o" || b6.value == "O") &&
    (b9.value == "o" || b9.value == "O")
  ) {
    result.innerText += "player 'O' has won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (
    (b1.value == "o" || b1.value == "O") &&
    (b5.value == "o" || b5.value == "O") &&
    (b9.value == "o" || b9.value == "O")
  ) {
    result.innerText += "player 'O' has won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (
    (b3.value == "o" || b3.value == "O") &&
    (b5.value == "o" || b5.value == "O") &&
    (b7.value == "o" || b7.value == "O")
  ) {
    result.innerText += "player 'O' has won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  }
}


function resultbtn() {
  b1.value = "";
  b2.value = "";
  b3.value = "";
  b4.value = "";
  b5.value = "";
  b6.value = "";
  b7.value = "";
  b8.value = "";
  b9.value = "";
  b1.disabled = false;
  b2.disabled = false;
  b3.disabled = false;
  b4.disabled = false;
  b5.disabled = false;
  b6.disabled = false;
  b7.disabled = false;
  b8.disabled = false;
  b9.disabled = false;
}
