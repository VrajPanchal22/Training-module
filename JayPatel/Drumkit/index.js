// create list and obj to get element by key
drumList = document.getElementById("band").children;
drumObj = {
    "w": 0,
    "a": 1,
    "s": 2,
    "d": 3,
    "j": 4,
    "k": 5,
    "l": 6,
}

// Keypress
document.addEventListener("keypress", (event) => {
    key = event.key.toLowerCase();

    if ("wasdjkl".indexOf(key) != -1) {
        blink(drumList[drumObj[key]])
        sound(key);
    }
})

// click event
document.getElementById('band').addEventListener("click", (event) => {
    if (event.target.id != "band") {
        blink(event.target)
        sound(event.target.innerHTML)
    }
})

// to blink button when click or pressed
function blink(target) {
    target.classList.add("action")

    setTimeout(() => {
        target.classList.remove("action")
    }, 100)
}

// generate sound
function sound(key) {
    // console.log(key)

    let audio;


    switch (key) {
        case 'w': audio = new Audio("sounds/tom-w.mp3");
            audio.play();
            break;
        case 'a': audio = new Audio("sounds/tom-a.mp3");
            audio.play();
            break;
        case 's': audio = new Audio("sounds/tom-s.mp3");
            audio.play();
            break;
        case 'd': audio = new Audio("sounds/tom-d.mp3");
            audio.play();
            break;
        case 'j': audio = new Audio("sounds/tom-j.mp3");
            audio.play();
            break;
        case 'k': audio = new Audio("sounds/tom-k.mp3");
            audio.play();
            break;
        case 'l': audio = new Audio("sounds/tom-l.mp3");
            audio.play();
            break;
    }
}