var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber
}

var randomChosenColour = buttonColours[nextSequence()]
console.log(randomChosenColour)

gamePattern.push(randomChosenColour)
console.log(gamePattern)

$(`div#${randomChosenColour}`).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(100);

new Audio(`sounds/${randomChosenColour}.mp3`).play()