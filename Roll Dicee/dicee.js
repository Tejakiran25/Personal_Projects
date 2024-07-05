// var randomNumber1 = 0;
// var randomNumber2 = 0;
// var randomImageSrc1 = "";
// var randomImageSrc2 = "";
let started = false;

$(".roll").click(function() {
    if(!started) {
        roll();
        let audio = new Audio("sounds/dice-roll.mp3");
        audio.play();
        $(".roll").text("ROLL AGAIN");
    }
});

function roll() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImageSrc1 = "images/dice" + randomNumber1 + ".png";
    var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSrc1);

    let image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSrc2);

    let winner = document.querySelector("h1");
    
    if(randomNumber1 === randomNumber2) {
        winner.innerText = "Draw!..Roll Again";
    } else if (randomNumber1 > randomNumber2) {
        winner.innerText = "Player 1 Wins..!!";
    } else if (randomNumber1 < randomNumber2) {
        winner.innerText = "Player 2 Wins..!!";
    }    
}



