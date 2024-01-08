const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
let level = 0;

// const getButton = $("#" + randomChosenColor);

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

const nextSequence = function () {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  playSound(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  level++;
};

$(".btn").click(function () {
  const userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  console.log(userClickedPattern);
});

$(document).keypress(function () {
  nextSequence();
  $("h1").text(`Level ${level}`);
});
