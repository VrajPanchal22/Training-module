var numberofButtons = document.querySelectorAll("button").length;
for (var j = 0; j < numberofButtons; j++) {
  document.querySelectorAll("button")[j].addEventListener("click", function () {
    var buttonstyle = this.innerHTML;
    sound(buttonstyle);
    animation(buttonstyle);
  });
}
document.addEventListener("keypress", function (event) {
  sound(event.key);
  animation(event.key);
});
function sound(key) {
  switch (key) {
    case "w":
      var sound1 = new Audio("sounds/Bass_drum.mp3");
      console.log("w key Pressed");
      sound1.play();
      break;
    case "a":
      var sound2 = new Audio("sounds/Cymbal.mp3");
      console.log("a key Pressed");
      sound2.play();
      break;
    case "s":
      var sound3 = new Audio("sounds/kickdrum.wav");
      console.log("s key Pressed");
      sound3.play();
      break;
    case "d":
      var sound4 = new Audio("sounds/SnareDrum.mp3");
      console.log("d key Pressed");
      sound4.play();
      break;
    case "j":
      var sound5 = new Audio("sounds/hangingdrum.wav");
      console.log("j key Pressed");
      sound5.play();
      break;
    case "k":
      var sound6 = new Audio("sounds/hihat.mp3");
      console.log("k key Pressed");
      sound6.play();
      break;
    case "l":
      var sound7 = new Audio("sounds/basspeddle.mp3");
      console.log("l key Pressed");
      sound7.play();
      break;
    default:
      console.log(key);
  }
}
function animation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("Animation");
  setTimeout(function () {
    activeButton.classList.remove("Animation");
  }, 100);
}
