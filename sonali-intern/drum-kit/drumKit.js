let getTools = document.getElementsByTagName('button');
let numberOfButtons = getTools.length;

var audio1 = document.getElementById('1');
var audio2 = document.getElementById('2');
var audio3 = document.getElementById('3');
var audio4 = document.getElementById('4');
var audio5 = document.getElementById('5');

for (var i = 0; i < numberOfButtons; i++) {
    getTools[i].addEventListener("click", function(){
        var buttonKey = this.getAttribute('id');
        console.log(buttonKey)
        sound(buttonKey)
    });
}

function sound(key) {
    switch (key) {
        case "s":
            audio1.play();
            console.log("working")
            break;

        case "o":
            audio2.play();
            break;

        case "n":
            audio3.play();
            break;

        case "a":
            audio4.play();
            break;

        case "l":
            audio5.play();
            break;

        default: console.log(key);
    }
}





