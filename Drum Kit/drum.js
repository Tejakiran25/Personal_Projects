let noOfDrums = document.querySelectorAll(".drum").length;

//Clicking Event

for(var i=0; i<noOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let beat = this.innerHTML;
        musicBeats(beat);
        drumsAnimation(beat);
    });
}

//Keyboard Event

document.addEventListener("keydown", function (event) {
    musicBeats(event.key);
    drumsAnimation(event.key);
});

function musicBeats (key) {
    switch (key) {
        case 'w' :
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'k':
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case 'l':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default:
            console.log(beat);
    }
}

//Animation

function drumsAnimation (currentKey) {
    let pressedKey = document.querySelector("."+currentKey);
    pressedKey.classList.add("pressed");
    setTimeout(function() {
        pressedKey.classList.remove("pressed");
    },100);
}
// let audio = new Audio('sounds/tom-1.mp3');
// audio.play();