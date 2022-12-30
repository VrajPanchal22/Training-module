var b1, b2, b3, b4, b5, b6, b7, b8, b9;
// Taking the Player 1 and Player 2 's symbols
document.getElementById("symbol1").value="X";
document.getElementById("symbol2").value="O";

var p1 = false;
var p2 = true;
// This function is to know the which player's move is there
function turn(id) {
  p1 = !p1;
  p2 = !p2;
  if (p1) {
    document.getElementById(`${id}`).value = "X";
    document.getElementById("Turn").innerHTML="Player 2 's Turn"
  } else {
    document.getElementById(`${id}`).value = "O";
    document.getElementById('Turn').innerHTML="Player 1 's Turn"
  }
}

// Targeting each cell element by id
function myfunction() {
  
 
  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
  b4 = document.getElementById("b4").value;
  b5 = document.getElementById("b5").value;
  b6 = document.getElementById("b6").value;
  b7 = document.getElementById("b7").value;
  b8 = document.getElementById("b8").value;
  b9 = document.getElementById("b9").value;

  // Checking of Player 1 winning

  if (b1 == "X" && b2 == "X" && b3 == "X") {
    document.getElementById("Turn").innerHTML = "PlayerX Won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;

    alert("Player X Won");
  } else if (b4 == "X" && b5 == "X" && b6 == "X") {
    document.getElementById("Turn").innerHTML = "PlayerX Won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("Player X Won");
  } else if (b7 == "X" && b8 == "X" && b9 == "X") {
    document.getElementById("Turn").innerHTML = "PlayerX Won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    alert("Player X Won");
  } else if (b1 == "X" && b4 == "X" && b7 == "X") {
    document.getElementById("Turn").innerHTML = "PlayerX Won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("Player X Won");
  } else if (b2 == "X" && b5 == "X" && b8 == "X") {
    document.getElementById("Turn").innerHTML = "PlayerX Won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("Player X Won");
  } else if (b3 == "X" && b6 == "X" && b9 == "X") {
    document.getElementById("Turn").innerHTML = "PlayerX Won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b2").disabled = true;
    alert("Player X Won");
  } else if (b1 == "X" && b5 == "X" && b9 == "X") {
    document.getElementById("Turn").innerHTML = "PlayerX Won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b2").disabled = true;
    alert("Player X Won");
  } else if (b3 == "X" && b5 == "X" && b7 == "X") {
    document.getElementById("Turn").innerHTML = "PlayerX Won";
    alert("Player X Won");
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  }

  // Checking for Player 2 win
  if (b1 == "O" && b2 == "O" && b3 == "O") {
    document.getElementById("Turn").innerHTML = "PlayerO Won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("Player O Won");
  } else if (b4 == "O" && b5 == "O" && b6 == "O") {
    document.getElementById("Turn").innerHTML = "PlayerO Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("Player O Won");
  } else if (b7 == "O" && b8 == "O" && b9 == "O") {
    document.getElementById("Turn").innerHTML = "PlayerO Won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("Player O Won");
  } else if (b1 == "O" && b4 == "O" && b7 == "O") {
    document.getElementById("Turn").innerHTML = "PlayerO Won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("Player O Won");
  } else if (b2 == "O" && b5 == "O" && b8 == "O") {
    document.getElementById("Turn").innerHTML = "PlayerO Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("Player O Won");
  } else if (b3 == "O" && b6 == "O" && b9 == "O") {
    document.getElementById("Turn").innerHTML = "PlayerO Won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b2").disabled = true;
    alert("Player O Won");
  } else if (b1 == "O" && b5 == "O" && b9 == "O") {
    document.getElementById("Turn").innerHTML = "PlayerO Won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b2").disabled = true;
    alert("Player O Won");
  } else if (b3 == "O" && b5 == "O" && b7 == "O") {
    document.getElementById("Turn").innerHTML = "PlayerO Won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("Player O Won");
  } else if (
    b1 == "0" &&
    b2 == "0" &&
    b3 == "0" &&
    b4 == "0" &&
    b5 == "0" &&
    b6 == "0" &&
    b7 == "0" &&
    b8 == "0" &&
    b9 == "0"
  ) {
    console.log("match Tied");
    document.getElementById("Turn").innerHTML = "Match Tie";
    document.getElementById("Turn").innerHTML = "PlayerO Won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("b3").disabled = true;
    alert("Match Tie");
  }
}
//Reset the game after it gets finished

function reset() {
  console.log("reloaded");
  location.reload();
  document.getElementById("symbol1").value = "";
  document.getElementById("symbol2").value = "";
  document.getElementById("b1").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("b3").value = "";
  document.getElementById("b4").value = "";
  document.getElementById("b5").value = "";
  document.getElementById("b6").value = "";
  document.getElementById("b7").value = "";
  document.getElementById("b8").value = "";
  document.getElementById("b9").value = "";
}
