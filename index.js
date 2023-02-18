
var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var gameStarted = false
var level = 0

$(document).keydown(function () {
    if (!gameStarted) {
        gameStarted = true;
        $('h1').text(`Level 1`);
        setTimeout(function () {
            nextSequence()
        }, 500)
    }
})


$(".btn").on('click', function () {
    if (gameStarted) {
        var userChosenColour = this.id;
        userClickedPattern.push(userChosenColour);
        animatePress(userChosenColour, 0, 1);
        playSound(userChosenColour, 0, 1);
        if (patternsEqual(gamePattern, userClickedPattern, userClickedPattern.length)) {
            if (gamePattern.length === userClickedPattern.length) {
                setTimeout(function () {
                    nextSequence()
                }, 500)
            }

        } else {
            wrongPattern()
        }
    }

})

function wrongPattern() {
    new Audio('sounds/wrong.mp3').play();
    gamePattern = [];
    userClickedPattern = [];
    gameStarted = false;
    level = 0;
    $('h1').html("Wrong sequence! <br><br> Press A Key to Start");
    $('body').addClass('game-over');
    setTimeout(function () {
        $('body').removeClass('game-over')
    }, 300);
}

function patternsEqual(pattern1, pattern2, indexStop) {
    for (index in pattern1.slice(0, indexStop)) {
        if (pattern1[index] !== pattern2[index]) {
            return false
        }
    }
    return true
}

function nextSequence() {
    var counter = 0
    userClickedPattern = []
    let randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)

    level++
    $('h1').text(`Level ${level}`)
    gamePattern.forEach(function (color) {
        counter++
        animatePress(color, 200, counter);
        playSound(color, 200, counter);
    })
}

function animatePress(currentColour, timeSleep, timeSleepMultiplier) {

    setTimeout(function () {
        $(`#${currentColour}`).addClass('pressed');
    }, timeSleep * timeSleepMultiplier)

    setTimeout(function () {
        $(`#${currentColour}`).removeClass('pressed');
    }, timeSleep * timeSleepMultiplier + 100);
}

function playSound(soundName, timeSleep, timeSleepMultiplier) {
    setTimeout(function () {
        new Audio(`sounds/${soundName}.mp3`).play()
    }, timeSleep * timeSleepMultiplier)
}