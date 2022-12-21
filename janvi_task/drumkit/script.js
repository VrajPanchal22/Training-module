let get_instruments = document.getElementsByTagName('button');
let numberOfButtons = get_instruments.length;
var sound1 = document.getElementById('1');
var sound2 = document.getElementById('2');
var sound3 = document.getElementById('3');
var sound4 = document.getElementById('4');
var sound5 = document.getElementById('5');
var sound6 = document.getElementById('6');

for (var j = 0; j <numberOfButtons ; j++) {
  
    get_instruments[j]
      .addEventListener("click", function() {
        var buttonkey =this.getAttribute("id");
        console.log(buttonkey);
        sound(buttonkey);
        animation(buttonkey);
    });
  }
function song_duration(duration){
            return duration;
}
function sound(key) {
    switch (key) {
        case "instruments1":
        sound1.play();
        break;
    
        case "instruments2":
        sound2.play();
        break;
    
        case "instruments3":
        sound3.play();
        break;
    
        case "instruments4":
        sound4.play();
        break;
    
        case "instruments5":
        sound5.play();
        break;
    
        case "instruments6":
        sound6.play();
        break;
    
        default: console.log(key);
    }
    }


function animation(key){
   animate_instrument= document.getElementById(key);
   animate_instrument.classList.add('animation');
   setTimeout(()=>{
    animate_instrument.classList.remove('animation');
   }, 1000)
}
    