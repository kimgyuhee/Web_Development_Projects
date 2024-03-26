var gamePattern = [];
var randomChosenColour = [];

const buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  gamePattern.push(buttonColours[randomNumber]);
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

function f(btnId) {
  var clickColor = btnId.id;
  var link = "./sounds/" + clickColor + ".mp3";
  var audio = new Audio(link);
  audio.play();
  randomChosenColour.push(clickColor);
  console.log(randomChosenColour);
}
