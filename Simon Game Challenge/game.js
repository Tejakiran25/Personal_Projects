let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern =  [];
let userClickedPattern = [];

let level = 0;
let started = false;

$(document).keydown(function() {
    if(!started) {
        $("#level-title").text("level "+level);
        nextSequence();
        started = true;
    }
});

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("level "+level);

    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
};

function playSound(colour) {
    let audio = new Audio("sounds/"+colour+".mp3");
    audio.play();
};

function animatePress(currentColour) {
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed");
    },100);
};

$(".btn").click(function() {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence(),1000);
        }
    } else {
        playSound("wrong");
        
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        },200);
        
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
};

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}