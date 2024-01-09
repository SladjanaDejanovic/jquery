const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

//////////// my way
// const playSound = function (color) {
//   const audio = $(`#audio-${color}`)[0];
//   audio.currentTime = 0;
//   audio.play();
//   console.log(audio);
// };

const playSound = function (name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

const animatePress = function (currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(() => $("#" + currentColor).removeClass("pressed"), 100);
};

const checkAnswer = function (currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("Successs");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => nextSequence(), 1000);
    }
  } else {
    $("body").addClass("game-over");
    setTimeout(() => $("body").removeClass("game-over"), 200);
    $("h1").text("Game over. Press any key to restart.");
    playSound("wrong");

    console.log("Wrong");
    startOver();
  }
};

// Starting the game
$(document).keypress(function () {
  if (!started) {
    $("h1").text("Level " + level);
    nextSequence();
    started = true;
  }
});

const nextSequence = function () {
  userClickedPattern = [];
  level++;
  $("h1").text("Level " + level);

  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  playSound(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  console.log(gamePattern);
};

$(".btn").click(function () {
  const userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);

  console.log(userClickedPattern);
});

const startOver = function () {
  gamePattern = [];
  userClickedPattern = [];
  started = false;
  level = 0;
};
