
var numberOfButtons = document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
	.addEventListener("click", function() {
	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}

document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
    });

    function sound(key) {
        switch (key) {
            case "w":
            var sound1 = new Audio("/drumkit-task/audio/drum-roll-please-6386.mp3");
            sound1.play();
            break;
        
            case "a":
            var sound2 = new Audio("/drumkit-task/audio/drum-roll-please-6386.mp3");
            sound2.play();
            break;
        
            case "s":
            var sound3 = new Audio('/drumkit-task/audio/mixkit-falling-on-metal-roof-752.wav');
            sound3.play();
            break;
        
            case "d":
            var sound4 = new Audio('/drumkit-task/audio/mixkit-falling-on-metal-roof-752.wav');
            sound4.play();
            break;
        
            case "j":
            var sound5 = new Audio('/drumkit-task/audio/drum-roll-please-6386.mp3');
            sound5.play();
            break;
        
            case "k":
            var sound6 = new Audio('/drumkit-task/audio/cymbal-big2-83942.mp3');
            sound6.play();
            break;
        
            case "l":
            var sound7 = new Audio('/drumkit-task/audio/mixkit-apocalyptic-stomp-impact-3057.wav');
            sound7.play();
            break;
        
            default: console.log(key);
        }
        }

        function animation(currentKey) {
            var activeButton = document.querySelector("." + currentKey);
            
            activeButton.classList.add("add");
            
            setTimeout(function() {
                activeButton.classList.remove("add");
            }, 100);
            }
            
        