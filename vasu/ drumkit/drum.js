



// const playMusic =(path)=>{
// const audio =new Audio(path);
// audio.play();

// }

var drum = document.querySelectorAll('.button').length;
for (var i = 0; i < drum; i++) {
    document.querySelectorAll(".button")[i]
    .addEventListener("click",function(){
        
        var buttonstyle=this.innerHTML;
        makesound(buttonstyle.toLowerCase())
        animate(buttonstyle.toLowerCase())
    });
}



document.addEventListener("keypress",function(event){
    makesound(event.key);
    animate(event.key);
})



function makesound(key){
    switch (key) {
        case "w":
            var sound1=new Audio("/ drumkit/audios/audio 1.mp3");
           sound1.play();
           console.log("w peressed")
            break;
        case "a":
            var sound2=new Audio("/ drumkit/audios/audio 2.mp3");
            sound2.play();
            break;
        case "s":
            var sound3=new Audio("/ drumkit/audios/audio 3.wav");
            sound3.play();
            break;
        case "d":
            var sound4=new Audio("/ drumkit/audios/audio 4.wav");
           sound4.play();
            break;
        case "j":
            var sound5=new Audio("/ drumkit/audios/audio 5.wav");
            sound5.play();
            break;
        case "k":
            var sound6=new Audio("/ drumkit/audios/audio 6.wav");
            sound6.play();
            break;
        case "l":
            var sound7=new Audio("/ drumkit/audios/audio 7.mp3");
            sound7.play();
            break;
            default:
                console.log(key);
    }
}
const animate = (key)=>{
    
    //var key1=`.${key}`
    var currentKey=document.querySelector(`.${key}`);
    
    console.log(currentKey)
    currentKey.classList.add('pressed')

    setTimeout(function(){
        currentKey.classList.remove('pressed');
    },250);

}
// function animation(currentKey){
    
//     activebutton.classList.add("animation");
//     setTimeout(function(){
//         activebutton.classList.remove("animation");
//     },250);
// }


